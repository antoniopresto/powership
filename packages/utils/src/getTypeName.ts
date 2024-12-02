import { isPlainObject } from 'lodash';

import { proxyRealValue } from './createProxy';
import { hashObject } from './hashObject';
import { tupleEnum } from './typings';

export function getTypeName(input: any): string {
  const simple = getNativeConstructorType(input);
  if (simple !== undefined) return simple;
  return describeConstructor(input).constructorName;
}

export const KNOWN_CONSTRUCTOR_NAMES = tupleEnum(
  'undefined',
  'null',
  'String',
  'Boolean',
  'BigInt',
  'Symbol',
  'Array',
  'NaN',
  'Infinity',
  'Number',
  'Object',
  'Function'
);

export type NATIVE_TYPE_NAME = typeof KNOWN_CONSTRUCTOR_NAMES.enum;

export function getNativeConstructorType(input): NATIVE_TYPE_NAME | undefined {
  if (input === undefined) return KNOWN_CONSTRUCTOR_NAMES['undefined'];
  if (input === null) return KNOWN_CONSTRUCTOR_NAMES['null'];
  if (typeof input === 'string') return KNOWN_CONSTRUCTOR_NAMES['String'];
  if (typeof input === 'boolean') return KNOWN_CONSTRUCTOR_NAMES['Boolean'];
  if (typeof input === 'bigint') return KNOWN_CONSTRUCTOR_NAMES['BigInt'];
  if (typeof input === 'symbol') return KNOWN_CONSTRUCTOR_NAMES['Symbol'];
  if (Array.isArray(input)) return KNOWN_CONSTRUCTOR_NAMES['Array'];

  if (typeof input === 'number') {
    if (isNaN(input)) return KNOWN_CONSTRUCTOR_NAMES['NaN'];
    if (input === Infinity) return KNOWN_CONSTRUCTOR_NAMES['Infinity'];
    return KNOWN_CONSTRUCTOR_NAMES['Number'];
  }

  return undefined;
}

export type NATIVE_TYPE_OF = Lowercase<NATIVE_TYPE_NAME>;

/**
 * Returns a string representation of the constructor of the given value if a simple native type.
 * @param input {any} The value to get the constructor name of.
 */
export function getNativeTypeOf(input: any): NATIVE_TYPE_OF | undefined {
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
  const objectWithoutProto = isObjectWithoutPrototype(value);

  let _constructorBody: string;
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

        if (objectWithoutProto) {
          return KNOWN_CONSTRUCTOR_NAMES['Object'];
        }

        if (typeof value === 'function') {
          return KNOWN_CONSTRUCTOR_NAMES['Function'];
        }

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
    return (_native =
      _native ?? (objectWithoutProto || !!getNativeTypeOf(value)));
  }

  function typeName(): string {
    const tn = getNativeConstructorType(value);
    if (tn === undefined) return constructorName();
    return tn;
  }

  return Object.defineProperties(
    {},
    {
      isObjectWithoutPrototype: { value: objectWithoutProto },

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
    return (_string = _string ?? hashObject(value));
  }

  let _hash: string;
  function hash() {
    return (_hash = _hash ?? hashObject(value));
  }

  return {
    typeOf,
    typename,
    isLocalProxy,
    toString,
    nativeTypeOf,
    native: !!nativeTypeOf,
    hash,
    plusString: value + '',
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

export type ConstructorDescription = {
  isObjectWithoutPrototype: boolean;
  native: boolean;
  constructorName: NATIVE_TYPE_NAME | string;
};
