import type { FieldTypeParser } from '../applyValidator';

import { FieldType } from './FieldType';

export class AnyField extends FieldType<any, 'any', any> {
  parse: FieldTypeParser<any>;

  constructor(..._args: any) {
    super({
      def: undefined,
      name: 'any',
    });

    this.parse = this.applyParser({
      parse: (input) => {
        return input;
      },
    });
  }

  static create = (..._args: any): AnyField => {
    return new AnyField();
  };
}

Object.assign(powership, {
  AnyField,
});

declare global {
  interface powership {
    AnyField: typeof AnyField;
  }
}
