[Solarwind](../README.md) / [Modules](../modules.md) / [LogStorm - A simple and super extensive logger.](../modules/LogStorm___A_simple_and_super_extensive_logger_.md) / LogMethods

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

[packages/logstorm/src/index.ts:226](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L226)

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

[packages/logstorm/src/index.ts:230](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L230)

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

[packages/logstorm/src/index.ts:231](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L231)

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

[packages/logstorm/src/index.ts:228](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L228)

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

[packages/logstorm/src/index.ts:234](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L234)

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

[packages/logstorm/src/index.ts:238](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L238)

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

[packages/logstorm/src/index.ts:239](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L239)

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

[packages/logstorm/src/index.ts:236](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L236)

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

[packages/logstorm/src/index.ts:235](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L235)

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

[packages/logstorm/src/index.ts:233](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L233)

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

[packages/logstorm/src/index.ts:237](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L237)

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

[packages/logstorm/src/index.ts:227](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L227)

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

[packages/logstorm/src/index.ts:225](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L225)

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

[packages/logstorm/src/index.ts:229](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/logstorm/src/index.ts#L229)
