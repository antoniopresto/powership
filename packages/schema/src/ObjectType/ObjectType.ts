import { createStore, IsKnown, RuntimeError } from '@swind/utils';
import { expectedType } from '@swind/utils';
import { getTypeName } from '@swind/utils';
import { invariantType } from '@swind/utils';
import { Serializable } from '@swind/utils';
import type { GraphQLInterfaceType, GraphQLObjectType } from 'graphql';

import { CircularDeps, SolarwindModules } from '../CircularDeps';
import type {
  GraphQLParserResult,
  ParseInputTypeOptions,
  ParseInterfaceOptions,
  ParseTypeOptions,
} from '../GraphType/GraphQLParser';
import type { SchemaDefinition } from '../TObjectConfig';
import {
  FieldParserOptionsObject,
  parseValidationError,
  ValidationCustomMessage,
} from '../applyValidator';
import {
  extendObjectDefinition,
  ExtendObjectDefinition,
} from '../extendObjectDefinition';
import { FieldComposer } from '../fields/FieldType';
import { ObjectLike } from '../fields/IObjectLike';
import { InferObjectDefinition } from '../fields/Infer';
import {
  cleanMetaField,
  getObjectDefinitionMetaField,
  isMetaFieldKey,
  MetaFieldDef,
  objectMetaFieldKey,
} from '../fields/MetaFieldField';
import {
  FieldTypeName,
  SpecialObjectKeyEnum,
} from '../fields/_fieldDefinitions';
import type {
  FieldAsString,
  FinalFieldDefinition,
  FinalObjectDefinition,
} from '../fields/_parseFields';
import { getObjectHelpers, ObjectHelpers } from '../getObjectHelpers';
import { isObjectType } from '../objectInferenceUtils';
import { withCache, WithCache } from '../withCache';

import { SchemaParser } from './SchemaParser';
import { validateObjectFields } from './getObjectErrors';
import { ImplementObject, implementObject } from './implementObject';
import type { ObjectToTypescriptOptions } from './objectToTypescript';
import { __getCachedFieldInstance } from './parseObjectDefinition';

export * from './parseObjectDefinition';
export * from '../objectInferenceUtils';
export * from './implementObject';
export * from '../fields/_parseFields';
export * from '../fields/_fieldDefinitions';
export * from '../fields/_parseFields';

export class ObjectType<
  Input,
  HandledInput extends _HandleInput<Input> = _HandleInput<Input>
> {
  get __isSolarwindObject(): true {
    return true;
  }

  static __isSolarwindObject: boolean = true;

  __withCache: WithCache<{
    helpers: ObjectHelpers;
  }>;

  inputDefinition:
    | SchemaDefinition
    | ((modules: SolarwindModules) => SchemaDefinition);

  constructor(
    objectDef: HandledInput | ((modules: SolarwindModules) => HandledInput)
  ) {
    this.inputDefinition = objectDef as SchemaDefinition;
    this.__withCache = withCache(this);
  }

  private __definitionCache: any;
  get definition(): HandledInput {
    return (this.__definitionCache =
      this.__definitionCache ||
      (() => {
        const objectDef =
          typeof this.inputDefinition === 'function'
            ? this.inputDefinition(CircularDeps)
            : this.inputDefinition;

        if (!objectDef || typeof objectDef !== 'object') {
          throw new Error('Expected object definition to be an object');
        }

        const parser = new SchemaParser();
        return parser.parse(objectDef, { parentObjectType: this }).definition;
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

      if (fieldDef.type === 'alias') {
        const instance = __getCachedFieldInstance(fieldDef);
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
    const parser = new SchemaParser();
    const { definition } = parser.parse(this.definition as any, {
      parentObjectType: this,
    });
    const input: any = extendObjectDefinition(definition);
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

    // @ts-ignore circular
    const { GraphQLParser } = CircularDeps.GraphQLParser as any;

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
    // @ts-ignore circular
    return CircularDeps.objectToTypescript(
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
      const { GraphQLParser, GraphType } = CircularDeps;
      promises.push(GraphQLParser.reset(), GraphType.reset());
    } catch (e) {
      if (typeof window === 'undefined') {
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
  static getOrSet = <T extends SchemaDefinition>(
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

  static is(input: any): input is ObjectType<SchemaDefinition> {
    return isObjectType(input);
  }
}

export const SolarwindObject = ObjectType;

export type ObjectTypeFromInput<
  DefinitionInput extends Readonly<SchemaDefinition>
> = IsKnown<DefinitionInput> extends 1
  ? [DefinitionInput] extends [SchemaDefinition]
    ? ObjectType<DefinitionInput>
    : never
  : any;

export function createObjectType<
  DefinitionInput extends Readonly<SchemaDefinition>
>(fields: Readonly<DefinitionInput>): ObjectTypeFromInput<DefinitionInput>;

export function createObjectType<
  DefinitionInput extends Readonly<SchemaDefinition>
>(name: string, fields: DefinitionInput): ObjectTypeFromInput<DefinitionInput>;

export function createObjectType<
  DefinitionInput extends Readonly<SchemaDefinition>
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

export const createSolarwindObject = createObjectType;
export const createSchema = createObjectType;
export const resetTypesCache = ObjectType.reset;

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
