[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / MicroState

# Class: MicroState<Type\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).MicroState

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `object` |

## Table of contents

### Constructors

- [constructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#constructor)

### Properties

- [subscriptions](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#subscriptions)
- [value](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#value)

### Methods

- [clone](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#clone)
- [cloneValue](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#clonevalue)
- [createRook](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#createrook)
- [get](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#get)
- [set](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#set)
- [subscribe](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#subscribe)
- [connectDevTools](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#connectdevtools)
- [create](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#create)
- [createReactUtils](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md#createreactutils)

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

packages/utils/src/MicroState.ts:39

## Properties

### subscriptions

• **subscriptions**: `Set`<`Function` & { `path`: `string`  }\>

#### Defined in

packages/utils/src/MicroState.ts:37

___

### value

• **value**: `Type`

#### Defined in

packages/utils/src/MicroState.ts:27

## Methods

### clone

▸ **clone**(): [`MicroState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md)<`Type`\>

#### Returns

[`MicroState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md)<`Type`\>

#### Defined in

packages/utils/src/MicroState.ts:29

___

### cloneValue

▸ **cloneValue**(): `Type`

#### Returns

`Type`

#### Defined in

packages/utils/src/MicroState.ts:33

___

### createRook

▸ **createRook**(`React`): [`UseMicroState`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UseMicroState.md)<`Type`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `React` | `Object` |
| `React.useEffect` | [`AnyFunction`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction) |
| `React.useMemo` | [`AnyFunction`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction) |
| `React.useState` | [`AnyFunction`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction) |

#### Returns

[`UseMicroState`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UseMicroState.md)<`Type`\>

#### Defined in

packages/utils/src/MicroState.ts:152

___

### get

▸ **get**<`K`\>(`key`): `undefined` \| [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`Type`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`Type`, `K`\>

#### Defined in

packages/utils/src/MicroState.ts:43

___

### set

▸ **set**<`K`\>(`key`, `value`): [`MicroState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md)<`Type`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`Type`, `K`\> |

#### Returns

[`MicroState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md)<`Type`\>

#### Defined in

packages/utils/src/MicroState.ts:47

___

### subscribe

▸ **subscribe**(`callback`): [`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `Type`, `context`: [`SubscriptionContext`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SubscriptionContext.md)<`Type`, `Type`, ``""``\>) => `void` |

#### Returns

[`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)

#### Defined in

packages/utils/src/MicroState.ts:68

▸ **subscribe**<`Path`\>(`path`, `callback`): [`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `Path` |
| `callback` | (`value`: [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`Type`, `Path`\>, `context`: [`SubscriptionContext`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SubscriptionContext.md)<`Type`, [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`Type`, `Path`\>, `Path`\>) => `void` |

#### Returns

[`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)

#### Defined in

packages/utils/src/MicroState.ts:74

___

### connectDevTools

▸ `Static` **connectDevTools**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`MicroState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md)<`any`\> |

#### Returns

`void`

#### Defined in

packages/utils/src/MicroState.ts:256

___

### create

▸ `Static` **create**<`Data`\>(`data`): [`MicroState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md)<`Data`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Data` |

#### Returns

[`MicroState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md)<`Data`\>

#### Defined in

packages/utils/src/MicroState.ts:150

___

### createReactUtils

▸ `Static` **createReactUtils**<`State`, `TReact`\>(`React`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `object` |
| `TReact` | extends [`ReactLike`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#reactlike) = [`ReactLike`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#reactlike) |

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
| `useMicroState` | [`UseMicroState`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UseMicroState.md)<`State`\> |

#### Defined in

packages/utils/src/MicroState.ts:194
