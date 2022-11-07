import { L, S } from '@backland/utils';

// // ['a:', 'string', 'b:', 'int', c: {year: {literal: 1}}]
// type X = SplitTokens<'a: string; b: int; c: {year: {literal: 1}}'>;

export type SplitTokens<T extends string> =
  //
  L.Filter<
    _SplitTokens<
      //
      _SplitTokens<
        //
        _SplitTokens<
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

export type _SplitTokens<Strings extends string[], R extends string> =
  //
  Strings extends []
    ? []
    : Strings extends [infer Head, ...infer Tail]
    ? Head extends string
      ? Tail extends []
        ? Split<Head, R>
        : Tail extends string[]
        ? [...Split<Head, R>, ..._SplitTokens<Tail, R>]
        : never
      : never
    : never;

type Split<T extends string, S extends string> = S.Split<T, S>;
