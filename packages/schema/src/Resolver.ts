import { MaybePromise } from '@darch/utils';
import {
  GraphQLField,
  GraphQLFieldConfig,
  GraphQLObjectType,
  GraphQLResolveInfo,
} from 'graphql';

import { CircularDeps } from './CircularDeps';
import { createType, GraphType } from './GraphType/GraphType';
import { getInnerType } from './GraphType/getQueryTemplates';
import { GraphTypeLike } from './fields/IObjectLike';
import {
  ObjectDefinitionInput,
  ObjectFieldInput,
  ToFinalField,
} from './fields/_parseFields';

export type ResolverContextBase = {
  userId?(...args: unknown[]): MaybePromise<string | undefined>;
};

export function createResolverFactory<Context extends ResolverContextBase>(): <
  Source
>() => <
  TypeDef extends ObjectFieldInput,
  ArgsDef extends ObjectDefinitionInput | undefined
>(
  options: ResolverConfig<Context, Source, TypeDef, ArgsDef>
) => Resolver<Context, Source, TypeDef, ArgsDef> {
  return () => (options) => createResolver(options);
}

export function createResolver<
  Context extends ResolverContextBase,
  Root,
  TypeDef extends ObjectFieldInput,
  ArgsDef extends ObjectDefinitionInput | undefined
>(
  options: ResolverConfig<Context, Root, TypeDef, ArgsDef>
): Resolver<Context, Root, TypeDef, ArgsDef>;

export function createResolver(
  options: ResolverConfig<any, any, any, any>
): Resolver<any, any, any, any> {
  const { args, name, kind = 'query', resolve, type, ...rest } = options;

  if (GraphType.resolvers.has(name)) {
    // @ts-ignore
    return GraphType.resolvers.get(name);
  }

  const payloadType = (GraphType.is(type)
    ? type
    : createType(`${name}Payload`, type as any)) as unknown as GraphType<any>;

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

  CircularDeps.typesWriter?.DarchWatchTypesPubSub.emit('created', {
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

export interface ResolverConfig<
  Context extends ResolverContextBase,
  Source extends any,
  TypeDef extends ObjectFieldInput,
  ArgsDef extends ObjectDefinitionInput | undefined
> extends Omit<GraphQLFieldConfig<any, any>, 'resolve' | 'args' | 'type'> {
  args?: ArgsDef;
  kind?: ResolverKind;
  name: string;
  resolve: ResolverResolve<Context, Source, TypeDef, ArgsDef>;
  type: TypeDef;
}

export interface Resolver<
  Context extends ResolverContextBase,
  Source,
  TypeDef,
  ArgsDef
> extends Omit<GraphQLFieldConfig<any, any>, 'resolve' | 'args' | 'type'> {
  __graphTypeId: string;
  __isRelation: boolean;
  __isResolver: true;
  __relatedToGraphTypeId: string;
  args: any;
  argsDef: any;
  argsType: GraphTypeLike;
  asObjectField(name?: string): GraphQLField<any, any>;
  kind: 'query' | 'subscription' | 'mutation';
  name: string;
  payloadType: GraphTypeLike;
  resolve: ResolverResolve<Context, Source, TypeDef, ArgsDef>;
  type: any;
  // keep calm ts
  typeDef: any;
}

export interface AnyResolver
  extends Omit<GraphQLFieldConfig<any, any>, 'args' | 'type'> {
  __graphTypeId: string;
  __isRelation: boolean;
  __isResolver: true;
  __relatedToGraphTypeId: string;
  args: any;
  argsDef: any;
  argsType: GraphType<any>;
  asObjectField(name?: string): GraphQLField<any, any>;
  kind: ResolverKind;
  name: string;
  payloadType: GraphType<any>;
  resolve(root: any, args: any, context: any, info: any): any;
  type: any;
  typeDef: any;
}

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
          parent: Source,
          args: Args,
          context: Context,
          info: GraphQLResolveInfo
        ) => Promise<R> | R
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
