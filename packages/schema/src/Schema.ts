import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { StrictMap } from '@darch/utils/lib/StrictMap';
import { dynamicRequire } from '@darch/utils/lib/dynamicRequire';
import { isProduction } from '@darch/utils/lib/env';
import { expectedType } from '@darch/utils/lib/expectedType';
import { getTypeName } from '@darch/utils/lib/getTypeName';
import { invariantType } from '@darch/utils/lib/invariant';
import { isBrowser } from '@darch/utils/lib/isBrowser';
import { simpleObjectClone } from '@darch/utils/lib/simpleObjectClone';
import { ForceString } from '@darch/utils/lib/typeUtils';
import type {
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
} from 'graphql';

import type { DarchGraphQLType } from './DarchGraphQLType';
import type { ParseTypeOptions } from './GraphQLParser/GraphQLParser';
import type { ParseInterfaceOptions } from './GraphQLParser/GraphQLParser';
import type { Infer } from './Infer';
import type { SchemaDefinitionInput } from './TSchemaConfig';
import {
  parseValidationError,
  ValidationCustomMessage,
} from './applyValidator';
import { assertSameDefinition } from './assertSameDefinition';
import {
  getSchemaDefinitionMetaField,
  isMetaFieldKey,
  MetaFieldDef,
  schemaMetaFieldKey,
  Serializable,
} from './fields/MetaFieldField';
import type {
  FinalSchemaDefinition,
  ParseFields,
  SchemaFieldInput,
  ToFinalField,
} from './fields/_parseFields';
import { validateSchemaFields } from './getSchemaErrors';
import { getSchemaHelpers, SchemaHelpers } from './getSchemaHelpers';
import { parseSchemaDefinition } from './parseSchemaDefinition';
import type { SchemaToTypescriptOptions } from './schemaToTypescript';
import { withCache, WithCache } from './withCache';

export { RuntimeError } from '@darch/utils/lib/RuntimeError';
export * from './parseSchemaDefinition';
export * from './schemaInferenceUtils';
export * from './implementSchema';

export class Schema<DefinitionInput extends SchemaDefinitionInput> {
  private readonly __definition: any;

  __withCache: WithCache<{
    graphqlInputType: GraphQLInputObjectType;
    graphqlType: GraphQLObjectType;
    graphqlInterfaceType: GraphQLInterfaceType;
    helpers: SchemaHelpers<DefinitionInput>;
  }>;

  constructor(schemaDef: DefinitionInput) {
    const parsed = parseSchemaDefinition(schemaDef);
    this.__definition = parsed.definition;
    this.__withCache = withCache(this);
  }

  get definition(): ParseFields<DefinitionInput> {
    return this.__definition;
  }

  get description() {
    return this.meta.description;
  }

  get meta(): MetaFieldDef {
    return this.__definition[schemaMetaFieldKey].def;
  }

  __setMetaData(k: keyof MetaFieldDef, value: Serializable) {
    this.__definition[schemaMetaFieldKey].def[k] = value;
  }

  parse(
    input: any,
    options?: {
      customMessage?: ValidationCustomMessage;
    }
  ): Infer<DefinitionInput>;

  parse(
    input: any,
    options?: {
      partial: true;
      customMessage?: ValidationCustomMessage;
    }
  ): Partial<Infer<DefinitionInput>>;

  parse<Fields extends (keyof DefinitionInput)[]>(
    input: any,
    options: {
      customMessage?: ValidationCustomMessage;
      fields: Fields;
    }
  ): {
    [K in keyof Infer<DefinitionInput> as K extends Fields[number]
      ? K
      : never]: Infer<DefinitionInput>[K];
  };

  parse(input: any, options?: any) {
    const { customMessage } = options || {};
    const { errors, parsed } = this.safeParse(input, options);

    if (errors.length) {
      const err: any = parseValidationError(
        input,
        customMessage,
        errors.join(' \n')
      );
      err.isSchemaValidationError = true;
      err.fieldErrors = errors;
      throw err;
    }

    return parsed as any;
  }

  validate(input: any): input is Infer<DefinitionInput> {
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
      partial?: boolean;
      customMessage?: ValidationCustomMessage;
      fields?: keyof DefinitionInput[];
    }
  ): { errors: string[]; parsed: unknown } {
    const { partial = false, fields = Object.keys(this.definition) } =
      options || {};

    const SchemaConstructor: any = this.constructor;

    const errors: string[] = [];
    const parsed: any = {};

    if (!input || typeof input !== 'object' || Array.isArray(input)) {
      throw new RuntimeError(
        `Invalid input. Expected object, found ${getTypeName(input)}`,
        {
          input,
        }
      );
    }

    (fields as string[]).forEach((currField) => {
      if (isMetaFieldKey(currField)) return;

      const value = input[currField];

      const fieldDef = this.definition[currField];

      if (value === undefined && partial) {
        return;
      }

      const result = validateSchemaFields({
        createSchema: (def) => new SchemaConstructor(def),
        fieldName: currField,
        definition: fieldDef,
        value,
      });

      if (Object.prototype.hasOwnProperty.call(input, currField)) {
        parsed[currField] = result.parsed;
      }

      errors.push(...result.errors);
    });

    return { parsed, errors };
  }

  describe(
    ...descriptions:
      | [comment: string]
      | [{ [K in keyof DefinitionInput]?: string }]
  ): Schema<DefinitionInput> {
    if (descriptions.length === 1 && typeof descriptions[0] === 'string') {
      this.__setMetaData('description', descriptions[0]);
      return this;
    }

    const commentsConfig = descriptions[0];

    invariantType({ commentsConfig }, 'object', { commentsConfig });

    const definition: FinalSchemaDefinition = this.definition as any;

    Object.entries(commentsConfig).forEach(([name, comment]) => {
      invariantType(
        { [name]: definition[name] },
        'object',
        `"${name}" is not in schema definition.`
      );
      definition[name].description = comment || '';
    });

    return this;
  }

  removeField<K extends ForceString<keyof DefinitionInput>>(
    field: K | K[]
  ): OmitDefinitionFields<DefinitionInput, K> {
    const fields: string[] = Array.isArray(field) ? field : [field];
    const clone = this.clone();

    for (const k in clone.__definition) {
      if (fields.includes(k)) {
        delete clone.__definition[k];
      }
    }

    return clone as any;
  }

  addFields<T extends SchemaDefinitionInput>(
    definition: T
  ): SchemaExtendDefinition<ParseFields<DefinitionInput>, T> {
    return this.clone(definition) as any;
  }

  makeOptional<K extends ForceString<keyof DefinitionInput>>(
    fields: K | K[]
  ): Schema<MakeOptional<DefinitionInput, K>> {
    const fieldList = Array.isArray(fields) ? fields : [fields];
    const clone = this.clone();
    fieldList.forEach((key) => (clone.__definition[key].optional = true));
    return clone as any;
  }

  makeRequired<K extends ForceString<keyof DefinitionInput>>(
    fields: K | K[]
  ): Schema<MakeRequired<DefinitionInput, K>> {
    const fieldList = Array.isArray(fields) ? fields : [fields];
    const clone = this.clone();
    fieldList.forEach((key) => (clone.__definition[key].optional = false));
    return clone as any;
  }

  get __isDarchSchema(): true {
    return true;
  }

  clone(name?: string): this;

  clone<T extends SchemaDefinitionInput>(
    extend: T,
    name?: string
  ): SchemaExtendDefinition<ParseFields<DefinitionInput>, T>;

  clone<T extends Record<string, SchemaFieldInput | null>>(
    extend: (current: ParseFields<DefinitionInput>) => T,
    name?: string
  ): Schema<{ [K in keyof ExcludeNull<T>]: ExcludeNull<T>[K] }>;

  clone<K extends keyof DefinitionInput>(
    fields: K[],
    name?: string
  ): Schema<CloneFields<ParseFields<DefinitionInput>, K>>;

  clone<
    K extends keyof DefinitionInput,
    T extends Record<string, SchemaFieldInput | null>
  >(
    fields: K[],
    extend: (current: CloneFields<ParseFields<DefinitionInput>, K>) => T,
    name?: string
  ): Schema<{ [K in keyof ExcludeNull<T>]: ExcludeNull<T>[K] }>;

  clone(...args: any[]) {
    const lastArg = args[args.length - 1];

    let newId;
    if (typeof lastArg === 'string') {
      newId = args.pop();
    }

    const definitionClone = simpleObjectClone(this.definition);
    delete definitionClone[schemaMetaFieldKey];

    let extend;
    let fields;

    if (args.length === 1) {
      if (Array.isArray(args[0])) {
        fields = args[0];
      } else {
        extend = args[0];
      }
    }

    if (args.length === 2) {
      fields = args[0];
      extend = args[1];
    }

    if (Array.isArray(fields)) {
      for (const k in definitionClone) {
        if (!fields.includes(k)) {
          delete definitionClone[k];
        }
      }
    }

    const def =
      typeof extend === 'function'
        ? extend(definitionClone)
        : typeof extend === 'object'
        ? { ...definitionClone, ...extend }
        : definitionClone;

    Object.keys(def).forEach((k) => {
      if (!def[k]) {
        delete def[k];
      }
    });

    const schema = createSchema(def);

    if (newId) {
      schema.identify(newId);
    }

    return schema as any;
  }

  get id() {
    return this.meta.id;
  }

  get nonNullId() {
    const id = this.meta.id!;
    if (!id) {
      throw new RuntimeError('Expected schema to be identified.', {
        definition: this.definition,
      });
    }
    return id;
  }

  identify<ID extends string>(id: ID): this & { id: ID } {
    if (id && id === this.id) return this as any;

    if (this.id) {
      throw new Error(
        `Trying to replace existing id "${this.id}" with "${id}". You can clone it to create a new Schema.`
      );
    }

    expectedType({ id }, 'string', 'truthy');

    if (Schema.register.has(id) && Schema.register.get(id) !== this) {
      console.error(`Schema with id "${id}" already registered.`);
    }

    this.__setMetaData('id', id);
    Schema.register.set(id, this);

    return this as any;
  }

  helpers = () => {
    return this.__withCache('helpers', () => getSchemaHelpers(this));
  };

  toGraphQL = (name?: string) => {
    if (isBrowser() || typeof module?.require !== 'function') {
      throw new Error('GraphQL transformation is not available in browser.');
    }

    if (name) {
      this.identify(name);
    }

    if (!this.id) {
      throw new RuntimeError(
        'Should schema.identify() before converting to Graphql.' +
          '\nYou can call schema.clone() to choose a different identification.',
        { 'used definition': this.definition }
      );
    }

    const { GraphQLParser } = Schema.serverUtils().graphqlParser;

    return GraphQLParser.schemaToGraphQL({
      schema: this,
    });
  };

  graphqlType = (options?: ParseTypeOptions): GraphQLObjectType => {
    return this.__withCache('graphqlType', () =>
      this.toGraphQL().getType(options)
    );
  };

  graphqlInterfaceType = (
    options?: ParseInterfaceOptions
  ): GraphQLInterfaceType => {
    return this.__withCache('graphqlInterfaceType', () =>
      this.toGraphQL().interfaceType(options)
    );
  };

  graphqlPrint = (): string => {
    return this.toGraphQL().typeToString();
  };

  typescriptPrint = (options?: SchemaToTypescriptOptions): Promise<string> => {
    return Schema.serverUtils().schemaToTypescript.schemaToTypescript(
      this.nonNullId,
      this,
      options
    );
  };

  graphqlTypeToString = (): string => {
    return this.toGraphQL().typeToString();
  };

  graphqlInputType = (options?: ParseTypeOptions) => {
    return this.__withCache('graphqlInputType', () =>
      this.toGraphQL().getInputType(options)
    );
  };

  static serverUtils() {
    if (isBrowser() || typeof module?.require !== 'function') {
      throw new Error('Server utils are not available on browser.');
    }

    return {
      graphql: dynamicRequire('graphql', module) as typeof import('graphql'),

      graphqlParser: dynamicRequire(
        './GraphQLParser/GraphQLParser',
        module
      ) as typeof import('./GraphQLParser/GraphQLParser'),

      DarchGraphQLType: dynamicRequire(
        './DarchGraphQLType',
        module
      ) as typeof import('./DarchGraphQLType'),

      schemaToTypescript: dynamicRequire(
        './schemaToTypescript',
        module
      ) as typeof import('./schemaToTypescript'),
    };
  }

  static async reset() {
    if (typeof window === 'undefined') {
      const { graphqlParser, DarchGraphQLType } = Schema.serverUtils();
      graphqlParser.GraphQLParser.reset();
      DarchGraphQLType.DarchGraphQLType.reset();
    }

    Schema.register.clear();
  }

  static register = new StrictMap<string, any>();

  /**
   * Get a Schema with the provided id
   *    or set a new Schema in the register if not found.
   * @param id
   * @param def
   */
  static getOrSet = <T extends SchemaDefinitionInput>(
    id: string,
    def: T
  ): Schema<T> => {
    const existing =
      Schema.register.has(id) && (Schema.register.get(id) as Schema<T>);

    if (existing) {
      !isProduction() && assertSameDefinition(id, def, existing.definition);
      return existing;
    }

    return new Schema<T>(def).identify(id);
  };

  static createType<Definition extends SchemaFieldInput>(
    definition: Definition
  ): DarchGraphQLType<Definition>;

  static createType<Definition extends SchemaFieldInput>(
    name: string,
    definition: Definition
  ): DarchGraphQLType<Definition>;

  static createType(...args: any) {
    return Schema.serverUtils().DarchGraphQLType.createType(
      // @ts-ignore
      ...args
    );
  }
}

export const DarchSchema = Schema;

export function createSchema<
  DefinitionInput extends Readonly<SchemaDefinitionInput>
>(fields: Readonly<DefinitionInput>): Schema<DefinitionInput>;

export function createSchema<
  DefinitionInput extends Readonly<SchemaDefinitionInput>
>(name: string, fields: DefinitionInput): Schema<DefinitionInput>;

export function createSchema<
  DefinitionInput extends Readonly<SchemaDefinitionInput>
>(
  ...args: [string, DefinitionInput] | [DefinitionInput]
): Schema<DefinitionInput> {
  const fields = args.length === 2 ? args[1] : args[0];

  const id = args.length === 2 ? args[0] : undefined;
  if (id) return Schema.getOrSet(id, fields);

  const idFromDefinition = getSchemaDefinitionMetaField(fields)?.def?.id;
  if (idFromDefinition) return Schema.getOrSet(idFromDefinition, fields);

  return new Schema<DefinitionInput>(fields);
}

export { createSchema as createDarchSchema };

type OmitDefinitionFields<T, Keys extends string> = T extends {
  [K: string]: any;
}
  ? Schema<{ [K in keyof T as K extends Keys ? never : K]: T[K] }>
  : never;

type SchemaExtendDefinition<T, Ext> = T extends { [K: string]: any }
  ? Ext extends { [K: string]: any }
    ? Schema<{
        [K in keyof (T & Ext)]: (T & Ext)[K];
      }>
    : never
  : never;

type CloneFields<T, Keys> = T extends {
  [K: string]: any;
}
  ? { [K in keyof T as K extends Keys ? K : never]: T[K] }
  : never;

type MakeOptional<T, Keys extends string> = T extends {
  [K: string]: any;
}
  ? {
      [K in keyof T]: K extends Keys
        ? ToFinalField<T[K]> extends infer Obj
          ? { [K in keyof Obj]: K extends 'optional' ? true : Obj[K] }
          : never
        : T[K];
    }
  : never;

type MakeRequired<T, Keys extends string> = T extends {
  [K: string]: any;
}
  ? {
      [K in keyof T]: K extends Keys
        ? ToFinalField<T[K]> extends infer Obj
          ? { [K in keyof Obj]: K extends 'optional' ? false : Obj[K] }
          : never
        : T[K];
    }
  : never;

type ExcludeNull<T> = {
  [K in keyof T as [T[K]] extends [null]
    ? never
    : [T[K]] extends [undefined]
    ? never
    : K]: Exclude<T[K], null>;
};
