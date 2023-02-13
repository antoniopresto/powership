[Backland](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / Logger

# Class: Logger

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).Logger

## Table of contents

### Constructors

- [constructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#constructor)

### Properties

- [lastLogged](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#lastlogged)
- [levels](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#levels)
- [logger](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#logger)

### Accessors

- [logCriticalError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#logcriticalerror)
- [logError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#logerror)
- [logInfo](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#loginfo)
- [logWarning](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#logwarning)

### Methods

- [criticalError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#criticalerror)
- [debug](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#debug)
- [error](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#error)
- [info](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#info)
- [object](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#object)
- [warn](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md#warn)

## Constructors

### constructor

• **new Logger**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LoggerOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.LoggerOptions.md) |

#### Defined in

[packages/utils/src/nodeLogger.ts:107](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L107)

## Properties

### lastLogged

• **lastLogged**: ``null`` \| { `data`: `any`  } = `null`

#### Defined in

[packages/utils/src/nodeLogger.ts:105](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L105)

___

### levels

• **levels**: `Set`<``"error"`` \| ``"emerg"`` \| ``"alert"`` \| ``"crit"`` \| ``"warning"`` \| ``"notice"`` \| ``"info"`` \| ``"debug"`` \| ``"none"``\>

#### Defined in

[packages/utils/src/nodeLogger.ts:100](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L100)

___

### logger

• **logger**: [`LoggerMethods`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loggermethods)

#### Defined in

[packages/utils/src/nodeLogger.ts:101](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L101)

## Accessors

### logCriticalError

• `get` **logCriticalError**(): (...`data`: `any`[]) => `void`

**`Deprecated`**

#### Returns

`fn`

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/utils/src/nodeLogger.ts:204](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L204)

___

### logError

• `get` **logError**(): (...`data`: `any`[]) => `void`

**`Deprecated`**

#### Returns

`fn`

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/utils/src/nodeLogger.ts:198](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L198)

___

### logInfo

• `get` **logInfo**(): (...`data`: `any`[]) => `void`

**`Deprecated`**

#### Returns

`fn`

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/utils/src/nodeLogger.ts:216](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L216)

___

### logWarning

• `get` **logWarning**(): (...`data`: `any`[]) => `void`

**`Deprecated`**

#### Returns

`fn`

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/utils/src/nodeLogger.ts:210](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L210)

## Methods

### criticalError

▸ **criticalError**(`...data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/utils/src/nodeLogger.ts:128](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L128)

___

### debug

▸ **debug**(`...data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/utils/src/nodeLogger.ts:140](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L140)

___

### error

▸ **error**(`...data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/utils/src/nodeLogger.ts:124](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L124)

___

### info

▸ **info**(`...data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/utils/src/nodeLogger.ts:136](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L136)

___

### object

▸ **object**(`object`, `depth?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `Record`<`string`, `any`\> | `undefined` |
| `depth` | `number` | `5` |

#### Returns

`void`

#### Defined in

[packages/utils/src/nodeLogger.ts:120](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L120)

___

### warn

▸ **warn**(`...data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/utils/src/nodeLogger.ts:132](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/nodeLogger.ts#L132)
