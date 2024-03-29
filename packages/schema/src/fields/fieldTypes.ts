import { memoize } from '@powership/utils';

import { AliasField } from './AliasField';
import { AnyField } from './AnyField';
import { ArrayField } from './ArrayField';
import { BooleanField } from './BooleanField';
import { CursorField } from './CursorField';
import { DateField } from './DateField';
import { EmailField } from './EmailField';
import { EnumField } from './EnumField';
import { FloatField } from './FloatField';
import { IDField } from './IDField';
import { IntField } from './IntField';
// import { ListField } from './ListField';
import { LiteralField } from './LiteralField';
import { MetaField } from './MetaFieldField';
import { NullField } from './NullField';
import { ObjectField } from './ObjectField';
import { PhoneField } from './PhoneField';
import { RecordField } from './RecordField';
import { StringField } from './StringField';
import { UlidField } from './UlidField';
import { UndefinedField } from './UndefinedField';
import { UnionField } from './UnionField';
import { UnknownField } from './UnknownField';
import type { FieldTypeName } from './_fieldDefinitions';

export * from './AnyField';
export * from './BooleanField';
export * from './CursorField';
export * from './DateField';
export * from './EmailField';
export * from './EnumField';
export * from './FloatField';
export * from './IDField';
export * from './IntField';
// export * from './ListField';
export * from './LiteralField';
export * from './MetaFieldField';
export * from './NullField';
export * from './ObjectField';
export * from './RecordField';
export * from './StringField';
export * from './UlidField';
export * from './UndefinedField';
export * from './UnionField';
export * from './UnknownField';
export * from './AliasField';
export * from './PhoneField';
export * from './ArrayField';

function createConstructors<T extends { [K in FieldTypeName]: any }>(
  input: T
): T {
  const res = Object.create(null);
  Object.entries(input).forEach(([k, val]) => (res[k] = val));
  Object.freeze(res);
  return res;
}

export const types = createConstructors({
  ID: IDField,
  alias: AliasField,
  any: AnyField,
  array: ArrayField,
  boolean: BooleanField,
  cursor: CursorField,
  date: DateField,
  email: EmailField,
  enum: EnumField,
  float: FloatField,
  int: IntField,
  literal: LiteralField,
  meta: MetaField,
  null: NullField,
  object: ObjectField,
  phone: PhoneField,
  record: RecordField,
  string: StringField,
  ulid: UlidField,
  undefined: UndefinedField,
  union: UnionField,
  unknown: UnknownField,
});

export type Types = typeof types;

export type FieldCreators = Readonly<{
  [K in FieldTypeName]: Types[K]['create'];
}>;

export const create: FieldCreators = Object.entries(types as any).reduce(
  // @ts-ignore
  (
    acc,
    [
      key,
      // @ts-ignore
      { create },
    ]
  ): any => {
    return {
      ...acc,
      [key]: create,
    };
  },
  {} as FieldCreators
);

function _isFieldTypeName(t: any): t is FieldTypeName {
  return typeof t === 'string' && types[t];
}

export const isFieldTypeName = memoize(_isFieldTypeName);
