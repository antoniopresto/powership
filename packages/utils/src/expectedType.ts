import { getTypeName } from './getTypeName';

export class InvalidExpectedTypeError extends Error {
  fieldName: string;
  found: string;
  expected: string;

  constructor(fieldName: string, found: string, expected: string) {
    super(
      `Expected ${fieldName} to be of type "${expected}", found ${found} instead.`
    );
    this.expected = expected;
    this.fieldName = fieldName;
    this.found = found;
  }
}

export class InvalidExpectedTruthyError extends Error {
  constructor(fieldName: string, value: any, foundType: string) {
    super(
      `Expected ${fieldName} to be have a truthy value, found "${value}" of type ${foundType}.`
    );
  }
}

export function expectedType<Input extends { [key: string]: unknown }>(
  input: Input,
  expected: string | string[],
  optional: boolean | 'truthy' = false
): Input {
  const entries = Object.entries(input);

  const expectedArr = (Array.isArray(expected) ? expected : [expected]).map(
    (el) => el.toLowerCase()
  );

  if (optional === true) {
    expectedArr.push('undefined');
  }

  for (let [key, value] of entries) {
    const typename = getTypeName(value).toLowerCase();

    if (!expectedArr.includes(typename)) {
      throw new InvalidExpectedTypeError(
        key,
        typename,
        expectedArr.join(' or ')
      );
    }

    if (optional === 'truthy' && !value) {
      throw new InvalidExpectedTruthyError(key, value, typename);
    }
  }

  return input;
}

export const assertTypes = expectedType;
