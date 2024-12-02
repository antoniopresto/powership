import { getTypeName, symbols } from '@powership/utils';

import { FieldType } from './FieldType';
import { FieldTypeError } from '../validator/FieldTypeErrors';
import { FieldTypeParser, ValidationError } from '../validator';

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
      parse: (input, options) => {
        if (input === undefined) {
          if (this.optional) return input;
          throw new ValidationError([
            {
              path: options?.path || [],
              value: input,
              message: 'Field is required',
              symbol: symbols.object_missing_required,
            },
          ]);
        }

        if (types?.length) {
          const arr = (Array.isArray(types) ? types : [types]).map((el) =>
            el.toLowerCase()
          );

          const tn = getTypeName(input).toLowerCase();

          if (!arr.includes(tn)) {
            throw new ValidationError([
              {
                path: options?.path || [],
                value: input,
                message: `Expected type to be one of: ${arr.join(
                  ', '
                )}, found "${tn}"`,
                symbol: symbols.unexpected_type,
              },
            ]);
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
