import { filterEmpty, FilterEmptyOptions } from '../filterEmpty';

describe('filterEmpty', () => {
  test.each([
    ['null', [1, null, 2, 3], [1, 2, 3]],
    ['undefined', [1, undefined, 2, 3], [1, 2, 3]],
    ['false', [1, false, 2, 3], [1, 2, 3]],
    ['string', [1, '', 2, 3], [1, 2, 3]],
    ['array', [1, [], 2, 3], [1, 2, 3]],
    ['object', [1, {}, 2, 3], [1, 2, 3]],
    ['number', [0, 1, -2, 3], [1, -2, 3]],
    ['set', [1, new Set(), 2, 3], [1, 2, 3]],
    ['map', [1, new Map(), 2, 3], [1, 2, 3]],
  ])(
    'should filter %s',
    (type: any, input: Array<any>, expected: Array<any>) => {
      const options: FilterEmptyOptions = { types: [type] };
      expect(filterEmpty(input, options)).toEqual(expected);
    },
  );

  test('should not filter any element when types is empty', () => {
    const input = [
      0,
      new Map(),
      5,
      '',
      -5,
      new Set(),
      null,
      [],
      {},
      false,
      undefined,
    ];
    const options: FilterEmptyOptions = { types: [] };
    expect(filterEmpty(input, options)).toEqual(input);
  });
});
