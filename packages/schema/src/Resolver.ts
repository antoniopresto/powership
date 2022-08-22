import { MaybePromise } from '@darch/utils';
import {
  GraphQLField,
  GraphQLFieldConfig,
  GraphQLObjectType,
  GraphQLResolveInfo,
} from 'graphql';

import { Darch } from './Darch';
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
  TypeDef extends ObjectFieldInput = any,
  ArgsDef extends ObjectDefinitionInput = any
>(
  options: ResolverConfig<Context, Source, TypeDef, ArgsDef>
) => Resolver<Context, Source, TypeDef, ArgsDef> {
  return () => (options) => createResolver(options);
}

export function createResolver<
  Context extends ResolverContextBase,
  Root,
  TypeDef extends ObjectFieldInput,
  ArgsDef extends ObjectDefinitionInput
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
    kind,
    name,
    resolve: resolveFunction,
    args:
      'getFields' in innerArgsGQLType.innerType
        ? innerArgsGQLType.innerType.getFields()
        : {},
    type: gqlType,

    // Resolver fields - not in GraphQLFieldConfig
    argsDef: args,
    typeDef: payloadType.definition,
    payloadType,
    argsType,
    asObjectField: (_name = name): GraphQLField<any, any> => {
      const temp = new GraphQLObjectType({
        name: 'temp',
        fields: {
          [_name]: result,
        },
      });

      return temp.getFields()[_name];
    },
    __isResolver: true,
    __isRelation: false,
    __relatedToGraphTypeId: '',
    __graphTypeId: payloadType.id,
  };

  GraphType.resolvers.set(name, result);

  Darch.typesWriter?.DarchWatchTypesPubSub.emit('created', {
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
    : [ArgsDef] extends [{ [K: string]: any }]
    ? ToFinalField<{ type: 'object'; def: ArgsDef }>['__infer']
    : Record<string, unknown>;

export type ResolverKind = 'query' | 'mutation' | 'subscription';

export interface ResolverConfig<
  Context extends ResolverContextBase,
  Source extends any,
  TypeDef extends ObjectFieldInput,
  ArgsDef extends ObjectDefinitionInput
> extends Omit<GraphQLFieldConfig<any, any>, 'resolve' | 'args' | 'type'> {
  name: string;
  kind?: ResolverKind;
  args?: ArgsDef;
  type: TypeDef;
  resolve: ResolverResolve<Context, Source, TypeDef, ArgsDef>;
}

export interface Resolver<
  Context extends ResolverContextBase,
  Source,
  TypeDef,
  ArgsDef
> extends Omit<GraphQLFieldConfig<any, any>, 'resolve' | 'args' | 'type'> {
  __isResolver: true;
  __isRelation: boolean;
  __graphTypeId: string;
  __relatedToGraphTypeId: string;
  name: string;
  kind: 'query' | 'subscription' | 'mutation';
  // keep calm ts
  typeDef: any;
  argsDef: any;
  payloadType: GraphTypeLike;
  argsType: GraphTypeLike;
  type: any;
  args: any;
  asObjectField(name?: string): GraphQLField<any, any>;
  resolve: ResolverResolve<Context, Source, TypeDef, ArgsDef>;
}

export interface AnyResolver
  extends Omit<GraphQLFieldConfig<any, any>, 'args' | 'type'> {
  name: string;
  kind: ResolverKind;
  typeDef: any;
  argsDef: any;
  payloadType: GraphType<any>;
  argsType: GraphType<any>;
  type: any;
  args: any;
  asObjectField(name?: string): GraphQLField<any, any>;
  resolve(root: any, args: any, context: any, info: any): any;
  __isResolver: true;
  __isRelation: boolean;
  __relatedToGraphTypeId: string;
  __graphTypeId: string;
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
        ) => Promise<unknown> | unknown
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
