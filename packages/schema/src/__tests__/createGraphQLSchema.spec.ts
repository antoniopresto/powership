import { printSchema } from 'graphql';

import { createType } from '../DarchGraphQLType';
import { Schema } from '../Schema';
import { createGraphQLSchema } from '../createGraphQLSchema';

describe('createGraphQLSchema', () => {
  afterEach(async () => {
    await Schema.reset();
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

    const schema1 = createGraphQLSchema();

    const schema2 = createGraphQLSchema([lettersResolver]);

    const schema3 = createGraphQLSchema({
      description: 'Schema3',
    });

    const schema4 = createGraphQLSchema([numbersResolver], {
      description: 'Schema4',
    });

    expect(printSchema(schema1).split('\n')).toEqual([
      'type Query {',
      '  Numbers: [Int]!',
      '  Letters: [String]',
      '}',
    ]);

    expect(printSchema(schema2).split('\n')).toEqual([
      'type Query {',
      '  Letters: [String]',
      '}',
    ]);

    expect(printSchema(schema3).split('\n')).toEqual([
      '"""Schema3"""',
      'schema {',
      '  query: Query',
      '}',
      '',
      'type Query {',
      '  Numbers: [Int]!',
      '  Letters: [String]',
      '}',
    ]);

    expect(printSchema(schema4).split('\n')).toEqual([
      '"""Schema4"""',
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

    const schema = createGraphQLSchema({});

    expect(printSchema(schema).split('\n')).toEqual([
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

    const schema = createGraphQLSchema({});

    expect(printSchema(schema).split('\n')).toEqual([
      'type Mutation {',
      '  Numbers: [Int]!',
      '}',
    ]);
  });
});
