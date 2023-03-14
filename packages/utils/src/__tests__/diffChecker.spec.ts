import { diffChecker } from '../diffChecker';

describe('diffChecker', () => {
  // afterEach();

  const mock = () => ({
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      state: 'NY',
    },
  });

  test('basic test', () => {
    const projections = ['name', 'address.city'] as const;

    const sut = diffChecker(mock(), projections);

    expect(
      sut({
        name: 'John',
        age: 30,
        address: {
          city: 'New York2',
          state: 'NY',
        },
      })
    ).toEqual([
      {
        kind: 'update',
        newValue: 'New York2',
        oldValue: 'New York',
        path: 'address.city',
        paths: ['address', 'address.city'],
      },
    ]);
  });

  test('check *', () => {
    const sut = diffChecker(mock(), '*');

    expect(
      sut({
        name: 'Johnx',
        address: {
          city: 'New York2',
          state: 'NY',
          UF: 'US',
        },
      })
    ).toEqual([
      {
        kind: 'update',
        newValue: 'Johnx',
        oldValue: 'John',
        path: 'name',
        paths: ['name'],
      },
      {
        kind: 'remove',
        oldValue: 30,
        newValue: undefined,
        path: 'age',
        paths: ['age'],
      },
      {
        kind: 'update',
        newValue: 'New York2',
        oldValue: 'New York',
        path: 'address.city',
        paths: ['address', 'address.city'],
      },
      {
        kind: 'add',
        newValue: 'US',
        oldValue: undefined,
        path: 'address.UF',
        paths: ['address', 'address.UF'],
      },
    ]);
  });

  test('check unset', () => {
    const sut = diffChecker(mock(), '*');

    expect(sut(undefined)).toEqual([
      {
        kind: 'remove',
        newValue: undefined,
        oldValue: {
          address: {
            city: 'New York',
            state: 'NY',
          },
          age: 30,
          name: 'John',
        },
        path: '',
        paths: [],
      },
    ]);
  });
});
