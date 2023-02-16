[Solarwind](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Solarwind.](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md) / Transporter

# Interface: Transporter

[Transporter - Base to connect any Database to Solarwind.](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md).Transporter

## Table of contents

### Properties

- [\_client](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#_client)

### Methods

- [connect](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#connect)
- [createOne](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#createone)
- [deleteMany](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#deletemany)
- [deleteOne](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#deleteone)
- [findById](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#findbyid)
- [findMany](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#findmany)
- [findOne](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#findone)
- [paginate](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#paginate)
- [updateMany](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#updatemany)
- [updateOne](Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md#updateone)

## Properties

### \_client

• **\_client**: `any`

#### Defined in

[packages/transporter/src/Transporter.ts:450](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L450)

## Methods

### connect

▸ **connect**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/transporter/src/Transporter.ts:452](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L452)

___

### createOne

▸ **createOne**<`T`\>(`options`): `Promise`<[`CreateOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#createoneresult)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateOneConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#createoneconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`CreateOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#createoneresult)<`T`\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:454](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L454)

___

### deleteMany

▸ **deleteMany**(`options`): `Promise`<[`DeleteManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#deletemanyresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteManyConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#deletemanyconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`DeleteManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#deletemanyresult)\>

#### Defined in

[packages/transporter/src/Transporter.ts:458](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L458)

___

### deleteOne

▸ **deleteOne**(`options`): `Promise`<[`DeleteOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#deleteoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteOneConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#deleteoneconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`DeleteOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#deleteoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:460](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L460)

___

### findById

▸ **findById**(`options`): `Promise`<[`FindOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindByIdConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findbyidconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:462](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L462)

___

### findMany

▸ **findMany**(`options`): `Promise`<[`FindManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findmanyresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindManyConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findmanyconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findmanyresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:464](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L464)

___

### findOne

▸ **findOne**(`options`): `Promise`<[`FindOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindOneConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findoneconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:466](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L466)

___

### paginate

▸ **paginate**(`options`): `Promise`<[`PaginationResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#paginationresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindManyConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findmanyconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`PaginationResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#paginationresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:468](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L468)

___

### updateMany

▸ **updateMany**(`options`): `Promise`<[`UpdateManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updatemanyresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UpdateManyConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updatemanyconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`UpdateManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updatemanyresult)\>

#### Defined in

[packages/transporter/src/Transporter.ts:470](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L470)

___

### updateOne

▸ **updateOne**(`options`): `Promise`<[`UpdateOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UpdateOneConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateoneconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`UpdateOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:472](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L472)
