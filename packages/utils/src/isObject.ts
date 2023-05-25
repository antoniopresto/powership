import { AnyRecord } from './typings';

export function isObject(value: unknown): value is AnyRecord {
  return !!value && typeof value === 'object';
}

export function isPlainObject(value: unknown): value is AnyRecord {
  return isObject(value) && value.toString() === '[object Object]';
}
