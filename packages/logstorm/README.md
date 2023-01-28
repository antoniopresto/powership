# logstorm

logstorm provides a logging library built on top of loglevel.

It allows for custom plugin hooks to be added to the logging process and also provides a global logger instance.

## Installation

```bash
 npm install logstorm
```

## Example

```typescript
import { createLogger, logstorm } from 'logstorm';

const plugin = (hooks) => {
  hooks.willLog.add(async ({ values, method }) => {
    //
    // Here you can intercept any call,
    //  see https://www.npmjs.com/package/plugin-hooks to learn how this plugin works
    await writeToExternalSource(method, values);

    // you can return the changed value
    return { values: [...values, 'Added by plugin'] };
  });
};

const customLogger = createLogger('custom', plugin);

customLogger.info('This message will have a plugin added to it');

logstorm.debug('This is a debug message from the global logger');

// You can use the lazy* methods to run expensive tasks, and return a
//   list of arguments to the logger.
//   In this example, the callback should return a list of arguments for logger.info
logger.lazyInfo(() => Promise.resolve([JSON.stringify(value, null, 2)]));
```

# Usage

## Basic Usage

To start using logstorm, you can import the logstorm variable and use it to log messages.

```typescript
import { logstorm } from 'logstorm';

logstorm.info('This is an info message');
```

## Custom Logger

You can also create a custom logger with a specific name.

import { createLogger } from 'logstorm';

const customLogger = createLogger('custom');

customLogger.debug('This is a debug message');

## Plugins

logstorm allows you to add custom plugin hooks to the logging process.
You can do this by passing a plugin function to the createLogger function.

```typescript
import { createLogger } from 'logstorm';

const plugin = (hooks) => {
  hooks.willLog.add(async ({ values, method }) => {
    writeToExternalSource(method, values);

    return { values: [...values, 'Added by plugin'] };
  });
};

const logger = createLogger('loggerWithPlugin', plugin);

logger.info('This message will have a plugin added to it');
```

## API

- `createLogger(name: string, plugin?: (hooks: LogStormHooks) => any): LogStorm`

  Creates a new logger instance with the given name. Optionally, you can pass in a plugin function to add custom hooks to the logging process.

- `logstorm: LogStorm`

  The global logger instance.

# Contributing

If you are interested in contributing to logstorm, please open an issue or submit a pull request with your suggested changes.
