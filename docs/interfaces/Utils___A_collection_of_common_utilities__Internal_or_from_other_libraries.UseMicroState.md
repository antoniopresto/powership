[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / UseMicroState

# Interface: UseMicroState<Type\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).UseMicroState

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `object` |

## Callable

### UseMicroState

▸ **UseMicroState**<`Path`\>(`path`, `onChange?`): [value: PathType<Type, Path\>, setState: PathType<Type, Path\> extends SubType ? [SubType] extends [object] ? Function : Function : never]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `Path` |
| `onChange?` | [`OnChange`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.OnChange.md)<`Path`\> |

#### Returns

[value: PathType<Type, Path\>, setState: PathType<Type, Path\> extends SubType ? [SubType] extends [object] ? Function : Function : never]

#### Defined in

packages/utils/src/MicroState.ts:287

### UseMicroState

▸ **UseMicroState**(`onChange?`): [`Type`, (`value`: `Type`) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `onChange?` | [`OnChange`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.OnChange.md)<``""``\> |

#### Returns

[`Type`, (`value`: `Type`) => `void`]

#### Defined in

packages/utils/src/MicroState.ts:299

### UseMicroState

▸ **UseMicroState**(`path`, `onChange?`): [`Type`, (`value`: `Type`) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `undefined` |
| `onChange?` | [`OnChange`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.OnChange.md)<``""``\> |

#### Returns

[`Type`, (`value`: `Type`) => `void`]

#### Defined in

packages/utils/src/MicroState.ts:301
