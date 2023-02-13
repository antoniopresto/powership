[Backland](../README.md) / [Modules](../modules.md) / LogStorm - A simple and super extensive logger.

# Module: LogStorm - A simple and super extensive logger.

## Table of contents

### Interfaces

- [LogMethods](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md)
- [LogStorm](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md)
- [LogstormOptions](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogstormOptions.md)

### Type Aliases

- [ConsoleLogger](LogStorm___A_simple_and_super_extensive_logger_.md#consolelogger)
- [LogArgument](LogStorm___A_simple_and_super_extensive_logger_.md#logargument)
- [LogLevel](LogStorm___A_simple_and_super_extensive_logger_.md#loglevel)
- [LogMethodName](LogStorm___A_simple_and_super_extensive_logger_.md#logmethodname)
- [LogStormHooks](LogStorm___A_simple_and_super_extensive_logger_.md#logstormhooks)

### Variables

- [DEFAULT\_LOG\_LEVEL](LogStorm___A_simple_and_super_extensive_logger_.md#default_log_level)
- [LogLevels](LogStorm___A_simple_and_super_extensive_logger_.md#loglevels)
- [LogLevelsSet](LogStorm___A_simple_and_super_extensive_logger_.md#loglevelsset)
- [LogMethodNames](LogStorm___A_simple_and_super_extensive_logger_.md#logmethodnames)
- [logLevels](LogStorm___A_simple_and_super_extensive_logger_.md#loglevels-1)
- [logstorm](LogStorm___A_simple_and_super_extensive_logger_.md#logstorm)

### Functions

- [capitalize](LogStorm___A_simple_and_super_extensive_logger_.md#capitalize)
- [checkLogLevel](LogStorm___A_simple_and_super_extensive_logger_.md#checkloglevel)
- [createLogger](LogStorm___A_simple_and_super_extensive_logger_.md#createlogger)
- [getProcess](LogStorm___A_simple_and_super_extensive_logger_.md#getprocess)

## Type Aliases

### ConsoleLogger

Ƭ **ConsoleLogger**: typeof `console` extends infer L ? { [K in Extract<keyof L, keyof LogMethods\>]: L[K] } & {} : `never`

#### Defined in

[packages/logstorm/src/index.ts:55](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L55)

___

### LogArgument

Ƭ **LogArgument**: `any`

#### Defined in

[packages/logstorm/src/index.ts:222](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L222)

___

### LogLevel

Ƭ **LogLevel**: keyof typeof [`logLevels`](LogStorm___A_simple_and_super_extensive_logger_.md#loglevels-1)

#### Defined in

[packages/logstorm/src/index.ts:49](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L49)

___

### LogMethodName

Ƭ **LogMethodName**: keyof [`LogMethods`](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md)

#### Defined in

[packages/logstorm/src/index.ts:218](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L218)

___

### LogStormHooks

Ƭ **LogStormHooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `willPrint` | `AsyncPlugin`<{ `method`: [`LogMethodName`](LogStorm___A_simple_and_super_extensive_logger_.md#logmethodname) ; `values`: `any`[]  }, {}\> |

#### Defined in

[packages/logstorm/src/index.ts:214](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L214)

## Variables

### DEFAULT\_LOG\_LEVEL

• **DEFAULT\_LOG\_LEVEL**: ``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"``

#### Defined in

[packages/logstorm/src/index.ts:53](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L53)

___

### LogLevels

• `Const` **LogLevels**: (``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"``)[]

#### Defined in

[packages/logstorm/src/index.ts:50](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L50)

___

### LogLevelsSet

• `Const` **LogLevelsSet**: `Set`<``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"``\>

#### Defined in

[packages/logstorm/src/index.ts:51](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L51)

___

### LogMethodNames

• `Const` **LogMethodNames**: readonly [``"trace"``, ``"debug"``, ``"log"``, ``"info"``, ``"warn"``, ``"error"``, ``"fatal"``]

#### Defined in

[packages/logstorm/src/index.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L3)

___

### logLevels

• `Const` **logLevels**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debug` | `Set`<``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"``\> |
| `error` | `Set`<``"error"`` \| ``"fatal"``\> |
| `fatal` | `Set`<``"fatal"``\> |
| `info` | `Set`<``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"``\> |
| `log` | `Set`<``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"``\> |
| `silent` | `Set`<`string`\> |
| `trace` | `Set`<``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"``\> |
| `warn` | `Set`<``"warn"`` \| ``"error"`` \| ``"fatal"``\> |

#### Defined in

[packages/logstorm/src/index.ts:13](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L13)

___

### logstorm

• `Const` **logstorm**: [`LogStorm`](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md)

#### Defined in

[packages/logstorm/src/index.ts:212](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L212)

## Functions

### capitalize

▸ **capitalize**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[packages/logstorm/src/index.ts:265](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L265)

___

### checkLogLevel

▸ **checkLogLevel**(`level`): [`LogLevel`](LogStorm___A_simple_and_super_extensive_logger_.md#loglevel)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `any` |

#### Returns

[`LogLevel`](LogStorm___A_simple_and_super_extensive_logger_.md#loglevel)

#### Defined in

[packages/logstorm/src/index.ts:269](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L269)

___

### createLogger

▸ **createLogger**(`name`, `level?`, `options?`): [`LogStorm`](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `level` | ``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"`` |
| `options` | [`LogstormOptions`](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogstormOptions.md) |

#### Returns

[`LogStorm`](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md)

#### Defined in

[packages/logstorm/src/index.ts:88](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L88)

___

### getProcess

▸ **getProcess**(): `Partial`<typeof `process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Returns

`Partial`<typeof `process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Defined in

[packages/logstorm/src/index.ts:242](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L242)
