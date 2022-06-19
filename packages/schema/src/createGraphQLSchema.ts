import { tupleEnum } from '@darch/utils/lib/typeUtils';
import type { GraphQLSchemaConfig } from 'graphql';
import { GraphQLObjectType, printSchema } from 'graphql';
import groupBy from 'lodash/groupBy';

import type { DarchResolver } from './GraphType/GraphType';
import { GraphType } from './GraphType/GraphType';
import {
  getSchemaQueryExamples,
  SchemaQueryExamplesResult,
} from './GraphType/getQueryExamples';
import { ObjectType } from './ObjectType';
import { clearMetaField } from './fields/MetaFieldField';
import type { ObjectToTypescriptOptions } from './objectToTypescript';

export type CreateGraphQLObjectOptions = Partial<GraphQLSchemaConfig>;

export type GroupedResolvers = {
  [K in DarchResolver['kind']]: undefined | DarchResolver<any>[];
};

export type GraphQLSchemaWithUtils = import('graphql').GraphQLSchema & {
  utils: {
    usedConfig: GraphQLSchemaConfig;
    resolvers: DarchResolver<any>[];
    registeredResolvers: DarchResolver<any>[];
    grouped: GroupedResolvers;
    typescript: (options?: ResolversToTypeScriptOptions) => Promise<string>;
    print: () => string;
    queryExamples: () => SchemaQueryExamplesResult;
  };
};

export const resolverKinds = tupleEnum('mutation', 'query', 'subscription');
export type ResolverKind = keyof typeof resolverKinds;

export function createGraphQLSchema<T = any>(
  resolvers?: T[],
  config?: CreateGraphQLObjectOptions
): T extends { __isResolver } ? GraphQLSchemaWithUtils : never;

export function createGraphQLSchema<Config>(
  config?: Config
): Config extends CreateGraphQLObjectOptions ? GraphQLSchemaWithUtils : never;

export function createGraphQLSchema(...args: any[]): GraphQLSchemaWithUtils {
  const {
    graphql: { GraphQLSchema },
    GraphType,
  } = ObjectType.serverUtils();

  const registeredResolvers = [...GraphType.GraphType.resolvers.values()];

  let resolvers: DarchResolver[] = Array.isArray(args[0])
    ? args[0]
    : registeredResolvers;

  const schemaResolvers = resolvers.filter(
    (el) => el.__isResolver && !el.__isRelation
  );

  const config = Array.isArray(args[0]) ? args[1] : args[0];

  const grouped = groupBy(
    schemaResolvers,
    (item) => item.kind
  ) as GroupedResolvers;

  function createFields(kind: string) {
    const fields = {};
    if (grouped[kind]) {
      grouped[kind].forEach((item) => {
        fields[item.name] = item;
      });
    }
    return fields;
  }

  const usedConfig: GraphQLSchemaConfig = {
    query: grouped.query
      ? new GraphQLObjectType({
          name: 'Query',
          fields: createFields('query'),
        })
      : undefined,

    mutation: grouped.mutation
      ? new GraphQLObjectType({
          name: 'Mutation',
          fields: createFields('mutation'),
        })
      : undefined,

    subscription: grouped.subscription
      ? new GraphQLObjectType({
          name: 'Subscription',
          fields: createFields('subscription'),
        })
      : undefined,

    ...config,
  };

  const schema = new GraphQLSchema(usedConfig);

  let ts: Promise<string>;

  const utils: GraphQLSchemaWithUtils['utils'] = {
    usedConfig,
    resolvers,
    registeredResolvers,
    grouped,
    async typescript(options?: ResolversToTypeScriptOptions) {
      return (ts =
        ts ||
        resolversToTypescript({
          name: 'GraphQLTypes',
          ...options,
          resolvers,
        }));
    },
    print() {
      return printSchema(schema);
    },
    queryExamples() {
      return getSchemaQueryExamples(schema);
    },
  };

  return Object.assign(schema, {
    utils,
  });
}

export type ResolversToTypeScriptOptions = {
  name: string;
  options?: ObjectToTypescriptOptions;
  resolvers: DarchResolver[];
};

export async function resolversTypescriptParts(
  params: ResolversToTypeScriptOptions
) {
  const { name = 'Schema' } = params;

  let prefix = '\n\nexport type EmptyArgs  = undefined;\n\n';

  const mainResolvers = params.resolvers.filter((el) => !el.__isRelation);

  const mainResolversConversion = mainResolvers.map((item) => {
    let entryName = item.name;

    return convertResolver({
      entryName,
      resolver: item,
      allResolvers: params.resolvers,
    });
  });

  const lines = await Promise.all(mainResolversConversion);

  let typesCode = '';
  let interfaceCode = `export interface ${name} {`;

  let queryCode = `export type QueryResolvers = {`;
  let mutationCode = `export type MutationResolvers = {`;
  let subscriptionCode = `export type SubscriptionResolvers = {`;

  lines.forEach((el) => {
    let {
      entryName,
      code,
      payloadName,
      inputName,
      resolver: { description = '', kind },
    } = el;

    typesCode += `${code}\n\n`;

    if (description) {
      description = `\n\n/** ${description} **/\n`;
    }

    const resolverCode = `${description} ${entryName}(args: ${inputName}): Promise<${payloadName}>,`;

    switch (kind) {
      case 'mutation': {
        mutationCode += resolverCode;
        break;
      }
      case 'query': {
        queryCode += resolverCode;
        break;
      }
      case 'subscription': {
        subscriptionCode += resolverCode;
        break;
      }
    }

    interfaceCode += `${description} ${entryName}: {input: ${inputName}, payload: ${payloadName}},`;
  });

  const code = `${prefix}\n\n${typesCode}\n\n${interfaceCode}}\n\n${queryCode}}\n\n${mutationCode}}\n\n${subscriptionCode}}\n\n`;

  return { code, lines };
}

export async function resolversToTypescript(
  params: ResolversToTypeScriptOptions
) {
  const { options = {} } = params;
  const { format = true } = options;

  const { prettier } = ObjectType.serverUtils();

  const { code } = await resolversTypescriptParts(params);

  return format ? prettier.format(code, { parser: 'typescript' }) : code;
}

async function convertResolver(options: {
  entryName: string;
  resolver: DarchResolver;
  allResolvers: DarchResolver[];
}) {
  const { resolver, allResolvers, entryName } = options;

  const inputName = `${entryName}Input`;

  const payloadName = `${resolver.__graphTypeId}`;

  const payloadDef = {
    ...clearMetaField(resolver.typeDef),
  };

  allResolvers.forEach((rel) => {
    if (rel.__relatedToGraphTypeId === resolver.__graphTypeId) {
      payloadDef.def[rel.name] = GraphType.register.get(rel.__graphTypeId);
    }
  });

  const payload = await convertType({
    entryName: `${entryName}`,
    type: payloadDef,
  });

  const args = resolver.argsDef
    ? await convertType({
        entryName: inputName,
        type: { object: resolver.argsDef },
      })
    : { code: `undefined | EmptyArgs`, description: '', comments: '' };

  let code = '';

  code += `${args.comments}export type ${inputName} = ${args.code};`;

  code += `${payload.comments}export type ${payloadName} = ${payload.code};`;

  return {
    entryName,
    code,
    payload,
    args,
    inputName,
    payloadName,
    resolver,
  };
}

async function convertType(options: { entryName: string; type: any }) {
  const { entryName, type } = options;
  const { objectToTypescript } = ObjectType.serverUtils();

  const { description } = type;

  const result = await objectToTypescript.objectToTypescript(
    entryName,
    {
      __CONVERT__REPLACE__: {
        ...type,
        description: undefined, // prevents breaking the `export type...` etc, above. to improve.
      },
    },
    {
      ...options,
      format: false,
    }
  );

  let code = result
    .split('\n')
    .slice(1, -2)
    .join('\n')
    .replace('__CONVERT__REPLACE__', '');

  if (code.startsWith('?')) {
    code = `${code} | undefined`;
  }

  code = code.replace(/^\??: /, ``);

  const comments = description ? `\n/** ${description} **/\n` : '';

  return { code, description: description || '', comments };
}
