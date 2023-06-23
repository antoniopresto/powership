import { GetFieldByDotNotation } from '@powership/utils';

import { $var } from './$var';

export type $pick_def = $var;

export type $pick<op extends $pick_def, P1, P2> =
  //
  op extends unknown
    ? [op] extends [string]
      ? _Pick<op, P1, P2>
      : never
    : never;

type _Pick<T extends string, P1, P2> =
  //
  P1 extends unknown
    ? P2 extends unknown
      ? T extends unknown
        ? T extends $var
          ? __Pick<T, P1, P2>
          : never
        : never
      : never
    : never;

type __Pick<T extends $var, P1, P2> =
  //
  T extends '$'
    ? P1
    : T extends '$$'
    ? P2
    : T extends `$.${infer Path}`
    ? GetFieldByDotNotation<P1, Path>
    : T extends `$$.${infer Path}`
    ? GetFieldByDotNotation<P2, Path>
    : T extends `$elem(${infer Path})`
    ? _Pick<Path, P1, P2> extends infer R
      ? R extends [...infer El]
        ? El
        : R[keyof R]
      : never
    : never;
