import { aggio, Aggregation, assertEqual, getByPath } from '@backland/utils';

import { CircularDeps } from '../CircularDeps';
import { Infer } from '../Infer';

import {
  FieldComposer,
  FieldType,
  FieldTypeParser,
  TAnyFieldType,
} from './FieldType';
import { FieldInput } from './_parseFields';

export type AliasFieldAggregation<Parent = any> = {
  aggregate: Aggregation<Parent> | Readonly<Aggregation<Parent>>;
  type: FieldInput;
};

export type AliasFieldDef = string | AliasFieldAggregation;

export class AliasField<InputDef extends AliasFieldDef = any> extends FieldType<
  InputDef extends { type: infer T } ? Infer<T> : any,
  'alias',
  AliasFieldDef
> {
  parse: FieldTypeParser<any>;

  utils: {
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

    const type = CircularDeps.createType(
      typeof def === 'string' ? 'any' : def.type
    );

    this.utils = {
      fieldType: type.__lazyGetter.field,
    };

    this.composer = {
      compose: (parent: Record<string, any>) => {
        if (typeof this.def === 'string') {
          return getByPath(parent, this.def);
        }
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
