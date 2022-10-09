import _set from 'lodash/set';

import { ObjectDotNotations } from './typeUtils';

export function setByPath<
  T extends Record<string, any>,
  K extends ObjectDotNotations<T>
>(
  obj: T,
  key: K,
  value: any /*FIXME need to handle array indexes in ObjectDotNotations*/
) {
  return _set(obj, key, value);
}
