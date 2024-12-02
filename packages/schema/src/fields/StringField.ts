import { expectedType, getTypeName, symbols } from '@powership/utils';

import { FieldType } from './FieldType';
import { FieldTypeError } from '../validator/FieldTypeErrors';
import { FieldTypeParser, ValidationError } from '../validator';

export type StringFieldDef = {
  max?: number;
  min?: number;
  regex?: [string] | [string, string] | Readonly<[string, string] | [string]>;
};

export class StringField extends FieldType<string, 'string', StringFieldDef> {
  parse: FieldTypeParser<string>;

  constructor(def: StringFieldDef = {}) {
    super({ def: def, name: 'string' });

    const { min, max, regex } = def;

    expectedType({ max, min }, 'number', true);
    expectedType({ regex }, 'array', true);

    const regExp = regex && new RegExp(regex[0], regex[1]);

    this.parse = this.applyParser({
      parse: (input: any, options) => {
        if (typeof input !== 'string') {
          throw new ValidationError([
            {
              path: options?.path || [],
              value: input,
              message: `Expected string, found ${getTypeName(input)}`,
              symbol: symbols.type_mismatch,
            },
          ]);
        }

        if (regExp && !regExp.test(input)) {
          throw new ValidationError([
            {
              path: options?.path || [],
              value: input,
              message: 'Value does not match required pattern',
              symbol: symbols.string_regex_mismatch,
            },
          ]);
        }

        if (min !== undefined && input.length < min) {
          throw new ValidationError([
            {
              path: options?.path || [],
              value: input,
              message: `String must be at least ${min} characters long`,
              symbol: symbols.string_too_short,
            },
          ]);
        }

        if (max !== undefined && input.length > max) {
          throw new ValidationError([
            {
              path: options?.path || [],
              value: input,
              message: `String must be at most ${max} characters long`,
              symbol: symbols.string_too_long,
            },
          ]);
        }

        return input;
      },
    });
  }
}

Object.assign(powership, {
  StringField,
});

declare global {
  interface powership {
    StringField: typeof StringField;
  }
}
