import {
  assertEqual,
  Cast,
  getTypeName,
  simpleObjectClone,
  wrapError,
} from '@powership/utils';

import { createType, GraphType } from './GraphType/GraphType';
import type { ObjectType } from './ObjectType';
import type {
  DescribeAndOverrideField,
  DescribeWithoutSeal,
} from './fields/Infer';
import type { FinalFieldDefinition } from './fields/_parseFields';

export interface ExtendType<Input> {
  definition: DescribeWithoutSeal<Input>;

  def(): this['definition'];

  extend<V extends FinalFieldDefinition>(
    value: V | ((current: this['definition']) => V)
  ): ExtendType<Omit<this['definition'], keyof V> & V>;

  graphType(
    name?: string
  ): GraphType<Cast<this['definition'], FinalFieldDefinition>>;

  objectType(
    name?: string
  ): ObjectType<
    Cast<
      this['definition'],
      { def: { [K: string]: FinalFieldDefinition } }
    >['def']
  >;

  optional(): ExtendType<MakeTypeOptional<this['definition']>>;

  required(): ExtendType<MakeTypeRequired<this['definition']>>;

  list(): ExtendType<MakeTypeList<this['definition']>>;

  single(): ExtendType<MakeTypeSingle<this['definition']>>;
}

function extendType<Input>(input: Input): ExtendType<Input> {
  const clone = wrapError(() => {
    const parsed = powership.parseField(input as any);
    const withoutCache = powership.deleteCachedFieldInstance(parsed);
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
      return name ? createType(name, def) : createType(def);
    },

    objectType(name) {
      const { def, type } = res.def();

      if (type !== 'object') {
        throw new Error(`Can't convert "${type}" to ObjectType.`);
      }

      if (powership.objectMetaFieldKey in def) {
        delete def[powership.objectMetaFieldKey];
      }

      return name
        ? powership.createObjectType(name, def)
        : powership.createObjectType(def);
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

export type MakeTypeOptional<Type> = DescribeAndOverrideField<
  Type,
  { optional: true }
>;

export type MakeTypeRequired<Type> = DescribeAndOverrideField<
  Type,
  { optional: false }
>;

export type MakeTypeList<Type> = { array: { of: Type } };

export type MakeTypeSingle<Type> = DescribeAndOverrideField<
  Type,
  { list: false }
>;

Object.assign(powership, {
  extendType,
});

declare global {
  interface powership {
    extendType: typeof extendType;
  }
}
