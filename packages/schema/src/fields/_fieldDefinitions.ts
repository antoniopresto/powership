import { ObjectLike } from './IObjectLike';
import { MetaFieldDef } from './MetaFieldField';
import { RecordFieldDef } from './RecordField';
import { ObjectFieldInput } from './_parseFields';

export type CursorType = {
  PK: string;
  SK?: string | undefined;
  version?: string | undefined;
  prefix?: string | undefined;
  sep?: string | undefined;
  limit?: number | undefined;
  after?: string | undefined;
  fields?: string[] | undefined;
};

export type FieldDefinitions = {
  any: undefined;

  ID: undefined;

  boolean: undefined;

  cursor: undefined;

  date:
    | {
        min?: Date;
        max?: Date;
      }
    | undefined;

  email:
    | {
        regex?: [string] | [string, string];
      }
    | undefined;

  float:
    | {
        min?: number;
        max?: number;
      }
    | undefined;

  int:
    | {
        min?: number;
        max?: number;
      }
    | undefined;

  null: undefined;

  record: RecordFieldDef | undefined;

  string:
    | {
        min?: number;
        max?: number;
        regex?: [string] | [string, string];
      }
    | undefined;

  ulid:
    | {
        autoCreate?: boolean;
      }
    | undefined;

  undefined: undefined;

  unknown: undefined;

  object:
    | { [K: string]: ObjectFieldInput }
    | Readonly<{ [K: string]: ObjectFieldInput }>
    | ObjectLike;

  union: ObjectFieldInput[] | Readonly<ObjectFieldInput[]>;

  enum: Array<string> | Readonly<Array<string>>;

  meta: MetaFieldDef;
};

export type FieldTypeName = Extract<keyof FieldDefinitions, string>;
