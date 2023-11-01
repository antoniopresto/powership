import { assert, IsExact } from 'conditional-type-checks';
import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql';
import { createType } from '../GraphType';

describe('TypeLoader', () => {
  // afterEach();
  const tObject = createType({
    object: {
      //
      name: 'string',
      age: 'int',
    },
  });

  const loader = tObject.setLoader({
    name: 'findOne',
    args: {
      age: 'int',
    },
    async load({ args }) {
      //
      assert<IsExact<typeof args, { age: number }>>(true);

      return { name: 'person', age: args.age };
    },
  });

  test('resolve', async () => {
    const result = await loader.load({
      args: { age: 30 },
      context: {},
    });

    expect(result).toEqual({
      age: 30,
      name: 'person',
    });
  });

  test('asGraphQLField', async () => {
    const resolver = loader.asGraphQLField;

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        fields: {
          foo: resolver,
        },
      }),
    });

    const schemaString = printSchema(schema);

    expect(schemaString.split('\n')).toEqual([
      'type Query {',
      '  foo(age: Int!): FindOnePayload!',
      '}',
      '',
      'type FindOnePayload {',
      '  name: String!',
      '  age: Int!',
      '}',
    ]);

    const result = await resolver.resolve({}, { age: 18 }, {}, {} as any);
    expect(result).toEqual({
      age: 18,
      name: 'person',
    });
  });

  test('asTypescript', async () => {
    const code = await loader.asTypescript;

    expect(code.split('\n')).toEqual([
      'export interface FindOnePayloadInput {',
      '  age: number;',
      '}',
      '',
      'export interface FindOnePayload {',
      '  name: string;',
      '  age: number;',
      '}',
      '',
    ]);
  });
});
