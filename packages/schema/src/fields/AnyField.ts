import { FieldType, FieldTypeParser } from './FieldType';

export class AnyField extends FieldType<any, 'any', undefined> {
  parse: FieldTypeParser<any>;

  constructor() {
    super('any', undefined);
    this.parse = this.applyParser({
      parse: (input) => {
        return input;
      },
    });
  }

  static create = (): AnyField => {
    return new AnyField();
  };
}
