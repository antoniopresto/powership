import { T, S } from '@backland/utils';
import { createType, resetTypesCache } from '@backland/schema';
import { assert, IsExact } from 'conditional-type-checks';

export const ESCAPED_DOT_CHARACTER = '_in_' as const;
export type ESCAPED_DOT_CHARACTER = typeof ESCAPED_DOT_CHARACTER;

export type EscapeDotNotation<K extends string> = S.Join<
  T.Reverse<S.Split<K, '.'>>,
  ESCAPED_DOT_CHARACTER
>;

type _GetByEsNotation<Obj, Paths> = Paths extends []
  ? Obj
  : Obj extends ReadonlyArray<infer L>
  ? _GetByEsNotation<L, Paths>[]
  : Paths extends [infer Head, ...infer Tail]
  ? Head extends keyof Obj
    ?
        | _GetByEsNotation<Exclude<Obj[Head], undefined>, Tail>
        | Extract<Obj[Head], undefined>
    : undefined
  : undefined;

export type GetByEsNotation<Object, EsNotation> = _GetByEsNotation<
  Object,
  T.Reverse<S.Split<Extract<EsNotation, string>, '_in_'>>
>;

export function escapeDotNotation<K extends string>(
  key: K
): EscapeDotNotation<K> {
  return key
    .split('.')
    .reverse()
    .join(ESCAPED_DOT_CHARACTER) as EscapeDotNotation<K>;
}

export function esPathsToMap(txt: string) {
  const path: (string | string[])[] = [];
  let ts = txt.split('.');

  while (ts.length) {
    let tts = ts.shift();
    if (!tts) continue;
    const es = tts.split('_in_');
    if (es.length === 1) {
      path.push(es[0]);
    } else {
      path.push(es.reverse());
    }
  }

  return path;
}

export function getByEsPaths<K extends string, O extends Record<string, any>>(
  object: O,
  key: K
): GetByEsNotation<O, K> {
  function get(object: unknown, path: string | (string | string[])[]) {
    if (Array.isArray(object)) {
      return object.map((el) => get(el, path)).flat();
    }

    if (!(object && typeof object === 'object')) return object;
    if (typeof path === 'string') return object[path];

    return path.reduce((acc, next) => {
      if (Array.isArray(next)) {
        return next.reduce((_acc, _next) => {
          return get(_acc, _next);
        }, acc);
      }
      return acc ? get(acc, next) : acc;
    }, object);
  }

  const path = esPathsToMap(key);
  return get(object, path);
}

describe('escapeDotNotation', () => {
  afterEach(resetTypesCache);

  test('works', async () => {
    const key = escapeDotNotation('names.value');

    const sut = createType('sut', {
      object: {
        items: {
          array: {
            of: {
              object: {
                [key]: 'string',
              },
            },
          },
        },
      },
    });

    expect(sut.print()).toEqual([
      'type sut {',
      '  items: [sut_items!]!',
      '}',
      '',
      'type sut_items {',
      '  value_in_names: String!',
      '}',
      '',
      'input sutInput {',
      '  items: [sut_itemsInput!]!',
      '}',
      '',
      'input sut_itemsInput {',
      '  value_in_names: String!',
      '}',
    ]);
  });

  test('a', () => {
    const txt = 'value_in_names_in_list_in_b_in_a' as const;
    const object = {
      a: {
        b: {
          list: [
            {
              names: {
                value: 1, //
              },
            },
            {
              names: {
                value: 'x', //
              },
            },
          ],
        },
      },
    } as const;

    const sut = getByEsPaths(object, txt);
    type Sut = typeof sut;
    assert<IsExact<Sut, (1 | 'x')[]>>(true);

    expect(sut).toEqual([1, 'x']);
  });

  test('b', () => {
    const txt = 'a.b.numbers_in_list_in_l1';

    const object = {
      a: {
        b: {
          l1: [
            {
              list: [
                {
                  numbers: {
                    value: 1, //
                  },
                },
                {
                  numbers: {
                    value: 2, //
                  },
                },
              ],
            },
          ],
        },
      },
    };

    const sut = getByEsPaths(object, txt);
    expect(sut).toEqual([{ value: 1 }, { value: 2 }]);
  });

  test('c', () => {
    const txt = 'a.b.numbers_in_list_in_l1.value';

    const object = {
      a: {
        b: {
          l1: [
            {
              list: [
                {
                  numbers: {
                    value: 1, //
                  },
                },
                {
                  numbers: {
                    value: 2, //
                  },
                },
              ],
            },
          ],
        },
      },
    };

    const sut = getByEsPaths(object, txt);
    expect(sut).toEqual([1, 2]);
  });

  test('d', () => {
    const object = {
      a: {
        b: {
          l1: [
            {
              list: [
                {
                  numbers: {
                    value: 1, //
                  },
                },
                {
                  numbers: {
                    value: 2, //
                  },
                },
              ],
            },
          ],
        },
      },
    };

    const sut = getByEsPaths(object, 'a.b.l1');
    expect(sut).toEqual(object.a.b.l1);
  });
});
