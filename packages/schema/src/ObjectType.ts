import { RuntimeError } from '@brabo/utils/lib/RuntimeError';
import { StrictMap } from '@brabo/utils/lib/StrictMap';
import { ensureArray } from '@brabo/utils/lib/ensureArray';
import { isProduction } from '@brabo/utils/lib/env';
import { expectedType } from '@brabo/utils/lib/expectedType';
import { getTypeName } from '@brabo/utils/lib/getTypeName';
import { invariantType } from '@brabo/utils/lib/invariant';
import { Serializable } from '@brabo/utils/lib/typeUtils';
import type { GraphQLInterfaceType, GraphQLObjectType } from 'graphql';

import { CircularDeps } from './CircularDeps';
import type {
  GraphQLParserResult,
  ParseInputTypeOptions,
  ParseTypeOptions,
} from './GraphType/GraphQLParser';
import type { ParseInterfaceOptions } from './GraphType/GraphQLParser';
import { GraphQLParseMiddleware } from './GraphType/GraphQLParser';
import type { Infer } from './Infer';
import type { ObjectDefinitionInput } from './TObjectConfig';
import {
  FieldParserOptionsObject,
  parseValidationError,
  ValidationCustomMessage,
} from './applyValidator';
import { assertSameDefinition } from './assertSameDefinition';
import { extendDefinition, ExtendDefinitionResult } from './extendDefinition';
import { ObjectLike } from './fields/IObjectLike';
import {
  cleanMetaField,
  getObjectDefinitionMetaField,
  isMetaFieldKey,
  MetaFieldDef,
  objectMetaFieldKey,
} from './fields/MetaFieldField';
import type {
  FinalFieldDefinition,
  FinalObjectDefinition,
  ParseFields,
} from './fields/_parseFields';
import { validateObjectFields } from './getObjectErrors';
import { getObjectHelpers, ObjectHelpers } from './getObjectHelpers';
import { ImplementObject, implementObject } from './implementObject';
import { isObject } from './objectInferenceUtils';
import type { ObjectToTypescriptOptions } from './objectToTypescript';
import { parseObjectDefinition } from './parseObjectDefinition';
import { withCache, WithCache } from './withCache';

export { RuntimeError } from '@brabo/utils/lib/RuntimeError';
export * from './parseObjectDefinition';
export * from './objectInferenceUtils';
export * from './implementObject';
export * from './fields/_parseFields';
export * from './fields/_fieldDefinitions';
export * from './fields/_parseFields';

export class ObjectType<DefinitionInput extends ObjectDefinitionInput> {
  get __isBraboObject(): true {
    return true;
  }

  static __isBraboObject: boolean = true;

  private readonly __definition: any;

  __withCache: WithCache<{
    helpers: ObjectHelpers<DefinitionInput>;
  }>;

  constructor(objectDef: DefinitionInput) {
    const parsed = parseObjectDefinition(objectDef);
    this.__definition = parsed.definition;
    this.__withCache = withCache(this);
  }

  get definition(): ParseFields<DefinitionInput> {
    return this.__definition;
  }

  get description() {
    return this.meta.description;
  }

  // definition without metadata (name, etc)
  cleanDefinition(): ParseFields<DefinitionInput> {
    return cleanMetaField(this.definition);
  }

  extend(): ExtendDefinitionResult<DefinitionInput, DefinitionInput> {
    return extendDefinition(this) as any;
  }

  get meta(): MetaFieldDef {
    return this.__definition[objectMetaFieldKey].def;
  }

  __setMetaData(k: keyof MetaFieldDef, value: Serializable) {
    this.__definition[objectMetaFieldKey].def[k] = value;
  }

  parse(
    input: any,
    options?: {
      customMessage?: ValidationCustomMessage;
    } & FieldParserOptionsObject
  ): Infer<DefinitionInput>;

  parse(
    input: any,
    options?: {
      customMessage?: ValidationCustomMessage;
      partial: true;
    } & FieldParserOptionsObject
  ): Partial<Infer<DefinitionInput>>;

  parse<Fields extends (keyof DefinitionInput)[]>(
    input: any,
    options: {
      customMessage?: ValidationCustomMessage;
      fields: Fields;
    } & FieldParserOptionsObject
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
        errors.join(' \n'),
        this.definition
      );
      err.isObjectValidationError = true;
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
      customMessage?: ValidationCustomMessage;
      excludeInvalidListItems?: boolean;
      fields?: keyof DefinitionInput[];
      partial?: boolean;
    }
  ): { errors: string[]; parsed: unknown } {
    const {
      partial = false,
      fields = Object.keys(this.definition),
      excludeInvalidListItems,
    } = options || {};

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

    input = { ...input };

    (fields as string[]).forEach((currField) => {
      if (isMetaFieldKey(currField)) return;

      // @ts-ignore
      const fieldDef: FinalFieldDefinition = this.definition[currField];

      const value = input[currField];

      const hasAutoCreateOption = fieldDef?.def?.['autoCreate'] === true;
      if (
        (value === undefined || value === null) &&
        partial &&
        !hasAutoCreateOption
      ) {
        return;
      }

      const result = validateObjectFields({
        definition: fieldDef,
        fieldName: currField,
        fieldParserOptions: { excludeInvalidListItems },
        value,
      });

      if (result.parsed !== undefined) {
        parsed[currField] = result.parsed;
      }

      errors.push(...result.errors);
    });

    return { errors, parsed };
  }

  describe(
    ...descriptions:
      | [comment: string]
      | [{ [K in keyof DefinitionInput]?: string }]
  ): ObjectType<DefinitionInput> {
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

  clone(): ExtendDefinitionResult<this, this> {
    return extendDefinition(this);
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

    if (ObjectType.register.has(id) && !isProduction()) {
      const existing = ObjectType.register.get(id);
      assertSameDefinition(id, existing.definition, this.definition);
    }

    this.__setMetaData('id', id);
    ObjectType.register.set(id, this);

    return this as any;
  }

  helpers = () => {
    return this.__withCache('helpers', () => getObjectHelpers(this));
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
  ): ImplementObject<ObjectType<DefinitionInput>, Parents> => {
    return implementObject(name, this.definition as any, ...parents);
  };

  static async reset() {
    const promises: any[] = [];

    if (typeof window === 'undefined') {
      const { GraphQLParser, GraphType } = CircularDeps;
      promises.push(GraphQLParser.reset(), GraphType.reset());
    }

    promises.push(ObjectType.register.clear());

    await Promise.all(promises);
  }

  static register = new StrictMap<string, ObjectLike>();

  /**
   * Get an Object with the provided id
   *    or set a new Object in the register if not found.
   * @param id
   * @param def
   */
  static getOrSet = <T extends ObjectDefinitionInput>(
    id: string,
    def: T
  ): ObjectType<T> => {
    const existing =
      ObjectType.register.has(id) &&
      (ObjectType.register.get(id) as ObjectType<T>);

    if (existing) {
      !isProduction() && assertSameDefinition(id, def, existing.definition);
      return existing;
    }

    // @ts-ignore
    return new ObjectType(def).identify(id);
  };

  graphQLMiddleware: GraphQLParseMiddleware[] = [];

  addGraphQLMiddleware = (
    middleware: GraphQLParseMiddleware[] | GraphQLParseMiddleware
  ) => {
    this.graphQLMiddleware.push(...ensureArray(middleware));
  };

  static is(input: any): input is ObjectType<ObjectDefinitionInput> {
    return isObject(input);
  }
}

export const BraboObject = ObjectType;

export function createObjectType<
  DefinitionInput extends Readonly<ObjectDefinitionInput>
>(fields: Readonly<DefinitionInput>): ObjectType<DefinitionInput>;

export function createObjectType<
  DefinitionInput extends Readonly<ObjectDefinitionInput>
>(name: string, fields: DefinitionInput): ObjectType<DefinitionInput>;

export function createObjectType<
  DefinitionInput extends Readonly<ObjectDefinitionInput>
>(
  ...args: [string, DefinitionInput] | [DefinitionInput]
): ObjectType<DefinitionInput> {
  const fields = args.length === 2 ? args[1] : args[0];

  const id = args.length === 2 ? args[0] : undefined;
  if (id) return ObjectType.getOrSet(id, fields);

  const idFromDefinition = getObjectDefinitionMetaField(fields)?.def?.id;
  if (idFromDefinition) return ObjectType.getOrSet(idFromDefinition, fields);

  return new ObjectType<DefinitionInput>(fields);
}

export const createBraboObject = createObjectType;
export const createSchema = createObjectType;
