import { isProduction } from './env';
import { entries } from './typeUtils';
import { Process } from './useProcess';

export const LogLevelsEnum = {
  emerg: 0,
  alert: 1,
  crit: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7,
  none: 100,
} as const;

export const LogLevelEntries = entries(LogLevelsEnum);
export const LogLevels = LogLevelEntries.map((el) => el[0]);

export type LogLevelName = typeof LogLevels[number];
export type LogLevel = LogLevelName | LogLevelName[];

let globalLogLevel: LogLevel = isLogLevel(Process.env.LOG_LEVEL)
  ? Process.env.LOG_LEVEL
  : 'none';

export function isLogLevel(value: any): value is LogLevelName {
  return typeof value === 'string' && (LogLevels as string[]).includes(value);
}

export function getGlobalLogLevel() {
  return globalLogLevel;
}

export function setGlobalLogLevel(level: LogLevel) {
  return (globalLogLevel = level);
}

if (!globalLogLevel && !isProduction()) {
  globalLogLevel = 'error';
}

export function getLogLevelsRecord(
  env: LogLevel = globalLogLevel
): Set<LogLevelName> {
  if (Array.isArray(env)) {
    return new Set(env);
  }

  if (!isLogLevel(env)) {
    console.error(new Error(`Invalid LogLevel ${env}`));
    return new Set<LogLevelName>();
  }

  if (env === 'none') {
    return new Set<LogLevelName>();
  }

  const current = LogLevelsEnum[env];
  const levels = LogLevelEntries.filter(([, value]) => value <= current).map(
    (el) => el[0]
  );
  return new Set<LogLevelName>(levels);
}
