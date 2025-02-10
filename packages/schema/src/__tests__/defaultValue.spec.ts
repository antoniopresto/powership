import { GraphQLParser } from '../GraphType/GraphQLParser';
import { createResolver } from '../Resolver';
import { createGraphQLSchema } from '../createGraphQLSchema';
import { createObjectType, createType, ObjectType } from '../types';

describe('defaultValue', () => {
  afterEach(() => {
    ObjectType.reset();
  });

  test('TS print as required', () => {
    const object = createObjectType('Item', {
      name: { string: {}, defaultValue: 'hy' },
    });

    const sut = GraphQLParser.objectToGraphQL({
      object,
    });

    expect(sut.typeToString().split('\n')).toEqual([
      'type Item {',
      '  name: String!',
      '}',
    ]);
  });

  test('.graphQLType print with defaultValue', () => {
    const object = createType('User', {
      object: {
        name: { string: {}, defaultValue: 'hy' },
        age: 'int?',
      },
    });

    const sut = object.print();

    expect(sut).toEqual([
      'type User {',
      '  name: String!',
      '  age: Int',
      '}',
      '',
      'input UserInput {',
      '  name: String = "hy"',
      '  age: Int',
      '}',
    ]);
  });

  test('parses correctly', () => {
    const object = createType('User', {
      object: {
        name: { string: {}, defaultValue: 'hy' },
        age: 'int?',
      },
    });

    const sut = object.parse({});

    expect(sut).toEqual({
      name: 'hy',
    });
  });

  test('parse resolver arg with default as typescript optional', async () => {
    const object = createType('User', {
      object: {
        name: { string: {}, defaultValue: 'hy' },
        age: 'int?',
      },
    });

    createResolver({
      type: object,
      name: 'sut',
      args: {
        object,
      },
      async resolve() {
        return object.parse({});
      },
    });

    const schema = createGraphQLSchema();

    const ts = await schema.utils.typescript();

    expect(ts.split('\n')).toEqual([
      'export type sutInput = {',
      '  object: {',
      '    name?: string;',
      '    age?: number;',
      '  };',
      '};',
      'export type User = {',
      '  name: string;',
      '  age?: number;',
      '};',
      'export interface GraphQLTypes {',
      '  sut: { input: sutInput; payload: User };',
      '}',
      'export type QueryResolvers = { sut(args: sutInput): Promise<User> };',
      'export type MutationResolvers = {};',
      'export type SubscriptionResolvers = {};',
      '',
    ]);
  });
});
