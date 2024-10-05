[Powership](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md) / UpdateMany

# Interface: UpdateMany<Doc, Indexes\>

[Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md).UpdateMany

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.DocumentIndexesConfig.md) |

## Callable

### UpdateMany

▸ **UpdateMany**(`options`): `Promise`<{ `error?`: ``null`` \| `string` ; `modifiedCount`: ``null`` \| `number` ; `upsertedId`: ``null`` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\> ; `context`: `undefined` \| [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.LoaderContext.md) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#updateexpression)<`Doc`\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `error?`: ``null`` \| `string` ; `modifiedCount`: ``null`` \| `number` ; `upsertedId`: ``null`` \| `string`  }\>

#### Defined in

[packages/transporter/src/IndexMethods.ts:257](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/IndexMethods.ts#L257)
