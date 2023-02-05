export function reduceObject<Result, O extends object>(
  items: O[],
  reducer: (object: O) => Partial<Result>
): Result {
  return items.reduce(
    (acc, next) => ({ ...acc, ...reducer(next) }),
    {} as Result
  );
}
