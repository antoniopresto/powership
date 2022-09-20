import { assert, IsExact } from 'conditional-type-checks';

import { CircularDeps } from '../CircularDeps';
import { Infer } from '../Infer';

describe('Darch aliases', () => {
  afterEach(CircularDeps.DarchObject.reset);

  test('type creators', async () => {
    expect(CircularDeps.enum(['m']).definition).toEqual({
      def: ['m'],

      type: 'enum',
    });

    expect(
      CircularDeps.object({
        name: { string: {}, defaultValue: 'Antonio' },
      }).definition
    ).toEqual({
      def: {
        name: {
          defaultValue: 'Antonio',
          string: {},
        },
      },

      type: 'object',
    });
  });

  test('createResolver', () => {
    const sut = CircularDeps.createResolver;

    type Arg = Parameters<typeof sut>[0]['kind'];
    assert<IsExact<Arg, 'subscription' | 'query' | 'mutation' | undefined>>(
      true
    );

    expect(typeof sut).toBe('function');
    expect(sut.name).toBe('createResolver');
    expect(CircularDeps.isPossibleArgsDef).toBe(
      require('../Resolver').isPossibleArgsDef
    );
  });

  test('createType', () => {
    const sut = CircularDeps.createType;

    expect(typeof sut).toBe('function');
    expect(sut.name).toBe('createType');

    const obj = sut('User', {
      object: {
        name: 'string',
      },
    });

    type U = Infer<typeof obj>;

    assert<IsExact<{ name: string }, U>>(true);

    expect(() => obj.parse({})).toThrow('➤ field "name": required field.');
  });

  test('graphql', () => {
    const sut = CircularDeps.graphql;

    expect(typeof sut).toBe('function');
    expect(sut.name).toBe('graphql');

    expect(CircularDeps.GraphQLString.toJSON()).toBe('String');
  });
});
