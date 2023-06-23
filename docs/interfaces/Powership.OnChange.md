[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / OnChange

# Interface: OnChange<Type\>

[Powership](../modules/Powership.md).OnChange

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
| `value` | [`PathType`](../modules/Powership.TU.md#pathtype)<`Type`, `Path`\> |
| `context` | [`SubscriptionContext`](Powership.SubscriptionContext.md)<`Type`, [`PathType`](../modules/Powership.TU.md#pathtype)<`Type`, `Path`\>, `Path`\> |

#### Returns

`void`

#### Defined in

packages/utils/lib/MicroState.d.ts:41

### OnChange

▸ **OnChange**(`value`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Type` |
| `context` | [`SubscriptionContext`](Powership.SubscriptionContext.md)<`Type`, `Type`, ``""``\> |

#### Returns

`void`

#### Defined in

packages/utils/lib/MicroState.d.ts:42
