import { GetFieldByDotNotation, OnlyKnown } from '@backland/utils';

import { FieldTypeName } from '../_fieldDefinitions';

import { $inferableKey } from './DescribeField';
import { InferFinalField } from './InferFinalField';
import { GraphTypeLikeFieldDefinition, InferGraphType } from './InferGraphType';
import {
  InferObjectType,
  ObjectTypeLikeFieldDefinition,
} from './InferObjectType';
import { InferString } from './InferString';

export type InferField<Input> =
  //
  OnlyKnown<Input> extends infer Known
    ? Known extends string
      ? InferString<Known>
      : Known extends object
      ? $inferableKey extends keyof Known
        ? Known[$inferableKey]
        : _WithInferOptional<Known, _WithInferList<Known, _InferField<Known>>>
      : never
    : never;

export type _InferField<Input extends object> =
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
        ? InferFinalField<K, V>
        : //
        K extends 'type'
        ? // {type: ...}
          //

          // {type: FieldTypeName,  .... }
          V extends FieldTypeName
          ? InferFinalField<V, _GetKey<Input, 'def'>>
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

export type ObjectTypeKID = '__isBacklandObject';
export type GraphTypeKID = '__isGraphType';

export type _GetKey<T, Key extends string> = GetFieldByDotNotation<T, Key>;

export type FieldInputLikeRequiredKey =
  | ObjectTypeKID
  | GraphTypeKID
  | FieldTypeName
  | 'type';

// type S = [
//   InferField<'string'>,
//   InferField<'string?'>,
//   InferField<'[string]'>,
//   InferField<'[string]?'>
// ];
//
// type F = [
//   InferField<{ type: 'string' }>,
//   InferField<{ type: 'string'; optional: true }>,
//   InferField<{ type: 'string'; list: true }>,
//   InferField<{ type: 'string'; optional: true; list: true }>
// ];
//
// type FF = [
//   InferField<{ string: {} }>,
//   InferField<{ string: {}; optional: true }>,
//   InferField<{ string: {}; list: true }>,
//   InferField<{ string: {}; optional: true; list: true }>
// ];
//
// assert<
//   IsExact<F, [string, string | undefined, string[], string[] | undefined]>
// >(true);
//
// assert<IsExact<F, S>>(true);
// assert<IsExact<F, FF>>(true);
//
// type UF = [
//   InferField<{ type: 'union'; def: ['string', 'boolean'] }>,
//   InferField<{ type: 'union'; def: ['string', 'boolean']; optional: true }>,
//   InferField<{ type: 'union'; def: ['string', 'boolean']; list: true }>,
//   InferField<{
//     type: 'union';
//     def: ['string', 'boolean'];
//     list: true;
//     optional: true;
//   }>
// ];
//
// type UFF = [
//   InferField<{ union: ['string', 'boolean'] }>,
//   InferField<{ union: ['string', 'boolean']; optional: true }>,
//   InferField<{ union: ['string', 'boolean']; list: true }>,
//   InferField<{
//     union: ['string', 'boolean'];
//     list: true;
//     optional: true;
//   }>
// ];
//
// assert<
//   IsExact<
//     UF,
//     [
//       string | boolean,
//       string | undefined | boolean,
//       (string | boolean)[],
//       (string | boolean)[] | undefined
//     ]
//   >
// >(true);
//
// assert<IsExact<UF, UFF>>(true);
//
// type OF = [
//   InferField<{ type: 'object'; def: { uf: { union: ['string', 'boolean'] } } }>,
//   InferField<{
//     type: 'object';
//     def: { uf: { union: ['string', 'boolean'] } };
//     optional: true;
//   }>,
//   InferField<{
//     type: 'object';
//     def: { uf: { union: ['string', 'boolean'] } };
//     list: true;
//   }>,
//   InferField<{
//     type: 'object';
//     def: { uf: { union: ['string', 'boolean'] } };
//     list: true;
//     optional: true;
//   }>
// ];
//
// type OFEX = { uf: string | boolean };
//
// assert<IsExact<OF, [OFEX, OFEX | undefined, OFEX[], OFEX[] | undefined]>>(true);
