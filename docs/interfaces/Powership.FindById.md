[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / FindById

# Interface: FindById<Doc, Indexes\>

[Powership](../modules/Powership.md).FindById

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Powership.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Powership.DocumentIndexesConfig.md) |

## Callable

### FindById

▸ **FindById**(`options`): `Promise`<{ `item`: ``null`` \| `Doc`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Doc`\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `item`: ``null`` \| `Doc`  }\>

#### Defined in

packages/transporter/out/IndexMethods.d.ts:34
