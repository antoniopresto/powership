import { fnv1a } from './fvn1a';

export function hashString(string: string) {
  return Number(fnv1a(string));
}

export function hashName(value: string): string {
  return `_${hashString(value)}${hashString(
    value.slice(-value.length / 2)
  )}`.slice(0, 13);
}

export const stringHash = hashString;
