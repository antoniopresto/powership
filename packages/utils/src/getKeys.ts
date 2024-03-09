import { invariantType } from './invariant';
import { Entries } from './typings';

export function getKeys<T extends Record<string, any>>(
  obj: T,
): Extract<keyof T, string>[] {
  return Object.keys(obj) as any;
}

export function objectEntries<T extends Record<any, any>>(obj: T): Entries<T> {
  invariantType({ obj }, 'object');
  return Object.entries(obj) as any;
}

export function hasProperty<P extends string>(
  obj: any,
  prop: P,
): obj is { [K in P]: unknown } {
  return obj && typeof obj === 'object' && obj.hasOwnProperty(prop);
}
