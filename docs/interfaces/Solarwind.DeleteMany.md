[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / DeleteMany

# Interface: DeleteMany<Doc, Indexes\>

[Solarwind](../modules/Solarwind.md).DeleteMany

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Solarwind.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Solarwind.DocumentIndexesConfig.md) |

## Callable

### DeleteMany

▸ **DeleteMany**(`options`): `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Doc`\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\>

#### Defined in

packages/transporter/lib/IndexMethods.d.ts:57
