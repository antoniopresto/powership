import { ObjectType } from '../../ObjectType';
import { createResolver } from '../../Resolver';
import { createGraphQLSchema } from '../../createGraphQLSchema';
import { createType } from '../GraphType';

describe('schema.getGraphQLTypescript', () => {
  afterEach(ObjectType.reset);

  it('works', async () => {
    const UserType = createType('User', {
      description: 'user entity',
      object: {
        id: 'ID',
      },
    });

    createType('LoginRegister', {
      object: {
        time: 'int',
        device: 'string',
      },
    });

    createResolver({
      type: { type: UserType, list: true },
      name: 'findUsers',
      description: 'find users resolver',
      args: { limit: 'int' },
      async resolve(): Promise<any> {
        return {};
      },
    });

    const schema = createGraphQLSchema();

    const sut = await schema.utils.generateClientUtils();

    expect(sut.split('\n')).toEqual([
      '// Autogenerated, do not edit by hand',
      '',
      '/* istanbul ignore file */',
      '',
      '/* eslint-disable */',
      '',
      "import { GraphType } from '@swind/schema';",
      '',
      'export type GraphQLClientError = { message: string; path: string[] };',
      '',
      'export type ID = number | string;',
      '',
      'export type GraphQLClientResponse<Result> =',
      '  | { data: Result; errors: null }',
      '  | { data: null; errors: GraphQLClientError[] };',
      '',
      'export type findUsersPayload = {',
      '  id: ID;',
      '}[];',
      '',
      'export type findUsersInput = {',
      '  limit: number;',
      '};',
      '',
      'export interface ExpectedGraphQLClient {',
      '  /**',
      'find users resolver',
      '**/',
      '  findUsers: {',
      '    args: findUsersInput;',
      '    payload: GraphQLClientResponse<findUsersPayload>;',
      '  };',
      '}',
      '',
      'export const graphqlClientHelpers = {',
      '  findUsers: {',
      "    name: 'findUsers',",
      "    kind: 'query',",
      "    payload: GraphType.getOrSet('findUsersPayload', {",
      "      def: { id: { type: 'ID' } },",
      '      list: true,',
      "      type: 'object',",
      '    } as const),',
      '',
      "    input: GraphType.getOrSet('findUsersInput', {",
      "      def: { limit: { type: 'int' } },",
      "      type: 'object',",
      '    } as const),',
      '',
      '    operation: {',
      '      query:',
      "        'query findUsers($findUsers_limit: Int!) {\\n  findUsers(limit: $findUsers_limit) {\\n    id\\n  }\\n}\\n',",
      '      varNames: {',
      '        limit: {',
      "          comments: '',",
      "          name: 'limit',",
      "          type: 'Int!',",
      "          varName: 'findUsers_limit',",
      '        },',
      '      },',
      '    } as const,',
      '  },',
      '} as const;',
      '',
      'export type GraphqlClientHelpers = typeof graphqlClientHelpers;',
      'export type GraphQLEntry = GraphqlClientHelpers[keyof GraphqlClientHelpers];',
      '',
      "export type GraphQLFetchParams<K extends GraphQLEntry['name']> = {",
      '  operationInfo: GraphqlClientHelpers[K];',
      '  operationName: K;',
      "  getBody: (args: ExpectedGraphQLClient[K]['args']) => {",
      '    query: string;',
      '    variables: Record<string, any>;',
      '    operationName: K;',
      '  };',
      "  parseArgs: (args: ExpectedGraphQLClient[K]['args']) => Record<string, any>;",
      "  mountBodyString(args: ExpectedGraphQLClient[K]['args']): string;",
      '};',
      '',
      "export function getGraphQLFetchHelpers<MethodName extends GraphQLEntry['name']>(",
      '  methodName: MethodName',
      '): GraphQLFetchParams<MethodName> {',
      '  const helpers = graphqlClientHelpers[methodName];',
      '',
      '  function parseArgs(args: any) {',
      '    const vars: Record<string, any> = {};',
      '    const parsedArgs: any = helpers.input.parse(args || {}, (_, error) => {',
      '      return `\\nGraphQLClientArgumentsError: method ${methodName}: \\n${error.message}`;',
      '    });',
      '',
      '    Object.entries(helpers.operation.varNames).forEach(',
      '      ([inputVarName, { varName }]) => {',
      '        vars[varName] = parsedArgs[inputVarName];',
      '      }',
      '    );',
      '',
      '    return vars;',
      '  }',
      '',
      '  function getBody(args: any) {',
      '    const variables = parseArgs(args);',
      '    return {',
      '      query: helpers.operation.query,',
      '      variables,',
      '      operationName: methodName,',
      '    };',
      '  }',
      '',
      '  function mountBodyString(args: any) {',
      '    const body = getBody(args);',
      '    return JSON.stringify(body);',
      '  }',
      '',
      '  return {',
      '    operationInfo: helpers,',
      '    operationName: methodName,',
      '    parseArgs,',
      '    getBody,',
      '    mountBodyString,',
      '  };',
      '}',
      '',
    ]);
  });
});
