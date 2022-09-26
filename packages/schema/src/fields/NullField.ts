import { expectedType } from '@backland/utils/lib/expectedType';

import { FieldType, FieldTypeParser } from './FieldType';

export class NullField extends FieldType<string, 'null', undefined> {
  parse: FieldTypeParser<string>;

  constructor() {
    super({ def: undefined, name: 'null' });

    this.parse = this.applyParser({
      parse(input: string) {
        expectedType({ value: input }, 'null');
        return input;
      },
      preParse(input: any) {
        if (input === undefined) return null;
        return input;
      },
    });
  }

  static create = (): NullField => {
    return new NullField();
  };
}
