import { assertEqual } from '@backland/utils';
import { getByPath } from '@backland/utils';

import { FieldType, FieldTypeParser } from './FieldType';

export type AliasFieldDef = string;

export class AliasField extends FieldType<any, 'alias', AliasFieldDef> {
  parse: FieldTypeParser<any>;

  compose = (parent: Record<string, any>) => {
    return getByPath(parent, this.def);
  };

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

    this.parse = (input) => {
      return input; // value is expected to be pre validated
    };
  }

  static create = (def: AliasFieldDef): AliasField => {
    return new AliasField(def);
  };
}
