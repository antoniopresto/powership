[Powership](../README.md) / [Modules](../modules.md) / [LogStorm - A simple and super extensive logger.](../modules/LogStorm___A_simple_and_super_extensive_logger_.md) / LogstormOptions

# Interface: LogstormOptions

[LogStorm - A simple and super extensive logger.](../modules/LogStorm___A_simple_and_super_extensive_logger_.md).LogstormOptions

## Table of contents

### Properties

- [color](LogStorm___A_simple_and_super_extensive_logger_.LogstormOptions.md#color)
- [logger](LogStorm___A_simple_and_super_extensive_logger_.LogstormOptions.md#logger)
- [prefix](LogStorm___A_simple_and_super_extensive_logger_.LogstormOptions.md#prefix)
- [time](LogStorm___A_simple_and_super_extensive_logger_.LogstormOptions.md#time)

## Properties

### color

• `Optional` **color**: `string` \| `boolean`

Chalk color to be used in prefix, when the `chalk` package is available

#### Defined in

packages/logstorm/src/index.ts:45

___

### logger

• `Optional` **logger**: `Partial`<{ `debug`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` ; `error`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` ; `info`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` ; `log`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` ; `trace`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` ; `warn`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void`  }\>

Defaults to the global `console`

#### Defined in

packages/logstorm/src/index.ts:40

___

### prefix

• `Optional` **prefix**: `string` \| `boolean`

#### Defined in

packages/logstorm/src/index.ts:35

___

### time

• `Optional` **time**: `boolean`

If true, the current time will be printed when logging

#### Defined in

packages/logstorm/src/index.ts:50
