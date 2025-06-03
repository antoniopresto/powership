import { isPlainObject } from 'lodash';

import { proxyRealValue } from './createProxy';
import { hashObject } from './hashObject';
import { tupleEnum } from './typings';

const constructorNameCache = new WeakMap<Function, string>();

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

  let _constructorName: string;
  function constructorName(): string {
    if (_constructorName) return _constructorName;

    const nativeConstructor = getNativeConstructorType(value);
    if (nativeConstructor) return (_constructorName = nativeConstructor);

    if (objectWithoutProto) {
      return (_constructorName = KNOWN_CONSTRUCTOR_NAMES['Object']);
    }

    if (typeof value === 'function') {
      return (_constructorName = KNOWN_CONSTRUCTOR_NAMES['Function']);
    }

    const constructor = value?.constructor;
    if (!constructor) {
      throw new Error(`Cannot get constructor of value ${typeof value}`);
    }

    if (constructorNameCache.has(constructor)) {
      return (_constructorName = constructorNameCache.get(constructor)!);
    }

    let name = constructor.name;

    if (!name || name === '') {
      const constructorString = constructor.toString();
      name = constructorString.match(/(?:function|class)\s+([^({ ]*)/)?.[1];
    }

    const finalName = name || 'Object';

    constructorNameCache.set(constructor, finalName);

    return (_constructorName = finalName);
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
      native: { get: native },
      constructorName: { get: constructorName },
      typeName: { get: typeName },
    }
  ) as ConstructorDescription;
}

export type TypeDescription = ReturnType<typeof describeType>;

export function describeType(value: any) {
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
