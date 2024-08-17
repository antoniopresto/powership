import { memoize } from '@powership/utils';

import type { FieldTypeName } from './_fieldDefinitions';

import '../__globals__';

function createConstructors<T extends { [K in FieldTypeName]: any }>(
  input: T
): T {
  const res = Object.create(null);
  Object.entries(input).forEach(([k, val]) => (res[k] = val));
  Object.freeze(res);
  return res;
}

const createTypes = () =>
  createConstructors({
    ID: powership.IDField,
    alias: powership.AliasField,
    any: powership.AnyField,
    array: powership.ArrayField,
    boolean: powership.BooleanField,
    cursor: powership.CursorField,
    date: powership.DateField,
    email: powership.EmailField,
    enum: powership.EnumField,
    float: powership.FloatField,
    int: powership.IntField,
    literal: powership.LiteralField,
    meta: powership.MetaField,
    null: powership.NullField,
    object: powership.ObjectField,
    phone: powership.PhoneField,
    record: powership.RecordField,
    string: powership.StringField,
    ulid: powership.UlidField,
    undefined: powership.UndefinedField,
    union: powership.UnionField,
    unknown: powership.UnknownField,
  });

export const types = new Proxy(
  Object.create(null) as ReturnType<typeof createTypes>,
  {
    get(_, key: string) {
      return createTypes()[key];
    },
  }
);

export type Types = typeof types;

export type FieldCreators = Readonly<{
  [K in FieldTypeName]: Types[K]['create'];
}>;

export const create: FieldCreators = new Proxy(Object.create(null), {
  get(_, key) {
    return createTypes()[key].create;
  },
});

function _isFieldTypeName(t: any): t is FieldTypeName {
  return typeof t === 'string' && types[t];
}

const isFieldTypeName = memoize(_isFieldTypeName);

Object.assign(powership, {
  create,
  types,
  isFieldTypeName,
});

declare global {
  interface powership {
    create: typeof create;
    types: typeof types;
    isFieldTypeName: typeof isFieldTypeName;
  }
}
