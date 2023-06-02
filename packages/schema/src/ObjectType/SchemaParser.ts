import { isPlainObject, RuntimeError } from '@swind/utils';
import { getKeys } from '@swind/utils';
import { inspectObject } from '@swind/utils';

import { FieldExtraProps } from '../FieldExtraProps';
import { GraphType } from '../GraphType/GraphType';
import { SchemaDefinition } from '../TObjectConfig';
import { isFieldInstance, TAnyFieldType } from '../fields/FieldType';
import { LiteralField } from '../fields/LiteralField';
import {
  createEmptyMetaField,
  isMetaField,
  MetaField,
  objectMetaFieldKey,
} from '../fields/MetaFieldField';
import { SelfReferenceFieldDef } from '../fields/SelfReferenceField';
import { FieldDefinitionWithType } from '../fields/_fieldDefinitions';
import { FieldDefinition, FinalFieldDefinition } from '../fields/_parseFields';
import { AnyField, types } from '../fields/fieldTypes';
import {
  isStringFieldDefinition,
  parseStringDefinition,
} from '../parseStringDefinition';

import {
  FinalFieldDefinitionStrict,
  isObjectType,
  ObjectType,
} from './ObjectType';

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

        if (isMetaField(field, fieldName)) {
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

    meta = meta || createEmptyMetaField();

    if (meta) {
      meta.def.custom = extra;
    }

    if (!omitMeta) {
      result[objectMetaFieldKey] = meta;
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

    Object.keys(parsed).forEach((k) => {
      // removing not unnecessary keys
      if (parsed[k] === undefined || parsed[k] === false) {
        delete parsed[k];
      }
    });

    let fieldInstance: any;

    Object.defineProperties(parsed, {
      [CACHED_FIELD_INSTANCE_KEY]: {
        get() {
          if (fieldInstance) return fieldInstance;

          return (fieldInstance = (() => {
            if (!types[parsed.type]) {
              throw new RuntimeError(
                `invalid field definition. types["${parsed?.type}"] is undefined`,
                {
                  definition: parsed,
                }
              );
            }

            const fieldConstructor = types[parsed.type] as typeof AnyField;

            let field = fieldConstructor.create(parsed.def, parsed);

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

            return field;
          })());
        },
      },
    });

    return parsed;
  };

  toFinalDefinition = (
    definition: FieldDefinition,
    context: ParseFieldContext | null
  ): FinalFieldDefinition => {
    const parsers = [
      this.parser_stringDefinition,
      this.parser_fieldInstance,
      this.parser_flattenDefinition,
      this.parser_objectType,
      this.parser_graphType,
      this.parser_objectAsType,
      this.parser_graphTypeInType,
      this.parser_finalFieldDefinition,
      this.parser_listDefinition,
      this.parser_literalDefinition,
    ];

    for (let parser of parsers) {
      const parsed = parser(definition, context);
      if (parsed) {
        canDelete.forEach((k) => {
          const v = parsed[k];
          if (v === undefined || v === false || v === '') delete parsed[k];
        });
        return parsed;
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
  };

  parser_finalFieldDefinition = (
    definition: FieldDefinition,
    context: ParseFieldContext | null
  ): FinalFieldDefinition | void => {
    if (isFinalFieldDefinition(definition)) {
      if (definition.type === 'self') {
        if (!context?.parentId && !context?.parentObjectType) {
          throw new Error(
            `Expected context.getParent to be defined for "self" reference field.`
          );
        }

        const def: SelfReferenceFieldDef = definition.def || {};
        def.parentId = context.parentId;
        def.parentObjectType = context.parentObjectType;
        definition.def = def;

        // since circular refs can only be lists or optional types,
        // this type can also accept the `list` and `optional` config from definition
        if (definition.optional) {
          def.optional = definition.optional;
        }

        if (definition.list) {
          def.optional = definition.list;
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
          definition.def.type = this.toFinalDefinition(
            definition.def.type,
            context
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
}

export type ParseFieldOptions = {
  asString?: boolean;
  deep?: {
    asString?: boolean;
    omitMeta?: boolean;
  };
  omitMeta?: boolean;
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

const validFlattenDefinitionKeysList = getKeys(validFlattenDefinitionKeys);

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
