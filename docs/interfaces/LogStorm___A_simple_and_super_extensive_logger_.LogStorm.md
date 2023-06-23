[Powership](../README.md) / [Modules](../modules.md) / [LogStorm - A simple and super extensive logger.](../modules/LogStorm___A_simple_and_super_extensive_logger_.md) / LogStorm

# Interface: LogStorm

[LogStorm - A simple and super extensive logger.](../modules/LogStorm___A_simple_and_super_extensive_logger_.md).LogStorm

## Hierarchy

- [`LogMethods`](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md)

  ↳ **`LogStorm`**

## Table of contents

### Properties

- [color](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#color)
- [hooks](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#hooks)
- [level](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#level)
- [logger](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#logger)
- [name](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#name)
- [prefix](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#prefix)
- [time](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#time)

### Methods

- [debug](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#debug)
- [error](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#error)
- [fatal](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#fatal)
- [info](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#info)
- [lazyDebug](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#lazydebug)
- [lazyError](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#lazyerror)
- [lazyFatal](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#lazyfatal)
- [lazyInfo](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#lazyinfo)
- [lazyLog](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#lazylog)
- [lazyTrace](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#lazytrace)
- [lazyWarn](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#lazywarn)
- [log](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#log)
- [trace](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#trace)
- [warn](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md#warn)

## Properties

### color

• **color**: `string` \| ``false``

#### Defined in

packages/logstorm/src/index.ts:58

___

### hooks

• **hooks**: [`LogStormHooks`](../modules/LogStorm___A_simple_and_super_extensive_logger_.md#logstormhooks)

#### Defined in

packages/logstorm/src/index.ts:56

___

### level

• **level**: ``"trace"`` \| ``"debug"`` \| ``"log"`` \| ``"info"`` \| ``"warn"`` \| ``"error"`` \| ``"fatal"`` \| ``"silent"``

#### Defined in

packages/logstorm/src/index.ts:55

___

### logger

• **logger**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `debug` | (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `error` | (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `info` | (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `log` | (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `trace` | (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |
| `warn` | (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` |

#### Defined in

packages/logstorm/src/index.ts:57

___

### name

• **name**: `string`

#### Defined in

packages/logstorm/src/index.ts:54

___

### prefix

• **prefix**: `string` \| `boolean`

#### Defined in

packages/logstorm/src/index.ts:60

___

### time

• **time**: `boolean`

#### Defined in

packages/logstorm/src/index.ts:59

## Methods

### debug

▸ **debug**(`...msg`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msg` | `any`[] |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[debug](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#debug)

#### Defined in

packages/logstorm/src/index.ts:201

___

### error

▸ **error**(`...msg`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msg` | `any`[] |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[error](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#error)

#### Defined in

packages/logstorm/src/index.ts:205

___

### fatal

▸ **fatal**(`...msg`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msg` | `any`[] |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[fatal](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#fatal)

#### Defined in

packages/logstorm/src/index.ts:206

___

### info

▸ **info**(`...msg`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msg` | `any`[] |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[info](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#info)

#### Defined in

packages/logstorm/src/index.ts:203

___

### lazyDebug

▸ **lazyDebug**(`getMessage`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getMessage` | () => `MaybePromise`<`any`[]\> |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[lazyDebug](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazydebug)

#### Defined in

packages/logstorm/src/index.ts:209

___

### lazyError

▸ **lazyError**(`getMessage`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getMessage` | () => `MaybePromise`<`any`[]\> |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[lazyError](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazyerror)

#### Defined in

packages/logstorm/src/index.ts:213

___

### lazyFatal

▸ **lazyFatal**(`getMessage`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getMessage` | () => `MaybePromise`<`any`[]\> |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[lazyFatal](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazyfatal)

#### Defined in

packages/logstorm/src/index.ts:214

___

### lazyInfo

▸ **lazyInfo**(`getMessage`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getMessage` | () => `MaybePromise`<`any`[]\> |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[lazyInfo](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazyinfo)

#### Defined in

packages/logstorm/src/index.ts:211

___

### lazyLog

▸ **lazyLog**(`getMessage`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getMessage` | () => `MaybePromise`<`any`[]\> |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[lazyLog](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazylog)

#### Defined in

packages/logstorm/src/index.ts:210

___

### lazyTrace

▸ **lazyTrace**(`getMessage`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getMessage` | () => `MaybePromise`<`any`[]\> |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[lazyTrace](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazytrace)

#### Defined in

packages/logstorm/src/index.ts:208

___

### lazyWarn

▸ **lazyWarn**(`getMessage`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getMessage` | () => `MaybePromise`<`any`[]\> |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[lazyWarn](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazywarn)

#### Defined in

packages/logstorm/src/index.ts:212

___

### log

▸ **log**(`...msg`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msg` | `any`[] |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[log](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#log)

#### Defined in

packages/logstorm/src/index.ts:202

___

### trace

▸ **trace**(`...msg`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msg` | `any`[] |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[trace](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#trace)

#### Defined in

packages/logstorm/src/index.ts:200

___

### warn

▸ **warn**(`...msg`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msg` | `any`[] |

#### Returns

`MaybePromise`<`void`\>

#### Inherited from

[LogMethods](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md).[warn](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#warn)

#### Defined in

packages/logstorm/src/index.ts:204
