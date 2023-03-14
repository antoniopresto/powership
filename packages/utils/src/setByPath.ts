import setWith from 'lodash/setWith';

import { ObjectDotNotations } from './typeUtils';

export function setByPath<
  T extends Record<string, any>,
  K extends ObjectDotNotations<T> | ObjectDotNotations<T>[]
>(
  obj: T,
  path: K,
  value: any,
  customizer?: (nsValue: any, key: string, nsObject: T) => any
) {
  return setWith(obj, path, value, customizer);
}
