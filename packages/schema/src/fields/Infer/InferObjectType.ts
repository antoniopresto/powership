import { Cast, GetFieldByDotNotation, NullableToPartial } from '@swind/utils';

import { FieldDefinitionWithType } from '../_fieldDefinitions';

import { GetFieldsOfType } from './GetFieldsOfType';
import { InferCircularObjectType } from './InferCircularObjectType';
import { InferField } from './InferField';

export interface ObjectTypeLikeFieldDefinition {
  __isSolarwindObject: true;
  definition: any;
}

export interface ObjectInTypeFieldDefinition
  extends FieldDefinitionWithType<ObjectTypeLikeFieldDefinition> {}

export type InferObjectType<T> =
  //
  T extends unknown
    ? T extends ObjectTypeLikeFieldDefinition
      ? InferObjectDefinition<T['definition']>
      : never
    : never;

export type InferObjectDefinition<Input> = [Input] extends [object]
  ? NullableToPartial<
      _InferObjectDefinition<{
        -readonly [K in keyof Input as K extends `$${string}`
          ? never
          : K]: Input[K];
      }> &
        ParseSpecialObjectKeys<Input>
    >
  : never;

export type ParseSpecialObjectKeys<T> = {
  -readonly [K in keyof T as K extends `$string`
    ? string
    : K extends `$number`
    ? number
    : never]: InferField<T[K]>;
} & {};

export type _InferObjectDefinition<Input extends object> =
  _GetAliasFields<Input> extends infer Aliases
    ? GetFieldsOfType<Input, 'self'> extends infer SelfReferences
      ? {
          [K in Exclude<
            keyof Input,
            keyof Aliases | keyof SelfReferences
          >]: InferField<Input[K]>;
        } & _InferSpecialObjectKeys<Input> extends infer Parent
        ? _Merge<
            Parent,
            _InferAliasFields<Cast<Aliases, object>, Cast<Parent, object>>
          > extends infer ParentWithAliases
          ? _Merge<
              ParentWithAliases,
              InferCircularObjectType<ParentWithAliases, SelfReferences>
            >
          : never
        : never
      : never
    : never;

export type _Merge<A, B> = {
  [K in keyof A as K extends keyof B ? never : K]: A[K];
} & B extends infer R
  ? { [K in keyof R]: R[K] } & {}
  : never;

export type _GetAliasFields<Input extends object> = {
  [K in keyof Input as keyof Input[K] extends 'alias'
    ? K
    : 'type' extends keyof Input[K]
    ? 'alias' extends Input[K]['type']
      ? K
      : never
    : never]: Input[K];
} & {};

export type _InferAlias<Input, Parent extends object> =
  //
  Input extends string
    ? GetFieldByDotNotation<Parent, Input>
    : //

    Input extends object
    ? keyof Input extends infer K
      ? K extends unknown
        ? K extends keyof Input
          ? // ====
            //
            K extends 'type'
            ? InferField<Input[K]>
            : //
            K extends 'alias'
            ? _InferAlias<Input[K], Parent>
            : never
          : //
            // ====
            never
        : never
      : never
    : never;

export type _InferAliasFields<
  AliasFields extends object,
  Parent extends object
> = {
  [K in keyof AliasFields]: _InferAlias<AliasFields[K], Parent>;
} & {};

export type _InferSpecialObjectKeys<T> = {
  -readonly [K in keyof T as K extends `$string`
    ? string
    : K extends `$number`
    ? number
    : never]: InferField<T[K]>;
} & {};
