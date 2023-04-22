import { MaybePromise } from './typings';

export async function awaitSync<T>(promises: MaybePromise<T>[]): Promise<T[]> {
  for (const key in promises) {
    promises[key] = await promises[key];
  }
  return promises as any;
}
