import { hashName } from '../hashString';

describe('hashName', () => {
  // afterEach();

  test('works', () => {
    const sut = hashName('1234');

    expect(sut).toEqual('_425748966123');
  });
});
