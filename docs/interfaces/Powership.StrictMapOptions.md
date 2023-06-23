[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / StrictMapOptions

# Interface: StrictMapOptions<K, V\>

[Powership](../modules/Powership.md).StrictMapOptions

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Table of contents

### Properties

- [onNull](Powership.StrictMapOptions.md#onnull)

## Properties

### onNull

• `Optional` **onNull**: (`key`: `K`, `self`: [`StrictMap`](../classes/Powership.StrictMap.md)<`K`, `V`\>) => `void` \| `NonNullable`<`V`\>

#### Type declaration

▸ (`key`, `self`): `void` \| `NonNullable`<`V`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `self` | [`StrictMap`](../classes/Powership.StrictMap.md)<`K`, `V`\> |

##### Returns

`void` \| `NonNullable`<`V`\>

#### Defined in

packages/utils/lib/StrictMap.d.ts:2
