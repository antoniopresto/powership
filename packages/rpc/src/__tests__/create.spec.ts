import { create } from '../create';

describe('create', () => {
  // afterEach();

  test('basic test', () => {
    const sut = create({});

    expect(sut).toEqual([]);
  });
});
