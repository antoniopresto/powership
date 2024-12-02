import { inspectObject } from './inspectObject';
import { getStack } from './stackTrace';

export type ErrorClassCreatorOptions = {
  publicName?: string;
  defaultShouldPublishStack?: false;
  errorGroup?: string;
};

function defaultOptions(): Required<ErrorClassCreatorOptions> {
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

  let { defaultShouldPublishStack, publicName, errorGroup } = {
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
      details?: any,
      shouldPublishStack = defaultShouldPublishStack
    ) {
      super(message);

      this.name = name;
      this.__$name__ = name;

      const detailsMessage = [originalName, this.stack, details]
        .map((el) => (typeof el !== 'string' ? inspectObject(el) : el))
        .filter(Boolean)
        .join('\n');

      if (detailsMessage) {
        if (typeof process !== 'undefined' && process.stderr) {
          process.stderr.write(detailsMessage);
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
  const error = new CustomError(message, details);
  error.stack = getStack(
    options.stackFrom === undefined ? customError : options.stackFrom
  );
  return error;
}
