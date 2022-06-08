import { expectedType } from '@darch/utils/lib/expectedType';

import { FieldType, FieldTypeParser } from './FieldType';

export class IDField extends FieldType<string, 'ID', undefined> {
  parse: FieldTypeParser<string>;

  constructor() {
    super('ID', undefined);

    this.parse = this.applyParser({
      parse(input: string) {
        expectedType({ value: input }, 'string');
        return input;
      },
    });
  }

  static create = (): IDField => {
    return new IDField();
  };
}
