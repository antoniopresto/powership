import { inspectObject } from './inspectObject';
import { getStack } from './stackTrace';
import { PartialRequired } from './typings';

export type ErrorClassCreatorOptions = {
  publicName?: string;
  defaultShouldPublishStack?: false;
  errorGroup?: string;
  defaultMessage?: string;
};

function defaultOptions(): PartialRequired<
  ErrorClassCreatorOptions,
  'defaultMessage'
> {
  return {
    defaultShouldPublishStack: false,
    publicName: '',
    errorGroup: 'UNGROUPED',
  };
}

export function createErrorClass(
  originalName: string,
  options?: ErrorClassCreatorOptions
) {
  const {
    setPrototypeOf = function (obj: any, proto: any) {
      obj.__proto__ = proto;
      return obj;
    },
  } = Object;

  let { defaultShouldPublishStack, publicName, errorGroup, defaultMessage } = {
    ...defaultOptions(),
    ...options,
  };

  const name = publicName || originalName;

  return class InvariantError extends Error {
    __$name__ = name;
    errorGroup = errorGroup;

    get $kind() {
      return this.__$name__;
    }

    static is = (item: any): item is InvariantError => {
      return item?.$kind === name;
    };

    __originalStack = '';

    constructor(
      message = '',
      init: {
        stackFrom?: unknown;
        details?: unknown;
        shouldPublishStack?: boolean;
      } = {}
    ) {
      let {
        details,
        shouldPublishStack = defaultShouldPublishStack,
        stackFrom,
      } = init;

      super(message || defaultMessage);

      this.name = name;
      this.__$name__ = name;

      this.stack = getStack(stackFrom === undefined ? this : stackFrom);

      const detailsMessage = [originalName, this.stack, details]
        .map((el) => (typeof el !== 'string' ? inspectObject(el) : el))
        .filter(Boolean)
        .join('\n');

      if (detailsMessage) {
        if (typeof process !== 'undefined' && process.stderr) {
          process.stderr.write(detailsMessage + '\n');
        } else {
          console.error(detailsMessage);
        }
      }

      this.__originalStack = this.stack || '';
      if (!shouldPublishStack) {
        this.stack = '';
      }

      setPrototypeOf(this, InvariantError.prototype);
    }

    identify = (name: string) => {
      this.name = name;
      this.__$name__ = name;
      Object.defineProperty(this, 'name', {
        value: name,
      });
      return this;
    };

    publicErrorMessage: string | undefined = undefined;

    publish = (message?: string) => {
      this.stack = this.__originalStack;
      this.publicErrorMessage = message || this.message;
      return this;
    };
  };
}

export const CustomError = createErrorClass('CustomError');

export function customError(options: {
  message?: string;
  details?: any;
  stackFrom?: any;
}) {
  const { message, details } = options;
  const error = new CustomError(message, { details });
  error.stack = getStack(
    options.stackFrom === undefined ? customError : options.stackFrom
  );
  return error;
}
