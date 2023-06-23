export type PathType<Type, Property extends string> = Type extends unknown
  ? _PathType<Type, Property> extends infer R
    ? [R] extends [never]
      ? unknown
      : R
    : never
  : never;

export type _PathType<Type, Property extends string> = string extends Property
  ? never
  : Property extends keyof Type
  ? Type[Property]
  : Property extends `${infer Head}.$`
  ? PathType<PathType<Type, Head>, '$'>
  : Property extends '$'
  ? Type extends ReadonlyArray<infer T>
    ? T[]
    : Type extends object
    ? {
        [K in Extract<keyof Type, string>]: Type[K];
      }[Extract<keyof Type, string>][]
    : undefined
  : Property extends ''
  ? Type
  : Property extends `${number}`
  ? Type extends ReadonlyArray<infer ArrayType>
    ? ArrayType
    : undefined
  : Property extends `${infer Key}.${infer Rest}`
  ? Key extends `${number}`
    ? Type extends ReadonlyArray<infer ArrayType>
      ? PathType<ArrayType, Rest>
      : undefined
    : Key extends keyof Type
    ? Type[Key] extends Map<string, infer MapType>
      ? MapType
      : PathType<Type[Key], Rest>
    : undefined
  : undefined;

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export type Paths<T, D extends number = 10> =
  | ([D] extends [never]
      ? never
      : // T extends ReadonlyArray<infer El>
      // ? Join<number | '$', Paths<El, Prev[D]>>
      T extends object
      ? {
          [K in keyof T]-?: K extends string | number
            ?
                | `${K}`
                | (Paths<T[K], Prev[D]> extends infer R ? Join<K, R> : never)
            : never;
        }[keyof T]
      : never)
  // | '$'
  | '';

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];
