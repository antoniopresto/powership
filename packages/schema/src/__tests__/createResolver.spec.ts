import { createResolver, Resolver } from '../createResolver';
import { assert, IsExact } from 'conditional-type-checks';
import { printSchema } from 'graphql-compose';
import { createType, Schema } from '../Schema';
import { PromiseType } from '@darch/utils/lib/typeUtils';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';

describe('createResolver', () => {
  afterEach(async () => {
    Schema.register.clear();
    Resolver.register.clear();
  });

  it('Should create a Resolver', () => {
    const UserType = createType('User', {
      name: { string: {}, description: 'the user name' },
      id: 'ulid',
    });

    const resolver = createResolver({
      type: UserType,
      args: { id: 'ulid' },
      name: 'Users',
      description: 'User resolver',
      async resolve({ args: { id } }) {
        return {
          name: id,
          id: id,
        } as any;
      },
    });

    type Return = PromiseType<ReturnType<typeof resolver.resolve>>;
    type Args = Parameters<typeof resolver.resolve>[0]['args'];

    assert<IsExact<Return, { name: string; id: string }>>(true);
    assert<IsExact<Args, { id: string }>>(true);

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          users: resolver.getFieldConfig(),
        }),
      }),
    });

    expect(printSchema(schema)).toEqual(
      `type Query {
  """User resolver"""
  users(id: Ulid!): User
}

scalar Ulid

type User {
  """the user name"""
  name: String!
  id: Ulid!
}
`
    );
  });

  // TODO union type
  it('Should create complex types preserving names', () => {
    const user = createType('user', {
      name: 'string',
      age: 'int?',
    });

    const userAddress = createType('UserAddress', {
      street: 'string',
      number: { union: ['string', 'int'], description: 'string or number' },
    }).describe('The user address');

    const resolver = createResolver({
      type: user,
      args: {
        name: 'string',
        addresses: { schema: userAddress, list: true },
        records: { record: { keyType: 'int', type: { enum: ['banana'] } } },
      } as const,
      name: 'Users',
      resolve(rp) {
        return rp as any;
      },
    });

    type Return = ReturnType<typeof resolver.resolve>;
    type Args = Parameters<typeof resolver.resolve>[0]['args'];

    assert<IsExact<Return, Promise<{ name: string; age?: number }>>>(true);

    assert<
      IsExact<
        Args,
        {
          name: string;
          addresses: {
            number: string | number;
            street: string;
          }[];
          records: { [K: number]: 'banana' };
        }
      >
    >(true);

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          users: resolver.getFieldConfig(),
        }),
      }),
    });

    expect(printSchema(schema)).toMatchSnapshot();
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

    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',

        fields: () => ({
          airplanes: resolver.getFieldConfig(),
        }),
      }),
    });

    expect(printSchema(schema)).toMatchSnapshot();
  });

  // it('Should reuse saved OTC types', async () => {
  //   const AirplaneType = createType('Airplane', {
  //     model: 'string',
  //     id: 'ulid',
  //   });
  //
  //   const UserType = createType('User', {
  //     name: 'string',
  //     collection: {
  //       schema: AirplaneType,
  //       list: true,
  //       optional: true,
  //     },
  //   });
  //
  //   const resolver = createResolver({
  //     name: 'airplanes',
  //     type: { type: AirplaneType, list: true },
  //     args: {
  //       airplanes: { type: AirplaneType, list: true },
  //       users: { schema: UserType, list: true },
  //     },
  //     async resolve() {
  //       return [];
  //     },
  //   });
  //
  //   const schema = new GraphQLSchema({
  //     query: new GraphQLObjectType({
  //       name: 'Query',
  //
  //       fields: () => ({
  //         airplanes: resolver.getFieldConfig(),
  //         airplanes2: resolver.getFieldConfig(),
  //         airplaneFromSchema: AirplaneType.createResolver({
  //           name: 'airplane',
  //           args: { id: 'int' },
  //           resolve() {
  //             return {} as any;
  //           },
  //         }).getFieldConfig(),
  //
  //         user: UserType.createResolver({
  //           name: 'user',
  //           args: { id: 'int' },
  //           resolve() {
  //             return {} as any;
  //           },
  //         }).getFieldConfig(),
  //
  //         users: Schema.resolverFieldConfig({
  //           name: 'users',
  //           type: { schema: UserType, list: true },
  //           args: {},
  //           resolve() {
  //             return {} as any;
  //           },
  //         }),
  //
  //         airplaneByAP: UserType.createResolver({
  //           name: 'airplaneByAP',
  //           args: { ap: AirplaneType },
  //           resolve() {
  //             return {} as any;
  //           },
  //         }).getFieldConfig(),
  //       }),
  //     }),
  //   });
  //
  //   expect(printSchema(schema)).toEqual('');
  // });

  it('Should reuse arg types', async () => {
    const name = 'Salad';

    const Fruit = createType('Fruit', {
      name: 'string',
      color: 'string',
    });

    const a = Resolver.argsToGQL({
      name,
      args: {
        name: 'string',
        fruits: { list: true, type: Fruit },
      },
    });
    
    expect(a.result).toEqual({})
  });
});
