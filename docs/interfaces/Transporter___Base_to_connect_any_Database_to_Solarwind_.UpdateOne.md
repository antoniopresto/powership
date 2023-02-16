[Backland](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Backland.](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md) / UpdateOne

# Interface: UpdateOne<Doc, Indexes\>

[Transporter - Base to connect any Database to Backland.](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md).UpdateOne

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Transporter___Base_to_connect_any_Database_to_Backland_.DocumentIndexesConfig.md) |

## Callable

### UpdateOne

▸ **UpdateOne**(`options`): `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Doc` ; `updated`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md#filterrecord)<`Doc`\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md#updateexpression)<`Doc`\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Doc` ; `updated`: `boolean`  }\>

#### Defined in

[packages/transporter/src/IndexMethods.ts:231](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/IndexMethods.ts#L231)
