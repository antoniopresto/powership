import type { IsAny, IsNever, IsUnknown } from '@powership/utils';

/**
 * @internal
 */
export type $isAny<T> = IsAny<T>;
export type $isNever<T> = IsNever<T>;
export type $isUnknown<T> = IsUnknown<T>;

export type $isKnown<T> = $isAny<T> extends true
  ? 0
  : $isNever<T> extends true
  ? 0
  : $isUnknown<T> extends true
  ? 0
  : 1;

export type $cast<Value, Target> = [$isKnown<Value>] extends [1]
  ? Value extends Target
    ? Value
    : Target
  : never;

export {};
