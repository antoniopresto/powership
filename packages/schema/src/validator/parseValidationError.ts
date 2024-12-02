import { ValidationError } from './ValidationError';
import { symbols } from '@powership/utils';

import {
  ValidationCustomMessage,
  ValidationErrorDetails,
  ValidatorPathSegment,
} from './types';

export function parseValidationError(
  input: any,
  customMessage: ValidationCustomMessage | undefined,
  originalError: Error | string,
  path: ValidatorPathSegment[] = []
): ValidationError {
  if (ValidationError.is(originalError)) {
    return originalError;
  }

  const error =
    typeof originalError === 'string'
      ? new Error(originalError)
      : originalError;

  // Tratar custom message
  if (typeof customMessage === 'string') {
    return new ValidationError([
      {
        path,
        value: input,
        message: customMessage,
        symbol: symbols.custom_error,
      },
    ]);
  }

  if (typeof customMessage === 'function') {
    const customResult = customMessage(input, error);

    if (!customResult) return createDefaultError();

    if (typeof customResult === 'string') {
      return new ValidationError([
        {
          path,
          value: input,
          message: customResult,
          symbol: symbols.custom_error,
        },
      ]);
    }

    return new ValidationError([
      {
        path,
        value: input,
        message: customResult.message || String(customResult),
        symbol: symbols.custom_error,
      },
    ]);
  }

  return createDefaultError();

  function createDefaultError(): ValidationError {
    const details: ValidationErrorDetails = {
      path,
      value: input,
      message: error.message,
      symbol: symbols.validation_failed,
    };

    return new ValidationError([details]);
  }
}
