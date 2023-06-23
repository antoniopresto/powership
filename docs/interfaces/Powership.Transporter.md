[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / Transporter

# Interface: Transporter

[Powership](../modules/Powership.md).Transporter

## Table of contents

### Properties

- [\_client](Powership.Transporter.md#_client)

### Methods

- [connect](Powership.Transporter.md#connect)
- [createOne](Powership.Transporter.md#createone)
- [deleteMany](Powership.Transporter.md#deletemany)
- [deleteOne](Powership.Transporter.md#deleteone)
- [findById](Powership.Transporter.md#findbyid)
- [findMany](Powership.Transporter.md#findmany)
- [findOne](Powership.Transporter.md#findone)
- [paginate](Powership.Transporter.md#paginate)
- [updateMany](Powership.Transporter.md#updatemany)
- [updateOne](Powership.Transporter.md#updateone)

## Properties

### \_client

• **\_client**: `any`

#### Defined in

packages/transporter/lib/Transporter.d.ts:207

## Methods

### connect

▸ **connect**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:208

___

### createOne

▸ **createOne**<`T`\>(`options`): `Promise`<[`CreateOneResult`](../modules/Powership.md#createoneresult)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](../modules/Powership.md#documentbase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateOneConfig`](../modules/Powership.md#createoneconfig)<[`DocumentBase`](../modules/Powership.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`CreateOneResult`](../modules/Powership.md#createoneresult)<`T`\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:209

___

### deleteMany

▸ **deleteMany**(`options`): `Promise`<[`DeleteManyResult`](../modules/Powership.md#deletemanyresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteManyConfig`](../modules/Powership.md#deletemanyconfig)<[`DocumentBase`](../modules/Powership.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`DeleteManyResult`](../modules/Powership.md#deletemanyresult)\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:210

___

### deleteOne

▸ **deleteOne**(`options`): `Promise`<[`DeleteOneResult`](../modules/Powership.md#deleteoneresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteOneConfig`](../modules/Powership.md#deleteoneconfig)<[`DocumentBase`](../modules/Powership.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`DeleteOneResult`](../modules/Powership.md#deleteoneresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:211

___

### findById

▸ **findById**(`options`): `Promise`<[`FindOneResult`](../modules/Powership.md#findoneresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindByIdConfig`](../modules/Powership.md#findbyidconfig)<[`DocumentBase`](../modules/Powership.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindOneResult`](../modules/Powership.md#findoneresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:212

___

### findMany

▸ **findMany**(`options`): `Promise`<[`FindManyResult`](../modules/Powership.md#findmanyresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindManyConfig`](../modules/Powership.md#findmanyconfig)<[`DocumentBase`](../modules/Powership.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindManyResult`](../modules/Powership.md#findmanyresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:213

___

### findOne

▸ **findOne**(`options`): `Promise`<[`FindOneResult`](../modules/Powership.md#findoneresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindOneConfig`](../modules/Powership.md#findoneconfig)<[`DocumentBase`](../modules/Powership.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindOneResult`](../modules/Powership.md#findoneresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:214

___

### paginate

▸ **paginate**(`options`): `Promise`<[`PaginationResult`](../modules/Powership.md#paginationresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindManyConfig`](../modules/Powership.md#findmanyconfig)<[`DocumentBase`](../modules/Powership.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`PaginationResult`](../modules/Powership.md#paginationresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:215

___

### updateMany

▸ **updateMany**(`options`): `Promise`<[`UpdateManyResult`](../modules/Powership.md#updatemanyresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UpdateManyConfig`](../modules/Powership.md#updatemanyconfig)<[`DocumentBase`](../modules/Powership.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`UpdateManyResult`](../modules/Powership.md#updatemanyresult)\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:216

___

### updateOne

▸ **updateOne**(`options`): `Promise`<[`UpdateOneResult`](../modules/Powership.md#updateoneresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UpdateOneConfig`](../modules/Powership.md#updateoneconfig)<[`DocumentBase`](../modules/Powership.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`UpdateOneResult`](../modules/Powership.md#updateoneresult)<[`DocumentBase`](../modules/Powership.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:217
