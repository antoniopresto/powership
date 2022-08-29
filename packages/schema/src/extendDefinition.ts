import {
  assertEqual,
  BinKnown,
  ensureArray,
  getTypeName,
  IsKnown,
  RuntimeError,
  simpleObjectClone,
} from '@darch/utils';

import { GraphType } from './GraphType/GraphType';
import { ObjectType, parseObjectDefinition } from './ObjectType';
import { objectMetaFieldKey } from './fields/MetaFieldField';
import { ObjectDefinitionInput, ParseFields } from './fields/_parseFields';

export interface ExtendDefinitionResult<Parsed, Origin> {
  exclude<K extends DefKeys<Parsed>>(
    keys: K | K[]
  ): ExtendDefinitionResult<ExcludeField<InnerDef<Parsed>, K>, Origin>;

  extend<V extends ObjectDefinitionInput>(
    value: V
  ): ExtendDefinitionResult<
    _Override<InnerDef<Parsed>, ParseFields<V>>,
    Origin
  >;

  only<K extends DefKeys<Parsed>>(
    keys: K | K[]
  ): ExtendDefinitionResult<OnlyFields<InnerDef<Parsed>, K>, Origin>;

  optional<K extends DefKeys<Parsed>>(
    keys: K | K[]
  ): ExtendDefinitionResult<MakeFieldOptional<InnerDef<Parsed>, K>, Origin>;

  required<K extends DefKeys<Parsed>>(
    keys: K | K[]
  ): ExtendDefinitionResult<MakeFieldRequired<InnerDef<Parsed>, K>, Origin>;

  value(): InnerDef<Parsed> extends infer Res
    ? { [K in keyof Res]: Res[K] } & {}
    : never;
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

  if (GraphType.is(obj)) {
    return extendDefinition(obj.definition) as unknown as R;
  }

  if (ObjectType.is(obj)) {
    return extendDefinition(obj.definition) as unknown as R;
  }

  let clone: any = simpleObjectClone(obj);

  return {
    exclude(keys) {
      const exclude = ensureArray(keys);
      exclude.forEach((key) => {
        delete clone[key];
      });
      return extendDefinition(clone);
    },

    extend(ext) {
      assertEqual(getTypeName(ext), 'Object');
      clone = Object.assign(
        clone,
        parseObjectDefinition(ext, { omitMeta: true }).definition
      );
      return extendDefinition(clone);
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

    optional(keys) {
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

    required(keys) {
      const required = ensureArray(keys);

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
        clone[key].optional = false;
      });

      return extendDefinition(clone);
    },

    value() {
      if (objectMetaFieldKey in clone) {
        delete clone[objectMetaFieldKey];
      }

      return clone;
    },
  };
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
    : keyof Input;

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
  [K in keyof BinKnown<O, Omit<T, keyof O> & O, T>]: BinKnown<
    O,
    Omit<T, keyof O> & O,
    T
  >[K];
} & {};

export type OverrideField<Object, Field, _Extend> = [IsKnown<Field>] extends [0]
  ? Object
  : {
      [K in Exclude<keyof Object, '__infer'>]: K extends Field
        ? _Override<Object[K], _Extend>
        : Object[K];
    };
