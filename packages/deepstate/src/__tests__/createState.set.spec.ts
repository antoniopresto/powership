import { DeepState } from '../DeepState';

describe('set', () => {
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

  test('set value by path', async () => {
    const sut = DeepState('t1', shape(), () => ({
      name: 'antonio',
      address: { street: 'Old Avenue' },
    }));

    sut.set('address.street', 'Blue Avenue');
    const street = sut.get('address.street');
    expect(street).toEqual('Blue Avenue');
  });

  test('validate setting value', async () => {
    const sut = DeepState('t1', shape(), () => ({
      name: 'antonio',
      address: { street: 'Old Avenue' },
    }));

    expect(() => sut.set('address.street', [] as any)).toThrow(
      `DS_UNEXPECTED_ERROR`
    );
  });

  test('set from object', async () => {
    const sut = new DeepState('t1', shape(), () => ({
      name: 'antonio',
      address: { street: 'Old Avenue' },
    }));

    sut.set({ address: { street: 'Blue Avenue' } });
    const street = sut.get('address.street');
    expect(street).toEqual('Blue Avenue');

    expect(() => sut.set({ address: { street: [] as any } })).toThrow(
      ' ➤ field "street": Expected value to be of type "string"'
    );
  });

  test('set using callback', async () => {
    const sut = DeepState('t1', shape(), () => ({
      name: 'antonio',
      address: { street: 'Old Avenue' },
    }));

    sut.set((current) => {
      current.address = { street: 'Blue Avenue' };
    });

    const street = sut.get('address.street');
    expect(street).toEqual('Blue Avenue');

    expect(() =>
      sut.set((current) => {
        current.address = { street: [] as any };
      })
    ).toThrow(' ➤ field "street": Expected value to be of type "string"');

    expect(() =>
      sut.set(() => {
        return { name: [] } as any;
      })
    ).toThrow('➤ field "name": Expected value to be of type "string"');

    expect(sut.map.toJSON()).toEqual({
      address: {
        street: 'Blue Avenue',
      },
    });

    // @ts-ignore (__defaults is not public)
    sut.__defaults.name = 'Antonio From Defaults';

    expect(sut.state).toEqual({
      name: 'Antonio From Defaults',
      address: {
        street: 'Blue Avenue',
      },
    });
  });
});
