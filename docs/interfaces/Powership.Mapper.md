[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / Mapper

# Interface: Mapper<Item\>

[Powership](../modules/Powership.md).Mapper

## Type parameters

| Name | Type |
| :------ | :------ |
| `Item` | extends `object` |

## Table of contents

### Methods

- [combine](Powership.Mapper.md#combine)
- [current](Powership.Mapper.md#current)
- [map](Powership.Mapper.md#map)

## Methods

### combine

▸ **combine**(): [`_NullableNullable`](../modules/Powership.md#_nullablenullable)<`Item`\>

#### Returns

[`_NullableNullable`](../modules/Powership.md#_nullablenullable)<`Item`\>

#### Defined in

packages/utils/out/mapper.d.ts:4

___

### current

▸ **current**(): `Item`[]

#### Returns

`Item`[]

#### Defined in

packages/utils/out/mapper.d.ts:5

___

### map

▸ **map**<`T`\>(`cb`): [`Mapper`](Powership.Mapper.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`current`: `Item`, `index`: `number`, `acc`: `T`[]) => ``null`` \| `T` |

#### Returns

[`Mapper`](Powership.Mapper.md)<`T`\>

#### Defined in

packages/utils/out/mapper.d.ts:3
