import type * as Toolbet from './ts-toolbet';

export * from './ts-toolbet';
export * from './Compute';
export * from './Path';

export type { Toolbet as T };

export const tuple = <T extends string[]>(...args: T) => args;

export type Serializable = null | undefined | Stringifiable | SerializableList;

export interface Stringifiable {
  toString(): string;
}

export interface SerializableList extends Array<Serializable> {}

export const tupleNum = <T extends number[]>(...args: T) => args;

export const tupleEnum = <T extends string[]>(
  ...values: T
): {
  //
  readonly [K in T[number]]: K;
} & (T[number] extends 'list' //
  ? {
      //
      __list: T[number][];
    }
  : {
      //
      list: T[number][];
    }) &
  (T[number] extends 'enum'
    ? {
        //
        __enum: T[number];
      }
    : {
        //
        enum: T[number];
      }) => {
  const en = values.reduce((p, n) => {
    return {
      ...p,
      [n]: n,
    };
  }, Object.create(null));

  Object.defineProperty(en, en.list !== undefined ? '__list' : 'list', {
    enumerable: false,
    value: values,
  });

  Object.defineProperty(en, en.enum !== undefined ? '__enum' : 'enum', {
    enumerable: false,
    get() {
      return values[0];
    },
  });

  return en;
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
export type UnknownRecord = { [K: string]: unknown };

export type AnyArray<T = any> = ReadonlyArray<T> | T[];
export type AnyList<T = any> = AnyArray<T>;

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
  [K in keyof T]: `${Extract<K, string>}.${ObjectPath<T[K]>}`;
}[number];

/**
 * @alias to GetFieldByDotNotation
 */
export type GetFieldByDotPath<Obj, DotNotation> = GetFieldByDotNotation<
  Obj,
  DotNotation
>;

export type ObjectPath<
  Obj,
  Limit extends number = 10,
  Level extends number[] = []
> = Level['length'] extends Limit
  ? never
  : Obj extends { [K: string]: any }
  ? {
      [K in keyof Obj]: K extends string | number
        ? Obj[K] extends { [K: string]: any }
          ? Obj[K] extends ReadonlyArray<any>
            ? /*When array: */
              | K
                | `${K}.${number}`
                | `${K}.${number}.${ObjectPath<Obj[K][number]>}`
            : //
              /*When object: */
              K | `${K}.${ObjectPath<Obj[K], Limit, [...Level, 1]>}`
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

export type IsKnown<T> = IsAny<T> extends true
  ? 0
  : IsNever<T> extends true
  ? 0
  : IsUnknown<T> extends true
  ? 0
  : 1;

export type BinKnown<T, True, False> = {
  0: False;
  1: True;
}[IsKnown<T>];

export type BinAny<T, True, False> = {
  0: False;
  1: True;
}[IsAny<T> extends true ? 0 : 1];

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
  'z'
);

export type A_Z = (typeof A_Z)[number];
export type Name = `${A_Z}${string}`;

export * from '../IterationMap';

export type PartialRequired<T, Optionals extends keyof T> = {
  [P in keyof T as P extends Optionals ? never : P]-?: T[P];
} & ({ [K in Optionals]?: T[K] } & {});

export const noop = Object.freeze(Object.create(null)) as {};

/**
 * @alias to GetFieldByDotNotation
 */
export type Pick<Obj, DotNotation> = GetFieldByDotNotation<Obj, DotNotation>;

// get an object field from a given dot notation
// eg: GetFieldByDotNotation<{a: { b: 1 }}, 'a.b'> === 1
export type GetFieldByDotNotation<Obj, DotNotation> =
  // When array
  DotNotation extends `${number}`
    ? number extends keyof Obj
      ? Obj[number]
      : undefined
    : //

    // When other objects (not array)
    DotNotation extends keyof Obj
    ? Obj[DotNotation]
    : DotNotation extends `${infer Left}.${infer Right}`
    ? Left extends keyof Obj
      ?
          | GetFieldByDotNotation<Exclude<Obj[Left], undefined>, Right>
          | Extract<Obj[Left], undefined>
      : undefined
    : undefined;
