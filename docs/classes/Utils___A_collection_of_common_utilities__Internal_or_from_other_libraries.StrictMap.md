[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / StrictMap

# Class: StrictMap<K, V\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).StrictMap

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Table of contents

### Constructors

- [constructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#constructor)

### Properties

- [nativeMap](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#nativemap)

### Accessors

- [size](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#size)

### Methods

- [clear](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#clear)
- [delete](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#delete)
- [ensure](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#ensure)
- [entries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#entries)
- [get](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#get)
- [has](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#has)
- [keys](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#keys)
- [set](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#set)
- [values](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md#values)

## Constructors

### constructor

• **new StrictMap**<`K`, `V`\>()

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Defined in

packages/utils/src/StrictMap.ts:10

## Properties

### nativeMap

• **nativeMap**: `Map`<`K`, `V`\>

#### Defined in

packages/utils/src/StrictMap.ts:8

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

packages/utils/src/StrictMap.ts:78

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

packages/utils/src/StrictMap.ts:66

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

packages/utils/src/StrictMap.ts:70

___

### ensure

▸ **ensure**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`void`

#### Defined in

packages/utils/src/StrictMap.ts:14

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Defined in

packages/utils/src/StrictMap.ts:62

___

### get

▸ **get**(`key`, `options?`): `NonNullable`<`V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `options` | [`StrictMapOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMapOptions.md)<`K`, `V`\> |

#### Returns

`NonNullable`<`V`\>

#### Defined in

packages/utils/src/StrictMap.ts:18

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Defined in

packages/utils/src/StrictMap.ts:54

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

#### Returns

`IterableIterator`<`K`\>

#### Defined in

packages/utils/src/StrictMap.ts:58

___

### set

▸ **set**(`key`, `value`): `Map`<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`Map`<`K`, `V`\>

#### Defined in

packages/utils/src/StrictMap.ts:50

___

### values

▸ **values**(): `IterableIterator`<`V`\>

#### Returns

`IterableIterator`<`V`\>

#### Defined in

packages/utils/src/StrictMap.ts:74
