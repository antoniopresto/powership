import { MaybeArrayMaybe } from './typings';

export function ensureArray<T>(input: T | T[]): T[] {
  return Array.isArray(input) ? input : [input];
}

export function ensureNonNullArray<T>(input: MaybeArrayMaybe<T>): T[] {
  if (!input) return [];
  input = ensureArray(input).filter(Boolean);
  return input.flatMap((el) => ensureNonNullArray(el));
}
