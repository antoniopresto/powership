import { AnyRecord } from './typings';

export function isObject(value: unknown): value is AnyRecord {
  return !!value && typeof value === 'object';
}
