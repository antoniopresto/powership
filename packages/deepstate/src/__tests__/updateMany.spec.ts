import { DeepState } from '../DeepState';

describe('updateMany', () => {
  // afterEach();

  function shape() {
    return {
      name: 'string',
      age: 'int?',
      address: {
        object: {
          street: 'string',
          number: 'int?',
        },
        optional: true,
      },
    } as const;
  }

  test('basic test', async () => {
    const sut = DeepState('t1', shape(), () => ({
      name: 'antonio',
      address: { street: 'Old Avenue' },
    }));

    const res = sut.updateMany({
      updates: [['name', 'Antonio']],
    });

    expect(res.state).toEqual({
      name: 'Antonio',
      address: { street: 'Old Avenue' },
    });
  });

  test('deep property update', async () => {
    const sut = DeepState('t1', shape(), () => ({
      name: 'antonio',
      address: { street: 'Old Avenue' },
    }));

    const res = sut.updateMany({
      updates: [['address.street', 'New Avenue']],
    });

    expect(res.state).toEqual({
      name: 'antonio',
      address: { street: 'New Avenue' },
    });
  });

  test('some updates', async () => {
    const sut = DeepState('t1', shape(), () => ({
      name: 'antonio',
      address: { street: 'Old Avenue' },
    }));

    const res = sut.updateMany({
      updates: [
        ['address.street', 'New Avenue'], //
        ['address.number', 2],
        ['name', 'Antonio'],
        ['name', 'Maggie'],
        ['address.number', 3],
      ],
    });

    expect(res.state).toEqual({
      name: 'Maggie',
      address: { street: 'New Avenue', number: 3 },
    });
  });

  test('set from subscription using many updates', async () => {
    const sut = DeepState('t1', shape(), () => ({
      name: 'antonio',
      address: { street: 'Old Avenue' },
    }));

    sut.subscribe('address', (_, { affected, set, differences }) => {
      const street = affected('street');

      differences.forEach((diff) => {
        if (diff.path === 'street') {
          diff.newValue;
        }
      });

      if (street?.newValue) {
        set('address.street', `${street.newValue}!!`);
      }
    });

    sut.updateMany({
      updates: [
        ['address.street', 'New Avenue'], //
        ['address.number', 2],
        ['name', 'Antonio'],
        ['name', 'Maggie'],
        ['address.number', 3],
      ],
    });

    sut.updateMany({
      updates: [
        ['address.street', 'Blue Avenue'], //
      ],
    });

    expect(sut.state).toEqual({
      name: 'Maggie',
      address: { street: 'Blue Avenue!!', number: 3 },
    });
  });
});
