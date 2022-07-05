/**
 * @jest-environment jsdom
 */

import { Darch } from '../Darch';
import { assert, IsExact } from 'conditional-type-checks';
import { Infer } from '../Infer';

describe('Darch.browserUtils', () => {
  afterEach(Darch.DarchObject.reset);

  test('createResolver', () => {
    expect(() => Darch.createResolver).toThrow(
      'Can\'t load "createResolver". It can be server-only.'
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
    expect(() => Darch.GraphQLString).toThrow(
      'Can\'t load "GraphQLString". It can be server-only.'
    );
  });
});
