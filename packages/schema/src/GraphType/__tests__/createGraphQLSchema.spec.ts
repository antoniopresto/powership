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
      'export type EmptyArgs = undefined;',
      '',
      'export type NumbersInput = {',
      '  min?: number;',
      '};',
      '/** ❤️ **/',
      'export type Numbers = number[];',
      '',
      'export type LettersInput = undefined | EmptyArgs;',
      'export type Letters = string[] | undefined;',
      '',
      'export interface GraphQLTypes {',
      '  Numbers: { input: NumbersInput; payload: Numbers };',
      '  Letters: { input: LettersInput; payload: Letters };',
      '}',
      '',
      'export type QueryResolvers = {',
      '  Numbers(args: NumbersInput): Promise<Numbers>;',
      '  Letters(args: LettersInput): Promise<Letters>;',
      '};',
      '',
      'export type MutationResolvers = {};',
      '',
      'export type SubscriptionResolvers = {};',
      '',
    ]);
  });
});
