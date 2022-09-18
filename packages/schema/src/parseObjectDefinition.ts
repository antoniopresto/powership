import { RuntimeError } from '@brabo/utils/lib/RuntimeError';
import { isProduction } from '@brabo/utils/lib/env';
import { getKeys } from '@brabo/utils/lib/getKeys';
import { getTypeName } from '@brabo/utils/lib/getTypeName';
import { inspectObject } from '@brabo/utils/lib/inspectObject';
import { simpleObjectClone } from '@brabo/utils/lib/simpleObjectClone';

import { GraphType } from './GraphType/GraphType';
import {
  FieldAsString,
  isObject,
  ObjectType,
  ShortenFinalFieldDefinition,
} from './ObjectType';
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

export function parseObjectField<
  T extends FieldDefinitionConfig,
  Options extends ParseFieldOptions
>(
  fieldName: string,
  definition: T,
  options: Options
): [Options['returnInstance']] extends [true]
  ? TAnyFieldType
  : [Options['asString']] extends [true]
  ? FieldAsString
  : FinalFieldDefinition;

export function parseObjectField<T extends FieldDefinitionConfig>(
  fieldName: string,
  definition: T
): FinalFieldDefinition;

/**
 * @deprecated use the object options instead of true
 * @param fieldName
 * @param definition
 * @param options
 */
export function parseObjectField<T extends FieldDefinitionConfig>(
  fieldName: string,
  definition: T,
  options: true // deprecated
): TAnyFieldType;

export function parseObjectField(fieldName, definition, options = {}) {
  let { returnInstance, asString, deep, omitMeta } = (
    options === true ? { returnInstance: true } : options
  ) as ParseFieldOptions;

  if (deep?.omitMeta) omitMeta = true;
  if (deep?.asString) asString = true;

  let parsed = parseFieldDefinitionConfig(definition, { deep, omitMeta });

  if (typeof parsed === 'string') {
    return parsed;
  } else {
    parsed = simpleObjectClone(parsed);
    if (asString) return parsed;
  }

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
    definition,
    parsed,
  });
}

const stringifiableDefKeys = new Set([
  'type',
  'list',
  'optional', //
]);

export function parseFieldDefinitionConfig<
  T extends FieldDefinitionConfig,
  Options extends ParseFieldOptions
>(
  definition: T,
  options?: Options
): [Options['asString']] extends [true]
  ? FieldAsString | FinalFieldDefinition | ShortenFinalFieldDefinition
  : FinalFieldDefinition {
  let { deep, asString } = options || {};

  if (deep?.asString) {
    asString = true;
  }

  function _parseField(): FinalFieldDefinition {
    if (LiteralField.isFinalTypeDef(definition)) {
      return {
        def: definition.def,
        defaultValue: definition.defaultValue,
        description: definition.description,
        list: !!definition.list,
        optional: !!definition.optional,
        type: 'literal',
      };
    }

    if (GraphType.is(definition)) {
      return parseFieldDefinitionConfig(definition.definition, { deep });
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
        def,
        defaultValue: defaultValue === undefined ? _defaultValue : defaultValue,
        description,
        list,
        optional,
        type,
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
          definition.def = parseObjectDefinition(definition.def, {
            deep,
          }).definition;
        }
      }

      if (definition.type === 'union') {
        let isOptionalUnion = definition.optional;

        definition.def = definition.def.map((el) => {
          const parsed = parseFieldDefinitionConfig(el, { deep });
          if (parsed.optional) isOptionalUnion = true;
          return parsed;
        });

        definition.optional = isOptionalUnion;
      }

      return definition;
    }

    if (isListDefinition(definition)) {
      const parsed = parseFieldDefinitionConfig(definition[0], { deep });
      parsed.list = true;
      parsed.optional = false;
      return parsed;
    }

    if (isObject(definition)) {
      return {
        def: deep
          ? parseObjectDefinition(definition.definition, { deep })
          : definition.definition,
        defaultValue: undefined,
        description: definition.description,

        type: 'object',
      };
    }

    if (isObjectAsTypeDefinition(definition)) {
      return {
        def: deep
          ? parseObjectDefinition(definition.type.definition, { deep })
          : definition.type.definition,
        defaultValue: undefined,
        description: definition.type.description,
        list: !!definition.list,
        optional: !!definition.optional,
        type: 'object',
      };
    }

    const keyObjectDefinition = parseFlattenFieldDefinition(definition, {
      deep,
    });

    if (keyObjectDefinition) {
      return keyObjectDefinition;
    }

    throw new Error(
      `Unexpected field definition: ${inspectObject(definition)}`
    );
  }

  try {
    const result = _parseField();

    if (definition && typeof definition === 'object') {
      if (
        'alias' in definition &&
        definition.alias &&
        typeof definition.alias === 'string'
      ) {
        result.alias = definition.alias;
      }
    }

    let hasNotStringifiableKeys = false;
    let hasDef = false;
    Object.entries(result).forEach(([k, v]) => {
      if (v === undefined || v === false) {
        delete result[k]; // deleting nullish values
        return;
      }

      if (k === 'def') {
        hasDef = true;
        return;
      }

      if (hasNotStringifiableKeys || !stringifiableDefKeys.has(k)) {
        hasNotStringifiableKeys = true;
      }
    });

    if (asString && !hasNotStringifiableKeys) {
      const { type, list, optional, def } = result;

      let _type: FieldAsString = type;
      if (list) _type = `[${_type}]`;
      if (optional) _type = `${_type}?`;

      if (hasDef) {
        // @ts-ignore
        return { [_type]: def };
      } else {
        // @ts-ignore
        return _type;
      }
    }

    return simpleObjectClone(result);
  } catch (e) {
    debugger;
    console.error(e, definition);
    throw e;
  }
}

export type ParseFieldOptions = {
  asString?: boolean;
  deep?: {
    asString?: boolean;
    omitMeta?: boolean;
  };
  omitMeta?: boolean;
  returnInstance?: boolean;
};

type ParseResult = {
  definition: { [key: string]: FinalFieldDefinition };
  meta?: MetaField['asFinalFieldDef'];
};

export function parseObjectDefinition<T extends ObjectDefinitionInput>(
  input: T,
  options: ParseFieldOptions = {}
): ParseResult {
  let { deep, omitMeta } = options;

  if (deep?.omitMeta) {
    omitMeta = true;
  }

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
        (input as any)[fieldName],
        { deep }
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
  alias: 'string',
  defaultValue: 'any',
  description: 'string',
  list: 'boolean',
  optional: 'boolean',
} as const;

export function parseFlattenFieldDefinition(
  input: any,
  options: ParseFieldOptions = {}
): FinalFieldDefinition | false {
  const { deep } = options;

  if (getTypeName(input) !== 'Object') return false;
  if (input.type !== undefined) return false;

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
              def,
              type: k,
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

  let {
    description,
    optional = false,
    list = false,
    defaultValue,
    alias,
  } = input;

  return parseFieldDefinitionConfig(
    {
      alias,
      def,
      defaultValue,
      description,
      list,
      optional,
      type,
    },
    { deep }
  );
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
    configurable: false,
    enumerable: false,
    value: instanceFromDef,
    writable: false,
  });
}
