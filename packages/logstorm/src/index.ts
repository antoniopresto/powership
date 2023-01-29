import * as process from 'process';

import { getLogger } from 'loglevel';
import type {
  Logger,
  LogLevel,
  LogLevelDesc,
  LogLevelNames,
  LogLevelNumbers,
  MethodFactory,
  RootLogger,
} from 'loglevel';
import { AsyncPlugin, createAsyncPlugin } from 'plugin-hooks';

export type {
  LogLevel,
  LogLevelDesc,
  LogLevelNames,
  LogLevelNumbers,
  MethodFactory,
  RootLogger,
};

//  TRACE: 0;
//         DEBUG: 1;
//         INFO: 2;
//         WARN: 3;
//         ERROR: 4;
//         SILENT: 5;

const loggerMethodNames = [
  'trace',
  'debug',
  'log', // alias to debug
  'info',
  'warn',
  'error',
  'silent',
] as const;

export function createLogger(
  name: string,
  plugin?: (hooks: LogStormHooks) => any
): LogStorm {
  const logger = getLogger(name) as unknown as LogStorm;

  try {
    const logLevel = process.env.LOG_LEVEL?.match(/^\d$/)
      ? +process.env.LOG_LEVEL
      : process.env.LOG_LEVEL;

    logger.setLevel(logLevel as any);
  } catch (e) {}

  logger.hooks = {
    willLog: createAsyncPlugin(),
  };

  if (plugin) {
    plugin(logger.hooks);
  }

  loggerMethodNames.forEach((_methodName) => {
    if (_methodName === 'silent') return;
    const methodName = _methodName;

    const original = logger[methodName];
    const lazyMethodName = `lazy${methodName
      .slice(0, 1)
      .toUpperCase()}${methodName.slice(1)}`;

    async function fn(this: any, ...args: any[]) {
      if (typeof args[0]?.__logstormCallback__ === 'function') {
        args = await args[0].__logstormCallback__();
      }

      const changed = await logger.hooks.willLog.dispatch(
        { values: args, method: methodName },
        {}
      );

      return original.apply(this, changed.values);
    }

    logger[methodName] = fn;

    logger[lazyMethodName] = function lazyLog(this: any, cb) {
      if (typeof cb !== 'function') {
        console.error(`expected ${lazyMethodName} callback to be a function.`);
      }
      return fn({ __logstormCallback__: cb });
    };
  });

  return logger;
}

export const logstorm = createLogger('global');

export type LogArgument = any;

export type LogStorm = { [K in keyof LogMethods]: LogMethods[K] } & {
  hooks: LogStormHooks;
} & {
  [K in `lazy${Capitalize<LogMethodName>}`]: (
    getArguments: () => MaybePromise<LogArgument[]>
  ) => MaybePromise<void>;
} & ({
    [K in Exclude<keyof Logger, LogMethodName>]: Logger[K];
  } & {}) extends infer R
  ? { [K in keyof R]: R[K] } & {}
  : never;

export type LogStormHooks = {
  willLog: AsyncPlugin<{ method: LogMethodName; values: any[] }, {}>;
};

export type LogMethodName = keyof LogMethods;

type MaybePromise<T> = PromiseLike<T> | T;

export interface LogMethods {
  trace(...msg: any[]): MaybePromise<void>;

  /**
   * Output debug message to console including appropriate icons
   *
   * @param msg any data to log to the console
   */
  debug(...msg: any[]): MaybePromise<void>;

  /**
   * Output debug message to console including appropriate icons
   *
   * @param msg any data to log to the console
   */
  log(...msg: any[]): MaybePromise<void>;

  /**
   * Output info message to console including appropriate icons
   *
   * @param msg any data to log to the console
   */
  info(...msg: any[]): MaybePromise<void>;

  /**
   * Output warn message to console including appropriate icons
   *
   * @param msg any data to log to the console
   */
  warn(...msg: any[]): MaybePromise<void>;

  /**
   * Output error message to console including appropriate icons
   *
   * @param msg any data to log to the console
   */
  error(...msg: any[]): MaybePromise<void>;
}
