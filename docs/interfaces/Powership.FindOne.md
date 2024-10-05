[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / FindOne

# Interface: FindOne<Doc, Indexes\>

[Powership](../modules/Powership.md).FindOne

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Powership.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Powership.DocumentIndexesConfig.md) |

## Callable

### FindOne

▸ **FindOne**(`options`): `Promise`<{ `item`: ``null`` \| `Doc`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Doc`\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `item`: ``null`` \| `Doc`  }\>

#### Defined in

packages/transporter/out/IndexMethods.d.ts:27
