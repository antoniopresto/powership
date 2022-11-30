import { M } from './typeUtils';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
export function deepFreeze<T extends Record<any, any>>(object: T) {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self

  for (const name of propNames) {
    const value = object[name];

    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }

  return Object.freeze(object) as DeepFreeze<T>;
}

export type DeepFreeze<O> = {
  +readonly [K in keyof O]: O[K] extends M.BuiltIn ? O[K] : DeepFreeze<O[K]>;
};

export type DeepWritable<T> = {
  -readonly [K in keyof T]: T[K] extends object
    ? { [L in keyof DeepWritable<T[K]>]: DeepWritable<T[K]>[L] }
    : T[K];
};

export const freeze = deepFreeze;
