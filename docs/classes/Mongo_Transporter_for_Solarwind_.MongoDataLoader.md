[Solarwind](../README.md) / [Modules](../modules.md) / [Mongo Transporter for Solarwind.](../modules/Mongo_Transporter_for_Solarwind_.md) / MongoDataLoader

# Class: MongoDataLoader

[Mongo Transporter for Solarwind.](../modules/Mongo_Transporter_for_Solarwind_.md).MongoDataLoader

## Table of contents

### Constructors

- [constructor](Mongo_Transporter_for_Solarwind_.MongoDataLoader.md#constructor)

### Methods

- [fetchData](Mongo_Transporter_for_Solarwind_.MongoDataLoader.md#fetchdata)
- [findMany](Mongo_Transporter_for_Solarwind_.MongoDataLoader.md#findmany)
- [loadManyQueries](Mongo_Transporter_for_Solarwind_.MongoDataLoader.md#loadmanyqueries)

## Constructors

### constructor

• **new MongoDataLoader**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MongoDataLoaderOptions`](../modules/Mongo_Transporter_for_Solarwind_.md#mongodataloaderoptions) |

#### Defined in

[packages/mongo/src/mongoDataLoader/MongoDataLoader.ts:18](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/mongoDataLoader/MongoDataLoader.ts#L18)

## Methods

### fetchData

▸ **fetchData**(`queryList`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryList` | readonly [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoDataLoaderKey.md)[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[packages/mongo/src/mongoDataLoader/MongoDataLoader.ts:69](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/mongoDataLoader/MongoDataLoader.ts#L69)

___

### findMany

▸ **findMany**(`params`): `Promise`<`any`\> & { `__usedParameters`: { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  }  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`MongoFindManyParams`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoFindManyParams.md) \| { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  } |

#### Returns

`Promise`<`any`\> & { `__usedParameters`: { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  }  }

#### Defined in

[packages/mongo/src/mongoDataLoader/MongoDataLoader.ts:34](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/mongoDataLoader/MongoDataLoader.ts#L34)

___

### loadManyQueries

▸ **loadManyQueries**(`options`): `Promise`<`any`\> & { `__usedParameters`: { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  }[]  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  }[] \| [`MongoFindManyParams`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoFindManyParams.md)[] |

#### Returns

`Promise`<`any`\> & { `__usedParameters`: { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Solarwind_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  }[]  }

#### Defined in

[packages/mongo/src/mongoDataLoader/MongoDataLoader.ts:49](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/mongo/src/mongoDataLoader/MongoDataLoader.ts#L49)
