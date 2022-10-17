import {
  GetFieldByDotNotation,
  IsKnown,
  NullableToPartial,
} from '@backland/utils';

import {
  CommonFieldDefinition,
  CursorType,
  FieldDefinitions,
  FieldTypeName,
  ListDefinition,
  ListDefinitionTruthy,
} from './_fieldDefinitions';

export type _ObjectFieldInputBase =
  | _GraphType
  | _ObjectType
  | ObjectInTypeFieldDefinition
  | GraphTypeInTypeFieldDefinition
  | FinalFieldDefinition
  | FieldAsString;

export type ObjectFieldInput = _ObjectFieldInputBase | FlattenFieldDefinition;
// should update _toFinalField, parseObjectDefinition.ts and Infer.ts if add any new type here

export type FieldInput = ObjectFieldInput;

export interface ObjectInTypeFieldDefinition
  extends CommonFieldDefinition<_ObjectType> {}

export interface GraphTypeInTypeFieldDefinition
  extends CommonFieldDefinition<_GraphType> {}

export interface ObjectDefinitionInput {
  [K: string]: ObjectFieldInput;
}

export type InferObjectDefinition<Def> = NullableToPartial<{
  -readonly [K in keyof Def]: ToFinalField<Def[K]> extends infer Final
    ? Final extends { def: any; type: 'alias' }
      ? // handling aliasing
        [Final['def']] extends [string]
        ? GetFieldByDotNotation<
            InferObjectDefinition<AllButNot<Def, K>>,
            Final['def']
          >
        : InferField<Final['def']['type']>
      : // infer schema field
        InferField<Def[K]>
    : any;
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
    def: FieldDefinitions[Type];
    defaultValue?: any;
    description?: string | undefined;
    hidden?: boolean;
    list?: boolean;
    name?: string;
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
  Base extends FieldAsString
    ? ParseStringDefinition<Base>
    : _ParseSimpleType<
        Base,
        _ParseGraphType<
          Base,
          _ParseFieldInstance<
            Base,
            _ParseObjectType<
              Base,
              //
              _ParseFlattenDef<Base>
            >
          >
        >
      >;
}[IsKnown<Base> extends 1 ? (Base extends ObjectFieldInput ? 1 : 0) : 0];

// inject  the `__infer` property
type _injectInfer<T> = T extends {
  def: infer Def;
  type: FieldTypeName;
}
  ? T & {
      // @ts-ignore FIXME deep excessive
      __infer: // === recursive object case ===

      T['type'] extends 'array'
        ? Def extends { of: infer Of }
          ? InferField<Of>[]
          : never
        : //
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
  ? [List] extends [ListDefinitionTruthy]
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
  __isBacklandObject: true;
  definition: unknown;
}

interface _GraphType {
  __isGraphType: true;
  definition: unknown;
}

type _ParseSimpleType<Base, ELSE> = Base extends {
  def?: infer Def;
  list?: ListDefinition;
  optional?: boolean;
  type: FieldTypeName;
}
  ? {
      def: Def;
      description: string | undefined;
      list: [Base['list']] extends [ListDefinitionTruthy] ? true : undefined;
      optional: [Base['optional']] extends [true] ? true : undefined;
      type: Base['type'];
    }
  : ELSE;

type _ParseGraphType<Base, ELSE> = Base extends {
  __isGraphType: true;
  definition: infer Def;
}
  ? _toFinalField<Def> //
  : //
  Base extends {
      list?: infer List;
      optional?: infer Optional;
      type: {
        __isGraphType: true;
        definition: infer Def;
      };
    }
  ? _toFinalField<Def> extends infer P
    ? P extends { def: infer Def; type: infer Type }
      ? {
          def: Def;
          list: [List] extends [ListDefinitionTruthy] ? true : false;
          optional: [Optional] extends [true] ? true : false;
          type: Type;
        }
      : never
    : never
  : ELSE;

type _ParseObjectType<Base, ELSE> =
  //
  Base extends {
    __isBacklandObject: true;
    definition: infer Def;
  }
    ? {
        def: { [K in keyof Def]: _toFinalField<Def[K]> };
        list: false;
        optional: false;
        type: 'object';
      } //
    : //
    Base extends {
        list?: infer List;
        optional?: infer Optional;
        type: {
          __isBacklandObject: true;
          definition: infer Def;
        };
      }
    ? { [K in keyof Def]: _toFinalField<Def[K]> } extends infer P
      ? P extends { def: infer Def; type: 'object' }
        ? {
            def: Def;
            list: [List] extends [ListDefinitionTruthy] ? true : false;
            optional: [Optional] extends [true] ? true : false;
            type: 'object';
          }
        : never
      : never
    : ELSE;

type _ParseFieldInstance<Base, ELSE> = //
  // ==== start handling fieldType instance ====
  Base extends { __isFieldType: true; parsed: infer Parsed }
    ? Parsed
    : // === end handling fieldType instance

    Base extends {
        list?: infer List;
        optional?: infer Optional;
        type: { __isBacklandObject: true; definition: infer Def };
      }
    ? {
        __infer: InferObjectDefinition<Def>;
        def: Def;
        list: [List] extends [ListDefinitionTruthy] ? true : false;
        optional: [Optional] extends [true] ? true : false;
        type: 'object';
      }
    : Base extends {
        list?: infer List;
        object: { __isBacklandObject: true; definition: infer Def };
        optional?: infer Optional;
      }
    ? {
        __infer: InferObjectDefinition<Def>;
        def: Def;
        list: [List] extends [ListDefinitionTruthy] ? true : false;
        optional: [Optional] extends [true] ? true : false;
        type: 'object';
      }
    : ELSE;

type _ParseFlattenDef<Base> = {
  [K in keyof ParseFlattenFieldDef<Base>]: ParseFlattenFieldDef<Base>[K];
};

type AllButNot<T, N> = T extends { [K: string]: unknown }
  ? { [K in keyof T as K extends N ? never : K]: T[K] }
  : T;

// type Steps<N> = N extends string
//   ? N extends `${infer Head}.${infer Tail}`
//     ? Head | `${Head}.${Steps<Tail>}` | N
//     : N
//   : never;
//
// type S = Steps<'a.b'>
//
// type X = AllButNot<{ a: { b: { c: 1 }; x: { y: { z: 1 } } } }, 'a.b'>;
