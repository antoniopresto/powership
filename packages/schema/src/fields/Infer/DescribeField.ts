import { CommonDefSafe, FieldTypeName } from '../_fieldDefinitions';

import { Compute, Merge, OnlyKnown } from '@backland/utils';

import { ParseStringDefinition } from '../../parseStringDefinition';
import { _FieldKV, _GetKey, GraphTypeKID, ObjectTypeKID } from './InferField';
import { GraphTypeLikeFieldDefinition } from './InferGraphType';
import { ObjectTypeLikeFieldDefinition } from './InferObjectType';

export const $sealedKey = '$sealed';
export type $sealedKey = typeof $sealedKey;
export const $sealed = Symbol($sealedKey);
export type $sealed = typeof $sealed;

export type DescribeField<Input> = [$sealedKey] extends [keyof Input]
  ? Input
  : SealedField<
      Merge<
        {
          list: _GetKey<Input, 'list'>;
          optional: _GetKey<Input, 'optional'>;
        },
        _DescribeField<Input>
      >
    > extends infer R
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
  ? Seal<Merge<D, CommonDefSafe>>
  : D;

export type $sealedDef = Compute<
  { literal: $sealed; optional: false; list: false } & CommonDefSafe
>;

export type Seal<T extends object> = Merge<
  T,
  { $sealed: $sealedDef }
> extends infer R
  ? { [K in keyof R]: R[K] } & {}
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
            }
          : never
        : //
        K extends FieldTypeName
        ? {
            type: K;
            def: V;
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
              list: [true] extends [_GetKey<Input, 'list'>] ? true : false;
              optional: [true] extends [_GetKey<Input, 'optional'>]
                ? true
                : false;
            }
          : //

          // {type: GraphType,  .... }
          Input[K] extends GraphTypeLikeFieldDefinition
          ? DescribeField<Input[K]['definition']>
          : //

          // {type: ObjectType,  .... }
          Input[K] extends ObjectTypeLikeFieldDefinition
          ? {
              type: 'object';
              def: DescribeObjectDefinition<Input[K]['definition']>;
            }
          : never
        : //
          never
      : never
    : never;
