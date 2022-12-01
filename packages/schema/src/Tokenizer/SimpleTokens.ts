import { Merge } from '@backland/utils';

import { Infer } from '../Infer';
import { DescribeField } from '../fields/Infer';
import { FieldAsString } from '../fields/_parseFields';

import { SplitTokens } from './SplitTokens';

export function $<T extends _SimpleTokens[]>(...field: T): Parse<T> {
  return field as any;
}

const tt = $('name: string', 'age: [int]?');

export type Funny = Infer<typeof tt>;

export type _SimpleTokens = `${string}${':' | ': ' | ' '}${FieldAsString}${
  | ';'
  | ''}`;

export type Parse<T extends string[]> = _Parse<SplitTokens<T>>;

export type _Parse<T extends string[]> =
  //
  T extends []
    ? {}
    : T extends [infer K, infer V, ...infer Rest]
    ? K extends `${infer KV}:`
      ? V extends string
        ? Rest extends []
          ? ParsePair<KV, V>
          : Rest extends string[]
          ? Merge<ParsePair<KV, V>, _Parse<Rest>> extends infer R
            ? { [K in keyof R]: R[K] } & {}
            : never
          : {}
        : 1
      : 2
    : 3;

type ParsePair<K, V> = K extends unknown
  ? K extends string
    ? V extends unknown
      ? V extends FieldAsString
        ? {
            [L in K]: DescribeField<V>;
          }
        : never
      : never
    : never
  : never;
