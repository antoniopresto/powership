[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / FindMany

# Interface: FindMany<Doc, Indexes\>

[Solarwind](../modules/Solarwind.md).FindMany

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Solarwind.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Solarwind.DocumentIndexesConfig.md) |

## Callable

### FindMany

▸ **FindMany**(`options`): `Promise`<{ `items`: `Doc`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Doc`\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `items`: `Doc`[]  }\>

#### Defined in

packages/transporter/lib/IndexMethods.d.ts:41
