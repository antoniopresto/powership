import { printSchema } from 'graphql';

import { createType } from '../DarchType';
import { ObjectType } from '../ObjectType';
import { createGraphQLSchema } from '../createGraphQLSchema';

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
      async resolve() {
        return [1];
      },
    });

    const object = createGraphQLSchema({});

    expect(printSchema(object).split('\n')).toEqual([
      'type Mutation {',
      '  Numbers: [Int]!',
      '}',
    ]);
  });
});
