import { A, B, C, F, I, L, M, N, O, S, T, U } from 'ts-toolbelt';
import type * as $Any from 'ts-toolbelt/out/Any/_api';
import type * as $Boolean from 'ts-toolbelt/out/Boolean/_api';
import type * as $Function from 'ts-toolbelt/out/Function/_api';
import type * as $Iteration from 'ts-toolbelt/out/Iteration/_api';
import type { List } from 'ts-toolbelt/out/List/List';
import type * as $List from 'ts-toolbelt/out/List/_api';
import { BuiltIn } from 'ts-toolbelt/out/Misc/BuiltIn';
import type * as $Misc from 'ts-toolbelt/out/Misc/_api';
import type * as $Number from 'ts-toolbelt/out/Number/_api';
import type { Overwrite } from 'ts-toolbelt/out/Object/Overwrite';
import { Depth } from 'ts-toolbelt/out/Object/_Internal';
import type * as $Object from 'ts-toolbelt/out/Object/_api';
import type * as $String from 'ts-toolbelt/out/String/_api';
import type * as $Union from 'ts-toolbelt/out/Union/_api';

export * from 'ts-toolbelt';
export type As<T, L> = A.Cast<T, L>;

export type Merge<
  O,
  O1,
  depth extends Depth = 'flat',
  ignore extends object = BuiltIn,
  fill extends any = undefined
> = O extends object
  ? O1 extends object
    ? O.Merge<Omit<O, keyof O1>, O1, depth, ignore, fill>
    : never
  : never;

export type Cast<T, L> = A.Cast<T, L>;
export type Naked<L extends List> = Overwrite<Required<L>, L>;

export type {
  T,
  L,
  B,
  A,
  U,
  C,
  N,
  F,
  M,
  I,
  O,
  S,
  $Boolean,
  $String,
  $Number,
  $Union,
  $Object,
  $Any,
  $Function,
  $Misc,
  $Iteration,
  $List,
};
