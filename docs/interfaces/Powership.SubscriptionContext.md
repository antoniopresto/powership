[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / SubscriptionContext

# Interface: SubscriptionContext<RootType, Value, Path\>

[Powership](../modules/Powership.md).SubscriptionContext

## Type parameters

| Name |
| :------ |
| `RootType` |
| `Value` |
| `Path` |

## Table of contents

### Properties

- [differences](Powership.SubscriptionContext.md#differences)
- [newValue](Powership.SubscriptionContext.md#newvalue)
- [oldValue](Powership.SubscriptionContext.md#oldvalue)
- [set](Powership.SubscriptionContext.md#set)
- [subscriptionPath](Powership.SubscriptionContext.md#subscriptionpath)

## Properties

### differences

• **differences**: [`Difference`](../modules/Powership.md#difference)<`Value`\>[]

#### Defined in

packages/utils/lib/MicroState.d.ts:8

___

### newValue

• **newValue**: `Value`

#### Defined in

packages/utils/lib/MicroState.d.ts:6

___

### oldValue

• **oldValue**: `undefined` \| `Value`

#### Defined in

packages/utils/lib/MicroState.d.ts:5

___

### set

• **set**: <P\>(`path`: `P`, `value`: [`PathType`](../modules/Powership.TU.md#pathtype)<`RootType`, `P`\>) => `void`

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
| `value` | [`PathType`](../modules/Powership.TU.md#pathtype)<`RootType`, `P`\> |

##### Returns

`void`

#### Defined in

packages/utils/lib/MicroState.d.ts:7

___

### subscriptionPath

• **subscriptionPath**: `Path`

#### Defined in

packages/utils/lib/MicroState.d.ts:4
