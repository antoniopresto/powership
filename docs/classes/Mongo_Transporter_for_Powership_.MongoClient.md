[Powership](../README.md) / [Modules](../modules.md) / [Mongo Transporter for Powership.](../modules/Mongo_Transporter_for_Powership_.md) / MongoClient

# Class: MongoClient

[Mongo Transporter for Powership.](../modules/Mongo_Transporter_for_Powership_.md).MongoClient

## Table of contents

### Constructors

- [constructor](Mongo_Transporter_for_Powership_.MongoClient.md#constructor)

### Properties

- [\_dbPromise](Mongo_Transporter_for_Powership_.MongoClient.md#_dbpromise)
- [client](Mongo_Transporter_for_Powership_.MongoClient.md#client)
- [options](Mongo_Transporter_for_Powership_.MongoClient.md#options)

### Accessors

- [db](Mongo_Transporter_for_Powership_.MongoClient.md#db)

### Methods

- [connect](Mongo_Transporter_for_Powership_.MongoClient.md#connect)
- [objectId](Mongo_Transporter_for_Powership_.MongoClient.md#objectid)

## Constructors

### constructor

• **new MongoClient**(`url`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options` | [`MongoClientOptions`](../interfaces/Mongo_Transporter_for_Powership_.MongoClientOptions.md) |

#### Defined in

packages/mongo/src/MongoClient.ts:36

## Properties

### \_dbPromise

• `Optional` **\_dbPromise**: `Hope`<`Db`\>

#### Defined in

packages/mongo/src/MongoClient.ts:23

___

### client

• **client**: `MongoClient`

#### Defined in

packages/mongo/src/MongoClient.ts:22

___

### options

• **options**: `Required`<[`MongoClientOptions`](../interfaces/Mongo_Transporter_for_Powership_.MongoClientOptions.md)\>

#### Defined in

packages/mongo/src/MongoClient.ts:20

## Accessors

### db

• `get` **db**(): `Db`

#### Returns

`Db`

#### Defined in

packages/mongo/src/MongoClient.ts:25

## Methods

### connect

▸ **connect**(`dbName?`): `Promise`<`Db`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName?` | `string` |

#### Returns

`Promise`<`Db`\>

#### Defined in

packages/mongo/src/MongoClient.ts:43

___

### objectId

▸ `Static` **objectId**(`id?`): `ObjectId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` \| `number` \| `ObjectId` |

#### Returns

`ObjectId`

#### Defined in

packages/mongo/src/MongoClient.ts:67
