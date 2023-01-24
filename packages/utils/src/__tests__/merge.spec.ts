import { merge } from '../merge';

describe('merge', () => {
  // afterEach();

  test('works', () => {
    const a = { a: 1 } as const;
    const b = { b: 2 } as const;
    const c = { c: 3 } as const;

    const sut = merge(a, b, c);

    const exp: typeof sut = {
      a: 1,
      b: 2,
      c: 3,
    };

    expect(sut).toEqual(exp);
  });
});
