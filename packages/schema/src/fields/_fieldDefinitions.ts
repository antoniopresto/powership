import { ObjectLike } from './IObjectLike';
import { MetaFieldDef } from './MetaFieldField';
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

export interface CommonFieldDefinition<T> {
  __infer?: any; // used to infer types
  alias?: string; // used in generated types,like GraphQL.
  def?: any;
  defaultValue?: any;
  description?: string;
  list?: boolean;
  optional?: boolean;
  type: T;
}

export type FieldDefinitions = {
  ID:
    | {
        autoCreate?: boolean;
      }
    | undefined;

  any: undefined;

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

  literal: Readonly<unknown>;

  meta: MetaFieldDef;

  null: undefined;

  object:
    | { [K: string]: ObjectFieldInput }
    | Readonly<{ [K: string]: ObjectFieldInput }>
    | ObjectLike;

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
