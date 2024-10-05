[Powership](../README.md) / [Modules](../modules.md) / [Mongo Transporter for Powership.](../modules/Mongo_Transporter_for_Powership_.md) / MongoTransporter

# Class: MongoTransporter

[Mongo Transporter for Powership.](../modules/Mongo_Transporter_for_Powership_.md).MongoTransporter

## Implements

- `Transporter`<[`MongoClient`](Mongo_Transporter_for_Powership_.MongoClient.md)\>

## Table of contents

### Constructors

- [constructor](Mongo_Transporter_for_Powership_.MongoTransporter.md#constructor)

### Properties

- [\_client](Mongo_Transporter_for_Powership_.MongoTransporter.md#_client)
- [collection](Mongo_Transporter_for_Powership_.MongoTransporter.md#collection)
- [logger](Mongo_Transporter_for_Powership_.MongoTransporter.md#logger)

### Accessors

- [db](Mongo_Transporter_for_Powership_.MongoTransporter.md#db)
- [debug](Mongo_Transporter_for_Powership_.MongoTransporter.md#debug)

### Methods

- [\_parseUpdateParams](Mongo_Transporter_for_Powership_.MongoTransporter.md#_parseupdateparams)
- [connect](Mongo_Transporter_for_Powership_.MongoTransporter.md#connect)
- [createOne](Mongo_Transporter_for_Powership_.MongoTransporter.md#createone)
- [deleteMany](Mongo_Transporter_for_Powership_.MongoTransporter.md#deletemany)
- [deleteOne](Mongo_Transporter_for_Powership_.MongoTransporter.md#deleteone)
- [findById](Mongo_Transporter_for_Powership_.MongoTransporter.md#findbyid)
- [findMany](Mongo_Transporter_for_Powership_.MongoTransporter.md#findmany)
- [findOne](Mongo_Transporter_for_Powership_.MongoTransporter.md#findone)
- [getCollection](Mongo_Transporter_for_Powership_.MongoTransporter.md#getcollection)
- [paginate](Mongo_Transporter_for_Powership_.MongoTransporter.md#paginate)
- [updateMany](Mongo_Transporter_for_Powership_.MongoTransporter.md#updatemany)
- [updateOne](Mongo_Transporter_for_Powership_.MongoTransporter.md#updateone)

## Constructors

### constructor

• **new MongoTransporter**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.client` | [`MongoClient`](Mongo_Transporter_for_Powership_.MongoClient.md) |
| `options.collection` | `string` |
| `options.logger?` | `LoggerOptions` |

#### Defined in

[packages/mongo/src/MongoTransporter.ts:58](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L58)

## Properties

### \_client

• **\_client**: [`MongoClient`](Mongo_Transporter_for_Powership_.MongoClient.md)

#### Implementation of

Transporter.\_client

#### Defined in

[packages/mongo/src/MongoTransporter.ts:43](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L43)

___

### collection

• **collection**: `string`

#### Defined in

[packages/mongo/src/MongoTransporter.ts:68](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L68)

___

### logger

• **logger**: `Logger`

#### Defined in

[packages/mongo/src/MongoTransporter.ts:53](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L53)

## Accessors

### db

• `get` **db**(): `Db`

#### Returns

`Db`

#### Defined in

[packages/mongo/src/MongoTransporter.ts:45](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L45)

___

### debug

• `get` **debug**(): (...`data`: `any`[]) => `void`

#### Returns

`fn`

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/mongo/src/MongoTransporter.ts:54](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L54)

## Methods

### \_parseUpdateParams

▸ **_parseUpdateParams**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | { `kind`: ``"updateOne"`` ; `params`: `UpdateOneConfig`<`DocumentBase`, `string`, `string`\>  } \| { `kind`: ``"updateMany"`` ; `params`: `UpdateManyConfig`<`DocumentBase`, `string`, `string`\>  } |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `collection` | `Collection`<`Document`\> |
| `condition` | `undefined` \| `FilterRecord`<`DocumentBase`\> |
| `filter` | { `id?`: `PKSKValueType`  } |
| `filter.id?` | `PKSKValueType` |
| `indexConfig` | `CollectionIndexConfig`<`DocumentBase`, `string`\> |
| `parsedFilter` | `Query`<`any`\>[] |
| `parsedUpdate` | ({ `entries`: [`string`, `undefined` \| `Record`<`string`, `undefined` \| `number`\>][] ; `operator`: ``"$inc"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$addToSet"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$append"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$prepend"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$pull"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `MaybeArray`<`string`\>][] ; `operator`: ``"$remove"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$set"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$setIfNull"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$setOnInsert"`` ; `valueConstructorName`: `string`  })[] |
| `update` | `UpdateExpression`<`DocumentBase`\> |
| `updateExpression` | `UpdateDefinition`<`any`\> \| `UpdateDefinition`<`any`\>[] |
| `upsert` | `undefined` \| `boolean` |

#### Defined in

[packages/mongo/src/MongoTransporter.ts:382](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L382)

___

### connect

▸ **connect**(`dbName?`): `Promise`<`Db`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName?` | `string` |

#### Returns

`Promise`<`Db`\>

#### Implementation of

Transporter.connect

#### Defined in

[packages/mongo/src/MongoTransporter.ts:49](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L49)

___

### createOne

▸ **createOne**(`options`): `Promise`<`CreateOneResult`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `CreateOneConfig`<`DocumentBase`, `string`, `string`\> |

#### Returns

`Promise`<`CreateOneResult`<`any`\>\>

#### Implementation of

Transporter.createOne

#### Defined in

[packages/mongo/src/MongoTransporter.ts:70](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L70)

___

### deleteMany

▸ **deleteMany**(`options`): `Promise`<`DeleteManyResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `DeleteManyConfig`<`DocumentBase`, `string`, `string`\> |

#### Returns

`Promise`<`DeleteManyResult`\>

#### Implementation of

Transporter.deleteMany

#### Defined in

[packages/mongo/src/MongoTransporter.ts:504](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L504)

___

### deleteOne

▸ **deleteOne**(`options`): `Promise`<`DeleteOneResult`<`DocumentBase`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `DeleteOneConfig`<`DocumentBase`, `string`, `string`\> |

#### Returns

`Promise`<`DeleteOneResult`<`DocumentBase`\>\>

#### Implementation of

Transporter.deleteOne

#### Defined in

[packages/mongo/src/MongoTransporter.ts:482](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L482)

___

### findById

▸ **findById**(`options`): `Promise`<`FindOneResult`<`DocumentBase`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FindByIdConfig`<`DocumentBase`, `string`, `string`\> |

#### Returns

`Promise`<`FindOneResult`<`DocumentBase`\>\>

#### Implementation of

Transporter.findById

#### Defined in

[packages/mongo/src/MongoTransporter.ts:368](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L368)

___

### findMany

▸ **findMany**(`options`): `Promise`<`FindManyResult`<`DocumentBase`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FindManyConfig`<`DocumentBase`, `string`, `string`\> |

#### Returns

`Promise`<`FindManyResult`<`DocumentBase`\>\>

#### Implementation of

Transporter.findMany

#### Defined in

[packages/mongo/src/MongoTransporter.ts:169](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L169)

___

### findOne

▸ **findOne**(`options`): `Promise`<`FindOneResult`<`DocumentBase`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FindOneConfig`<`DocumentBase`, `string`, `string`\> |

#### Returns

`Promise`<`FindOneResult`<`DocumentBase`\>\>

#### Implementation of

Transporter.findOne

#### Defined in

[packages/mongo/src/MongoTransporter.ts:349](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L349)

___

### getCollection

▸ **getCollection**(`_info`): `Collection`<`Document`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_info` | `unknown` |

#### Returns

`Collection`<`Document`\>

#### Defined in

[packages/mongo/src/MongoTransporter.ts:525](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L525)

___

### paginate

▸ **paginate**(`options`): `Promise`<`PaginationResult`<`DocumentBase`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FindManyConfig`<`DocumentBase`, `string`, `string`\> |

#### Returns

`Promise`<`PaginationResult`<`DocumentBase`\>\>

#### Implementation of

Transporter.paginate

#### Defined in

[packages/mongo/src/MongoTransporter.ts:319](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L319)

___

### updateMany

▸ **updateMany**(`options`): `Promise`<`UpdateManyResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `UpdateManyConfig`<`DocumentBase`, `string`, `string`\> |

#### Returns

`Promise`<`UpdateManyResult`\>

#### Implementation of

Transporter.updateMany

#### Defined in

[packages/mongo/src/MongoTransporter.ts:451](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L451)

___

### updateOne

▸ **updateOne**(`options`): `Promise`<`UpdateOneResult`<`DocumentBase`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `UpdateOneConfig`<`DocumentBase`, `string`, `string`\> |

#### Returns

`Promise`<`UpdateOneResult`<`DocumentBase`\>\>

#### Implementation of

Transporter.updateOne

#### Defined in

[packages/mongo/src/MongoTransporter.ts:415](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/MongoTransporter.ts#L415)
