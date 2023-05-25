import { AnyFunction, AnyRecord } from '../typings';

export interface GettersInit<Getters> {
  onDefine?: (
    property: keyof Getters,
    descriptor: PropertyDescriptor
  ) => PropertyDescriptor | undefined;
  configurable?: boolean;
  enumerable?: boolean;
}

export function getters<Obj extends object, Getters extends AnyRecord>(
  object: Obj,
  gettersMap: Getters,
  options?: GettersInit<Getters>
): WithGetters<Obj, Getters>;

export function getters<Getters extends AnyRecord>(
  gettersMap: Getters
): WithGetters<{}, Getters>;

export function getters<Obj extends object, Getters extends AnyRecord>(
  ...args:
    | [gettersMap: Getters]
    | [object: Obj, gettersMap: Getters, options?: GettersInit<Getters>]
): any {
  const {
    options: { onDefine, configurable, enumerable = true },
    object,
    gettersMap,
  } = ((): {
    options: GettersInit<any>;
    object: object;
    gettersMap: AnyRecord;
  } => {
    if (args.length === 3 || args.length === 2) {
      return {
        object: args[0],
        gettersMap: args[1],
        options: args[2] || {},
      };
    }

    if (args.length === 1) {
      return {
        object: Object.create(null),
        gettersMap: args[0],
        options: {},
      };
    }

    throw new Error('Invalid arguments');
  })();

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

    Object.defineProperty(object, key, descriptor);
  });

  return object as any;
}

export type ReturnOrValue<T> = T extends AnyFunction ? ReturnType<T> : T;

export type WithGetters<T, Getters> = T extends unknown
  ? T & {} & ({
        [K in Exclude<keyof Getters, keyof T>]: ReturnOrValue<Getters[K]>;
      } & {})
  : never;
