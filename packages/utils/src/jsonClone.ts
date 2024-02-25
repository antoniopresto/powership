import { tryCatch } from './tryCatch';

export function jsonClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function jsonStringify(input: unknown) {
  return tryCatch<string>(() => JSON.stringify(input));
}

export function jsonParse(input: unknown) {
  return tryCatch<Record<string, any>>(() => JSON.parse(input as any));
}
