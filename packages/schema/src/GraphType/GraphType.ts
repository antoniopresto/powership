import { RuntimeError } from '@darch/utils/lib/RuntimeError';
import { StrictMap } from '@darch/utils/lib/StrictMap';
import { assertSame } from '@darch/utils/lib/assertSame';
import { isProduction } from '@darch/utils/lib/env';
import type {
  GraphQLFieldConfig,
  GraphQLInterfaceType,
  GraphQLNamedInputType,
  GraphQLNamedType,
  GraphQLResolveInfo,
} from 'graphql';
import { GraphQLObjectTypeConfig } from 'graphql';

import { Infer } from '../Infer';
import { createObjectType, ObjectType } from '../ObjectType';
import { FieldDefinitionConfig } from '../TObjectConfig';
import { TAnyFieldType } from '../fields/FieldType';
import { GraphTypeLike } from '../fields/IObjectLike';
import { getObjectDefinitionId } from '../fields/MetaFieldField';
import { ObjectField } from '../fields/ObjectField';
import {
  ObjectDefinitionInput,
  ObjectFieldInput,
  ToFinalField,
} from '../fields/_parseFields';
import type { ObjectToTypescriptOptions } from '../objectToTypescript';
import { parseObjectField } from '../parseObjectDefinition';

import { ParseTypeOptions } from './GraphQLParser';
import type { ConvertFieldResult, GraphQLParserResult } from './GraphQLParser';

const register = new StrictMap<string, any>();
const resolvers = new StrictMap<string, any>();

export class GraphType<Definition> {
  static __isGraphType = true;
  __isGraphType = true;

  static register = register;
  static resolvers = resolvers;

  static reset = async () => {
    resolvers.clear();
    register.clear();
  };

  readonly definition: ToFinalField<Definition>;

  __field: TAnyFieldType;

  readonly id: string;
  readonly _object?: ObjectType<any>;

  constructor(
    definition: Definition extends ObjectFieldInput ? Definition : never
  );

  constructor(
    name: string,
    definition: Definition extends ObjectFieldInput ? Definition : never
  );

  constructor(...args: any[]) {
    let name: string | undefined = undefined;
    let definition: ObjectFieldInput;

    if (args.length === 2) {
      name = args[0];
      definition = args[1];
    } else {
      definition = args[0];
    }

    this.__field = parseObjectField('temp', definition, true);

    if (ObjectField.is(this.__field)) {
      if (
        name &&
        this.__field.utils.object.id &&
        this.__field.utils.object.id !== name
      ) {
        this.__field.utils.object = this.__field.utils.object.clone(name);
      } else if (name) {
        this.__field.utils.object.identify(name);
      } else {
        name = getObjectDefinitionId(this.__field.utils.object.definition);
      }

      this._object = this.__field.utils.object;
    }

    if (!name) {
      throw new RuntimeError(`Expected name to be provided, found ${name}`, {
        parameters: args,
      });
    }

    this.id = name;

    this.definition = this.__field.toObjectFieldType() as any;

    if (register.has(name)) {
      const existing = register.get(name);

      if (!isProduction()) {
        assertSame(
          `Different type already registered with name "${name}"`,
          this.definition,
          existing
        );
      }
    } else {
      register.set(name, this.definition as any);
    }
  }

  parse = (
    ...args: Parameters<TAnyFieldType['parse']>
  ): Infer<ToFinalField<Definition>> => {
    return this.__field.parse(...args);
  };

  _toGraphQL = () => {
    return ObjectType.serverUtils().graphqlParser.GraphQLParser.fieldToGraphQL({
      field: this.__field,
      path: [`Type_${this.id}`],
      plainField: this.__field.toObjectFieldType(),
      fieldName: this.id,
      parentName: this.id,
    });
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
    if (!this._object) {
      throw new RuntimeError(
        'graphQLInterface is only available for object type',
        {
          type: this.__field.type,
        }
      );
    }

    return ObjectType.serverUtils()
      .graphqlParser.GraphQLParser.objectToGraphQL({
        object: this._object,
      })
      .interfaceType(...args);
  };

  print = (): string[] => {
    const type = this.graphQLType();
    const inputType = this.graphQLInputType();

    const { GraphQLSchema, printSchema } = ObjectType.serverUtils().graphql;

    const object = new GraphQLSchema({
      // @ts-ignore
      types: [type, inputType],
    });

    return printSchema(object).split('\n');
  };

  typescriptPrint = (
    options?: ObjectToTypescriptOptions & { name?: string }
  ) => {
    const object =
      this._object ||
      createObjectType({
        [this.id]: this.definition,
      });

    return ObjectType.serverUtils().objectToTypescript.objectToTypescript(
      options?.name || this.id,
      object,
      options
    );
  };

  createResolver = <
    Context = unknown,
    Source = unknown,
    ArgsDef extends ObjectDefinitionInput = ObjectDefinitionInput
  >(
    options: DarchGraphQLFieldConfigInput<Context, Source, Definition, ArgsDef>
  ): DarchResolver<Context, Source, Definition, ArgsDef> => {
    const { args, name = this.id, kind = 'query', resolve, ...rest } = options;

    if (resolvers.has(name)) {
      return resolvers.get(name);
    }

    const parsePayload = this.parse.bind(this);

    const argsObject = isPossibleArgsDef(args)
      ? createObjectType(`${name}Input`, args)
      : undefined;

    const ArgsType: any = argsObject
      ? argsObject.graphqlInputType({ name: `${name}Input` })
      : undefined;

    const resolveFunction: any = async function typeCheckResolveWrapper(
      source,
      args: any,
      context: any,
      info: any
    ): Promise<any> {
      args = argsObject
        ? argsObject.parse(args, {
            customMessage: (_, error) => {
              return `Invalid input provided to resolver "${name}":\n ${error.message}`;
            },
          })
        : args;

      const result = await resolve(source, args, context, info);

      return parsePayload(
        result,
        (_, error) => `Invalid output from resolver "${name}": ${error.message}`
      );
    };

    const gqlOptions: Partial<ParseTypeOptions> = {};
    const clone = this._object?.clone(`${name}Payload`);
    const cloneGQL = clone?.graphqlType(gqlOptions);
    const type = cloneGQL ?? this.graphQLType();

    const result: any = {
      ...rest,
      kind,
      name,
      resolve: resolveFunction,
      args: ArgsType?.getFields() || {},
      type,
      argsDef: args,
      typeDef: this.definition,
      __isResolver: true,
      isRelation: false,
    };

    result.addRelation = function addRelation(relDef, relConfig) {
      const { name: relName } = relConfig;

      if (!clone) {
        throw new RuntimeError(
          `addRelation "${relName}": Can't add relation to a not object type`,
          {
            relName,
            config: relConfig,
            relationConfig: relDef,
          }
        );
      }

      const resolver = createType(relName, relDef).createResolver(relConfig);
      resolver.isRelation = true;

      gqlOptions.beforeCreate = (config): GraphQLObjectTypeConfig<any, any> => {
        return {
          ...config,
          fields: {
            ...config.fields,
            [relName]: resolver,
          },
        };
      };

      return resolver;
    };

    resolvers.set(name, result);

    return result as any;
  };

  /**
   * Get an Object with the provided id
   *    or set a new Object in the register if not found.
   * @param id
   * @param def
   */
  static getOrSet = <T extends FieldDefinitionConfig>(
    id: string,
    def: T
  ): GraphType<T> => {
    const existing =
      GraphType.register.has(id) &&
      (GraphType.register.get(id) as GraphType<T>);

    if (existing) return existing;

    return new GraphType<any>(id, def) as any;
  };

  static is(input: any): input is GraphType<unknown> {
    return input?.__isGraphType === true;
  }

  static isTypeDefinition(
    input: any
  ): input is { type: GraphTypeLike; list?: boolean; optional?: boolean } {
    return input?.type?.__isGraphType === true;
  }
}

export function createType<Definition extends ObjectFieldInput>(
  definition: Definition
): GraphType<Definition>;

export function createType<Definition extends ObjectFieldInput>(
  name: string,
  definition: Definition
): GraphType<Definition>;

export function createType(...args: any[]) {
  return new GraphType(
    // @ts-ignore
    ...args
  );
}

export interface DarchGraphQLFieldConfigInput<
  Context = unknown,
  Source = unknown,
  TypeDef = unknown,
  ArgsDef = unknown
> extends Omit<
    GraphQLFieldConfig<Source, Context>,
    'resolve' | 'type' | 'args'
  > {
  name?: string;
  kind?: 'query' | 'mutation' | 'subscription';
  args?: ArgsDef;
  resolve: ResolveFunction<Context, Source, TypeDef, ArgsDef>;
}

export type AnyDarchResolver = DarchResolver;

export interface DarchResolver<
  Context = unknown,
  Source = unknown,
  TypeDef = unknown,
  ArgsDef = unknown
> extends Omit<GraphQLFieldConfig<Source, Context>, 'resolve'> {
  __isResolver: true;
  resolve: ResolveFunction<Context, Source, TypeDef, ArgsDef>;
  name: string;
  kind: 'query' | 'subscription' | 'mutation';
  typeDef: TypeDef extends ObjectFieldInput ? TypeDef : never;
  argsDef: ArgsDef extends Record<string, any> ? ArgsDef : never;

  isRelation: boolean;

  addRelation<
    Context,
    RelTypeDef extends Readonly<ObjectFieldInput>,
    RelArgsDef extends Readonly<ObjectDefinitionInput>
  >(
    type: RelTypeDef,

    options: DarchGraphQLFieldConfigInput<
      //   Context = unknown,
      //   Source = unknown,
      //   TypeDef = unknown,
      //   ArgsDef = unknown
      Context,
      Infer<TypeDef>,
      RelTypeDef,
      RelArgsDef
    >
  ): //
  //   Context = unknown,
  //   Source = unknown,
  //   TypeDef = unknown,
  //   ArgsDef = unknown
  DarchResolver<Context, Infer<TypeDef>, RelTypeDef, RelArgsDef>;
}

export interface ResolveFunction<
  Context = unknown,
  Source = unknown,
  TypeDef = unknown,
  ArgsDef = unknown
> {
  (
    source: Source,
    args: ArgsDef extends { [K: string]: ObjectFieldInput }
      ? Infer<ArgsDef>
      : {},
    context: Context,
    info: GraphQLResolveInfo
  ): Promise<Infer<ToFinalField<TypeDef>>>;
}

function isPossibleArgsDef(args: any): args is Readonly<ObjectDefinitionInput> {
  return args && typeof args === 'object' && Object.keys(args).length;
}
