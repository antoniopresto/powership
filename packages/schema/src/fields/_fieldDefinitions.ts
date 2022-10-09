import { AliasFieldDef } from './AliasField';
import { ArrayFieldDef } from './ArrayField';
import { ObjectLike } from './IObjectLike';
import { MetaFieldDef } from './MetaFieldField';
import { PhoneFieldDef } from './PhoneField';
import { RecordFieldDef } from './RecordField';
import { UnknownFieldDef } from './UnknownField';
import { ObjectFieldInput } from './_parseFields';

export type CursorType = {
  PK: string;
  SK?: string | undefined;
  after?: string | undefined;
  fields?: string[] | undefined;
  limit?: number | undefined;
  prefix?: string | undefined;
  sep?: string | undefined;
  version?: string | undefined;
};

export type ListDefinitionObject = {
  length?: number;
  max?: number;
  min?: number;
};

export type ListDefinition = ListDefinitionObject | boolean;
export type ListDefinitionTruthy = ListDefinitionObject | true;

export type _CommonFieldDefinition = {
  __infer?: any;
  // used in generated types,like GraphQL.
  def?: any;
  defaultValue?: any;
  description?: string;
  hiddenField?: boolean;
  list?: ListDefinition;
  // used to infer types
  name?: string;
  optional?: boolean;
};

export type CommonFieldDefinition<T> = {
  type: T;
} & _CommonFieldDefinition;

export type FieldDefinitions = {
  ID:
    | {
        autoCreate?: boolean;
      }
    | undefined;

  alias: AliasFieldDef;

  any: undefined;

  array: ArrayFieldDef;

  boolean: undefined;

  cursor: undefined;

  date:
    | {
        autoCreate?: boolean;
        max?: Date;
        min?: Date;
      }
    | undefined;

  email:
    | {
        regex?:
          | [string]
          | [string, string]
          | Readonly<[string] | [string, string]>;
      }
    | undefined;

  enum: Array<string> | Readonly<Array<string>>;

  float:
    | {
        max?: number;
        min?: number;
      }
    | undefined;

  int:
    | {
        max?: number;
        min?: number;
      }
    | undefined;

  // list: ObjectFieldInput | Readonly<ObjectFieldInput>;
  literal: Readonly<unknown>;

  meta: MetaFieldDef;

  null: undefined;

  object:
    | { [K: string]: ObjectFieldInput }
    | Readonly<{ [K: string]: ObjectFieldInput }>
    | ObjectLike;

  phone: PhoneFieldDef;

  record: RecordFieldDef | undefined;

  string:
    | {
        max?: number;
        min?: number;
        regex?:
          | [string]
          | [string, string]
          | Readonly<[string] | [string, string]>;
      }
    | undefined;

  ulid:
    | {
        autoCreate?: boolean;
      }
    | undefined;

  undefined: undefined;

  union: ObjectFieldInput[] | Readonly<ObjectFieldInput[]>;

  unknown: UnknownFieldDef | undefined;
};

export type FieldTypeName = Extract<keyof FieldDefinitions, string>;
