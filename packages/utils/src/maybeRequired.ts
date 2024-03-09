export function maybeRequired<T, Required>(
  expected: { [Key: string]: T | null | undefined },
  isRequired: Required
): T {
  const keys = Object.keys(expected);
  const itemName = keys[0];
  const value = expected[itemName];

  if (isRequired && (value === null || value === undefined)) {
    const error = new Error(
      `Expected ${itemName} to be defined; found ${value}.`
    );

    const stack = (error.stack || '').split('\n');
    error.stack = stack.slice(0, 1).concat(stack.slice(1)).join('\n');

    throw error;
  }

  return value as any;
}
