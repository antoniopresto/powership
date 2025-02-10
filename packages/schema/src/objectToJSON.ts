import { setByPath } from '@powership/utils';
import { BJSON } from '@powership/utils';
import { RuntimeError } from '@powership/utils';
import { expectedType } from '@powership/utils';
import { pick } from '@powership/utils';
import { getKeys } from '@powership/utils';
import { getTypeName } from '@powership/utils';
import { nonNullValues } from '@powership/utils';
import type { JSONSchema4 } from 'json-schema';

import type { FieldTypeName } from './fields/_fieldDefinitions';
import type {
  FinalFieldDefinition,
  FinalObjectDefinition,
  ObjectDefinitionInput,
} from './fields/_parseFields';
import {
  __getCachedFieldInstance,
  AliasField,
  createObjectType,
  isHiddenFieldName,
  isObjectType,
  LiteralField,
  ObjectLike,
  parseField,
  parseObjectField,
  parseTypeName,
} from './types';

export type ObjectToJSONOptions = {
  ignoreDefaultValues?: boolean;
};

/**
 * Converts an object to a json-schema format
 * @param parentName
 * @param object
 * @param options
 */
export function objectToJSON(
  parentName: string,
  object: ObjectLike | ObjectDefinitionInput,
  options: ObjectToJSONOptions = { ignoreDefaultValues: true }
): JSONSchema4 & { properties: JSONSchema4 } {
  let definition: FinalObjectDefinition;

  if (isObjectType(object)) {
    definition = object.definition as FinalObjectDefinition;
  } else {
    // @ts-ignore
    definition = createObjectType(object as ObjectDefinitionInput).definition;
  }

  const description = isObjectType(object) ? object.description : undefined;

  const topProperties: Record<string, JSONSchema4> = {};
  const required: string[] = [];

  const topJSON: JSONSchema4 & { properties: JSONSchema4 } = {
    additionalProperties: false,
    properties: topProperties,
    required,
    title: parentName,
    type: 'object',
  };

  if (description) {
    topJSON.description = description;
  }

  const composers: ParsedField['composers'] = [];
  getKeys(definition).forEach((fieldName) => {
    if (isHiddenFieldName(fieldName)) return;
    const field = definition[fieldName];
    if (field.hidden) return;

    const parsedField = parseGraphQLField({
      field,
      fieldName,
      options,
      parentName,
    });

    if (parsedField.required) {
      required.push(fieldName);
    }

    topProperties[fieldName] = parsedField.jsonItem;

    composers.push(...parsedField.composers);
  });

  composers.forEach((composer) => {
    const value = composer.compose(topProperties);
    setByPath(topProperties, composer.key, value);
  });

  return topJSON;
}

type ParsedField = {
  composers: { compose: (parent: JSONSchema4) => JSONSchema4; key: string }[];
  jsonItem: JSONSchema4;
  required: boolean;
};

function parseGraphQLField(params: {
  field: FinalFieldDefinition;
  fieldName: string;
  options: ObjectToJSONOptions;
  parentName: string | null;
}): ParsedField {
  let { field, fieldName, parentName, options } = params;
  field = parseField(field);
  const { ignoreDefaultValues } = options;
  let { type, list, optional, description, defaultValue } = field;
  const composers: ParsedField['composers'] = [];

  nonNullValues({ type });

  let required = !optional && type !== 'undefined';

  const jsonItem: JSONSchema4 = {
    // title, // will generate extra types in typescript
  };

  if (ignoreDefaultValues) {
    defaultValue = undefined;
  }

  if (defaultValue !== undefined) {
    required = false;
    jsonItem.default = defaultValue;
  }

  if (description) {
    jsonItem.description = description;
  }

  if (type === 'array' || list) {
    const parsedListItem = parseGraphQLField({
      field:
        type === 'array'
          ? parseObjectField(fieldName, field.def.of)
          : { ...field, list: false },
      fieldName,
      options,
      parentName,
    });

    return {
      composers,
      jsonItem: {
        items: parsedListItem.jsonItem,
        type: 'array',
      },
      required: !optional,
    };
  }

  const typeParsers: { [K in FieldTypeName]: () => any } = {
    ID() {
      jsonItem.type = 'string';
      jsonItem.tsType = 'ID';
    },
    alias() {
      const type = __getCachedFieldInstance(field);
      AliasField.assert(type);

      composers.push({
        compose(parent) {
          if (typeof type.def === 'string') {
            return pick(parent, type.def) as any;
          } else {
            return parseGraphQLField({
              field: type.utils.fieldType.asFinalFieldDef,
              fieldName,
              options,
              parentName,
            }).jsonItem;
          }
        },
        key: fieldName,
      });
    },
    any() {
      jsonItem.type = 'any';
    },
    array() {
      // handled above
    },
    boolean() {
      jsonItem.type = 'boolean';
    },
    cursor() {
      jsonItem.type = 'object';
      jsonItem.tsType = 'Cursor';
    },
    date() {
      jsonItem.type = 'string';
      jsonItem.format = 'date-time';
      jsonItem.tsType = 'Date';
    },
    email() {
      jsonItem.type = 'string';
      jsonItem.tsType = 'Email';
    },
    enum() {
      const def = field.def as string[];
      expectedType({ def }, 'array');

      if (def.length == 1) {
        jsonItem.const = def[0];
      } else {
        jsonItem.type = 'string';
        jsonItem.enum = def;
      }
    },
    float() {
      jsonItem.type = 'number';
    },
    int() {
      jsonItem.type = 'integer';
    },
    literal() {
      if (!LiteralField.isFinalTypeDef(field)) throw 'err';
      const parsed =
        field.def['__o.proto__'] === 'String'
          ? field.def.value
          : BJSON.parse(field.def.value);

      jsonItem.const = parsed;

      const tsType = BJSON.stringify(parsed, {
        handler: ({ serializer, value }) => {
          const typeName = getTypeName(value);
          if (['Object', 'Array'].includes(typeName)) return;
          if (typeName === 'String') return JSON.stringify(value);
          if (typeName === 'Number') return value;
          return serializer?.formatter?.tsName(value) || typeName;
        },
        quoteValues: (str) => `${str}`,
      });

      jsonItem.tsType = tsType;
    },
    meta() {},
    null() {
      jsonItem.type = 'null';
    },
    object() {
      const objectName = parseTypeName({
        field,
        fieldName: '',
        parentName: parentName || '',
      });

      Object.assign(jsonItem, objectToJSON(objectName, field.def, options), {
        title: '',
      });
    },
    phone() {
      Object.assign(jsonItem, {
        maxLength: 20,
        minLength: 10,
      });

      jsonItem.tsType = 'Phone';
    },
    record() {
      if (field.type !== 'record' || !field.def) {
        throw new RuntimeError(`invalid record field definition.`, {
          fieldDef: field,
        });
      }

      jsonItem.type = 'object';
    },
    string() {
      jsonItem.type = 'string';
    },
    ulid() {
      jsonItem.type = 'string';
      jsonItem.tsType = 'Ulid';
    },
    undefined() {
      jsonItem.type = 'null';
    },
    union() {
      const def = field.def as FinalFieldDefinition[];
      expectedType({ def }, 'array');

      jsonItem.anyOf = def.map((type) => {
        return parseGraphQLField({
          field: type,
          fieldName,
          options,
          parentName,
        }).jsonItem;
      });
    },
    unknown() {
      jsonItem.type = 'any';
      jsonItem.tsType = 'unknown';
    },
  };

  if (!typeParsers[type]) {
    throw new RuntimeError(`invalid field type ${type}`, { field }, 0, 20);
  }

  typeParsers[type]();

  return { composers, jsonItem, required };
}
