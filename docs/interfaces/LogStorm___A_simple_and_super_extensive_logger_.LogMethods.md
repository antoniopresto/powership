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

[packages/logstorm/src/index.ts:188](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L188)

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

[packages/logstorm/src/index.ts:192](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L192)

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

[packages/logstorm/src/index.ts:193](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L193)

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

[packages/logstorm/src/index.ts:190](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L190)

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

[packages/logstorm/src/index.ts:196](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L196)

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

[packages/logstorm/src/index.ts:200](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L200)

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

[packages/logstorm/src/index.ts:201](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L201)

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

[packages/logstorm/src/index.ts:198](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L198)

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

[packages/logstorm/src/index.ts:197](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L197)

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

[packages/logstorm/src/index.ts:195](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L195)

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

[packages/logstorm/src/index.ts:199](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L199)

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

[packages/logstorm/src/index.ts:189](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L189)

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

[packages/logstorm/src/index.ts:187](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L187)

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

[packages/logstorm/src/index.ts:191](https://github.com/antoniopresto/powership/blob/2672a73/packages/logstorm/src/index.ts#L191)
