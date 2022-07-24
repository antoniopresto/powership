import { deepEqual } from 'fast-equals';

export function areEqual(a: any, b: any) {
  return deepEqual(a, b);
}
