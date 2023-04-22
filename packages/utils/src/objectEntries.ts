export type ObjectEntries<T> =
  //
  {
    [K in Extract<keyof T, string>]: [K, T[K]];
  }[Extract<keyof T, string>][];

export function entries<O extends object>(init: O): ObjectEntries<O> {
  return Object.entries(init) as any;
}

export function keys<O extends object>(init: O): Extract<keyof O, string>[] {
  return Object.keys(init) as any;
}

export function values<O extends object>(init: O): O[keyof O][] {
  return Object.values(init) as any;
}
