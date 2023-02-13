[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / Transporter

# Interface: Transporter

[Backland](../modules/Backland.md).Transporter

## Table of contents

### Properties

- [\_client](Backland.Transporter.md#_client)

### Methods

- [connect](Backland.Transporter.md#connect)
- [createOne](Backland.Transporter.md#createone)
- [deleteMany](Backland.Transporter.md#deletemany)
- [deleteOne](Backland.Transporter.md#deleteone)
- [findById](Backland.Transporter.md#findbyid)
- [findMany](Backland.Transporter.md#findmany)
- [findOne](Backland.Transporter.md#findone)
- [paginate](Backland.Transporter.md#paginate)
- [updateMany](Backland.Transporter.md#updatemany)
- [updateOne](Backland.Transporter.md#updateone)

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

▸ **createOne**<`T`\>(`options`): `Promise`<[`CreateOneResult`](../modules/Backland.md#createoneresult)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](../modules/Backland.md#documentbase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateOneConfig`](../modules/Backland.md#createoneconfig)<[`DocumentBase`](../modules/Backland.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`CreateOneResult`](../modules/Backland.md#createoneresult)<`T`\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:209

___

### deleteMany

▸ **deleteMany**(`options`): `Promise`<[`DeleteManyResult`](../modules/Backland.md#deletemanyresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteManyConfig`](../modules/Backland.md#deletemanyconfig)<[`DocumentBase`](../modules/Backland.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`DeleteManyResult`](../modules/Backland.md#deletemanyresult)\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:210

___

### deleteOne

▸ **deleteOne**(`options`): `Promise`<[`DeleteOneResult`](../modules/Backland.md#deleteoneresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteOneConfig`](../modules/Backland.md#deleteoneconfig)<[`DocumentBase`](../modules/Backland.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`DeleteOneResult`](../modules/Backland.md#deleteoneresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:211

___

### findById

▸ **findById**(`options`): `Promise`<[`FindOneResult`](../modules/Backland.md#findoneresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindByIdConfig`](../modules/Backland.md#findbyidconfig)<[`DocumentBase`](../modules/Backland.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindOneResult`](../modules/Backland.md#findoneresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:212

___

### findMany

▸ **findMany**(`options`): `Promise`<[`FindManyResult`](../modules/Backland.md#findmanyresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindManyConfig`](../modules/Backland.md#findmanyconfig)<[`DocumentBase`](../modules/Backland.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindManyResult`](../modules/Backland.md#findmanyresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:213

___

### findOne

▸ **findOne**(`options`): `Promise`<[`FindOneResult`](../modules/Backland.md#findoneresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindOneConfig`](../modules/Backland.md#findoneconfig)<[`DocumentBase`](../modules/Backland.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindOneResult`](../modules/Backland.md#findoneresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:214

___

### paginate

▸ **paginate**(`options`): `Promise`<[`PaginationResult`](../modules/Backland.md#paginationresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindManyConfig`](../modules/Backland.md#findmanyconfig)<[`DocumentBase`](../modules/Backland.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`PaginationResult`](../modules/Backland.md#paginationresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:215

___

### updateMany

▸ **updateMany**(`options`): `Promise`<[`UpdateManyResult`](../modules/Backland.md#updatemanyresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UpdateManyConfig`](../modules/Backland.md#updatemanyconfig)<[`DocumentBase`](../modules/Backland.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`UpdateManyResult`](../modules/Backland.md#updatemanyresult)\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:216

___

### updateOne

▸ **updateOne**(`options`): `Promise`<[`UpdateOneResult`](../modules/Backland.md#updateoneresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UpdateOneConfig`](../modules/Backland.md#updateoneconfig)<[`DocumentBase`](../modules/Backland.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`UpdateOneResult`](../modules/Backland.md#updateoneresult)<[`DocumentBase`](../modules/Backland.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:217
