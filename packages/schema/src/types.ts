import {
  A,
  aggio,
  Aggregation,
  type AnyRecord,
  assertEqual,
  BJSON,
  capitalize,
  Cast,
  CountryCode,
  createProxy,
  createStore,
  dateSerialize,
  ensureArray,
  expectedType,
  getKeys,
  getTypeName,
  inspectObject,
  invariantType,
  isBrowser,
  IsKnown,
  isProduction,
  memoize,
  Merge,
  nonNullValues,
  O,
  ObjectPath,
  parsePhoneNumber,
  pick,
  randomInt,
  randomItem,
  randomName,
  RuntimeError,
  Serializable,
  setByPath,
  simpleObjectClone,
  slugify,
  tryCatch,
  tuple,
  TypeLike,
  ulid,
  uniq,
  wrapError,
} from '@powership/utils';

import {
  AllFinalFieldDefinitions,
  FieldAsString,
  FieldDefinition,
  FinalFieldDefinition,
  FinalFieldDefinitionStrict,
  FinalObjectDefinition,
  ObjectDefinitionInput,
  ObjectFieldInput,
  type ShortenFinalFieldDefinition,
} from './fields/_parseFields';

import {
  type DescribeAndOverrideField,
  type DescribeField,
  type DescribeObjectDefinition,
  type DescribeWithoutSeal,
  type Infer,
  type InferObjectDefinition,
  type SealedField,
} from './fields/Infer';

import {
  type CursorType,
  type FieldDefinitions,
  type FieldDefinitionWithType,
  type FieldTypeName,
  type ListDefinitionObject,
  type ListDefinitionTruthy,
  SpecialObjectKeyEnum,
} from './fields/_fieldDefinitions';

import { withCache, WithCache } from './withCache';

// @only-server
import {
  type ConvertFieldResult,
  type GraphQLParseMiddleware,
  GraphQLParser,
  type GraphQLParserResult,
  type ParseInputTypeOptions,
  type ParseInterfaceOptions,
  type ParseTypeOptions,
} from './GraphType/GraphQLParser';

// @only-server
import {
  type GraphQLInterfaceType,
  type GraphQLNamedInputType,
  type GraphQLNamedType,
  type GraphQLObjectType,
  GraphQLSchema,
  printSchema,
} from 'graphql';

// @only-server
import { _resolvers } from './Resolver';

// @only-server
import {
  objectToTypescript,
  ObjectToTypescriptOptions,
} from './objectToTypescript';

// @only-server
import { PowershipWatchTypesPubSub } from './generateTypes';

import type { DurableFieldConfig } from './Durable/IDurable';

export type UnknownFieldDef = {
  types?: string[] | string;
};

export type FieldTypeOptions = ListDefinitionObject & { [K: string]: unknown };
// used by alias fieldType and possibly others
export type FieldComposer<Schema = Record<string, any>, T = any> = {
  compose: (schema: Schema) => T;
  def: FinalFieldDefinitionStrict;
  validate(input: any, parent: Schema): T;
};
export const FieldsTypeCache = new Map<
  string,
  {
    fieldType: TAnyFieldType;
    defKeys: string[] | undefined;
  }
>();
const $inferFieldKey = '___inferable' as const;

export const FieldTypeErrorCodes = tuple(
  'minSize', //
  'maxSize',
  'regexMismatch',
  'sizeMismatch',
  'unexpected',
  'unexpectedType',
  'custom',
  'invalidPhone',
  'requiredField'
);
export type FieldTypeErrorCode = (typeof FieldTypeErrorCodes)[number];

export class FieldTypeError extends Error {
  __isFieldTypeError = true;
  code: FieldTypeErrorCode;
  static is = isFieldError;

  constructor(code: FieldTypeErrorCode, details?: any) {
    super(
      [
        code !== 'custom' ? `${capitalize(code)}${details ? ':' : ''}` : '',
        (details ? `${inspectObject(details)}` : '').trim(),
      ]
        .filter(Boolean)
        .join(' ')
    );

    this.code = code;
    if (typeof details?.stack === 'string') {
      this.stack = details.stack;
    }
  }
}

export function isFieldError(el: any): el is FieldTypeError {
  return Boolean(el && el?.__isFieldTypeError === true);
}

export type ValidationCustomMessage =
  | string
  | ((value: any, originalError: Error) => string | Error);
export type FieldParserOptionsObject = {
  allowExtraFields?: boolean; // include fields from input but not in schema
  customErrorMessage?: ValidationCustomMessage;
  customMessage?: ValidationCustomMessage;
  excludeInvalidListItems?: boolean;
  includeHidden?: boolean;
  partial?: boolean;
  exclude?: string[];
};
export type FieldParserConfig =
  | ValidationCustomMessage
  | FieldParserOptionsObject;
export type FieldTypeParser<Type> = (
  input: any,
  config?: FieldParserConfig
) => Type;

export function parseValidationError(
  input: any,
  customMessage: ValidationCustomMessage | undefined,
  originalError: (Error & { [K: string]: any }) | string
) {
  if (typeof originalError === 'object') {
    if (
      !customMessage &&
      typeof originalError === 'object' &&
      Array.isArray(originalError.issues)
    ) {
      const customIssue = originalError.issues.find(
        (err) => typeof err?.params?.getMessage === 'function'
      );

      if (typeof customIssue?.params?.getMessage === 'function') {
        customMessage = () => customIssue.params.getMessage(input, error);
      }
    }
  }

  const error =
    typeof originalError === 'string'
      ? new FieldTypeError('custom', originalError)
      : originalError;

  if (typeof customMessage === 'string') {
    return new FieldTypeError('custom', customMessage);
  }

  if (typeof customMessage === 'function') {
    const _customError = customMessage(input, error);
    if (!_customError) return error;

    if ('string' === typeof _customError) {
      return new FieldTypeError('custom', _customError);
    } else {
      return new FieldTypeError(
        'custom',
        _customError?.message || _customError
      );
    }
  }

  return error;
}

export function arrayFieldParse(config: {
  arrayOptions: Omit<FieldDefinitions['array'], 'of'>;
  input: any;
  parser: FieldTypeParser<any>;
  parserOptions: FieldParserOptionsObject;
}) {
  const { parser, parserOptions, input, arrayOptions } = config;

  if (!input || !Array.isArray(input)) {
    throw new FieldTypeError(
      'unexpectedType',
      `expected Array, found ${getTypeName(input)}`
    );
  }

  const { excludeInvalidListItems, customMessage } = parserOptions;

  const { min, length, max } = arrayOptions;

  const found = input.length;

  if (min !== undefined && found < min) {
    throw new FieldTypeError(
      'minSize',
      `expected min ${min}, found: ${found}.`
    );
  }

  if (max !== undefined && found > max) {
    throw new FieldTypeError(
      'maxSize',
      `expected max ${max}, found: ${found}.`
    );
  }

  if (length !== undefined && found !== length) {
    throw new FieldTypeError(
      'sizeMismatch',
      `expected length ${length}, found ${found}.`
    );
  }

  const values: any = [];

  input.forEach((item, key) => {
    try {
      const parsed = parser(item, parserOptions);
      values.push(parsed);
    } catch (originalError: any) {
      if (excludeInvalidListItems) {
        return;
      }

      const error = parseValidationError(item, customMessage, originalError);

      error.message = `${error.message} at position ${key}`;
      throw error;
    }
  });

  return values;
}

/**
 * Represents the extra properties accepted in field definitions
 */
export interface CustomFieldConfig {
  persist?: DurableFieldConfig | boolean;
}

export function fieldInstanceFromDef(
  definition: FinalFieldDefinition
): AnyField {
  if (!types[definition.type]) {
    throw new RuntimeError(
      `invalid field definition. types["${definition?.type}"] is undefined`,
      {
        definition,
      }
    );
  }

  const fieldConstructor = types[definition.type] as typeof AnyField;

  let field = fieldConstructor.create(definition.def);

  if (definition.list) {
    // @ts-ignore
    field = field.toList(definition.list);
  }

  if (definition.optional) {
    // @ts-ignore
    field = field.toOptional();
  }

  if (definition.name) {
    field.name = definition.name;
  }

  if (definition.hidden) {
    field.hidden = definition.hidden;
  }

  if (definition.defaultValue !== undefined) {
    field = field.setDefaultValue(definition.defaultValue);
  }

  if (definition.description) {
    field = field.describe(definition.description);
  }

  if (definition.$) {
    field.$ = definition.$;
  }

  return field;
}

export abstract class FieldType<
  Type,
  TypeName extends FieldTypeName,
  Def extends FieldDefinitions[TypeName],
  List extends 1 | 0 = 0,
  Optional extends 1 | 0 = 0,
  DefaultValue extends unknown | undefined = undefined,
  Options extends FieldTypeOptions = {}
> {
  readonly typeName: TypeName;
  type: TypeName;

  readonly def: Def;

  [$inferFieldKey]: ([List] extends [1] ? Type[] : Type) extends infer R
    ? [Optional] extends [1]
      ? R | undefined
      : R
    : never;

  composer: FieldComposer<Record<string, any>, Type> | undefined;

  get definition() {
    return this.asFinalFieldDef;
  }

  id?: string;
  name?: string;
  options: Options;

  protected constructor(config: {
    def: Def;
    id?: string;
    name: TypeName;
    options?: Options;
  }) {
    const { name, id, def, options = {} } = config;
    this.id = id;
    this.typeName = name;
    this.type = name;
    this.options = options as Options;

    const defKeys = def ? Object.keys(def).sort() : undefined;

    if (defKeys?.length) {
      this.def = def;
    }

    if (id) {
      const existing = FieldsTypeCache.get(id);

      if (existing) {
        const existingKeys = existing.defKeys?.join(', ');

        if (existing.fieldType.typeName !== this.typeName) {
          throw new Error(
            `Field with id "${id}" already registered with different type:\n "${inspectObject(
              {
                old: existing.fieldType.asFinalFieldDef,
                current: this.asFinalFieldDef,
              },
              { depth: 2 }
            )}"`
          );
        }

        if (defKeys?.join(', ') !== existingKeys) {
          throw new Error(
            `Field with id "${id}" already registered with different fields:\n "${existingKeys}"`
          );
        }
      }

      FieldsTypeCache.set(id, { fieldType: this as any, defKeys });
    }
  }

  validate(input: any): input is Type {
    try {
      this.parse(input);
      return true;
    } catch (e: any) {
      return false;
    }
  }

  is(input: any): input is Type {
    return this.validate(input);
  }

  optional: [Optional] extends [1] ? true : false;
  list: [List] extends [1] ? true : false;
  defaultValue: DefaultValue;
  description?: string;
  hidden?: boolean;
  $?: CustomFieldConfig;

  describe = (description: string): this => {
    this.description = description;
    return this as any;
  };

  describeField = (): {
    def: Def;
    defaultValue: DefaultValue;
    description: string | undefined;
    hidden: boolean;
    list: [List] extends [1] ? true : false;
    optional: [Optional] extends [1] ? true : false;
    type: Type;
    $?: CustomFieldConfig;
  } => {
    return this.asFinalFieldDef as any;
  };

  toOptional(): FieldType<Type, TypeName, Def, List, 1, DefaultValue, Options> {
    // @ts-ignore
    this.optional = true;
    return this as any;
  }

  toRequired(): FieldType<Type, TypeName, Def, List, 0, DefaultValue, Options> {
    // @ts-ignore
    this.optional = false;
    return this as any;
  }

  toList(
    options?: ListDefinitionTruthy
  ): FieldType<Type, TypeName, Def, 1, Optional, DefaultValue, Options> {
    // @ts-ignore
    this.list = true;
    if (options && typeof options === 'object') {
      this.options = { ...this.options, ...options };
    }
    return this as any;
  }

  setDefaultValue<T extends any>(
    value: T
  ): FieldType<Type, TypeName, Def, List, Optional, T, Options> {
    // @ts-ignore
    this.defaultValue = value;
    return this as any;
  }

  applyParser = <Type>(parser: {
    parse(input: any, _options: FieldParserOptionsObject): Type;
    preParse?(input: any): Type;
  }): FieldTypeParser<Type> => {
    return (
      input: any,
      _options?: ValidationCustomMessage | FieldParserOptionsObject
    ) => {
      let options: FieldParserOptionsObject = {};

      if (typeof _options === 'function') {
        options = { customErrorMessage: _options };
      }
      if (typeof _options === 'string') {
        options = { customErrorMessage: _options };
      }
      if (typeof _options === 'object') {
        options = _options;
      }

      const { customErrorMessage: customMessage, includeHidden = true } =
        options;

      // keep it secret
      if (this.hidden && !includeHidden) return undefined;

      if (parser.preParse) {
        input = parser.preParse(input);
      }

      if (
        (input === undefined || input === null) &&
        this.defaultValue !== undefined
      ) {
        input = this.defaultValue;
      }

      if (this.type === 'null' && input === undefined) {
        return null;
      }

      if (this.type !== 'null' && input === null && this.optional) {
        return undefined;
      }

      if (input === undefined && this.optional) {
        return undefined;
      }

      if (input === undefined && !this.optional) {
        throw new FieldTypeError('requiredField');
      }

      if (this.asFinalFieldDef.list) {
        return arrayFieldParse({
          arrayOptions: {}, // since is the shot definition (list:true) there is no options
          input,
          parser: (input) => parser.parse(input, options),
          parserOptions: options,
        });
      }

      try {
        return parser.parse(input, options) as any;
      } catch (originalError: any) {
        if (!customMessage && isFieldError(originalError)) {
          throw originalError;
        }

        throw parseValidationError(input, customMessage, originalError);
      }
    };
  };

  get asFinalFieldDef(): AllFinalFieldDefinitions[TypeName] {
    const res: FinalFieldDefinition = {
      def: this.def,
      defaultValue: this.defaultValue,
      description: this.description,
      hidden: this.hidden,
      list: this.list,
      optional: this.optional,
      type: this.type,
      $: this.$,
    };

    Object.entries(res).forEach(([k, v]) => {
      if (v === undefined || v === false) {
        delete res[k];
      }
    });

    return res as any;
  }

  abstract parse: FieldTypeParser<Type>;

  readonly __isFieldType = true;

  static create(..._args: any[]): TAnyFieldType {
    throw new Error('not implemented in abstract class.');
  }

  clone = (): FieldType<
    Type,
    TypeName,
    Def,
    List,
    Optional,
    DefaultValue,
    Options
  > => {
    const { def, defaultValue, ...rest } = this.asFinalFieldDef;

    let field: FinalFieldDefinition;

    if (rest.type === 'literal') {
      field = {
        ...(simpleObjectClone(rest) as any),
        def,
        defaultValue,
      };
    } else {
      field = simpleObjectClone(rest) as any;

      if (def !== undefined) {
        field.def = simpleObjectClone(def);
      }

      if (defaultValue !== undefined) {
        field.defaultValue = simpleObjectClone(def);
      }
    }

    return fieldInstanceFromDef(field) as any;
  };
}

export function isFieldInstance(t: any): t is TAnyFieldType {
  return t?.__isFieldType === true;
}

export type AllFieldTypes = {
  [K in keyof FieldDefinitions]: FieldType<
    unknown,
    K,
    FieldDefinitions[K],
    0,
    0
  >;
};
export type TAnyFieldType = AllFieldTypes[keyof AllFieldTypes];

export class UnknownField extends FieldType<
  unknown,
  'unknown',
  UnknownFieldDef | undefined
> {
  parse: FieldTypeParser<any>;

  constructor(def?: UnknownFieldDef) {
    super({ def: def, name: 'unknown' });
    const { types } = def || {};

    this.parse = this.applyParser({
      parse: (input) => {
        if (input === undefined) {
          if (this.optional) return input;
          throw new FieldTypeError('requiredField');
        }

        if (types?.length) {
          const arr = (Array.isArray(types) ? types : [types]).map((el) =>
            el.toLowerCase()
          );

          const tn = getTypeName(input).toLowerCase();

          if (!arr.includes(tn)) {
            throw new Error(
              `expected type to be one of -> (${arr.join(', ')}), found "${tn}"`
            );
          }
        }

        return input;
      },
    });
  }

  static create = (def?: UnknownFieldDef): UnknownField => {
    return new UnknownField(def);
  };
}

export function parseObjectField<
  T extends ObjectFieldInput,
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
export function parseObjectField<T extends ObjectFieldInput>(
  fieldName: string,
  definition: T
): FinalFieldDefinition;
export function parseObjectField(
  fieldName: string,
  definition: ObjectFieldInput,
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

export function parseField(definition: FieldDefinition): FinalFieldDefinition {
  return parseObjectField('__parseField__', definition);
}

const stringifiableDefKeys = new Set([
  'type',
  'list',
  'optional', //
]);

export function parseStringDefinition<T extends AnyStringFieldDefinition>(
  typeName: T
): FinalFieldDefinition {
  const t = typeNameFromTemplate(typeName);
  const isOptional = isOptionalTemplate(typeName);
  const isList = isListTemplate(typeName);

  const obj: FinalFieldDefinition = {
    type: t,
  };

  if (isList) {
    obj.list = true;
  }

  if (isOptional) {
    obj.optional = true;
  }

  return obj;
}

export function isOptionalTemplate<T extends string>(
  type: T
): T extends `${string}?` ? true : false {
  return !!type.match(/\?$/) as any;
}

export function isListTemplate<T extends string>(
  type: T
): T extends `[${string}]` | `[${string}]?` ? true : false {
  return !!type.match(/]\??$/) as any;
}

export function typeNameFromTemplate<T extends FieldTypeName>(
  enhanced: AnyStringFieldDefinition
): T {
  return enhanced.replace(/[\[\]?, ]/g, '') as any;
}

export function isStringFieldDefinition(t: any): t is AnyStringFieldDefinition {
  if (typeof t !== 'string') return false;
  const field = typeNameFromTemplate(t as any);
  return isFieldTypeName(field);
}

export type AnyStringFieldDefinition =
  | FieldTypeName
  | `${FieldTypeName}?`
  | `[${FieldTypeName}]`
  | `[${FieldTypeName}]?`;
export type ExtractStringFieldDefType<T extends AnyStringFieldDefinition> =
  //
  T extends FieldTypeName
    ? T
    : T extends `[${infer U}]?`
    ? U
    : T extends `${infer U}?`
    ? U
    : T extends `[${infer U}]`
    ? U
    : never;
export type ParseStringDefinition<S> =
  //
  S extends FieldTypeName
    ? {
        def: undefined;
        description?: string;
        list: false;
        optional: false;
        type: S;
      }
    : //
    //
    S extends `${FieldTypeName}?`
    ? //
      {
        def: undefined;
        description?: string;
        list: false;
        optional: true;
        type: ExtractStringFieldDefType<S>;
      }
    : //
    S extends `[${FieldTypeName}]`
    ? //
      {
        def: undefined;
        description?: string;
        list: true;
        optional: false;
        type: ExtractStringFieldDefType<S>;
      }
    : //
    S extends `[${FieldTypeName}]?`
    ? //
      {
        def: undefined;
        description?: string;
        list: true;
        optional: true;
        type: ExtractStringFieldDefType<S>;
      }
    : never;

export function parseFieldDefinitionConfig<
  T extends ObjectFieldInput,
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
  custom?: CustomFieldConfig;
};

export function parseObjectDefinition(
  input: Record<string, any>,
  options: Omit<ParseFieldOptions, 'returnInstance'> = {}
): ParseResult {
  let { deep, omitMeta } = options;

  if (deep?.omitMeta) {
    omitMeta = true;
  }

  const result = {} as { [key: string]: FinalFieldDefinition };

  let meta: MetaField['asFinalFieldDef'] | undefined = undefined;
  let custom: CustomFieldConfig | undefined = undefined;

  const keys = getKeys(input);

  keys.forEach(function (fieldName) {
    try {
      let field = input[fieldName];

      if (fieldName === '$') {
        return (custom = field);
      }

      if (isMetaField(field, fieldName)) {
        return (meta = field);
      }

      const cached = hasCachedFieldInstance(field);
      if (cached) {
        return (result[fieldName] = cached);
      }

      return (result[fieldName] = parseObjectField(fieldName, field, { deep }));
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

  if (meta) {
    meta.def.custom = custom;
  }

  if (!omitMeta) {
    result[objectMetaFieldKey] = meta;
  }

  return {
    definition: result,
    meta,
    custom,
  };
}

export function isFinalFieldDefinition(
  input: any
): input is FinalFieldDefinitionStrict {
  return typeof input?.type === 'string';
}

function isListDefinition(input: any): input is [ObjectFieldInput] {
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
    name,
    hidden,
    $,
  } = input;

  return parseFieldDefinitionConfig(
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
    { deep }
  );
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

export class UnionField<
  U extends ObjectFieldInput,
  T extends Readonly<[U, ...U[]]>
> extends FieldType<Infer<T[number]>, 'union', T> {
  //
  parse: FieldTypeParser<Infer<T[number]>>;

  utils = {
    fieldTypes: [] as TAnyFieldType[],
  };

  static is(item: any): item is UnionField<any, any> {
    return item?.typeName === 'union' && Array.isArray(item?.utils?.fieldTypes);
  }

  constructor(def: T) {
    super({ def: def, name: 'union' });

    const getFieldTypes = memoize(() => {
      return def.map((el, index) => {
        try {
          return parseObjectField(`UnionItem_${index}`, el, {
            returnInstance: true,
          });
        } catch (e: any) {
          let message = `Filed to parse type:`;
          message += `\n${inspectObject(el, { tabSize: 2 })}`;

          e.stack = message + '\n' + e.stack;
          throw e;
        }
      });
    });

    Object.defineProperty(this.utils, 'fieldTypes', {
      get() {
        return getFieldTypes();
      },
    });

    let optional: boolean | null = null;

    Object.defineProperty(this, 'optional', {
      get() {
        if (optional !== null) return optional;
        return (optional = getFieldTypes().some((el) => el.optional));
      },
      set(value) {
        optional = value;
      },
    });

    this.parse = this.applyParser({
      parse: (input: any) => {
        if (input === undefined && this.optional) return input;

        const messages: string[] = [];
        const objectErrors: any[] = [];

        for (let parser of getFieldTypes()) {
          try {
            return parser.parse(input);
          } catch (e: any) {
            messages.push(`As ${parser.typeName} throws: ${e.message}`);

            if (
              parser.typeName === 'object' &&
              getTypeName(input) === 'Object'
            ) {
              objectErrors.push(e);
            }
          }
        }

        if (objectErrors.length) {
          throw objectErrors[0];
        }

        const expected = uniq(
          this.utils.fieldTypes.map((el) => el.typeName)
        ).join(' or ');

        let errorMessage = `Expected value to match one of the following types: ${expected}.`;

        messages.forEach((err) => (errorMessage += `\n- ${err}`));
        throw new Error(errorMessage);
      },
    });
  }

  static create = <U extends ObjectFieldInput, T extends Readonly<[U, ...U[]]>>(
    def: T
  ): UnionField<U, T> => {
    return new UnionField(def) as any;
  };
}

export class UndefinedField extends FieldType<
  undefined,
  'undefined',
  undefined
> {
  parse: FieldTypeParser<undefined>;

  constructor() {
    super({ def: undefined, name: 'undefined' });
    this.parse = this.applyParser({
      parse: (input) => {
        if (typeof input !== 'undefined') {
          throw new Error(`Expected undefined, found ${getTypeName(input)}`);
        }
        return input;
      },
    });
  }

  static create = (): UndefinedField => {
    return new UndefinedField();
  };
}

type UlidDef = {
  autoCreate?: boolean;
};
export const ULID_REGEX = /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/;

export class UlidField extends FieldType<string, 'ulid', UlidDef | undefined> {
  parse: FieldTypeParser<string>;

  constructor(def: UlidDef = {}) {
    super({ def: def, name: 'ulid' });

    const { autoCreate } = def;
    expectedType({ autoCreate }, 'boolean', true);

    this.parse = this.applyParser({
      parse(input: string) {
        expectedType({ value: input }, 'string');
        if (!ULID_REGEX.test(input)) throw new Error('Invalid ulid.');
        return input;
      },
      preParse(input) {
        if (autoCreate && input === undefined) {
          return ulid();
        }
        return input;
      },
    });
  }

  static create = (def?: UlidDef): UlidField => {
    return new UlidField(def);
  };

  static isUlid = (value: string) => ULID_REGEX.test(value);
}

export type StringFieldDef = {
  max?: number;
  min?: number;
  regex?: [string] | [string, string] | Readonly<[string, string] | [string]>;
};

export class StringField extends FieldType<
  string,
  'string',
  StringFieldDef | undefined
> {
  parse: FieldTypeParser<string>;

  constructor(def: StringFieldDef = {}) {
    super({ def: def, name: 'string' });

    const { min, max, regex } = def;

    expectedType({ max, min }, 'number', true);
    expectedType({ regex }, 'array', true);

    const regExp = regex && new RegExp(regex[0], regex[1]);

    this.parse = this.applyParser({
      parse(input: string) {
        expectedType({ value: input }, 'string');

        if (regExp && !regExp.test(input) && regex) {
          throw new FieldTypeError(`regexMismatch`, {
            input,
            regex: regExp.toString(),
          });
        }

        const length = input.length;

        if (max !== undefined && length > max) {
          throw new FieldTypeError(
            'maxSize',
            `${length} is more than the max string length ${max}.`
          );
        }

        if (min !== undefined && length < min) {
          throw new FieldTypeError(
            'minSize',
            `${length} is less than the min string length ${min}.`
          );
        }

        return input;
      },
    });
  }

  static create = (def?: StringFieldDef): StringField => {
    return new StringField(def);
  };
}

const validKeyTypes = ['int', 'string', 'float'] as const;
type ValidKeyType = (typeof validKeyTypes)[number];
export type RecordFieldDef = {
  keyType?: ValidKeyType;
  type?: ObjectFieldInput;
};
export type InferRecordFieldType<Def> = Def extends { keyType: 'int' | 'float' }
  ? {
      [K: number]: Infer<
        Def extends { type: ObjectFieldInput } ? Def['type'] : 'any'
      >;
    }
  : {
      [K: string]: Infer<
        Def extends { type: ObjectFieldInput } ? Def['type'] : 'any'
      >;
    };

export class RecordField<Def extends RecordFieldDef> extends FieldType<
  InferRecordFieldType<Def>,
  'record',
  Def | undefined
> {
  __isRecordField = true;

  static is(input: any): input is RecordField<RecordFieldDef> {
    return !!(input && typeof input === 'object' && input.__isRecordField);
  }

  //
  parse: FieldTypeParser<InferRecordFieldType<Def>>;

  constructor(def: Def = { keyType: 'string', type: 'any' } as any) {
    super({ def: def, name: 'record' });

    let parser: TAnyFieldType;
    try {
      parser = parseObjectField(`RecordField`, def?.type || 'any', {
        returnInstance: true,
      });
    } catch (e: any) {
      e.message = `RecordField: failed to create parser for record values: ${
        e.message
      }\n${inspectObject({ receivedDef: def }, { tabSize: 2 })}`;
      e.stack = e.message;
      throw e;
    }

    let keyParser: TAnyFieldType;

    try {
      if (!validKeyTypes.includes(def.keyType as any)) {
        throw new Error(`keyType should be on of ${validKeyTypes}`);
      }

      keyParser = parseObjectField('RecordFieldKey', def.keyType!, {
        returnInstance: true,
      });
    } catch (e: any) {
      e.message = `RecordField: failed to create parser for record keys: ${
        e.message
      }\n${inspectObject({ receivedDef: def }, { tabSize: 2 })}`;
      e.stack = e.message;
      throw e;
    }

    this.parse = this.applyParser({
      parse: (input: any) => {
        expectedType({ value: input }, 'object');

        const result: any = {};

        for (let key in input) {
          keyParser.parse(key, (_, err) => {
            return `Unexpected record key \`${key}\`. ${err.message}`;
          });
        }

        for (let key in input) {
          try {
            result[key] = parser.parse(input[key]);
          } catch (e: any) {
            throw new Error(`field '${key}': ${e.message}`);
          }
        }

        return result;
      },
    });
  }

  static create = <
    Def extends RecordFieldDef = { keyType: 'string'; type: 'any' }
  >(
    def?: Def
  ): RecordField<Def> => {
    def = { keyType: 'string', type: 'any', ...def } as any;
    return new RecordField(def);
  };
}

export type PhoneValidationOptions = {
  defaultCountry?: CountryCode;
};
export type PhoneFieldDef = PhoneValidationOptions | undefined;

export function validatePhoneNumber(
  input: unknown,
  options: PhoneValidationOptions = {}
): string {
  if (typeof input !== 'string') {
    throw new Error('Expected phone number as string.');
  }

  const { defaultCountry } = options;

  let [, phoneNumber] = tryCatch(() => {
    return parsePhoneNumber(input, {
      extract: true,
      defaultCountry,
    });
  });

  if (!phoneNumber) {
    throw new FieldTypeError('invalidPhone', {
      expected: 'VALID_PHONE_NUMBER',
      found: input,
    });
  }

  return phoneNumber;
}

export class PhoneField extends FieldType<string, 'phone', PhoneFieldDef> {
  parse: FieldTypeParser<string>;

  static is(input: any): input is PhoneField {
    return input?.__isFieldType && input?.type === 'phone';
  }

  static assert(input: any): asserts input is PhoneField {
    assertEqual(this.is(input), true, 'NOT_PHONE_FIELD');
  }

  constructor(def: PhoneFieldDef) {
    super({
      def,
      name: 'phone',
    });

    this.parse = this.applyParser({
      parse(input: any) {
        return validatePhoneNumber(input);
      },
    });
  }

  static create = (def: PhoneFieldDef): PhoneField => {
    return new PhoneField(def);
  };
}

type AnyObjectField = TypeLike<(typeof ObjectField)['prototype']>;

// used to lazy parse args to improve circular types usage
export function lazyCreateGraphTypeInitPayload(
  args: GraphTypeArgs,
  onLoad?: (
    payload: LazyParseGraphTypePayload
  ) => LazyParseGraphTypePayload | void
) {
  let payload: LazyParseGraphTypePayload;

  let id: string | undefined = undefined;

  let definitionInput: ObjectFieldInput | (() => ObjectFieldInput);

  let idFromArgs;
  if (args.length === 2) {
    idFromArgs = id = args[0];
    definitionInput = args[1];
  } else {
    definitionInput = args[0];
  }

  function initializer(
    self: GraphType<FieldDefinition>
  ): LazyParseGraphTypePayload {
    if (payload) return payload;

    const def =
      typeof definitionInput === 'function'
        ? // @ts-ignore
          definitionInput()
        : definitionInput;

    const field = parseObjectField('temp', def, {
      returnInstance: true,
    }) as TAnyFieldType & { utils: { object?: any } };

    const objectType = ObjectType.is(field?.utils?.object)
      ? field.utils.object
      : undefined;

    if (objectType) {
      if (id && objectType.id && objectType.id !== id) {
        field.utils.object = objectType.clone((el) => el.objectType(id));
      } else if (id) {
        field.utils.object.identify(id);
      }
    }

    if (!id && objectType) {
      id = getObjectDefinitionId(
        objectType.definition,
        true // make nullable, the error below about undefined name is more clear
      );
    }

    if (id && !field.id) {
      field.id = id;
    }

    payload = {
      definition: field.asFinalFieldDef,

      // @ts-ignore
      definitionInput,

      field,
      // id can be from inner type, like an object type with id or defined in an argument of createType
      id,
      idFromArgs,
      objectType: objectType,
    };

    if (id) {
      self.identify(id);
    }

    const res = onLoad?.(payload);

    if (res !== undefined) {
      return res;
    }

    return payload;
  }

  return {
    // id can also be from inner type, like an object type with id
    definitionInput,
    idFromArgs,
    initializer,
  };
}

// FIXME should fix deep instantiation types and remove `any's`
export function initGraphType(self: any, args: any) {
  const { initializer, idFromArgs } = lazyCreateGraphTypeInitPayload(
    args,
    (payload) => {
      self.beforeInitialize.forEach((next) => {
        payload = next(payload);
      });

      self.touched = true;

      return payload;
    }
  );

  Object.defineProperty(self, '__lazyGetter', {
    get() {
      return initializer(self);
    },
  });

  Object.defineProperty(self, 'definition', {
    enumerable: true,
    get() {
      return initializer(self).definition;
    },
  });

  if (idFromArgs) {
    self.identify(idFromArgs);
  }
}

export interface ExtendObjectDefinition<Input, Origin> {
  definition: InnerDef<Input>;

  def(): this['definition'];

  exclude<K extends keyof this['definition']>(
    keys: K | K[]
  ): ExtendObjectDefinition<{ object: Omit<InnerDef<Input>, K> }, Origin>;

  extendObjectDefinition<V extends ObjectDefinitionInput>(
    value: V | ((current: this['definition']) => V)
  ): ExtendObjectDefinition<
    { object: Merge<InnerDef<Input>, DescribeObjectDefinition<V>> },
    Origin
  >;

  graphType(name: string): GraphType<{ object: InnerDef<Input> }>;

  objectType(name?: string): ObjectType<InnerDef<Input>>;

  only<K extends keyof this['definition']>(
    keys: K | K[]
  ): ExtendObjectDefinition<{ object: O.Pick<InnerDef<Input>, K> }, Origin>;

  /**
   * Alias to `only`
   * @param keys
   */
  pick<K extends keyof this['definition']>(
    keys: K | K[]
  ): ExtendObjectDefinition<{ object: O.Pick<InnerDef<Input>, K> }, Origin>;

  optional(): ExtendObjectDefinition<
    { object: MakeFieldOptional<InnerDef<Input>, keyof InnerDef<Input>> },
    Origin
  >;

  optional<Op extends keyof InnerDef<Input>>(
    keys: Op | Op[]
  ): ExtendObjectDefinition<
    { object: MakeFieldOptional<InnerDef<Input>, Op> },
    Origin
  >;

  required(): ExtendObjectDefinition<
    { object: MakeFieldRequired<InnerDef<Input>, keyof InnerDef<Input>> },
    Origin
  >;

  required<Op extends keyof InnerDef<Input>>(
    keys: Op | Op[]
  ): ExtendObjectDefinition<
    { object: MakeFieldRequired<InnerDef<Input>, Op> },
    Origin
  >;
}

export function extendObjectDefinition<Input>(
  input: Input
): ExtendObjectDefinition<Input, Input> {
  if (!input || typeof input !== 'object') {
    throw new RuntimeError(
      `Expected typeof input to be "object", found ${getTypeName(input)}`,
      { input }
    );
  }

  let obj: Record<string, any> = input;

  type R = ExtendObjectDefinition<Input, Input>;

  if (
    typeof obj === 'object' &&
    obj.type === 'object' &&
    obj.def &&
    typeof obj.def === 'object'
  ) {
    return extendObjectDefinition(obj.def) as unknown as R;
  }

  if (obj['object'] && typeof obj['object'] === 'object') {
    return extendObjectDefinition(obj.object) as unknown as R;
  }

  if (GraphType.is(obj)) {
    // @ts-ignore
    return extendObjectDefinition(obj.definition) as unknown as R;
  }

  if (ObjectType.is(obj)) {
    // @ts-ignore
    return extendObjectDefinition(obj.definition) as unknown as R;
  }

  let clone: any = deleteCachedFieldInstance(
    simpleObjectClone(
      parseObjectDefinition(deleteCachedFieldInstance(obj), {
        deep: { omitMeta: true },
      }).definition
    )
  );

  const res = {
    def() {
      if (objectMetaFieldKey in clone) {
        delete clone[objectMetaFieldKey];
      }

      return clone;
    },

    exclude(keys) {
      const exclude = ensureArray(keys);
      exclude.forEach((key) => {
        delete clone[key];
      });
      // @ts-ignore
      return extendObjectDefinition(clone);
    },

    extendObjectDefinition(arg) {
      const ext = typeof arg === 'function' ? arg(res.def()) : arg;
      assertEqual(getTypeName(ext), 'Object');
      clone = Object.assign(
        clone,
        parseObjectDefinition(ext, { omitMeta: true }).definition
      );
      return extendObjectDefinition(clone);
    },

    graphType(name) {
      return name
        ? createType(name, { object: res.def() as any })
        : createType({ object: res.def() as any });
    },

    objectType(name) {
      return name
        ? createObjectType(name, res.def() as any)
        : createObjectType(res.def() as any);
    },

    only(keys) {
      const only = ensureArray(keys);
      Object.keys(clone).forEach((key: any) => {
        if (only && !only.includes(key)) {
          delete clone[key];
        }
      });
      return extendObjectDefinition(clone);
    },

    pick(keys) {
      return res.pick(keys);
    },

    optional(keys = Object.keys(clone)) {
      const optional = ensureArray(keys);

      optional.forEach((key) => {
        if (getTypeName(clone[key]) !== 'Object') {
          throw new RuntimeError(
            `Expected field ${key} to be a final object definition`,
            {
              input,
              key,
              value: clone[key],
            }
          );
        }
        clone[key] = {
          ...parseField(clone[key]),
          optional: true,
        };
      });

      return extendObjectDefinition(clone);
    },

    required(keys?: unknown) {
      const required = ensureArray(keys || Object.keys(clone)) as string[];

      required.forEach((key) => {
        if (getTypeName(clone[key]) !== 'Object') {
          throw new RuntimeError(
            `Expected field ${key} to be a final object definition`,
            {
              input,
              key,
              value: clone[key],
            }
          );
        }
        clone[key] = {
          ...parseField(clone[key]),
          optional: false,
        };
      });

      return extendObjectDefinition(clone);
    },
  };

  return res as any;
}

export type InnerDef<Input> =
  //
  (
    [Input] extends [object]
      ? //
        DescribeField<Input> extends infer R
        ? IsKnown<R> extends 1
          ? _InnerDef<R>
          : DescribeObjectDefinition<Input>
        : never
      : never
  ) extends infer R
    ? { [K in keyof R]: R[K] } & {}
    : {};
export type _InnerDef<R> = 'type' extends keyof R
  ? 'def' extends keyof R
    ? R['type'] extends 'object'
      ? R['def'] extends object
        ? DescribeObjectDefinition<R['def']>
        : never
      : never
    : never
  : never;
export type MakeFieldOptional<
  Object extends object,
  OptionalField extends A.Key
> = OverrideField<Object, OptionalField, { optional: true }>;
export type MakeFieldRequired<
  Object extends object,
  OptionalField extends A.Key
> = OverrideField<Object, OptionalField, { optional: false }>;
export type OverrideField<
  Object extends object,
  Field extends A.Key,
  Extend extends object
> = {
  [K in keyof Object as K extends string ? K : never]: K extends Field
    ? SealedField<Omit<DescribeField<Object[K]>, keyof Extend> & Extend>
    : Object[K];
};

export interface ExtendType<Input> {
  definition: DescribeWithoutSeal<Input>;

  def(): this['definition'];

  extend<V extends FinalFieldDefinition>(
    value: V | ((current: this['definition']) => V)
  ): ExtendType<Omit<this['definition'], keyof V> & V>;

  graphType(
    name?: string
  ): GraphType<Cast<this['definition'], FinalFieldDefinition>>;

  objectType(
    name?: string
  ): ObjectType<
    Cast<
      this['definition'],
      { def: { [K: string]: FinalFieldDefinition } }
    >['def']
  >;

  optional(): ExtendType<MakeTypeOptional<this['definition']>>;

  required(): ExtendType<MakeTypeRequired<this['definition']>>;

  list(): ExtendType<MakeTypeList<this['definition']>>;

  single(): ExtendType<MakeTypeSingle<this['definition']>>;
}

export function extendType<Input>(input: Input): ExtendType<Input> {
  const clone = wrapError(() => {
    const parsed = parseField(input as any);
    const withoutCache = deleteCachedFieldInstance(parsed);
    return simpleObjectClone(withoutCache);
  }, extendType);

  const res = {
    def() {
      return clone;
    },

    extend(arg) {
      const ext = typeof arg === 'function' ? arg(res.def()) : arg;
      assertEqual(getTypeName(ext), 'Object');
      return extendType({
        ...clone,
        ...arg,
      });
    },

    graphType(name) {
      const def = res.def();
      return name ? createType(name, def) : createType(def);
    },

    objectType(name) {
      const { def, type } = res.def();

      if (type !== 'object') {
        throw new Error(`Can't convert "${type}" to ObjectType.`);
      }

      if (objectMetaFieldKey in def) {
        delete def[objectMetaFieldKey];
      }

      return name ? createObjectType(name, def) : createObjectType(def);
    },

    optional() {
      return extendType({
        ...clone,
        optional: true,
      });
    },

    required() {
      return extendType({
        ...clone,
        optional: false,
      });
    },

    list() {
      return extendType({
        array: { of: clone },
      });
    },

    single() {
      return extendType({
        ...clone,
        list: false,
      });
    },
  };

  return res as any;
}

export type MakeTypeOptional<Type> = DescribeAndOverrideField<
  Type,
  { optional: true }
>;
export type MakeTypeRequired<Type> = DescribeAndOverrideField<
  Type,
  { optional: false }
>;
export type MakeTypeList<Type> = { array: { of: Type } };
export type MakeTypeSingle<Type> = DescribeAndOverrideField<
  Type,
  { list: false }
>;

export class GraphType<Definition extends ObjectFieldInput> {
  static assert(type: any): asserts type is GraphType<any> {
    if (!GraphType.is(type)) {
      throw new Error(
        `AssertError: type is not a GraphType.\n${inspectObject(type)}`
      );
    }
  }

  static __isGraphType = true;
  readonly __isGraphType = true;

  static register = createStore<Record<string, GraphTypeLike>>();

  static reset = async () => {
    // @only-server
    _resolvers.clear();
    this.register.clear();
  };

  readonly definition: Definition;

  id!: string;
  private _optionalId: string | undefined = undefined;

  get optionalId() {
    return this._optionalId;
  }

  constructor(
    definition: Definition extends ObjectFieldInput
      ? Definition | (() => Definition)
      : never
  );

  constructor(
    name: string,
    definition: Definition extends ObjectFieldInput
      ? Definition | (() => Definition)
      : never
  );

  constructor(...args: GraphTypeArgs) {
    initGraphType(this, args);

    const self = this;

    Object.defineProperties(this, {
      id: {
        enumerable: false,
        get() {
          if (self._optionalId) return self._optionalId;
          throw new RuntimeError(
            [
              'The method you are trying to execute requires the GraphType to be identified.\n' +
                'Examples:\n' +
                ' - `Type.identify("Foo")`\n' +
                " - `createType('Bar', FieldDefinition)`",
            ].join('\n'),
            this.__lazyGetter.definitionInput
          );
        },
      },
    });
  }

  // used to lazy process input definition to improve circular dependency in types
  __lazyGetter: LazyParseGraphTypePayload;

  touched = false;

  touch() {
    // just dispatch lazy loader getters
    this.__lazyGetter.id;
    return this;
  }

  private __hidden: boolean = false;

  identify = (name: string) => {
    this._optionalId = name;

    if (GraphType.register.has(name)) {
      //
    } else {
      if (!isBrowser()) {
        // @only-server
        PowershipWatchTypesPubSub.emit('created', {
          graphType: this as any,
        });
      }
      GraphType.register.set(name, this as any);
    }
  };

  set hidden(value) {
    this.__lazyGetter.field.hidden = value;
    this.__hidden = value;
  }

  get hidden() {
    return this.__hidden;
  }

  validate = (
    input: any,
    options?: FieldParserConfig
  ): input is Infer<Definition> => {
    try {
      this.parse(input, options);
      return true;
    } catch (e) {
      return false;
    }
  };

  parse = (input: any, options?: FieldParserConfig): Infer<Definition> => {
    const field = this.__lazyGetter.field;

    try {
      const _options = typeof options === 'object' ? options : {};

      const { includeHidden = true } = _options;

      if (this.__hidden && !includeHidden) return undefined as any;

      return field.parse(input, _options) as any;
    } catch (e: any) {
      let message = e.message;

      if (field.list) {
        message = `➤  ${message}`;
      } else {
        message = `➤ ${this.optionalId || ''} ${e.message}`;
      }

      e.message = message;
      throw e;
    }
  };

  _toGraphQL = (): ConvertFieldResult => {
    // @only-server
    return GraphQLParser.fieldToGraphQL({
      field: this.__lazyGetter.field,
      fieldName: this.id,
      parentName: this.id,
      path: [`Type_${this.id}`],
    }) as any;
  };

  graphQLType = (
    ...args: Parameters<ConvertFieldResult['type']>
  ): GraphQLNamedType => {
    return this._toGraphQL().type(...args) as any;
  };

  graphQLInputType = (
    ...args: Parameters<ConvertFieldResult['inputType']>
  ): GraphQLNamedInputType => {
    return this._toGraphQL().inputType(...args) as any;
  };

  graphQLInterface = (
    ...args: Parameters<GraphQLParserResult['interfaceType']>
  ): GraphQLInterfaceType => {
    if (!this.__lazyGetter.objectType) {
      throw new Error('graphQLInterface is only available for object type');
    }
    // @only-server
    return GraphQLParser.objectToGraphQL({
      object: this.__lazyGetter.objectType,
    }).interfaceType(...args) as any;
  };

  clone<T>(handler: (input: ExtendObjectDefinition<this, this>) => T): T {
    const parsed = parseField(this.definition);
    const input: any = extendObjectDefinition(parsed);
    return handler(input);
  }

  override<T>(handler: (input: ExtendType<this>) => T): T {
    const input = extendType(this.definition) as any;
    return handler(input);
  }

  beforeInitialize: ((
    definition: LazyParseGraphTypePayload
  ) => LazyParseGraphTypePayload)[] = [];

  mutateFields<Def extends ObjectDefinitionInput>(
    callback: (input: ExtendObjectDefinition<this, this>) => Def
  ): GraphType<{ object: Def }> {
    if (this.touched) {
      throw new Error(
        `Called "mutateFields" after type "${
          this.optionalId || ''
        }" was touched.`
      );
    }

    if (this.optionalId) {
      // ObjectType.register.remove(this.optionalId); // FIXME
    }

    this.beforeInitialize.push((payload) => {
      if (payload.definition.type !== 'object') {
        throw new Error(`mutateFields can only be used with object types.`);
      }

      try {
        const input: any = extendObjectDefinition(payload.definition);
        payload.definition.def = callback(input);
        payload.objectType = createObjectType({
          [this.id]: this.definition,
        }) as any;
        (payload.field as any).utils.object = payload.objectType;
        return payload;
      } catch (e: any) {
        e.message = `Failed to execute mutateFields with the result from callback: ${inspectObject(
          { callback }
        )}`;
        throw e;
      }
    });

    return this as any;
  }

  print = (): string[] => {
    const type = this.graphQLType();
    const inputType = this.graphQLInputType();

    // @only-server
    const object = new GraphQLSchema({
      // @ts-ignore
      types: [type, inputType],
    });
    // @only-server
    return printSchema(object).split('\n');
  };

  typescriptPrint = (
    options?: ObjectToTypescriptOptions & { name?: string }
  ): Promise<string> => {
    const name = options?.name || this.id;

    // @ts-ignore
    const object =
      this.__lazyGetter.objectType ||
      createObjectType({
        [name]: this.definition,
      });

    // @only-server
    return objectToTypescript(name, object, options) as any;
  };

  optionalType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<MakeTypeOptional<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}Optional` : undefined;
    return this.override((it) => it.optional()).graphType(_id) as any;
  };

  requiredType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<MakeTypeRequired<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}NotNull` : undefined;
    return this.override((it) => it.required()).graphType(_id) as any;
  };

  listType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<MakeTypeList<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}List` : undefined;
    return this.override((it) => it.list()).graphType(_id) as any;
  };

  singleType = (
    name?: string
  ): Definition extends unknown
    ? GraphType<MakeTypeSingle<Definition>>
    : never => {
    let _id = name || this.optionalId;
    _id = _id ? `${_id}Item` : undefined;
    return this.override((it) => it.single()).graphType(_id) as any;
  };

  /**
   * Get an Object with the provided id
   *    or set a new Object in the register if not found.
   * @param id
   * @param def
   */
  static getOrSet = <T extends ObjectFieldInput>(
    id: string,
    def: T
  ): GraphType<T> => {
    const existing =
      GraphType.register.has(id) && (GraphType.register.get(id) as any);

    if (existing) return existing;

    return new GraphType<any>(id, def) as any;
  };

  static is(input: any): input is GraphType<any> {
    return input?.__isGraphType === true;
  }

  static isTypeDefinition(input: any): input is {
    defaultValue?: unknown;
    description?: string;
    hidden?: boolean;
    list?: boolean;
    name?: string;
    optional?: boolean;
    type: GraphTypeLike;
  } {
    return input?.type?.__isGraphType === true;
  }
}

export type LazyParseGraphTypePayload = {
  // id can be from args or from the inner type, like an object type with id
  definition: FinalFieldDefinition;
  definitionInput: ObjectFieldInput | (() => ObjectFieldInput);
  field: TAnyFieldType;
  id: string | undefined;
  idFromArgs: string | undefined;
  objectType?: any;
};
export type GraphTypeArgs<Def extends ObjectFieldInput = ObjectFieldInput> =
  | [string, Def | (() => Def)]
  | [Def | (() => Def)];

export function createType<Definition extends ObjectFieldInput>(
  definition: Definition | (() => Definition)
): GraphType<Definition>;
export function createType<Definition extends ObjectFieldInput>(
  name: string,
  definition: Definition | (() => Definition)
): GraphType<Definition>;
export function createType(...args: any[]) {
  if (args.length === 1 && GraphType.is(args[0])) {
    return args[0];
  }
  return new GraphType(
    // @ts-ignore
    ...args
  );
}

export function getType(name: string): GraphTypeLike {
  return GraphType.register.get(name);
}

export function validateObjectFields(params: {
  definition: FinalFieldDefinition;
  fieldName: string;
  fieldParserOptions?: { excludeInvalidListItems?: boolean };
  parentType?: string;
  value: any;
}): {
  errors: string[];
  parsed?: any;
} {
  const { fieldName, definition, value, parentType, fieldParserOptions } =
    params;

  if (isMetaField(definition, fieldName)) {
    return {
      errors: [],
    };
  }

  function prefixError(msg: string) {
    return parentType
      ? `• ${parentType}[${fieldName}] ${msg}`
      : `➤ field "${fieldName}": ${msg.replace(/\.$/, '')}.`;
  }

  try {
    const field = __getCachedFieldInstance(definition);
    const parsed = field.parse(value, fieldParserOptions);

    return {
      errors: [],
      parsed,
    };
  } catch (e: any) {
    return {
      errors: [prefixError(`${e.message}`)],
    };
  }
}

export type ObjectFieldListItem = {
  instance: TAnyFieldType;
  name: string;
  plainField: FinalFieldDefinition;
};
export type ObjectHelpers = {
  keys: string[];
  list: ObjectFieldListItem[];
  meta: MetaFieldDef | undefined;
};

export function getObjectHelpers(object: any): ObjectHelpers {
  const list: ObjectFieldListItem[] = [];
  const definition = object.definition;
  const keys = getKeys(object.definition);
  let meta: MetaFieldDef | undefined;

  keys.forEach((fieldName) => {
    const field = definition[fieldName];

    if (isMetaFieldKey(fieldName)) {
      return (meta = field.def);
    }

    const instance = __getCachedFieldInstance(field);

    if (instance.asFinalFieldDef.hidden) return;

    list.push({
      instance,
      name: fieldName,
      plainField: field,
    });
  });

  return {
    keys,
    list,
    meta,
  };
}

export type ImplementObject<Dest, Extends> =
  //
  //
  Extends extends []
    ? Dest
    : Extends extends [infer Item, ...infer Rest]
    ? Dest extends ObjectType<infer DestDef>
      ? Item extends ObjectType<infer ItemDef>
        ? ImplementObject<
            ObjectType<{
              [K in keyof Merge<ItemDef, DestDef>]: Merge<ItemDef, DestDef>[K];
            }>,
            Rest
          >
        : never
      : never
    : never;

export function isObjectValidationError(
  input: any
): input is Error & { fieldErrors: string[] } {
  return input?.isObjectValidationError === true;
}

export function isObjectType(input: any): input is ObjectType<any> {
  return input?.__isPowershipObject === true;
}

export function implementObject<
  Def extends ObjectDefinitionInput,
  Parents extends ReadonlyArray<ObjectLike>
>(
  name: string,
  definition: Readonly<Def>,
  ...parents: Parents
): ImplementObject<ObjectType<Def>, Parents> {
  let def = simpleObjectClone(definition) as ObjectDefinitionInput;
  delete def[objectMetaFieldKey];

  const tree: string[] = [];

  parents.forEach((parent) => {
    if (!isObjectType(parent)) {
      throw new RuntimeError(
        `Failed to extend interface. Expected parent to be an Object.`,
        {
          parent,
        }
      );
    }

    // @ts-ignore
    def = parent.clone((el) => el.extendObjectDefinition(def).def());

    tree.push(parent.nonNullId);
  });

  const object = createObjectType(name, def);
  object.__setMetaData('implements', tree);

  return object as unknown as ImplementObject<ObjectType<Def>, Parents>;
}

export class ObjectType<
  Input,
  HandledInput extends _HandleGraphTypeInput<Input> = _HandleGraphTypeInput<Input>
> {
  get __isPowershipObject(): true {
    return true;
  }

  static __isPowershipObject: boolean = true;

  __withCache: WithCache<{
    helpers: ObjectHelpers;
  }>;

  inputDefinition: ObjectDefinitionInput | (() => ObjectDefinitionInput);

  constructor(objectDef: HandledInput | (() => HandledInput)) {
    this.inputDefinition = objectDef as ObjectDefinitionInput;
    this.__withCache = withCache(this);
  }

  private __definitionCache: any;

  get definition(): HandledInput {
    return (this.__definitionCache =
      this.__definitionCache ||
      (() => {
        const objectDef =
          typeof this.inputDefinition === 'function'
            ? // @ts-ignore
              this.inputDefinition()
            : this.inputDefinition;

        if (!objectDef || typeof objectDef !== 'object') {
          throw new Error('Expected object definition to be an object');
        }

        return parseObjectDefinition(objectDef).definition;
      })());
  }

  get description() {
    return this.meta.description;
  }

  private __hidden: boolean = false;

  set hidden(value) {
    this.__hidden = value;
  }

  get hidden() {
    return this.__hidden;
  }

  // definition without metadata (name, etc)
  cleanDefinition(): HandledInput {
    // @ts-ignore
    return cleanMetaField(this.clone((el) => el.def()));
  }

  edit(): ExtendObjectDefinition<
    { type: 'object'; def: HandledInput },
    { type: 'object'; def: HandledInput }
  > {
    return extendObjectDefinition(this) as any;
  }

  get meta(): MetaFieldDef {
    // @ts-ignore
    return this.definition[objectMetaFieldKey].def;
  }

  __setMetaData(k: keyof MetaFieldDef, value: Serializable) {
    // @ts-ignore
    this.definition[objectMetaFieldKey].def[k] = value;
  }

  parse(
    input: any,
    options?: {
      customMessage?: ValidationCustomMessage;
    } & FieldParserOptionsObject
  ): InferObjectDefinition<HandledInput>;

  parse(
    input: any,
    options?: {
      partial: true;
    } & FieldParserOptionsObject
  ): Partial<InferObjectDefinition<HandledInput>>;

  parse<Fields extends (keyof HandledInput)[]>(
    input: any,
    options: {
      customMessage?: ValidationCustomMessage;
      fields: Fields;
    } & FieldParserOptionsObject
  ): {
    [K in keyof InferObjectDefinition<HandledInput> as K extends Fields[number]
      ? K
      : never]: InferObjectDefinition<HandledInput>[K];
  };

  parse<Fields extends (keyof HandledInput)[]>(
    input: any,
    options: {
      exclude: Fields;
    } & FieldParserOptionsObject
  ): {
    [K in keyof InferObjectDefinition<HandledInput> as K extends Fields[number]
      ? never
      : K]: InferObjectDefinition<HandledInput>[K];
  };

  parse(
    input: any,
    options?: FieldParserOptionsObject
  ): InferObjectDefinition<HandledInput> {
    const { customMessage, customErrorMessage } = options || {};
    const { errors, parsed } = this.safeParse(input, options);

    if (errors.length) {
      let e_message = errors.join(' \n');

      if (this.id) {
        e_message = `${this.id}: ${e_message}`;
      }

      const err: any = parseValidationError(
        input,
        customMessage || customErrorMessage,
        e_message
      );
      err.isObjectValidationError = true;
      err.fieldErrors = errors;
      throw err;
    }

    return parsed as any;
  }

  softParse = <T = any>(
    input: any,
    options: FieldParserOptionsObject = {}
  ): InferObjectDefinition<HandledInput> & { [K: string]: T } => {
    return this.parse(input, { ...options, allowExtraFields: true });
  };

  validate(input: any): input is InferObjectDefinition<HandledInput> {
    try {
      this.parse(input);
      return true;
    } catch (e) {
      return false;
    }
  }

  safeParse(
    input: any,
    options?: {
      customMessage?: ValidationCustomMessage;
      excludeInvalidListItems?: boolean;
      fields?: keyof HandledInput[];
      partial?: boolean;
    } & FieldParserOptionsObject
  ): { errors: string[]; parsed: unknown } {
    const {
      partial = false,
      excludeInvalidListItems,
      includeHidden = true,
      allowExtraFields,
      exclude,
    } = options || {};

    const objectDef = { ...this.definition } as Record<
      string,
      FinalFieldDefinition
    >;

    if (this.__hidden && !includeHidden) return { errors: [], parsed: {} };

    const errors: string[] = [];
    const parsed: any = {};

    const fieldInputsList: {
      composer: FieldComposer | undefined;
      fieldDef: FinalFieldDefinition;
      key: string;
      value: any;
    }[] = [];

    if (!input || typeof input !== 'object' || Array.isArray(input)) {
      throw new RuntimeError(
        `Invalid input. Expected object, found ${getTypeName(input)}`,
        {
          input,
        }
      );
    }

    input = { ...input };

    const inputKeys = ((value) => {
      if (exclude) {
        return value.filter((el) => !exclude.includes(el));
      }
      return value;
    })(Object.keys(input));

    // @ts-ignore
    let fields = (options?.fields || Object.keys(this.definition)) as string[];

    // === Start handling {[K: string}: any}|{[K: number}: any} ===
    const anyStringKey = fields.find(
      (field) => field === SpecialObjectKeyEnum.$string
    );

    const anyNumberKey = fields.find(
      (field) => field === SpecialObjectKeyEnum.$number
    );

    if (anyNumberKey || anyStringKey) {
      const allFieldsSet = new Set(fields);
      const keysNotDefined = inputKeys.filter((k) => !allFieldsSet.has(k));
      fields = fields.filter(
        (k) => !SpecialObjectKeyEnum.list.includes(k as any)
      );

      if (anyStringKey) {
        const def = objectDef[anyStringKey];

        keysNotDefined.forEach((key) => {
          objectDef[key] = def;
        });
      } else if (anyNumberKey) {
        const def = objectDef[anyNumberKey];

        keysNotDefined.forEach((key) => {
          if (!key.match(/\d*/)) return;
          objectDef[key] = def;
        });
      }
    }
    // === End handling {[K: string}: any}|{[K: number}: any} ===

    fields.forEach((currField): any => {
      if (currField.startsWith('$')) return; // special field
      if (isMetaFieldKey(currField)) return;
      if (exclude && exclude.includes(currField)) return;

      // @ts-ignore
      const fieldDef: FinalFieldDefinition = objectDef[currField];

      if (!includeHidden && fieldDef.hidden) return;

      const value = input[currField];
      const isNullish = value === undefined || value === null;
      const isNullishAndPartial = isNullish && partial;
      if (isNullishAndPartial) return;

      if (fieldDef.type === 'alias') {
        const instance = __getCachedFieldInstance(fieldDef);
        return fieldInputsList.push({
          composer: instance.composer!,
          fieldDef,
          key: currField,
          value: undefined,
        });
      }

      fieldInputsList.push({
        composer: undefined,
        fieldDef,
        key: currField,
        value,
      });
    });

    // parsing ignoring aliases
    const notAliasFieldsResults = fieldInputsList.map((entry) => {
      const { key, fieldDef, value } = entry;

      const result = validateObjectFields({
        definition: fieldDef,
        fieldName: key,
        fieldParserOptions: { excludeInvalidListItems },
        value,
      });

      if (result.parsed !== undefined) {
        parsed[key] = result.parsed;
      }

      if (!entry.composer) {
        errors.unshift(...result.errors);
      }

      return {
        ...entry,
        ...result,
      };
    });

    // handling aliases
    notAliasFieldsResults.forEach((field) => {
      let { key, composer } = field;
      if (!composer) return;

      const value = composer.compose(parsed);
      const fieldDef = composer.def;

      const result = validateObjectFields({
        definition: fieldDef,
        fieldName: key,
        fieldParserOptions: { excludeInvalidListItems },
        value,
      });

      if (result.parsed !== undefined) {
        parsed[key] = result.parsed;
      }

      errors.unshift(...result.errors);
    });

    const resulting = allowExtraFields ? { ...input, ...parsed } : parsed;

    return {
      errors,
      parsed: resulting,
    };
  }

  describe(
    ...descriptions:
      | [comment: string]
      | [{ [K in keyof HandledInput]?: string }]
  ): ObjectType<HandledInput> {
    if (descriptions.length === 1 && typeof descriptions[0] === 'string') {
      this.__setMetaData('description', descriptions[0]);
      return this as any;
    }

    const commentsConfig = descriptions[0];

    invariantType({ commentsConfig }, 'object', { commentsConfig });

    const definition: FinalObjectDefinition = this.definition as any;

    Object.entries(commentsConfig).forEach(([name, comment]) => {
      invariantType(
        { [name]: definition[name] },
        'object',
        `"${name}" is not in object definition.`
      );
      definition[name].description = comment || '';
    });

    return this as any;
  }

  clone<T>(
    handler: (
      input: ExtendObjectDefinition<
        { object: HandledInput },
        { object: HandledInput }
      >
    ) => T
  ): T {
    const parsed = parseField(this);
    const input: any = extendObjectDefinition(parsed);
    return handler(input);
  }

  get id() {
    return this.meta.id;
  }

  get nonNullId() {
    const id = this.meta.id!;
    if (!id) {
      throw new RuntimeError('Expected object to be identified.', {
        definition: this.definition,
      });
    }
    return id;
  }

  identify<ID extends string>(id: ID): this & { id: ID } {
    if (id && id === this.id) return this as any;

    if (this.id) {
      throw new Error(
        `Trying to replace existing id "${this.id}" with "${id}". You can clone it to create a new Object.`
      );
    }

    expectedType({ id }, 'string', 'truthy');

    this.__setMetaData('id', id);
    ObjectType.register.set(id, this as any);

    return this as any;
  }

  helpers = () => {
    return this.__withCache('helpers', () =>
      getObjectHelpers(this)
    ) as ObjectHelpers;
  };

  // @only-server
  toGraphQL = (name?: string): GraphQLParserResult => {
    if (name) {
      this.identify(name);
    }

    if (!this.id) {
      throw new RuntimeError(
        'Should object.identify() before converting to Graphql.' +
          '\nYou can call object.clone() to choose a different identification.',
        { 'used definition': this.definition }
      );
    }

    // @only-server
    return GraphQLParser.objectToGraphQL({
      object: this,
    });
  };

  graphqlType = (options?: ParseTypeOptions): GraphQLObjectType => {
    return this.toGraphQL().getType(options);
  };

  graphqlInterfaceType = (
    options?: ParseInterfaceOptions
  ): GraphQLInterfaceType => {
    return this.toGraphQL().interfaceType(options);
  };

  graphqlPrint = (): string => {
    return this.toGraphQL().typeToString();
  };

  typescriptPrint = (options?: ObjectToTypescriptOptions): Promise<string> => {
    // @only-server
    return objectToTypescript(
      this.nonNullId,
      // @ts-ignore
      this,
      options
    ) as any;
  };

  graphqlTypeToString = (): string => {
    return this.toGraphQL().typeToString();
  };

  graphqlInputType = (options?: ParseInputTypeOptions) => {
    return this.toGraphQL().getInputType(options);
  };

  implement = <Parents extends ReadonlyArray<ObjectLike>>(
    name: string,
    ...parents: Parents
  ): ImplementObject<ObjectType<HandledInput>, Parents> => {
    return implementObject(name, this.definition as any, ...parents) as any;
  };

  static async reset() {
    ObjectType.register.clear();

    const promises: any[] = [];

    try {
      // only available server side or in tests
      // @only-server
      GraphQLParser.reset();
      // @only-server
      promises.push(GraphType.reset());
    } catch (e) {
      if (!isBrowser()) {
        throw e;
      }
    }

    await Promise.all(promises);
  }

  static register = createStore<Record<string, ObjectLike>>();

  /**
   * Get an Object with the provided id
   *    or set a new Object in the register if not found.
   * @param id
   * @param def
   */
  static getOrSet = <T extends ObjectDefinitionInput>(
    id: string,
    def: T | (() => T)
  ): ObjectType<T> => {
    const existing =
      ObjectType.register.has(id) &&
      (ObjectType.register.get(id) as ObjectType<T>);

    if (existing) {
      return existing;
    }

    // @ts-ignore
    return new ObjectType(() => {
      def = typeof def === 'function' ? def() : def;
      return def;
    }).identify(id);
  };

  graphQLMiddleware: GraphQLParseMiddleware[] = [];

  addGraphQLMiddleware = (
    middleware: GraphQLParseMiddleware[] | GraphQLParseMiddleware
  ) => {
    this.graphQLMiddleware.push(...ensureArray(middleware));
  };

  static is(input: any): input is ObjectType<ObjectDefinitionInput> {
    return isObjectType(input);
  }
}

export type ObjectTypeFromInput<
  DefinitionInput extends Readonly<ObjectDefinitionInput>
> = IsKnown<DefinitionInput> extends 1
  ? [DefinitionInput] extends [ObjectDefinitionInput]
    ? ObjectType<DefinitionInput>
    : never
  : any;

export function createObjectType<
  DefinitionInput extends Readonly<ObjectDefinitionInput>
>(fields: Readonly<DefinitionInput>): ObjectTypeFromInput<DefinitionInput>;
export function createObjectType<
  DefinitionInput extends Readonly<ObjectDefinitionInput>
>(name: string, fields: DefinitionInput): ObjectTypeFromInput<DefinitionInput>;
export function createObjectType<
  DefinitionInput extends Readonly<ObjectDefinitionInput>
>(
  ...args: [string, DefinitionInput] | [DefinitionInput]
): ObjectTypeFromInput<DefinitionInput> {
  const fields = args.length === 2 ? args[1] : args[0];

  const id = args.length === 2 ? args[0] : undefined;
  if (id) {
    // @ts-ignore
    return ObjectType.getOrSet(id, fields);
  }

  const idFromDefinition = getObjectDefinitionMetaField(fields)?.def?.id;

  if (idFromDefinition) {
    return ObjectType.getOrSet(idFromDefinition, fields) as any;
  }

  return new ObjectType(fields) as any;
}

export function resetTypesCache() {
  return ObjectType.reset();
}

type _HandleGraphTypeInput<T> = [IsKnown<T>] extends [1]
  ? {
      [K in keyof T as T[K] extends
        | { parse(...args: any): any }
        | any[]
        | Readonly<any[]>
        | { [K in FieldTypeName]?: any }
        | FieldAsString
        | { type: any }
        ? K
        : never]: T[K];
    } extends infer R
    ? T extends R
      ? T
      : T extends Readonly<R>
      ? T
      : {}
    : {}
  : {};

export class ObjectField<
  DefinitionInput extends ObjectDefinitionInput
> extends FieldType<unknown, 'object', DefinitionInput> {
  parse: FieldTypeParser<unknown>;

  utils: {
    object: any;
  };

  static is(t: any): t is AnyObjectField {
    return isFieldInstance(t) && t.typeName === 'object';
  }

  constructor(def: DefinitionInput) {
    super({ def: def, name: 'object' });

    this.utils = createProxy(() => ({
      object: createObjectType(def as any) as any,
    }));

    this.parse = this.applyParser({
      parse: (input, _options) => {
        return this.utils.object.parse(input, _options);
      },
    });
  }

  static create = <DefinitionInput extends ObjectDefinitionInput>(
    def: DefinitionInput
  ) => {
    return new ObjectField<DefinitionInput>(def);
  };
}

export class NullField extends FieldType<string, 'null', undefined> {
  parse: FieldTypeParser<string>;

  constructor() {
    super({ def: undefined, name: 'null' });

    this.parse = this.applyParser({
      parse(input: string) {
        expectedType({ value: input }, 'null');
        return input;
      },
      preParse(input: any) {
        if (input === undefined) return null;
        return input;
      },
    });
  }

  static create = (): NullField => {
    return new NullField();
  };
}

function createConstructors<T extends { [K in FieldTypeName]: any }>(
  input: T
): T {
  const res = Object.create(null);
  Object.entries(input).forEach(([k, val]) => (res[k] = val));
  Object.freeze(res);
  return res;
}

export type MetaFieldDef = {
  [K: string]: Serializable;
  description?: string;
  id: string | null;
  implements?: string[];
  custom?: CustomFieldConfig;
};

// MetaField is a special field type used to add metadata to an object
export class MetaField extends FieldType<MetaField, 'meta', MetaFieldDef> {
  parse: FieldTypeParser<MetaField>;

  constructor(def: MetaFieldDef = { id: null }) {
    super({ def: def, name: 'meta' });
    this.toOptional();
    const { id, description } = def;

    expectedType({ id }, ['string', 'null']);
    expectedType({ description }, ['string'], true);

    this.parse = this.applyParser({
      parse: (input: MetaField) => {
        expectedType({ value: input?.['id'] }, 'string');
        expectedType({ value: input?.['description'] }, 'string', true);

        return input;
      },
    });
  }

  static create = (def: MetaFieldDef = { id: null }): MetaField => {
    return new MetaField(def);
  };

  toString = () => `${this.typeName}(${this.def?.id || ''})`;
}

export const objectMetaFieldKey = '__dschm__';

export function createEmptyMetaField(): MetaField['asFinalFieldDef'] {
  return {
    def: { id: null },
    defaultValue: undefined,
    type: 'meta',
  };
}

export function cleanMetaField(input: any) {
  if (!input || typeof input !== 'object') return input;

  const defType = getTypeName(input.def).toLowerCase();

  if (defType === 'object') {
    const { __dschm__, ...def } = input.def;
    return {
      ...input,
      def,
    };
  }

  if (input[objectMetaFieldKey]) {
    const { __dschm__, ...rest } = input;
    return rest;
  }

  return input;
}

export function isMetaFieldKey(t: any): t is typeof objectMetaFieldKey {
  return t === objectMetaFieldKey;
}

export function isMetaField(
  t: any,
  fieldName?: string
): t is MetaField['asFinalFieldDef'] {
  if (fieldName && fieldName !== objectMetaFieldKey) return false;
  return (
    t && typeof t === 'object' && t.type === 'meta' && typeof t.def === 'object'
  );
}

export function getObjectDefinitionMetaField(
  input: Record<string, any>
): MetaField['asFinalFieldDef'] | undefined {
  return input[objectMetaFieldKey];
}

export function getObjectDefinitionId(
  definition: Record<string, any>,
  nullable: true
): string | undefined;
export function getObjectDefinitionId(definition: Record<string, any>): string;
export function getObjectDefinitionId(
  definition: Record<string, any> = {},
  nullable = false
) {
  const id = getObjectDefinitionMetaField(definition)?.def?.id;

  if (nullable) return id || undefined;

  return nonNullValues(
    {
      id,
    },
    'Object not identified.'
  ).id;
}

const PROTO_KEY = '__o.proto__';

export interface LiteralFieldDef {
  '__o.proto__': string;
  value: string;
}

export class LiteralField<T extends Readonly<Serializable>> extends FieldType<
  T,
  'literal',
  LiteralFieldDef
> {
  parse: FieldTypeParser<T>;
  __isLiteralField = true;

  static utils = {
    deserialize(def: LiteralFieldDef): any {
      const isFinalDef = def && typeof def === 'object' && PROTO_KEY in def;

      if (!isFinalDef) {
        throw new Error(`Invalid LiteralFieldDef: ` + inspectObject(def));
      }

      const typename = getTypeName(def.value);

      if (def[PROTO_KEY] === typename) return def.value;

      try {
        return BJSON.parse(def.value);
      } catch (e) {
        throw new RuntimeError(`Failed deserialize value`, {
          ...def,
        });
      }
    },

    serialize(value: any): string {
      if (typeof value === 'string') return value;

      try {
        return BJSON.stringify(value);
      } catch (e) {
        throw new RuntimeError(`Failed to serialize`, {
          //
        });
      }
    },

    toDef(input: any): LiteralFieldDef {
      if (LiteralField.isLiteralFieldDef(input)) return input;

      return {
        [PROTO_KEY]: getTypeName(input),
        value: LiteralField.utils.serialize(input),
      };
    },
  };

  constructor(def: T) {
    super({ def: LiteralField.utils.toDef(def), name: 'literal' });
    const expected = this.def.value;

    this.parse = this.applyParser({
      parse(input: T) {
        const received = LiteralField.utils.serialize(input);

        if (expected !== received) {
          throw new Error(
            `Unexpected literal value:\nExpected:\n${expected}\nReceived:\n${received}`
          );
        }
        return input;
      },
    });
  }

  static create = <T extends Readonly<Serializable>>(
    def: T
  ): LiteralField<T> => {
    return new LiteralField<T>(def);
  };

  static isFinalTypeDef(t: any): t is LiteralField<any> {
    return t?.type === 'literal';
  }

  static is(t: any): t is LiteralField<any> {
    return t?.__isLiteralField === true;
  }

  static isLiteralFieldDef(t: any): t is LiteralFieldDef {
    return typeof t?.[PROTO_KEY] === 'string';
  }
}

export type IntFieldDef = {
  max?: number;
  min?: number;
};

export class IntField extends FieldType<
  number,
  'int',
  IntFieldDef | undefined
> {
  parse: FieldTypeParser<number>;

  constructor(def: IntFieldDef = {}) {
    super({ def: def, name: 'int' });
    const { min, max } = def;

    expectedType({ max, min }, 'number', true);

    this.parse = this.applyParser({
      parse: (input: number) => {
        expectedType({ value: input }, 'number');

        if (!Number.isInteger(input)) {
          throw new Error(`${input} is not a valid integer.`);
        }

        if (max !== undefined && input > max) {
          throw new Error(`${input} is more than the maximum ${max}.`);
        }

        if (min !== undefined && input < min) {
          throw new Error(`${input} is less than the minimum ${min}.`);
        }

        return input;
      },
      preParse(input: any) {
        if (typeof input === 'string' && input !== '') {
          const asNumber = +input;
          if (!isNaN(asNumber)) return asNumber;
        }
        return input;
      },
    });
  }

  static create = (def: IntFieldDef = {}): IntField => {
    return new IntField(def);
  };
}

export type IDFieldDef = {
  autoCreate?: boolean;
};

export class IDField extends FieldType<string, 'ID', IDFieldDef> {
  parse: FieldTypeParser<string>;

  constructor(def: IDFieldDef = {}) {
    super({ def: def, name: 'ID' });
    const { autoCreate } = def;

    this.parse = this.applyParser({
      parse(input: string) {
        expectedType({ value: input }, 'string');
        return input;
      },

      preParse(input: any) {
        if (autoCreate && input === undefined) {
          return ulid();
        }
        return input;
      },
    });
  }

  static create = (def: IDFieldDef = {}): IDField => {
    return new IDField(def);
  };
}

export type FloatFieldDef = {
  max?: number;
  min?: number;
};

export class FloatField extends FieldType<
  number,
  'float',
  FloatFieldDef | undefined
> {
  parse: FieldTypeParser<number>;

  constructor(def: FloatFieldDef = {}) {
    super({ def: def, name: 'float' });

    const { min, max } = def;

    expectedType({ max, min }, 'number', true);

    this.parse = this.applyParser({
      parse: (input: number) => {
        expectedType({ value: input }, 'number');

        if (max !== undefined && input > max) {
          throw new Error(`${input} is more than the maximum ${max}.`);
        }

        if (min !== undefined && input < min) {
          throw new Error(`${input} is less than the minimum ${min}.`);
        }

        return input;
      },
      preParse(input: any) {
        if (typeof input === 'string' && input !== '') {
          const asNumber = +input;
          if (!isNaN(asNumber)) return asNumber;
        }
        return input;
      },
    });
  }

  static create = (def: FloatFieldDef = {}): FloatField => {
    return new FloatField(def);
  };

  toString = () => `${this.typeName}(${this.def || ''})`;
}

export class EnumField<
  U extends string,
  T extends Readonly<[U, ...U[]]>
> extends FieldType<T[number], 'enum', T> {
  //
  parse: FieldTypeParser<T[number]>;

  get value(): T {
    return this.def;
  }

  constructor(def: T) {
    super({ def: def, name: 'enum' });

    this.parse = this.applyParser({
      parse: (input: any) => {
        if (!this.def.includes(input)) {
          throw new Error(
            `accepted: ${this.def
              .map((e) => `'${e}'`)
              .join(' or ')}, found ${input}.`
          );
        }

        return input;
      },
    });
  }

  static create = <U extends string, T extends Readonly<[U, ...U[]]>>(
    def: T
  ): FieldType<T[number], 'enum', T> => {
    return new EnumField(def);
  };
}

type EmailDef = {
  errorMessage?: string;
  regex?: [string] | [string, string];
};
// https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/web_tests/fast/forms/resources/ValidityState-typeMismatch-email.js?q=ValidityState-typeMismatch-email.js&ss=chromium
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript/46181#46181
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export class EmailField extends FieldType<
  string,
  'email',
  EmailDef | undefined
> {
  parse: FieldTypeParser<string>;

  constructor(def: EmailDef = {}) {
    super({ def: def, name: 'email' });

    let { regex: _regex = emailRegex } = def;

    if (def.regex && !Array.isArray(def.regex)) {
      throw new Error(
        `Invalid regex definition received. Expected [string] | [string, string].`
      );
    }

    const regex = Array.isArray(_regex)
      ? new RegExp(_regex[0], _regex[1])
      : _regex;

    this.parse = this.applyParser({
      parse: (input: any) => {
        expectedType({ value: input }, 'string');

        if (!regex.test(input)) {
          throw new Error(`Invalid email received.`);
        }

        return input;
      },
    });
  }

  static create = (def?: EmailDef): EmailField => {
    return new EmailField(def);
  };
}

export type DateFieldDef = {
  autoCreate?: boolean;
  max?: Date;
  min?: Date;
};

export class DateField extends FieldType<
  Date,
  'date',
  DateFieldDef | undefined
> {
  parse: FieldTypeParser<Date>;

  constructor(def: DateFieldDef = {}) {
    super({ def: def, name: 'date' });
    const { min, max, autoCreate } = def;

    let minTime = 0;
    let maxTime = 0;

    expectedType({ max, min }, 'date', true);

    if (min !== undefined) {
      minTime = min.getTime();
    }

    if (max !== undefined) {
      maxTime = max.getTime();
    }

    this.parse = this.applyParser({
      parse: (input: unknown) => {
        expectedType({ value: input }, ['date', 'string', 'number']);
        const date = DateField.serialize(input);

        const inputTime = date.getTime();

        if (minTime !== 0 && inputTime < minTime && min) {
          throw new Error(
            `${date.toISOString()} is less than the minimum ${min.toISOString()}.`
          );
        }

        if (maxTime !== 0 && inputTime > maxTime && max) {
          throw new Error(
            `${date.toISOString()} is more than the maximum ${max.toISOString()}.`
          );
        }

        return date;
      },
      preParse(input: any) {
        if (autoCreate && input === undefined) {
          return new Date();
        }
        return input;
      },
    });
  }

  static create = (def: DateFieldDef = {}): DateField => {
    return new DateField(def);
  };

  static serialize(value: unknown): Date {
    const date = dateSerialize(value);

    if (!(date instanceof Date)) {
      throw new TypeError('Field error: value is not an instance of Date');
    }

    return date;
  }
}

const cursor_def = {
  PK: {
    description: 'Primary Key',
    string: {},
  },
  SK: {
    description: 'Secondary or Sort Key',
    optional: true,
    string: {},
  },
  after: {
    // description: '',
    optional: true,

    string: {},
  },
  fields: {
    list: true,

    // description: '',
    optional: true,
    string: {},
  },
  limit: {
    int: {},
    // description: '',
    optional: true,
  },
  prefix: {
    description: 'The prefix to search as "startsWith" in SK',
    optional: true,
    string: {},
  },
  sep: {
    description: 'Composite key separator',
    optional: true,
    string: {},
  },
  version: {
    description: 'The Cursor format version',
    string: {},
  },
} as const;
type CursorDef = typeof cursor_def;
let cursorObject: ObjectType<CursorDef> | undefined;

function getCursorObject() {
  // circular dependency
  cursorObject = cursorObject || createObjectType('Cursor', cursor_def);
  return cursorObject;
}

export class CursorField extends FieldType<CursorType, 'cursor', undefined> {
  parse: FieldTypeParser<CursorType>;

  utils: {
    object: ObjectType<CursorDef>;
  };

  static object() {
    return getCursorObject()!;
  }

  constructor() {
    super({ def: undefined, name: 'cursor' });

    this.utils = createProxy(() => ({
      object: getCursorObject()!,
    }));

    const parser = this.utils.object.parse.bind(this.utils.object);

    this.parse = this.applyParser({
      parse: (value) => {
        if (typeof value !== 'object') {
          throw new Error(`Expected cursor, found ${value}`);
        }

        return parser(value);
      },
    });
  }

  static create = (): CursorField => {
    return new CursorField();
  };
}

export class BooleanField extends FieldType<boolean, 'boolean', undefined> {
  parse: FieldTypeParser<boolean>;

  constructor() {
    super({
      def: undefined,
      name: 'boolean',
    });
    this.parse = this.applyParser({
      parse: (input) => {
        if (typeof input !== 'boolean') {
          throw new Error(`Expected boolean, found ${getTypeName(input)}`);
        }
        return input;
      },
    });
  }

  static create = (): BooleanField => {
    return new BooleanField();
  };
}

export type ArrayFieldDef<Of = any> = {
  length?: number;
  max?: number;
  min?: number;
  of: Cast<Of, ObjectFieldInput>;
};

export class ArrayField<T extends ArrayFieldDef> extends FieldType<
  Infer<T['of']>[],
  'array',
  T
> {
  //
  parse: FieldTypeParser<Infer<T>[]>;

  utils = {
    listItemType: {} as TAnyFieldType,
  };

  static is(item: any): item is ArrayField<any> {
    return item?.typeName === 'list';
  }

  constructor(def: T) {
    super({ def: def, name: 'array' });

    try {
      this.utils.listItemType = parseObjectField(`ListItem`, def.of, {
        returnInstance: true,
      });
    } catch (e: any) {
      let message = `Filed to parse type:`;
      message += `\n${inspectObject(def, { tabSize: 2 })}`;
      e.stack = message + '\n' + e.stack;
      throw e;
    }

    const self = this;
    this.parse = this.applyParser({
      parse: (input: any, options) => {
        if (input === undefined && this.optional) return input;
        return arrayFieldParse({
          arrayOptions: self.def,
          input,
          parser: self.utils.listItemType.parse,
          parserOptions: options,
        });
      },
    });
  }

  static create = <T extends ArrayFieldDef>(def: T): ArrayField<T> => {
    return new ArrayField(def) as any;
  };
}

export class AnyField extends FieldType<any, 'any', any> {
  parse: FieldTypeParser<any>;

  constructor(..._args: any) {
    super({
      def: undefined,
      name: 'any',
    });

    this.parse = this.applyParser({
      parse: (input) => {
        return input;
      },
    });
  }

  static create = (..._args: any): AnyField => {
    return new AnyField();
  };
}

export type AliasFieldAggregation<Parent = any> = {
  type: FieldDefinition;
} & (
  | {
      from: ObjectPath<Parent>;
      aggregate: Aggregation<Parent> | Readonly<Aggregation<Parent>>;
    }
  | {
      aggregate: Aggregation<Parent> | Readonly<Aggregation<Parent>>;
      from?: undefined;
    }
  | { from: ObjectPath<Parent>; aggregate?: undefined }
);
export type AliasFieldDef = string | AliasFieldAggregation;

export class AliasField<InputDef extends AliasFieldDef = any> extends FieldType<
  InputDef extends { type: infer T } ? Infer<T> : any,
  'alias',
  AliasFieldDef
> {
  parse: FieldTypeParser<any>;

  utils = {} as {
    fieldType: TAnyFieldType;
  };

  composer: FieldComposer;

  static is(input: any): input is AliasField {
    return input?.__isFieldType && input?.type === 'alias';
  }

  static assert(input: any): asserts input is AliasField {
    assertEqual(this.is(input), true, 'NOT_ALIAS_FIELD');
  }

  constructor(def: AliasFieldDef) {
    super({
      def,
      name: 'alias',
    });

    let fieldType: any = null;

    Object.defineProperty(this.utils, 'fieldType', {
      get() {
        return (fieldType =
          fieldType ||
          createType(typeof def === 'string' ? 'any' : def.type).__lazyGetter
            .field);
      },
    });

    this.composer = {
      compose: (parent: Record<string, any>) => {
        if (typeof this.def === 'string') {
          return pick(parent, this.def);
        }
        if (this.def.from) {
          parent = pick(parent, this.def.from) as any;
          if (!this.def.aggregate) return parent;
        }

        nonNullValues({ aggregate: this.def.aggregate });
        return aggio([parent], this.def.aggregate as Aggregation<any>);
      },
      def: this.utils.fieldType.asFinalFieldDef,
      validate: (value) => {
        return this.utils.fieldType.validate(value);
      },
    };

    this.parse = (input) => {
      return this.utils.fieldType.parse(input);
    };
  }

  static create = (def: AliasFieldDef): AliasField => {
    return new AliasField(def);
  };
}

const createTypes = () =>
  createConstructors({
    ID: IDField,
    alias: AliasField,
    any: AnyField,
    array: ArrayField,
    boolean: BooleanField,
    cursor: CursorField,
    date: DateField,
    email: EmailField,
    enum: EnumField,
    float: FloatField,
    int: IntField,
    literal: LiteralField,
    meta: MetaField,
    null: NullField,
    object: ObjectField,
    phone: PhoneField,
    record: RecordField,
    string: StringField,
    ulid: UlidField,
    undefined: UndefinedField,
    union: UnionField,
    unknown: UnknownField,
  });
export const types = new Proxy(
  Object.create(null) as ReturnType<typeof createTypes>,
  {
    get(_, key: string) {
      return createTypes()[key];
    },
  }
);
export type Types = typeof types;
export type FieldCreators = Readonly<{
  [K in FieldTypeName]: Types[K]['create'];
}>;

export const create: FieldCreators = new Proxy(Object.create(null), {
  get(_, key) {
    return createTypes()[key].create;
  },
});

export function isFieldTypeName(t: any): t is FieldTypeName {
  return typeof t === 'string' && types[t];
}

export interface ObjectLike {
  __isPowershipObject: true;
  definition: { [K: string]: any };
}

export interface GraphTypeLike {
  __isGraphType: true;
  __lazyGetter: LazyParseGraphTypePayload;
  definition: AnyRecord;
  readonly id: string;
  readonly optionalId: string | undefined;

  parse(value: any, options?: FieldParserConfig): any;
}

/**
 * Checks if the field names should be hidden from generated code
 * @param name
 */
export function isHiddenFieldName(name: string) {
  return name === '__dschm__';
}

export type ObjectMockOptions = {
  maxArrayLength?: number;
  randomNumber?: () => number;
  randomText?: () => string;
};

export function objectMock<T extends { [K: string]: FieldDefinition }>(
  definition: T,
  options?: ObjectMockOptions
): Infer<{ object: T }> {
  const placeHolder: any = {};

  const composers: { composer: FieldComposer; key: string }[] = [];
  Object.entries(definition).forEach(([key, fieldInput]) => {
    if (isMetaFieldKey(key)) return;
    const def = parseObjectField(key, fieldInput);

    if (def.type === 'alias') {
      const instance = __getCachedFieldInstance(def);
      composers.push({ composer: instance.composer!, key });
    }
    placeHolder[key] = fieldToMock(def, options);
  });

  composers.forEach((el) => {
    setByPath(placeHolder, el.key, el.composer.compose(placeHolder));
  });

  return placeHolder;
}

export function fieldToMock(
  fieldInput: FieldDefinition,
  options?: ObjectMockOptions
): any {
  const {
    randomText = randomName,
    maxArrayLength = 1,
    randomNumber,
  } = options || {};

  let { list, def, type } = parseObjectField('temp', fieldInput);

  if (type === 'array') {
    const min = def.min === undefined ? 1 : def.min;
    const max = def.max === undefined ? Math.max(min, 1) : def.max;
    const length = Math.min(min, max);

    return [...Array(length)].map(() => {
      return fieldToMock(def.of, options);
    });
  }

  const values: { [L in FieldTypeName]: () => unknown } = {
    ID: () => ulid(),
    alias: () => undefined,
    any: () => '_ANY_',
    array: () => undefined,
    // handled below,
    boolean: () => randomItem(true, false),
    cursor: () => objectMock(CursorField.object().definition, options),
    date: () => new Date(randomInt(Date.now())),
    email: () => {
      return `${slugify(randomText().toLowerCase())}@${slugify(
        randomText().toLowerCase()
      )}${randomItem('.com', '.net', '.com.br', '.co', '.sh')}`;
    },
    enum: () => (Array.isArray(def) ? def[0] : undefined),
    float: () => (randomNumber || randomInt)(),
    int: () => (randomNumber || randomInt)(),
    literal: () => LiteralField.utils.deserialize(def),
    meta: () => createEmptyMetaField(),
    null: () => null,
    object: () => (def ? objectMock(def, options) : undefined),
    phone: () => '+5511912345678',
    record: () => ({ [randomText()]: 123 }),
    string: () => randomText(),
    ulid: () => ulid(),
    undefined: () => undefined,
    union: () => (Array.isArray(def) ? fieldToMock(def[0]) : undefined),
    unknown: () => Date,
  };

  if (list) {
    return [
      ...Array(randomInt(Math.min(3, maxArrayLength), maxArrayLength)),
    ].map(() => {
      return values[type]();
    });
  }

  return values[type]();
}

export function parseTypeName(input: {
  field: FinalFieldDefinition;
  fieldName: string;
  parentName: string;
}) {
  const { field, parentName, fieldName } = input;
  const userDefined = getUserDefinedTypeName(field);

  let result =
    userDefined || `${parentName}${fieldName ? `_${fieldName}` : ''}`;

  if (!result) {
    throw new RuntimeError(
      `parseTypeName: failed to generate a valid type name`,
      input
    );
  }

  return result;
}

function getUserDefinedTypeName(field: FinalFieldDefinition) {
  if (field.name && typeof field.name === 'string') return field.name;

  const cached = __getCachedFieldInstance(field);
  if (cached.id) return cached.id;

  return field.type === 'object'
    ? getObjectDefinitionMetaField(field.def)?.def.id
    : null;
}
