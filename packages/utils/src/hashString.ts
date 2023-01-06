import { fnv1a } from './fvn1a';

export function hashString(string: string) {
  return Number(fnv1a(string));
}

export const stringHash = hashString;
