export type ___ = 1;
// import { S, L } from '@powership/utils';
// import { SplitTokens } from "./SplitTokens";
//
// export type Tokenizer<T extends string> = T extends unknown
//   ? T extends string
//     ? _Tokenizer<T>
//     : never
//   : never;
//
// type TokenString = string;
//
//
// type _Token<T> = T extends unknown
//   ? T extends string
//     ? {
//         identifier: _KIdentifier<T>;
//         value: _KValue<T>;
//       }
//     : never
//   : never;
//
// type _KIdentifier<T> = T extends unknown
//   ? T extends `${infer Value}:${Sep}${string}${Sep}`
//     ? Value
//     : never
//   : never;
//
// type _KValue<T> = T extends unknown
//   ? T extends `${string}:${Sep}${infer Value}${Sep}`
//     ? S.Split<Value, Sep>[0]
//     : never
//   : never;
//
// type _FirstPart<T extends string> = T extends `` ? '' : never;
//
// type Keyword = ':' | '{' | '}' | '[' | ']' | ';';
// type Sep = ' ' | '\n' | ';';
//
//
// type TXT_EXAMPLE = SplitTokens<`
// name: string;
// age: number;
// `>;
