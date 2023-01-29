import { createLogger } from 'logstorm';

export const runmateLogger = createLogger('runmate', 'trace', {
  color: 'cyan',
  time: true,
});
