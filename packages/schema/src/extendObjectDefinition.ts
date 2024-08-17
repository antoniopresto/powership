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
} from '@powership/utils';

import type { GraphType } from './GraphType/GraphType';
import type { ObjectType } from './ObjectType';
import type {
  DescribeField,
  DescribeObjectDefinition,
  SealedField,
} from './fields/Infer';
import type { ObjectDefinitionInput } from './fields/_parseFields';

export interface ExtendObjectDefinition<Input, Origin> {
  definition: InnerDef<Input>;

  def(): this['definition'];

  exclude<K extends keyof this['definition']>(
    keys: K | K[]
  ): ExtendObjectDefinition<{ object: Omit<InnerDef<Input>, K> }, Origin>;

  extendObjectDefinition<V extends ObjectDefinitionInput>(
    value: V | ((current: this['definition']) => V)
  ): ExtendObjectDefinition<
    { object: Merge<InnerDef<Input>, DescribeObjectDefinition<V>> },
    Origin
  >;

  graphType(name: string): GraphType<{ object: InnerDef<Input> }>;

  objectType(name?: string): ObjectType<InnerDef<Input>>;

  only<K extends keyof this['definition']>(
    keys: K | K[]
  ): ExtendObjectDefinition<{ object: O.Pick<InnerDef<Input>, K> }, Origin>;

  /**
   * Alias to `only`
   * @param keys
   */
  pick<K extends keyof this['definition']>(
    keys: K | K[]
  ): ExtendObjectDefinition<{ object: O.Pick<InnerDef<Input>, K> }, Origin>;

  optional(): ExtendObjectDefinition<
    { object: MakeFieldOptional<InnerDef<Input>, keyof InnerDef<Input>> },
    Origin
  >;

  optional<Op extends keyof InnerDef<Input>>(
    keys: Op | Op[]
  ): ExtendObjectDefinition<
    { object: MakeFieldOptional<InnerDef<Input>, Op> },
    Origin
  >;

  required(): ExtendObjectDefinition<
    { object: MakeFieldRequired<InnerDef<Input>, keyof InnerDef<Input>> },
    Origin
  >;

  required<Op extends keyof InnerDef<Input>>(
    keys: Op | Op[]
  ): ExtendObjectDefinition<
    { object: MakeFieldRequired<InnerDef<Input>, Op> },
    Origin
  >;
}

function extendObjectDefinition<Input>(
  input: Input
): ExtendObjectDefinition<Input, Input> {
  if (!input || typeof input !== 'object') {
    throw new RuntimeError(
      `Expected typeof input to be "object", found ${getTypeName(input)}`,
      { input }
    );
  }

  let obj: Record<string, any> = input;

  type R = ExtendObjectDefinition<Input, Input>;

  if (
    typeof obj === 'object' &&
    obj.type === 'object' &&
    obj.def &&
    typeof obj.def === 'object'
  ) {
    return extendObjectDefinition(obj.def) as unknown as R;
  }

  if (obj['object'] && typeof obj['object'] === 'object') {
    return extendObjectDefinition(obj.object) as unknown as R;
  }

  if (powership.GraphType.is(obj)) {
    // @ts-ignore
    return extendObjectDefinition(obj.definition) as unknown as R;
  }

  if (powership.ObjectType.is(obj)) {
    // @ts-ignore
    return extendObjectDefinition(obj.definition) as unknown as R;
  }

  let clone: any = powership.deleteCachedFieldInstance(
    simpleObjectClone(
      powership.parseObjectDefinition(
        powership.deleteCachedFieldInstance(obj),
        {
          deep: { omitMeta: true },
        }
      ).definition
    )
  );

  const res = {
    def() {
      if (powership.objectMetaFieldKey in clone) {
        delete clone[powership.objectMetaFieldKey];
      }

      return clone;
    },

    exclude(keys) {
      const exclude = ensureArray(keys);
      exclude.forEach((key) => {
        delete clone[key];
      });
      // @ts-ignore
      return extendObjectDefinition(clone);
    },

    extendObjectDefinition(arg) {
      const ext = typeof arg === 'function' ? arg(res.def()) : arg;
      assertEqual(getTypeName(ext), 'Object');
      clone = Object.assign(
        clone,
        powership.parseObjectDefinition(ext, { omitMeta: true }).definition
      );
      return extendObjectDefinition(clone);
    },

    graphType(name) {
      return name
        ? powership.createType(name, { object: res.def() as any })
        : powership.createType({ object: res.def() as any });
    },

    objectType(name) {
      return name
        ? powership.createObjectType(name, res.def() as any)
        : powership.createObjectType(res.def() as any);
    },

    only(keys) {
      const only = ensureArray(keys);
      Object.keys(clone).forEach((key: any) => {
        if (only && !only.includes(key)) {
          delete clone[key];
        }
      });
      return extendObjectDefinition(clone);
    },

    pick(keys) {
      return res.pick(keys);
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
          ...powership.parseField(clone[key]),
          optional: true,
        };
      });

      return extendObjectDefinition(clone);
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
          ...powership.parseField(clone[key]),
          optional: false,
        };
      });

      return extendObjectDefinition(clone);
    },
  };

  return res as any;
}

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

Object.assign(powership, {
  extendObjectDefinition,
});

declare global {
  interface powership {
    extendObjectDefinition: typeof extendObjectDefinition;
  }
}
