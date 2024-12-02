import { expectedType } from '@powership/utils';

import { FieldType } from './FieldType';
import { FieldTypeParser } from '../validator';

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

Object.assign(powership, {
  NullField,
});

declare global {
  interface powership {
    NullField: typeof NullField;
  }
}
