[Solarwind](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Solarwind.](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md) / FindById

# Interface: FindById<Doc, Indexes\>

[Transporter - Base to connect any Database to Solarwind.](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md).FindById

## Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `Indexes` | extends [`DocumentIndexesConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.DocumentIndexesConfig.md) |

## Callable

### FindById

▸ **FindById**(`options`): `Promise`<{ `item`: ``null`` \| `Doc`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Indexes`[`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` |

#### Returns

`Promise`<{ `item`: ``null`` \| `Doc`  }\>

#### Defined in

[packages/transporter/src/IndexMethods.ts:101](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/IndexMethods.ts#L101)
