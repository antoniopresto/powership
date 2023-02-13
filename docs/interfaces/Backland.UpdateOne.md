[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / UpdateOne

# Interface: UpdateOne<Doc, Indexes\>

[Backland](../modules/Backland.md).UpdateOne

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Backland.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Backland.DocumentIndexesConfig.md) |

## Callable

### UpdateOne

▸ **UpdateOne**(`options`): `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Doc` ; `updated`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Doc`\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`Doc`\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Doc` ; `updated`: `boolean`  }\>

#### Defined in

packages/transporter/lib/IndexMethods.d.ts:71
