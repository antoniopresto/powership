[Solarwind](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Solarwind.](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md) / DeleteMany

# Interface: DeleteMany<Doc, Indexes\>

[Transporter - Base to connect any Database to Solarwind.](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md).DeleteMany

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.DocumentIndexesConfig.md) |

## Callable

### DeleteMany

▸ **DeleteMany**(`options`): `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\>

#### Defined in

[packages/transporter/src/IndexMethods.ts:179](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/IndexMethods.ts#L179)
