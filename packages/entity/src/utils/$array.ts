import type { $cast, $isKnown } from './index';

export type __$array<Value = any> = Value extends ReadonlyArray<infer T>
  ? T[]
  : Value extends Array<infer T>
  ? T[]
  : never;

export type _$array<Value = any> = [$isKnown<Value>] extends [1]
  ? __$array<Value>
  : never;

export type $array<Value = any> = Value extends unknown
  ? $cast<_$array<Value>, any[]>
  : never;

export function $array<T>(value: T): $array<T> {
  return ((): any => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return value;
    }
    return Object.create(null);
  })();
}
