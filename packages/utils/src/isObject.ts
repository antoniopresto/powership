import { AnyRecord } from './typeUtils';

export function isObject(value: unknown): value is AnyRecord {
  return !!value && typeof value === 'object';
}
