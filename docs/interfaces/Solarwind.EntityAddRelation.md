[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / EntityAddRelation

# Interface: EntityAddRelation<Parent, EContext\>

[Solarwind](../modules/Solarwind.md).EntityAddRelation

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parent` | `Parent` |
| `EContext` | extends [`AnyEntityTypesContext`](../modules/Solarwind.md#anyentitytypescontext) |

## Callable

### EntityAddRelation

▸ **EntityAddRelation**<`Context`, `Definition`, `ArgsDef`\>(`options`): `Parent`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`LoaderContext`](../modules/Solarwind.md#loadercontext) |
| `Definition` | extends [`ObjectFieldInput`](../modules/Solarwind.md#objectfieldinput) |
| `ArgsDef` | extends [`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EntityFieldResolver`](../modules/Solarwind.md#entityfieldresolver)<`Context`, `Definition`, `ArgsDef`, `EContext`[``"document"``]\> |

#### Returns

`Parent`

#### Defined in

packages/entity/lib/EntityInterfaces/AddRelation.d.ts:6
