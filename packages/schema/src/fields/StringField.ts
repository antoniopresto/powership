import { expectedType } from '@powership/utils';

import type { FieldTypeParser } from '../applyValidator';

import { FieldType } from './FieldType';
import { FieldTypeError } from './FieldTypeErrors';

export type StringFieldDef = {
  max?: number;
  min?: number;
  regex?: [string] | [string, string] | Readonly<[string, string] | [string]>;
};

export class StringField extends FieldType<
  string,
  'string',
  StringFieldDef | undefined
> {
  parse: FieldTypeParser<string>;

  constructor(def: StringFieldDef = {}) {
    super({ def: def, name: 'string' });

    const { min, max, regex } = def;

    expectedType({ max, min }, 'number', true);
    expectedType({ regex }, 'array', true);

    const regExp = regex && new RegExp(regex[0], regex[1]);

    this.parse = this.applyParser({
      parse(input: string) {
        expectedType({ value: input }, 'string');

        if (regExp && !regExp.test(input) && regex) {
          throw new FieldTypeError(`regexMismatch`, {
            input,
            regex: regExp.toString(),
          });
        }

        const length = input.length;

        if (max !== undefined && length > max) {
          throw new FieldTypeError(
            'maxSize',
            `${length} is more than the max string length ${max}.`
          );
        }

        if (min !== undefined && length < min) {
          throw new FieldTypeError(
            'minSize',
            `${length} is less than the min string length ${min}.`
          );
        }

        return input;
      },
    });
  }

  static create = (def?: StringFieldDef): StringField => {
    return new StringField(def);
  };
}
