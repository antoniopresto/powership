import _get from 'lodash/get';

import { GetFieldByDotNotation } from './typeUtils';

export function getByPath<T, K extends string>(
  obj: T,
  key: K
): GetFieldByDotNotation<T, K> {
  return _get(obj, key);
}
