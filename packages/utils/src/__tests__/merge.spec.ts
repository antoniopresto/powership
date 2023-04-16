import { merge } from '../merge';

describe('merge', () => {
  test('works', () => {
    const a = { a: 1 } as const;
    const b = { b: 2, d: { x: 2 } } as const;
    const c = { c: 3, d: { a: 1 } } as const;

    const sut = merge(a, b, c);

    const exp = {
      a: 1,
      b: 2,
      c: 3,
      d: { a: 1, x: 2 },
    };

    expect(sut).toEqual(exp);
  });
});
