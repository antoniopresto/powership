import type { ArrayFieldDef } from '../ArrayField';
import type { FieldTypeName } from '../_fieldDefinitions';

import type { InferField } from './InferField';
import type { InferObjectDefinition } from './InferObjectType';
import type { InferTypeName } from './InferString';

export type InferFinalField<TypeName extends FieldTypeName, Def = never> =
  //
  _InferFinalField<TypeName, Def>;

export type _InferFinalField<TypeName, Def> =
  //
  // LITERAL
  TypeName extends 'literal'
    ? Def
    : //

    // ARRAY
    TypeName extends 'array'
    ? [Def] extends [ArrayFieldDef<infer Of>]
      ? InferField<Of>[]
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
      ? InferField<Item>
      : never
    : //

    // RECORD
    TypeName extends 'record'
    ? [Def] extends [{ keyType?: infer KeyType; type?: infer Type }]
      ? {
          [K in KeyType extends 'int' | 'float'
            ? number
            : string]: InferField<Type>;
        }
      : { [K: string]: any }
    : //

    // LITERAL
    TypeName extends 'literal'
    ? Def
    : //

      // FIELDS WITHOUT DEF
      InferTypeName<TypeName>;
