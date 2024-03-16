import type { $cast } from './index';

export type $string<T = any> = $cast<T, string>;

export function $string<T>(value: T): $string<T> {
  return ((): any => {
    if (typeof value === 'string') {
      return value;
    }
    return '';
  })();
}
