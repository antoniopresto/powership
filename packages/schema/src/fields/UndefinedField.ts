import { getTypeName } from '@powership/utils';

import { FieldType, FieldTypeParser } from './FieldType';

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
