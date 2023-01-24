import { Merge } from './index';

export function merge<Values extends object[]>(
  ...values: Values
): MergeAll<Values> {
  // @ts-ignore
  return Object.assign(...values) as MergeAll<Values>;
}

export type MergeAll<L extends object[]> = L extends [infer Head, ...infer Tail]
  ? Tail extends object[]
    ? Merge<Head, MergeAll<Tail>>
    : {}
  : {};
