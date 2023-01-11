import { AnyFunction } from './typeUtils';

export function lazyGetters<Obj, Getters extends { [K: string]: unknown }>(
  object: Obj,
  getters: Getters
): WithGetters<Obj, Getters> {
  //
  Object.entries(getters).forEach(([key, getter]) => {
    let resolved = false;
    let value;

    Object.defineProperty(object, key, {
      get() {
        if (resolved) return value;
        resolved = true;
        value = typeof getter === 'function' ? getter() : getter;
      },
    });
  });

  return object as any;
}

export type ReturnOrValue<T> = T extends AnyFunction ? ReturnType<T> : T;

export type WithGetters<
  T,
  Getters extends { [K: string]: unknown }
> = T extends unknown
  ? T & {} & ({
        [K in Exclude<keyof Getters, keyof T>]: ReturnOrValue<Getters[K]>;
      } & {})
  : never;
