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
  int: 'IntField',
  ID: 'IDField',
  float: 'FloatField',
  string: 'StringField',
  boolean: 'BooleanField',
  enum: 'EnumField',
  union: 'UnionField',
  object: 'ObjectField',
  email: 'EmailField',
  ulid: 'UlidField',
  cursor: 'CursorField',
  date: 'DateField',
  unknown: 'UnknownField',
  any: 'AnyField',
  undefined: 'UndefinedField',
  record: 'RecordField',
  null: 'NullField',
  meta: 'MetaField',
  literal: 'LiteralField',
} as const);

export type FieldTypesClassMap = typeof fieldTypesClassMap;
export type FieldTypeNames = keyof FieldTypesClassMap;

export const fieldTypeNames = Object.keys(
  fieldTypesClassMap
) as FieldTypeNames[];
