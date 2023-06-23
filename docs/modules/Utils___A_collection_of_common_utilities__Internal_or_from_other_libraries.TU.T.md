[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / [TU](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md) / T

# Namespace: T

[Utils - A collection of common utilities. Internal or from other libraries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).[TU](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md).T

## Table of contents

### Type Aliases

- [As](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.T.md#as)
- [Cast](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.T.md#cast)
- [Merge](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.T.md#merge)
- [Naked](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.T.md#naked)

## Type Aliases

### As

Ƭ **As**<`T`, `L`\>: `A.Cast`<`T`, `L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `L` |

#### Defined in

packages/utils/src/typings/ts-toolbet.ts:18

___

### Cast

Ƭ **Cast**<`T`, `L`\>: `A.Cast`<`T`, `L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `L` |

#### Defined in

packages/utils/src/typings/ts-toolbet.ts:32

___

### Merge

Ƭ **Merge**<`O`, `O1`, `depth`, `ignore`, `fill`\>: `O` extends `object` ? `O1` extends `object` ? `O.Merge`<`Omit`<`O`, keyof `O1`\>, `O1`, `depth`, `ignore`, `fill`\> : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | `O` |
| `O1` | `O1` |
| `depth` | extends `Depth` = ``"flat"`` |
| `ignore` | extends `object` = `BuiltIn` |
| `fill` | extends `any` = `undefined` |

#### Defined in

packages/utils/src/typings/ts-toolbet.ts:20

___

### Naked

Ƭ **Naked**<`L`\>: `Overwrite`<`Required`<`L`\>, `L`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `List` |

#### Defined in

packages/utils/src/typings/ts-toolbet.ts:33
