import _merge from 'lodash/merge';

import { Merge } from './index';

export function merge<Values extends object[]>(
  ...values: Values
): MergeAll<Values> {
  return values.reduce(
    (acc, next) => _merge(acc, next),
    {}
  ) as MergeAll<Values>;
}

export type MergeAll<L extends object[]> = L extends [infer Head, ...infer Tail]
  ? Tail extends object[]
    ? Merge<Head, MergeAll<Tail>>
    : {}
  : {};
