import { MaybePromise } from '@darch/utils/lib/typeUtils';
import { assert, IsExact } from 'conditional-type-checks';
import { printSchema } from 'graphql';

import { ObjectType } from '../../ObjectType';
import { createGraphQLSchema } from '../../createGraphQLSchema';
import { createType } from '../GraphType';

describe('createGraphQLObject', () => {
  afterEach(async () => {
    await ObjectType.reset();
  });

  it('works', async () => {
    const numbersResolver = createType('Numbers', '[int]').createResolver({
      name: 'Numbers',
      async resolve() {
        return [1];
      },
    });

    const lettersResolver = createType('Letters', '[string]?').createResolver({
      name: 'Letters',
      async resolve() {
        return ['a', 'b', 'c'];
      },
    });

    const object1 = createGraphQLSchema();

    const object2 = createGraphQLSchema([lettersResolver]);

    const object3 = createGraphQLSchema({
      description: 'Object3',
    });

    const object4 = createGraphQLSchema([numbersResolver], {
      description: 'Object4',
    });

    expect(printSchema(object1).split('\n')).toEqual([
      'type Query {',
      '  Numbers: [Int]!',
      '  Letters: [String]',
      '}',
    ]);

    expect(printSchema(object2).split('\n')).toEqual([
      'type Query {',
      '  Letters: [String]',
      '}',
    ]);

    expect(printSchema(object3).split('\n')).toEqual([
      '"""Object3"""',
      'schema {',
      '  query: Query',
      '}',
      '',
      'type Query {',
      '  Numbers: [Int]!',
      '  Letters: [String]',
      '}',
    ]);

    expect(printSchema(object4).split('\n')).toEqual([
      '"""Object4"""',
      'schema {',
      '  query: Query',
      '}',
      '',
      'type Query {',
      '  Numbers: [Int]!',
      '}',
    ]);
  });

  it('should add subscription', async () => {
    createType('Numbers', '[int]').createResolver({
      name: 'Numbers',
      kind: 'subscription',
      async resolve() {
        return [1];
      },
    });

    const object = createGraphQLSchema({});

    expect(printSchema(object).split('\n')).toEqual([
      'type Subscription {',
      '  Numbers: [Int]!',
      '}',
    ]);
  });

  it('should add mutation', async () => {
    createType('Numbers', '[int]').createResolver({
      name: 'Numbers',
      kind: 'mutation',
      args: {
        limit: 'int',
      },
      async resolve() {
        return [1];
      },
    });

    const object = createGraphQLSchema({});

    expect(printSchema(object).split('\n')).toEqual([
      'type Mutation {',
      '  Numbers(limit: Int!): [Int]!',
      '}',
    ]);
  });

  it('should print typescript', async () => {
    createType('Numbers', {
      int: { min: 2 },
      description: '❤️',
      list: true,
    }).createResolver({
      name: 'Numbers',
      args: {
        min: 'float?',
      },
      async resolve() {
        return [1];
      },
    });

    createType('Letters', '[string]?').createResolver({
      name: 'Letters',
      async resolve() {
        return ['a', 'b', 'c'];
      },
    });

    const addLetterType = createType('addLetter', {
      type: 'boolean',
      description: 'Bolo de fubá 👨🏽‍🔧',
    });

    const addLetterResolver = addLetterType.createResolver({
      name: 'Numbers',
      kind: 'mutation',
      args: {
        letter: { enum: ['a', 'b'] },
      } as const,
      async resolve() {
        return {} as any;
      },
    });

    type Res = ReturnType<typeof addLetterResolver.resolve>;
    type Args = Parameters<typeof addLetterResolver.resolve>[1];

    assert<IsExact<Res, MaybePromise<boolean>>>(true);
    assert<IsExact<Args, { letter: 'a' | 'b' }>>(true);

    createType('checkNumbers', 'boolean').createResolver({
      name: 'Numbers',
      kind: 'mutation',
      description: 'Check for numbers ;)',
      async resolve() {
        return true;
      },
    });

    const object = createGraphQLSchema();

    const ts = await object.utils.typescript();

    expect(ts.split('\n')).toEqual([
      'export type NumbersInput = {',
      '  min?: number;',
      '};',
      '/** ❤️ **/',
      'export type Numbers = number[];',
      'export type LettersInput = {',
      '  [k: string]: unknown | undefined;',
      '};',
      'export type Letters = string[] | undefined;',
      'export interface GraphQLTypes {',
      '  Numbers: { input: NumbersInput; payload: Numbers };',
      '  Letters: { input: LettersInput; payload: Letters };',
      '}',
      'export type QueryResolvers = {',
      '  Numbers(args: NumbersInput): Promise<Numbers>;',
      '  Letters(args: LettersInput): Promise<Letters>;',
      '};',
      'export type MutationResolvers = {};',
      'export type SubscriptionResolvers = {};',
      '',
    ]);
  });

  describe('printQuery', () => {
    test('query', () => {
      createType('Letters', '[string]?').createResolver({
        name: 'getLetters',
        async resolve() {
          return ['a', 'b', 'c'];
        },
      });

      createType('Numbers', '[int]').createResolver({
        name: 'getNumbers',
        args: {
          min: { int: {}, defaultValue: 0 },
          letters: { type: 'string', defaultValue: 'batata' },
        },
        async resolve() {
          return [];
        },
      });

      const UserType = createType('User', {
        object: { name: 'string', age: 'int?' },
      });

      createType('getAllUsersPayload', {
        type: UserType,
        list: true,
      }).createResolver({
        name: 'getAllUsers',
        async resolve() {
          return [];
        },
      });

      createType('getUsersPaginationPayload', {
        type: UserType,
        list: true,
      }).createResolver({
        name: 'getUsersPagination',
        args: {
          limit: 'int?',
        },
        async resolve() {
          return [];
        },
      });

      UserType.createResolver({
        kind: 'mutation',
        name: 'updateUser',
        args: {
          id: 'ID',
        },
        async resolve() {
          return UserType.parse({});
        },
      });

      const object = createGraphQLSchema();
      const sut = object.utils.queryTemplates();

      expect(sut.fullQuery.split('\n')).toEqual([
        'query getLetters {',
        '  getLetters',
        '}',
        'query getNumbers($getNumbers_min: Int = 0, $getNumbers_letters: String = "batata") {',
        '  getNumbers(min: $getNumbers_min, letters: $getNumbers_letters)',
        '}',
        'query getAllUsers {',
        '  getAllUsers {',
        '    name',
        '    age',
        '  }',
        '}',
        'query getUsersPagination($getUsersPagination_limit: Int) {',
        '  getUsersPagination(limit: $getUsersPagination_limit) {',
        '    name',
        '    age',
        '  }',
        '}',
        'mutation updateUser($updateUser_id: ID!) {',
        '  updateUser(id: $updateUser_id) {',
        '    name',
        '    age',
        '  }',
        '}',
      ]);
    });

    test('foo', async () => {
      const user = createType('User', {
        object: {
          name: 'string',
          age: 'int',
          addresses: {
            list: true,
            object: {
              street: 'string',
              number: 'string',
            },
          },
        },
      });

      user.createResolver({
        name: 'getUser',
        args: {
          min: { int: {}, defaultValue: 0 },
          letters: { type: 'string', defaultValue: 'batata' },
          points: {
            object: {
              lat: 'string',
              lon: 'string',
            },
          },
        },
        async resolve() {
          return {
            name: '1111',
            age: 1,
            addresses: [],
          };
        },
      });

      user.createResolver({
        name: 'createUser',
        kind: 'mutation',
        args: user._object!.cleanDefinition(),
        async resolve() {
          return {
            name: '1111',
            age: 1,
            addresses: [],
          };
        },
      });

      const object = createGraphQLSchema();
      const examples = object.utils.queryExamples({
        randomText() {
          return 'example';
        },
      });

      expect(examples.split('\n')).toEqual([
        'query getUserQuery {',
        '  getUser(',
        '    min: 1',
        '    letters: "example"',
        '    points: { lat: "example", lon: "example" }',
        '  ) {',
        '    name',
        '    age',
        '    addresses {',
        '      ...User_addresses2402738501Fragment',
        '    }',
        '  }',
        '}',
        'mutation createUserMutation {',
        '  createUser(',
        '    name: "example"',
        '    age: 1',
        '    addresses: [{ number: "example", street: "example" }]',
        '  ) {',
        '    name',
        '    age',
        '    addresses {',
        '      ...User_addresses2402738501Fragment',
        '    }',
        '  }',
        '}',
        '',
        'fragment User_addresses2402738501Fragment on User_addresses {',
        '  street',
        '  number',
        '}',
        'query getUser($getUser_min: Int = 0, $getUser_letters: String = "batata", $getUser_points: getUserInput_pointsInput!) {',
        '  getUser(min: $getUser_min, letters: $getUser_letters, points: $getUser_points) {',
        '    name',
        '    age',
        '    addresses {',
        '      ...User_addresses2402738501Fragment',
        '    }',
        '  }',
        '}',
        'fragment User_addresses2402738501Fragment on User_addresses {',
        '  street',
        '  number',
        '}',
        'mutation createUser(',
        '  $createUser_name: String!',
        '  $createUser_age: Int!',
        '  $createUser_addresses: [createUserInput_addressesInput]!',
        ') {',
        '  createUser(name: $createUser_name, age: $createUser_age, addresses: $createUser_addresses) {',
        '    name',
        '    age',
        '    addresses {',
        '      ...User_addresses2402738501Fragment',
        '    }',
        '  }',
        '}',
      ]);
    });
  });
});
