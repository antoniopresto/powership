import type { O } from '@swind/utils';

export type OHas<Obj, K> = Obj extends object
  ? K extends string
    ? O.Has<Obj, K>
    : 0
  : 0;

export type OPick<Obj, K> = Obj extends unknown
  ? Obj extends object
    ? K extends unknown
      ? K extends string
        ? K extends keyof Obj
          ? Obj[K]
          : never
        : never
      : never
    : never
  : never;

export type OWritable<T> = T extends object
  ? O.Writable<T, Extract<keyof T, string>, 'deep'>
  : T;
