import type { ValidationErrorDetails } from './types';

export class ValidationError extends Error {
  public readonly errors: ValidationErrorDetails[];
  public readonly isValidationError = true;

  constructor(errors: ValidationErrorDetails[]) {
    const message = ValidationError.formatErrors(errors);
    super(message);
    this.errors = errors;
    this.name = 'ValidationError';
  }

  private static formatErrors(errors: ValidationErrorDetails[]): string {
    return errors
      .map((err) => {
        const pathStr = err.path.join('.');
        return `${pathStr}: ${err.message}`;
      })
      .join('\n');
  }

  static create(
    symbol: symbol,
    details: Omit<ValidationErrorDetails, 'symbol'>
  ) {
    return new ValidationError([{ ...details, symbol }]);
  }

  static is(error: any): error is ValidationError {
    return Boolean(error && error.isValidationError === true);
  }
}
