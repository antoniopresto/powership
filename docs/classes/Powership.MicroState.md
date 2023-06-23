[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / MicroState

# Class: MicroState<Type\>

[Powership](../modules/Powership.md).MicroState

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `object` |

## Table of contents

### Constructors

- [constructor](Powership.MicroState.md#constructor)

### Properties

- [clone](Powership.MicroState.md#clone)
- [cloneValue](Powership.MicroState.md#clonevalue)
- [createRook](Powership.MicroState.md#createrook)
- [get](Powership.MicroState.md#get)
- [set](Powership.MicroState.md#set)
- [subscriptions](Powership.MicroState.md#subscriptions)
- [value](Powership.MicroState.md#value)
- [create](Powership.MicroState.md#create)

### Methods

- [subscribe](Powership.MicroState.md#subscribe)
- [connectDevTools](Powership.MicroState.md#connectdevtools)
- [createReactUtils](Powership.MicroState.md#createreactutils)

## Constructors

### constructor

• **new MicroState**<`Type`\>(`data`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Type` |

#### Defined in

packages/utils/lib/MicroState.d.ts:18

## Properties

### clone

• **clone**: () => [`MicroState`](Powership.MicroState.md)<`Type`\>

#### Type declaration

▸ (): [`MicroState`](Powership.MicroState.md)<`Type`\>

##### Returns

[`MicroState`](Powership.MicroState.md)<`Type`\>

#### Defined in

packages/utils/lib/MicroState.d.ts:13

___

### cloneValue

• **cloneValue**: () => `Type`

#### Type declaration

▸ (): `Type`

##### Returns

`Type`

#### Defined in

packages/utils/lib/MicroState.d.ts:14

___

### createRook

• **createRook**: (`React`: { `useEffect`: [`AnyFunction`](../modules/Powership.TU.md#anyfunction) ; `useMemo`: [`AnyFunction`](../modules/Powership.TU.md#anyfunction) ; `useState`: [`AnyFunction`](../modules/Powership.TU.md#anyfunction)  }) => [`UseMicroState`](../interfaces/Powership.UseMicroState.md)<`Type`\>

#### Type declaration

▸ (`React`): [`UseMicroState`](../interfaces/Powership.UseMicroState.md)<`Type`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `React` | `Object` |
| `React.useEffect` | [`AnyFunction`](../modules/Powership.TU.md#anyfunction) |
| `React.useMemo` | [`AnyFunction`](../modules/Powership.TU.md#anyfunction) |
| `React.useState` | [`AnyFunction`](../modules/Powership.TU.md#anyfunction) |

##### Returns

[`UseMicroState`](../interfaces/Powership.UseMicroState.md)<`Type`\>

#### Defined in

packages/utils/lib/MicroState.d.ts:25

___

### get

• **get**: <K\>(`key`: `K`) => `undefined` \| [`PathType`](../modules/Powership.TU.md#pathtype)<`Type`, `K`\>

#### Type declaration

▸ <`K`\>(`key`): `undefined` \| [`PathType`](../modules/Powership.TU.md#pathtype)<`Type`, `K`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

##### Returns

`undefined` \| [`PathType`](../modules/Powership.TU.md#pathtype)<`Type`, `K`\>

#### Defined in

packages/utils/lib/MicroState.d.ts:19

___

### set

• **set**: <K\>(`key`: `K`, `value`: [`PathType`](../modules/Powership.TU.md#pathtype)<`Type`, `K`\>) => [`MicroState`](Powership.MicroState.md)<`Type`\>

#### Type declaration

▸ <`K`\>(`key`, `value`): [`MicroState`](Powership.MicroState.md)<`Type`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | [`PathType`](../modules/Powership.TU.md#pathtype)<`Type`, `K`\> |

##### Returns

[`MicroState`](Powership.MicroState.md)<`Type`\>

#### Defined in

packages/utils/lib/MicroState.d.ts:20

___

### subscriptions

• **subscriptions**: `Set`<`Function` & { `path`: `string`  }\>

#### Defined in

packages/utils/lib/MicroState.d.ts:15

___

### value

• **value**: `Type`

#### Defined in

packages/utils/lib/MicroState.d.ts:12

___

### create

▪ `Static` **create**: <Data\>(`data`: `Data`) => [`MicroState`](Powership.MicroState.md)<`Data`\>

#### Type declaration

▸ <`Data`\>(`data`): [`MicroState`](Powership.MicroState.md)<`Data`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Data` |

##### Returns

[`MicroState`](Powership.MicroState.md)<`Data`\>

#### Defined in

packages/utils/lib/MicroState.d.ts:24

## Methods

### subscribe

▸ **subscribe**(`callback`): [`Unsubscribe`](../modules/Powership.md#unsubscribe)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `Type`, `context`: [`SubscriptionContext`](../interfaces/Powership.SubscriptionContext.md)<`Type`, `Type`, ``""``\>) => `void` |

#### Returns

[`Unsubscribe`](../modules/Powership.md#unsubscribe)

#### Defined in

packages/utils/lib/MicroState.d.ts:21

▸ **subscribe**<`Path`\>(`path`, `callback`): [`Unsubscribe`](../modules/Powership.md#unsubscribe)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `Path` |
| `callback` | (`value`: [`PathType`](../modules/Powership.TU.md#pathtype)<`Type`, `Path`\>, `context`: [`SubscriptionContext`](../interfaces/Powership.SubscriptionContext.md)<`Type`, [`PathType`](../modules/Powership.TU.md#pathtype)<`Type`, `Path`\>, `Path`\>) => `void` |

#### Returns

[`Unsubscribe`](../modules/Powership.md#unsubscribe)

#### Defined in

packages/utils/lib/MicroState.d.ts:22

___

### connectDevTools

▸ `Static` **connectDevTools**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`MicroState`](Powership.MicroState.md)<`any`\> |

#### Returns

`void`

#### Defined in

packages/utils/lib/MicroState.d.ts:38

___

### createReactUtils

▸ `Static` **createReactUtils**<`State`, `TReact`\>(`React`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `object` |
| `TReact` | extends [`ReactLike`](../modules/Powership.md#reactlike) = [`ReactLike`](../modules/Powership.md#reactlike) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `React` | `TReact` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `StateContext` | `any` |
| `StateProvider` | (`props`: { `children`: `any` ; `initialState`: `State`  }) => `any` |
| `useMicroState` | [`UseMicroState`](../interfaces/Powership.UseMicroState.md)<`State`\> |

#### Defined in

packages/utils/lib/MicroState.d.ts:30
