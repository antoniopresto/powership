import { ArrayFieldDef } from '../ArrayField';
import { FieldTypeName } from '../_fieldDefinitions';

import { InferField } from './InferField';
import { InferObjectDefinition } from './InferObjectType';
import { InferTypeName } from './InferString';

export type InferFinalField<
  TypeName extends FieldTypeName,
  Def,
  Root,
  FieldName extends string
> =
  //
  __InferFinalField<TypeName, Def, Root, FieldName>;

export type __InferFinalField<TypeName, Def, Root, FieldName extends string> =
  //
  // LITERAL
  TypeName extends 'literal'
    ? Def
    : //

    // ARRAY
    TypeName extends 'array'
    ? [Def] extends [ArrayFieldDef<infer Of>]
      ? InferField<Of, Root, FieldName>[]
      : never
    : //

    // OBJECT
    TypeName extends 'object'
    ? [Def] extends [object]
      ? InferObjectDefinition<Def>
      : never
    : //

    // ENUM
    TypeName extends 'enum'
    ? [Def] extends [ReadonlyArray<infer Item>]
      ? Item
      : never
    : //

    // UNION
    TypeName extends 'union'
    ? [Def] extends [ReadonlyArray<infer Item>]
      ? InferField<Item, Root, FieldName>
      : never
    : //

    // RECORD
    TypeName extends 'record'
    ? [Def] extends [{ keyType?: infer KeyType; type?: infer Type }]
      ? {
          [K in KeyType extends 'int' | 'float' ? number : string]: InferField<
            Type,
            Root,
            FieldName
          >;
        }
      : { [K: string]: any }
    : //

    // LITERAL
    TypeName extends 'literal'
    ? Def
    : //

    // SELF CIRCULAR REF
    TypeName extends 'self'
    ? Root
    : //

      // FIELDS WITHOUT DEF
      InferTypeName<TypeName, Root>;
