import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { expectedType } from '@darch/utils/lib/expectedType';
import { getKeys } from '@darch/utils/lib/getKeys';
import { nonNullValues } from '@darch/utils/lib/invariant';
import { JSONSchema4 } from 'json-schema';

import { createObjectType, isObject } from './ObjectType';
import { ObjectDefinitionInput } from './TObjectConfig';
import { ObjectLike } from './fields/IObjectLike';
import { isMetaFieldKey } from './fields/MetaFieldField';
import { FieldTypeName } from './fields/_fieldDefinitions';
import {
  FinalFieldDefinition,
  FinalObjectDefinition,
} from './fields/_parseFields';
import { parseFieldDefinitionConfig } from './parseObjectDefinition';
import { parseTypeName } from './parseTypeName';

/**
 * Converts an object to a json-schema format
 * @param parentName
 * @param object
 */
export function objectToJSON(
  parentName: string,
  object: ObjectLike | ObjectDefinitionInput
): JSONSchema4 & { properties: JSONSchema4 } {
  let definition: FinalObjectDefinition;

  if (isObject(object)) {
    definition = object.definition as FinalObjectDefinition;
  } else {
    definition = createObjectType(object as ObjectDefinitionInput).definition;
  }

  const description = isObject(object) ? object.description : undefined;

  const topProperties: Record<string, JSONSchema4> = {};
  const required: string[] = [];

  const topJSON: JSONSchema4 & { properties: JSONSchema4 } = {
    title: parseTypeName({
      parentName: parentName,
      fieldName: '',
      field: { type: 'object', def: object },
    }),
    type: 'object',
    properties: topProperties,
    required,
    additionalProperties: false,
  };

  if (description) {
    topJSON.description = description;
  }

  getKeys(definition).forEach((fieldName) => {
    if (isMetaFieldKey(fieldName)) return;

    const parsedField = parseField({
      field: definition[fieldName] as any,
      fieldName,
      parentName,
    });
    if (parsedField.required) {
      required.push(fieldName);
    }
    topProperties[fieldName] = parsedField.jsonItem;
  });

  return topJSON;
}

type ParsedField = {
  jsonItem: JSONSchema4;
  required: boolean;
};

function parseField(params: {
  fieldName: string;
  field: FinalFieldDefinition;
  parentName: string | null;
}): ParsedField {
  const { field, fieldName, parentName } = params;
  const { type, optional, list, description } = field;

  nonNullValues({ type });

  const required = !optional && type !== 'undefined';

  const jsonItem: JSONSchema4 = {
    // title, // will generate extra types in typescript
  };

  if (description) {
    jsonItem.description = description;
  }

  if (list) {
    const parsedListItem = parseField({
      fieldName,
      field: { ...field, list: false },
      parentName,
    });

    return {
      required: !optional,
      jsonItem: {
        type: 'array',
        items: parsedListItem.jsonItem,
      },
    };
  }

  const typeParsers: { [K in FieldTypeName]: () => any } = {
    meta() {},

    null() {
      jsonItem.type = 'null';
    },
    boolean() {
      jsonItem.type = 'boolean';
    },
    undefined() {
      jsonItem.type = 'null';
    },
    any() {
      jsonItem.type = 'any';
    },
    cursor() {
      jsonItem.type = 'object';
      jsonItem.tsType = 'Cursor';
    },
    ID() {
      jsonItem.type = 'string';
      jsonItem.tsType = 'ID';
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
    string() {
      jsonItem.type = 'string';
    },
    ulid() {
      jsonItem.type = 'string';
      jsonItem.tsType = 'Ulid';
    },
    unknown() {
      jsonItem.type = 'any';
      jsonItem.tsType = 'unknown';
    },
    object() {
      const objectName = parseTypeName({
        parentName: parentName || '',
        fieldName: '',
        field,
      });

      Object.assign(jsonItem, objectToJSON(objectName, field.def), {
        title: '',
      });
    },
    union() {
      const def = field.def as FinalFieldDefinition[];
      expectedType({ def }, 'array');

      jsonItem.anyOf = def.map((type) => {
        return parseField({ field: type, fieldName, parentName }).jsonItem;
      });
    },
    record() {
      if (field.type !== 'record' || !field.def) {
        throw new RuntimeError(`invalid record field definition.`, {
          fieldDef: field,
        });
      }

      const def = field.def;
      const parsedType: any = parseFieldDefinitionConfig(def.type);

      const type = parseField({
        field: parsedType,
        fieldName,
        parentName,
      }).jsonItem;

      jsonItem.type = 'object';
      jsonItem.patternProperties = {
        // TODO key by number or string
        '.*': type,
      };
    },
  };

  if (!typeParsers[type]) {
    throw new RuntimeError(`invalid field type ${type}`, { field }, 0, 20);
  }

  typeParsers[type]();

  return { jsonItem, required };
}
