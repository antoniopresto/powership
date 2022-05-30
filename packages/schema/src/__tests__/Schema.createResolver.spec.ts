import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql';

import { createType, Schema } from '../Schema';

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
      args: { id: 'int?' },
      resolve(rp) {
        return resolve(rp);
      },
    });

    await expect(() =>
      usersResolver.resolve(undefined, { id: [] as any }, {}, {} as any)
    ).rejects.toThrow(`Invalid input provided to`);

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          users: usersResolver.fieldConfig,
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
      async resolve(_, args) {
        expect(args).toEqual({});
        return { age: 1, name: 'baby' };
      },
    });

    expect(await usersResolver.resolve(undefined, {}, {}, {} as any)).toEqual({
      age: 1,
      name: 'baby',
    });
  });

  it('Should validate output', async () => {
    const usersResolver = createType('User', {
      name: 'string',
      age: { int: { min: 1 } },
    }).createResolver({
      name: 'User',
      args: {
        filter: {
          schema: { id: 'int?', nameSearch: '[string]?' },
          optional: true,
        },
      },
      async resolve(_, args) {
        expect(args).toEqual({});
        return { age: 0.5, name: 'baby' };
      },
    });

    await expect(
      usersResolver.resolve(undefined, {}, {}, {} as any)
    ).rejects.toThrow('Invalid output from resolver "User"');

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          user: usersResolver.fieldConfig,
        }),
      }),
    });

    expect(printSchema(schema)).toMatchSnapshot();
  });

  it('Should not override custom  in field type list', async () => {
    const userType = createType('User', {
      name: 'string',
      age: { int: { min: 1 } },
    });

    const usersResolver = Schema.createResolver({
      type: { type: userType, list: true },
      name: 'Users',
      async resolve() {
        return [{ age: 1, name: 'baby' }];
      },
    });

    expect(await usersResolver.resolve(undefined, {}, {}, {} as any)).toEqual([
      { age: 1, name: 'baby' },
    ]);

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          users: usersResolver.fieldConfig,
        }),
      }),
    });

    expect(printSchema(schema)).toMatchSnapshot();
  });
});
