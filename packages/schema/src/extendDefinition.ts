import {
  A,
  assertEqual,
  ensureArray,
  getTypeName,
  IsKnown,
  Merge,
  O,
  RuntimeError,
  simpleObjectClone,
} from '@backland/utils';

import { CircularDeps } from './CircularDeps';
import type { GraphType } from './GraphType/GraphType';
import { ObjectType, parseField, parseObjectDefinition } from './ObjectType';
import {
  DescribeField,
  DescribeObjectDefinition,
  SealedField,
} from './fields/Infer';
import { objectMetaFieldKey } from './fields/MetaFieldField';
import { ObjectDefinitionInput } from './fields/_parseFields';

export interface ExtendDefinition<Input, Origin> {
  definition: InnerDef<Input>;

  def(): this['definition'];

  exclude<K extends keyof this['definition']>(
    keys: K | K[]
  ): ExtendDefinition<{ object: Omit<InnerDef<Input>, K> }, Origin>;

  extendDefinition<V extends ObjectDefinitionInput>(
    value: V | ((current: this['definition']) => V)
  ): ExtendDefinition<
    { object: Merge<InnerDef<Input>, DescribeObjectDefinition<V>> },
    Origin
  >;

  graphType(name: string): GraphType<{ object: InnerDef<Input> }>;

  objectType(name?: string): ObjectType<InnerDef<Input>>;

  only<K extends keyof this['definition']>(
    keys: K | K[]
  ): ExtendDefinition<{ object: O.Pick<InnerDef<Input>, K> }, Origin>;

  optional(): ExtendDefinition<
    { object: MakeFieldOptional<InnerDef<Input>, keyof InnerDef<Input>> },
    Origin
  >;

  optional<Op extends keyof InnerDef<Input>>(
    keys: Op | Op[]
  ): ExtendDefinition<
    { object: MakeFieldOptional<InnerDef<Input>, Op> },
    Origin
  >;

  required(): ExtendDefinition<
    { object: MakeFieldRequired<InnerDef<Input>, keyof InnerDef<Input>> },
    Origin
  >;

  required<Op extends keyof InnerDef<Input>>(
    keys: Op | Op[]
  ): ExtendDefinition<
    { object: MakeFieldRequired<InnerDef<Input>, Op> },
    Origin
  >;
}

export function extendDefinition<Input>(
  input: Input
): ExtendDefinition<Input, Input> {
  if (!input || typeof input !== 'object') {
    throw new RuntimeError(
      `Expected typeof input to be "object", found ${getTypeName(input)}`,
      { input }
    );
  }

  let obj: Record<string, any> = input;

  type R = ExtendDefinition<Input, Input>;

  if (
    typeof obj === 'object' &&
    obj.type === 'object' &&
    obj.def &&
    typeof obj.def === 'object'
  ) {
    return extendDefinition(obj.def) as unknown as R;
  }

  if (obj['object'] && typeof obj['object'] === 'object') {
    return extendDefinition(obj.object) as unknown as R;
  }

  if (CircularDeps.GraphType.is(obj)) {
    // @ts-ignore
    return extendDefinition(obj.definition) as unknown as R;
  }

  if (CircularDeps.ObjectType.is(obj)) {
    // @ts-ignore
    return extendDefinition(obj.definition) as unknown as R;
  }

  let clone: any = simpleObjectClone(
    parseObjectDefinition(obj, { deep: { omitMeta: true } }).definition
  );

  const res = {
    def() {
      if (objectMetaFieldKey in clone) {
        delete clone[objectMetaFieldKey];
      }

      return clone;
    },

    exclude(keys) {
      const exclude = ensureArray(keys);
      exclude.forEach((key) => {
        delete clone[key];
      });
      // @ts-ignore
      return extendDefinition(clone);
    },

    extendDefinition(arg) {
      const ext = typeof arg === 'function' ? arg(res.def()) : arg;
      assertEqual(getTypeName(ext), 'Object');
      clone = Object.assign(
        clone,
        parseObjectDefinition(ext, { omitMeta: true }).definition
      );
      return extendDefinition(clone);
    },

    graphType(name) {
      return name
        ? CircularDeps.createType(name, { object: res.def() as any })
        : CircularDeps.createType({ object: res.def() as any });
    },

    objectType(name) {
      return name
        ? CircularDeps.ObjectType.createObjectType(name, res.def() as any)
        : CircularDeps.ObjectType.createObjectType(res.def() as any);
    },

    only(keys) {
      const only = ensureArray(keys);
      Object.keys(clone).forEach((key: any) => {
        if (only && !only.includes(key)) {
          delete clone[key];
        }
      });
      return extendDefinition(clone);
    },

    optional(keys = Object.keys(clone)) {
      const optional = ensureArray(keys);

      optional.forEach((key) => {
        if (getTypeName(clone[key]) !== 'Object') {
          throw new RuntimeError(
            `Expected field ${key} to be a final object definition`,
            {
              input,
              key,
              value: clone[key],
            }
          );
        }
        clone[key] = {
          ...parseField(clone[key]),
          optional: true,
        };
      });

      return extendDefinition(clone);
    },

    required(keys?: unknown) {
      const required = ensureArray(keys || Object.keys(clone)) as string[];

      required.forEach((key) => {
        if (getTypeName(clone[key]) !== 'Object') {
          throw new RuntimeError(
            `Expected field ${key} to be a final object definition`,
            {
              input,
              key,
              value: clone[key],
            }
          );
        }
        clone[key] = {
          ...parseField(clone[key]),
          optional: false,
        };
      });

      return extendDefinition(clone);
    },
  };

  return res as any;
}

export const extend = extendDefinition;

export type InnerDef<Input> =
  //
  (
    [Input] extends [object]
      ? //
        DescribeField<Input> extends infer R
        ? IsKnown<R> extends 1
          ? _InnerDef<R>
          : DescribeObjectDefinition<Input>
        : never
      : never
  ) extends infer R
    ? { [K in keyof R]: R[K] } & {}
    : {};

export type _InnerDef<R> = 'type' extends keyof R
  ? 'def' extends keyof R
    ? R['type'] extends 'object'
      ? R['def'] extends object
        ? DescribeObjectDefinition<R['def']>
        : never
      : never
    : never
  : never;

export type MakeFieldOptional<
  Object extends object,
  OptionalField extends A.Key
> = OverrideField<Object, OptionalField, { optional: true }>;

export type MakeFieldRequired<
  Object extends object,
  OptionalField extends A.Key
> = OverrideField<Object, OptionalField, { optional: false }>;

export type OverrideField<
  Object extends object,
  Field extends A.Key,
  Extend extends object
> = {
  [K in keyof Object as K extends string ? K : never]: K extends Field
    ? SealedField<Omit<DescribeField<Object[K]>, keyof Extend> & Extend>
    : Object[K];
};
