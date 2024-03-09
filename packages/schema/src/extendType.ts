import {
  assertEqual,
  Cast,
  getTypeName,
  simpleObjectClone,
  wrapError,
} from '@powership/utils';

import type { GraphType } from './GraphType/GraphType';
import * as Internal from './internal';

export interface ExtendType<Input> {
  definition: Internal.DescribeWithoutSeal<Input>;

  def(): this['definition'];

  extend<V extends Internal.FinalFieldDefinition>(
    value: V | ((current: this['definition']) => V),
  ): ExtendType<Omit<this['definition'], keyof V> & V>;

  graphType(
    name?: string,
  ): GraphType<Cast<this['definition'], Internal.FinalFieldDefinition>>;

  objectType(
    name?: string,
  ): Internal.ObjectType<
    Cast<
      this['definition'],
      { def: { [K: string]: Internal.FinalFieldDefinition } }
    >['def']
  >;

  optional(): ExtendType<MakeTypeOptional<this['definition']>>;

  required(): ExtendType<MakeTypeRequired<this['definition']>>;

  list(): ExtendType<MakeTypeList<this['definition']>>;

  single(): ExtendType<MakeTypeSingle<this['definition']>>;
}

export function extendType<Input>(input: Input): ExtendType<Input> {
  const clone = wrapError(() => {
    const parsed = Internal.parseField(input as any);
    const withoutCache = Internal.deleteCachedFieldInstance(parsed);
    return simpleObjectClone(withoutCache);
  }, extendType);

  const res = {
    def() {
      return clone;
    },

    extend(arg) {
      const ext = typeof arg === 'function' ? arg(res.def()) : arg;
      assertEqual(getTypeName(ext), 'Object');
      return extendType({
        ...clone,
        ...arg,
      });
    },

    graphType(name) {
      const def = res.def();
      return name ? Internal.createType(name, def) : Internal.createType(def);
    },

    objectType(name) {
      const { def, type } = res.def();

      if (type !== 'object') {
        throw new Error(`Can't convert "${type}" to ObjectType.`);
      }

      if (Internal.objectMetaFieldKey in def) {
        delete def[Internal.objectMetaFieldKey];
      }

      return name
        ? Internal.createObjectType(name, def)
        : Internal.createObjectType(def);
    },

    optional() {
      return extendType({
        ...clone,
        optional: true,
      });
    },

    required() {
      return extendType({
        ...clone,
        optional: false,
      });
    },

    list() {
      return extendType({
        array: { of: clone },
      });
    },

    single() {
      return extendType({
        ...clone,
        list: false,
      });
    },
  };

  return res as any;
}

export type MakeTypeOptional<Type> = Internal.DescribeAndOverrideField<
  Type,
  { optional: true }
>;

export type MakeTypeRequired<Type> = Internal.DescribeAndOverrideField<
  Type,
  { optional: false }
>;

export type MakeTypeList<Type> = { array: { of: Type } };

export type MakeTypeSingle<Type> = Internal.DescribeAndOverrideField<
  Type,
  { list: false }
>;
