[Powership](../README.md) / [Modules](../modules.md) / LogStorm - A simple and super extensive logger.

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

packages/logstorm/src/index.ts:30

___

### LogArgument

Ƭ **LogArgument**: `any`

#### Defined in

packages/logstorm/src/index.ts:197

___

### LogLevel

Ƭ **LogLevel**: keyof typeof [`logLevels`](LogStorm___A_simple_and_super_extensive_logger_.md#loglevels-1)

#### Defined in

packages/logstorm/src/index.ts:24

___

### LogMethodName

Ƭ **LogMethodName**: keyof [`LogMethods`](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md)

#### Defined in

packages/logstorm/src/index.ts:193

___

### LogStormHooks

Ƭ **LogStormHooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `willPrint` | `AsyncPlugin`<{ `method`: [`LogMethodName`](LogStorm___A_simple_and_super_extensive_logger_.md#logmethodname) ; `values`: `any`[]  }, {}\> |

#### Defined in

packages/logstorm/src/index.ts:189

## Variables

### DEFAULT\_LOG\_LEVEL

• **DEFAULT\_LOG\_LEVEL**: ``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"``

#### Defined in

packages/logstorm/src/index.ts:28

___

### LogLevels

• `Const` **LogLevels**: (``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"``)[]

#### Defined in

packages/logstorm/src/index.ts:25

___

### LogLevelsSet

• `Const` **LogLevelsSet**: `Set`<``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"``\>

#### Defined in

packages/logstorm/src/index.ts:26

___

### LogMethodNames

• `Const` **LogMethodNames**: readonly [``"trace"``, ``"debug"``, ``"log"``, ``"info"``, ``"warn"``, ``"error"``, ``"fatal"``]

#### Defined in

packages/logstorm/src/index.ts:3

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

packages/logstorm/src/index.ts:13

___

### logstorm

• `Const` **logstorm**: [`LogStorm`](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md)

#### Defined in

packages/logstorm/src/index.ts:187

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

packages/logstorm/src/index.ts:240

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

packages/logstorm/src/index.ts:244

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

packages/logstorm/src/index.ts:63

___

### getProcess

▸ **getProcess**(): `Partial`<typeof `process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Returns

`Partial`<typeof `process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Defined in

packages/logstorm/src/index.ts:217
