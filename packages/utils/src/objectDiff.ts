import { diff } from 'jest-diff';

export function objectDiff(a: any, b: any) {
  return diff(a, b);
}
