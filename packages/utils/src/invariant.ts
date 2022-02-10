/**
 * Validates an object for keys with null or undefined values
 * @param object
 */
import { RuntimeError } from './RuntimeError';
import { ensureArray } from './ensureArray';
import { getTypeName } from './getTypeName';

export function nonNullValues<T>(
  object: { [key in keyof T]: T[key] | null | undefined },
  customMessage = ''
): T {
  if (!object || typeof object !== 'object') {
    throw new RuntimeError(`${object} is not a valid object`, {
      input: object,
    });
  }

  const errors: string[] = [];

  Object.entries(object).forEach(([k, v]) => {
    if (v === null || v === undefined) {
      errors.push(
        `expected non nullable value for property "${k}", found ${v}.`
      );
    }
  });

  if (errors.length) {
    if (customMessage) {
      errors[0] = customMessage;
    }
    throw new RuntimeError(errors.join('\n'), { input: object }, 2);
  }

  return object as T;
}

export function notNull<T>(
  input: T | null | undefined,
  appendErrorMessage = ''
): T {
  if (input === null || input === undefined) {
    let message = `Expected non null value, but received ${input}.`;

    if (appendErrorMessage) {
      message = `${appendErrorMessage} ${message}`;
    }

    throw new RuntimeError(message, { input }, 2);
  }

  return input;
}

export function invariant(
  truthy: boolean,
  errorMessage = '',
  details: any = null
) {
  if (!truthy) {
    throw new RuntimeError(errorMessage, details, 2);
  }
}

export function invariantType(
  object: object,
  type: string | string[],
  extraInfo?: any,
  depth = 2,
  skipLines = 3
): boolean {
  const typeArr = ensureArray(type).map((el) => el.toLowerCase());

  Object.entries(object).forEach(([key, value]) => {
    const foundType = getTypeName(value);
    const validType = typeArr.includes(foundType.toLowerCase());
    const invalidNull = value === null && !typeArr.includes('null');

    if (invalidNull || !validType) {
      throw new RuntimeError(
        `Expected "${key}", to be of type "${type}", found ${foundType} ${value}`,
        extraInfo,
        skipLines,
        depth
      );
    }
  });

  return true;
}
