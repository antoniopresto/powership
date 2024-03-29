import { assert, IsExact } from 'conditional-type-checks';

import * as Internal from '../internal';
import { Infer } from '../Infer';

describe('Powership aliases', () => {
  afterEach(Internal.PowershipObject.reset);

  test('type creators', async () => {
    expect(Internal.create.enum(['m']).definition).toEqual({
      def: ['m'],

      type: 'enum',
    });

    expect(
      Internal.create.object({
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
    const sut = Internal.createType;

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
});
