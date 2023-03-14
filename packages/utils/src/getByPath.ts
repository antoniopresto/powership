import { pick } from './pick';
import { GetFieldByDotNotation } from './typeUtils';

/**
 * Get a value by path
 * @deprecated use pick instead
 * @param obj
 * @param key
 */
export function getByPath<T, K extends string>(
  obj: T,
  key: K
): GetFieldByDotNotation<T, K> {
  return pick(obj, key);
}
