import { inspectObject } from '@powership/utils';
import type { ValidationErrorDetails, ValidatorPathSegment } from './types';
import { ValidationError } from './ValidationError';

export class FieldTypeError extends Error {
  __isFieldTypeError = true;
  symbol: symbol;
  details?: Omit<ValidationErrorDetails, 'message' | 'symbol'>;

  constructor(symbol: symbol, details?: any) {
    const message = FieldTypeError.formatErrorMessage(symbol, details);
    super(message);
    this.symbol = symbol;

    if (details) {
      if (details.stack) {
        this.stack = details.stack;
      }

      this.details = {
        path: [],
        value: details,
      };
    }
  }

  private static formatErrorMessage(symbol: symbol, details?: any): string {
    if (!details) return symbol.description || 'Validation Error';
    if (typeof details === 'string') return details;

    if (typeof details === 'object') {
      if (details.expected !== undefined && details.received !== undefined) {
        return `Expected ${inspectObject(
          details.expected
        )}, received ${inspectObject(details.received)}`;
      }
      return inspectObject(details).trim();
    }

    return String(details);
  }

  static is(error: any): error is FieldTypeError {
    return Boolean(error && error.__isFieldTypeError === true);
  }

  toValidationError(path: ValidatorPathSegment[] = []): ValidationError {
    return new ValidationError([
      {
        path,
        value: this.details?.value,
        message: this.message,
        symbol: this.symbol,
      },
    ]);
  }
}

export function isFieldError(el: any): el is FieldTypeError {
  return Boolean(el && el?.__isFieldTypeError === true);
}
