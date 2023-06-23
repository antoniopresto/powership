import { assert, IsExact } from 'conditional-type-checks';

import { CircularDeps } from '../CircularDeps';
import { Infer } from '../Infer';

describe('Powership aliases', () => {
  afterEach(CircularDeps.PowershipObject.reset);

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

    expect(() => obj.parse({})).toThrow('➤ field "name": RequiredField');
  });

  test('graphql', () => {
    const sut = CircularDeps.graphql;

    expect(typeof sut).toBe('function');
    expect(sut.name).toBe('graphql');

    expect(CircularDeps.GraphQLString.toJSON()).toBe('String');
  });
});
