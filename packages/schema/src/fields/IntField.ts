import { expectedType } from '@powership/utils';

import type { FieldTypeParser } from '../applyValidator';

import { FieldType } from './FieldType';

export type IntFieldDef = {
  max?: number;
  min?: number;
};

export class IntField extends FieldType<
  number,
  'int',
  IntFieldDef | undefined
> {
  parse: FieldTypeParser<number>;

  constructor(def: IntFieldDef = {}) {
    super({ def: def, name: 'int' });
    const { min, max } = def;

    expectedType({ max, min }, 'number', true);

    this.parse = this.applyParser({
      parse: (input: number) => {
        expectedType({ value: input }, 'number');

        if (!Number.isInteger(input)) {
          throw new Error(`${input} is not a valid integer.`);
        }

        if (max !== undefined && input > max) {
          throw new Error(`${input} is more than the maximum ${max}.`);
        }

        if (min !== undefined && input < min) {
          throw new Error(`${input} is less than the minimum ${min}.`);
        }

        return input;
      },
      preParse(input: any) {
        if (typeof input === 'string' && input !== '') {
          const asNumber = +input;
          if (!isNaN(asNumber)) return asNumber;
        }
        return input;
      },
    });
  }

  static create = (def: IntFieldDef = {}): IntField => {
    return new IntField(def);
  };
}

Object.assign(powership, {
  IntField,
});

declare global {
  interface powership {
    IntField: typeof IntField;
  }
}
