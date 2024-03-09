import { L, S } from '@powership/utils';

// // ['a:', 'string', 'b:', 'int', c: {year: {literal: 1}}]
// type X = SplitTokens<'a: string; b: int; c: {year: {literal: 1}}'>;

export type SplitTokens<Strings extends string[]> =
  //
  Strings extends []
    ? []
    : Strings extends [infer Head, ...infer Tail]
      ? Head extends string
        ? Tail extends []
          ? _SplitTokens<Head>
          : Tail extends string[]
            ? [..._SplitTokens<Head>, ...SplitTokens<Tail>]
            : never
        : never
      : never;

export type _SplitTokens<T extends string> =
  //
  L.Filter<
    __SplitTokens<
      //
      __SplitTokens<
        //
        __SplitTokens<
          //
          [T],
          '\n'
        >,
        ';'
      >,
      ' '
    >,
    ''
  >;

export type __SplitTokens<Strings extends string[], R extends string> =
  //
  Strings extends []
    ? []
    : Strings extends [infer Head, ...infer Tail]
      ? Head extends string
        ? Tail extends []
          ? Split<Head, R>
          : Tail extends string[]
            ? [...Split<Head, R>, ...__SplitTokens<Tail, R>]
            : never
        : never
      : never;

type Split<T extends string, S extends string> = S.Split<T, S>;
