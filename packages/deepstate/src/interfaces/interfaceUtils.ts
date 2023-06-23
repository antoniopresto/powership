export type AsPromise<T> = T extends Promise<infer Result>
  ? Promise<Result>
  : Promise<T>;
