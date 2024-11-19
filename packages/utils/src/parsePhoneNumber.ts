import * as libPhoneNumber from 'libphonenumber-js';

export {
  formatIncompletePhoneNumber,
  AsYouType,
  parsePhoneNumberFromString,
  parsePhoneNumberWithError,
  ParseError,
} from 'libphonenumber-js';

export type { PhoneNumber, CountryCode } from 'libphonenumber-js';

export function parsePhoneNumber(
  ...args: Parameters<(typeof libPhoneNumber)['parsePhoneNumberWithError']>
) {
  const parsed = libPhoneNumber.parsePhoneNumberWithError(...args);
  return '+' + parsed.number.replace(/\D/g, '');
}

export { libPhoneNumber };
