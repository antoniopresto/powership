import { FieldTypeError } from './fields/FieldTypeErrors';

export type ValidationCustomMessage =
  | string
  | ((value: any, originalError: Error) => string | Error);

export type FieldParserOptionsObject = {
  allowExtraFields?: boolean; // include fields from input but not in schema
  customErrorMessage?: ValidationCustomMessage;
  customMessage?: ValidationCustomMessage;
  excludeInvalidListItems?: boolean;
  includeHidden?: boolean;
  partial?: boolean;
  exclude?: string[];
};

export type FieldParserConfig =
  | ValidationCustomMessage
  | FieldParserOptionsObject;

export type FieldTypeParser<Type> = (
  input: any,
  config?: FieldParserConfig,
) => Type;

export function parseValidationError(
  input: any,
  customMessage: ValidationCustomMessage | undefined,
  originalError: (Error & { [K: string]: any }) | string,
) {
  if (typeof originalError === 'object') {
    if (
      !customMessage &&
      typeof originalError === 'object' &&
      Array.isArray(originalError.issues)
    ) {
      const customIssue = originalError.issues.find(
        (err) => typeof err?.params?.getMessage === 'function',
      );

      if (typeof customIssue?.params?.getMessage === 'function') {
        customMessage = () => customIssue.params.getMessage(input, error);
      }
    }
  }

  // console.log(_originDef);

  const error =
    typeof originalError === 'string'
      ? new FieldTypeError('custom', originalError)
      : originalError;

  if (typeof customMessage === 'string') {
    return new FieldTypeError('custom', customMessage);
  }

  if (typeof customMessage === 'function') {
    const _customError = customMessage(input, error);
    if (!_customError) return error;

    if ('string' === typeof _customError) {
      return new FieldTypeError('custom', _customError);
    } else {
      return new FieldTypeError(
        'custom',
        _customError?.message || _customError,
      );
    }
  }

  return error;
}
