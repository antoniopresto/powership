import { expectedType } from '@darch/utils/lib/expectedType';

import { FieldType, FieldTypeParser } from './FieldType';
import { Darch } from '../Darch';

export type IDFieldDef = {
  autoCreate?: boolean;
};

export class IDField extends FieldType<string, 'ID', IDFieldDef> {
  parse: FieldTypeParser<string>;

  constructor(def: IDFieldDef = {}) {
    super('ID', def);
    const { autoCreate } = def;

    const createId = Darch.ulid({ autoCreate: true }).parse;

    this.parse = this.applyParser({
      preParse(input: any) {
        if (autoCreate && input === undefined) {
          return createId(undefined);
        }
        return input;
      },

      parse(input: string) {
        expectedType({ value: input }, 'string');
        return input;
      },
    });
  }

  static create = (def: IDFieldDef = {}): IDField => {
    return new IDField(def);
  };
}
