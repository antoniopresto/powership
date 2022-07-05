import { assert, IsExact } from 'conditional-type-checks';

import { Darch } from '../Darch';
import { Infer } from '../Infer';

describe('Darch.serverUtils', () => {
  afterEach(Darch.DarchObject.reset);

  test('createResolver', () => {
    const sut = Darch.createResolver;

    type Arg = Parameters<typeof sut>[0]['kind'];
    assert<IsExact<Arg, 'subscription' | 'query' | 'mutation' | undefined>>(
      true
    );

    expect(typeof sut).toBe('function');
    expect(sut.name).toBe('createResolver');
    expect(Darch.isPossibleArgsDef).toBe(
      require('../GraphType/createResolver').isPossibleArgsDef
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

    expect(() => obj.parse({})).toThrow(
      '➤ field "name": expected type string, found undefined.'
    );
  });

  test('graphql', () => {
    const sut = Darch.graphql;

    expect(typeof sut).toBe('function');
    expect(sut.name).toBe('graphql');

    expect(Darch.GraphQLString.toJSON()).toBe('String');
  });
});
