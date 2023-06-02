import {
  assertEqual,
  Cast,
  getTypeName,
  simpleObjectClone,
  wrapError,
} from '@swind/utils';

import { CircularDeps } from './CircularDeps';
import type { GraphType } from './GraphType/GraphType';
import {
  FinalFieldDefinition,
  ObjectType,
  parseField,
} from './ObjectType/ObjectType';
import { SchemaParser } from './ObjectType/SchemaParser';
import { DescribeAndOverrideField, DescribeWithoutSeal } from './fields/Infer';
import { objectMetaFieldKey } from './fields/MetaFieldField';

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

export function extendType<Input>(input: Input): ExtendType<Input> {
  const clone = wrapError(() => {
    const parsed = parseField(input as any);
    const withoutCache = SchemaParser.deleteCachedFieldInstance(parsed);
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
      return name
        ? CircularDeps.createType(name, def)
        : CircularDeps.createType(def);
    },

    objectType(name) {
      const { def, type } = res.def();

      if (type !== 'object') {
        throw new Error(`Can't convert "${type}" to ObjectType.`);
      }

      if (objectMetaFieldKey in def) {
        delete def[objectMetaFieldKey];
      }

      return name
        ? CircularDeps.ObjectType.createObjectType(name, def)
        : CircularDeps.ObjectType.createObjectType(def);
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
