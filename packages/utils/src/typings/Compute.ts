import type { I } from 'ts-toolbelt';
import type { If } from 'ts-toolbelt/out/Any/If';
import type { Key } from 'ts-toolbelt/out/Any/Key';
import type { Next } from 'ts-toolbelt/out/Iteration/Next';
import type { BuiltIn } from 'ts-toolbelt/out/Misc/BuiltIn';
import type { Has } from 'ts-toolbelt/out/Union/Has';

import { IsKnown } from './index';

export type NextIndex<Current> = Current extends number
  ? I.Pos<Next<I.IterationOf<Current>>>
  : never;

export type PrevIndex<Current> = Current extends number
  ? I.Pos<I.Prev<I.IterationOf<Current>>>
  : never;

type ComputeDeep<
  A extends any,
  Max extends number,
  Current extends number,
  Seen,
> =
  //
  Current extends Max
    ? A
    : A extends BuiltIn
      ? A
      : If<
          Has<Seen, A>,
          A,
          A extends Array<any>
            ? A extends Array<Record<Key, any>>
              ? Array<
                  {
                    [K in keyof A[number]]: ComputeDeep<
                      A[number][K],
                      Max,
                      NextIndex<Current>,
                      A | Seen
                    >;
                  } & unknown
                >
              : A
            : A extends ReadonlyArray<any>
              ? A extends ReadonlyArray<Record<Key, any>>
                ? ReadonlyArray<
                    {
                      [K in keyof A[number]]: ComputeDeep<
                        A[number][K],
                        Max,
                        NextIndex<Current>,
                        A | Seen
                      >;
                    } & unknown
                  >
                : A
              : {
                  [K in keyof A]: ComputeDeep<
                    A[K],
                    Max,
                    NextIndex<Current>,
                    A | Seen
                  >;
                } & unknown
        >;

export type Compute<T, Max extends number = 1> =
  IsKnown<T> extends 1 ? ComputeDeep<T, Max, 0, never> : T;
