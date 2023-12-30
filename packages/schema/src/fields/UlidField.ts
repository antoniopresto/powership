import { expectedType } from '@powership/utils';
import { ulid } from '@powership/utils';

import type { FieldTypeParser } from '../applyValidator';

import { FieldType } from './FieldType';

type UlidDef = {
  autoCreate?: boolean;
};

export const ULID_REGEX = /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/;

export class UlidField extends FieldType<string, 'ulid', UlidDef | undefined> {
  parse: FieldTypeParser<string>;

  constructor(def: UlidDef = {}) {
    super({ def: def, name: 'ulid' });

    const { autoCreate } = def;
    expectedType({ autoCreate }, 'boolean', true);

    this.parse = this.applyParser({
      parse(input: string) {
        expectedType({ value: input }, 'string');
        if (!ULID_REGEX.test(input)) throw new Error('Invalid ulid.');
        return input;
      },
      preParse(input) {
        if (autoCreate && input === undefined) {
          return ulid();
        }
        return input;
      },
    });
  }

  static create = (def?: UlidDef): UlidField => {
    return new UlidField(def);
  };

  static isUlid = (value: string) => ULID_REGEX.test(value);
}
