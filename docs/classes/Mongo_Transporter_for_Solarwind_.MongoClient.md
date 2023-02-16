[Solarwind](../README.md) / [Modules](../modules.md) / [Mongo Transporter for Solarwind.](../modules/Mongo_Transporter_for_Solarwind_.md) / MongoClient

# Class: MongoClient

[Mongo Transporter for Solarwind.](../modules/Mongo_Transporter_for_Solarwind_.md).MongoClient

## Table of contents

### Constructors

- [constructor](Mongo_Transporter_for_Solarwind_.MongoClient.md#constructor)

### Properties

- [\_dbPromise](Mongo_Transporter_for_Solarwind_.MongoClient.md#_dbpromise)
- [client](Mongo_Transporter_for_Solarwind_.MongoClient.md#client)
- [options](Mongo_Transporter_for_Solarwind_.MongoClient.md#options)

### Accessors

- [db](Mongo_Transporter_for_Solarwind_.MongoClient.md#db)

### Methods

- [connect](Mongo_Transporter_for_Solarwind_.MongoClient.md#connect)
- [objectId](Mongo_Transporter_for_Solarwind_.MongoClient.md#objectid)

## Constructors

### constructor

• **new MongoClient**(`url`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options` | [`MongoClientOptions`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoClientOptions.md) |

#### Defined in

[packages/mongo/src/MongoClient.ts:36](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/MongoClient.ts#L36)

## Properties

### \_dbPromise

• `Optional` **\_dbPromise**: `Hope`<`Db`\>

#### Defined in

[packages/mongo/src/MongoClient.ts:23](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/MongoClient.ts#L23)

___

### client

• **client**: `MongoClient`

#### Defined in

[packages/mongo/src/MongoClient.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/MongoClient.ts#L22)

___

### options

• **options**: `Required`<[`MongoClientOptions`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoClientOptions.md)\>

#### Defined in

[packages/mongo/src/MongoClient.ts:20](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/MongoClient.ts#L20)

## Accessors

### db

• `get` **db**(): `Db`

#### Returns

`Db`

#### Defined in

[packages/mongo/src/MongoClient.ts:25](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/MongoClient.ts#L25)

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

[packages/mongo/src/MongoClient.ts:43](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/MongoClient.ts#L43)

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

[packages/mongo/src/MongoClient.ts:67](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/MongoClient.ts#L67)
