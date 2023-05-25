/**
 * Validates an object for keys with null or undefined values
 * @param object
 */
import { createErrorClass, customError } from './createErrorClass';
import { ensureArray } from './ensureArray';
import { getTypeName } from './getTypeName';
import { inspectObject } from './inspectObject';
import { getStack } from './stackTrace';

function join(...parts: any[]) {
  return (
    parts
      .filter((el) => typeof el === 'string' && el)
      .map((el) => el.trim())
      .join('\n       ➻ ') + '\n\n_ lines were trimmed _'
  );
}

export function nonNullValues<T>(
  object: { [key in keyof T]: T[key] | null | undefined },
  customMessage = ''
): T {
  if (!object || typeof object !== 'object') {
    throw customError({
      message: join(
        customMessage,
        `${object} is not a valid object`,
        inspectObject(object)
      ),
      stackFrom: nonNullValues,
    }).identify('NonNullValues');
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
    throw customError({
      message: join(customMessage, errors.join('\n'), inspectObject(object)),
      stackFrom: nonNullValues,
    });
  }

  return object as T;
}

export function notNull<T>(
  input: T | null | undefined,
  appendErrorMessage: string | Error = ''
): T {
  if (input === null || input === undefined) {
    const message = `Expected non null value, but received ${inspectObject(
      input
    )}.`;

    throw customError({
      message: join(appendErrorMessage, message),
      stackFrom: notNull,
    });
  }

  return input;
}

export const InvariantError = createErrorClass('Invariant');

export function wrapError<T>(
  callback: () => T,
  parent?: any,
  overrideError?: <Err extends ErrorWithStack>(
    error: Err
  ) => void | ErrorWithStack
): T {
  try {
    return callback();
  } catch (e) {
    assertError(e);
    e.stack = getStack(parent || wrapError);
    if (typeof overrideError === 'function') {
      e = overrideError(e) || e;
    }
    throw e;
  }
}

export function assertError(e: any): asserts e is ErrorWithStack {
  if (!isErrorWithStack(e)) {
    throw new InvariantError(`Invalid error object.`);
  }
}

export function isErrorWithStack(t: any): t is ErrorWithStack {
  return typeof t?.message === 'string' && typeof t.stack === 'string';
}

export interface ErrorWithStack {
  message: string;
  stack: string;
}

export function invariant(
  truthy: any,
  errorMessage: string | Error = '',
  details: any = null
): asserts truthy {
  if (!truthy) {
    if (typeof errorMessage === 'string') {
      throw new InvariantError(errorMessage, inspectObject(details, {}));
    } else {
      if (errorMessage?.message) {
        throw errorMessage;
      } else {
        throw new InvariantError();
      }
    }
  }
}

export function invariantType(
  object: object,
  type: string | string[],
  extraInfo?: any,
  depth = 2
): boolean {
  const typeArr = ensureArray(type).map((el) => el.toLowerCase());

  Object.entries(object).forEach(([key, value]) => {
    const foundType = getTypeName(value);
    const validType = typeArr.includes(foundType.toLowerCase());
    const invalidNull = value === null && !typeArr.includes('null');

    if (invalidNull || !validType) {
      throw customError({
        message: `Expected "${key}", to be of type "${type}", found ${foundType} ${value} ${inspectObject(
          extraInfo,
          { depth }
        )}`,
        stackFrom: invariantType,
      });
    }
  });

  return true;
}
