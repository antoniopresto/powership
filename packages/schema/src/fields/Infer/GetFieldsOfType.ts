import { FieldTypeName } from '../_fieldDefinitions';

/**
 * Get Solarwind fields of a specific type
 */
export type GetFieldsOfType<Definition, TypeName> = Definition extends unknown
  ? TypeName extends FieldTypeName
    ? Definition extends object
      ? {
          [K in keyof Definition as IsFieldOfType<
            Definition[K],
            TypeName
          > extends 1
            ? K
            : never]: Definition[K];
        } & {}
      : never
    : never
  : never;

export type IsFieldOfType<
  Def,
  TypeName extends FieldTypeName
> = Def extends unknown
  ? // checking from string definition
    Def extends string
    ? Def extends `${string}${TypeName}${string}`
      ? 1
      : 0
    : Def extends object
    ? //
      // checking from a final definition
      'type' extends keyof Def
      ? Def['type'] extends TypeName
        ? 1
        : 0
      : //
      // checking from a flatten definition
      [Extract<keyof Def, TypeName>] extends [never]
      ? 0
      : 1
    : never
  : never;
