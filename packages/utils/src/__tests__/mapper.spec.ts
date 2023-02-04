import { mapper } from '../mapper';
import { assert, IsExact } from 'conditional-type-checks';

describe('mapper', () => {
  // afterEach();

  test('works', () => {
    const sut = mapper([
      { a: 1, xxxx: 2 },
      { b: 2, xxxx: [123] },
      { a: 2, c: 3, xxxx: [123] }, //
    ]);

    const res = sut
      .map((el) => {
        return el;
      })
      .combine();

    type T = typeof res;

    assert<
      IsExact<
        T,
        { a?: number; b?: number; c?: number; xxxx: number[] | number }
      >
    >(true);

    expect(res).toEqual({ a: 2, b: 2, c: 3, xxxx: [123] });
  });

  test('access partial value', () => {
    const sut = mapper([
      { a: 1 },
      { b: 2 },
      { a: 2, c: 3 }, //
    ]);

    const partials: any[] = [];

    sut
      .map((el, index, partial) => {
        partials.push({ ...partial, index });
        return el;
      })
      .combine();

    expect(partials).toEqual([
      { index: 0 },
      { '0': { a: 1 }, index: 1 },
      { '0': { a: 1 }, '1': { b: 2 }, index: 2 },
    ]);
  });
});
