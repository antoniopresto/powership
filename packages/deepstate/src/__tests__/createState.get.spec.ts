import { DeepState } from '../DeepState';
import { assert, IsExact } from 'conditional-type-checks';

describe('get', () => {
  // afterEach();

  function shape() {
    return {
      name: 'string',
      age: 'int?',
      address: {
        object: {
          street: 'string',
        },
        optional: true,
      },
    } as const;
  }

  test('validate input on init();', async () => {
    expect(() => {
      DeepState.create('t1', shape(), () => ({} as any));
    }).toThrow('t1: ➤ field "name": RequiredField.');
  });

  test('get validate result', async () => {
    const sut = DeepState('t1', shape(), () => ({ name: 'antonio' }));

    const name = sut.get('name');
    const age = sut.get('age');

    assert<IsExact<typeof name, string>>(true);
    assert<IsExact<typeof age, number | undefined>>(true);

    expect(name).toEqual('antonio');
    expect(age).toEqual(undefined);
  });

  test('get default result', async () => {
    const sut = DeepState.create('t1', shape(), () => ({
      name: 'antonio',
      address: { street: 'Old Avenue' },
    }));

    sut.set({ address: { street: 'Blue Avenue' } });
    const street = sut.get('address.street');
    expect(street).toEqual('Blue Avenue');
  });
});
