import { inspectObject } from '@darch/utils';

export class EntityError<Kind extends string = string> extends Error {
  __isEntityError: true;

  constructor(public kind: Kind, details?: any) {
    super(
      `${kind} ➤ Invalid value received ➤ ${
        details
          ? inspectObject(details, { depth: 10, tabSize: 0, named: true })
          : ''
      }`
    );
    this.stack = (this.stack || '').split('\n').slice(4).join('\n');
  }

  static is(input: any): input is EntityError {
    return typeof input.__isEntityError === 'boolean';
  }
}

export function createEntityError<Kind extends string>(
  kind: Kind
): {
  new (details?: any): EntityError<Kind> & {
    is(input: any): input is EntityError<Kind>;
  };
} & {
  (details?: any): EntityError<Kind> & {
    is(input: any): input is EntityError<Kind>;
  };
} {
  class __EntityError extends EntityError<Kind> {
    static kind = kind;
    constructor(details?: any) {
      super(kind, details);
    }
    static is(input: any): input is EntityError {
      return (
        typeof input.__isTransporterError === 'boolean' && input.kind === kind
      );
    }
  }

  Object.defineProperties(__EntityError, { name: { value: kind } });

  return function _EntityError(details?: any) {
    return new __EntityError(details);
  } as any;
}

export const InvalidFilterError = createEntityError('INVALID_FILTER');
