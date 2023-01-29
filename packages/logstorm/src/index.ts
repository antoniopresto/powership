import { AsyncPlugin, createAsyncPlugin } from 'plugin-hooks';

export const LogMethodNames = [
  'trace',
  'debug',
  'log',
  'info',
  'warn',
  'error',
  'fatal',
] as const;

export const logLevels = {
  trace: new Set(LogMethodNames),
  debug: new Set(['debug', 'log', 'info', 'warn', 'error', 'fatal'] as const),
  log: new Set(['log', 'info', 'warn', 'error', 'fatal'] as const),
  info: new Set(['info', 'warn', 'error', 'fatal'] as const),
  warn: new Set(['warn', 'error', 'fatal'] as const),
  error: new Set(['error', 'fatal'] as const),
  fatal: new Set(['fatal'] as const),
  silent: new Set([] as string[]),
} as const;

export type LogLevel = keyof typeof logLevels;
export const LogLevels = Object.keys(logLevels) as LogLevel[];
export const LogLevelsSet = new Set(LogLevels);

export let DEFAULT_LOG_LEVEL = 'warn' as LogLevel;

export type ConsoleLogger = typeof console extends infer L
  ? { [K in Extract<keyof L, keyof LogMethods>]: L[K] } & {}
  : never;

export interface LogstormOptions {
  /**
   * Defaults to the global `console`
   */
  logger?: Partial<ConsoleLogger>;

  /**
   * Chalk color to be used in prefix, when the `chalk` package is available
   */
  color?: string | boolean; // default to cyan

  /**
   * If true, the current time will be printed when logging
   */
  time?: boolean;
}

export interface LogStorm extends LogMethods {
  name: string;
  level: LogLevel;
  hooks: LogStormHooks;
  logger: ConsoleLogger;
  color: string | false;
  time: boolean;
}

export function createLogger(
  name: string,
  level: LogLevel = getProcess().env.LOG_LEVEL || DEFAULT_LOG_LEVEL,
  options: LogstormOptions = {}
): LogStorm {
  //

  //
  const self: Omit<LogStorm, LogMethodName> = {
    name,
    logger: options.logger || (console as any),
    hooks: {
      willPrint: createAsyncPlugin(),
    },
    level: checkLogLevel(level),
    time: options.time ?? true,
    color: getColor(options.color),
  };

  const chalk = (() => {
    try {
      // @only-server
      return require('chalk') as typeof import('chalk');
    } catch (e) {
      return undefined;
    }
  })();

  LogMethodNames.forEach((methodName) => {
    const loggerKey = ((): keyof typeof console => {
      if (methodName === 'fatal') return 'error';
      return methodName;
    })();

    const lazyMethodName = `lazy${capitalize(methodName)}`;

    async function logFn(this: any, ...args: LogArgument[]) {
      //@ts-ignore
      if (!logLevels[self.level]?.has(methodName)) return;
      const handler = self.logger?.[loggerKey];
      if (typeof handler !== 'function') return;

      const colorize = chalk?.[getColor(self.color) || ''];

      let time = '';
      const prefix = (() => {
        let pre = `${self.name === 'LogStorm' ? '' : self.name}`;

        if (self.time) {
          time = new Date().toISOString();
        }

        if (pre) {
          pre = `${time} ${
            typeof colorize === 'function' ? colorize(pre) : pre
          }`;
          pre += '\n';
        } else {
          pre = time + '\n';
        }

        return pre;
      })();

      if (typeof args[0]?.__logstormCallback__ === 'function') {
        args = await args[0].__logstormCallback__();
      }

      if (colorize && prefix) {
      }

      if (prefix) {
        args.unshift('➤ ', prefix);
      }

      const changed = await self.hooks.willPrint.dispatch(
        { values: args, method: methodName },
        {}
      );

      return handler.apply(this, changed.values);
    }

    try {
      Object.defineProperty(logFn, 'name', { value: methodName });
    } catch (e) {}

    self[methodName] = logFn;

    self[lazyMethodName] = function lazyLog(this: any, cb) {
      if (typeof cb !== 'function') {
        console.error(`expected ${lazyMethodName} callback to be a function.`);
        cb = () => {};
      }
      return logFn({ __logstormCallback__: cb });
    };
  });

  return self as LogStorm;
}

export const logstorm = createLogger('LogStorm');

export type LogStormHooks = {
  willPrint: AsyncPlugin<{ method: LogMethodName; values: any[] }, {}>;
};

export type LogMethodName = keyof LogMethods;

type MaybePromise<T> = PromiseLike<T> | T;

export type LogArgument = any;

export interface LogMethods {
  trace(...msg: LogArgument[]): MaybePromise<void>;
  debug(...msg: LogArgument[]): MaybePromise<void>;
  log(...msg: LogArgument[]): MaybePromise<void>; // alias to debug
  info(...msg: LogArgument[]): MaybePromise<void>;
  warn(...msg: LogArgument[]): MaybePromise<void>;
  error(...msg: LogArgument[]): MaybePromise<void>;
  fatal(...msg: LogArgument[]): MaybePromise<void>;

  lazyTrace(getMessage: () => MaybePromise<LogArgument[]>): MaybePromise<void>;
  lazyDebug(getMessage: () => MaybePromise<LogArgument[]>): MaybePromise<void>;
  lazyLog(getMessage: () => MaybePromise<LogArgument[]>): MaybePromise<void>; // alias to lazyDebug
  lazyInfo(getMessage: () => MaybePromise<LogArgument[]>): MaybePromise<void>;
  lazyWarn(getMessage: () => MaybePromise<LogArgument[]>): MaybePromise<void>;
  lazyError(getMessage: () => MaybePromise<LogArgument[]>): MaybePromise<void>;
  lazyFatal(getMessage: () => MaybePromise<LogArgument[]>): MaybePromise<void>;
}

export function getProcess(): Partial<typeof process> & {
  env: Record<string, any>;
  cwd(): string;
  isMock?: boolean;
} {
  if (typeof process === 'object') return process;

  const defaultProcess = {
    env: {},
    cwd() {
      return '';
    },
    isMock: true,
  };

  if (typeof window === 'object') {
    window.process = window.process || defaultProcess;
    return window.process;
  }

  return defaultProcess;
}

export function capitalize(text: string) {
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
}

export function checkLogLevel(level: any): LogLevel {
  const valid = LogLevelsSet.has(level);

  if (!valid) {
    console.warn(
      `Logstorm: "${level}" is not a valid log level. "silent" will be used as level.`
    );
    return 'silent';
  }

  return level;
}

function getColor(color: unknown): string | false {
  if (typeof color === 'string') return color;
  if (color === true) return 'cyan';
  return false;
}

// function getStack(parent?: any) {
//   const err = new Error();
//
//   captureStackTrace(err, parent === undefined ? getStack : parent);
//
//   return err.stack || '';
// }
//
// function captureStackTrace(error: any, parent?: any) {
//   if (typeof Error.captureStackTrace === 'function') {
//     return Error.captureStackTrace(error, parent);
//   }
//
//   const container = new Error();
//
//   Object.defineProperty(error, 'stack', {
//     configurable: true,
//     get() {
//       const { stack } = container;
//       Object.defineProperty(this, 'stack', { value: stack });
//       return stack;
//     },
//   });
// }
//
//
// function getLogger(parentFunction?: any): ConsoleLogger {
//   if (options.logger) return options.logger as any;
//
//   if (
//     typeof process === 'object' &&
//     typeof process?.stdout?.write === 'function'
//   ) {
//     const out = (value: string) => {
//       try {
//         process.stdout.write(value);
//       } catch (e) {
//         console.log(value);
//       }
//     };
//
//     const error = (value: string) => {
//       try {
//         process.stderr.write(value);
//       } catch (e) {
//         console.log(value);
//       }
//     };
//
//     const inspect = ((): typeof import('util').inspect => {
//       try {
//         return require('util').inspect;
//       } catch (e) {
//         return ((v) => v) as any;
//       }
//     })();
//
//     const toString = (data: any[]) => {
//       return data.map((el) => inspect(el)).join(' ');
//     };
//
//     const Logger: ConsoleLogger = {
//       warn(...data) {
//         out(toString(data));
//       },
//       log(...data) {
//         out(toString(data));
//       },
//       trace(...data) {
//         out(toString(data) + '\n' + getStack(parentFunction));
//       },
//       info(...data) {
//         out(toString(data));
//       },
//       error(...data) {
//         error(toString(data) + '\n' + getStack(parentFunction));
//       },
//       debug(...data) {
//         out(toString(data) + '\n' + getStack(parentFunction));
//       },
//     };
//
//     return Logger;
//   }
//
//   return console as any;
// }
