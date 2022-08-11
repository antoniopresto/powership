import { NullableToPartial } from '@darch/utils';

import {
  CommonFieldDefinition,
  CursorType,
  FieldDefinitions,
  FieldTypeName,
} from './_fieldDefinitions';

export type ObjectFieldInput =
  | _GraphType
  | _ObjectType
  | ObjectInTypeFieldDefinition
  | GraphTypeInTypeFieldDefinition
  | FinalFieldDefinition
  | FieldAsString
  | FlattenFieldDefinition
  | ObjectInputArray
  | Readonly<ObjectInputArray>;
// should update _toFinalField, parseObjectDefinition.ts and Infer.ts if add any new type here

// https://github.com/microsoft/TypeScript/issues/3496#issuecomment-128553540
interface ObjectInputArray extends ReadonlyArray<ObjectFieldInput> {
  length: 1;
}

export interface ObjectInTypeFieldDefinition
  extends CommonFieldDefinition<_ObjectType> {}

export interface GraphTypeInTypeFieldDefinition
  extends CommonFieldDefinition<_GraphType> {}

export interface ObjectDefinitionInput {
  [K: string]: ObjectFieldInput;
}

export type InferObjectDefinition<Def> = NullableToPartial<{
  -readonly [K in keyof Def]: InferField<Def[K]>;
}>;

export type InferField<Input> = GetI<ToFinalField<Input>>;

export type ParseFields<Input> = {
  -readonly [K in keyof Input]: ToFinalField<Input[K]>;
};

export type FinalObjectDefinition = { [K: string]: FinalFieldDefinition };

export type FinalFieldDefinition = {
  [K in FieldTypeName]: CommonFieldDefinition<K>;
}[FieldTypeName];

export type FlattenFieldDefinition = {
  [type in FieldTypeName]: {
    [K in type]: [FieldDefinitions[K]] extends [undefined]
      ? FieldDefinitions[K] | {}
      : FieldDefinitions[K];
  };
}[FieldTypeName];

export type FieldAsString =
  | FieldTypeName
  | `${FieldTypeName}?`
  | `[${FieldTypeName}]`
  | `[${FieldTypeName}]?`;

export type ToFinalField<Base> =
  //
  _handleOptional<_handleList<_injectInfer<_toFinalField<Base>>>>;

type GetI<T> = T extends { __infer: infer I } ? I : never;

//
export type _toFinalField<Base> = //
  //
  //

  // ====== handling GraphType as Field =====
  Base extends _GraphType
    ? Omit<Base['definition'], '__infer'>
    : Base extends {
        type: _GraphType;
        list?: infer List;
        optional?: infer Optional;
      }
    ? {
        type: Base['type']['definition']['type'];
        def: Base['type']['definition']['def'];
        list: [List] extends [true] ? true : false;
        optional: [Optional] extends [true] ? true : false;
      }
    : //
    // ====== FINISH handling GraphType as Field =====

    //
    //
    // ==== start handling fieldType instance ====
    Base extends { __isFieldType: true; parsed: infer Parsed }
    ? Parsed
    : // === end handling fieldType instance

    Base extends {
        type: _ObjectType;
        list?: infer List;
        optional?: infer Optional;
      }
    ? {
        type: 'object';
        def: Base['type']['definition'];
        list: [List] extends [true] ? true : false;
        optional: [Optional] extends [true] ? true : false;
        __infer: InferObjectDefinition<Base['type']['definition']>;
      }
    : //
    Base extends {
        object: _ObjectType;
        list?: infer List;
        optional?: infer Optional;
      }
    ? {
        type: 'object';
        def: Base['object']['definition'];
        list: [List] extends [true] ? true : false;
        optional: [Optional] extends [true] ? true : false;
        __infer: InferObjectDefinition<Base['object']['definition']>;
      }
    : //
    //
    Base extends _ObjectType
    ? {
        type: 'object';
        def: Base['definition'];
        list: false;
        optional: false;
        description: string | undefined;
        __infer: InferObjectDefinition<Base['definition']>;
      }
    : //

    // === start handling list ===
    Base extends [infer Item] | Readonly<[infer Item]>
    ? ToFinalField<Item> extends infer P
      ? P extends FinalFieldDefinition
        ? {
            type: P['type'];
            def: P['def'];
            list: true;
            optional: false;
            description: string | undefined;
          }
        : never
      : never
    : // === end handling list

    // ==== start handling FieldAsString ====
    Base extends FieldAsString
    ? ParseStringDefinition<Base>
    : // ==== end handling FieldAsString ====

    Base extends {
        type: FieldTypeName;
        def?: infer Def;
        list?: boolean;
        optional?: boolean;
      }
    ? {
        type: Base['type'];
        def: Def;
        list: [Base['list']] extends [true] ? true : undefined;
        optional: [Base['optional']] extends [true] ? true : undefined;
        description: string | undefined;
      }
    : // ==== start handling FieldAsTypeKey ====
      {
        [K in keyof ParseFlattenFieldDef<Base>]: ParseFlattenFieldDef<Base>[K];
      };

// inject  the `__infer` property
type _injectInfer<T> = T extends {
  type: FieldTypeName;
  def: infer Def;
}
  ? T & {
      // @ts-ignore FIXME deep excessive
      __infer: // === recursive object case ===
      T['type'] extends 'object'
        ? Def extends { [K: string]: any }
          ? InferObjectDefinition<Def>
          : never
        : //
        // === recursive union case ===
        T['type'] extends 'union'
        ? Def extends Array<infer Item> | Readonly<Array<infer Item>>
          ? InferField<Item>
          : never
        : //

        // === parsing record type ===
        T['type'] extends 'record'
        ? [Def] extends [undefined]
          ? { [K: string]: any }
          : Def extends { type: infer Type; keyType?: infer KeyType }
          ? {
              [K in KeyType extends 'int' | 'float'
                ? number
                : string]: InferField<Type>;
            }
          : never
        : //

        // === start LiteralField ===
        T['type'] extends 'literal'
        ? T['def']
        : // === end LiteralField ===

          // === simple field case
          _inferBasic<T['type'], Def>;
    }
  : never;

export type _handleList<T> = T extends {
  __infer: infer Infer;
  list?: infer List;
}
  ? [List] extends [true]
    ? {
        [K in keyof T | '__infer']: K extends '__infer' ? Infer[] : T[K];
      }
    : T
  : never;

export type _handleOptional<T> = T extends {
  __infer: infer Infer;
  optional?: infer Optional;
}
  ? [Optional] extends [true]
    ? {
        [K in keyof T | '__infer']: K extends '__infer'
          ? Infer | undefined
          : T[K];
      }
    : T
  : never;

// ==== end handling FieldAsTypeKey ====
// === END ParseField == //

// ==== start parsing FieldAsTypeKey utils ====
type ExtractFlattenDefDef<Input> = {
  def: {
    -readonly [K in keyof Input as K extends FieldTypeName
      ? K
      : never]: Input[K];
  } extends infer P1
    ? P1[keyof P1]
    : Input;
};

type ExtractFlattenDefType<Input> = keyof Input extends infer K
  ? K extends FieldTypeName
    ? { type: K }
    : never
  : never;

type ExtractFlattenDefCommonConfig<Input> = Input extends { [K: string]: any }
  ? {
      list: [Input['list']] extends [true] ? true : false;
      optional: [Input['optional']] extends [true] ? true : false;
      description: [Input['description']] extends ['string']
        ? Input['description']
        : undefined;
    }
  : never;

type ParseFlattenFieldDef<Base> =
  //
  ExtractFlattenDefType<Base> &
    ExtractFlattenDefDef<Base> &
    ExtractFlattenDefCommonConfig<Base>;
// ==== end parsing FieldAsTypeKey utils ====

// ==== start FieldAsString utils ====
type _ExtractFieldAsString<T extends FieldAsString> =
  //
  T extends FieldTypeName
    ? T
    : T extends `[${infer U}]?`
    ? U
    : T extends `${infer U}?`
    ? U
    : T extends `[${infer U}]`
    ? U
    : never;

type ParseStringDefinition<S> =
  //
  S extends FieldTypeName
    ? {
        type: S;
        list: false;
        optional: false;
        def: undefined;
        description?: string;
      }
    : //
    //
    S extends `${FieldTypeName}?`
    ? //
      {
        type: _ExtractFieldAsString<S>;
        list: false;
        optional: true;
        def: undefined;
        description?: string;
      }
    : //
    S extends `[${FieldTypeName}]`
    ? //
      {
        type: _ExtractFieldAsString<S>;
        list: true;
        optional: false;
        def: undefined;
        description?: string;
      }
    : //
    S extends `[${FieldTypeName}]?`
    ? //
      {
        type: _ExtractFieldAsString<S>;
        list: true;
        optional: true;
        def: undefined;
        description?: string;
      }
    : never;
// ==== start FieldAsString utils ====

type _inferBasic<Type, Def = undefined> =
  //
  Type extends 'any'
    ? any
    : Type extends 'boolean'
    ? boolean
    : Type extends 'cursor'
    ? CursorType
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
    : Type extends 'int'
    ? number
    : Type extends 'ulid'
    ? string
    : Type extends 'ID'
    ? string
    : // == parsing enum
    Type extends 'enum'
    ? Def extends Array<infer Val> | Readonly<Array<infer Val>>
      ? Val
      : never
    : never;

interface _ObjectType {
  __isDarchObject: true;
  definition: { [K: string]: FinalFieldDefinition };
}

interface _GraphType {
  __isGraphType: true;
  definition: FinalFieldDefinition;
}
