import { createFieldTypeError } from './fields/FieldTypeErrors';

export type ValidationCustomMessage =
  | string
  | ((value: any, originalError: Error) => string | Error);

export type FieldParserOptionsObject = {
  allowUnspecified?: boolean; // include fields from input but not in schema
  customErrorMessage?: ValidationCustomMessage;
  customMessage?: ValidationCustomMessage;
  excludeInvalidListItems?: boolean;
  includeHidden?: boolean;
};

export type FieldParserConfig =
  | ValidationCustomMessage
  | FieldParserOptionsObject;

export type FieldTypeParser<Type> = (
  input: any,
  config?: FieldParserConfig
) => Type;

export function parseValidationError(
  input: any,
  customMessage: ValidationCustomMessage | undefined,
  originalError: (Error & { [K: string]: any }) | string
) {
  if (typeof originalError === 'object') {
    if (
      !customMessage &&
      typeof originalError === 'object' &&
      Array.isArray(originalError.issues)
    ) {
      const customIssue = originalError.issues.find(
        (err) => typeof err?.params?.getMessage === 'function'
      );

      if (typeof customIssue?.params?.getMessage === 'function') {
        customMessage = () => customIssue.params.getMessage(input, error);
      }
    }
  }

  // console.log(_originDef);

  const error =
    typeof originalError === 'string'
      ? createFieldTypeError('custom', originalError)
      : originalError;

  if (typeof customMessage === 'string') {
    return createFieldTypeError('custom', customMessage);
  }

  if (typeof customMessage === 'function') {
    const _customError = customMessage(input, error);
    if (!_customError) return error;

    if ('string' === typeof _customError) {
      return createFieldTypeError('custom', _customError);
    } else {
      return createFieldTypeError(
        'custom',
        _customError?.message || _customError
      );
    }
  }

  return error;
}
