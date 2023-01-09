import isPlainObject from 'lodash/isPlainObject';

import { BJSON } from './BJSON';
import { proxyRealValue } from './createProxy';
import { simpleObjectHash } from './simpleObjectHash';

export function getTypeName(input: any): string {
  const simple = getNativeConstructorType(input);
  if (simple !== undefined) return simple;
  return describeConstructor(input).constructorName;
}

export function getNativeConstructorType(input) {
  if (input === undefined) return 'Undefined';
  if (input === null) return 'Null';
  if (typeof input === 'string') return 'String';
  if (typeof input === 'boolean') return 'Boolean';
  if (typeof input === 'bigint') return 'BigInt';
  if (typeof input === 'symbol') return 'Symbol';
  if (Array.isArray(input)) return 'Array';

  if (typeof input === 'number') {
    if (isNaN(input)) return 'NaN';
    if (input === Infinity) return 'Infinity';
    return 'Number';
  }

  return undefined;
}

/**
 * Returns a string representation of the constructor of the given value if a simple native type.
 * @param input {any} The value to get the constructor name of.
 */
export function getNativeTypeOf(input) {
  if (input === undefined) return 'undefined';
  if (input === null) return 'object';
  if (typeof input === 'string') return 'string';
  if (typeof input === 'boolean') return 'boolean';
  if (typeof input === 'bigint') return 'bigint';
  if (typeof input === 'symbol') return 'symbol';
  if (typeof input === 'number') return 'number';
  if (isObjectWithoutPrototype(input)) return 'object';
  if (isPlainObject(input)) return 'object';

  return undefined;
}

export function isObjectWithoutPrototype(value): value is Record<string, any> {
  return !!value && typeof value === 'object' && !value?.constructor;
}

export function describeConstructor(value): ConstructorDescription {
  const iowp = isObjectWithoutPrototype(value);

  let _constructorBody;
  function constructorBody(): string {
    return (_constructorBody =
      _constructorBody ?? value?.constructor?.toString?.());
  }

  let _constructorName: string;
  function constructorName(): string {
    return (_constructorName =
      _constructorName ??
      (() => {
        const nativeConstructor = getNativeConstructorType(value);
        if (nativeConstructor) return nativeConstructor;

        if (iowp) return 'Object';

        if (typeof value === 'function') return 'Function';

        const named = constructorBody()
          ?.match(/(function|class) ?([^({)]*)/)?.[2]
          ?.split(' ')[0];

        if (!named) {
          throw new Error(`Cannot get prototype of value ${typeof value}`);
        }

        return named;
      })());
  }

  let _native: boolean;
  function native(): boolean {
    return (_native = _native ?? (iowp || !!getNativeTypeOf(value)));
  }

  function typeName(): string {
    const tn = getNativeConstructorType(value);
    if (tn === undefined) return constructorName();
    return tn;
  }

  return Object.defineProperties(
    {},
    {
      isObjectWithoutPrototype: { value: iowp },

      native: {
        get() {
          return native();
        },
      },

      constructorName: {
        get() {
          const cn = constructorName();
          return cn;
        },
      },

      typeName: {
        get() {
          return typeName();
        },
      },
    }
  ) as ConstructorDescription;
}

export type TypeDescription = ReturnType<typeof describeType>;

export function describeType(value) {
  const localProxyValue = proxyRealValue(value);
  const isLocalProxy = localProxyValue !== value;

  const typename = getTypeName(value);
  const nativeTypeOf = getNativeTypeOf(value);
  const typeOf = typeof value;

  let _string: string;
  function toString() {
    return (_string = _string ?? BJSON.stringify(value));
  }

  let _hash: string;
  function hash() {
    return (_hash = _hash ?? simpleObjectHash(value));
  }

  return {
    typeOf,
    typename,
    isLocalProxy,
    toString,
    nativeTypeOf,
    native: !!nativeTypeOf,
    hash,
  };
}

export type NativeComplexType = Record<string, unknown> | Function;

export type NativeSimpleType =
  | string
  | number
  | null
  | undefined
  | bigint
  | symbol
  | boolean;

export type Hashable = NativeComplexType | NativeSimpleType;

declare global {
  interface Array<T> {
    includes(searchElement: any, fromIndex?: number): boolean;

    filter(
      filter: BooleanConstructor
    ): (T extends undefined ? never : T extends null ? never : T)[];
  }
}

export type ConstructorDescription = {
  isObjectWithoutPrototype: boolean;
  native: boolean;
  constructorName: string;
};
