import { PromiseType } from '@darch/utils/lib/typeUtils';
import { assert, IsExact } from 'conditional-type-checks';
import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql';

import { createDarchObject, ObjectType } from '../ObjectType';
import { createResolver } from '../createResolver';

describe('createResolver', () => {
  afterEach(async () => {
    await ObjectType.reset();
  });

  it('Should create a Resolver', () => {
    const UserType = createDarchObject('User', {
      name: { string: {}, description: 'the user name' },
      id: 'ulid',
    });

    const resolver = createResolver({
      type: UserType,
      args: { id: 'ulid' },
      name: 'Users',
      description: 'User resolver',
      async resolve(_, { id }) {
        return {
          name: id,
          id: id,
        } as any;
      },
    });

    type Return = PromiseType<ReturnType<typeof resolver.resolve>>;
    type Args = Parameters<typeof resolver.resolve>[1];

    assert<IsExact<Return, { name: string; id: string }>>(true);
    assert<IsExact<Args, { id: string }>>(true);

    const object = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          users: resolver.fieldConfig,
        }),
      }),
    });

    expect(printSchema(object).split('\n')).toEqual([
      'type Query {',
      '  """User resolver"""',
      '  users(id: Ulid!): User!',
      '}',
      '',
      'type User {',
      '  """the user name"""',
      '  name: String!',
      '  id: Ulid!',
      '}',
      '',
      'scalar Ulid',
    ]);
  });

  it('Should create complex types preserving names', () => {
    const user = createDarchObject('user', {
      name: 'string',
      age: 'int?',
    });

    const userAddress = createDarchObject('UserAddress', {
      street: 'string',
      number: 'int?',
    }).describe('The user address');

    const resolver = createResolver({
      type: user,
      args: {
        name: 'string',
        addresses: { object: userAddress, list: true },
        records: { record: { keyType: 'int', type: { enum: ['banana'] } } },
      } as const,
      name: 'Users',
      resolve(rp) {
        return rp as any;
      },
    });

    type Return = ReturnType<typeof resolver.resolve>;
    type Args = Parameters<typeof resolver.resolve>[1];

    assert<IsExact<Return, Promise<{ name: string; age?: number }>>>(true);

    assert<
      IsExact<
        Args,
        {
          name: string;
          addresses: {
            number?: number | undefined;
            street: string;
          }[];
          records: { [K: number]: 'banana' };
        }
      >
    >(true);

    const object = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          users: resolver.fieldConfig,
        }),
      }),
    });

    expect(printSchema(object).split('\n')).toEqual([
      'type Query {',
      '  users(name: String!, addresses: [UserAddressInput]!, records: UsersInput_recordsRecord!): user!',
      '}',
      '',
      'type user {',
      '  name: String!',
      '  age: Int',
      '}',
      '',
      'input UserAddressInput {',
      '  street: String!',
      '  number: Int',
      '}',
      '',
      'scalar UsersInput_recordsRecord',
    ]);
  });

  it('Should accept literals as type', () => {
    const resolver = createResolver({
      name: 'Airplanes',
      type: '[int]?',
      args: undefined,
      async resolve() {
        return undefined;
      },
    });

    const object = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          airplanes: resolver.fieldConfig,
        }),
      }),
    });

    expect(printSchema(object).split('\n')).toEqual([
      'type Query {',
      '  airplanes: [Int]',
      '}',
    ]);
  });
});
