[Powership](../README.md) / [Modules](../modules.md) / [Mongo Transporter for Powership.](../modules/Mongo_Transporter_for_Powership_.md) / MongoDataLoader

# Class: MongoDataLoader

[Mongo Transporter for Powership.](../modules/Mongo_Transporter_for_Powership_.md).MongoDataLoader

## Table of contents

### Constructors

- [constructor](Mongo_Transporter_for_Powership_.MongoDataLoader.md#constructor)

### Methods

- [fetchData](Mongo_Transporter_for_Powership_.MongoDataLoader.md#fetchdata)
- [findMany](Mongo_Transporter_for_Powership_.MongoDataLoader.md#findmany)
- [loadManyQueries](Mongo_Transporter_for_Powership_.MongoDataLoader.md#loadmanyqueries)

## Constructors

### constructor

• **new MongoDataLoader**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MongoDataLoaderOptions`](../modules/Mongo_Transporter_for_Powership_.md#mongodataloaderoptions) |

#### Defined in

[packages/mongo/src/mongoDataLoader/MongoDataLoader.ts:18](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/mongoDataLoader/MongoDataLoader.ts#L18)

## Methods

### fetchData

▸ **fetchData**(`queryList`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryList` | readonly [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Powership_.MongoDataLoaderKey.md)[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[packages/mongo/src/mongoDataLoader/MongoDataLoader.ts:69](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/mongoDataLoader/MongoDataLoader.ts#L69)

___

### findMany

▸ **findMany**(`params`): `Promise`<`any`\> & { `__usedParameters`: { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Powership_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  }  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`MongoFindManyParams`](../interfaces/Mongo_Transporter_for_Powership_.MongoFindManyParams.md) \| { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Powership_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  } |

#### Returns

`Promise`<`any`\> & { `__usedParameters`: { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Powership_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  }  }

#### Defined in

[packages/mongo/src/mongoDataLoader/MongoDataLoader.ts:34](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/mongoDataLoader/MongoDataLoader.ts#L34)

___

### loadManyQueries

▸ **loadManyQueries**(`options`): `Promise`<`any`\> & { `__usedParameters`: { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Powership_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  }[]  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Powership_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  }[] \| [`MongoFindManyParams`](../interfaces/Mongo_Transporter_for_Powership_.MongoFindManyParams.md)[] |

#### Returns

`Promise`<`any`\> & { `__usedParameters`: { `_isParsed`: `boolean` = true; `dataLoaderKey`: [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Powership_.MongoDataLoaderKey.md) ; `dataloaderHash`: `string` ; `queryHash`: `string`  }[]  }

#### Defined in

[packages/mongo/src/mongoDataLoader/MongoDataLoader.ts:49](https://github.com/antoniopresto/powership/blob/2672a73/packages/mongo/src/mongoDataLoader/MongoDataLoader.ts#L49)
