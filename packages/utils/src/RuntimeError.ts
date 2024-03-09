import { inspectObject } from './inspectObject';

export type RunTimeErrorOptions = {
  skipStackLines?: number;
  depth?: number;
  limitStackTrace?: number;
};

export class RuntimeError extends Error {
  name = 'RuntimeError';

  details;
  detailsString = '';

  /**
   * @deprecated use options via object RunTimeErrorOptions instead
   * @param message
   * @param details
   * @param skipStackLines
   * @param depth
   */
  constructor(
    message: string,
    details: any,
    skipStackLines?: number,
    depth?: number
  );

  constructor(message: string, details: any, options?: RunTimeErrorOptions);

  constructor(message: string, details: any, ..._config) {
    super(message);
    this.details = details;
    this.detailsString = message;

    const {
      skipStackLines = 0,
      depth = 10,
      limitStackTrace = 100,
    } = prepareArgs(_config as any);

    if (details) {
      const detailsString = inspectObject(details, { tabSize: 0, depth })
        //
        .slice(0, limitStackTrace);

      this.detailsString += `\n${detailsString}`;

      const stack = (this.stack || '').split('\n');

      const newStack = [
        message,
        ...stack.slice(0, 1).filter((e) => e === '\n'),
        `Details: ${detailsString}`,
        ...stack.slice(1 + skipStackLines),
      ];

      this.stack = newStack.join('\n');
    }
  }
}

function prepareArgs(
  _config: [RunTimeErrorOptions] | [number | undefined, number | undefined]
): RunTimeErrorOptions {
  return typeof _config[0] === 'object'
    ? _config[0]
    : {
        skipStackLines: _config[0],
        depth: _config[1],
      };
}
