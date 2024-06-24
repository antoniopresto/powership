import {
  Compute,
  createStore,
  IsKnown,
  MaybePromise,
  Merge,
} from '@powership/utils';
import {
  GraphQLField,
  GraphQLFieldConfig,
  GraphQLObjectType,
  GraphQLResolveInfo,
} from 'graphql';

import { createType, GraphType } from './GraphType/GraphType';
import { getInnerType } from './GraphType/getQueryTemplates';
import { Infer } from './Infer';
import { InferField, ObjectDefinitionInput } from './fields/_parseFields';
import  {
  //@only-server
  PowershipWatchTypesPubSub
}  from './internal';

export interface ResolverContext {}

// @only-server
export const _resolvers = createStore<Record<string, Resolver>>();

function _createResolver(options: any) {
  const { args, name, kind = 'query', resolve, type, ...rest } = options;
  // @only-server
  if (_resolvers.has(name)) {
    // @ts-ignore
    return _resolvers.get(name);
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

  const result: Resolver = {
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
  // @only-server
  _resolvers.set(name, result);
  // @only-server
  PowershipWatchTypesPubSub.emit('created', {
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
    ? InferField<{ object: ArgsDef }>
    : Record<string, unknown>;

export type ResolverKind = 'query' | 'mutation' | 'subscription';

export type Resolver<
  TSource = unknown,
  TArgs extends any = {},
  TResult extends unknown = unknown
> = Omit<
  GraphQLFieldConfig<TSource, ResolverContext, TArgs>,
  'type' | 'args' | 'resolve'
> & {
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
  resolve: (
    root: TSource,
    args: TArgs,
    context: any,
    info: any
  ) => MaybePromise<TResult>;
};

export type ResolverResolve<Source, TypeDef, ArgsDef> = (
  (
    ((x: InferResolverArgs<ArgsDef>) => any) extends (x: infer R) => any
      ? {
          [K in keyof R]: R[K];
        }
      : never
  ) extends infer Args
    ? ((x: Infer<TypeDef>) => any) extends (x: infer R) => any
      ? (
          parent: Compute<Source>,
          args: Compute<Args>,
          context: ResolverContext,
          info: GraphQLResolveInfo
        ) => IsKnown<R> extends 1 ? Compute<Promise<R> | R> : any
      : (
          parent: Source,
          args: Record<string, unknown>,
          context: ResolverContext,
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

export function getResolver(name: string): Resolver {
  return _resolvers.get(name) as any;
}

export type CreateResolverChain<PlainResultType, Args = {}, Root = unknown> = {
  resolve(
    resolverFunction: (
      root: Root,
      args: Args,
      context: ResolverContext
    ) => MaybePromise<PlainResultType>
  ): Resolver<Root, Args, PlainResultType>;

  args<InputDefinition extends ObjectDefinitionInput>(
    definition: InputDefinition
  ): Omit<
    CreateResolverChain<
      PlainResultType,
      [IsKnown<InputDefinition>] extends [1]
        ? Infer<{ object: InputDefinition }>
        : { [K: string]: unknown },
      Root
    >,
    'args'
  >;
};

export type CreateResolverConfig<Result_GraphType> = Merge<
  GraphQLFieldConfig<any, any>,
  {
    name: string;
    type: Result_GraphType;
    kind?: ResolverKind;
    args?: any;
    resolve?: any;
  }
>;

export type CreateResolver<Result_GraphType> = (
  config: CreateResolverConfig<Result_GraphType>
) => CreateResolverChain<
  [IsKnown<Result_GraphType>] extends [1] ? Infer<Result_GraphType> : unknown
>;

export function createResolver<Result_GraphType>(
  config: CreateResolverConfig<Result_GraphType>
): CreateResolverChain<
  [IsKnown<Result_GraphType>] extends [1] ? Infer<Result_GraphType> : unknown
> {
  const conf = { ...config };

  if (conf.resolve) {
    return _createResolver(conf as any) as any;
  }

  function resolverFactory() {
    return {
      resolve(resolverFunction) {
        conf.resolve = resolverFunction;
        return _createResolver(conf as any);
      },
    };
  }

  return {
    args(definition: any) {
      conf.args = definition;
      return resolverFactory();
    },
    resolve: resolverFactory().resolve,
  };
}
