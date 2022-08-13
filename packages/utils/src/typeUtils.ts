// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
import { RuntimeError } from './RuntimeError';

export const tuple = <T extends string[]>(...args: T) => args;

export type Serializable = null | undefined | Stringifiable | SerializableList;

export interface Stringifiable {
  toString(): string;
}

export interface SerializableList extends Array<Serializable> {}

export const tupleNum = <T extends number[]>(...args: T) => args;

export const tupleEnum = <T extends string[]>(
  ...values: T
): { readonly [K in T[number]]: K } => {
  return values.reduce((p, n) => {
    return {
      ...p,
      [n]: n,
    };
  }, Object.create(null));
};

export type IsAny<T> = 0 extends 1 & T ? true : false;

export type IsNever<T> = [T] extends [never] ? true : false;

export type IsNullable<T> = Extract<T, null | undefined> extends never
  ? false
  : true;

export type IsOptional<T> = Extract<T, undefined> extends never ? false : true;

export type IsUnknown<T> = IsNever<T> extends false
  ? T extends unknown
    ? unknown extends T
      ? IsAny<T> extends false
        ? true
        : false
      : false
    : false
  : false;

export type OnlyKnown<T> = IsAny<T> extends true
  ? never
  : IsNever<T> extends true
  ? never
  : IsUnknown<T> extends true
  ? never
  : T;

export type MaybePromise<T> = T | Promise<T>;

export type PromiseType<P> = P extends Promise<infer T> ? T : never;

export type MaybeArray<T> = T | T[];

export type ArrayType<T> = T extends Array<infer N> ? N : T;

export type AnyRecord = Record<string, any>;

export type IfExtends<Param, Type, IfTrue, IfFalse> = Param extends Type
  ? IfTrue
  : IfFalse;

export type ObjectUnion<A, B> = {
  [K in keyof (A & B)]: (A & B)[K];
};

export type Entries<T> = {
  [K in Extract<keyof T, string>]-?: [K, T[K]];
}[Extract<keyof T, string>][];

export type AnyFunction = (...args: any[]) => any;

export type Writeable<T> = {
  -readonly [P in keyof T]: T[P];
};

export type ForceString<T> = T extends string ? T : never;
export type NotString<T> = string extends T ? never : T;

export type NullableToPartial<T> = UnionToIntersection<
  | {
      [K in keyof T as IsOptional<T[K]> extends true ? never : K]-?: T[K];
    }
  | {
      [K in keyof T as IsOptional<T[K]> extends true ? K : never]?: T[K];
    }
>;

export type Join<L, R> = {
  [K in keyof ({
    [K in keyof L]: L[K];
  } & {
    [K in keyof R]: R[K];
  })]: ({
    [K in keyof L]: L[K];
  } & {
    [K in keyof R]: R[K];
  })[K];
};

export type Merge<L, R> = Omit<L, keyof R> extends infer P ? Join<P, R> : never;

export type ExtendListDeep<Dest, Extends> = Extends extends []
  ? Dest
  : Extends extends [infer Item, ...infer Rest]
  ? ExtendListDeep<Merge<Dest, Item>, Rest>
  : never;

export type ExtendList<Dest extends unknown[], Extends extends unknown[]> = [
  ...Dest,
  ...Extends
];

// https://fettblog.eu/typescript-union-to-intersection/
export type UnionToIntersection<T> = (
  T extends any ? (x: T) => any : never
) extends (x: infer R) => any
  ? {
      [K in keyof R]: R[K];
    }
  : never;

export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

export type ArrayKeys<T> = T extends any[] | ReadonlyArray<any>
  ? T extends [any, ...infer Tail]
    ? ArrayKeys<Tail> | Tail['length']
    : never
  : never;

export type DeepArrayKeys<T extends any[]> = {
  [K in keyof T]: `${Extract<K, string>}.${ObjectDotNotations<T[K]>}`;
}[number];

export type ObjectDotNotations<
  Obj,
  Level extends string[] = [],
  Limit = 3
> = Level['length'] extends Limit
  ? never
  : Obj extends { [K: string]: any }
  ? {
      [K in keyof Obj]: K extends string
        ? Obj[K] extends { [K: string]: any }
          ? Obj[K] extends any[]
            ? K | `${K}.${ArrayKeys<Obj[K]>}` | `${K}.${DeepArrayKeys<Obj[K]>}`
            : K | `${K}.${ObjectDotNotations<Obj[K], [...Level, K]>}`
          : K
        : never; // not string (never))
    }[keyof Obj]
  : never;

export type TypeLike<T, Level extends ReadonlyArray<number> = [0]> = T extends {
  [K: string]: any;
}
  ? {
      [K in keyof T]: T[K] extends { [K: string]: any }
        ? Level['length'] extends 2
          ? any
          : T[K] extends AnyFunction
          ? AnyFunction
          : TypeLike<T[K], [...Level, 0]>
        : any;
    }
  : any;

export const A_Z = tuple(
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '_'
);

export type A_Z = typeof A_Z[number];
export type Name = `${A_Z}${string}`;

export * from './IterationMap';

export * from 'ts-toolbelt';

export class TypeAssertionError extends RuntimeError {
  constructor(a: any, b: any, message = 'Invalid value received') {
    super(message, { a, b });
    console.error('This error is only used in typescript assertions.');
  }
}
