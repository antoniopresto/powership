import { setWith } from 'lodash';

import { getTypeName } from './getTypeName';
import { isPlainObject } from './isObject';

export function setByPath<T extends Record<string, any>>(
  obj: T,
  path: string,
  value: any,
  customizer?: (nsValue: any, key: string, nsObject: T) => any
) {
  if (path === '') {
    if (!isPlainObject(value)) {
      throw new Error(
        `setByPath expected value to be a plain object when path is empty, but found ${getTypeName(
          value
        )}.`
      );
    }

    Object.entries(value).forEach(([k, v]) => {
      setWith(obj, k, v, customizer);
    });
    return obj;
  }

  return setWith(obj, path, value, customizer);
}
