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

[packages/logstorm/src/index.ts:30](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L30)

___

### LogArgument

Ƭ **LogArgument**: `any`

#### Defined in

[packages/logstorm/src/index.ts:184](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L184)

___

### LogLevel

Ƭ **LogLevel**: keyof typeof [`logLevels`](LogStorm___A_simple_and_super_extensive_logger_.md#loglevels-1)

#### Defined in

[packages/logstorm/src/index.ts:24](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L24)

___

### LogMethodName

Ƭ **LogMethodName**: keyof [`LogMethods`](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md)

#### Defined in

[packages/logstorm/src/index.ts:180](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L180)

___

### LogStormHooks

Ƭ **LogStormHooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `willPrint` | `AsyncPlugin`<{ `method`: [`LogMethodName`](LogStorm___A_simple_and_super_extensive_logger_.md#logmethodname) ; `values`: `any`[]  }, {}\> |

#### Defined in

[packages/logstorm/src/index.ts:176](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L176)

## Variables

### DEFAULT\_LOG\_LEVEL

• **DEFAULT\_LOG\_LEVEL**: ``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"``

#### Defined in

[packages/logstorm/src/index.ts:28](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L28)

___

### LogLevels

• `Const` **LogLevels**: (``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"``)[]

#### Defined in

[packages/logstorm/src/index.ts:25](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L25)

___

### LogLevelsSet

• `Const` **LogLevelsSet**: `Set`<``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"``\>

#### Defined in

[packages/logstorm/src/index.ts:26](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L26)

___

### LogMethodNames

• `Const` **LogMethodNames**: readonly [``"trace"``, ``"debug"``, ``"log"``, ``"info"``, ``"warn"``, ``"error"``, ``"fatal"``]

#### Defined in

[packages/logstorm/src/index.ts:3](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L3)

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

[packages/logstorm/src/index.ts:13](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L13)

___

### logstorm

• `Const` **logstorm**: [`LogStorm`](../interfaces/LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md)

#### Defined in

[packages/logstorm/src/index.ts:174](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L174)

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

[packages/logstorm/src/index.ts:227](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L227)

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

[packages/logstorm/src/index.ts:231](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L231)

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

[packages/logstorm/src/index.ts:63](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L63)

___

### getProcess

▸ **getProcess**(): `Partial`<typeof `process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Returns

`Partial`<typeof `process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Defined in

[packages/logstorm/src/index.ts:204](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L204)
