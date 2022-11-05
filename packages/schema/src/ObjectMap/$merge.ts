import { $oparam, t } from './t';
import { Merge, L } from '@backland/utils';

export type $merge_def = [$oparam, $oparam] | Readonly<[$oparam, $oparam]>;

export type $merge<T extends $merge_def, P1, P2> =
  //
  T extends unknown
    ? T extends $merge_def
      ? Merge<t<T[0], P1, P2>, t<T[1], P1, P2>>
      : never
    : never;
