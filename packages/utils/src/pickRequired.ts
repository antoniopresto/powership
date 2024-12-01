import { nonNullValues } from 'powership';

export function pickRequired<T, R extends object>(
  input: T,
  picker: (input: T) => Partial<R>,
  customMessage?: string,
): R {
  const result = picker(input);

  return nonNullValues(
    // @ts-ignore
    result,
    customMessage,
  );
}
