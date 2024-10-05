[Powership](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md) / FindById

# Interface: FindById<Doc, Indexes\>

[Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md).FindById

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.DocumentIndexesConfig.md) |

## Callable

### FindById

▸ **FindById**(`options`): `Promise`<{ `item`: ``null`` \| `Doc`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.LoaderContext.md) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `item`: ``null`` \| `Doc`  }\>

#### Defined in

[packages/transporter/src/IndexMethods.ts:101](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/IndexMethods.ts#L101)
