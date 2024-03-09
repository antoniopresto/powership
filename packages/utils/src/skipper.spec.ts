import { skipper } from './skipper';

describe('skipper', () => {
  // afterEach();

  test('skip', async () => {
    let sut = skipper((skip) => {
      skip(2);
      return 1;
    });

    expect(sut).toEqual(2);
  });

  test('error', async () => {
    expect(() =>
      skipper(() => {
        throw new Error('Ohno');
      }),
    ).toThrowError('Ohno');
  });
});
