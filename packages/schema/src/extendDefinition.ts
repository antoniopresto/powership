import {
  assertEqual,
  BinKnown,
  ensureArray,
  getTypeName,
  IsKnown,
  RuntimeError,
  simpleObjectClone,
} from '@backland/utils';

import { CircularDeps } from './CircularDeps';
import type { GraphType } from './GraphType/GraphType';
import { ObjectType, parseObjectDefinition, ToFinalField } from './ObjectType';
import { objectMetaFieldKey } from './fields/MetaFieldField';
import { ObjectDefinitionInput, ParseFields } from './fields/_parseFields';

export interface ExtendDefinitionResult<Parsed, Origin> {
  def(): InnerDef<Parsed>;

  exclude<K extends DefKeys<Parsed>>(
    keys: K | K[]
  ): ExtendDefinitionResult<ExcludeField<InnerDef<Parsed>, K>, Origin>;

  extendDefinition<V extends ObjectDefinitionInput>(
    value: V | ((current: InnerDef<Parsed>) => V)
  ): ExtendDefinitionResult<
    _Override<InnerDef<Parsed>, ParseFields<V>>,
    Origin
  >;

  graphType(
    name: string
  ): InnerDef<Parsed> extends {}
    ? GraphType<{ object: InnerDef<Parsed> }>
    : never;

  objectType(
    name?: string
  ): InnerDef<Parsed> extends {} ? ObjectType<InnerDef<Parsed>> : never;

  only<K extends DefKeys<Parsed>>(
    keys: K | K[]
  ): ExtendDefinitionResult<OnlyFields<InnerDef<Parsed>, K>, Origin>;

  optional(): ExtendDefinitionResult<
    MakeFieldOptional<InnerDef<Parsed>, DefKeys<Parsed>>,
    Origin
  >;

  optional<K extends DefKeys<Parsed>>(
    keys: K | K[]
  ): ExtendDefinitionResult<MakeFieldOptional<InnerDef<Parsed>, K>, Origin>;

  required(): ExtendDefinitionResult<
    MakeFieldRequired<InnerDef<Parsed>, DefKeys<Parsed>>,
    Origin
  >;

  required<K extends DefKeys<Parsed>>(
    keys: K | K[]
  ): ExtendDefinitionResult<MakeFieldRequired<InnerDef<Parsed>, K>, Origin>;
}

export function extendDefinition<Input>(
  input: Input
): ExtendDefinitionResult<Input, Input> {
  if (!input || typeof input !== 'object') {
    throw new RuntimeError(
      `Expected typeof input to be "object", found ${getTypeName(input)}`,
      { input }
    );
  }

  let obj: Record<string, any> = input;

  type R = ExtendDefinitionResult<Input, Input>;

  if (
    typeof obj === 'object' &&
    obj.type === 'object' &&
    obj.def &&
    typeof obj.def === 'object'
  ) {
    return extendDefinition(obj.def) as unknown as R;
  }

  if (CircularDeps.GraphType.is(obj)) {
    return extendDefinition(obj.definition) as unknown as R;
  }

  if (CircularDeps.ObjectType.is(obj)) {
    // @ts-ignore
    return extendDefinition(obj.definition) as unknown as R;
  }

  let clone: any = simpleObjectClone(obj);

  const res: ExtendDefinitionResult<Input, Input> = {
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

    graphType(name): any {
      return name
        ? CircularDeps.createType(name, { object: res.def() as any })
        : CircularDeps.createType({ object: res.def() as any });
    },

    objectType(name): any {
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
        clone[key].optional = true;
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
        delete clone[key].optional;
      });

      return extendDefinition(clone);
    },
  };

  return res;
}

export const extend = extendDefinition;

export type InnerDef<Input> =
  //
  Input extends { def: infer Def; type: 'object' }
    ? InnerDef<ParseFields<Def>>
    : Input extends { definition: infer Definition }
    ? InnerDef<Definition>
    : Input;

export type DefKeys<Input> =
  //
  Input extends { def: infer Def; type: 'object' }
    ? DefKeys<Def>
    : Input extends { definition: infer Definition }
    ? DefKeys<Definition>
    : keyof Input extends infer K
    ? K extends string
      ? K
      : never
    : never;

export type MakeFieldOptional<Object, OptionalField> = OverrideField<
  Object,
  OptionalField,
  { optional: true }
>;

export type MakeFieldRequired<Object, Field> = OverrideField<
  Object,
  Field,
  { optional: false }
>;

export type ExcludeField<Object, Field> = [IsKnown<Field>] extends [0]
  ? Object
  : [Field] extends [keyof Object]
  ? Object extends Record<string, unknown>
    ? {
        [K in keyof Object as K extends Field ? never : K]: Object[K];
      }
    : Object
  : Object;

export type OnlyFields<Object, Field> = [IsKnown<Field>] extends [0]
  ? Object
  : Object extends Record<string, unknown>
  ? {
      [K in keyof Object as K extends Field ? K : never]: Object[K];
    }
  : Object;

type _Override<T, O> = {
  [K in keyof BinKnown<O, Omit<T, keyof O> & O, T> as K extends string
    ? K
    : never]: BinKnown<O, Omit<T, keyof O> & O, T>[K];
} & {};

export type OverrideField<Object, Field, _Extend> = [IsKnown<Field>] extends [0]
  ? Object
  : {
      [K in Exclude<keyof Object, '__infer'>]: K extends Field
        ? _Override<ToFinalField<Object[K]>, _Extend>
        : Object[K];
    };
