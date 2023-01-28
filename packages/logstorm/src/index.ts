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
  Logger,
  LogLevel,
  LogLevelDesc,
  LogLevelNames,
  LogLevelNumbers,
  MethodFactory,
  RootLogger,
};

export const loggerMethodNames: { [K in LogMethodName]: K } = {
  debug: 'debug',
  error: 'error',
  info: 'info',
  log: 'log',
  trace: 'trace',
  warn: 'warn',
};

export function createLogger(
  name: string,
  plugin?: (hooks: LogStormHooks) => any
): LogStorm {
  const logger = getLogger(name) as unknown as LogStorm;
  logger.hooks = {
    willLog: createAsyncPlugin(),
  };

  if (plugin) {
    plugin(logger.hooks);
  }

  Object.values(loggerMethodNames).forEach((methodName) => {
    const original = logger[methodName];

    logger[methodName] = async function unnamed(this: any, ...args: any[]) {
      const changed = await logger.hooks.willLog.dispatch(
        { values: args, method: methodName },
        {}
      );
      return original.apply(this, changed.values);
    };
  });

  return logger;
}

export const logstorm = createLogger('global');

export type LogStorm = { [K in keyof LogMethods]: LogMethods[K] } & {
  hooks: LogStormHooks;
};

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
