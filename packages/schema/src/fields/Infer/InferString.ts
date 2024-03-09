import type { CursorType, FieldTypeName } from '../_fieldDefinitions';

export type InferString<Input extends string> =
  //
  Input extends `${infer Start}?`
    ? InferString<Start> | undefined
    : //

      Input extends `[${infer Start}]`
      ? InferString<Start>[]
      : //
        //
        Input extends FieldTypeName
        ? InferTypeName<Input>
        : //
          Input extends `[${infer Type}]`
          ? //
            InferString<Type>[]
          : //
            never;

export type InferTypeName<Type> =
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
                                    : never
      : never
    : never;
