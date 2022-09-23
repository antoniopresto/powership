import * as util from 'util';

import { getLogLevelInfo, LogLevels, TLogLevel } from './logLevels';

const ALLOWED_LOG_LEVELS = getLogLevelInfo();

const logger: { [K in TLogLevel]: (...args: any[]) => void } = {
  error: console.error,
  debug: console.debug,
  info: console.info,
  warning: console.warn,
  crit: console.error,
};

export class NodeLogger {
  private prefix: string;

  static lastLogged: { data: any; extraInfo: any } | null = null; // util on tests;

  constructor(prefix = '') {
    this.prefix = prefix;
  }

  object(object: Record<string, any>, depth = 5) {
    return this.log('info', inspect(object, depth));
  }

  error(err: any, extraInfo?: any) {
    this.log('error', err, extraInfo);
  }

  criticalError(err: any, extraInfo?: any) {
    return this.log('crit', err, extraInfo);
  }

  warn(data: any) {
    this.log('warning', data);
  }

  info(data: any) {
    this.log('info', data);
  }

  debug(data: any) {
    this.log('debug', data);
  }

  log(level: TLogLevel, data: any, extraInfo?: any) {
    NodeLogger.lastLogged = { data, extraInfo };

    if (!LogLevels.includes(level)) {
      console.trace(`INVALID_LOG_LEVEL ${level}`);
      return;
    }

    if (!ALLOWED_LOG_LEVELS.has(level)) return;

    let prefix = `${this.prefix}`;

    let payload: any[] = [prefix];

    if (typeof data !== 'string') {
      data = inspect(data);
    }

    payload.push(data);

    try {
      logger[level](payload.join('\n'), extraInfo);
    } catch (e) {
      console.trace(e);
    }
  }

  static logError = (err: any, extraInfo?: any) => {
    const logger = new NodeLogger('');
    logger.error(err, extraInfo);
  };

  static logCriticalError = (err: any, extraInfo?: any) => {
    const logger = new NodeLogger('');
    logger.criticalError(err, extraInfo);
  };

  static log = (level: TLogLevel, data: any) => {
    const logger = new NodeLogger('');
    logger.log(level, data);
  };

  static logWarning = (data: any) => {
    const logger = new NodeLogger('');
    logger.warn(data);
  };

  static logInfo = (data: any) => {
    const logger = new NodeLogger('');
    logger.info(data);
  };

  static debug = (data: any) => {
    const logger = new NodeLogger('');
    logger.debug(data);
  };
}

export function inspect(arg: any, depth = 5) {
  return util.inspect(arg, { depth });
}
