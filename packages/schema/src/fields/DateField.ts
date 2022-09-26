import { dateSerialize } from '@backland/utils/lib/dateSerialize';
import { expectedType } from '@backland/utils/lib/expectedType';

import { FieldType, FieldTypeParser } from './FieldType';

export type DateFieldDef = {
  autoCreate?: boolean;
  max?: Date;
  min?: Date;
};

export class DateField extends FieldType<
  Date,
  'date',
  DateFieldDef | undefined
> {
  parse: FieldTypeParser<Date>;

  constructor(def: DateFieldDef = {}) {
    super({ def: def, name: 'date' });
    const { min, max, autoCreate } = def;

    let minTime = 0;
    let maxTime = 0;

    expectedType({ max, min }, 'date', true);

    if (min !== undefined) {
      minTime = min.getTime();
    }

    if (max !== undefined) {
      maxTime = max.getTime();
    }

    this.parse = this.applyParser({
      parse: (input: unknown) => {
        expectedType({ value: input }, ['date', 'string', 'number']);
        const date = DateField.serialize(input);

        const inputTime = date.getTime();

        if (minTime !== 0 && inputTime < minTime && min) {
          throw new Error(
            `${date.toISOString()} is less than the minimum ${min.toISOString()}.`
          );
        }

        if (maxTime !== 0 && inputTime > maxTime && max) {
          throw new Error(
            `${date.toISOString()} is more than the maximum ${max.toISOString()}.`
          );
        }

        return date;
      },
      preParse(input: any) {
        if (autoCreate && input === undefined) {
          return new Date();
        }
        return input;
      },
    });
  }

  static create = (def: DateFieldDef = {}): DateField => {
    return new DateField(def);
  };

  static serialize(value: unknown): Date {
    const date = dateSerialize(value);

    if (!(date instanceof Date)) {
      throw new TypeError('Field error: value is not an instance of Date');
    }

    return date;
  }
}
