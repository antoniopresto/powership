import * as util from 'util';

import winston from 'winston';
import SlackHook from 'winston-slack-webhook-transport';

import { getLogLevelInfo, LogLevels, TLogLevel } from './logLevels';

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

const ALLOWED_LOG_LEVELS = getLogLevelInfo();

const logger = winston.createLogger({
  levels: {
    // RFC5424 (https://www.npmjs.com/package/winston#logging-levels)
    emerg: 0,
    alert: 1,
    crit: 2,
    error: 3,
    warning: 4,
    notice: 5,
    info: 6,
    debug: -1,
  },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

if (SLACK_WEBHOOK_URL) {
  logger.add(
    new SlackHook({
      level: 'crit',
      webhookUrl: SLACK_WEBHOOK_URL,
    })
  );
}

export class Logger {
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
    Logger.lastLogged = { data, extraInfo };

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
      logger.log(level, payload.join('\n'), extraInfo);
    } catch (e) {
      console.trace(e);
    }
  }

  static logError = (err: any, extraInfo?: any) => {
    const logger = new Logger('');
    logger.error(err, extraInfo);
  };

  static logCriticalError = (err: any, extraInfo?: any) => {
    const logger = new Logger('');
    logger.criticalError(err, extraInfo);
  };

  static log = (level: TLogLevel, data: any) => {
    const logger = new Logger('');
    logger.log(level, data);
  };

  static logWarning = (data: any) => {
    const logger = new Logger('');
    logger.warn(data);
  };

  static logInfo = (data: any) => {
    const logger = new Logger('');
    logger.info(data);
  };

  static debug = (data: any) => {
    const logger = new Logger('');
    logger.debug(data);
  };
}

export function inspect(arg: any, depth = 5) {
  return util.inspect(arg, { depth });
}
