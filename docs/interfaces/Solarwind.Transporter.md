[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / Transporter

# Interface: Transporter

[Solarwind](../modules/Solarwind.md).Transporter

## Table of contents

### Properties

- [\_client](Solarwind.Transporter.md#_client)

### Methods

- [connect](Solarwind.Transporter.md#connect)
- [createOne](Solarwind.Transporter.md#createone)
- [deleteMany](Solarwind.Transporter.md#deletemany)
- [deleteOne](Solarwind.Transporter.md#deleteone)
- [findById](Solarwind.Transporter.md#findbyid)
- [findMany](Solarwind.Transporter.md#findmany)
- [findOne](Solarwind.Transporter.md#findone)
- [paginate](Solarwind.Transporter.md#paginate)
- [updateMany](Solarwind.Transporter.md#updatemany)
- [updateOne](Solarwind.Transporter.md#updateone)

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

▸ **createOne**<`T`\>(`options`): `Promise`<[`CreateOneResult`](../modules/Solarwind.md#createoneresult)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](../modules/Solarwind.md#documentbase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateOneConfig`](../modules/Solarwind.md#createoneconfig)<[`DocumentBase`](../modules/Solarwind.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`CreateOneResult`](../modules/Solarwind.md#createoneresult)<`T`\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:209

___

### deleteMany

▸ **deleteMany**(`options`): `Promise`<[`DeleteManyResult`](../modules/Solarwind.md#deletemanyresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteManyConfig`](../modules/Solarwind.md#deletemanyconfig)<[`DocumentBase`](../modules/Solarwind.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`DeleteManyResult`](../modules/Solarwind.md#deletemanyresult)\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:210

___

### deleteOne

▸ **deleteOne**(`options`): `Promise`<[`DeleteOneResult`](../modules/Solarwind.md#deleteoneresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteOneConfig`](../modules/Solarwind.md#deleteoneconfig)<[`DocumentBase`](../modules/Solarwind.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`DeleteOneResult`](../modules/Solarwind.md#deleteoneresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:211

___

### findById

▸ **findById**(`options`): `Promise`<[`FindOneResult`](../modules/Solarwind.md#findoneresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindByIdConfig`](../modules/Solarwind.md#findbyidconfig)<[`DocumentBase`](../modules/Solarwind.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindOneResult`](../modules/Solarwind.md#findoneresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:212

___

### findMany

▸ **findMany**(`options`): `Promise`<[`FindManyResult`](../modules/Solarwind.md#findmanyresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindManyConfig`](../modules/Solarwind.md#findmanyconfig)<[`DocumentBase`](../modules/Solarwind.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindManyResult`](../modules/Solarwind.md#findmanyresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:213

___

### findOne

▸ **findOne**(`options`): `Promise`<[`FindOneResult`](../modules/Solarwind.md#findoneresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindOneConfig`](../modules/Solarwind.md#findoneconfig)<[`DocumentBase`](../modules/Solarwind.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`FindOneResult`](../modules/Solarwind.md#findoneresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:214

___

### paginate

▸ **paginate**(`options`): `Promise`<[`PaginationResult`](../modules/Solarwind.md#paginationresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FindManyConfig`](../modules/Solarwind.md#findmanyconfig)<[`DocumentBase`](../modules/Solarwind.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`PaginationResult`](../modules/Solarwind.md#paginationresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:215

___

### updateMany

▸ **updateMany**(`options`): `Promise`<[`UpdateManyResult`](../modules/Solarwind.md#updatemanyresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UpdateManyConfig`](../modules/Solarwind.md#updatemanyconfig)<[`DocumentBase`](../modules/Solarwind.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`UpdateManyResult`](../modules/Solarwind.md#updatemanyresult)\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:216

___

### updateOne

▸ **updateOne**(`options`): `Promise`<[`UpdateOneResult`](../modules/Solarwind.md#updateoneresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UpdateOneConfig`](../modules/Solarwind.md#updateoneconfig)<[`DocumentBase`](../modules/Solarwind.md#documentbase), `string`, `string`\> |

#### Returns

`Promise`<[`UpdateOneResult`](../modules/Solarwind.md#updateoneresult)<[`DocumentBase`](../modules/Solarwind.md#documentbase)\>\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:217
