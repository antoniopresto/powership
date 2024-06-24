import {
  aggio,
  Aggregation,
  assertEqual,
  nonNullValues,
  ObjectPath,
  pick,
} from '@powership/utils';

import type { Infer } from '../Infer';

import * as In from '../internal';
import type { FieldComposer, TAnyFieldType } from './FieldType';
import type { FieldInput } from './_parseFields';

export type AliasFieldAggregation<Parent = any> = {
  type: FieldInput;
} & (
  | {
      from: ObjectPath<Parent>;
      aggregate: Aggregation<Parent> | Readonly<Aggregation<Parent>>;
    }
  | {
      aggregate: Aggregation<Parent> | Readonly<Aggregation<Parent>>;
      from?: undefined;
    }
  | { from: ObjectPath<Parent>; aggregate?: undefined }
);

export type AliasFieldDef = string | AliasFieldAggregation;

export class AliasField<
  InputDef extends AliasFieldDef = any
> extends In.FieldType<
  InputDef extends { type: infer T } ? Infer<T> : any,
  'alias',
  AliasFieldDef
> {
  parse: In.FieldTypeParser<any>;

  utils = {} as {
    fieldType: TAnyFieldType;
  };

  composer: FieldComposer;

  static is(input: any): input is AliasField {
    return input?.__isFieldType && input?.type === 'alias';
  }

  static assert(input: any): asserts input is AliasField {
    assertEqual(this.is(input), true, 'NOT_ALIAS_FIELD');
  }

  constructor(def: AliasFieldDef) {
    super({
      def,
      name: 'alias',
    });

    let fieldType: any = null;

    Object.defineProperty(this.utils, 'fieldType', {
      get() {
        return (fieldType =
          fieldType ||
          In.createType(typeof def === 'string' ? 'any' : def.type)
            .__lazyGetter.field);
      },
    });

    this.composer = {
      compose: (parent: Record<string, any>) => {
        if (typeof this.def === 'string') {
          return pick(parent, this.def);
        }
        if (this.def.from) {
          parent = pick(parent, this.def.from) as any;
          if (!this.def.aggregate) return parent;
        }

        nonNullValues({ aggregate: this.def.aggregate });
        return aggio([parent], this.def.aggregate as Aggregation<any>);
      },
      def: this.utils.fieldType.asFinalFieldDef,
      validate: (value) => {
        return this.utils.fieldType.validate(value);
      },
    };

    this.parse = (input) => {
      return this.utils.fieldType.parse(input);
    };
  }

  static create = (def: AliasFieldDef): AliasField => {
    return new AliasField(def);
  };
}
