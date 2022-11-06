import { NullableToPartial } from '@backland/utils';

import { $oparam, t } from './t';

export type $shape_def = { [K: string]: $oparam };

export type $shape<T extends $shape_def, P1, P2> = T extends unknown
  ? P1 extends unknown
    ? P2 extends unknown
      ? NullableToPartial<
          { [K in keyof _shape<T, P1, P2>]: _shape<T, P1, P2>[K] } & {}
        >
      : never
    : never
  : never;

type _shape<T, P1, P2> = T extends $shape_def
  ? {
      [K in keyof T]: t<T[K], P1, P2>;
    } & {}
  : never;
