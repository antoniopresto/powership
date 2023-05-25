import { getters } from './getters';

describe('defineGetters', () => {
  // afterEach();

  test('basic test', () => {
    const sut = getters({
      name: () => 'a',
    });

    expect(sut).toEqual({ name: 'a' });
  });

  test('with origin', () => {
    const sut = { name: 'a', age: 2 };

    getters(sut, {
      name: () => 'Maggie',
    });

    expect(sut).toEqual({ name: 'Maggie', age: 2 });
  });

  test('with options', () => {
    const sut = { name: 'a', age: 2 };

    getters(
      sut,
      {
        name: () => 'Maggie',
      },
      { enumerable: false }
    );

    expect(sut).toEqual({ age: 2 });
    expect(sut.name).toEqual('Maggie');
  });
});
