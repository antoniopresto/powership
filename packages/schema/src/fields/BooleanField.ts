import { getTypeName } from '@backland/utils/lib/getTypeName';

import { FieldType, FieldTypeParser } from './FieldType';
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
