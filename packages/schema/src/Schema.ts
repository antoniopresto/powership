import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { StrictMap } from '@darch/utils/lib/StrictMap';
import { expectedType } from '@darch/utils/lib/expectedType';
import { getTypeName } from '@darch/utils/lib/getTypeName';
import { invariantType } from '@darch/utils/lib/invariant';
import { simpleObjectClone } from '@darch/utils/lib/simpleObjectClone';
import { ForceString } from '@darch/utils/lib/typeUtils';

import { SchemaDefinitionInput } from './TSchemaConfig';

import {
  parseValidationError,
  ValidationCustomMessage,
} from './applyValidator';

import { validateSchemaFields } from './getSchemaErrors';
import { parseSchemaDefinition } from './parseSchemaDefinition';
import {
  FinalSchemaDefinition,
  ParseFields,
  ToFinalField,
} from './fields/_parseFields';
import { Infer } from './Infer';
import type { ObjectTypeComposer } from 'graphql-compose';
import { isBrowser } from '@darch/utils/lib/isBrowser';
import type { GraphQLInputObjectType, GraphQLObjectType } from 'graphql';
import { dynamicRequire } from '@darch/utils/lib/dynamicRequire';
import { getKeys } from '@darch/utils/lib/getKeys';

export { RuntimeError } from '@darch/utils/lib/RuntimeError';
export * from './parseSchemaDefinition';
export * from './schemaInferenceUtils';

export class Schema<DefinitionInput extends SchemaDefinitionInput> {
  private readonly __definition: any;

  get definition(): ParseFields<DefinitionInput> {
    return this.__definition;
  }

  _description: string | undefined;

  constructor(schemaDef: DefinitionInput) {
    this.__definition = parseSchemaDefinition(schemaDef);

    Object.defineProperty(this.__definition, '__schema__', {
      enumerable: false,
      value: Object.create(null),
    });
  }

  private __setDefinitionMeta(k: string, value: string | number) {
    this.__definition['__schema__'][k] = value;
  }

  parse(
    input: any,
    options?: { partial?: boolean; customMessage?: ValidationCustomMessage }
  ): Infer<DefinitionInput> {
    const { customMessage } = options || {};
    const { errors, parsed } = this.safeParse(input, options?.partial);

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
    partial?: boolean
  ): { errors: string[]; parsed: unknown } {
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

    Object.keys(this.definition).forEach((currField) => {
      const value = input[currField];
      // @ts-ignore infer circular reference
      const definition = this.definition[currField];

      if (value === undefined && partial) {
        return;
      }

      const result = validateSchemaFields({
        createSchema: (def) => new SchemaConstructor(def),
        fieldName: currField,
        definition,
        value,
      });

      parsed[currField] = result.parsed;
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
      this._description = descriptions[0];
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
  ): ExtendDefinition<DefinitionInput, T> {
    return this.clone(definition) as any;
  }

  cloneFields<K extends ForceString<keyof DefinitionInput>>(
    fields: K[]
  ): CloneFields<DefinitionInput, K> {
    const exclusion = getKeys(this.definition).filter(
      (k) => !fields.includes(k as any)
    );
    return this.removeField(exclusion) as any;
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

  clone(): this;
  clone<T extends SchemaDefinitionInput>(
    extend: T
  ): ExtendDefinition<DefinitionInput, T>;
  clone(...args: any[]) {
    // @ts-ignore compiler relief
    const def = simpleObjectClone({ ...this.definition, ...args[0] });
    return createSchema(def) as any;
  }

  private __id: string | null = null;
  get id() {
    return this.__id;
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

    this.__id = id;
    this.__setDefinitionMeta('id', id);
    Schema.register.set(id, this);

    return this as any;
  }

  static register = new StrictMap();

  private _otc: ObjectTypeComposer | undefined;
  entity = (): ObjectTypeComposer => {
    if (this._otc) return this._otc;
    if (isBrowser() || typeof module?.require !== 'function') {
      throw new Error('GraphQL transformation is not available on browser.');
    }

    if (!this.id) {
      throw new Error(
        'Should schema.identify() before converting to Graphql.' +
          '\nYou can call schema.clone() to choose a different identification.'
      );
    }

    const { schemaToGQL } = dynamicRequire('./schemaToGQL', module);

    return (this._otc = schemaToGQL(this.id, this.definition));
  };

  private _graphqlType: GraphQLObjectType | undefined;
  graphqlType = (): any => {
    if (this._graphqlType) return this._graphqlType;
    return (this._graphqlType = this.entity().getType());
  };

  private _graphqlInputType: GraphQLInputObjectType | undefined;
  graphqlInputType = (): any => {
    if (this._graphqlInputType) return this._graphqlInputType;
    return (this._graphqlInputType = this.entity().getInputType());
  };

  static serverUtils() {
    if (isBrowser() || typeof module?.require !== 'function') {
      throw new Error('Server utils are not available on browser.');
    }

    return {
      graphqlCompose: dynamicRequire(
        'graphql-compose',
        module
      ) as typeof import('graphql-compose'),

      graphql: dynamicRequire('graphql', module) as typeof import('graphql'),
    };
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

  const schema = new Schema<DefinitionInput>(fields);
  if (id) return schema.identify(id);

  return schema;
}

export { createSchema as createType };

type OmitDefinitionFields<T, Keys extends string> = T extends {
  [K: string]: any;
}
  ? Schema<{ [K in keyof T as K extends Keys ? never : K]: T[K] }>
  : never;

type ExtendDefinition<T, Ext> = T extends { [K: string]: any }
  ? Ext extends { [K: string]: any }
    ? Schema<{
        [K in keyof (T & Ext)]: (T & Ext)[K];
      }>
    : never
  : never;

type CloneFields<T, Keys extends string> = T extends {
  [K: string]: any;
}
  ? Schema<{ [K in keyof T as K extends Keys ? K : never]: T[K] }>
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
