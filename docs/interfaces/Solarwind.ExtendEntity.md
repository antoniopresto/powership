[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / ExtendEntity

# Interface: ExtendEntity<Parent\>

[Solarwind](../modules/Solarwind.md).ExtendEntity

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
| `transformer` | (`current`: { [K in string \| number \| symbol as K extends \_ExtendMethodKeys ? never : K]: Parent[K] }, `utils`: { `extend`: <V\>(`value`: `V`) => [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<`V`, `V`\>  }) => `TransformerReturn` |

#### Returns

`Parent` extends `Origin` ? { [K in string \| number \| symbol]: K extends keyof TransformerReturn ? TransformerReturn[K] : K extends keyof Origin ? Origin[K] : never } : `never`

#### Defined in

packages/entity/lib/EntityInterfaces/ExtendEntity.d.ts:8
