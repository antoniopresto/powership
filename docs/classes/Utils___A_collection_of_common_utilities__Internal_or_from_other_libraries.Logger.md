[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / Logger

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

[packages/utils/src/nodeLogger.ts:108](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L108)

## Properties

### lastLogged

• **lastLogged**: ``null`` \| { `data`: `any`  } = `null`

#### Defined in

[packages/utils/src/nodeLogger.ts:106](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L106)

___

### levels

• **levels**: `Set`<``"error"`` \| ``"emerg"`` \| ``"alert"`` \| ``"crit"`` \| ``"warning"`` \| ``"notice"`` \| ``"info"`` \| ``"debug"`` \| ``"none"``\>

#### Defined in

[packages/utils/src/nodeLogger.ts:101](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L101)

___

### logger

• **logger**: [`LoggerMethods`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loggermethods)

#### Defined in

[packages/utils/src/nodeLogger.ts:102](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L102)

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

[packages/utils/src/nodeLogger.ts:205](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L205)

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

[packages/utils/src/nodeLogger.ts:199](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L199)

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

[packages/utils/src/nodeLogger.ts:217](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L217)

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

[packages/utils/src/nodeLogger.ts:211](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L211)

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

[packages/utils/src/nodeLogger.ts:129](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L129)

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

[packages/utils/src/nodeLogger.ts:141](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L141)

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

[packages/utils/src/nodeLogger.ts:125](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L125)

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

[packages/utils/src/nodeLogger.ts:137](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L137)

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

[packages/utils/src/nodeLogger.ts:121](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L121)

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

[packages/utils/src/nodeLogger.ts:133](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/nodeLogger.ts#L133)
