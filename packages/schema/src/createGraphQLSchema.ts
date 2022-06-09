import { capitalize } from '@darch/utils/lib/stringCase';
import type { GraphQLSchemaConfig } from 'graphql';
import { GraphQLObjectType } from 'graphql';
import groupBy from 'lodash/groupBy';

import type { DarchResolver } from './DarchType';
import { assertDarchResolver } from './DarchType';
import { ObjectType, parseFieldDefinitionConfig } from './ObjectType';
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
  };
};

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
    DarchType,
  } = ObjectType.serverUtils();

  const registeredResolvers = [...DarchType.DarchType.resolvers.values()];

  const resolvers: DarchResolver[] = Array.isArray(args[0])
    ? args[0]
    : registeredResolvers;

  resolvers.forEach((el) => assertDarchResolver(el));

  const config = Array.isArray(args[0]) ? args[1] : args[0];

  const grouped = groupBy(resolvers, (item) => item.kind) as GroupedResolvers;

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
          name: 'Schema',
          ...options,
          resolvers,
        }));
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

export async function resolversToTypescript(
  params: ResolversToTypeScriptOptions
) {
  const { name = 'Schema', options = {}, resolvers } = params;
  const { format = true } = options;

  const { prettier, objectToTypescript } = ObjectType.serverUtils();

  let prefix = 'export interface EmptyArgs {}';

  const convert = async (entryName: string, type: any) => {
    const { description } = type;

    const result = await objectToTypescript.objectToTypescript(
      entryName,
      {
        __CONVERT__REPLACE__: {
          ...type,
          description: undefined,
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
  };

  const chain = resolvers.map(async (resolver) => {
    const entryName = `${resolver.name}${capitalize(resolver.kind || 'query')}`;

    const payload = await convert(
      `${entryName}Payload`,
      parseFieldDefinitionConfig(resolver.typeDef)
    );

    const args = resolver.argsDef
      ? await convert(`${entryName}Input`, { object: resolver.argsDef })
      : { code: `undefined | EmptyArgs`, description: '', comments: '' };

    let code = '';

    code += `${args.comments}export type ${entryName}Input = ${args.code};`;

    code += `${payload.comments}export type ${entryName}Payload = ${payload.code};`;

    return {
      entryName,
      code,
      payload,
      args,
      resolver,
    };
  });

  const lines = await Promise.all(chain);

  let typesCode = '';
  let interfaceCode = `export interface ${name} {`;

  lines.forEach((el) => {
    let {
      entryName,
      code,
      resolver: { description = '' },
    } = el;

    typesCode += `${code}\n\n`;

    if (description) {
      description = `\n\n/** ${description} **/\n`;
    }

    interfaceCode += `${description} ${entryName}: {input: ${entryName}Input, payload: ${entryName}Payload},`;
  });

  const code = `${prefix}\n\n${typesCode}\n\n${interfaceCode}}`;

  return format ? prettier.format(code, { parser: 'typescript' }) : code;
}
