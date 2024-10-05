[Powership](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md) / Transporter

# Interface: Transporter<Client\>

[Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md).Transporter

## Type parameters

| Name | Type |
| :------ | :------ |
| `Client` | extends `any` = `any` |

## Table of contents

### Properties

- [\_client](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#_client)

### Methods

- [connect](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#connect)
- [createOne](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#createone)
- [deleteMany](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#deletemany)
- [deleteOne](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#deleteone)
- [findById](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#findbyid)
- [findMany](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#findmany)
- [findOne](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#findone)
- [paginate](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#paginate)
- [updateMany](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#updatemany)
- [updateOne](Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md#updateone)

## Properties

### \_client

• **\_client**: `Client`

#### Defined in

[packages/transporter/src/Transporter.ts:449](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L449)

## Methods

### connect

▸ **connect**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/transporter/src/Transporter.ts:451](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L451)

___

### createOne

▸ **createOne**<`T`\>(`options`): `Promise`<[`CreateOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#createoneresult)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateOneConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#createoneconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`CreateOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#createoneresult)<`T`\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:453](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L453)

___

### deleteMany

▸ **deleteMany**(`options`): `Promise`<[`DeleteManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#deletemanyresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteManyConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#deletemanyconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`DeleteManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#deletemanyresult)\>

#### Defined in

[packages/transporter/src/Transporter.ts:457](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L457)

___

### deleteOne

▸ **deleteOne**(`options`): `Promise`<[`DeleteOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#deleteoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteOneConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#deleteoneconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`DeleteOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#deleteoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:459](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L459)

___

### findById

▸ **findById**(`options`): `Promise`<[`FindOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#findoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindByIdConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#findbyidconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#findoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:461](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L461)

___

### findMany

▸ **findMany**(`options`): `Promise`<[`FindManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#findmanyresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindManyConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#findmanyconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#findmanyresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:463](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L463)

___

### findOne

▸ **findOne**(`options`): `Promise`<[`FindOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#findoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindOneConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#findoneconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#findoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:465](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L465)

___

### paginate

▸ **paginate**(`options`): `Promise`<[`PaginationResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#paginationresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindManyConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#findmanyconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`PaginationResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#paginationresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:467](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L467)

___

### updateMany

▸ **updateMany**(`options`): `Promise`<[`UpdateManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#updatemanyresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UpdateManyConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#updatemanyconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`UpdateManyResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#updatemanyresult)\>

#### Defined in

[packages/transporter/src/Transporter.ts:469](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L469)

___

### updateOne

▸ **updateOne**(`options`): `Promise`<[`UpdateOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#updateoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UpdateOneConfig`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#updateoneconfig)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`UpdateOneResult`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#updateoneresult)<[`DocumentBase`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\>\>

#### Defined in

[packages/transporter/src/Transporter.ts:471](https://github.com/antoniopresto/powership/blob/2672a73/packages/transporter/src/Transporter.ts#L471)
