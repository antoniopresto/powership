import { captureStackTrace } from '@powership/utils';

import type { $cast } from './index';

export type $number<T = any> = $cast<T, number>;

export function $number<T>(value: T, defaults?: number): $number<T> {
  return ((): any => {
    if (typeof value === 'number') {
      return value;
    }
    const s = `${defaults}`;

    return s.match(/^\d+$/)
      ? +s
      : (() => {
          const err = new Error(`Expected value to be an number, found ${s}`);
          captureStackTrace(err, $number);
          throw err;
        })();
  })();
}
