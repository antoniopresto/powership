[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / FindMany

# Interface: FindMany<Doc, Indexes\>

[Powership](../modules/Powership.md).FindMany

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Powership.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Powership.DocumentIndexesConfig.md) |

## Callable

### FindMany

▸ **FindMany**(`options`): `Promise`<{ `items`: `Doc`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Doc`\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `items`: `Doc`[]  }\>

#### Defined in

packages/transporter/out/IndexMethods.d.ts:41
