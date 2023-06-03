import { isPlainObject, keys, RuntimeError } from '@swind/utils';
import { getKeys } from '@swind/utils';
import { inspectObject } from '@swind/utils';

import { CircularDeps } from '../CircularDeps';
import type { FieldExtraProps } from '../FieldExtraProps';
import { GraphType } from '../GraphType/GraphType';
import type { SchemaDefinition } from '../TObjectConfig';
import { isFieldInstance } from '../fields/FieldType';
import type { TAnyFieldType } from '../fields/FieldType';
import type { MetaField } from '../fields/MetaFieldField';
import type { SelfReferenceFieldDef } from '../fields/SelfReferenceField';
import type { FieldDefinitionWithType } from '../fields/_fieldDefinitions';
import type {
  FieldDefinition,
  FinalFieldDefinition,
  FinalFieldDefinitionStrict,
} from '../fields/_parseFields';
import { AnyField, types } from '../fields/fieldTypes';
import { isObjectType } from '../objectInferenceUtils';
import {
  isStringFieldDefinition,
  parseStringDefinition,
} from '../parseStringDefinition';

import { ObjectType } from './ObjectType';

export interface ParseFieldContext {
  parentId?: string;
  parentObjectType?: any;
}

export class SchemaParser {
  options: ParseFieldOptions;

  constructor(options: ParseFieldOptions = {}) {
    const { deep, ...restOptions } = options;
    this.options = deep ? { ...restOptions, ...deep } : restOptions;
  }

  parse = (
    input: SchemaDefinition,
    context: ParseFieldContext | null
  ): ParseResult => {
    const { omitMeta } = this.options;

    const result = {} as { [key: string]: FinalFieldDefinition };

    let meta: MetaField['asFinalFieldDef'] | undefined = undefined;
    let extra: FieldExtraProps | undefined = undefined;

    const keys = getKeys(input);

    keys.forEach((fieldName) => {
      try {
        let field = input[fieldName];

        if (fieldName === '$') {
          // $ is a special schema field used to
          // include extra schema options
          // @ts-ignore
          return (extra = field);
        }

        if (CircularDeps.isMetaField(field, fieldName)) {
          return (meta = field);
        }

        const cached = hasCachedFieldInstance(field);
        if (cached) {
          return (result[fieldName] = cached);
        }

        return (result[fieldName] = this.parseObjectField(field, context));
      } catch (err: any) {
        throw new Error(
          `Failed to process object field "${fieldName}":\n${
            err.message
          }\n${inspectObject(input)}\n${err.stack}`
        );
      }
    });

    meta = meta || CircularDeps.createEmptyMetaField();

    if (meta) {
      meta.def.custom = extra;
    }

    if (!omitMeta) {
      result[CircularDeps.objectMetaFieldKey] = meta;
    }

    return {
      definition: result,
      meta,
      custom: extra,
      getField(field: string): TAnyFieldType {
        const value = result[field];
        if (!value) throw new Error(`Field "${field}" not found.`);
        const cached = value[CACHED_FIELD_INSTANCE_KEY];
        if (!cached) {
          throw new Error(`No cached field instance for "${field}" found.`);
        }
        return cached;
      },
    };
  };

  parseObjectField = (
    definition: FieldDefinition,
    context: ParseFieldContext | null
  ) => {
    let parsed = this.toFinalDefinition(definition, context);

    if (parsed[CACHED_FIELD_INSTANCE_KEY]) return parsed;

    Object.defineProperties(parsed, {
      [CACHED_FIELD_INSTANCE_KEY]: {
        get() {
          if (!CircularDeps.types[parsed.type]) {
            throw new RuntimeError(
              `invalid field definition. types["${parsed?.type}"] is undefined`,
              {
                definition: parsed,
              }
            );
          }

          const fieldConstructor = types[parsed.type] as typeof AnyField;

          let field = fieldConstructor.create(parsed.def, parsed);

          if (context) {
            field.setContext(context);
          }

          if (parsed.list) {
            // @ts-ignore
            field = field.toList(parsed.list);
          }

          if (parsed.optional) {
            // @ts-ignore
            field = field.toOptional();
          }

          if (parsed.name) {
            field.name = parsed.name;
          }

          if (parsed.hidden) {
            field.hidden = parsed.hidden;
          }

          if (parsed.defaultValue !== undefined) {
            field = field.setDefaultValue(parsed.defaultValue);
          }

          if (parsed.description) {
            field = field.describe(parsed.description);
          }

          if (parsed.$) {
            field.$ = parsed.$;
          }

          if (field.type === ('self' as any)) {
            // FIXME circular ref
            return field.def
          }

          return field;
        },
      },
    });

    return parsed;
  };

  toFinalDefinition = (
    definition: FieldDefinition,
    context: ParseFieldContext | null
  ): FinalFieldDefinition => {
    if (definition[CACHED_FIELD_INSTANCE_KEY]) {
      return definition[CACHED_FIELD_INSTANCE_KEY];
    }

    const parsers = [
      this.parser_stringDefinition,
      this.parser_fieldInstance,
      this.parser_finalFieldDefinition,
      this.parser_flattenDefinition,
      this.parser_objectType,
      this.parser_graphType,
      this.parser_objectAsType,
      this.parser_graphTypeInType,
      this.parser_listDefinition,
      this.parser_literalDefinition,
    ];

    for (let parser of parsers) {
      const parsed = parser(definition, context);
      if (parsed) {
        return deleteNullable(parsed);
      }
    }

    throw new Error(
      `Unexpected field definition: ${inspectObject(definition)}`
    );
  };

  parseFlattenFieldDefinition = (
    input: any,
    context: ParseFieldContext | null
  ): FinalFieldDefinition | false => {
    if (!isPlainObject(input)) return false;
    if (input.type !== undefined) return false;

    let type;
    let def;

    for (let k in input) {
      const valueOfDefOrOptionalOrListOrDescription = input[k];

      if (CircularDeps.types[k]) {
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
      name,
      hidden,
      $,
    } = input;

    return this.toFinalDefinition(
      {
        def,
        defaultValue,
        description,
        hidden,
        list,
        name,
        optional,
        $,
        type,
      },
      context
    );
  };

  parser_literalDefinition = (
    definition: FieldDefinition
  ): FinalFieldDefinition | void => {
    if (CircularDeps.LiteralField.isFinalTypeDef(definition)) {
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
  };

  parser_graphType = (
    definition: FieldDefinition,
    context: ParseFieldContext | null
  ): FinalFieldDefinition | void => {
    if (GraphType.is(definition)) {
      const def = this.toFinalDefinition(
        definition.definition,
        definition.__lazyGetter.objectType ?? context
      );
      def.hidden = def.hidden || definition.hidden;
      return def;
    }
  };

  // parsers def as { type: GraphType, optional: ...}
  parser_graphTypeInType = (
    definition: FieldDefinition,
    _context?: ParseFieldContext | null
  ): FinalFieldDefinition | void => {
    if (CircularDeps.GraphType.isTypeDefinition(definition)) {
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
  };

  parser_finalFieldDefinition = (
    definition: FieldDefinition,
    context: ParseFieldContext | null
  ): FinalFieldDefinition | void => {
    if (isFinalFieldDefinition(definition)) {
      if (definition.type === 'self') {
        const parentId = context?.parentId || definition.def?.parentId;
        const parentObjectType =
          context?.parentObjectType || definition.def?.parentObjectType;

        if (!parentId && !parentObjectType) {
          throw new Error(
            `Expected context.getParent to be defined for "self" reference field.`
          );
        }

        const def: SelfReferenceFieldDef = definition.def || {};
        def.parentId = parentId;
        def.parentObjectType = parentObjectType;
        definition.def = def;

        // since circular refs can only be lists or optional types,
        // this type can also accept the `list` and `optional` config from definition
        if (definition.optional) {
          def.optional = definition.optional;
        }

        if (definition.list) {
          def.list = definition.list;
        }
      }

      if (definition.type === 'object') {
        if (typeof definition.def !== 'object' || !definition.def) {
          throw new RuntimeError(`Missing def for object field.`, {
            definition,
          });
        }

        if (isObjectType(definition.def)) {
          definition.def = definition.def.definition;
        } else {
          definition.def = this.parse(definition.def, context).definition;
        }
      }

      if (definition.type === 'union') {
        let isOptionalUnion = definition.optional;

        definition.def = definition.def.map((el) => {
          const parsed = this.toFinalDefinition(el, context);
          if (parsed.optional) isOptionalUnion = true;
          return parsed;
        });

        definition.optional = isOptionalUnion;
      }

      if (definition.type === 'alias') {
        if (typeof definition.def === 'object') {
          const {
            //
            hidden,
            description,
            defaultValue,
            optional,
            list,
            name,
          } = definition;

          let parsed = this.toFinalDefinition(definition.def.type, context);

          parsed = SchemaParser.deleteCachedFieldInstance({
            ...parsed,
            hidden,
            description,
            defaultValue,
            optional,
            list,
            name,
          });

          definition.def.type = deleteNullable(parsed);
        }
      }

      return definition;
    }
  };

  parser_fieldInstance = (
    definition: FieldDefinition
  ): FinalFieldDefinition | void => {
    if (isFieldInstance(definition)) {
      return definition.asFinalFieldDef;
    }
  };

  parser_listDefinition = (
    definition: FieldDefinition,
    context: ParseFieldContext | null
  ): FinalFieldDefinition | void => {
    if (isListDefinition(definition)) {
      const parsed = this.toFinalDefinition(definition[0], context);
      parsed.list = true;
      parsed.optional = false;
      return parsed;
    }
  };

  parser_flattenDefinition = (
    definition: FieldDefinition,
    context: ParseFieldContext | null
  ): FinalFieldDefinition | void => {
    const keyObjectDefinition = this.parseFlattenFieldDefinition(
      definition,
      context
    );

    if (keyObjectDefinition) {
      return keyObjectDefinition;
    }
  };

  parser_objectType = (
    definition: FieldDefinition
  ): FinalFieldDefinition | void => {
    if (isObjectType(definition)) {
      return {
        def: definition.definition,
        defaultValue: undefined,
        description: definition.description,
        hidden: definition.hidden,
        type: 'object',
      };
    }
  };

  parser_objectAsType = (
    definition: FieldDefinition
  ): FinalFieldDefinition | void => {
    if (isObjectAsTypeDefinition(definition)) {
      return {
        def: definition.type.definition,
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
  };

  parser_stringDefinition = (
    definition: FieldDefinition,
    context: ParseFieldContext | null
  ): FinalFieldDefinition | void => {
    //
    if (isStringFieldDefinition(definition)) {
      const parsed = parseStringDefinition(definition);
      return this.parser_finalFieldDefinition(parsed, context);
    }
  };

  static createInstance = (
    field: FieldDefinition,
    options?: ParseFieldOptions
  ): TAnyFieldType => {
    if (field[CACHED_FIELD_INSTANCE_KEY]) {
      return field[CACHED_FIELD_INSTANCE_KEY];
    }

    return new SchemaParser(options)
      .parse({ field }, options?.context || null)
      .getField('field');
  };

  static parseSchema = (
    field: SchemaDefinition,
    options?: ParseFieldOptions
  ) => {
    return new SchemaParser(options).parse(field, null);
  };

  static parseDefinition = (
    field: FieldDefinition,
    options?: ParseFieldOptions
  ) => {
    return new SchemaParser(options).parse({ field }, null).getField('field')
      .definition;
  };

  static deleteCachedFieldInstance = (def: any) => {
    if (!def || typeof def !== 'object') return def;
    const { [CACHED_FIELD_INSTANCE_KEY]: _, ...rest } = def as any;
    return rest as any;
  };

  static getCachedInstance = (def: any): TAnyFieldType => {
    let cached = def[CACHED_FIELD_INSTANCE_KEY];
    if (cached) return cached;

    cached = new SchemaParser().parse({ def }, null).getField('def');

    return cached;
  };
}

export type ParseFieldOptions = {
  asString?: boolean;
  deep?: {
    asString?: boolean;
    omitMeta?: boolean;
  };
  omitMeta?: boolean;
  context?: ParseFieldContext;
};

type ParseResult = {
  getField(field: string): TAnyFieldType;
  definition: { [key: string]: FinalFieldDefinition };
  meta?: MetaField['asFinalFieldDef'];
  custom?: FieldExtraProps;
};

function isFinalFieldDefinition(
  input: any
): input is FinalFieldDefinitionStrict {
  return typeof input?.type === 'string';
}

function isListDefinition(input: any): input is [FieldDefinition] {
  return Array.isArray(input) && input.length === 1;
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

const validFlattenDefinitionKeysList = keys(validFlattenDefinitionKeys);

export const CACHED_FIELD_INSTANCE_KEY = '__cachedFieldInstance';

function hasCachedFieldInstance(field: any): FinalFieldDefinition | null {
  return !!field?.[CACHED_FIELD_INSTANCE_KEY] ? field : null;
}

const canDelete: (keyof FinalFieldDefinition)[] = [
  'optional',
  'list',
  '$',
  'description',
  'defaultValue',
  'hidden',
  'name',
];

function deleteNullable<T extends Record<string, any>>(parsed: T): T {
  canDelete.forEach((k) => {
    const v = parsed[k];
    if (v === undefined || v === false || v === '') delete parsed[k];
  });
  return parsed;
}
