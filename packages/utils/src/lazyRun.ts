export function createPromise<T>() {
  let resolve!: (value: T) => Promise<void>;
  let reject!: (reason?: any) => Promise<void>;
  let didRun: boolean = false;
  let didResolve: boolean | undefined = undefined;
  let didFail: boolean | undefined = undefined;
  let error: any = undefined;
  let value: T | undefined = undefined;

  async function _onSuccess(v: T) {
    didRun = true;
    didFail = false;
    didResolve = true;
    error = undefined;
    value = v;
  }

  async function _onError(e: any) {
    didRun = true;
    didFail = true;
    didResolve = false;
    error = e;
  }

  let promise = new Promise<T>((a, b) => {
    resolve = async function _resolve(v) {
      await _onSuccess(v);
      a(v);
    };

    reject = async function _reject(e) {
      try {
        await _onError(e);
      } catch (eee) {
        console.error(`failed to run onError:\n`, eee, '\n');
        throw e;
      }
      b(e);
    };
  });

  let then = promise.then.bind(promise);
  let catching = promise.catch.bind(promise);

  return createGetters(Object.create(null) as {}, {
    didResolve: {
      get() {
        return didResolve;
      },
    },
    resolve: {
      get() {
        return resolve;
      },
    },
    reject: {
      get() {
        return reject;
      },
    },
    then: {
      get() {
        return then;
      },
    },
    catch: {
      get() {
        return catching;
      },
    },
    didFail: {
      get() {
        return didFail;
      },
    },
    didRun: {
      get() {
        return didRun;
      },
    },
    error: {
      get() {
        return error;
      },
    },
    value: {
      get() {
        return value;
      },
    },
  });
}

export function createGetters<T, A>(
  target: A,
  values: {
    [K in keyof T]: { get(): T[K]; set?: (value: T[K]) => void };
  }
): A & ({ [K in keyof T]: T[K] extends unknown ? T[K] : never } & {}) {
  return Object.defineProperties(target, values) as any;
}

/**
 * Creates an empty object without a prototype
 */
export function empty() {
  return Object.create(null) as {};
}
