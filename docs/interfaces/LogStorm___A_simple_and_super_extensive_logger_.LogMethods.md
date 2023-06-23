[Powership](../README.md) / [Modules](../modules.md) / [LogStorm - A simple and super extensive logger.](../modules/LogStorm___A_simple_and_super_extensive_logger_.md) / LogMethods

# Interface: LogMethods

[LogStorm - A simple and super extensive logger.](../modules/LogStorm___A_simple_and_super_extensive_logger_.md).LogMethods

## Hierarchy

- **`LogMethods`**

  ↳ [`LogStorm`](LogStorm___A_simple_and_super_extensive_logger_.LogStorm.md)

## Table of contents

### Methods

- [debug](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#debug)
- [error](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#error)
- [fatal](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#fatal)
- [info](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#info)
- [lazyDebug](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazydebug)
- [lazyError](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazyerror)
- [lazyFatal](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazyfatal)
- [lazyInfo](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazyinfo)
- [lazyLog](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazylog)
- [lazyTrace](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazytrace)
- [lazyWarn](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#lazywarn)
- [log](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#log)
- [trace](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#trace)
- [warn](LogStorm___A_simple_and_super_extensive_logger_.LogMethods.md#warn)

## Methods

### debug

▸ **debug**(`...msg`): `MaybePromise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...msg` | `any`[] |

#### Returns

`MaybePromise`<`void`\>

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

#### Defined in

packages/logstorm/src/index.ts:204
