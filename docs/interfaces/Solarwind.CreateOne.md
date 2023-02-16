[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / CreateOne

# Interface: CreateOne<Input, Output, Indexes\>

[Solarwind](../modules/Solarwind.md).CreateOne

## Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends [`DocumentBase`](../modules/Solarwind.md#documentbase) |
| `Output` | extends [`DocumentBase`](../modules/Solarwind.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Solarwind.DocumentIndexesConfig.md) |

## Callable

### CreateOne

▸ **CreateOne**(`options`): `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Output` ; `updated`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Input`\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `item`: `Input` ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Output` ; `updated`: `boolean`  }\>

#### Defined in

packages/transporter/lib/IndexMethods.d.ts:20
