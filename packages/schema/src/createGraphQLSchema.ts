import { BJSON, capitalize, notNull } from '@powership/utils';
import { formatGraphQL } from '@powership/utils';
import { groupBy, tupleEnum } from '@powership/utils';
import { formatWithPrettier } from '@powership/utils';
import type { GraphQLSchemaConfig } from 'graphql';
import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql';

// @only-server
import { generateClientUtils } from './GraphType/generateClientUtils';
import { getInnerGraphTypeId } from './GraphType/getInnerGraphTypeId';
import {
  getSchemaQueryTemplates,
  SchemaQueryTemplatesResult,
} from './GraphType/getQueryTemplates';
import { _resolvers, Resolver } from './Resolver';
import {
  objectToTypescript,
  ObjectToTypescriptOptions,
} from './objectToTypescript';

import {
  cleanMetaField,
  objectMock,
  ObjectMockOptions,
  parseFieldDefinitionConfig,
} from './types';

export type CreateGraphQLObjectOptions = Partial<GraphQLSchemaConfig>;

export type GroupedResolvers = {
  [K in Resolver['kind']]: undefined | Resolver[];
};

export type GraphQLSchemaWithUtils = import('graphql').GraphQLSchema & {
  utils: {
    generateClientUtils: () => Promise<string>;
    grouped: GroupedResolvers;
    print: () => string;
    queryExamples: (
      options?: ObjectMockOptions & { resolver?: string }
    ) => string;
    queryTemplates: () => SchemaQueryTemplatesResult;
    resolvers: Resolver[];
    typescript: (options?: ResolversToTypeScriptOptions) => Promise<string>;
    usedConfig: GraphQLSchemaConfig;
  };
};

export const resolverKinds = tupleEnum('mutation', 'query', 'subscription');
export type ResolverKind = typeof resolverKinds.enum;

export function createGraphQLSchema(
  resolvers?: Resolver[],
  config?: CreateGraphQLObjectOptions
): GraphQLSchemaWithUtils;

export function createGraphQLSchema(
  config?: CreateGraphQLObjectOptions
): GraphQLSchemaWithUtils;

export function createGraphQLSchema(...args: any[]): GraphQLSchemaWithUtils {
  const registeredResolvers = _resolvers.entries.map((el) => el[1]);

  let resolvers: Resolver[] = Array.isArray(args[0])
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
    mutation: grouped.mutation
      ? new GraphQLObjectType({
          fields: createFields('mutation'),
          name: 'Mutation',
        })
      : undefined,

    query: grouped.query
      ? new GraphQLObjectType({
          fields: createFields('query'),
          name: 'Query',
        })
      : undefined,

    subscription: grouped.subscription
      ? new GraphQLObjectType({
          fields: createFields('subscription'),
          name: 'Subscription',
        })
      : undefined,

    ...config,
  };

  const schema = new GraphQLSchema(usedConfig);

  let ts: Promise<string>;

  const utils: GraphQLSchemaWithUtils['utils'] = {
    generateClientUtils() {
      return Promise.reject('not implemented');
    },
    grouped,
    print() {
      return printSchema(schema);
    },
    queryExamples(options) {
      return queryExamples({ grouped, schema, ...options });
    },
    queryTemplates() {
      return getSchemaQueryTemplates(schema);
    },
    resolvers,
    async typescript(options?: ResolversToTypeScriptOptions) {
      return (ts =
        ts ||
        resolversToTypescript({
          name: 'GraphQLTypes',
          ...options,
          resolvers,
        }));
    },
    usedConfig,
  };

  const result = Object.assign(schema, {
    utils,
  });

  utils.generateClientUtils = function _generateClientUtils() {
    return generateClientUtils(result);
  };

  return result;
}

export type ResolversToTypeScriptOptions = {
  name: string;
  options?: ObjectToTypescriptOptions;
  resolvers: Resolver[];
};

export async function resolversTypescriptParts(
  params: ResolversToTypeScriptOptions
) {
  const { name = 'Schema' } = params;

  let prefix = '';

  const mainResolvers = params.resolvers.filter((el) => !el.__isRelation);

  const mainResolversConversion = mainResolvers.map((item) => {
    return convertResolver({
      allResolvers: params.resolvers,
      resolver: item,
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

    typesCode += `${code}\n`;

    if (description) {
      description = `\n/** ${description} **/\n`;
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

  let code =
    `${prefix}\n${typesCode}\n${interfaceCode}}\n${queryCode}}\n${mutationCode}}\n${subscriptionCode}}\n`
      .replace(/\n\n/gm, '\n') // remove multi line breaks
      .replace(/^\n/gm, ''); // remove empty lines
  // @only-server
  code = (await formatWithPrettier(code, {
    parser: 'typescript',
  })) as any;

  return { code, lines };
}

export async function resolversToTypescript(
  params: ResolversToTypeScriptOptions
) {
  const { options = {} } = params;
  const { format = true } = options;

  const { code } = await resolversTypescriptParts(params);

  return format
    ? // @ts-ignore circular
      (formatWithPrettier(code, {
        parser: 'typescript',
        printWidth: 100,
      }) as any)
    : code;
}

async function convertResolver(options: {
  allResolvers: Resolver[];
  resolver: Resolver;
}) {
  const { resolver, allResolvers } = options;

  const inputName = resolver.argsType.id;
  const payloadName = resolver.payloadType.id;
  const payloadOriginName = getInnerGraphTypeId(resolver.payloadType);

  const payloadDef = {
    // clearing ref because will be mutated to inject relations in definition
    ...cleanMetaField(resolver.typeDef),
  };

  allResolvers
    .filter((el) => el.__isRelation)
    .forEach((rel) => {
      if (rel.__relatedToGraphTypeId === payloadOriginName) {
        const typeRelatedToFinalPayload = _resolvers.get(rel.__graphTypeId);
        // @ts-ignore
        payloadDef.def[rel.name] = typeRelatedToFinalPayload.definition;
      }
    });

  const [payload, args] = await Promise.all([
    convertType({
      entryName: payloadName,
      kind: 'output',
      type: payloadDef, // TODO generate type for User[] not for plain object
    }),

    convertType({
      entryName: inputName,
      kind: 'input',
      type: resolver.argsType.definition,
    }),
  ]);

  let code = '';

  code += `${args.comments}\nexport type ${inputName} = ${args.code};`;

  code += `${payload.comments}\nexport type ${payloadName} = ${payload.code};`;

  return {
    args,
    code,
    entryName: resolver.name,
    inputName,
    payload,
    payloadName,
    resolver,
  };
}

async function convertType(options: {
  entryName: string;
  kind: 'input' | 'output';
  type: any;
}) {
  const { entryName, type, kind } = options;

  const parsed = parseFieldDefinitionConfig(type, {
    deep: { omitMeta: true },
  });

  const { description } = parsed;

  // @ts-ignore circular
  // @only-server
  const result = (await objectToTypescript(
    entryName,
    {
      CONVERT__REPLACE: {
        ...type,
        // prevents breaking the `export type...` etc, above. to improve.
      },
    },
    {
      ...options,
      format: false,
      ignoreDefaultValues: kind !== 'input',
    }
  )) as any;

  let code = result
    .split('\n')
    .slice(1, -2)
    .join('\n')
    .replace('CONVERT__REPLACE', '');

  if (code.startsWith('?')) {
    code = `${code} | undefined`;
  }

  code = code.replace(/^\??: /, ``);

  const comments = description ? `\n/** ${description} **/\n` : '';

  return { code, comments, description: description || '' };
}

function queryExamples({
  schema,
  grouped,
  randomText,
  randomNumber,
  resolver: resolverName,
}: {
  grouped: GroupedResolvers;
  randomNumber?: () => number;
  randomText?: () => string;
  resolver?: string;
  schema: GraphQLSchema;
}) {
  let templates = getSchemaQueryTemplates(schema);

  let examples = '';

  Object.entries(grouped).forEach(([_kind, resolvers]) => {
    const kind = _kind as keyof GroupedResolvers;
    if (!resolvers?.length) return;
    const resolversRecord = templates.queryByResolver[kind];

    Object.entries(resolversRecord).forEach(([name, parsed]) => {
      if (resolverName && resolverName !== name) return;
      const resolver = notNull(resolvers.find((el) => el.name === name));
      const argsDef = resolver.argsType.__lazyGetter.objectType?.definition;
      const argsExamples: any = argsDef
        ? objectMock(argsDef, { randomNumber, randomText })
        : '';

      examples += `${kind} ${name}${capitalize(kind)} { ${name}`;

      if (parsed.argsParsed.vars.length) {
        examples += '(';
        const args = parsed.argsParsed.vars.map((val) => {
          const example = argsExamples[val.name];

          const ser =
            typeof example === 'string'
              ? `"${example}"`
              : example && typeof example === 'object'
              ? BJSON.stringify(example, {
                  quoteKeys(str) {
                    if (str.match(/[-.]/)) return `"${str}"`;
                    return str;
                  },
                })
              : example;

          return `${val.name}: ${ser}`;
        });
        examples += args.join(', ');
        examples += ')';
      }

      if (parsed.query) {
        examples += ` {${parsed.query}} `;
      }

      examples += '}\n';
    });
  });

  return [formatGraphQL(examples), templates.fullQuery].join('\n');
}
