import { createLogger } from 'logstorm';

export const runmateLogger = createLogger('runmate', undefined, {
  color: 'cyan',
  time: true,
});
