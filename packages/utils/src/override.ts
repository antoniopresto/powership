export type Override<T, O> = O extends Record<string, unknown>
  ? Omit<T, keyof O> & O
  : T;

export function override<T extends {}, O>(
  input: T,
  overrider: O
): Override<T, O> {
  return Object.assign(input, overrider) as any;
}
