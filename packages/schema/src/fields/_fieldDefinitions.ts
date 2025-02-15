import { tupleEnum } from '@powership/utils';

import { ObjectFieldInput } from './_parseFields';

import {
  AliasFieldDef,
  ArrayFieldDef,
  CustomFieldConfig,
  MetaFieldDef,
  ObjectLike,
  PhoneFieldDef,
  RecordFieldDef,
  UnknownFieldDef,
} from '../types';

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

export type FieldExampleFunction = () => string | Promise<string>;
export type FieldExample = FieldExampleFunction | string;

export interface CommonFieldDefinitionProps {
  description?: string;
  example?: FieldExample;
  hidden?: boolean;
  name?: string;
  def?: any;
  defaultValue?: any;
  list?: ListDefinition;
  optional?: boolean;
  $?: CustomFieldConfig;
}

export interface FieldDefinitionWithType<T> extends CommonFieldDefinitionProps {
  type: T;
}

export const SpecialObjectKeyEnum = tupleEnum(`$string`, `$number`);
export type SpecialObjectKeys = typeof SpecialObjectKeyEnum.enum;

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
