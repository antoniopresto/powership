[Solarwind](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / Mapper

# Interface: Mapper<Item\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).Mapper

## Type parameters

| Name | Type |
| :------ | :------ |
| `Item` | extends `object` |

## Table of contents

### Methods

- [combine](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Mapper.md#combine)
- [current](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Mapper.md#current)
- [map](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Mapper.md#map)

## Methods

### combine

▸ **combine**(): [`_NullableNullable`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_nullablenullable)<`Item`\>

#### Returns

[`_NullableNullable`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_nullablenullable)<`Item`\>

#### Defined in

[packages/utils/src/mapper.ts:9](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/mapper.ts#L9)

___

### current

▸ **current**(): `Item`[]

#### Returns

`Item`[]

#### Defined in

[packages/utils/src/mapper.ts:11](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/mapper.ts#L11)

___

### map

▸ **map**<`T`\>(`cb`): [`Mapper`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Mapper.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`current`: `Item`, `index`: `number`, `acc`: `T`[]) => ``null`` \| `T` |

#### Returns

[`Mapper`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Mapper.md)<`T`\>

#### Defined in

[packages/utils/src/mapper.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/mapper.ts#L5)
