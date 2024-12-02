import { getTypeName } from '@powership/utils';

import { FieldType } from './FieldType';
import { FieldTypeParser } from '../validator';

export class BooleanField extends FieldType<boolean, 'boolean', undefined> {
  parse: FieldTypeParser<boolean>;

  constructor() {
    super({
      def: undefined,
      name: 'boolean',
    });
    this.parse = this.applyParser({
      parse: (input) => {
        if (typeof input !== 'boolean') {
          throw new Error(`Expected boolean, found ${getTypeName(input)}`);
        }
        return input;
      },
    });
  }

  static create = (): BooleanField => {
    return new BooleanField();
  };
}

Object.assign(powership, {
  BooleanField,
});

declare global {
  interface powership {
    BooleanField: typeof BooleanField;
  }
}
