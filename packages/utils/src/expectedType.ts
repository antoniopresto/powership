import { getTypeName } from './getTypeName';

export class InvalidExpectedTypeError extends Error {
  constructor(
    public fieldName: string,
    public found: string,
    public expected: string
  ) {
    super(
      `Expected ${fieldName} to be of type "${expected}", found ${found} instead.`
    );
  }
}

export function expectedType(
  input: { [key: string]: unknown },
  expected: string | string[],
  optional = false
) {
  const entries = Object.entries(input);

  const expectedArr = (Array.isArray(expected) ? expected : [expected]).map(
    (el) => el.toLowerCase()
  );

  if (optional) {
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
  }
}
