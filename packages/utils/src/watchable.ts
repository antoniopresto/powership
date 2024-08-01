export type Status = 'pending' | 'resolved' | 'rejected';

export type WatchableResult<T> =
  | { status: 'pending'; error?: undefined; value?: undefined }
  | {
      status: 'rejected';
      value?: undefined;
      error: any;
    }
  | {
      status: 'resolved';
      value: T;
      error?: undefined;
    };

export function watchable<T extends object>(callback: () => T): T {
  let result: WatchableResult<T | Promise<T>> = { status: 'pending' };
  const subscribers: { resolve: Function; reject: Function }[] = [];

  function promiseHandler(
    resolve: (value: T) => void,
    reject: (reason?: any) => void
  ) {
    if (result.status === 'resolved') {
      resolve(result.value as T);
    } else if (result.status === 'rejected') {
      reject(result.error);
    } else {
      subscribers.push({ resolve, reject });
    }
  }

  let dispatched = false;
  function executeCallback() {
    if (dispatched) return;
    dispatched = true;
    try {
      const value = callback();
      if (
        value &&
        (typeof value === 'object' || typeof value === 'function') &&
        ('then' in value || 'catch' in value)
      ) {
        (value as unknown as Promise<T>).then(
          (resolvedValue) => {
            result = { status: 'resolved', value: resolvedValue };
            subscribers.forEach((subscriber) =>
              subscriber.resolve(resolvedValue)
            );
          },
          (error) => {
            result = { status: 'rejected', error };
            subscribers.forEach((subscriber) => subscriber.reject(error));
          }
        );
      } else {
        result = { status: 'resolved', value };
        subscribers.forEach((subscriber) => subscriber.resolve(value));
      }
    } catch (error) {
      result = { status: 'rejected', error };
      subscribers.forEach((subscriber) => subscriber.reject(error));
    }
  }

  const proxy = new Proxy(callback, {
    get(_target, prop, receiver) {
      if (prop === 'then' || prop === 'catch' || prop === 'finally') {
        if (result.status === 'pending') {
          setTimeout(executeCallback, 0); // Execute callback in the next tick
        }
        return promiseHandler.bind(promiseHandler);
      }
      if (prop === 'current') {
        return () => result.value;
      }
      if (result.status === 'pending') {
        executeCallback();
      }
      if (result.status === 'resolved') {
        return Reflect.get(result.value!, prop, receiver);
      }
      if (result.error) {
        throw result.error;
      }
      throw new Error('The promise is rejected or not resolved yet.');
    },
  });

  return proxy as unknown as T & {
    (): T;
    then: Promise<T>['then'];
    catch: Promise<T>['catch'];
    finally: Promise<T>['finally'];
    current: () => T | undefined;
  };
}
