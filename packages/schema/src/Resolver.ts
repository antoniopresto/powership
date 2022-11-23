import { Compute, IsKnown, MaybePromise } from '@backland/utils';
import {
  GraphQLField,
  GraphQLFieldConfig,
  GraphQLObjectType,
  GraphQLResolveInfo,
} from 'graphql';

import { CircularDeps } from './CircularDeps';
import { createType, GraphType } from './GraphType/GraphType';
import { getInnerType } from './GraphType/getQueryTemplates';
import { Infer } from './Infer';
import {
  FieldInput,
  ObjectDefinitionInput,
  ObjectFieldInput,
  ToFinalField,
} from './fields/_parseFields';

export type ResolverContextBase = {
  [K: string]: unknown;
};

function _createResolver(options: any): Resolver<any, any, any, any> {
  const { args, name, kind = 'query', resolve, type, ...rest } = options;

  if (GraphType.resolvers.has(name)) {
    // @ts-ignore
    return GraphType.resolvers.get(name);
  }

  const payloadType = (GraphType.is(type)
    ? type
    : createType(`${name}Payload`, type)) as unknown as GraphType<any>;

  const gqlType = payloadType.graphQLType();

  const argsType = createType(
    `${name}Input`,
    isPossibleArgsDef(args) ? { object: args } : 'record'
  ) as unknown as GraphType<any>;

  const argsGQLType = argsType.graphQLInputType({ name: `${name}Input` });
  const innerArgsGQLType = getInnerType(argsGQLType);

  const resolveFunction: any = async function typeCheckResolveWrapper(
    source,
    args: any,
    context: any,
    info: any
  ): Promise<any> {
    args = argsType
      ? argsType.parse(args, {
          customMessage: (_, error) => {
            return `Invalid input provided to resolver "${name}":\n ${error.message}`;
          },
        } as any)
      : args;

    // @ts-ignore
    const result = await resolve(source, args, context, info);

    return payloadType.parse(result, {
      customMessage: (_, error) => {
        return `Invalid output from resolver "${name}": ${error.message}`;
      },
      excludeInvalidListItems: true,
    });
  };

  const result: AnyResolver = {
    ...rest,
    __graphTypeId: payloadType.id,

    __isRelation: false,

    __isResolver: true,

    __relatedToGraphTypeId: '',

    args:
      'getFields' in innerArgsGQLType.innerType
        ? innerArgsGQLType.innerType.getFields()
        : {},

    // Resolver fields - not in GraphQLFieldConfig
    argsDef: args,
    argsType,
    asObjectField: (_name = name): GraphQLField<any, any> => {
      const temp = new GraphQLObjectType({
        fields: {
          [_name]: result,
        },
        name: 'temp',
      });

      return temp.getFields()[_name];
    },
    kind,
    name,
    payloadType,
    resolve: resolveFunction,
    type: gqlType,
    typeDef: payloadType.definition,
  };

  GraphType.resolvers.set(name, result);

  CircularDeps.typesWriter?.BacklandWatchTypesPubSub.emit('created', {
    resolver: result,
  });

  return result as any;
}

export type InferResolverArgs<ArgsDef> =
  //
  [ArgsDef] extends [never]
    ? Record<string, unknown>
    : [ArgsDef] extends [undefined]
    ? Record<string, unknown>
    : [ArgsDef] extends [{ [K: string]: unknown }]
    ? ToFinalField<{ def: ArgsDef; type: 'object' }>['__infer']
    : Record<string, unknown>;

export type ResolverKind = 'query' | 'mutation' | 'subscription';

export type Resolver<Context, Root, Type, Args> = Compute<
  OptionalResolverConfig<Root, Context, Args> & {
    __graphTypeId: string;
    __isRelation: boolean;
    __isResolver: true;
    __relatedToGraphTypeId: string;
    args: any;
    argsDef: any;
    argsType: any;
    asObjectField(name?: string): GraphQLField<any, any>;
    kind: ResolverKind;
    name: string;
    payloadType: any;
    type: any;
    typeDef: any;
    resolve: <Root>(
      root: Root,
      args: Args,
      context: Context,
      info: GraphQLResolveInfo
    ) => MaybePromise<Type>;
  },
  1
>;

export type AnyResolver = Resolver<any, any, any, any>;

export type ResolverResolve<Context, Source, TypeDef, ArgsDef> = (
  (
    ((x: InferResolverArgs<ArgsDef>) => any) extends (x: infer R) => any
      ? {
          [K in keyof R]: R[K];
        }
      : never
  ) extends infer Args
    ? ((x: ToFinalField<TypeDef>['__infer']) => any) extends (x: infer R) => any
      ? (
          parent: Compute<Source>,
          args: Compute<Args>,
          context: Context,
          info: GraphQLResolveInfo
        ) => IsKnown<R> extends 1 ? Compute<Promise<R> | R> : any
      : (
          parent: Source,
          args: Record<string, unknown>,
          context: Context,
          info: GraphQLResolveInfo
        ) => Promise<any> | any
    : never
) extends infer R
  ? R
  : never;

export function isPossibleArgsDef(
  args: any
): args is Readonly<ObjectDefinitionInput> {
  return args && typeof args === 'object' && Object.keys(args).length;
}

export function getResolver(name: string): AnyResolver {
  return GraphType.resolvers.get(name) as any;
}

export type OptionalResolverConfig<
  Source = any,
  Context = any,
  Args = any
> = Omit<
  GraphQLFieldConfig<Source, Context, Args>,
  'resolve' | 'args' | 'type'
>;

export interface CreateResolver<Context> {
  <ResultType extends ObjectFieldInput, ArgsType extends ObjectDefinitionInput>(
    config: {
      name: string;
      type: ResultType | Readonly<ResultType>;
      kind?: ResolverKind;
      args?: ArgsType | Readonly<ArgsType>;
      resolve?: never;
    } & OptionalResolverConfig
  ): {
    resolver<Returns, Root = unknown>(
      handler: (
        root: Root,
        args: _Args<ArgsType>,
        context: Context,
        info: GraphQLResolveInfo
      ) => MaybePromise<Returns>
    ): Resolver<Context, Root, Returns, _Args<ArgsType>>;
  };

  <ResultType extends FieldInput, Returns = unknown>(
    config: {
      name: string;
      type: ResultType | Readonly<ResultType>;
      kind?: ResolverKind;
      args?: undefined;
      resolve: <Root>(
        root: Root,
        args: {},
        context: Context,
        info: GraphQLResolveInfo
      ) => MaybePromise<Returns>;
    } & OptionalResolverConfig
  ): Resolver<Context, any, Returns, {}> & { resolver?: never };

  <
    ResultType extends FieldInput,
    ArgsType extends ObjectDefinitionInput,
    Returns = unknown
  >(
    config: {
      name: string;
      type: ResultType | Readonly<ResultType>;
      kind?: ResolverKind;
      args: ArgsType | Readonly<ArgsType>;
      resolve: <Root>(
        root: Root,
        args: _Args<ArgsType>,
        context: Context,
        info: GraphQLResolveInfo
      ) => MaybePromise<Returns>;
    } & OptionalResolverConfig
  ): Resolver<Context, any, Returns, _Args<ArgsType>> & { resolver?: never };
}

export function createResolverFactory<
  Context extends ResolverContextBase
>(): CreateResolver<Context> {
  return function createResolver(config: any): any {
    if (config.resolve) return _createResolver(config);
    return {
      resolver(resolve) {
        return _createResolver({ ...config, resolve });
      },
    };
  };
}

type _Args<ArgsType> = Exclude<ArgsType, undefined> extends infer R
  ? IsKnown<R> extends 1
    ? Infer<ToFinalField<{ object: R }>>
    : {}
  : {};

export const createResolver = createResolverFactory();
