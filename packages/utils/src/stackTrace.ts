export function getStack(parent?: any) {
  const err = new Error();

  captureStackTrace(err, parent === undefined ? getStack : parent);

  return err.stack || '';
}

export function captureStackTrace(error: any, parent?: any) {
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(error, parent);
    return error;
  }

  const container = new Error();

  Object.defineProperty(error, 'stack', {
    configurable: true,
    get() {
      const { stack } = container;
      Object.defineProperty(this, 'stack', { value: stack });
      return stack;
    },
  });

  return error;
}
