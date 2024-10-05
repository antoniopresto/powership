[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / CreateOne

# Interface: CreateOne<Input, Output, Indexes\>

[Powership](../modules/Powership.md).CreateOne

## Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends [`DocumentBase`](../modules/Powership.md#documentbase) |
| `Output` | extends [`DocumentBase`](../modules/Powership.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Powership.DocumentIndexesConfig.md) |

## Callable

### CreateOne

▸ **CreateOne**(`options`): `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Output` ; `updated`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Input`\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `item`: `Input` ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Output` ; `updated`: `boolean`  }\>

#### Defined in

packages/transporter/out/IndexMethods.d.ts:20
