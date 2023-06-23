[Powership](../README.md) / [Modules](../modules.md) / Mongo Transporter for Powership.

# Module: Mongo Transporter for Powership.

## Table of contents

### Classes

- [MongoClient](../classes/Mongo_Transporter_for_Powership_.MongoClient.md)
- [MongoDataLoader](../classes/Mongo_Transporter_for_Powership_.MongoDataLoader.md)
- [MongoTransporter](../classes/Mongo_Transporter_for_Powership_.MongoTransporter.md)

### Interfaces

- [MongoClientOptions](../interfaces/Mongo_Transporter_for_Powership_.MongoClientOptions.md)
- [MongoDataLoaderKey](../interfaces/Mongo_Transporter_for_Powership_.MongoDataLoaderKey.md)
- [MongoFindManyParams](../interfaces/Mongo_Transporter_for_Powership_.MongoFindManyParams.md)

### Type Aliases

- [CacheContext](Mongo_Transporter_for_Powership_.md#cachecontext)
- [MongoDataLoaderOptions](Mongo_Transporter_for_Powership_.md#mongodataloaderoptions)
- [ParsedMongoDLParams](Mongo_Transporter_for_Powership_.md#parsedmongodlparams)

### Functions

- [createMongoIndexBasedFilters](Mongo_Transporter_for_Powership_.md#createmongoindexbasedfilters)
- [getMongoDataloader](Mongo_Transporter_for_Powership_.md#getmongodataloader)
- [isObjectId](Mongo_Transporter_for_Powership_.md#isobjectid)
- [mongoFindMany](Mongo_Transporter_for_Powership_.md#mongofindmany)
- [mongoLoadById](Mongo_Transporter_for_Powership_.md#mongoloadbyid)
- [mongoLoadByIds](Mongo_Transporter_for_Powership_.md#mongoloadbyids)
- [parseMongoAttributeFilters](Mongo_Transporter_for_Powership_.md#parsemongoattributefilters)
- [parseMongoDLParams](Mongo_Transporter_for_Powership_.md#parsemongodlparams)
- [parseMongoUpdateExpression](Mongo_Transporter_for_Powership_.md#parsemongoupdateexpression)

## Type Aliases

### CacheContext

Ƭ **CacheContext**: `Record`<`string`, `any`\>

#### Defined in

packages/mongo/src/mongoDataLoader/IMongoDataLoader.ts:4

___

### MongoDataLoaderOptions

Ƭ **MongoDataLoaderOptions**: `DataLoader.Options`<[`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Powership_.MongoDataLoaderKey.md), `any`, `string`\>

#### Defined in

packages/mongo/src/mongoDataLoader/IMongoDataLoader.ts:16

___

### ParsedMongoDLParams

Ƭ **ParsedMongoDLParams**: `ReturnType`<typeof [`parseMongoDLParams`](Mongo_Transporter_for_Powership_.md#parsemongodlparams)\>

#### Defined in

packages/mongo/src/mongoDataLoader/parseMongoDLParams.ts:7

## Functions

### createMongoIndexBasedFilters

▸ **createMongoIndexBasedFilters**(`options`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.filter` | `IndexFilterRecord`<`string`, `string`\> |
| `options.indexConfig` | `AnyCollectionIndexConfig` |

#### Returns

`Query`<`any`\>[]

#### Defined in

packages/transporter/lib/parseAggioAttributeFilters.d.ts:4

___

### getMongoDataloader

▸ **getMongoDataloader**(`cacheContext`, `dataloaderHash`): [`MongoDataLoader`](../classes/Mongo_Transporter_for_Powership_.MongoDataLoader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheContext` | [`CacheContext`](Mongo_Transporter_for_Powership_.md#cachecontext) |
| `dataloaderHash` | `string` |

#### Returns

[`MongoDataLoader`](../classes/Mongo_Transporter_for_Powership_.MongoDataLoader.md)

#### Defined in

packages/mongo/src/mongoDataLoader/getMongoDataloader.ts:7

___

### isObjectId

▸ **isObjectId**(`input`): input is ObjectId

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is ObjectId

#### Defined in

packages/mongo/src/mongoDataLoader/parseMongoDLParams.ts:45

___

### mongoFindMany

▸ **mongoFindMany**(`options`, `context?`): `Promise`<`DocumentBase`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MongoFindManyParams`](../interfaces/Mongo_Transporter_for_Powership_.MongoFindManyParams.md) |
| `context?` | ``null`` \| [`CacheContext`](Mongo_Transporter_for_Powership_.md#cachecontext) |

#### Returns

`Promise`<`DocumentBase`[]\>

#### Defined in

packages/mongo/src/mongoDataLoader/mongoFindMany.ts:47

___

### mongoLoadById

▸ **mongoLoadById**(`options`, `cacheContext`): `Promise`<`DocumentBase`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Omit`<[`MongoFindManyParams`](../interfaces/Mongo_Transporter_for_Powership_.MongoFindManyParams.md), ``"sort"`` \| ``"query"`` \| ``"onlyOne"``\> & { `id`: `any`  } |
| `cacheContext` | [`CacheContext`](Mongo_Transporter_for_Powership_.md#cachecontext) |

#### Returns

`Promise`<`DocumentBase`[]\>

#### Defined in

packages/mongo/src/mongoDataLoader/mongoFindMany.ts:8

___

### mongoLoadByIds

▸ **mongoLoadByIds**(`options`, `cacheContext`): `Promise`<`DocumentBase`[][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Omit`<[`MongoFindManyParams`](../interfaces/Mongo_Transporter_for_Powership_.MongoFindManyParams.md), ``"sort"`` \| ``"query"`` \| ``"onlyOne"``\> & { `ids`: `any`[]  } |
| `cacheContext` | [`CacheContext`](Mongo_Transporter_for_Powership_.md#cachecontext) |

#### Returns

`Promise`<`DocumentBase`[][]\>

#### Defined in

packages/mongo/src/mongoDataLoader/mongoFindMany.ts:26

___

### parseMongoAttributeFilters

▸ **parseMongoAttributeFilters**(`attFilter`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `attFilter` | `FilterRecord`<`DocumentBase`\> |

#### Returns

`Query`<`any`\>[]

#### Defined in

packages/transporter/lib/parseAggioAttributeFilters.d.ts:8

___

### parseMongoDLParams

▸ **parseMongoDLParams**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MongoFindManyParams`](../interfaces/Mongo_Transporter_for_Powership_.MongoFindManyParams.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_isParsed` | `boolean` |
| `dataLoaderKey` | [`MongoDataLoaderKey`](../interfaces/Mongo_Transporter_for_Powership_.MongoDataLoaderKey.md) |
| `dataloaderHash` | `string` |
| `queryHash` | `string` |

#### Defined in

packages/mongo/src/mongoDataLoader/parseMongoDLParams.ts:9

___

### parseMongoUpdateExpression

▸ **parseMongoUpdateExpression**(`operations`): `UpdateDefinition`<`any`\> \| `UpdateDefinition`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `operations` | ({ `entries`: [`string`, `undefined` \| `Record`<`string`, `undefined` \| `number`\>][] ; `operator`: ``"$inc"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$addToSet"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$append"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$prepend"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$pull"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `MaybeArray`<`string`\>][] ; `operator`: ``"$remove"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$set"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$setIfNull"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$setOnInsert"`` ; `valueConstructorName`: `string`  })[] |

#### Returns

`UpdateDefinition`<`any`\> \| `UpdateDefinition`<`any`\>[]

#### Defined in

packages/transporter/lib/parseAggioUpdateExpression.d.ts:3
