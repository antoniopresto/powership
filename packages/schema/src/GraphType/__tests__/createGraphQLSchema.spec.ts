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
      async resolve() {
        return [1];
      },
    });

    const lettersResolver = createType('Letters', '[string]?').createResolver({
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
      args: {
        min: 'float?',
      },
      async resolve() {
        return [1];
      },
    });

    createType('Letters', '[string]?').createResolver({
      async resolve() {
        return ['a', 'b', 'c'];
      },
    });

    const addLetterType = createType('addLetter', {
      type: 'boolean',
      description: 'Bolo de fubá 👨🏽‍🔧',
    });

    const addLetterResolver = addLetterType.createResolver({
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
      'export type NumbersQueryInput = {',
      '  min?: number;',
      '};',
      '/** ❤️ **/',
      'export type NumbersQueryPayload = number[];',
      '',
      'export type LettersQueryInput = undefined | EmptyArgs;',
      'export type LettersQueryPayload = string[] | undefined;',
      '',
      'export type addLetterMutationInput = {',
      '  letter: "a" | "b";',
      '};',
      '/** Bolo de fubá 👨🏽‍🔧 **/',
      'export type addLetterMutationPayload = boolean;',
      '',
      'export type checkNumbersMutationInput = undefined | EmptyArgs;',
      'export type checkNumbersMutationPayload = boolean;',
      '',
      'export interface GraphQLTypes {',
      '  NumbersQuery: { input: NumbersQueryInput; payload: NumbersQueryPayload };',
      '  LettersQuery: { input: LettersQueryInput; payload: LettersQueryPayload };',
      '  addLetterMutation: {',
      '    input: addLetterMutationInput;',
      '    payload: addLetterMutationPayload;',
      '  };',
      '',
      '  /** Check for numbers ;) **/',
      '  checkNumbersMutation: {',
      '    input: checkNumbersMutationInput;',
      '    payload: checkNumbersMutationPayload;',
      '  };',
      '}',
      '',
    ]);
  });
});
