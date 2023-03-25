import setWith from 'lodash/setWith';

import { ObjectPath } from './typeUtils';

export function setByPath<
  T extends Record<string, any>,
  K extends ObjectPath<T> | ObjectPath<T>[]
>(
  obj: T,
  path: K,
  value: any,
  customizer?: (nsValue: any, key: string, nsObject: T) => any
) {
  return setWith(obj, path, value, customizer);
}
