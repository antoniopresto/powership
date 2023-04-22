import { AnyFunction } from '../typings';

export type GettersInit<Obj, Getters extends { [K: string]: unknown }> = {
  origin?: Obj;

  onDefine?: (
    property: keyof Getters,
    descriptor: PropertyDescriptor
  ) => PropertyDescriptor | undefined;
  configurable?: boolean;
  enumerable?: boolean;
};

export function getters<Obj, Getters extends { [K: string]: () => unknown }>(
  gettersMap: Getters,
  init: GettersInit<Obj, Getters> = {}
): WithGetters<Obj, Getters> {
  const {
    onDefine,
    origin = Object.create(null),
    configurable,
    enumerable = true,
  } = init;

  Object.entries(gettersMap).forEach(([key, getter]) => {
    let resolved = false;
    let value;

    let descriptor: PropertyDescriptor = {
      configurable,
      enumerable,
      get() {
        if (resolved) return value;
        resolved = true;
        return (value = typeof getter === 'function' ? getter() : getter);
      },
    };

    if (typeof onDefine === 'function') {
      descriptor = onDefine(key, descriptor) || descriptor;
    }

    Object.defineProperty(origin, key, descriptor);
  });

  return origin as any;
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
