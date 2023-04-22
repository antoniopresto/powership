import { getters } from './getters';

describe('defineGetters', () => {
  // afterEach();

  test('basic test', () => {
    const sut = getters({
      name: () => 'a',
    });

    expect(sut).toEqual({ name: 'a' });
  });
});
