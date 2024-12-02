import {
  CountryCode,
  tryCatch,
  parsePhoneNumber,
  symbols,
  getTypeName,
} from '@powership/utils';

import { FieldType } from './FieldType';
import { FieldTypeParser, ValidationError } from '../validator';

export type PhoneValidationOptions = {
  defaultCountry?: CountryCode;
};

export type PhoneFieldDef = PhoneValidationOptions | undefined;

export function validatePhoneNumber(
  input: unknown,
  options: PhoneValidationOptions = {}
): string {
  if (typeof input !== 'string') {
    throw new Error('Expected phone number as string.');
  }

  const { defaultCountry } = options;

  let [, phoneNumber] = tryCatch(() => {
    return parsePhoneNumber(input, {
      extract: true,
      defaultCountry,
    });
  });

  if (!phoneNumber) {
    throw new ValidationError([
      {
        path: [],
        value: input,
        message: 'Invalid phone number format',
        symbol: symbols.phone_invalid_number,
      },
    ]);
  }

  return phoneNumber;
}

export class PhoneField extends FieldType<string, 'phone', PhoneFieldDef> {
  parse: FieldTypeParser<string>;

  constructor(def: PhoneFieldDef = {}) {
    super({ def, name: 'phone' });

    this.parse = this.applyParser({
      parse: (value, options) => {
        if (typeof value !== 'string') {
          throw new ValidationError([
            {
              path: options?.path || [],
              value,
              message: `Expected phone number as string, found ${getTypeName(
                value
              )}`,
              symbol: symbols.type_mismatch,
            },
          ]);
        }

        try {
          return validatePhoneNumber(value, def);
        } catch (e) {
          throw new ValidationError([
            {
              path: options?.path || [],
              value,
              message: 'Invalid phone number format',
              symbol: symbols.phone_invalid_number,
            },
          ]);
        }
      },
    });
  }
}

Object.assign(powership, {
  PhoneField,
});

declare global {
  interface powership {
    PhoneField: typeof PhoneField;
  }
}
