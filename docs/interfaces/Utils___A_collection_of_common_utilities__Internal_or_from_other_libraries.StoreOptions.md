[Backland](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / StoreOptions

# Interface: StoreOptions<Dict\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).StoreOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Dict` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

## Table of contents

### Properties

- [hashBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StoreOptions.md#hashby)
- [maxLength](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StoreOptions.md#maxlength)
- [values](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StoreOptions.md#values)

## Properties

### hashBy

• `Optional` **hashBy**: `Join`<`NestedPaths`<`Dict`[keyof `Dict`]\>, ``"."``\>[]

#### Defined in

[packages/utils/src/Store.ts:46](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L46)

___

### maxLength

• `Optional` **maxLength**: `number`

#### Defined in

[packages/utils/src/Store.ts:45](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L45)

___

### values

• `Optional` **values**: [`ObjectEntries`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#objectentries)<`Dict`\>

#### Defined in

[packages/utils/src/Store.ts:44](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/Store.ts#L44)
