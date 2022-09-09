import { memoize } from '@brabo/utils/lib/memoize';

import { AnyField } from './AnyField';
import { BooleanField } from './BooleanField';
import { CursorField } from './CursorField';
import { DateField } from './DateField';
import { EmailField } from './EmailField';
import { EnumField } from './EnumField';
import { FloatField } from './FloatField';
import { IDField } from './IDField';
import { IntField } from './IntField';
import { LiteralField } from './LitarealField';
import { MetaField } from './MetaFieldField';
import { NullField } from './NullField';
import { ObjectField } from './ObjectField';
import { RecordField } from './RecordField';
import { StringField } from './StringField';
import { UlidField } from './UlidField';
import { UndefinedField } from './UndefinedField';
import { UnionField } from './UnionField';
import { UnknownField } from './UnknownField';
import { FieldTypeName } from './_fieldDefinitions';

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
  any: AnyField,
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

export const create: FieldCreators = Object.entries(types).reduce(
  (acc, [key, { create }]) => {
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
