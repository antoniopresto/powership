export function getStack() {
  const err = new Error();
  Error.captureStackTrace(err, getStack);
  return err.stack || '';
}
