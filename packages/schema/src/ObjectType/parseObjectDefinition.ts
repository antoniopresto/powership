import { RuntimeError } from '@swind/utils';
import { isProduction } from '@swind/utils';
import { getKeys } from '@swind/utils';
import { getTypeName } from '@swind/utils';
import { inspectObject } from '@swind/utils';

import { FieldExtraProps } from '../FieldExtraProps';
import { GraphType } from '../GraphType/GraphType';
import { FieldDefinitionConfig } from '../TObjectConfig';
import { fieldInstanceFromDef } from '../fieldInstanceFromDef';
import { isFieldInstance, TAnyFieldType } from '../fields/FieldType';
import { LiteralField } from '../fields/LiteralField';
import {
  createEmptyMetaField,
  isMetaField,
  MetaField,
  objectMetaFieldKey,
} from '../fields/MetaFieldField';
import { FieldDefinitionWithType } from '../fields/_fieldDefinitions';
import { FinalFieldDefinition } from '../fields/_parseFields';
import { types } from '../fields/fieldTypes';
import {
  isStringFieldDefinition,
  parseStringDefinition,
} from '../parseStringDefinition';

import {
  FieldAsString,
  FieldInput,
  FinalFieldDefinitionStrict,
  isObjectType,
  ObjectType,
  ShortenFinalFieldDefinition,
} from './ObjectType';
import { SchemaParser } from './SchemaParser';

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

export function parseObjectField(
  fieldName: string,
  definition: FieldDefinitionConfig,
  options: ParseFieldOptions = {}
) {
  let { returnInstance, asString, deep, omitMeta } = options;

  if (deep?.omitMeta) omitMeta = true;
  if (deep?.asString) asString = true;

  let parsed = parseFieldDefinitionConfig(definition, {
    deep,
    omitMeta,
  });

  if (typeof parsed === 'string') {
    return parsed;
  } else {
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

export function parseField(definition: FieldInput): FinalFieldDefinition {
  return parseObjectField('__parseField__', definition);
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
        hidden: definition.hidden,
        list: !!definition.list,
        optional: !!definition.optional,
        $: definition.$,
        type: 'literal',
      };
    }

    if (GraphType.is(definition)) {
      const def = parseFieldDefinitionConfig(definition.definition, { deep });
      def.hidden = def.hidden || definition.hidden;
      return def;
    }

    if (GraphType.isTypeDefinition(definition)) {
      const {
        list = false,
        optional = false,
        description,
        defaultValue,
        hidden,
        type: {
          definition: { type, def, defaultValue: _defaultValue, $ },
        },
      } = definition;

      return {
        def,
        defaultValue: defaultValue === undefined ? _defaultValue : defaultValue,
        description,
        hidden,
        list,
        optional,
        type,
        $,
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

        if (isObjectType(definition.def)) {
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

      if (definition.type === 'alias') {
        if (typeof definition.def === 'object') {
          definition.def.type = parseFieldDefinitionConfig(
            definition.def.type,
            {
              deep,
            }
          );

          validFlattenDefinitionKeysList.forEach((k) => {
            if (definition[k] !== undefined) {
              // @ts-ignore
              definition.def.type[k] = definition[k];
            }
          });
        }
      }

      return definition;
    }

    if (isListDefinition(definition)) {
      const parsed = parseFieldDefinitionConfig(definition[0], { deep });
      parsed.list = true;
      parsed.optional = false;
      return parsed;
    }

    if (isObjectType(definition)) {
      return {
        def: deep
          ? parseObjectDefinition(definition.definition, { deep })
          : definition.definition,
        defaultValue: undefined,
        description: definition.description,
        hidden: definition.hidden,
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
        hidden: definition.hidden || definition.type.hidden,
        list: !!definition.list,
        name: definition.name,
        $: definition.$,
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
        'name' in definition &&
        definition.name &&
        typeof definition.name === 'string'
      ) {
        result.name = definition.name;
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

    // return simpleObjectClone(result);
    return result;
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
  custom?: FieldExtraProps;
};

export function parseObjectDefinition(
  input: Record<string, any>,
  options: Omit<ParseFieldOptions, 'returnInstance'> = {}
): ParseResult {
  const parser = new SchemaParser(options);
  return parser.parse(input, null);
}

function isFinalFieldDefinition(
  input: any
): input is FinalFieldDefinitionStrict {
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
): input is FieldDefinitionWithType<ObjectType<any>> {
  return input && typeof input === 'object' && isObjectType(input.type);
}

const validFlattenDefinitionKeys = {
  defaultValue: 'any',
  description: 'string',
  hidden: 'boolean',
  list: 'boolean',
  name: 'string',
  optional: 'boolean',
  $: 'object',
} as const;

const validFlattenDefinitionKeysList = getKeys(validFlattenDefinitionKeys);

export function parseFlattenFieldDefinition(
  input: any,
  options: ParseFieldOptions = {}
): FinalFieldDefinition | false {
  const { getField, definition } = new SchemaParser(options).parse(
    { def: input },
    null
  );
  if (options.returnInstance) {
    return getField('def');
  }
  return definition.def;
}

export const CACHED_FIELD_INSTANCE_KEY = '__cachedFieldInstance';

export function __getCachedFieldInstance(
  field: FinalFieldDefinition & { [K: string]: any }
): TAnyFieldType {
  if (field?.[CACHED_FIELD_INSTANCE_KEY]) {
    return field[CACHED_FIELD_INSTANCE_KEY];
  }

  const parsed = parseFieldDefinitionConfig(field);
  const instanceFromDef = fieldInstanceFromDef(parsed);
  setCachedFieldInstance(parsed, instanceFromDef);
  return instanceFromDef;
}

function hasCachedFieldInstance(field: any): FinalFieldDefinition | null {
  return !!field?.[CACHED_FIELD_INSTANCE_KEY] ? field : null;
}

function setCachedFieldInstance(field, instanceFromDef: TAnyFieldType) {
  if (hasCachedFieldInstance(field)) return;

  Object.defineProperty(field, CACHED_FIELD_INSTANCE_KEY, {
    configurable: false,
    enumerable: false,
    value: instanceFromDef,
    writable: false,
  });
}

export function deleteCachedFieldInstance<T>(def: T): T {
  if (!def || typeof def !== 'object') return def;
  const { [CACHED_FIELD_INSTANCE_KEY]: _, ...rest } = def as any;
  return rest as any;
}
