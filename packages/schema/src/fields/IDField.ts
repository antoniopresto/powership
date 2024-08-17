import { expectedType, ulid } from '@powership/utils';

import type { FieldTypeParser } from '../applyValidator';

import { FieldType } from './FieldType';

export type IDFieldDef = {
  autoCreate?: boolean;
};

export class IDField extends FieldType<string, 'ID', IDFieldDef> {
  parse: FieldTypeParser<string>;

  constructor(def: IDFieldDef = {}) {
    super({ def: def, name: 'ID' });
    const { autoCreate } = def;

    this.parse = this.applyParser({
      parse(input: string) {
        expectedType({ value: input }, 'string');
        return input;
      },

      preParse(input: any) {
        if (autoCreate && input === undefined) {
          return ulid();
        }
        return input;
      },
    });
  }

  static create = (def: IDFieldDef = {}): IDField => {
    return new IDField(def);
  };
}

Object.assign(powership, {
  IDField,
});

declare global {
  interface powership {
    IDField: typeof IDField;
  }
}
