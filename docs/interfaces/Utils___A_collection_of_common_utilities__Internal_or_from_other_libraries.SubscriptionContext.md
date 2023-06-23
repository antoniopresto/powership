[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / SubscriptionContext

# Interface: SubscriptionContext<RootType, Value, Path\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).SubscriptionContext

## Type parameters

| Name |
| :------ |
| `RootType` |
| `Value` |
| `Path` |

## Table of contents

### Properties

- [differences](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SubscriptionContext.md#differences)
- [newValue](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SubscriptionContext.md#newvalue)
- [oldValue](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SubscriptionContext.md#oldvalue)
- [set](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SubscriptionContext.md#set)
- [subscriptionPath](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SubscriptionContext.md#subscriptionpath)

## Properties

### differences

• **differences**: [`Difference`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#difference)<`Value`\>[]

#### Defined in

packages/utils/src/MicroState.ts:21

___

### newValue

• **newValue**: `Value`

#### Defined in

packages/utils/src/MicroState.ts:16

___

### oldValue

• **oldValue**: `undefined` \| `Value`

#### Defined in

packages/utils/src/MicroState.ts:15

___

### set

• **set**: <P\>(`path`: `P`, `value`: [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`RootType`, `P`\>) => `void`

#### Type declaration

▸ <`P`\>(`path`, `value`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `P` |
| `value` | [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`RootType`, `P`\> |

##### Returns

`void`

#### Defined in

packages/utils/src/MicroState.ts:17

___

### subscriptionPath

• **subscriptionPath**: `Path`

#### Defined in

packages/utils/src/MicroState.ts:14
