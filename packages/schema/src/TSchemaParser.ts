import { OnlyKnown } from '@darch/utils/dist/typeUtils';

import { FieldType } from './FieldType';
import { CommonFieldConfig, FieldDefinitionConfig } from './TSchemaConfig';
import { CursorType } from './fields/CursorField';
import { FieldTypeName, FieldTypes } from './fields/fieldTypes';
import { AnyStringFieldDefinition, ParseStringDefinition } from './parseStringDefinition';
import { InferRecordFieldType } from './fields/RecordField';

export type AnyParsedFieldDefinition = {
  [K in keyof FieldTypes]: {
    type: K;
    def?: any; // TODO infer
    list?: boolean;
    optional?: boolean;
    description?: string;
  };
}[keyof FieldTypes];

export function isSchemaAsFieldDef(input: any): input is AnyParsedFieldDefinition & {
  type: 'schema';
  def: AnyParsedSchemaDefinition;
} {
  return input?.type === 'schema' && !!input.def && typeof input.def === 'object';
}

export type AnyParsedSchemaDefinition = {
  [K: string]: AnyParsedFieldDefinition;
};

export type ParsedSchemaDefinition<T> = {
  [K in keyof T]: ParsedFieldDefinition<T[K]>;
};

export type Infer<T> = TypeFromSchema<T>;

export type TypeFromSchema<T> =
  // Z - ParsedFieldDefinition -> Optional<List<GetType<T>>>
  // A - { definition } -> iterate definition -> TypeFromFieldDef
  // B - { type: { definition }} -> Optional<List<A>>
  // C - AnyStringFieldDefinition -> Optional<List<T>>
  // D - readonly [string, ...string[]] -> GetType<T>
  // E - FieldType<any, FieldTypeName, any> ->
  // F - Record<string, FieldDefinition>
  // G - { type: 'schema', def: Def }
  // H - {address: { schema: schemaDefinitionInput }, name: { string: {min: 2 }}}

  // ================ case Z START ================
  T extends {
    type: FieldTypeName;
    list?: infer List;
    optional?: infer Optional;
  }
    ? Maybe_List<GetTSType<ParsedFieldDefinition<T>>, List, Optional>
    : // ================ case Z END ================

    // ================ case A START ================
    T extends { definition: ParsedSchemaDefinition<any> }
    ? TypeFromSchemaDefinition<T['definition']>
    : // ================ case A END ==================

    // ================ case B START ================
    T extends {
        type: { definition: ParsedSchemaDefinition<any> };
        list?: infer List;
        optional?: infer Optional;
      }
    ? Maybe_List<TypeFromSchemaDefinition<T['type']['definition']>, List, Optional>
    : // ================ case B END ==================

    // ================ case C START ================
    T extends AnyStringFieldDefinition
    ? TypeFromSchema<ParseStringDefinition<T>>
    : // ================ case C END ==================

    // ================ case D START ================
    T extends readonly [string, ...string[]]
    ? TypeFromSchema<ParsedFieldDefinition<T>>
    : // ================ case D END ==================

    // ================ case E START ================
    T extends {
        __isFieldType: true;
        typeName: infer TypeName;
        isList?: infer List;
        isOptional?: infer Optional;
        def?: infer Def;
      }
    ? TypeFromSchema<
        ParsedFieldDefinition<{
          type: TypeName;
          optional: Optional;
          list: List;
          def: Def;
        }>
      >
    : // ================ case E END ==================

    // ================ case F START ================
    T extends { [K: string]: FieldDefinitionConfig }
    ? {
        -readonly [K in keyof T]: ParsedFieldDefinition<T[K]>;
      } extends infer Parsed
      ? Parsed extends Record<string, any>
        ? {
            // not a generic to better Intellisense debug
            [K in keyof ({
              [K in NullableKeys<Parsed, 'required'>]: TypeFromSchema<Parsed[K]>;
            } & {
              [K in NullableKeys<Parsed, 'nullable'>]?: TypeFromSchema<Parsed[K]>;
            })]: ({
              [K in NullableKeys<Parsed, 'nullable'>]?: TypeFromSchema<Parsed[K]>;
            } & {
              [K in NullableKeys<Parsed, 'required'>]: TypeFromSchema<Parsed[K]>;
            })[K];
          }
        : never
      : never
    : // ================ case F END ==================

    // ================ case G START ================
    T extends {
        type: 'schema';
        def: ParsedSchemaDefinition<any>;
        list?: infer List;
        optional?: infer Optional;
      }
    ? Maybe_List<
        {
          // not a generic to better Intellisense debug
          [K in keyof ({
            [K in NullableKeys<T['def'], 'required'>]: TypeFromSchema<T['def'][K]>;
          } & {
            [K in NullableKeys<T['def'], 'nullable'>]?: TypeFromSchema<T['def'][K]>;
          })]: ({
            [K in NullableKeys<T['def'], 'nullable'>]?: TypeFromSchema<T['def'][K]>;
          } & {
            [K in NullableKeys<T['def'], 'required'>]: TypeFromSchema<T['def'][K]>;
          })[K];
        },
        List,
        Optional
      >
    : // ================ case G END ==================

    // ================ case H START ================
    T extends {
        schema: infer Schema;
        optional?: infer Optional;
        list?: infer List;
      }
    ? T extends { type: string }
      ? never
      : Maybe_List<TypeFromSchema<Schema>, List, Optional>
    : // ================ case H START ================

    // ================ case H START ================
    [IsFieldAsSingleKey<T>] extends [true]
    ? TypeFromSchema<ParseFieldNameAsSingleKey<T>>
    : // ================ case H START ================
      // END
      never;

// const schema1 = createSchema({ x: ['a', 'b'] } as const)
// const schema2 = new Schema({ x: ['a', 'b'] } as const)
// // type Z = TypeFromSchema<ParsedFieldDefinition<['a', 'b']>>;
// type A = TypeFromSchema<typeof schema1>;
// type B = TypeFromSchema<{
//   type: typeof schema2;
//   list: true;
//   optional: true;
// }>;
// type C = TypeFromSchema<'[int]?'>;
// type D = TypeFromSchema<['a', 'b']>;
// type D2 = TypeFromSchema<readonly ['a', 'b']>;
// const s = { nameFromType: StringField.create().list().optional() } as const;
// type E = TypeFromSchema<typeof s>;

//  Z | AnyParsedFieldDefinition
//  A | AnySchema
//  B | { type: AnySchema; list?: boolean; optional?: boolean };
//  C | AnyStringFieldDefinition
//  D | readonly [string, ...string[]]
//  E | FieldType<any, FieldTypeName, any>

type HandleList<JSType, Is> = [Is] extends [true] ? JSType[] : JSType;
type HandleOptional<JSType, Is> = [Is] extends [true] ? JSType | undefined : JSType;
type Maybe_List<Type, IsList, IsOptional> = HandleOptional<HandleList<Type, IsList>, IsOptional>;

type GetTSType<T> =
  // ====== START enum type ======
  T extends { type: 'enum'; def: Array<infer En> } //
    ? En
    : T extends { type: 'enum'; def: Readonly<Array<infer En>> }
    ? En
    : // ====== END enum type ======

    // ====== START union type ======
    T extends { type: 'union'; def: Array<infer En> } //
    ? TypeFromSchema<En>
    : T extends { type: 'union'; def: Readonly<Array<infer En>> }
    ? TypeFromSchema<En>
    : // ====== END union type ======

    // ====== START record type ======
    T extends { type: 'record'; def: infer Def } //
    ? InferRecordFieldType<Def>
    : // ====== END record type ======

    T extends { type: 'int' | 'float' }
    ? number
    : T extends { type: 'string' | 'email' | 'ulid' }
    ? string
    : T extends { type: 'boolean' }
    ? boolean
    : T extends { type: 'date' }
    ? Date
    : T extends { type: 'cursor' }
    ? CursorType
    : T extends { type: 'schema'; def: infer T }
    ? TypeFromSchema<T>
    : T extends { type: 'unknown' }
    ? unknown
    : T extends { type: 'undefined' }
    ? undefined
    : T extends { type: 'any' }
    ? any
    : never;

export type ParsedFieldDefinition<T> =
  //
  // ===== start union type ====
  (
    T extends readonly [readonly FieldDefinitionConfig[]]
      ? {
          type: 'union';
          optional: HasNullableDefinition<T[0][number]>;
          list: false;
          def: T[0];
          description?: string;
        }
      : T extends {
          type: 'union';
          def: readonly FieldDefinitionConfig[] | FieldDefinitionConfig[];
          optional?: infer Optional;
          list?: infer List;
          description?: infer Description;
        }
      ? {
          type: 'union';
          optional: [Optional] extends [true] ? true : HasNullableDefinition<T['def'][number]>;
          list: [List] extends [true] ? true : false;
          def: T['def'];
          description?: Description;
        }
      : T extends FieldType<any, 'union', readonly any[] | any[]>
      ? {
          type: 'union';
          optional: [T['isOptional']] extends [true] ? T['isOptional'] : HasNullableDefinition<T['def'][number]>;
          list: T['isList'] extends true ? true : false;
          def: T['def'];
          description?: string;
        }
      : // ==== end union type ====

      T extends readonly [string, ...string[]]
      ? {
          type: 'enum';
          def: T;
          list: false;
          optional: false;
          description?: string;
        }
      : T extends { definition: infer SchemaDef }
      ? {
          type: 'schema';
          def: SchemaDef;
          list: false;
          optional: false;
          description?: string;
        }
      : // start 'schema'
      T extends {
          type: { definition: infer SchemaDef };
          optional?: infer Optional;
          list?: infer List;
          description?: string;
        }
      ? {
          type: 'schema';
          optional: Optional extends true ? true : false;
          list: List extends true ? true : false;
          def: SchemaDef;
          description?: string;
        }
      : // end 'schema'

      // record start
      T extends {
          type: 'record';
          optional?: infer Optional;
          list?: infer List;
          def?: infer Def;
          description?: string;
        }
      ? {
          type: 'record';
          optional: [Optional] extends [true] ? true : false;
          list: [List] extends [true] ? true : false;
          def: {
            keyType: Def extends { keyType: 'int' | 'float' } ? Def['keyType'] : 'string';
            type: Def extends { type: FieldDefinitionConfig } ? Def['type'] : 'any';
          };
          description?: string;
        }
      : // record end

      T extends {
          type: FieldTypeName;
          optional?: infer Optional;
          list?: infer List;
          def?: infer Def;
          description?: string;
        }
      ? {
          type: T['type'];
          optional: Optional extends true ? true : false;
          list: List extends true ? true : false;
          def: OnlyKnown<Def>;
          description?: string;
        }
      : T extends FieldType<any, infer TypeName, infer Def>
      ? {
          type: TypeName;
          optional: T['isOptional'] extends true ? true : false;
          list: T['isList'] extends true ? true : false;
          def: Def;
          description?: string;
        }
      : T extends AnyStringFieldDefinition
      ? ParseStringDefinition<T>
      : // ======= H start ====
      [IsFieldAsSingleKey<T>] extends [true]
      ? ParseFieldNameAsSingleKey<T>
      : // ======= H end ====
        never
  ) extends infer Parsed
    ? Parsed extends Record<string, any>
      ? {
          // fix 'boolean' is not assignable to type 'true' 😔
          [K in keyof Parsed]: K extends 'optional' ? ([Parsed[K]] extends [never] ? false : Parsed[K]) : Parsed[K];
        }
      : never
    : never;

type NullableKeys<T extends ParsedSchemaDefinition<any>, Kind extends 'nullable' | 'required'> = {
  [K in keyof T]?: T[K]['optional'] extends (Kind extends 'nullable' ? true : false) ? K : never;
}[keyof T] extends infer Temp
  ? Temp extends undefined
    ? never
    : Extract<Temp, string>
  : never;

export type TypeFromSchemaDefinition<Schema extends ParsedSchemaDefinition<any>> = {
  [K in keyof ({
    [K in NullableKeys<Schema, 'required'>]: TypeFromSchema<Schema[K]>;
  } & {
    [K in NullableKeys<Schema, 'nullable'>]?: TypeFromSchema<Schema[K]>;
  })]: ({
    [K in NullableKeys<Schema, 'nullable'>]?: TypeFromSchema<Schema[K]>;
  } & {
    [K in NullableKeys<Schema, 'required'>]: TypeFromSchema<Schema[K]>;
  })[K];
};

// === START to infer union as optional ===
export type HasNullableDefinition<T> =
  | IsOptionalDef<T>
  | IsOptionalFieldInstance<T>
  | IsOptionalString<T>
  | IsOptionalUnion<T>;

type IsOptionalString<T> = T extends string ? (T extends `${string}?` ? true : never) : never;
type IsOptionalDef<T> = T extends object ? (T extends { optional: true } ? true : never) : never;
type IsOptionalFieldInstance<T> = T extends object ? (T extends { isOptional: true } ? true : never) : never;
type IsOptionalUnion<T> = T extends object
  ? T extends FieldType<any, any, readonly (infer Def)[]>
    ? HasNullableDefinition<Def>
    : never
  : never;
// === END to infer union as optional ===

export type IsFieldAsSingleKey<T> = T extends { [K in keyof FieldTypes]?: any }
  ? [Exclude<keyof T, keyof CommonFieldConfig | keyof FieldTypes>] extends [never]
    ? true
    : never
  : never;

export type ParseFieldNameAsSingleKey<T> =
  //
  T extends { [K in keyof FieldTypes]?: any }
    ? [Exclude<keyof T, keyof CommonFieldConfig | keyof FieldTypes>] extends [never]
      ? {
          type: Exclude<keyof T, keyof CommonFieldConfig>;
          def: T[Exclude<keyof T, keyof CommonFieldConfig>];
          optional: T extends { optional: true } ? true : false;
          list: T extends { list: true } ? true : false;
          description?: string;
        }
      : never
    : never;
