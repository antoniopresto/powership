import { assert, IsExact } from 'conditional-type-checks';

import { Darch } from '../Darch';
import { Infer } from '../Infer';

describe('Darch aliases', () => {
  afterEach(Darch.DarchObject.reset);

  test('type creators', async () => {
    expect(Darch.enum(['m']).definition).toEqual({
      def: ['m'],
      list: false,
      optional: false,
      type: 'enum',
    });

    expect(
      Darch.object({
        name: { string: {}, defaultValue: 'Antonio' },
      }).definition
    ).toEqual({
      def: {
        name: {
          defaultValue: 'Antonio',
          string: {},
        },
      },
      list: false,
      optional: false,
      type: 'object',
    });
  });

  test('createResolver', () => {
    const sut = Darch.createResolver;

    type Arg = Parameters<typeof sut>[0]['kind'];
    assert<IsExact<Arg, 'subscription' | 'query' | 'mutation' | undefined>>(
      true
    );

    expect(typeof sut).toBe('function');
    expect(sut.name).toBe('createResolver');
    expect(Darch.isPossibleArgsDef).toBe(
      require('../Resolver').isPossibleArgsDef
    );
  });

  test('createType', () => {
    const sut = Darch.createType;

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
    const sut = Darch.graphql;

    expect(typeof sut).toBe('function');
    expect(sut.name).toBe('graphql');

    expect(Darch.GraphQLString.toJSON()).toBe('String');
  });
});
