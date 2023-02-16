[Solarwind](../README.md) / [Modules](../modules.md) / [LogStorm - A simple and super extensive logger.](../modules/LogStorm___A_simple_and_super_extensive_logger_.md) / LogstormOptions

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

[packages/logstorm/src/index.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L70)

___

### logger

• `Optional` **logger**: `Partial`<{ `debug`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` ; `error`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` ; `info`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` ; `log`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` ; `trace`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` ; `warn`: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void`  }\>

Defaults to the global `console`

#### Defined in

[packages/logstorm/src/index.ts:65](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L65)

___

### prefix

• `Optional` **prefix**: `string` \| `boolean`

#### Defined in

[packages/logstorm/src/index.ts:60](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L60)

___

### time

• `Optional` **time**: `boolean`

If true, the current time will be printed when logging

#### Defined in

[packages/logstorm/src/index.ts:75](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L75)
