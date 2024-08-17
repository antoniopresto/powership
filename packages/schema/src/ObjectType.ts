import {
  createStore,
  isBrowser,
  IsKnown,
  RuntimeError,
} from '@powership/utils';
import { ensureArray } from '@powership/utils';
import { expectedType } from '@powership/utils';
import { getTypeName } from '@powership/utils';
import { invariantType } from '@powership/utils';
import { Serializable } from '@powership/utils';
import type { GraphQLInterfaceType, GraphQLObjectType } from 'graphql';

import type {
  GraphQLParseMiddleware,
  GraphQLParserResult,
  ParseInputTypeOptions,
  ParseInterfaceOptions,
  ParseTypeOptions,
} from './GraphType/GraphQLParser';
import { GraphQLParser } from './GraphType/GraphQLParser';
import {
  FieldParserOptionsObject,
  parseValidationError,
  ValidationCustomMessage,
} from './applyValidator';
import type { ExtendObjectDefinition } from './extendObjectDefinition';
import type { FieldComposer } from './fields/FieldType';
import type { ObjectLike } from './fields/IObjectLike';
import type { InferObjectDefinition } from './fields/Infer';
import { MetaFieldDef } from './fields/MetaFieldField';
import {
  FieldTypeName,
  SpecialObjectKeyEnum,
} from './fields/_fieldDefinitions';
import type {
  FieldAsString,
  FinalFieldDefinition,
  FinalObjectDefinition,
  ObjectDefinitionInput,
} from './fields/_parseFields';
import { getObjectHelpers, ObjectHelpers } from './getObjectHelpers';
import { ImplementObject } from './implementObject';
import {
  objectToTypescript,
  ObjectToTypescriptOptions,
} from './objectToTypescript';
import { withCache, WithCache } from './withCache';

// @only-server

export class ObjectType<
  Input,
  HandledInput extends _HandleInput<Input> = _HandleInput<Input>
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

        return powership.parseObjectDefinition(objectDef).definition;
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
    return powership.extendObjectDefinition(this) as any;
  }

  get meta(): MetaFieldDef {
    // @ts-ignore
    return this.definition[powership.objectMetaFieldKey].def;
  }

  __setMetaData(k: keyof MetaFieldDef, value: Serializable) {
    // @ts-ignore
    this.definition[powership.objectMetaFieldKey].def[k] = value;
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
      if (powership.isMetaFieldKey(currField)) return;
      if (exclude && exclude.includes(currField)) return;

      // @ts-ignore
      const fieldDef: FinalFieldDefinition = objectDef[currField];

      if (!includeHidden && fieldDef.hidden) return;

      if (fieldDef.type === 'alias') {
        const instance = powership.__getCachedFieldInstance(fieldDef);
        return fieldInputsList.push({
          composer: instance.composer!,
          fieldDef,
          key: currField,
          value: undefined,
        });
      }

      const value = input[currField];

      const hasAutoCreateOption = fieldDef?.def?.['autoCreate'] === true;
      if (
        (value === undefined || value === null) &&
        partial &&
        !hasAutoCreateOption
      ) {
        return;
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

      const result = powership.validateObjectFields({
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

      const result = powership.validateObjectFields({
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
    const parsed = powership.parseField(this);
    const input: any = powership.extendObjectDefinition(parsed);
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
    return powership.implementObject(
      name,
      this.definition as any,
      ...parents
    ) as any;
  };

  static async reset() {
    ObjectType.register.clear();

    const promises: any[] = [];

    try {
      // only available server side or in tests
      // @only-server
      GraphQLParser.reset();
      // @only-server
      promises.push(powership.GraphType.reset());
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
    return powership.isObjectType(input);
  }
}

export const PowershipObject = ObjectType;

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

  const idFromDefinition =
    powership.getObjectDefinitionMetaField(fields)?.def?.id;

  if (idFromDefinition) {
    return ObjectType.getOrSet(idFromDefinition, fields) as any;
  }

  return new ObjectType(fields) as any;
}

export function resetTypesCache() {
  return ObjectType.reset();
}

type _HandleInput<T> = [IsKnown<T>] extends [1]
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

Object.assign(powership, {
  createObjectType,
  resetTypesCache,
  ObjectType,
});

declare global {
  interface powership {
    resetTypesCache: typeof resetTypesCache;
    createObjectType: typeof createObjectType;
    ObjectType: typeof ObjectType;
  }
}
