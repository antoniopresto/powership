import {
  assertEqual,
  parsePhoneNumberWithError,
  CountryCode,
  tryCatch,
} from '@powership/utils';

import type { FieldTypeParser } from '../applyValidator';

import { FieldType } from './FieldType';
import { FieldTypeError } from './FieldTypeErrors';

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
    return parsePhoneNumberWithError(input, {
      extract: true,
      defaultCountry,
    });
  });

  if (!phoneNumber) {
    throw new FieldTypeError('invalidPhone', {
      expected: 'VALID_PHONE_NUMBER',
      found: input,
    });
  }

  return phoneNumber.number.toString();
}

export class PhoneField extends FieldType<string, 'phone', PhoneFieldDef> {
  parse: FieldTypeParser<string>;

  static is(input: any): input is PhoneField {
    return input?.__isFieldType && input?.type === 'phone';
  }

  static assert(input: any): asserts input is PhoneField {
    assertEqual(this.is(input), true, 'NOT_PHONE_FIELD');
  }

  constructor(def: PhoneFieldDef) {
    super({
      def,
      name: 'phone',
    });

    this.parse = this.applyParser({
      parse(input: any) {
        return validatePhoneNumber(input);
      },
    });
  }

  static create = (def: PhoneFieldDef): PhoneField => {
    return new PhoneField(def);
  };
}

Object.assign(powership, {
  PhoneField,
});

declare global {
  interface powership {
    PhoneField: typeof PhoneField;
  }
}
