[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / DeleteMany

# Interface: DeleteMany<Doc, Indexes\>

[Backland](../modules/Backland.md).DeleteMany

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Backland.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Backland.DocumentIndexesConfig.md) |

## Callable

### DeleteMany

▸ **DeleteMany**(`options`): `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Doc`\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\>

#### Defined in

packages/transporter/lib/IndexMethods.d.ts:57
