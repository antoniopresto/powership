export function getTypeName(input: any): string {
  if (typeof input === 'number' && isNaN(input)) return 'NaN';
  if (input === null) return 'Null';
  if (input === undefined) return 'Undefined';
  if (input === Infinity) return 'Infinity';
  return getConstructorName(input);
}

export function getConstructorName(input: any): string {
  const constructorName = input?.constructor
    ?.toString?.()
    .match(/function ([^(]*)/)?.[1];

  if (constructorName) return constructorName;

  if (input !== null && typeof input === 'object') {
    // objects without constructor (with Object.create(null))
    return 'Object';
  }

  return 'Unknown';
}
