[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / EntityAddRelation

# Interface: EntityAddRelation<Parent, EContext\>

[Powership](../modules/Powership.md).EntityAddRelation

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parent` | `Parent` |
| `EContext` | extends [`AnyEntityTypesContext`](../modules/Powership.md#anyentitytypescontext) |

## Callable

### EntityAddRelation

▸ **EntityAddRelation**<`Context`, `Definition`, `ArgsDef`\>(`options`): `Parent`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`LoaderContext`](../modules/Powership.md#loadercontext) |
| `Definition` | extends [`ObjectFieldInput`](../modules/Powership.md#objectfieldinput) |
| `ArgsDef` | extends [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EntityFieldResolver`](../modules/Powership.md#entityfieldresolver)<`Context`, `Definition`, `ArgsDef`, `EContext`[``"document"``]\> |

#### Returns

`Parent`

#### Defined in

packages/entity/lib/EntityInterfaces/AddRelation.d.ts:6
