import { getTypeName, symbols } from '@powership/utils';
import type { ValidationErrorDetails, ValidatorPathSegment } from './types';
import { ValidationError } from './ValidationError';

export class ObjectValidator {
  private errors: ValidationErrorDetails[] = [];
  private currentPath: ValidatorPathSegment[] = [];

  validateField(
    value: any,
    fieldDef: any,
    path: ValidatorPathSegment[] = []
  ): void {
    this.currentPath = path;

    if (value === undefined) {
      if (!fieldDef.optional) {
        this.addError(
          symbols.object_missing_required,
          value,
          'Field is required'
        );
      }
      return;
    }

    const expectedType = fieldDef.type;
    const actualType = getTypeName(value).toLowerCase();

    if (expectedType !== actualType) {
      this.addError(
        symbols.invalid_type,
        value,
        `Expected ${expectedType}, found ${actualType}`
      );
      return;
    }

    switch (expectedType) {
      case 'string':
        this.validateString(value, fieldDef);
        break;
      case 'number':
        this.validateNumber(value, fieldDef);
        break;
      case 'object':
        this.validateObject(value, fieldDef);
        break;
      case 'array':
        this.validateArray(value, fieldDef);
        break;
    }
  }

  private validateString(value: string, fieldDef: any): void {
    if (fieldDef.pattern && !fieldDef.pattern.test(value)) {
      this.addError(
        symbols.string_regex_mismatch,
        value,
        `Value does not match required pattern`
      );
    }

    if (fieldDef.enum && !fieldDef.enum.includes(value)) {
      this.addError(
        symbols.enum_invalid_value,
        value,
        `Value must be one of: ${fieldDef.enum.join(', ')}`
      );
    }

    if (fieldDef.min !== undefined && value.length < fieldDef.min) {
      this.addError(
        symbols.string_too_short,
        value,
        `String length must be at least ${fieldDef.min}`
      );
    }

    if (fieldDef.max !== undefined && value.length > fieldDef.max) {
      this.addError(
        symbols.string_too_long,
        value,
        `String length must be at most ${fieldDef.max}`
      );
    }
  }

  private validateNumber(value: number, fieldDef: any): void {
    if (!Number.isFinite(value)) {
      this.addError(symbols.number_not_finite, value, 'Value must be finite');
      return;
    }

    if (fieldDef.min !== undefined && value < fieldDef.min) {
      this.addError(
        symbols.number_too_small,
        value,
        `Value must be greater than or equal to ${fieldDef.min}`
      );
    }

    if (fieldDef.max !== undefined && value > fieldDef.max) {
      this.addError(
        symbols.number_too_large,
        value,
        `Value must be less than or equal to ${fieldDef.max}`
      );
    }

    if (fieldDef.integer && !Number.isInteger(value)) {
      this.addError(
        symbols.number_not_integer,
        value,
        'Value must be an integer'
      );
    }
  }

  private validateObject(value: any, fieldDef: any): void {
    if (!value || typeof value !== 'object') {
      this.addError(
        symbols.type_mismatch,
        value,
        'Expected value to be an object'
      );
      return;
    }

    Object.entries(fieldDef.properties || {}).forEach(([key, propDef]) => {
      this.validateField(value[key], propDef, [...this.currentPath, key]);
    });
  }

  private validateArray(value: any[], fieldDef: any): void {
    if (!Array.isArray(value)) {
      this.addError(
        symbols.type_mismatch,
        value,
        'Expected value to be an array'
      );
      return;
    }

    if (fieldDef.minItems && value.length < fieldDef.minItems) {
      this.addError(
        symbols.array_too_short,
        value,
        `Array must contain at least ${fieldDef.minItems} items`
      );
      return;
    }

    if (fieldDef.maxItems && value.length > fieldDef.maxItems) {
      this.addError(
        symbols.array_too_long,
        value,
        `Array must contain at most ${fieldDef.maxItems} items`
      );
      return;
    }

    if (fieldDef.uniqueItems && new Set(value).size !== value.length) {
      this.addError(
        symbols.array_not_unique,
        value,
        'Array must contain unique items'
      );
      return;
    }

    value.forEach((item, index) => {
      this.validateField(item, fieldDef.items, [...this.currentPath, index]);
    });
  }

  private addError(symbol: symbol, value: any, message: string): void {
    this.errors.push({
      symbol,
      path: [...this.currentPath],
      value,
      message,
    });
  }

  getErrors(): ValidationError | null {
    return this.errors.length > 0 ? new ValidationError(this.errors) : null;
  }
}
