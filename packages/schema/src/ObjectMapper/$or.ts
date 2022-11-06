import { $oparam, $oparam_list, t } from './t';

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
