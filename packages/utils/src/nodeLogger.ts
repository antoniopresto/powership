import { getLogLevelInfo, LogLevel, LogLevels, TLogLevel } from './logLevels';
import { inspectObject } from './inspectObject';
import { AnyFunction } from './typeUtils';

function stringify(write: AnyFunction, ...args: any[]) {
  for (let val of args) {
    write(typeof val === 'string' ? val : inspectObject(val));
  }
}

export const _defaultLogger: { [K in TLogLevel]: (...args: any[]) => void } = ((
  value
) => {
  const log = value?.stdout.write
    ? (...args: any[]) => {
        stringify(value.stdout.write.bind(value.stdout), '\n', ...args, '\n');
      }
    : undefined;

  const err = value?.stderr.write
    ? (...args: any[]) => {
        stringify(value.stderr.write.bind(value.stderr), '\n', ...args, '\n');
      }
    : undefined;

  const warn = value?.stdout.write
    ? (...args: any[]) => {
        stringify(value.stdout.write.bind(value.stdout), '\n', ...args, '\n');
      }
    : undefined;

  const info = value?.stdout.write
    ? (...args: any[]) => {
        stringify(value.stdout.write.bind(value.stdout), '\n', ...args, '\n');
      }
    : undefined;

  return {
    error: err || console.error,
    debug: log || console.debug,
    info: info || console.info,
    warning: warn || console.warn,
    crit: err || console.error,
  };
})(typeof process === 'object' ? process : undefined);

export interface LoggerOptions {
  prefix?: string;
  level?: LogLevel;
  logger?: typeof _defaultLogger;
}

export class Logger {
  levels: Set<TLogLevel>;
  logger: typeof _defaultLogger;

  private prefix: string;

  lastLogged: { data: any; extraInfo: any } | null = null; // util on tests;

  constructor(options: LoggerOptions = {}) {
    const { level = 2, prefix = '', logger = _defaultLogger } = options;
    this.logger = logger;

    this.prefix = prefix;

    if (Array.isArray(level)) {
      this.levels = new Set(level);
    } else {
      this.levels = getLogLevelInfo(level);
    }
  }

  object = (object: Record<string, any>, depth = 5) => {
    return this._log('info', [inspect(object, depth)]);
  };

  error = (err: any, extraInfo?: any) => {
    this._log('error', [err], extraInfo);
  };

  criticalError = (err: any, extraInfo?: any) => {
    return this._log('crit', [err], extraInfo);
  };

  warn = (...data: any[]) => {
    this._log('warning', [data]);
  };

  info = (...data: any[]) => {
    this._log('info', [data]);
  };

  debug = (...data: any[]) => {
    this._log('debug', [data]);
  };

  _log = (...args: [TLogLevel, any[], any] | [TLogLevel, any[]]) => {
    const argsLength = args.length;
    const [level, data, extraInfo] = args;

    this.lastLogged = { data, extraInfo };

    if (!LogLevels.includes(level)) {
      console.trace(`INVALID_LOG_LEVEL ${level}`);
      return;
    }

    if (!this.levels.has(level)) return;

    let prefix = `${this.prefix}`;

    let payload: any[] = [prefix];

    if (Array.isArray(data)) {
      for (let el of data) {
        payload.push(typeof el == 'string' ? el : inspect(el));
      }
    } else {
      payload.push(inspect(data));
    }

    try {
      argsLength === 3
        ? this.logger[level](payload.join(' '), extraInfo)
        : this.logger[level](payload.join(' '));
    } catch (e) {
      console.trace(e);
    }
  };

  // for back compatibility
  logError = (err: any, extraInfo?: any) => {
    NodeLogger.error(err, extraInfo);
  };

  logCriticalError = (err: any, extraInfo?: any) => {
    NodeLogger.criticalError(err, extraInfo);
  };

  logWarning = (data: any) => {
    NodeLogger.warn(data);
  };

  logInfo = (data: any) => {
    NodeLogger.info(data);
  };
}

export const NodeLogger = new Logger();
export const GlobalLogger = NodeLogger;

export function inspect(arg: any, depth = 5) {
  return inspectObject(arg, { depth });
}
