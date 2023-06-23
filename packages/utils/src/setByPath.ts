import setWith from 'lodash/setWith';

export function setByPath<T extends Record<string, any>>(
  obj: T,
  path: string,
  value: any,
  customizer?: (nsValue: any, key: string, nsObject: T) => any
) {
  return setWith(obj, path, value, customizer);
}
