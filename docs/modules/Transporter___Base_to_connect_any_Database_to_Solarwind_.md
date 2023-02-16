[Solarwind](../README.md) / [Modules](../modules.md) / Transporter - Base to connect any Database to Solarwind.

# Module: Transporter - Base to connect any Database to Solarwind.

## Table of contents

### Classes

- [CollectionErrors](../classes/Transporter___Base_to_connect_any_Database_to_Solarwind_.CollectionErrors.md)

### Interfaces

- [CreateOne](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.CreateOne.md)
- [DeleteMany](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.DeleteMany.md)
- [DeleteOne](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.DeleteOne.md)
- [DocumentIndexFieldsParsed](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.DocumentIndexFieldsParsed.md)
- [DocumentIndexesConfig](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.DocumentIndexesConfig.md)
- [FindById](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.FindById.md)
- [FindMany](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.FindMany.md)
- [FindOne](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.FindOne.md)
- [FirstIndexParsed](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.FirstIndexParsed.md)
- [IndexMethods](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.IndexMethods.md)
- [IndexPKSKPartsListConfig](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.IndexPKSKPartsListConfig.md)
- [Paginate](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.Paginate.md)
- [Transporter](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.Transporter.md)
- [UpdateMany](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.UpdateMany.md)
- [UpdateOne](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.UpdateOne.md)

### Type Aliases

- [AllFilterOperations](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#allfilteroperations)
- [AllIndexFilter](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#allindexfilter)
- [AnyCollectionIndexConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anycollectionindexconfig)
- [AnyDocIndexItem](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anydocindexitem)
- [ArrayOperationRecord](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#arrayoperationrecord)
- [AttributeFilterKey](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#attributefilterkey)
- [CollectionConfigIndexes](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionconfigindexes)
- [CollectionIndexConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionindexconfig)
- [CommonIndexFields](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#commonindexfields)
- [CreateOneConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#createoneconfig)
- [CreateOneResult](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#createoneresult)
- [DeleteManyConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#deletemanyconfig)
- [DeleteManyResult](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#deletemanyresult)
- [DeleteOneConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#deleteoneconfig)
- [DeleteOneResult](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#deleteoneresult)
- [DocumentBase](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)
- [DocumentIndexFieldKey](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentindexfieldkey)
- [DocumentIndexFilterParsed](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentindexfilterparsed)
- [DocumentIndexItem](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentindexitem)
- [DocumentIndexRelation](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentindexrelation)
- [EntityErrorDetails](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#entityerrordetails)
- [EntityErrorKind](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#entityerrorkind)
- [EntityErrorKindEnum](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#entityerrorkindenum)
- [EntityFilters](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#entityfilters)
- [FilterConditions](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterconditions)
- [FilterRecord](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)
- [FindByIdConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findbyidconfig)
- [FindManyConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findmanyconfig)
- [FindManyResult](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findmanyresult)
- [FindOneConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findoneconfig)
- [FindOneResult](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#findoneresult)
- [IndexBasedFilterParsed](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexbasedfilterparsed)
- [IndexFilter](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexfilter)
- [IndexFilterFound](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexfilterfound)
- [IndexFilterRecord](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexfilterrecord)
- [IndexKeyHash](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexkeyhash)
- [IndexPartKind](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexpartkind)
- [InvalidParsedIndexField](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#invalidparsedindexfield)
- [LoaderContext](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext)
- [MethodFilter](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#methodfilter)
- [OneFilterOperation](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#onefilteroperation)
- [PKSKValueType](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype)
- [PaginationResult](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#paginationresult)
- [ParsedDocumentIndexes](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parseddocumentindexes)
- [ParsedIndexFilterPart](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexfilterpart)
- [ParsedIndexKey](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexkey)
- [ParsedIndexPart](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexpart)
- [ParsedUpdateExpression](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedupdateexpression)
- [QuerySort](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#querysort)
- [RelationsFilter](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#relationsfilter)
- [RootFilterOperators](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#rootfilteroperators)
- [TopLevelFilterKey](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#toplevelfilterkey)
- [TransporterFieldType](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#transporterfieldtype)
- [TransporterLoader](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#transporterloader)
- [TransporterLoaderName](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#transporterloadername)
- [TransporterLoadersRecord](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#transporterloadersrecord)
- [UpdateExpression](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateexpression)
- [UpdateExpressionKey](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateexpressionkey)
- [UpdateManyConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updatemanyconfig)
- [UpdateManyResult](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updatemanyresult)
- [UpdateOneConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateoneconfig)
- [UpdateOneResult](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateoneresult)

### Variables

- [AttributeFilterKeys](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#attributefilterkeys)
- [DEFAULT\_SORT](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#default_sort)
- [EntityErrorKind](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#entityerrorkind-1)
- [FieldTypes](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#fieldtypes)
- [FilterConditionsParsers](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterconditionsparsers)
- [TopLevelFilterKeys](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#toplevelfilterkeys)
- [indexConfigSchema](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexconfigschema)
- [indexItemSchema](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexitemschema)
- [relationSchema](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#relationschema)
- [transporterLoaderNames](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#transporterloadernames)

### Functions

- [\_ensureTransporterMethodsImplementation](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#_ensuretransportermethodsimplementation)
- [assertFieldFilter](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#assertfieldfilter)
- [createAggioIndexBasedFilters](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#createaggioindexbasedfilters)
- [createDocumentIndexBasedFilters](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#createdocumentindexbasedfilters)
- [encodeIndexValue](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#encodeindexvalue)
- [getDocumentIndexFields](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#getdocumentindexfields)
- [getParsedIndexKeys](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#getparsedindexkeys)
- [isFilterConditionKey](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#isfilterconditionkey)
- [mergeIndexRelationsResult](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#mergeindexrelationsresult)
- [parseAggioAttributeFilters](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parseaggioattributefilters)
- [parseAggioUpdateExpression](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parseaggioupdateexpression)
- [parseCollectionIndexConfig](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsecollectionindexconfig)
- [parseEntityIndexFields](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parseentityindexfields)
- [parseFilterIndexFilterParts](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsefilterindexfilterparts)
- [parseOneIndexDocumentFields](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parseoneindexdocumentfields)
- [parseUpdateExpression](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parseupdateexpression)
- [pickIndexKeyPartsFromDocument](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pickindexkeypartsfromdocument)

## Type Aliases

### AllFilterOperations

Ƭ **AllFilterOperations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$between` | [`string`, `string`] \| [`number`, `number`] |
| `$contains` | `string` \| `number` \| `boolean` \| ``null`` |
| `$eq` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) \| `boolean` |
| `$exists` | `boolean` |
| `$gt` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) |
| `$gte` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) |
| `$in` | `unknown`[] |
| `$lt` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) |
| `$lte` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) |
| `$matchString` | `string` |
| `$ne` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) \| `boolean` |
| `$startsWith` | `string` |
| `$type` | [`TransporterFieldType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#transporterfieldtype) |

#### Defined in

[packages/transporter/src/Transporter.ts:40](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L40)

___

### AllIndexFilter

Ƭ **AllIndexFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$between` | [`string`, `string`] \| [`number`, `number`] |
| `$eq` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) |
| `$gt` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) |
| `$gte` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) |
| `$lt` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) |
| `$lte` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) |
| `$startsWith` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype) |

#### Defined in

[packages/transporter/src/Transporter.ts:89](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L89)

___

### AnyCollectionIndexConfig

Ƭ **AnyCollectionIndexConfig**: [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionindexconfig)<[`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase), `string`\>

#### Defined in

[packages/transporter/src/CollectionIndex.ts:76](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L76)

___

### AnyDocIndexItem

Ƭ **AnyDocIndexItem**: [`DocumentIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentindexitem)

#### Defined in

[packages/transporter/src/CollectionIndex.ts:61](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L61)

___

### ArrayOperationRecord

Ƭ **ArrayOperationRecord**<`TSchema`, `KV`\>: `MatchKeysAndValues`<`TSchema`\> extends infer All ? { [K in keyof All as [NonNullable<All[K]\>] extends [any[]] ? K : never]?: Cast<NonNullable<All[K]\>, any[]\>[number] \| { [Kv in KV]?: Cast<NonNullable<All[K]\>, any[]\>[number][] } } : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | `TSchema` |
| `KV` | extends `string` = ``"$each"`` |

#### Defined in

[packages/transporter/src/Transporter.ts:277](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L277)

___

### AttributeFilterKey

Ƭ **AttributeFilterKey**: typeof [`AttributeFilterKeys`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#attributefilterkeys)[`number`]

#### Defined in

[packages/transporter/src/Transporter.ts:398](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L398)

___

### CollectionConfigIndexes

Ƭ **CollectionConfigIndexes**<`Doc`, `K`\>: `ReadonlyArray`<[`DocumentIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentindexitem)<`K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `K` | extends `string` = `Extract`<keyof `Doc`, `string`\> |

#### Defined in

[packages/transporter/src/CollectionIndex.ts:63](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L63)

___

### CollectionIndexConfig

Ƭ **CollectionIndexConfig**<`Doc`, `EntityName`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `EntityName` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `Readonly`<`EntityName`\> |
| `indexes` | [`CollectionConfigIndexes`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionconfigindexes)<`Doc`\> |

#### Defined in

[packages/transporter/src/CollectionIndex.ts:68](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L68)

___

### CommonIndexFields

Ƭ **CommonIndexFields**: { `_c`: `string` ; `_e`: `string` ; `_id`: `string` ; `_rpk?`: `string`[]  } & { [L in \`${string}PK\`]: string } & { [L in \`${string}SK\`]: string }

#### Defined in

[packages/transporter/src/CollectionIndex.ts:236](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L236)

___

### CreateOneConfig

Ƭ **CreateOneConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext) |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `item` | `Doc` |
| `replace?` | `boolean` |

#### Defined in

[packages/transporter/src/Transporter.ts:197](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L197)

___

### CreateOneResult

Ƭ **CreateOneResult**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `created` | `boolean` |
| `error?` | `string` \| ``null`` |
| `item` | `T` \| ``null`` |
| `updated` | `boolean` |

#### Defined in

[packages/transporter/src/Transporter.ts:403](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L403)

___

### DeleteManyConfig

Ƭ **DeleteManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |

#### Defined in

[packages/transporter/src/Transporter.ts:245](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L245)

___

### DeleteManyResult

Ƭ **DeleteManyResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deletedCount` | `number` |
| `error?` | `string` \| ``null`` |

#### Defined in

[packages/transporter/src/Transporter.ts:423](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L423)

___

### DeleteOneConfig

Ƭ **DeleteOneConfig**<`Item`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Item` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Item`\> |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionindexconfig)<`Item`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |

#### Defined in

[packages/transporter/src/Transporter.ts:259](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L259)

___

### DeleteOneResult

Ƭ **DeleteOneResult**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `item` | `T` \| ``null`` |

#### Defined in

[packages/transporter/src/Transporter.ts:445](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L445)

___

### DocumentBase

Ƭ **DocumentBase**: `Record`<`string`, `any`\>

#### Defined in

[packages/transporter/src/Transporter.ts:115](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L115)

___

### DocumentIndexFieldKey

Ƭ **DocumentIndexFieldKey**: `string`

#### Defined in

[packages/transporter/src/CollectionIndex.ts:37](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L37)

___

### DocumentIndexFilterParsed

Ƭ **DocumentIndexFilterParsed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK` | [`FilterConditions`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterconditions) \| `string` |
| `SK` | [`FilterConditions`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterconditions) \| `string` |
| `entity` | `string` |
| `key` | [`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anydocindexitem)[``"name"``] |

#### Defined in

[packages/transporter/src/CollectionIndex.ts:103](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L103)

___

### DocumentIndexItem

Ƭ **DocumentIndexItem**<`DocKeys`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DocKeys` | extends `$Any.Key` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK` | [`IndexPKSKPartsListConfig`](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.IndexPKSKPartsListConfig.md)<`DocKeys`\> |
| `SK?` | [`IndexPKSKPartsListConfig`](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.IndexPKSKPartsListConfig.md)<`DocKeys`\> |
| `name` | [`DocumentIndexFieldKey`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentindexfieldkey) |
| `relatedTo?` | `string` |
| `relations?` | `ReadonlyArray`<[`DocumentIndexRelation`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentindexrelation)\> |

#### Defined in

[packages/transporter/src/CollectionIndex.ts:47](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L47)

___

### DocumentIndexRelation

Ƭ **DocumentIndexRelation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `name` | `string` |

#### Defined in

[packages/transporter/src/CollectionIndex.ts:56](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L56)

___

### EntityErrorDetails

Ƭ **EntityErrorDetails**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `invalidFields?` | [`InvalidParsedIndexField`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#invalidparsedindexfield)[] |
| `reason` | [`EntityErrorKind`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#entityerrorkind-1) |

#### Defined in

[packages/transporter/src/CollectionErrors.ts:40](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionErrors.ts#L40)

___

### EntityErrorKind

Ƭ **EntityErrorKind**: keyof [`EntityErrorKindEnum`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#entityerrorkindenum)

#### Defined in

[packages/transporter/src/CollectionErrors.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionErrors.ts#L6)

[packages/transporter/src/CollectionErrors.ts:38](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionErrors.ts#L38)

___

### EntityErrorKindEnum

Ƭ **EntityErrorKindEnum**: typeof [`EntityErrorKind`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#entityerrorkind-1)

#### Defined in

[packages/transporter/src/CollectionErrors.ts:37](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionErrors.ts#L37)

___

### EntityFilters

Ƭ **EntityFilters**<`Doc`\>: `Query`<`Doc`\>

#### Type parameters

| Name |
| :------ |
| `Doc` |

#### Defined in

[packages/transporter/src/Transporter.ts:74](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L74)

___

### FilterConditions

Ƭ **FilterConditions**<`Doc`\>: { [K in keyof (AllFilterOperations & RootFilterOperators<Doc\>)]?: (AllFilterOperations & RootFilterOperators<Doc\>)[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |

#### Defined in

[packages/transporter/src/Transporter.ts:68](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L68)

___

### FilterRecord

Ƭ **FilterRecord**<`Doc`\>: [`EntityFilters`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#entityfilters)<`Doc`\> \| { `$and?`: [`RootFilterOperators`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#rootfilteroperators)<`Doc`\>[``"$and"``] ; `$not?`: [`RootFilterOperators`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#rootfilteroperators)<`Doc`\>[``"$not"``] ; `$or?`: [`RootFilterOperators`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#rootfilteroperators)<`Doc`\>[``"$or"``] ; `_id?`: `string` ; `_id1?`: `string` ; `_id2?`: `string` ; `_id3?`: `string` ; `id?`: `string`  } & [`EntityFilters`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#entityfilters)<`Doc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |

#### Defined in

[packages/transporter/src/Transporter.ts:76](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L76)

___

### FindByIdConfig

Ƭ **FindByIdConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext) |
| `id` | `string` |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |

#### Defined in

[packages/transporter/src/Transporter.ts:181](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L181)

___

### FindManyConfig

Ƭ **FindManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`IndexFilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexfilterrecord)<`PK`, `SK`\> extends infer R ? { [K in keyof R]: R[K] } : {} \| `string` |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#methodfilter)<`PK`, `SK`\> |
| `first?` | `number` |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |
| `sort?` | [`QuerySort`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#querysort) |

#### Defined in

[packages/transporter/src/Transporter.ts:139](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L139)

___

### FindManyResult

Ƭ **FindManyResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | `Doc`[] |

#### Defined in

[packages/transporter/src/Transporter.ts:428](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L428)

___

### FindOneConfig

Ƭ **FindOneConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |

#### Defined in

[packages/transporter/src/Transporter.ts:165](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L165)

___

### FindOneResult

Ƭ **FindOneResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `item` | `Doc` \| ``null`` |

#### Defined in

[packages/transporter/src/Transporter.ts:273](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L273)

___

### IndexBasedFilterParsed

Ƭ **IndexBasedFilterParsed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `indexFilter` | [`IndexFilterFound`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexfilterfound) |
| `relationFilters` | [`RelationsFilter`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#relationsfilter)[] \| `undefined` |

#### Defined in

[packages/transporter/src/CollectionIndex.ts:26](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L26)

___

### IndexFilter

Ƭ **IndexFilter**: { [K in keyof AllIndexFilter]?: AllIndexFilter[K] }

#### Defined in

[packages/transporter/src/Transporter.ts:99](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L99)

___

### IndexFilterFound

Ƭ **IndexFilterFound**: { `_id?`: `string`  } & { [L in \`${string}PK\`]: string } & { [L in \`${string}SK\`]?: string \| FilterRecord }

#### Defined in

[packages/transporter/src/CollectionIndex.ts:19](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L19)

___

### IndexFilterRecord

Ƭ **IndexFilterRecord**<`PK`, `SK`\>: { [K in PK]: Partial<AllIndexFilter\> \| PKSKValueType \| undefined } & { [K in SK as SK extends string ? SK : never]?: Partial<AllIndexFilter\> \| PKSKValueType }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Defined in

[packages/transporter/src/Transporter.ts:103](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L103)

___

### IndexKeyHash

Ƭ **IndexKeyHash**<`Keys`\>: \`#${string}\` \| \`.${Extract<Keys, string\>}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Keys` | `string` |

#### Defined in

[packages/transporter/src/CollectionIndex.ts:31](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L31)

___

### IndexPartKind

Ƭ **IndexPartKind**: ``"PK"`` \| ``"SK"``

#### Defined in

[packages/transporter/src/CollectionIndex.ts:35](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L35)

___

### InvalidParsedIndexField

Ƭ **InvalidParsedIndexField**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `details` | `string` |
| `documentField` | `string` |
| `indexField` | [`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anydocindexitem)[``"name"``] |
| `indexPartKind` | [`IndexPartKind`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexpartkind) |
| `reason` | ``"missing"`` \| ``"invalid"`` |

#### Defined in

[packages/transporter/src/CollectionIndex.ts:81](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L81)

___

### LoaderContext

Ƭ **LoaderContext**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `userId?` | (...`args`: `unknown`[]) => `MaybePromise`<`undefined` \| `string`\> |

#### Defined in

[packages/transporter/src/Transporter.ts:119](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L119)

___

### MethodFilter

Ƭ **MethodFilter**<`PK`, `SK`\>: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexfilterrecord)<`PK`, `SK`\> extends infer F ? `F` extends `unknown` ? { [K in keyof F]?: F[K] } & { `id?`: [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#pkskvaluetype)  } : {} : {}\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PK` | extends `string` |
| `SK` | extends `string` \| `undefined` |

#### Defined in

[packages/transporter/src/Transporter.ts:124](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L124)

___

### OneFilterOperation

Ƭ **OneFilterOperation**: { [K in keyof AllFilterOperations]: { [L in K]: AllFilterOperations[K] } }[keyof [`AllFilterOperations`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#allfilteroperations)]

#### Defined in

[packages/transporter/src/Transporter.ts:56](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L56)

___

### PKSKValueType

Ƭ **PKSKValueType**: `string` \| `number` \| ``null``

#### Defined in

[packages/transporter/src/Transporter.ts:38](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L38)

___

### PaginationResult

Ƭ **PaginationResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `edges` | { `cursor`: `string` ; `node`: `Doc`  }[] |
| `pageInfo` | { `endCursor`: `string` \| `undefined` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor`: `string` \| `undefined`  } |
| `pageInfo.endCursor` | `string` \| `undefined` |
| `pageInfo.hasNextPage` | `boolean` |
| `pageInfo.hasPreviousPage` | `boolean` |
| `pageInfo.startCursor` | `string` \| `undefined` |

#### Defined in

[packages/transporter/src/Transporter.ts:432](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L432)

___

### ParsedDocumentIndexes

Ƭ **ParsedDocumentIndexes**: { `error`: ``null`` ; `filtersFound?`: [`DocumentIndexFilterParsed`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentindexfilterparsed)[] ; `firstIndex`: [`FirstIndexParsed`](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.FirstIndexParsed.md) ; `indexFields`: [`CommonIndexFields`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#commonindexfields) ; `invalidFields`: ``null`` ; `parsedIndexKeys`: [`ParsedIndexKey`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexkey)[] ; `valid`: ``true``  } \| { `error`: [`CollectionErrors`](../classes/Transporter___Base_to_connect_any_Database_to_Solarwind_.CollectionErrors.md) ; `firstIndex`: [`FirstIndexParsed`](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.FirstIndexParsed.md) \| ``null`` ; `indexFields`: ``null`` ; `invalidFields`: [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexpart)[``"invalidFields"``] ; `parsedIndexKeys`: [`ParsedIndexKey`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexkey)[] ; `uniqIndexCondition?`: `undefined` ; `valid`: ``false``  }

#### Defined in

[packages/transporter/src/CollectionIndex.ts:136](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L136)

___

### ParsedIndexFilterPart

Ƭ **ParsedIndexFilterPart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PKPartOpen` | `string` |
| `PKPartParsed` | [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexpart) |
| `SKPartParsed` | [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexpart) \| ``null`` |
| `entity` | `string` |
| `index` | [`DocumentIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentindexitem) |
| `indexFilter` | [`IndexFilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexfilterrecord) |

#### Defined in

[packages/transporter/src/parseFilterIndexFilterParts.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/parseFilterIndexFilterParts.ts#L21)

___

### ParsedIndexKey

Ƭ **ParsedIndexKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK` | { `definition`: `Readonly`<[`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anydocindexitem)[``"PK"``]\> ; `destinationField`: { `key`: `string` ; `value`: `string`  } ; `parsed`: [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexpart) ; `requiredFields`: `string`[]  } |
| `PK.definition` | `Readonly`<[`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anydocindexitem)[``"PK"``]\> |
| `PK.destinationField` | { `key`: `string` ; `value`: `string`  } |
| `PK.destinationField.key` | `string` |
| `PK.destinationField.value` | `string` |
| `PK.parsed` | [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexpart) |
| `PK.requiredFields` | `string`[] |
| `SK` | { `definition`: `Readonly`<[`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anydocindexitem)[``"SK"``]\> ; `destinationField`: { `key`: `string` ; `value`: `string`  } ; `parsed`: [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexpart) ; `requiredFields`: `string`[]  } |
| `SK.definition` | `Readonly`<[`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anydocindexitem)[``"SK"``]\> |
| `SK.destinationField` | { `key`: `string` ; `value`: `string`  } |
| `SK.destinationField.key` | `string` |
| `SK.destinationField.value` | `string` |
| `SK.parsed` | [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexpart) |
| `SK.requiredFields` | `string`[] |
| `entity` | `string` |
| `index` | [`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anydocindexitem) |
| `indexFieldsParsed` | [`DocumentIndexFieldsParsed`](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.DocumentIndexFieldsParsed.md) |

#### Defined in

[packages/transporter/src/CollectionIndex.ts:110](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L110)

___

### ParsedIndexPart

Ƭ **ParsedIndexPart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK_SK` | ``"PK"`` \| ``"SK"`` |
| `conditionFound?` | [`OneFilterOperation`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#onefilteroperation) |
| `foundEmptyCondition?` | `boolean` |
| `foundParts` | `string`[] |
| `fullIndexFound` | `string` \| ``null`` |
| `indexField` | [`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anydocindexitem)[``"name"``] |
| `invalidFields` | [`InvalidParsedIndexField`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#invalidparsedindexfield)[] |
| `isFilter` | `boolean` |
| `nullableFound?` | { `value`: ``null`` \| `undefined`  } |
| `nullableFound.value` | ``null`` \| `undefined` |
| `requiredFields` | `string`[] |
| `valid` | `boolean` |

#### Defined in

[packages/transporter/src/CollectionIndex.ts:89](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L89)

___

### ParsedUpdateExpression

Ƭ **ParsedUpdateExpression**<`TSchema`\>: [`UpdateExpression`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateexpression)<`TSchema`\> extends infer UX ? keyof `UX` extends infer OP ? `OP` extends keyof `UX` ? `UX`[`OP`] extends infer V ? { `entries`: [`Join`<`NestedPaths`<`TSchema`\>, ``"."``\>, `V`][] ; `operator`: `OP` ; `valueConstructorName`: `string`  } : `any` : `any` : `any` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | `Record`<`string`, `any`\> |

#### Defined in

[packages/transporter/src/parseUpdateExpression.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/parseUpdateExpression.ts#L6)

___

### QuerySort

Ƭ **QuerySort**: ``"ASC"`` \| ``"DESC"``

#### Defined in

[packages/transporter/src/Transporter.ts:117](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L117)

___

### RelationsFilter

Ƭ **RelationsFilter**: `Object`

#### Index signature

▪ [k: `string`]: { `$startsWith`: \`${string}⊰\`  }

#### Defined in

[packages/transporter/src/CollectionIndex.ts:24](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L24)

___

### RootFilterOperators

Ƭ **RootFilterOperators**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = `Record`<`string`, `any`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$and?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\>[] |
| `$not?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\> |
| `$or?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\>[] |

#### Defined in

[packages/transporter/src/Transporter.ts:60](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L60)

___

### TopLevelFilterKey

Ƭ **TopLevelFilterKey**: typeof [`TopLevelFilterKeys`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#toplevelfilterkeys)[`number`]

#### Defined in

[packages/transporter/src/Transporter.ts:401](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L401)

___

### TransporterFieldType

Ƭ **TransporterFieldType**: typeof [`FieldTypes`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#fieldtypes)[`number`]

#### Defined in

[packages/transporter/src/Transporter.ts:36](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L36)

___

### TransporterLoader

Ƭ **TransporterLoader**: [`TransporterLoadersRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#transporterloadersrecord)[[`TransporterLoaderName`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#transporterloadername)]

#### Defined in

[packages/transporter/src/Transporter.ts:493](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L493)

___

### TransporterLoaderName

Ƭ **TransporterLoaderName**: typeof [`transporterLoaderNames`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#transporterloadernames)[`number`]

#### Defined in

[packages/transporter/src/Transporter.ts:487](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L487)

___

### TransporterLoadersRecord

Ƭ **TransporterLoadersRecord**: { [K in TransporterLoaderName]: Transporter[K] }

#### Defined in

[packages/transporter/src/Transporter.ts:489](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L489)

___

### UpdateExpression

Ƭ **UpdateExpression**<`TSchema`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | `Record`<`string`, `any`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$addToSet?` | [`ArrayOperationRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#arrayoperationrecord)<`TSchema`\> |
| `$append?` | [`ArrayOperationRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#arrayoperationrecord)<`TSchema`\> |
| `$inc?` | `UpdateDefinition`<`TSchema`\>[``"$inc"``] |
| `$prepend?` | [`ArrayOperationRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#arrayoperationrecord)<`TSchema`\> |
| `$pull?` | [`ArrayOperationRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#arrayoperationrecord)<`TSchema`, ``"$in"``\> |
| `$remove?` | `MaybeArray`<\`${Join<NestedPaths<TSchema\>, "."\>}${\`.${string}\` \| ""}\`\> |
| `$set?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |
| `$setIfNull?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |
| `$setOnInsert?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |

#### Defined in

[packages/transporter/src/Transporter.ts:288](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L288)

___

### UpdateExpressionKey

Ƭ **UpdateExpressionKey**: `Extract`<keyof [`UpdateExpression`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateexpression)<`any`\>, `string`\>

#### Defined in

[packages/transporter/src/Transporter.ts:311](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L311)

___

### UpdateManyConfig

Ƭ **UpdateManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `update` | [`UpdateExpression`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateexpression)<`Doc`\> |
| `upsert?` | `boolean` |

#### Defined in

[packages/transporter/src/Transporter.ts:229](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L229)

___

### UpdateManyResult

Ƭ **UpdateManyResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error?` | `string` \| ``null`` |
| `modifiedCount` | `number` \| ``null`` |
| `upsertedId` | `string` \| ``null`` |

#### Defined in

[packages/transporter/src/Transporter.ts:417](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L417)

___

### UpdateOneConfig

Ƭ **UpdateOneConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `update` | [`UpdateExpression`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateexpression)<`Doc`\> |
| `upsert?` | `boolean` |

#### Defined in

[packages/transporter/src/Transporter.ts:213](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L213)

___

### UpdateOneResult

Ƭ **UpdateOneResult**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `created` | `boolean` |
| `error?` | `string` \| ``null`` |
| `item` | `T` \| ``null`` |
| `updated` | `boolean` |

#### Defined in

[packages/transporter/src/Transporter.ts:410](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L410)

## Variables

### AttributeFilterKeys

• `Const` **AttributeFilterKeys**: [``"$eq"``, ``"$ne"``, ``"$lte"``, ``"$lt"``, ``"$gt"``, ``"$gte"``, ``"$between"``, ``"$exists"``, ``"$type"``, ``"$startsWith"``, ``"$contains"``, ``"$matchString"``, ``"$in"``]

#### Defined in

[packages/transporter/src/Transporter.ts:382](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L382)

___

### DEFAULT\_SORT

• `Const` **DEFAULT\_SORT**: ``"ASC"``

#### Defined in

[packages/transporter/src/Transporter.ts:34](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L34)

___

### EntityErrorKind

• `Const` **EntityErrorKind**: { `EMPTY_FILTER`: ``"EMPTY_FILTER"`` ; `INVALID_FIELDS`: ``"INVALID_FIELDS"`` ; `INVALID_FILTER`: ``"INVALID_FILTER"`` ; `INVALID_INDEX_KEY`: ``"INVALID_INDEX_KEY"``  } & {} & {}

#### Defined in

[packages/transporter/src/CollectionErrors.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionErrors.ts#L6)

[packages/transporter/src/CollectionErrors.ts:38](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionErrors.ts#L38)

___

### FieldTypes

• `Const` **FieldTypes**: [``"String"``, ``"Number"``, ``"Binary"``, ``"Boolean"``, ``"Null"``, ``"List"``, ``"Map"``, ``"StringSet"``, ``"NumberSet"``]

#### Defined in

[packages/transporter/src/Transporter.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L22)

___

### FilterConditionsParsers

• `Const` **FilterConditionsParsers**: { [K in keyof FilterConditions]-?: Function }

#### Defined in

[packages/transporter/src/Transporter.ts:313](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L313)

___

### TopLevelFilterKeys

• `Const` **TopLevelFilterKeys**: [``"$not"``, ``"$or"``, ``"$and"``]

#### Defined in

[packages/transporter/src/Transporter.ts:400](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L400)

___

### indexConfigSchema

• `Const` **indexConfigSchema**: `ObjectType`<`Object`, `Object`\>

#### Defined in

[packages/transporter/src/CollectionIndex.ts:177](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L177)

___

### indexItemSchema

• `Const` **indexItemSchema**: `ObjectType`<`Object`, `Object`\>

#### Defined in

[packages/transporter/src/CollectionIndex.ts:169](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L169)

___

### relationSchema

• `Const` **relationSchema**: `ObjectType`<`Object`, `Object`\>

#### Defined in

[packages/transporter/src/CollectionIndex.ts:164](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L164)

___

### transporterLoaderNames

• `Const` **transporterLoaderNames**: [``"createOne"``, ``"findById"``, ``"findMany"``, ``"findOne"``, ``"updateOne"``, ``"updateMany"``, ``"deleteOne"``, ``"deleteMany"``, ``"paginate"``]

#### Defined in

[packages/transporter/src/Transporter.ts:475](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L475)

## Functions

### \_ensureTransporterMethodsImplementation

▸ **_ensureTransporterMethodsImplementation**<`T`\>(`ops`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ops` | `T` |

#### Returns

`T`

#### Defined in

[packages/transporter/src/Transporter.ts:495](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L495)

___

### assertFieldFilter

▸ **assertFieldFilter**(`input`, `message?`): asserts input is FilterRecord<DocumentBase\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `message?` | `string` |

#### Returns

asserts input is FilterRecord<DocumentBase\>

#### Defined in

[packages/transporter/src/Transporter.ts:504](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L504)

___

### createAggioIndexBasedFilters

▸ **createAggioIndexBasedFilters**(`options`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.filter` | [`IndexFilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexfilterrecord)<`string`, `string`\> |
| `options.indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anycollectionindexconfig) |

#### Returns

`Query`<`any`\>[]

#### Defined in

[packages/transporter/src/parseAggioAttributeFilters.ts:19](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/parseAggioAttributeFilters.ts#L19)

___

### createDocumentIndexBasedFilters

▸ **createDocumentIndexBasedFilters**(`filter`, `indexConfig`): [`IndexBasedFilterParsed`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexbasedfilterparsed)

Receives a document indexConfig and a key-value filter and converts to
an index based search filter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`IndexFilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexfilterrecord)<`string`, `string`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anycollectionindexconfig) |

#### Returns

[`IndexBasedFilterParsed`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexbasedfilterparsed)

#### Defined in

[packages/transporter/src/createDocumentIndexBasedFilters.ts:24](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/createDocumentIndexBasedFilters.ts#L24)

___

### encodeIndexValue

▸ **encodeIndexValue**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[packages/transporter/src/encodeIndexValue.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/encodeIndexValue.ts#L3)

___

### getDocumentIndexFields

▸ **getDocumentIndexFields**<`Document`\>(`doc`, `indexConfig`): [`ParsedDocumentIndexes`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parseddocumentindexes)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Document` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Document` |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anycollectionindexconfig) |

#### Returns

[`ParsedDocumentIndexes`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parseddocumentindexes)

#### Defined in

[packages/transporter/src/getDocumentIndexFields.ts:16](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/getDocumentIndexFields.ts#L16)

___

### getParsedIndexKeys

▸ **getParsedIndexKeys**(`indexConfig`): [`ParsedIndexKey`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexkey)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anycollectionindexconfig) |

#### Returns

[`ParsedIndexKey`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexkey)[]

#### Defined in

[packages/transporter/src/createDocumentIndexBasedFilters.ts:76](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/createDocumentIndexBasedFilters.ts#L76)

___

### isFilterConditionKey

▸ **isFilterConditionKey**(`input`): input is keyof AllFilterOperations \| keyof RootFilterOperators<Doc\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |

#### Returns

input is keyof AllFilterOperations \| keyof RootFilterOperators<Doc\>

#### Defined in

[packages/transporter/src/Transporter.ts:522](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/Transporter.ts#L522)

___

### mergeIndexRelationsResult

▸ **mergeIndexRelationsResult**(`input`): [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anycollectionindexconfig) |
| `input.items` | [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)[] |

#### Returns

[`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)[]

#### Defined in

[packages/transporter/src/mergeIndexRelationsResult.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/mergeIndexRelationsResult.ts#L14)

___

### parseAggioAttributeFilters

▸ **parseAggioAttributeFilters**(`attFilter`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `attFilter` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#filterrecord)<[`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#documentbase)\> |

#### Returns

`Query`<`any`\>[]

#### Defined in

[packages/transporter/src/parseAggioAttributeFilters.ts:41](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/parseAggioAttributeFilters.ts#L41)

___

### parseAggioUpdateExpression

▸ **parseAggioUpdateExpression**(`operations`): `UpdateDefinition`<`any`\> \| `UpdateDefinition`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `operations` | ({ `entries`: [`string`, `undefined` \| `Record`<`string`, `undefined` \| `number`\>][] ; `operator`: ``"$inc"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$set"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$addToSet"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$append"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$prepend"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$pull"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `MaybeArray`<`string`\>][] ; `operator`: ``"$remove"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$setIfNull"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$setOnInsert"`` ; `valueConstructorName`: `string`  })[] |

#### Returns

`UpdateDefinition`<`any`\> \| `UpdateDefinition`<`any`\>[]

#### Defined in

[packages/transporter/src/parseAggioUpdateExpression.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/parseAggioUpdateExpression.ts#L6)

___

### parseCollectionIndexConfig

▸ **parseCollectionIndexConfig**<`T`\>(`indexConfig`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anycollectionindexconfig) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | `T` |

#### Returns

`T`

#### Defined in

[packages/transporter/src/CollectionIndex.ts:187](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L187)

___

### parseEntityIndexFields

▸ **parseEntityIndexFields**(`indexConfig`): `ObjectDefinitionInput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anycollectionindexconfig) |

#### Returns

`ObjectDefinitionInput`

#### Defined in

[packages/transporter/src/parseEntityIndexFields.ts:10](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/parseEntityIndexFields.ts#L10)

___

### parseFilterIndexFilterParts

▸ **parseFilterIndexFilterParts**(`filter`, `indexConfig`): { `isFinalParsedSearch`: ``false`` ; `parts`: [`ParsedIndexFilterPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexfilterpart)[]  } \| { `cursor`: `ParsedIndexCursor` ; `isFinalParsedSearch`: ``true``  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Record`<`string`, `any`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anycollectionindexconfig) |

#### Returns

{ `isFinalParsedSearch`: ``false`` ; `parts`: [`ParsedIndexFilterPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexfilterpart)[]  } \| { `cursor`: `ParsedIndexCursor` ; `isFinalParsedSearch`: ``true``  }

#### Defined in

[packages/transporter/src/parseFilterIndexFilterParts.ts:30](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/parseFilterIndexFilterParts.ts#L30)

___

### parseOneIndexDocumentFields

▸ **parseOneIndexDocumentFields**(`parsedIndex`): [`DocumentIndexFieldsParsed`](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.DocumentIndexFieldsParsed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsedIndex` | `ParsedIndexCursor` |

#### Returns

[`DocumentIndexFieldsParsed`](../interfaces/Transporter___Base_to_connect_any_Database_to_Solarwind_.DocumentIndexFieldsParsed.md)

#### Defined in

[packages/transporter/src/CollectionIndex.ts:253](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L253)

___

### parseUpdateExpression

▸ **parseUpdateExpression**<`Schema`\>(`updateExpression`, `indexConfig`): [`ParsedUpdateExpression`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedupdateexpression)<`Schema`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateExpression` | [`UpdateExpression`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#updateexpression)<`Schema`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#anycollectionindexconfig) |

#### Returns

[`ParsedUpdateExpression`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedupdateexpression)<`Schema`\>[]

#### Defined in

[packages/transporter/src/parseUpdateExpression.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/parseUpdateExpression.ts#L21)

___

### pickIndexKeyPartsFromDocument

▸ **pickIndexKeyPartsFromDocument**(`param`): [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexpart)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.acceptNullable` | `boolean` |
| `param.destination` | ``"filter"`` \| ``"document"`` |
| `param.doc` | `Record`<`string`, `any`\> |
| `param.indexField` | `string` |
| `param.indexPartKind` | [`IndexPartKind`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexpartkind) |
| `param.indexParts` | readonly [`IndexKeyHash`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#indexkeyhash)<`string`\>[] |

#### Returns

[`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Solarwind_.md#parsedindexpart)

#### Defined in

[packages/transporter/src/pickIndexKeyPartsFromDocument.ts:16](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/pickIndexKeyPartsFromDocument.ts#L16)
