[Backland](../README.md) / [Modules](../modules.md) / [Entity](../modules/Entity.md) / ExtendEntity

# Interface: ExtendEntity<Parent\>

[Entity](../modules/Entity.md).ExtendEntity

## Type parameters

| Name |
| :------ |
| `Parent` |

## Callable

### ExtendEntity

▸ **ExtendEntity**<`TransformerReturn`\>(`transformer`): `Parent` extends `Origin` ? { [K in string \| number \| symbol]: K extends keyof TransformerReturn ? TransformerReturn[K] : K extends keyof Origin ? Origin[K] : never } : `never`

Extend current entity

#### Type parameters

| Name |
| :------ |
| `TransformerReturn` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformer` | (`current`: { [K in string \| number \| symbol as K extends \_ExtendMethodKeys ? never : K]: Parent[K] }, `utils`: { `extend`: <V\>(`value`: `V`) => `ExtendObjectDefinition`<`V`, `V`\>  }) => `TransformerReturn` |

#### Returns

`Parent` extends `Origin` ? { [K in string \| number \| symbol]: K extends keyof TransformerReturn ? TransformerReturn[K] : K extends keyof Origin ? Origin[K] : never } : `never`

#### Defined in

[packages/entity/src/EntityInterfaces/ExtendEntity.ts:10](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/ExtendEntity.ts#L10)
