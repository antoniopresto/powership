[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / DeleteMany

# Interface: DeleteMany<Doc, Indexes\>

[Powership](../modules/Powership.md).DeleteMany

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Powership.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Powership.DocumentIndexesConfig.md) |

## Callable

### DeleteMany

▸ **DeleteMany**(`options`): `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Doc`\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\>

#### Defined in

packages/transporter/out/IndexMethods.d.ts:57
