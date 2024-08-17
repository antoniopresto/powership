import { getTypeName } from '@powership/utils';

import type { FieldTypeParser } from '../applyValidator';

import { FieldType } from './FieldType';
import { FieldTypeError } from './FieldTypeErrors';

export type UnknownFieldDef = {
  types?: string[] | string;
};

export class UnknownField extends FieldType<
  unknown,
  'unknown',
  UnknownFieldDef | undefined
> {
  parse: FieldTypeParser<any>;

  constructor(def?: UnknownFieldDef) {
    super({ def: def, name: 'unknown' });
    const { types } = def || {};

    this.parse = this.applyParser({
      parse: (input) => {
        if (input === undefined) {
          if (this.optional) return input;
          throw new FieldTypeError('requiredField');
        }

        if (types?.length) {
          const arr = (Array.isArray(types) ? types : [types]).map((el) =>
            el.toLowerCase()
          );

          const tn = getTypeName(input).toLowerCase();

          if (!arr.includes(tn)) {
            throw new Error(
              `expected type to be one of -> (${arr.join(', ')}), found "${tn}"`
            );
          }
        }

        return input;
      },
    });
  }

  static create = (def?: UnknownFieldDef): UnknownField => {
    return new UnknownField(def);
  };
}

Object.assign(powership, {
  UnknownField,
});

declare global {
  interface powership {
    UnknownField: typeof UnknownField;
  }
}
