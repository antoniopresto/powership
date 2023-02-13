[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / EntityAddRelation

# Interface: EntityAddRelation<Parent, EContext\>

[Backland](../modules/Backland.md).EntityAddRelation

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parent` | `Parent` |
| `EContext` | extends [`AnyEntityTypesContext`](../modules/Backland.md#anyentitytypescontext) |

## Callable

### EntityAddRelation

▸ **EntityAddRelation**<`Context`, `Definition`, `ArgsDef`\>(`options`): `Parent`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`LoaderContext`](../modules/Backland.md#loadercontext) |
| `Definition` | extends [`ObjectFieldInput`](../modules/Backland.md#objectfieldinput) |
| `ArgsDef` | extends [`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EntityFieldResolver`](../modules/Backland.md#entityfieldresolver)<`Context`, `Definition`, `ArgsDef`, `EContext`[``"document"``]\> |

#### Returns

`Parent`

#### Defined in

packages/entity/lib/EntityInterfaces/AddRelation.d.ts:6
