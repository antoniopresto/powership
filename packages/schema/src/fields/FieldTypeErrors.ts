import { capitalize, inspectObject, tuple } from '@backland/utils';

export const FieldTypeErrorCodes = tuple(
  'minSize', //
  'maxSize',
  'regexMismatch',
  'sizeMismatch',
  'unexpected',
  'unexpectedType',
  'custom',
  'invalidPhone',
  'requiredField'
);

export type FieldTypeErrorCode = typeof FieldTypeErrorCodes[number];

export class FieldTypeError extends Error {
  __isFieldTypeError = true;
  code: FieldTypeErrorCode;
  static is = isFieldError;

  constructor(code: FieldTypeErrorCode, details?: any) {
    super(
      [
        code !== 'custom' ? `${capitalize(code)}${details ? ':' : ''}` : '',
        (details ? `${inspectObject(details)}` : '').trim(),
      ]
        .filter(Boolean)
        .join(' ')
    );

    this.code = code;
    if (typeof details?.stack === 'string') {
      this.stack = details.stack;
    }
  }
}

export function createFieldTypeError(code: FieldTypeErrorCode, details?: any) {
  return new FieldTypeError(code, details);
}

export function isFieldError(el: any): el is FieldTypeError {
  return Boolean(el && el?.__isFieldTypeError === true);
}
