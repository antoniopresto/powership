import { inspectObject } from './inspectObject';

export type ErrorClassCreatorOptions = {
  publicName?: string;
  defaultFramesToPop?: number;
  defaultShouldPublishStack?: false;
  errorGroup?: string;
};

function defaultOptions(): Required<ErrorClassCreatorOptions> {
  return {
    defaultFramesToPop: 2,
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

  let {
    defaultFramesToPop,
    defaultShouldPublishStack,
    publicName,
    errorGroup,
  } = {
    ...defaultOptions(),
    ...options,
  };

  const name = publicName || originalName;

  return class InvariantError extends Error {
    framesToPop: number;

    __$name__ = name;
    errorGroup = errorGroup;

    get $kind() {
      return this.__$name__;
    }

    static is = (item: any): item is InvariantError => {
      return item?.$kind === name;
    };

    constructor(
      message = '',
      details?: any,
      framesToPop = defaultFramesToPop,
      shouldPublishStack = defaultShouldPublishStack
    ) {
      super(message);

      this.name = name;
      this.__$name__ = name;
      this.framesToPop = framesToPop;

      const detailsMessage = [originalName, this.stack, details]
        .map((el) => (typeof el !== 'string' ? inspectObject(el) : el))
        .filter(Boolean)
        .join('\n');

      if (detailsMessage) {
        if (typeof process && process.stderr) {
          process.stderr.write(detailsMessage);
        } else {
          console.error(detailsMessage);
        }
      }

      if (!shouldPublishStack) {
        this.stack = '';
      }

      setPrototypeOf(this, InvariantError.prototype);
    }
  };
}
