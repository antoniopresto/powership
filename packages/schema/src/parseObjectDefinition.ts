import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { isProduction } from '@darch/utils/lib/env';
import { getKeys } from '@darch/utils/lib/getKeys';
import { getTypeName } from '@darch/utils/lib/getTypeName';
import { inspectObject } from '@darch/utils/lib/inspectObject';
import { simpleObjectClone } from '@darch/utils/lib/simpleObjectClone';

import { GraphType } from './GraphType/GraphType';
import { isObject, ObjectType } from './ObjectType';
import { FieldDefinitionConfig, ObjectDefinitionInput } from './TObjectConfig';
import { fieldInstanceFromDef } from './fieldInstanceFromDef';
import { AnyField } from './fields/AnyField';
import { isFieldInstance, TAnyFieldType } from './fields/FieldType';
import { LiteralField } from './fields/LitarealField';
import {
  createEmptyMetaField,
  isMetaField,
  MetaField,
  objectMetaFieldKey,
} from './fields/MetaFieldField';
import { CommonFieldDefinition } from './fields/_fieldDefinitions';
import { FinalFieldDefinition } from './fields/_parseFields';
import { types } from './fields/fieldTypes';
import {
  isStringFieldDefinition,
  parseStringDefinition,
} from './parseStringDefinition';

export function parseObjectField<T extends FieldDefinitionConfig>(
  fieldName: string,
  definition: T
): FinalFieldDefinition;

export function parseObjectField<T extends FieldDefinitionConfig>(
  fieldName: string,
  definition: T,
  returnInstance: true
): TAnyFieldType;

export function parseObjectField<T extends FieldDefinitionConfig>(
  fieldName: string,
  definition: T,
  returnInstance = false
): TAnyFieldType | FinalFieldDefinition {
  const parsed = simpleObjectClone(parseFieldDefinitionConfig(definition));

  const instanceFromDef = fieldInstanceFromDef(parsed);

  setCachedFieldInstance(parsed, instanceFromDef);

  if (instanceFromDef.def) {
    parsed.def = instanceFromDef.def;
  }

  if (returnInstance) {
    return instanceFromDef;
  }

  if (parsed) return parsed;

  throw new RuntimeError(`field "${fieldName}": invalid definition.`, {
    parsed,
    definition,
  });
}

export function parseFieldDefinitionConfig(
  definition: FieldDefinitionConfig
): FinalFieldDefinition {
  function _parseField() {
    if (LiteralField.isFinalTypeDef(definition)) {
      return {
        type: 'literal',
        def: definition.def,
        optional: !!definition.optional,
        list: !!definition.list,
        description: definition.description,
        defaultValue: definition.defaultValue,
      };
    }

    if (GraphType.is(definition)) {
      return parseFieldDefinitionConfig(definition.definition);
    }

    if (GraphType.isTypeDefinition(definition)) {
      const {
        list = false,
        optional = false,
        description,
        defaultValue,
        type: {
          definition: { type, def, defaultValue: _defaultValue },
        },
      } = definition;

      return {
        type,
        def,
        list,
        defaultValue: defaultValue === undefined ? _defaultValue : defaultValue,
        optional,
        description,
      };
    }

    if (isStringFieldDefinition(definition)) {
      return parseStringDefinition(definition);
    }

    if (isFieldInstance(definition)) {
      return definition.asFinalFieldDef;
    }

    if (isFinalFieldDefinition(definition)) {
      if (definition.type === 'object') {
        if (typeof definition.def !== 'object' || !definition.def) {
          throw new RuntimeError(`Missing def for object field.`, {
            definition,
          });
        }

        if (isObject(definition.def)) {
          definition.def = definition.def.definition;
        } else {
          definition.def = parseObjectDefinition(definition.def).definition;
        }
      }

      if (definition.type === 'union') {
        let isOptionalUnion = definition.optional;

        definition.def = definition.def.map((el) => {
          const parsed = parseFieldDefinitionConfig(el);
          if (parsed.optional) isOptionalUnion = true;
          return parsed;
        });

        definition.optional = isOptionalUnion;
      }

      return definition;
    }

    if (isListDefinition(definition)) {
      const parsed = parseFieldDefinitionConfig(definition[0]);
      parsed.list = true;
      parsed.optional = false;
      return parsed;
    }

    if (isObject(definition)) {
      return {
        defaultValue: undefined,
        type: 'object',
        def: definition.definition,
        optional: false,
        list: false,
        description: definition.description,
      };
    }

    if (isObjectAsTypeDefinition(definition)) {
      return {
        type: 'object',
        def: definition.type.definition,
        optional: !!definition.optional,
        list: !!definition.list,
        description: definition.type.description,
        defaultValue: undefined,
      };
    }

    const keyObjectDefinition = parseFlattenFieldDefinition(definition);
    if (keyObjectDefinition) {
      return keyObjectDefinition;
    }

    throw new Error(
      `Unexpected field definition: ${inspectObject(definition)}`
    );
  }

  return simpleObjectClone(_parseField());
}

export function parseObjectDefinition<T extends ObjectDefinitionInput>(
  input: T,
  options: {
    omitMeta?: boolean;
  } = {}
): {
  definition: { [key: string]: FinalFieldDefinition };
  meta: MetaField['asFinalFieldDef'];
} {
  const { omitMeta } = options;

  const result = {} as { [key: string]: FinalFieldDefinition };

  let meta: MetaField['asFinalFieldDef'] | undefined = undefined;

  getKeys(input).forEach(function (fieldName) {
    try {
      const item = input[fieldName];

      if (isMetaField(item, fieldName)) {
        return (meta = item);
      }

      return (result[fieldName] = parseObjectField(
        fieldName,
        (input as any)[fieldName]
      ));
    } catch (err: any) {
      debugger;
      throw new RuntimeError(
        `Failed to process object field "${fieldName}":\n${err.message}`,
        {
          err: err.stack,
          input,
        }
      );
    }
  });

  meta = meta || createEmptyMetaField();

  if (!omitMeta) {
    result[objectMetaFieldKey] = meta;
  }

  return {
    definition: result,
    meta,
  };
}

function isFinalFieldDefinition(input: any): input is FinalFieldDefinition {
  return typeof input?.type === 'string';
}

function isListDefinition(input: any): input is [FieldDefinitionConfig] {
  if (Array.isArray(input) && input.length === 1) return true;

  if (!isProduction()) {
    // verify against old enum definition
    input?.forEach?.((el) => {
      if (typeof el === 'string' && !isStringFieldDefinition(el)) {
        throw new Error(
          `Plain array is used only for union definitions.\n` +
            `  "${el}" is not valid as union item.\n` +
            `  You can use { enum: ['${el}'] } instead of ['${el}'].`
        );
      }
    });
  }

  return false;
}

/**
 * Object as field['type'] is deprecated
 * @param input
 */
export function isObjectAsTypeDefinition(
  input: any
): input is CommonFieldDefinition<ObjectType<any>> {
  return input && typeof input === 'object' && isObject(input.type);
}

const validFlattenDefinitionKeys = {
  defaultValue: 'any',
  description: 'string',
  optional: 'boolean',
  list: 'boolean',
} as const;

export function parseFlattenFieldDefinition(
  input: any
): FinalFieldDefinition | false {
  if (getTypeName(input) !== 'Object') return false;
  if (input.type !== undefined) return false;
  const keys = Object.keys(input);
  if (keys.length > 5) return false;

  let type;
  let def;

  for (let k in input) {
    const valueOfDefOrOptionalOrListOrDescription = input[k];

    if (types[k]) {
      type = k;
      def = valueOfDefOrOptionalOrListOrDescription;

      if (k !== 'object' && def && typeof def === 'object') {
        for (let defKey in def) {
          if (defKey === 'def' || validFlattenDefinitionKeys[defKey]) {
            console.warn(`using field def as type definition?\n`, {
              type: k,
              def,
            });
            return false;
          }
        }
      }
    } else {
      if (valueOfDefOrOptionalOrListOrDescription !== undefined) {
        const acceptAny = validFlattenDefinitionKeys[k] === 'any';

        if (
          !acceptAny &&
          // checking if the de `optional` or `list` or `description`
          // has the expected types
          typeof valueOfDefOrOptionalOrListOrDescription !==
            validFlattenDefinitionKeys[k]
        ) {
          return false;
        }
      }
    }
  }

  let { description, optional = false, list = false, defaultValue } = input;

  return parseFieldDefinitionConfig({
    type,
    def,
    description,
    optional,
    list,
    defaultValue,
  });
}

export function __getCachedFieldInstance(
  field: FinalFieldDefinition & { [K: string]: any }
): AnyField {
  if (field?.__cachedFieldInstance) return field.__cachedFieldInstance;
  const parsed = parseFieldDefinitionConfig(field);
  const instanceFromDef = fieldInstanceFromDef(parsed);
  setCachedFieldInstance(parsed, instanceFromDef);
  return instanceFromDef;
}

function setCachedFieldInstance(field, instanceFromDef: TAnyFieldType) {
  Object.defineProperty(field, '__cachedFieldInstance', {
    value: instanceFromDef,
    enumerable: false,
    configurable: false,
    writable: false,
  });
}
