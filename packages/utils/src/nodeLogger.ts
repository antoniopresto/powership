import { inspectObject } from './inspectObject';
import { isBrowser } from './isBrowser';
import {
  getLogLevelsRecord,
  LogLevel,
  LogLevelName,
  LogLevels,
} from './logLevels';
import { getStack } from './stackTrace';
import { AnyFunction } from './typings';

function stringify(write: AnyFunction, ...args: any[]) {
  for (let val of args) {
    write(typeof val === 'string' ? val : inspectObject(val));
  }
}

export type LoggerMethods = { [K in LogLevelName]: (...args: any[]) => void };

export const _defaultLogger: LoggerMethods = ((value) => {
  const partial = (() => {
    if (!isBrowser() && typeof process === 'object' && value?.stdout?.write) {
      const log = value?.stdout.write
        ? (...args: any[]) => {
            stringify(
              value.stdout.write.bind(value.stdout),
              '\n',
              ...args,
              '\n'
            );
          }
        : undefined;

      const err = value?.stderr.write
        ? (...args: any[]) => {
            stringify(
              value.stderr.write.bind(value.stderr),
              '\n',
              ...args,
              '\n'
            );
          }
        : undefined;

      const warn = value?.stdout.write
        ? (...args: any[]) => {
            stringify(
              value.stdout.write.bind(value.stdout),
              '\n',
              ...args,
              '\n'
            );
          }
        : undefined;

      const info = value?.stdout.write
        ? (...args: any[]) => {
            stringify(
              value.stdout.write.bind(value.stdout),
              '\n',
              ...args,
              '\n'
            );
          }
        : undefined;

      return {
        info,
        warn,
        log,
        err,
      };
    } else {
      return {
        error: console.error,
        debug: console.debug,
        info: console.info,
        warning: console.warn,
        crit: console.error,
      };
    }
  })();

  return {
    ...LogLevels.reduce((acc, next) => {
      return {
        ...acc,
        [next]: partial[next] || partial.info,
      };
    }, {} as LoggerMethods),
  };
})(typeof process === 'object' ? process : undefined);

export interface LoggerOptions {
  prefix?: string;
  level?: LogLevel;
  logger?: typeof _defaultLogger;
}

export class Logger {
  levels: Set<LogLevelName>;
  logger: typeof _defaultLogger;

  private prefix: string;

  lastLogged: { data: any } | null = null; // util on tests;

  constructor(options: LoggerOptions = {}) {
    const { level = 'error', prefix = '', logger = _defaultLogger } = options;
    this.logger = logger;

    this.prefix = prefix;

    if (Array.isArray(level)) {
      this.levels = new Set(level);
    } else {
      this.levels = getLogLevelsRecord(level);
    }
  }

  object = (object: Record<string, any>, depth = 5) => {
    return this._log('info', inspect(object, depth));
  };

  error = (...data: any[]) => {
    this._log('error', ...data);
  };

  criticalError = (...data: any[]) => {
    return this._log('crit', ...data);
  };

  warn = (...data: any[]) => {
    this._log('warning', ...data);
  };

  info = (...data: any[]) => {
    this._log('info', ...data);
  };

  debug = (...data: any[]) => {
    this._log('debug', ...data);
  };

  // get force(): Logger {
  //   const self = this;
  //   return new Proxy(
  //     {},
  //     {
  //       get(_, method: string) {
  //         const value = self[method];
  //         if (value !== 'function') return value;
  //         const current = self.levels;
  //         self.levels = new Set<LogLevelName>(getLogLevelsRecord('debug'));
  //
  //         function temp(...args: any) {
  //           self[method](...args);
  //           self.levels = current;
  //         }
  //
  //         Object.defineProperty(temp, 'name', {
  //           value: `force_${method}`,
  //         });
  //
  //         return temp.bind(self);
  //       },
  //     }
  //   ) as any;
  // }

  protected _log = (level: LogLevelName, ...data: any[]) => {
    this.lastLogged = { data };

    if (!LogLevels.includes(level)) {
      console.trace(`INVALID_LOG_LEVEL ${level}`);
      return;
    }

    if (!this.levels.has(level)) return;

    let prefix = `${this.prefix}`;

    const payload = [
      prefix,
      ...data.map((el) => (typeof el == 'string' ? el : inspect(el))),
      getStack(),
    ];

    try {
      return this.logger[level](payload.join(' '));
    } catch (e) {
      console.trace(e);
    }
  };

  /**
   * @deprecated
   */
  get logError() {
    return NodeLogger.error;
  }
  /**
   * @deprecated
   */
  get logCriticalError() {
    return NodeLogger.criticalError;
  }
  /**
   * @deprecated
   */
  get logWarning() {
    return NodeLogger.warn;
  }
  /**
   * @deprecated
   */
  get logInfo() {
    return NodeLogger.info;
  }
}

export const NodeLogger = new Logger();
export const GlobalLogger = NodeLogger;

export function inspect(arg: any, depth = 5) {
  return inspectObject(arg, { depth });
}
