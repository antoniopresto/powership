import { createLogger } from 'logstorm';

const level: any = process.env.LOG_LEVEL || 'trace';

export const runmateLogger = createLogger('runmate', level, {
  color: 'cyan',
  time: true,
});

