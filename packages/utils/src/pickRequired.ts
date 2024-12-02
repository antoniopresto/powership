import { AnyFunction, Paths, PathType, T } from './typings';
import { pick } from './pick';
import { captureStackTrace } from './stackTrace';
import { nonNullValues } from './invariant';
import { getTypeName } from './getTypeName';

export function pickRequired<T extends object, R extends object>(
  input: T | undefined | null,
  picker: (input: T) => Partial<R>,
  customMessage?: string
): R;

export function pickRequired<T extends object, Keys extends Paths<T>>(
  input: T | undefined | null,
  picker: ReadonlyArray<Keys>,
  customMessage?: string
): {
  -readonly [K in Keys as T.List.Last<T.String.Split<K, '.'>>]-?: PathType<
    T,
    K
  > extends unknown
    ? Exclude<Exclude<PathType<T, K>, null>, undefined>
    : never;
} & {};

export function pickRequired(
  input: any,
  picker: AnyFunction | ReadonlyArray<string>,
  customMessage?: string
) {
  let result = Object.create(null);
  try {
    if (!input || typeof input !== 'object') {
      throw new Error(`Cannot pick properties from ${getTypeName(input)}`);
    }
    if (typeof picker === 'function') {
      result = picker(input);
    } else {
      picker.forEach((key) => {
        result[key.split('.').pop()!] = pick(input, key);
      });
    }
  } catch (e) {
    throw customMessage
      ? captureStackTrace(new Error(customMessage), pickRequired)
      : captureStackTrace(e, pickRequired);
  }
  return nonNullValues(result, customMessage);
}
