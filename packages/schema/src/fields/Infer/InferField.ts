import { GetFieldByDotNotation, OnlyKnown } from '@swind/utils';

import { FieldTypeName } from '../_fieldDefinitions';

import { $inferableKey } from './DescribeField';
import { InferFinalField } from './InferFinalField';
import { GraphTypeLikeFieldDefinition, InferGraphType } from './InferGraphType';
import {
  InferObjectType,
  ObjectTypeLikeFieldDefinition,
} from './InferObjectType';
import { InferString } from './InferString';

export type InferField<
  Input,
  RootInferredType = unknown,
  FieldName extends string = ''
> =
  //
  OnlyKnown<Input> extends infer Known
    ? Known extends string
      ? InferString<Known, RootInferredType, FieldName>
      : Known extends object
      ? $inferableKey extends keyof Known
        ? Known[$inferableKey]
        : _WithInferOptional<
            Known,
            _WithInferList<
              Known,
              _InferField<Known, RootInferredType, FieldName>
            >
          >
      : never
    : never;

export type _InferField<Input extends object, Root, FieldName extends string> =
  //
  _FieldKV<Input> extends [infer K, infer V]
    ? //
      K extends keyof Input
      ? //
        K extends GraphTypeKID
        ? InferGraphType<Input>
        : //
        K extends ObjectTypeKID
        ? InferObjectType<Input>
        : //
        K extends FieldTypeName
        ? InferFinalField<K, V, Root, FieldName>
        : //
        K extends 'type'
        ? // {type: ...}
          //

          // {type: FieldTypeName,  .... }
          V extends FieldTypeName
          ? InferFinalField<V, _GetKey<Input, 'def'>, Root, FieldName>
          : //

          // {type: GraphType,  .... }
          Input[K] extends GraphTypeLikeFieldDefinition
          ? InferGraphType<Input[K]>
          : //

          // {type: ObjectType,  .... }
          Input[K] extends ObjectTypeLikeFieldDefinition
          ? InferObjectType<Input[K]>
          : never
        : //
          never
      : never
    : never;

export type _WithInferOptional<FieldDefinition extends object, InferredValue> =
  //
  [true] extends [_GetKey<FieldDefinition, 'optional'>]
    ? InferredValue | undefined
    : InferredValue;

export type _WithInferList<FieldDefinition extends object, InferredValue> =
  //
  [true] extends [_GetKey<FieldDefinition, 'list'>]
    ? InferredValue[]
    : InferredValue;

export type _FieldKV<Input extends object> =
  //
  keyof Input extends infer K
    ? K extends unknown
      ? K extends keyof Input
        ? K extends FieldInputLikeRequiredKey // removes 'optional', 'list', etc
          ? [K, Input[K]]
          : never
        : never
      : never
    : never;

export type ObjectTypeKID = '__isSolarwindObject';
export type GraphTypeKID = '__isGraphType';

export type _GetKey<T, Key extends string> = GetFieldByDotNotation<T, Key>;

export type FieldInputLikeRequiredKey =
  | ObjectTypeKID
  | GraphTypeKID
  | FieldTypeName
  | 'type';
