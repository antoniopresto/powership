import { assertEqual } from '@backland/utils';
import {
  CountryCode,
  getNumberType,
  isValidNumber,
  NumberType,
} from 'libphonenumber-js';

import { FieldType, FieldTypeParser } from './FieldType';
import { createFieldTypeError } from './FieldTypeErrors';

export type PhoneValidationOptions = {
  country?: CountryCode;
  numberType?: NumberType;
};

export type PhoneFieldDef = PhoneValidationOptions | undefined;

export const E164_PHONE_REGEX = /^\+[1-9]\d{1,14}$/;

export function validatePhoneNumber(
  input: unknown,
  options: PhoneValidationOptions = {}
) {
  const { country, numberType } = options;

  if (typeof input !== 'string') {
    throw createFieldTypeError('unexpectedType', {
      expected: 'VALID_PHONE_NUMBER',
      found: input,
    });
  }

  let isValid = isValidNumber(input, country);

  if (isValid && numberType) {
    isValid = getNumberType(input, country) === numberType;
  }

  if (!isValid) {
    throw createFieldTypeError('invalidPhone', {
      expected: 'VALID_PHONE_NUMBER',
      found: input,
    });
  }

  return input;
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
