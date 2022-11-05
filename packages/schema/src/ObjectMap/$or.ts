import { $oparam, $oparam_list, t } from './t';
import { $pick } from './$pick';
import { $var } from './$var';

export type $or_def = $oparam_list;

export type $or<T extends $or_def, P1, P2> =
  //
  T extends unknown
    ? T extends ReadonlyArray<infer R>
      ? R extends unknown
        ? R extends $oparam
          ? t<R, P1, P2>
          : never
        : never
      : never
    : never;

type X = $or<['$$.name', '$'], { name: 1 }, { name: 2 }>;
