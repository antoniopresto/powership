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

▸ **EntityAddRelation**<`_Context`, `Definition`, `ArgsDef`\>(`options`): `Parent`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `_Context` | extends [`LoaderContext`](Powership.LoaderContext.md) |
| `Definition` | extends [`ObjectFieldInput`](../modules/Powership.md#objectfieldinput) |
| `ArgsDef` | extends [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EntityFieldResolver`](../modules/Powership.md#entityfieldresolver)<`Definition`, `ArgsDef`, `EContext`[``"document"``]\> |

#### Returns

`Parent`

#### Defined in

packages/entity/out/EntityInterfaces/AddRelation.d.ts:6
