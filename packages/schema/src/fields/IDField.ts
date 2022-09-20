import { expectedType } from '@darch/utils/lib/expectedType';

import { CircularDeps } from '../CircularDeps';

import { FieldType, FieldTypeParser } from './FieldType';

export type IDFieldDef = {
  autoCreate?: boolean;
};

export class IDField extends FieldType<string, 'ID', IDFieldDef> {
  parse: FieldTypeParser<string>;

  constructor(def: IDFieldDef = {}) {
    super('ID', def);
    const { autoCreate } = def;

    const createId = CircularDeps.ulid({ autoCreate: true }).parse;

    this.parse = this.applyParser({
      parse(input: string) {
        expectedType({ value: input }, 'string');
        return input;
      },

      preParse(input: any) {
        if (autoCreate && input === undefined) {
          return createId(undefined);
        }
        return input;
      },
    });
  }

  static create = (def: IDFieldDef = {}): IDField => {
    return new IDField(def);
  };
}
