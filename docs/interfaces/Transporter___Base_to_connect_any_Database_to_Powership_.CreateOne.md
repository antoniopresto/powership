[Powership](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md) / CreateOne

# Interface: CreateOne<Input, Output, Indexes\>

[Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md).CreateOne

## Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends [`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `Output` | extends [`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.DocumentIndexesConfig.md) |

## Callable

### CreateOne

▸ **CreateOne**(`options`): `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Output` ; `updated`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Input`\> ; `context`: `undefined` \| [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.LoaderContext.md) ; `item`: `Input` ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Output` ; `updated`: `boolean`  }\>

#### Defined in

[packages/transporter/src/IndexMethods.ts:49](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/IndexMethods.ts#L49)
