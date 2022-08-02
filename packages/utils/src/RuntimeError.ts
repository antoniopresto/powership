import { inspectObject } from './inspectObject';

export class RuntimeError extends Error {
  name = 'RuntimeError';

  details;
  detailsString = '';

  constructor(message: string, details: any, skipStackLines = 0, depth = 2) {
    super(message);
    this.details = details;
    this.detailsString = message;

    if (details) {
      const detailsString = inspectObject(details, { tabSize: 0, depth });
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
