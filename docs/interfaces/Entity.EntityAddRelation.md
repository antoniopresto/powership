[Powership](../README.md) / [Modules](../modules.md) / [Entity](../modules/Entity.md) / EntityAddRelation

# Interface: EntityAddRelation<Parent, EContext\>

[Entity](../modules/Entity.md).EntityAddRelation

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parent` | `Parent` |
| `EContext` | extends [`AnyEntityTypesContext`](../modules/Entity.md#anyentitytypescontext) |

## Callable

### EntityAddRelation

▸ **EntityAddRelation**<`_Context`, `Definition`, `ArgsDef`\>(`options`): `Parent`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `_Context` | extends `LoaderContext` |
| `Definition` | extends `ObjectFieldInput` |
| `ArgsDef` | extends `ObjectDefinitionInput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EntityFieldResolver`](../modules/Entity.md#entityfieldresolver)<`Definition`, `ArgsDef`, `EContext`[``"document"``]\> |

#### Returns

`Parent`

#### Defined in

[packages/entity/src/EntityInterfaces/AddRelation.ts:12](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/AddRelation.ts#L12)
