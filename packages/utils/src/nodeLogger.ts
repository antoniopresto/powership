import { getLogLevelInfo, LogLevel, LogLevels, TLogLevel } from './logLevels';
import { inspectObject } from './inspectObject';

export const _defaultLogger: { [K in TLogLevel]: (...args: any[]) => void } = {
  error: console.error,
  debug: console.debug,
  info: console.info,
  warning: console.warn,
  crit: console.error,
};

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
    return this.log('info', [inspect(object, depth)]);
  };

  error = (err: any, extraInfo?: any) => {
    this.log('error', err, extraInfo);
  };

  criticalError = (err: any, extraInfo?: any) => {
    return this.log('crit', err, extraInfo);
  };

  warn = (...data: any[]) => {
    this.log('warning', data);
  };

  info = (...data: any[]) => {
    this.log('info', data);
  };

  debug = (...data: any[]) => {
    this.log('debug', data);
  };

  log = (level: TLogLevel, data: any[], extraInfo?: any) => {
    this.lastLogged = { data, extraInfo };

    if (!LogLevels.includes(level)) {
      console.trace(`INVALID_LOG_LEVEL ${level}`);
      return;
    }

    if (!this.levels.has(level)) return;

    let prefix = `${this.prefix}`;

    let payload: any[] = [prefix];

    for (let el of data) {
      payload.push(typeof el == 'string' ? el : inspect(el));
    }

    try {
      this.logger[level](payload.join(' '), extraInfo);
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
