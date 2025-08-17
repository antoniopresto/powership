import { AnyRecord } from './typings';

export function isPlainObject(value: unknown): value is AnyRecord {
  if (typeof value !== 'object' || value === null) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

export { isPlainObject as isObject };
