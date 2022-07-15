export function getTypeName(input: any): string {
  if (typeof input === 'number' && isNaN(input)) return 'NaN';
  if (input === null) return 'Null';
  if (input === undefined) return 'Undefined';
  if (input === Infinity) return 'Infinity';
  const _constructor = input?.constructor?.name;
  if (_constructor) return _constructor;
  return 'Unknown';
}
