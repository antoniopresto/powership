[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / OnChange

# Interface: OnChange<Type\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).OnChange

## Type parameters

| Name |
| :------ |
| `Type` |

## Callable

### OnChange

▸ **OnChange**<`Path`\>(`value`, `context`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`Type`, `Path`\> |
| `context` | [`SubscriptionContext`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SubscriptionContext.md)<`Type`, [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`Type`, `Path`\>, `Path`\> |

#### Returns

`void`

#### Defined in

packages/utils/src/MicroState.ts:278

### OnChange

▸ **OnChange**(`value`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Type` |
| `context` | [`SubscriptionContext`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SubscriptionContext.md)<`Type`, `Type`, ``""``\> |

#### Returns

`void`

#### Defined in

packages/utils/src/MicroState.ts:283
