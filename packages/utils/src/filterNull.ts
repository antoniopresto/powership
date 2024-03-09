export function filterNull<T>(
  input: (T | null | undefined)[] | null | undefined,
): T[] {
  return ((input || []) as any[]).filter((el) => !!el);
}
