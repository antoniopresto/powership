import type { FieldTypeName } from './_fieldDefinitions';

function createFieldNames<Arg extends { [K in FieldTypeName]: any }>(
  input: Readonly<Arg>
): Readonly<Arg> {
  const res = Object.create(null);
  Object.entries(input).forEach(([k, val]) => (res[k] = val));
  Object.freeze(res);
  return res;
}

export const fieldTypesClassMap = createFieldNames({
  ID: 'IDField',
  alias: 'AliasField',
  any: 'AnyField',
  array: 'ArrayField',
  boolean: 'BooleanField',
  cursor: 'CursorField',
  date: 'DateField',
  email: 'EmailField',
  enum: 'EnumField',
  float: 'FloatField',
  int: 'IntField',
  literal: 'LiteralField',
  meta: 'MetaField',
  null: 'NullField',
  object: 'ObjectField',
  phone: 'PhoneField',
  record: 'RecordField',
  string: 'StringField',
  ulid: 'UlidField',
  undefined: 'UndefinedField',
  union: 'UnionField',
  unknown: 'UnknownField',
} as const);

export type FieldTypesClassMap = typeof fieldTypesClassMap;
export type FieldTypeNames = keyof FieldTypesClassMap;

export const fieldTypeNames = Object.keys(
  fieldTypesClassMap
) as FieldTypeNames[];
