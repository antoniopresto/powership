export function jsonClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}
