export function getTypeName(input: any): string {
  if (typeof input === 'number' && isNaN(input)) return 'NaN';
  if (input === null) return 'Null';
  if (input === undefined) return 'Undefined';
  if (input === Infinity) return 'Infinity';
  const _constructor = getConstructorName(input);
  if (_constructor) return _constructor;
  return 'Unknown';
}

export function getConstructorName(input: any): string | undefined {
  // immune to minification Object.defineProperty(foo, 'name') on constructors.
  return input?.constructor?.toString?.().match(/function ([^(]*)/)?.[1];
}
