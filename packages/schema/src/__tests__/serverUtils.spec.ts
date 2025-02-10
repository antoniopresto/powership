import { assert, IsExact } from 'conditional-type-checks';

import { Infer } from '../Infer';
import { create, createType, resetTypesCache } from '../types';

describe('Powership aliases', () => {
  afterEach(resetTypesCache);

  test('type creators', async () => {
    expect(create.enum(['m']).definition).toEqual({
      def: ['m'],

      type: 'enum',
    });

    expect(
      create.object({
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
    const sut = createType;

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
