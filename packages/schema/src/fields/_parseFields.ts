import { IsKnown, NullableToPartial } from '@darch/utils';

import {
  CommonFieldDefinition,
  CursorType,
  FieldDefinitions,
  FieldTypeName,
} from './_fieldDefinitions';

export type _ObjectFieldInputBase =
  | _GraphType
  | _ObjectType
  | ObjectInTypeFieldDefinition
  | GraphTypeInTypeFieldDefinition
  | FinalFieldDefinition
  | FieldAsString;

export type ObjectFieldInput =
  | _ObjectFieldInputBase
  | ObjectInputArray
  | FlattenFieldDefinition
  | Readonly<ObjectInputArray>;
// should update _toFinalField, parseObjectDefinition.ts and Infer.ts if add any new type here

export type FieldInput = ObjectFieldInput;

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

export type ExtractTypeName<T> = keyof T extends infer K
  ? K extends keyof T
    ? K extends 'type'
      ? T[K] extends FieldTypeName
        ? T[K]
        : never
      : K extends FieldTypeName
      ? K
      : never
    : never
  : never;

export type AllFinalFieldDefinitions = {
  [Type in FieldTypeName]: {
    alias?: string;
    def: FieldDefinitions[Type];
    defaultValue?: any;
    description?: string | undefined;
    list?: boolean;
    optional?: boolean;
    type: Type;
  };
};

export type FinalFieldDefinitionStrict =
  AllFinalFieldDefinitions[keyof AllFinalFieldDefinitions];

export type FinalFieldDefinition = {
  // less restrictive type, avoid over processing
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

type _FieldAsString<T extends FieldTypeName> =
  | T
  | `${T}?`
  | `[${T}]`
  | `[${T}]?`;

export type ShortenFinalFieldDefinition = {
  [Type in FieldTypeName]: {
    [K in _FieldAsString<Type>]: K | { [L in K]: FieldDefinitions[Type] | {} };
  }[_FieldAsString<Type>];
}[FieldTypeName];

export type ToFinalField<Base> =
  //
  _handleOptional<_handleList<_injectInfer<_toFinalField<Base>>>>;

type GetI<T> = T extends { __infer: infer I } ? I : never;

//
export type _toFinalField<Base> = {
  0: { type: 'any' };
  1: //

  Base extends {
    def?: infer Def;
    list?: boolean;
    optional?: boolean;
    type: FieldTypeName;
  }
    ? {
        def: Def;
        description: string | undefined;
        list: [Base['list']] extends [true] ? true : undefined;
        optional: [Base['optional']] extends [true] ? true : undefined;
        type: Base['type'];
      }
    : //
    //
    Base extends { __isGraphType: true; definition: infer Def }
    ? _toFinalField<Def>
    : Base extends {
        list?: infer List;
        optional?: infer Optional;
        type: { definition: { def?: infer Def; type: infer Type } };
      }
    ? Type extends FieldTypeName
      ? {
          def: Def;
          list: [List] extends [true] ? true : false;
          optional: [Optional] extends [true] ? true : false;
          type: Type;
        }
      : never
    : // ====== FINISH handling GraphType as Field =====

    //
    //
    // ==== start handling fieldType instance ====
    Base extends { __isFieldType: true; parsed: infer Parsed }
    ? Parsed
    : // === end handling fieldType instance

    Base extends {
        list?: infer List;
        optional?: infer Optional;
        type: { __isDarchObject: true; definition: infer Def };
      }
    ? {
        __infer: InferObjectDefinition<Def>;
        def: Def;
        list: [List] extends [true] ? true : false;
        optional: [Optional] extends [true] ? true : false;
        type: 'object';
      }
    : Base extends {
        list?: infer List;
        object: { __isDarchObject: true; definition: infer Def };
        optional?: infer Optional;
      }
    ? {
        __infer: InferObjectDefinition<Def>;
        def: Def;
        list: [List] extends [true] ? true : false;
        optional: [Optional] extends [true] ? true : false;
        type: 'object';
      }
    : //
    //
    Base extends { __isDarchObject: true; definition: infer Def }
    ? {
        __infer: InferObjectDefinition<Def>;
        def: Def;
        description: string | undefined;
        list: false;
        optional: false;
        type: 'object';
      }
    : //

    // === start handling list ===
    Base extends [infer Item] | Readonly<[infer Item]>
    ? ToFinalField<Item> extends { def?: infer Def; type: infer Type }
      ? {
          def: Def;
          description: string | undefined;
          list: true;
          optional: false;
          type: Type;
        }
      : never
    : // === end handling list

    // ==== start handling FieldAsString ====
    Base extends FieldAsString
    ? ParseStringDefinition<Base>
    : // ==== end handling FieldAsString ====
      // ==== start handling FieldAsTypeKey ====
      {
        [K in keyof ParseFlattenFieldDef<Base>]: ParseFlattenFieldDef<Base>[K];
      };
}[IsKnown<Base> extends 1 ? (Base extends ObjectFieldInput ? 1 : 0) : 0];

// inject  the `__infer` property
type _injectInfer<T> = T extends {
  def: infer Def;
  type: FieldTypeName;
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
          : Def extends { keyType?: infer KeyType; type: infer Type }
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
      description: [Input['description']] extends ['string']
        ? Input['description']
        : undefined;
      list: [Input['list']] extends [true] ? true : false;
      optional: [Input['optional']] extends [true] ? true : false;
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
        def: undefined;
        description?: string;
        list: false;
        optional: false;
        type: S;
      }
    : //
    //
    S extends `${FieldTypeName}?`
    ? //
      {
        def: undefined;
        description?: string;
        list: false;
        optional: true;
        type: _ExtractFieldAsString<S>;
      }
    : //
    S extends `[${FieldTypeName}]`
    ? //
      {
        def: undefined;
        description?: string;
        list: true;
        optional: false;
        type: _ExtractFieldAsString<S>;
      }
    : //
    S extends `[${FieldTypeName}]?`
    ? //
      {
        def: undefined;
        description?: string;
        list: true;
        optional: true;
        type: _ExtractFieldAsString<S>;
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
  definition: unknown;
}

interface _GraphType {
  __isGraphType: true;
  definition: unknown;
}

export type InferTypeInstance<T, ELSE extends any = never> = T extends {
  '__ds.recycle.def': infer I;
}
  ? I
  : ELSE;
