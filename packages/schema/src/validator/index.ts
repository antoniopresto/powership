export * from './types';
export * from './ValidationError';
export * from './FieldTypeErrors';
export * from './ObjectValidator';
export { parseValidationError } from './parseValidationError';

import { ValidationErrorDetails, ValidatorPathSegment } from './types';
import { ObjectValidator } from './ObjectValidator';

export function validate(value: any, schema: any): void {
  const validator = new ObjectValidator();
  validator.validateField(value, schema);
  const error = validator.getErrors();
  if (error) throw error;
}

export function validateField(
  value: any,
  fieldDef: any,
  path: ValidatorPathSegment[] = []
): ValidationErrorDetails[] {
  const validator = new ObjectValidator();
  validator.validateField(value, fieldDef, path);
  return validator.getErrors()?.errors || [];
}
