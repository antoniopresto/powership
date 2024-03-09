import { setByPath } from '../setByPath';

describe('setByPath', () => {
  // afterEach();

  test('handle empty path', () => {
    expect(() => setByPath({}, '', 1)).toThrow(
      'setByPath expected value to be a plain object when path is empty, but found Number.'
    );

    const obj = { a: 1 };
    setByPath(obj, '', { b: 2 });
    expect(obj).toEqual({ a: 1, b: 2 });
  });
});
