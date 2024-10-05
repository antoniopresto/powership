[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / Logger

# Class: Logger

[Powership](../modules/Powership.md).Logger

## Table of contents

### Constructors

- [constructor](Powership.Logger.md#constructor)

### Properties

- [criticalError](Powership.Logger.md#criticalerror)
- [debug](Powership.Logger.md#debug)
- [error](Powership.Logger.md#error)
- [info](Powership.Logger.md#info)
- [lastLogged](Powership.Logger.md#lastlogged)
- [levels](Powership.Logger.md#levels)
- [logger](Powership.Logger.md#logger)
- [object](Powership.Logger.md#object)
- [warn](Powership.Logger.md#warn)

### Accessors

- [logCriticalError](Powership.Logger.md#logcriticalerror)
- [logError](Powership.Logger.md#logerror)
- [logInfo](Powership.Logger.md#loginfo)
- [logWarning](Powership.Logger.md#logwarning)

## Constructors

### constructor

• **new Logger**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`LoggerOptions`](../interfaces/Powership.LoggerOptions.md) |

#### Defined in

packages/utils/out/nodeLogger.d.ts:18

## Properties

### criticalError

• **criticalError**: (...`data`: `any`[]) => `void`

#### Type declaration

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

packages/utils/out/nodeLogger.d.ts:21

___

### debug

• **debug**: (...`data`: `any`[]) => `void`

#### Type declaration

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

packages/utils/out/nodeLogger.d.ts:24

___

### error

• **error**: (...`data`: `any`[]) => `void`

#### Type declaration

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

packages/utils/out/nodeLogger.d.ts:20

___

### info

• **info**: (...`data`: `any`[]) => `void`

#### Type declaration

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

packages/utils/out/nodeLogger.d.ts:23

___

### lastLogged

• **lastLogged**: ``null`` \| { `data`: `any`  }

#### Defined in

packages/utils/out/nodeLogger.d.ts:15

___

### levels

• **levels**: `Set`<``"error"`` \| ``"emerg"`` \| ``"alert"`` \| ``"crit"`` \| ``"warning"`` \| ``"notice"`` \| ``"info"`` \| ``"debug"`` \| ``"none"``\>

#### Defined in

packages/utils/out/nodeLogger.d.ts:12

___

### logger

• **logger**: [`LoggerMethods`](../modules/Powership.md#loggermethods)

#### Defined in

packages/utils/out/nodeLogger.d.ts:13

___

### object

• **object**: (`object`: `Record`<`string`, `any`\>, `depth?`: `number`) => `void`

#### Type declaration

▸ (`object`, `depth?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Record`<`string`, `any`\> |
| `depth?` | `number` |

##### Returns

`void`

#### Defined in

packages/utils/out/nodeLogger.d.ts:19

___

### warn

• **warn**: (...`data`: `any`[]) => `void`

#### Type declaration

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

packages/utils/out/nodeLogger.d.ts:22

## Accessors

### logCriticalError

• `get` **logCriticalError**(): (...`data`: `any`[]) => `void`

**`Deprecated`**

#### Returns

`fn`

▸ (`...data`): `void`

**`Deprecated`**

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

packages/utils/out/nodeLogger.d.ts:33

___

### logError

• `get` **logError**(): (...`data`: `any`[]) => `void`

**`Deprecated`**

#### Returns

`fn`

▸ (`...data`): `void`

**`Deprecated`**

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

packages/utils/out/nodeLogger.d.ts:29

___

### logInfo

• `get` **logInfo**(): (...`data`: `any`[]) => `void`

**`Deprecated`**

#### Returns

`fn`

▸ (`...data`): `void`

**`Deprecated`**

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

packages/utils/out/nodeLogger.d.ts:41

___

### logWarning

• `get` **logWarning**(): (...`data`: `any`[]) => `void`

**`Deprecated`**

#### Returns

`fn`

▸ (`...data`): `void`

**`Deprecated`**

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

packages/utils/out/nodeLogger.d.ts:37
