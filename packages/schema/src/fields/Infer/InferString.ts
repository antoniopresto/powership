import type { CursorType, FieldTypeName } from '../_fieldDefinitions';

export type InferString<Input extends string, Root, FieldName extends string> =
  //
  Input extends `${infer Start}?`
    ? InferString<Start, Root, FieldName> | undefined
    : //

    Input extends `[${infer Start}]`
    ? InferString<Start, Root, FieldName>[]
    : //
    //
    Input extends FieldTypeName
    ? InferTypeName<Input, Root>
    : //
    Input extends `[${infer Type}]`
    ? //
      InferString<Type, Root, FieldName>[]
    : //
      never;

export type InferTypeName<Type, Root> =
  //
  Type extends unknown
    ? Type extends FieldTypeName
      ? Type extends 'any'
        ? any
        : Type extends 'boolean'
        ? boolean
        : Type extends 'cursor'
        ? CursorType
        : Type extends 'phone'
        ? string
        : Type extends 'null'
        ? null
        : Type extends 'undefined'
        ? undefined
        : Type extends 'unknown'
        ? unknown
        : Type extends 'string'
        ? string
        : Type extends 'date'
        ? Date
        : Type extends 'email'
        ? string
        : Type extends 'float'
        ? number
        : Type extends 'record'
        ? { [K: string]: any }
        : Type extends 'int'
        ? number
        : Type extends 'ulid'
        ? string
        : Type extends 'ID'
        ? string
        : Type extends 'self'
        ? Root
        : never
      : never
    : never;
