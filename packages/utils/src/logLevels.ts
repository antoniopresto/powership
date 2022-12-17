import { isProduction } from './env';
import { tuple } from './typeUtils';
import { Process } from './useProcess';

export const LogLevels = tuple('error', 'info', 'crit', 'warning', 'debug');

export const LogLevelNumbers = [0, 1, 2, '0', '1', '2'] as const;
export type LogLevelNumber = typeof LogLevelNumbers[number];
export type LogLevel = LogLevelNumber | TLogLevel | TLogLevel[];

export type TLogLevel = typeof LogLevels[number];

const LEVEL = Process.env.LOG_LEVEL || '';

if (!LEVEL && !isProduction()) {
  Process.env.LOG_LEVEL = '2';
}

export function getLogLevelInfo(
  env: LogLevel = Process.env.LOG_LEVEL
): Set<TLogLevel> {
  if (Array.isArray(env)) {
    return new Set(env);
  }

  // @ts-ignore
  if (LogLevels.includes(env)) return new Set<TLogLevel>(env);

  env = `${env}`;

  const logInfo = env === '2';
  const logWarn = env === '1';

  if (env === '0') {
    return new Set();
  }

  const levels: TLogLevel[] = ['error', 'crit'];

  if (logInfo) {
    levels.push('info', 'warning');
  }

  if (logWarn) {
    levels.push('warning');
  }

  if (!isProduction()) {
    // levels.push('debug');
  }

  return new Set(levels);
}
