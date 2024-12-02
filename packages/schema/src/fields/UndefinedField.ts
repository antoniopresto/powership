import { getTypeName } from '@powership/utils';

import { FieldType } from './FieldType';
import { FieldTypeParser } from '../validator';

export class UndefinedField extends FieldType<
  undefined,
  'undefined',
  undefined
> {
  parse: FieldTypeParser<undefined>;

  constructor() {
    super({ def: undefined, name: 'undefined' });
    this.parse = this.applyParser({
      parse: (input) => {
        if (typeof input !== 'undefined') {
          throw new Error(`Expected undefined, found ${getTypeName(input)}`);
        }
        return input;
      },
    });
  }

  static create = (): UndefinedField => {
    return new UndefinedField();
  };
}

Object.assign(powership, {
  UndefinedField,
});

declare global {
  interface powership {
    UndefinedField: typeof UndefinedField;
  }
}
