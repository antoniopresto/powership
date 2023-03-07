import { CircularDeps, GraphQLSchemaWithUtils } from '@swind/schema';

export let gql_utils = '';

export async function generateTypes(
  schema: GraphQLSchemaWithUtils
): Promise<string> {
  //
  if (gql_utils) return gql_utils;

  gql_utils = await schema.utils.generateClientUtils();
  gql_utils = `${gql_utils}\n\n${extendedUtils}`;

  gql_utils = CircularDeps.prettier.format(gql_utils, {
    singleQuote: true,
    parser: 'typescript',
  });

  return gql_utils;
}

const extendedUtils = `
import type { Compute } from '@swind/utils';

export type Ulid = string;

export type UseGraphQLConfig<K extends GraphQLEntry['name']> =
  ExpectedGraphQLClient[K]['args'] extends undefined
    ? { data?: Record<string, never> }
    : { data: ExpectedGraphQLClient[K]['args'] };

const fetchHelpers: Record<string, GraphQLFetchParams<any>> = {};

export function parseClientBody<K extends GraphQLEntry['name']>(
  method: K,
  config?: UseGraphQLConfig<K>
) {
  const helpers = (() => {
    return (fetchHelpers[method] =
      fetchHelpers[method] || getGraphQLFetchHelpers(method));
  })();

  return {
    ...config,
    data: helpers.getBody(config?.data || ({} as any)),
  };
}


export type GraphQLMethodResponse<MethodName extends GraphQLEntry['name']> =
  Compute<
    Exclude<
      Exclude<
        GraphQLClientResponse<
          ExpectedGraphQLClient[MethodName]['payload']
        >['data'],
        null
      >['data'],
      null
    >
  >;
`;
