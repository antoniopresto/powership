import {
  GraphQLField,
  GraphQLFieldConfig,
  GraphQLObjectType,
  GraphQLResolveInfo,
} from 'graphql';

import { Infer } from '../Infer';
import { FieldDefinitionConfig } from '../TObjectConfig';
import {
  InferField,
  ObjectDefinitionInput,
  ToFinalField,
} from '../fields/_parseFields';

import { createType, GraphType } from './GraphType';
import { getInnerType } from './getQueryExamples';

export function createResolver<
  Type extends FieldDefinitionConfig,
  Args extends ObjectDefinitionInput
>(
  options: ResolverConfig<any, any, Type, Args>
): Resolver<any, any, Type, Args> {
  const { args, name, kind = 'query', resolve, type, ...rest } = options;

  if (GraphType.resolvers.has(name)) {
    return GraphType.resolvers.get(name);
  }

  const payloadType = GraphType.is(type)
    ? type
    : createType(`${name}Payload`, type);

  const gqlType = payloadType.graphQLType();

  const argsType = createType(
    `${name}Input`,
    isPossibleArgsDef(args) ? { object: args } : 'record'
  );

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

    const result = await resolve(source, args, context, info);

    return payloadType.parse(
      result,
      (_, error) => `Invalid output from resolver "${name}": ${error.message}`
    );
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

  return result as any;
}

type InferArgs<ArgsDef> = InferField<
  ToFinalField<{
    object: ArgsDef;
  }>
>;

export interface ResolverConfig<Context, Source, TypeDef, ArgsDef>
  extends Omit<GraphQLFieldConfig<any, any>, 'resolve' | 'args' | 'type'> {
  name: string;
  kind?: 'query' | 'mutation' | 'subscription';
  args?: ArgsDef;
  type: TypeDef;

  resolve(
    root: Source,
    args: InferArgs<ArgsDef>,
    context: Context,
    info: GraphQLResolveInfo
  ): Infer<ToFinalField<TypeDef>> | Promise<Infer<ToFinalField<TypeDef>>>;
}

export type AnyResolver = Resolver<any, any, any, {}>;

export interface Resolver<Context, Source, TypeDef, ArgsDef>
  extends Omit<GraphQLFieldConfig<any, any>, 'resolve' | 'args' | 'type'> {
  __isResolver: true;
  __isRelation: boolean;
  __graphTypeId: string;
  __relatedToGraphTypeId: string;

  resolve(
    root: Source,
    args: InferArgs<ArgsDef>,
    context: Context,
    info: GraphQLResolveInfo
  ): Infer<ToFinalField<TypeDef>> | Promise<Infer<ToFinalField<TypeDef>>>;

  name: string;
  kind: 'query' | 'subscription' | 'mutation';

  // keep calm ts
  typeDef: any;
  argsDef: any;
  payloadType: { id: string; [K: string]: any };
  argsType: { id: string; [K: string]: any };
  type: any;
  args: any;

  asObjectField(name?: string): GraphQLField<any, any>;
}

export function isPossibleArgsDef(
  args: any
): args is Readonly<ObjectDefinitionInput> {
  return args && typeof args === 'object' && Object.keys(args).length;
}
