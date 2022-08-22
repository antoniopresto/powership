import { inspectObject } from '@darch/utils';

export class EntityError<Kind extends string = string> extends Error {
  __isEntityError: true;

  constructor(public kind: Kind, details?: any) {
    super(kind);

    const _details = details
      ? ` ➤ ${inspectObject(details, { depth: 10, tabSize: 0, named: true })}\n`
      : '';

    this.stack =
      this.message +
      _details +
      (this.stack || '').split('\n').slice(4).join('\n');
  }

  static is(input: any): input is EntityError {
    return typeof input.__isEntityError === 'boolean';
  }
}

export function createEntityError<Kind extends string>(
  kind: Kind
): {
  new (message: string, details?: any): EntityError<Kind> & {
    is(input: any): input is EntityError<Kind>;
  };

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
    constructor(...args: any[]) {
      super(
        ...([
          args.length === 2 ? args[0] : kind,
          args.length === 2 ? args[1] : args[0],
        ] as const)
      );
    }

    static is(input: any): input is EntityError {
      return (
        typeof input.__isTransporterError === 'boolean' && input.kind === kind
      );
    }
  }

  Object.defineProperties(__EntityError, { name: { value: kind } });

  return function _EntityError(...args) {
    return new __EntityError(...args);
  } as any;
}

export const InvalidFilterError = createEntityError('INVALID_FILTER');
