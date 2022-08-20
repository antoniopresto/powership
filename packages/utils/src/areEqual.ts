import { deepEqual } from 'fast-equals';
import { TypeAssertionError } from './typeUtils';

export function areEqual(a: any, b: any) {
  return deepEqual(a, b);
}

export type Assertable =
  | string
  | boolean
  | number
  | AssertableList
  | Readonly<AssertableList>
  | { readonly [K: string]: unknown };

interface AssertableList extends Array<Assertable> {}

export function assertEqual<ToBe extends Readonly<Assertable>>(
  value: unknown,
  toBe: ToBe,
  message = 'UNEXPECTED_VALUE',
  details = {}
): asserts value is ToBe extends Assertable ? ToBe : never {
  if (!areEqual(value, toBe)) {
    throw new TypeAssertionError(message, details);
  }
}
