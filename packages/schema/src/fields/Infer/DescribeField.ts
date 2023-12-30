import type { Compute, Merge, OnlyKnown } from '@powership/utils';

import type { ParseStringDefinition } from '../../parseStringDefinition';
import type {
  CommonFieldDefinitionProps,
  FieldTypeName,
} from '../_fieldDefinitions';
import type { FinalFieldDefinition } from '../_parseFields';

import type {
  _FieldKV,
  _GetKey,
  GraphTypeKID,
  ObjectTypeKID,
} from './InferField';
import type { GraphTypeLikeFieldDefinition } from './InferGraphType';
import type { ObjectTypeLikeFieldDefinition } from './InferObjectType';

export const $sealedKey = '___sealed';
export type $sealedKey = typeof $sealedKey;
export const $sealed = Symbol($sealedKey);
export type $sealed = typeof $sealed;

export const $inferableKey = '___inferable';
export type $inferableKey = typeof $inferableKey;

export type DescribeField<Input> = [$sealedKey] extends [keyof Input]
  ? Input
  : SealedField<_DescribeField<Input>> extends infer R
  ? { [K in keyof R]: R[K] } & {}
  : never;

export type _DescribeField<Input> =
  //
  OnlyKnown<Input> extends infer Known
    ? Known extends string
      ? ParseStringDefinition<Known>
      : Known extends object
      ? _DescribeObject<Known>
      : never
    : never;

export type SealedField<D extends object> = 'type' extends keyof D
  ? Seal<Merge<CommonFieldDefinitionProps, D>>
  : D;

export type $sealedDef = Compute<
  // used as a field in schemas to march definition as sealed
  {
    literal: $sealed;
    optional: false;
    list: false;
  } & CommonFieldDefinitionProps
>;

export type Seal<T extends object> = Merge<
  T,
  { $sealed: $sealedDef }
> extends infer R
  ? { [K in keyof R]: R[K] } & {}
  : never;

export type DescribeWithoutSeal<T> = Omit<
  DescribeField<T>,
  $inferableKey | $sealedKey
> extends infer R
  ? { [K in keyof R]: R[K] } & {}
  : never;

export type DescribeAndOverrideField<T, Override> =
  DescribeWithoutSeal<T> extends infer R
    ? R extends FinalFieldDefinition
      ? SealedField<
          Merge<
            {
              [K in keyof R as K extends keyof Override ? never : K]: R[K];
            },
            Override
          >
        >
      : never
    : never;

export type DescribeObjectDefinition<Input> =
  //
  $sealedKey extends keyof Input
    ? Input
    : [Input] extends [object]
    ? Seal<{ -readonly [K in keyof Input]: DescribeField<Input[K]> }>
    : Seal<{}>;

export type _DescribeObject<Input extends object> =
  //
  _FieldKV<Input> extends [infer K, infer V]
    ? //
      K extends keyof Input
      ? //
        K extends GraphTypeKID
        ? 'definition' extends keyof Input
          ? DescribeField<Input['definition']>
          : never
        : //
        K extends ObjectTypeKID
        ? 'definition' extends keyof Input
          ? {
              type: 'object';
              def: DescribeObjectDefinition<Input['definition']>;
              list: _GetKey<Input, 'list'>;
              optional: _GetKey<Input, 'optional'>;
            }
          : never
        : //
        K extends FieldTypeName
        ? {
            type: K;
            def: V;
            list: _GetKey<Input, 'list'>;
            optional: _GetKey<Input, 'optional'>;
          }
        : //
        K extends 'type'
        ? // {type: ...}
          //

          // {type: FieldTypeName,  .... }
          V extends FieldTypeName
          ? {
              type: V;
              def: _GetKey<Input, 'def'>;
              list: _GetKey<Input, 'list'>;
              optional: _GetKey<Input, 'optional'>;
            }
          : //

          // {type: GraphType,  .... }
          Input[K] extends GraphTypeLikeFieldDefinition
          ? Merge<
              DescribeField<Input[K]['definition']>,
              _OmitUndefined<{
                list: _GetKey<Input, 'list'>;
                optional: _GetKey<Input, 'optional'>;
              }>
            >
          : //

          // {type: ObjectType,  .... }
          Input[K] extends ObjectTypeLikeFieldDefinition
          ? {
              type: 'object';
              def: DescribeObjectDefinition<Input[K]['definition']>;
              list: _GetKey<Input, 'list'>;
              optional: _GetKey<Input, 'optional'>;
            }
          : never
        : //
          never
      : never
    : never;

export type _OmitUndefined<T> = {
  [K in keyof T as T[K] extends undefined ? never : K]: T[K];
} & {};
