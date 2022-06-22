import { simpleObjectClone } from '@darch/utils/lib/simpleObjectClone';
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
        return true;
      },
    });

    type Res = ReturnType<typeof addLetterResolver.resolve>;
    type Args = Parameters<typeof addLetterResolver.resolve>[1];

    assert<IsExact<Res, Promise<boolean>>>(true);
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
      'export type LettersInput = undefined;',
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
      const sut = object.utils.queryExamples();

      expect(sut.fullQuery.split('\n')).toEqual([
        'query getLetters {',
        '  getLetters',
        '}',
        'query getNumbers($getNumbers_min: Int! = "0") {',
        '  getNumbers(min: $getNumbers_min)',
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

      expect(
        simpleObjectClone(sut.queryByResolver.mutation.updateUser)
      ).toEqual({
        allArgs: {
          Int2166136261: {
            strings: {
              innerArgsString: '',
              innerArgsStringPart: '',
              topArgsString: '',
              topArgsStringPart: '',
            },
            vars: [],
          },
          String2166136261: {
            strings: {
              innerArgsString: '',
              innerArgsStringPart: '',
              topArgsString: '',
              topArgsStringPart: '',
            },
            vars: [],
          },
          User2577014580: {
            strings: {
              innerArgsString: '(id: $updateUser_id)',
              innerArgsStringPart: 'id: $updateUser_id',
              topArgsString: '($updateUser_id: ID!)',
              topArgsStringPart: '$updateUser_id: ID!',
            },
            vars: [
              {
                comments: '',
                name: 'id',
                type: 'ID!',
                varName: '$updateUser_id',
              },
            ],
          },
        },
        argsParsed: {
          strings: {
            innerArgsString: '(id: $updateUser_id)',
            innerArgsStringPart: 'id: $updateUser_id',
            topArgsString: '($updateUser_id: ID!)',
            topArgsStringPart: '$updateUser_id: ID!',
          },
          vars: [
            {
              comments: '',
              name: 'id',
              type: 'ID!',
              varName: '$updateUser_id',
            },
          ],
        },
        fieldQuery:
          '\n  updateUser(id: $updateUser_id) {\n    name\n    age\n  }\n',
        fields: {
          args: [
            {
              extensions: {},
              name: 'id',
              type: 'ID!',
            },
          ],
          children: [],
          fields: {
            age: {
              args: [],
              children: [],
              description:
                'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
              fields: {},
              hash: 'Int2166136261',
              innerTypeString: 'Int',
              isObject: false,
              isUnion: false,
              readableHash: 'Int',
            },
            name: {
              args: [],
              children: [],
              description:
                'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
              fields: {},
              hash: 'String2166136261',
              innerTypeString: 'String',
              isObject: false,
              isUnion: false,
              readableHash: 'String',
            },
          },
          hash: 'User2577014580',
          innerTypeString: 'User',
          isObject: true,
          isUnion: false,
          readableHash: 'UseridID!',
        },
        fragments: '',
        fullQuery:
          'mutation updateUser($updateUser_id: ID!) {\n  updateUser(id: $updateUser_id) {\n    name\n    age\n  }\n}\n',
        query: ' name  age ',
      });
    });
  });
});
