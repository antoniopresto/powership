import { Cast, NullableToPartial } from '@swind/utils';

import { InferField } from './InferField';

export type InferCircularObjectType<RootInferredType, SelfReferences> = [
  keyof SelfReferences
] extends [never]
  ? RootInferredType
  : Omit<RootInferredType, keyof SelfReferences> extends infer Basic
  ? {
      [K in keyof SelfReferences]: InferField<
        SelfReferences[K],
        {},
        Cast<K, string>
      >;
    } & Basic extends infer Partial
    ? {
        [K in keyof SelfReferences]: __InferOptionalOrList<
          RelaxCircularReference<
            Partial,
            keyof SelfReferences,
            RootInferredType
          >,
          Partial,
          K
        >;
      }
    : never
  : never;
//:  ? {
//     [K in keyof InferredWithMockCircularField]: __InferOptionalOrList<
//       InferredWithMockCircularField,
//       InferredWithMockCircularField,
//       K
//     >;
//     // K extends keyof SelfReferences
//     //     ?
//     //
//     //   RelaxCircularReference<
//     //         RootInferredType,
//     //         K,
//     //         InferredWithMockCircularField,
//     //         Depth
//     //       > extends infer Relaxed
//     //       ? __InferOptionalOrList<Relaxed, InferredWithMockCircularField, K>
//     //       : never
//     //     : InferredWithMockCircularField[K];
//   }
// never;

export type RelaxCircularReference<
  RootInferredType,
  CircularFields extends Key,
  InferredWithMockCircularField
> = {
  [K in keyof RootInferredType as K extends CircularFields
    ? never
    : K]: RootInferredType[K];
} & {
  [Sub in CircularFields]: __InferOptionalOrList<
    { [far_from_the_shallow_now: string]: any },
    InferredWithMockCircularField,
    Sub
  >;
} extends infer R
  ? NullableToPartial<R>
  : never;

export declare type Key = string | number | symbol;

export type __InferOptionalOrList<Value, Origin, K> = K extends keyof Origin
  ? (
      Exclude<Origin[K], undefined> extends ArrayLike<any> ? Value[] : Value
    ) extends infer AsArray
    ? Extract<Origin[K], undefined> extends never
      ? AsArray
      : AsArray | undefined
    : never
  : any;
