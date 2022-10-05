import { isProduction } from './env';
import { tuple } from './typeUtils';
import { Process } from './useProcess';

export const LogLevels = tuple('error', 'info', 'crit', 'warning', 'debug');

export type TLogLevel = typeof LogLevels[number];

const LEVEL = Process.env.LOG_LEVEL || '';

if (!LEVEL && !isProduction()) {
  Process.env.LOG_LEVEL = '2';
}

export function getLogLevelInfo(): Set<TLogLevel> {
  const env = Process.env.LOG_LEVEL;
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
    levels.push('debug');
  }

  return new Set(levels);
}
