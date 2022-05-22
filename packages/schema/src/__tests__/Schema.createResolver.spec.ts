import { createType, Schema } from '../Schema';
import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql';

describe('Schema.createResolver', () => {
  beforeEach(async () => {
    await Schema.reset();
  });

  it('Should parse optional arguments', async () => {
    let resolve: any;

    const usersResolver = createType('User', {
      name: 'string',
      age: 'int?',
    }).createResolver({
      name: 'Users',
      kind: 'query',
      args: { id: 'int?' },
      resolve(rp) {
        return resolve(rp);
      },
    });

    await expect(() =>
      usersResolver.resolve({
        args: { id: [] as any },
        projection: {},
        source: undefined,
        info: {} as any,
        context: {},
      })
    ).rejects.toThrow(
      `Invalid input:\n ➤ field "id": Expected value to be of type "number", found array instead.`
    );

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          users: usersResolver.getFieldConfig(),
        }),
      }),
    });

    expect(printSchema(schema)).toMatchSnapshot();
  });

  it('Should handle undefined args definition', async () => {
    const usersResolver = createType('User', {
      name: 'string',
      age: 'int?',
    }).createResolver({
      name: 'Users',
      kind: 'query',
      async resolve({ args }) {
        expect(args).toEqual({});
        return { age: 1, name: 'baby' };
      },
    });

    expect(
      await usersResolver.resolve({
        args: {},
        projection: {},
        source: undefined,
        info: {} as any,
        context: {},
      })
    ).toEqual({ age: 1, name: 'baby' });
  });

  it('Should validate output', async () => {
    const usersResolver = createType('User', {
      name: 'string',
      age: { int: { min: 1 } },
    }).createResolver({
      name: 'User',
      kind: 'query',
      args: {
        filter: {
          schema: { id: 'int?', nameSearch: '[string]?' },
          optional: true,
        },
      },
      async resolve({ args }) {
        expect(args).toEqual({});
        return { age: 0.5, name: 'baby' };
      },
    });

    await expect(
      usersResolver.resolve({
        args: {},
        projection: {},
        source: undefined,
        info: {} as any,
        context: {},
      })
    ).rejects.toThrow(
      'Invalid payload:\n ➤ field "age": 0.5 is not a valid integer.'
    );

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          user: usersResolver.getFieldConfig(),
        }),
      }),
    });

    expect(printSchema(schema)).toMatchSnapshot();
  });

  it('Should create custom resolvers', async () => {
    const userType = createType('User', {
      name: 'string',
      age: { int: { min: 1 } },
    });

    const usersResolver = Schema.createResolver({
      type: { type: userType, list: true },
      name: 'Users',
      kind: 'query',
      async resolve() {
        return [{ age: 1, name: 'baby' }];
      },
    });

    expect(
      await usersResolver.resolve({
        args: {},
        projection: {},
        source: undefined,
        info: {} as any,
        context: {},
      })
    ).toEqual([{ age: 1, name: 'baby' }]);

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          users: usersResolver.getFieldConfig(),
        }),
      }),
    });

    expect(printSchema(schema)).toMatchSnapshot();
  });
});
