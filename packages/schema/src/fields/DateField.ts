import { expectedType } from '@darch/utils/lib/expectedType';

import { FieldType, FieldTypeParser } from './FieldType';

export type DateFieldDef = {
  min?: Date;
  max?: Date;
};

export class DateField extends FieldType<
  Date,
  'date',
  DateFieldDef | undefined
> {
  parse: FieldTypeParser<Date>;

  constructor(def: DateFieldDef = {}) {
    super('date', def);
    const { min, max } = def;

    let minTime = 0;
    let maxTime = 0;

    expectedType({ min, max }, 'date', true);

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
    });
  }

  static create = (def: DateFieldDef = {}): DateField => {
    return new DateField(def);
  };

  static serialize(value: unknown): Date {
    // Valid string values from server side:
    // 2016-02-02
    // 2016-02-02T00:13:22Z
    // 2016-02-02T00:13:22.000Z
    if (
      typeof value === 'string' &&
      /^(\d{4})-(\d{2})-(\d{2})(T((\d{2}):(\d{2}):(\d{2}))(\.(\d{1,3}))?Z)?$/.test(
        value
      )
    ) {
      return new Date(value);
    }

    if (typeof value === 'number' && Number.isFinite(value)) {
      return new Date(value);
    }

    if (!(value instanceof Date)) {
      throw new TypeError('Field error: value is not an instance of Date');
    }

    if (Number.isNaN(value.getTime())) {
      throw new TypeError('Field error: value is an invalid Date');
    }

    return value;
  }
}
