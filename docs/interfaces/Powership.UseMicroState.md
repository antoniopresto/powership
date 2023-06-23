[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / UseMicroState

# Interface: UseMicroState<Type\>

[Powership](../modules/Powership.md).UseMicroState

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
| `onChange?` | [`OnChange`](Powership.OnChange.md)<`Path`\> |

#### Returns

[value: PathType<Type, Path\>, setState: PathType<Type, Path\> extends SubType ? [SubType] extends [object] ? Function : Function : never]

#### Defined in

packages/utils/lib/MicroState.d.ts:45

### UseMicroState

▸ **UseMicroState**(`onChange?`): [`Type`, (`value`: `Type`) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `onChange?` | [`OnChange`](Powership.OnChange.md)<``""``\> |

#### Returns

[`Type`, (`value`: `Type`) => `void`]

#### Defined in

packages/utils/lib/MicroState.d.ts:49

### UseMicroState

▸ **UseMicroState**(`path`, `onChange?`): [`Type`, (`value`: `Type`) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `undefined` |
| `onChange?` | [`OnChange`](Powership.OnChange.md)<``""``\> |

#### Returns

[`Type`, (`value`: `Type`) => `void`]

#### Defined in

packages/utils/lib/MicroState.d.ts:50
