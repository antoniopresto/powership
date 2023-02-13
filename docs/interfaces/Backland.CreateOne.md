[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / CreateOne

# Interface: CreateOne<Input, Output, Indexes\>

[Backland](../modules/Backland.md).CreateOne

## Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends [`DocumentBase`](../modules/Backland.md#documentbase) |
| `Output` | extends [`DocumentBase`](../modules/Backland.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Backland.DocumentIndexesConfig.md) |

## Callable

### CreateOne

▸ **CreateOne**(`options`): `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Output` ; `updated`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Input`\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `item`: `Input` ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Output` ; `updated`: `boolean`  }\>

#### Defined in

packages/transporter/lib/IndexMethods.d.ts:20
