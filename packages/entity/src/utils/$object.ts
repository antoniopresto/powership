import type { $cast } from './index';

export type $object<T = any> = $cast<T, Record<string, any>>;

export function $object<T>(value: T): $object<T> {
  return ((): any => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return value;
    }
    return Object.create(null);
  })();
}
