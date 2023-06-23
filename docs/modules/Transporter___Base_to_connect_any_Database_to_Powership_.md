[Powership](../README.md) / [Modules](../modules.md) / Transporter - Base to connect any Database to Powership.

# Module: Transporter - Base to connect any Database to Powership.

## Table of contents

### Classes

- [CollectionErrors](../classes/Transporter___Base_to_connect_any_Database_to_Powership_.CollectionErrors.md)

### Interfaces

- [CreateOne](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.CreateOne.md)
- [DeleteMany](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.DeleteMany.md)
- [DeleteOne](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.DeleteOne.md)
- [DocumentIndexFieldsParsed](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.DocumentIndexFieldsParsed.md)
- [DocumentIndexesConfig](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.DocumentIndexesConfig.md)
- [FindById](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.FindById.md)
- [FindMany](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.FindMany.md)
- [FindOne](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.FindOne.md)
- [FirstIndexParsed](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md)
- [IndexMethods](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.IndexMethods.md)
- [IndexPKSKPartsListConfig](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.IndexPKSKPartsListConfig.md)
- [Paginate](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.Paginate.md)
- [Transporter](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.Transporter.md)
- [UpdateMany](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.UpdateMany.md)
- [UpdateOne](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.UpdateOne.md)

### Type Aliases

- [AllFilterOperations](Transporter___Base_to_connect_any_Database_to_Powership_.md#allfilteroperations)
- [AllIndexFilter](Transporter___Base_to_connect_any_Database_to_Powership_.md#allindexfilter)
- [AnyCollectionIndexConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#anycollectionindexconfig)
- [AnyDocIndexItem](Transporter___Base_to_connect_any_Database_to_Powership_.md#anydocindexitem)
- [ArrayOperationRecord](Transporter___Base_to_connect_any_Database_to_Powership_.md#arrayoperationrecord)
- [AttributeFilterKey](Transporter___Base_to_connect_any_Database_to_Powership_.md#attributefilterkey)
- [CollectionConfigIndexes](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionconfigindexes)
- [CollectionIndexConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionindexconfig)
- [CommonIndexFields](Transporter___Base_to_connect_any_Database_to_Powership_.md#commonindexfields)
- [CreateOneConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#createoneconfig)
- [CreateOneResult](Transporter___Base_to_connect_any_Database_to_Powership_.md#createoneresult)
- [DeleteManyConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#deletemanyconfig)
- [DeleteManyResult](Transporter___Base_to_connect_any_Database_to_Powership_.md#deletemanyresult)
- [DeleteOneConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#deleteoneconfig)
- [DeleteOneResult](Transporter___Base_to_connect_any_Database_to_Powership_.md#deleteoneresult)
- [DocumentBase](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)
- [DocumentIndexFieldKey](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexfieldkey)
- [DocumentIndexFilterParsed](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexfilterparsed)
- [DocumentIndexItem](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexitem)
- [DocumentIndexRelation](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexrelation)
- [EntityErrorDetails](Transporter___Base_to_connect_any_Database_to_Powership_.md#entityerrordetails)
- [EntityErrorKind](Transporter___Base_to_connect_any_Database_to_Powership_.md#entityerrorkind)
- [EntityErrorKindEnum](Transporter___Base_to_connect_any_Database_to_Powership_.md#entityerrorkindenum)
- [EntityFilters](Transporter___Base_to_connect_any_Database_to_Powership_.md#entityfilters)
- [FilterConditions](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterconditions)
- [FilterRecord](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)
- [FindByIdConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#findbyidconfig)
- [FindManyConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#findmanyconfig)
- [FindManyResult](Transporter___Base_to_connect_any_Database_to_Powership_.md#findmanyresult)
- [FindOneConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#findoneconfig)
- [FindOneResult](Transporter___Base_to_connect_any_Database_to_Powership_.md#findoneresult)
- [IndexBasedFilterParsed](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexbasedfilterparsed)
- [IndexFilter](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexfilter)
- [IndexFilterFound](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexfilterfound)
- [IndexFilterRecord](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexfilterrecord)
- [IndexKeyHash](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexkeyhash)
- [IndexPartKind](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexpartkind)
- [InvalidParsedIndexField](Transporter___Base_to_connect_any_Database_to_Powership_.md#invalidparsedindexfield)
- [LoaderContext](Transporter___Base_to_connect_any_Database_to_Powership_.md#loadercontext)
- [MethodFilter](Transporter___Base_to_connect_any_Database_to_Powership_.md#methodfilter)
- [OneFilterOperation](Transporter___Base_to_connect_any_Database_to_Powership_.md#onefilteroperation)
- [PKSKValueType](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype)
- [PaginationResult](Transporter___Base_to_connect_any_Database_to_Powership_.md#paginationresult)
- [ParsedDocumentIndexes](Transporter___Base_to_connect_any_Database_to_Powership_.md#parseddocumentindexes)
- [ParsedIndexFilterPart](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexfilterpart)
- [ParsedIndexKey](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexkey)
- [ParsedIndexPart](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexpart)
- [ParsedUpdateExpression](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedupdateexpression)
- [QuerySort](Transporter___Base_to_connect_any_Database_to_Powership_.md#querysort)
- [RelationsFilter](Transporter___Base_to_connect_any_Database_to_Powership_.md#relationsfilter)
- [RootFilterOperators](Transporter___Base_to_connect_any_Database_to_Powership_.md#rootfilteroperators)
- [TopLevelFilterKey](Transporter___Base_to_connect_any_Database_to_Powership_.md#toplevelfilterkey)
- [TransporterFieldType](Transporter___Base_to_connect_any_Database_to_Powership_.md#transporterfieldtype)
- [TransporterLoader](Transporter___Base_to_connect_any_Database_to_Powership_.md#transporterloader)
- [TransporterLoaderName](Transporter___Base_to_connect_any_Database_to_Powership_.md#transporterloadername)
- [TransporterLoadersRecord](Transporter___Base_to_connect_any_Database_to_Powership_.md#transporterloadersrecord)
- [UpdateExpression](Transporter___Base_to_connect_any_Database_to_Powership_.md#updateexpression)
- [UpdateExpressionKey](Transporter___Base_to_connect_any_Database_to_Powership_.md#updateexpressionkey)
- [UpdateManyConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#updatemanyconfig)
- [UpdateManyResult](Transporter___Base_to_connect_any_Database_to_Powership_.md#updatemanyresult)
- [UpdateOneConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#updateoneconfig)
- [UpdateOneResult](Transporter___Base_to_connect_any_Database_to_Powership_.md#updateoneresult)

### Variables

- [AttributeFilterKeys](Transporter___Base_to_connect_any_Database_to_Powership_.md#attributefilterkeys)
- [DEFAULT\_SORT](Transporter___Base_to_connect_any_Database_to_Powership_.md#default_sort)
- [EntityErrorKind](Transporter___Base_to_connect_any_Database_to_Powership_.md#entityerrorkind-1)
- [FieldTypes](Transporter___Base_to_connect_any_Database_to_Powership_.md#fieldtypes)
- [FilterConditionsParsers](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterconditionsparsers)
- [TopLevelFilterKeys](Transporter___Base_to_connect_any_Database_to_Powership_.md#toplevelfilterkeys)
- [indexConfigSchema](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexconfigschema)
- [indexItemSchema](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexitemschema)
- [relationSchema](Transporter___Base_to_connect_any_Database_to_Powership_.md#relationschema)
- [transporterLoaderNames](Transporter___Base_to_connect_any_Database_to_Powership_.md#transporterloadernames)

### Functions

- [\_ensureTransporterMethodsImplementation](Transporter___Base_to_connect_any_Database_to_Powership_.md#_ensuretransportermethodsimplementation)
- [assertFieldFilter](Transporter___Base_to_connect_any_Database_to_Powership_.md#assertfieldfilter)
- [createAggioIndexBasedFilters](Transporter___Base_to_connect_any_Database_to_Powership_.md#createaggioindexbasedfilters)
- [createDocumentIndexBasedFilters](Transporter___Base_to_connect_any_Database_to_Powership_.md#createdocumentindexbasedfilters)
- [encodeIndexValue](Transporter___Base_to_connect_any_Database_to_Powership_.md#encodeindexvalue)
- [getDocumentIndexFields](Transporter___Base_to_connect_any_Database_to_Powership_.md#getdocumentindexfields)
- [getParsedIndexKeys](Transporter___Base_to_connect_any_Database_to_Powership_.md#getparsedindexkeys)
- [isFilterConditionKey](Transporter___Base_to_connect_any_Database_to_Powership_.md#isfilterconditionkey)
- [mergeIndexRelationsResult](Transporter___Base_to_connect_any_Database_to_Powership_.md#mergeindexrelationsresult)
- [parseAggioAttributeFilters](Transporter___Base_to_connect_any_Database_to_Powership_.md#parseaggioattributefilters)
- [parseAggioUpdateExpression](Transporter___Base_to_connect_any_Database_to_Powership_.md#parseaggioupdateexpression)
- [parseCollectionIndexConfig](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsecollectionindexconfig)
- [parseEntityIndexFields](Transporter___Base_to_connect_any_Database_to_Powership_.md#parseentityindexfields)
- [parseFilterIndexFilterParts](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsefilterindexfilterparts)
- [parseOneIndexDocumentFields](Transporter___Base_to_connect_any_Database_to_Powership_.md#parseoneindexdocumentfields)
- [parseUpdateExpression](Transporter___Base_to_connect_any_Database_to_Powership_.md#parseupdateexpression)
- [pickIndexKeyPartsFromDocument](Transporter___Base_to_connect_any_Database_to_Powership_.md#pickindexkeypartsfromdocument)

## Type Aliases

### AllFilterOperations

Ƭ **AllFilterOperations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$between` | [`string`, `string`] \| [`number`, `number`] |
| `$contains` | `string` \| `number` \| `boolean` \| ``null`` |
| `$eq` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) \| `boolean` |
| `$exists` | `boolean` |
| `$gt` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) |
| `$gte` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) |
| `$in` | `unknown`[] |
| `$lt` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) |
| `$lte` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) |
| `$matchString` | `string` |
| `$ne` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) \| `boolean` |
| `$startsWith` | `string` |
| `$type` | [`TransporterFieldType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#transporterfieldtype) |

#### Defined in

packages/transporter/src/Transporter.ts:40

___

### AllIndexFilter

Ƭ **AllIndexFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$between` | [`string`, `string`] \| [`number`, `number`] |
| `$eq` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) |
| `$gt` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) |
| `$gte` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) |
| `$lt` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) |
| `$lte` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) |
| `$startsWith` | [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype) |

#### Defined in

packages/transporter/src/Transporter.ts:89

___

### AnyCollectionIndexConfig

Ƭ **AnyCollectionIndexConfig**: [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionindexconfig)<[`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase), `string`\>

#### Defined in

packages/transporter/src/CollectionIndex.ts:76

___

### AnyDocIndexItem

Ƭ **AnyDocIndexItem**: [`DocumentIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexitem)

#### Defined in

packages/transporter/src/CollectionIndex.ts:61

___

### ArrayOperationRecord

Ƭ **ArrayOperationRecord**<`TSchema`, `KV`\>: `MatchKeysAndValues`<`TSchema`\> extends infer All ? { [K in keyof All as [NonNullable<All[K]\>] extends [any[]] ? K : never]?: Cast<NonNullable<All[K]\>, any[]\>[number] \| { [Kv in KV]?: Cast<NonNullable<All[K]\>, any[]\>[number][] } } : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | `TSchema` |
| `KV` | extends `string` = ``"$each"`` |

#### Defined in

packages/transporter/src/Transporter.ts:277

___

### AttributeFilterKey

Ƭ **AttributeFilterKey**: typeof [`AttributeFilterKeys`](Transporter___Base_to_connect_any_Database_to_Powership_.md#attributefilterkeys)[`number`]

#### Defined in

packages/transporter/src/Transporter.ts:398

___

### CollectionConfigIndexes

Ƭ **CollectionConfigIndexes**<`Doc`, `K`\>: `ReadonlyArray`<[`DocumentIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexitem)<`K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `K` | extends `string` = `Extract`<keyof `Doc`, `string`\> |

#### Defined in

packages/transporter/src/CollectionIndex.ts:63

___

### CollectionIndexConfig

Ƭ **CollectionIndexConfig**<`Doc`, `EntityName`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `EntityName` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `Readonly`<`EntityName`\> |
| `indexes` | [`CollectionConfigIndexes`](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionconfigindexes)<`Doc`\> |

#### Defined in

packages/transporter/src/CollectionIndex.ts:68

___

### CommonIndexFields

Ƭ **CommonIndexFields**: { `_c`: `string` ; `_e`: `string` ; `_id`: `string` ; `_rpk?`: `string`[]  } & { [L in \`${string}PK\`]: string } & { [L in \`${string}SK\`]: string }

#### Defined in

packages/transporter/src/CollectionIndex.ts:236

___

### CreateOneConfig

Ƭ **CreateOneConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.md#loadercontext) |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `item` | `Doc` |
| `replace?` | `boolean` |

#### Defined in

packages/transporter/src/Transporter.ts:197

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

packages/transporter/src/Transporter.ts:403

___

### DeleteManyConfig

Ƭ **DeleteManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Powership_.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |

#### Defined in

packages/transporter/src/Transporter.ts:245

___

### DeleteManyResult

Ƭ **DeleteManyResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deletedCount` | `number` |
| `error?` | `string` \| ``null`` |

#### Defined in

packages/transporter/src/Transporter.ts:423

___

### DeleteOneConfig

Ƭ **DeleteOneConfig**<`Item`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Item` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Item`\> |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Powership_.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionindexconfig)<`Item`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |

#### Defined in

packages/transporter/src/Transporter.ts:259

___

### DeleteOneResult

Ƭ **DeleteOneResult**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `item` | `T` \| ``null`` |

#### Defined in

packages/transporter/src/Transporter.ts:445

___

### DocumentBase

Ƭ **DocumentBase**: `Record`<`string`, `any`\>

#### Defined in

packages/transporter/src/Transporter.ts:115

___

### DocumentIndexFieldKey

Ƭ **DocumentIndexFieldKey**: `string`

#### Defined in

packages/transporter/src/CollectionIndex.ts:37

___

### DocumentIndexFilterParsed

Ƭ **DocumentIndexFilterParsed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK` | [`FilterConditions`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterconditions) \| `string` |
| `SK` | [`FilterConditions`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterconditions) \| `string` |
| `entity` | `string` |
| `key` | [`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anydocindexitem)[``"name"``] |

#### Defined in

packages/transporter/src/CollectionIndex.ts:103

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
| `PK` | [`IndexPKSKPartsListConfig`](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.IndexPKSKPartsListConfig.md)<`DocKeys`\> |
| `SK?` | [`IndexPKSKPartsListConfig`](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.IndexPKSKPartsListConfig.md)<`DocKeys`\> |
| `name` | [`DocumentIndexFieldKey`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexfieldkey) |
| `relatedTo?` | `string` |
| `relations?` | `ReadonlyArray`<[`DocumentIndexRelation`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexrelation)\> |

#### Defined in

packages/transporter/src/CollectionIndex.ts:47

___

### DocumentIndexRelation

Ƭ **DocumentIndexRelation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `name` | `string` |

#### Defined in

packages/transporter/src/CollectionIndex.ts:56

___

### EntityErrorDetails

Ƭ **EntityErrorDetails**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `invalidFields?` | [`InvalidParsedIndexField`](Transporter___Base_to_connect_any_Database_to_Powership_.md#invalidparsedindexfield)[] |
| `reason` | [`EntityErrorKind`](Transporter___Base_to_connect_any_Database_to_Powership_.md#entityerrorkind-1) |

#### Defined in

packages/transporter/src/CollectionErrors.ts:40

___

### EntityErrorKind

Ƭ **EntityErrorKind**: keyof [`EntityErrorKindEnum`](Transporter___Base_to_connect_any_Database_to_Powership_.md#entityerrorkindenum)

#### Defined in

packages/transporter/src/CollectionErrors.ts:6

packages/transporter/src/CollectionErrors.ts:38

___

### EntityErrorKindEnum

Ƭ **EntityErrorKindEnum**: typeof [`EntityErrorKind`](Transporter___Base_to_connect_any_Database_to_Powership_.md#entityerrorkind-1)

#### Defined in

packages/transporter/src/CollectionErrors.ts:37

___

### EntityFilters

Ƭ **EntityFilters**<`Doc`\>: `Query`<`Doc`\>

#### Type parameters

| Name |
| :------ |
| `Doc` |

#### Defined in

packages/transporter/src/Transporter.ts:74

___

### FilterConditions

Ƭ **FilterConditions**<`Doc`\>: { [K in keyof (AllFilterOperations & RootFilterOperators<Doc\>)]?: (AllFilterOperations & RootFilterOperators<Doc\>)[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |

#### Defined in

packages/transporter/src/Transporter.ts:68

___

### FilterRecord

Ƭ **FilterRecord**<`Doc`\>: [`EntityFilters`](Transporter___Base_to_connect_any_Database_to_Powership_.md#entityfilters)<`Doc`\> \| { `$and?`: [`RootFilterOperators`](Transporter___Base_to_connect_any_Database_to_Powership_.md#rootfilteroperators)<`Doc`\>[``"$and"``] ; `$not?`: [`RootFilterOperators`](Transporter___Base_to_connect_any_Database_to_Powership_.md#rootfilteroperators)<`Doc`\>[``"$not"``] ; `$or?`: [`RootFilterOperators`](Transporter___Base_to_connect_any_Database_to_Powership_.md#rootfilteroperators)<`Doc`\>[``"$or"``] ; `_id?`: `string` ; `_id1?`: `string` ; `_id2?`: `string` ; `_id3?`: `string` ; `id?`: `string`  } & [`EntityFilters`](Transporter___Base_to_connect_any_Database_to_Powership_.md#entityfilters)<`Doc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |

#### Defined in

packages/transporter/src/Transporter.ts:76

___

### FindByIdConfig

Ƭ **FindByIdConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.md#loadercontext) |
| `id` | `string` |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |

#### Defined in

packages/transporter/src/Transporter.ts:181

___

### FindManyConfig

Ƭ **FindManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`IndexFilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexfilterrecord)<`PK`, `SK`\> extends infer R ? { [K in keyof R]: R[K] } : {} \| `string` |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Powership_.md#methodfilter)<`PK`, `SK`\> |
| `first?` | `number` |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |
| `sort?` | [`QuerySort`](Transporter___Base_to_connect_any_Database_to_Powership_.md#querysort) |

#### Defined in

packages/transporter/src/Transporter.ts:139

___

### FindManyResult

Ƭ **FindManyResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | `Doc`[] |

#### Defined in

packages/transporter/src/Transporter.ts:428

___

### FindOneConfig

Ƭ **FindOneConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Powership_.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |

#### Defined in

packages/transporter/src/Transporter.ts:165

___

### FindOneResult

Ƭ **FindOneResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `item` | `Doc` \| ``null`` |

#### Defined in

packages/transporter/src/Transporter.ts:273

___

### IndexBasedFilterParsed

Ƭ **IndexBasedFilterParsed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `indexFilter` | [`IndexFilterFound`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexfilterfound) |
| `relationFilters` | [`RelationsFilter`](Transporter___Base_to_connect_any_Database_to_Powership_.md#relationsfilter)[] \| `undefined` |

#### Defined in

packages/transporter/src/CollectionIndex.ts:26

___

### IndexFilter

Ƭ **IndexFilter**: { [K in keyof AllIndexFilter]?: AllIndexFilter[K] }

#### Defined in

packages/transporter/src/Transporter.ts:99

___

### IndexFilterFound

Ƭ **IndexFilterFound**: { `_id?`: `string`  } & { [L in \`${string}PK\`]: string } & { [L in \`${string}SK\`]?: string \| FilterRecord }

#### Defined in

packages/transporter/src/CollectionIndex.ts:19

___

### IndexFilterRecord

Ƭ **IndexFilterRecord**<`PK`, `SK`\>: { [K in PK]: Partial<AllIndexFilter\> \| PKSKValueType \| undefined } & { [K in SK as SK extends string ? SK : never]?: Partial<AllIndexFilter\> \| PKSKValueType }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Defined in

packages/transporter/src/Transporter.ts:103

___

### IndexKeyHash

Ƭ **IndexKeyHash**<`Keys`\>: \`#${string}\` \| \`.${Extract<Keys, string\>}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Keys` | `string` |

#### Defined in

packages/transporter/src/CollectionIndex.ts:31

___

### IndexPartKind

Ƭ **IndexPartKind**: ``"PK"`` \| ``"SK"``

#### Defined in

packages/transporter/src/CollectionIndex.ts:35

___

### InvalidParsedIndexField

Ƭ **InvalidParsedIndexField**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `details` | `string` |
| `documentField` | `string` |
| `indexField` | [`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anydocindexitem)[``"name"``] |
| `indexPartKind` | [`IndexPartKind`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexpartkind) |
| `reason` | ``"missing"`` \| ``"invalid"`` |

#### Defined in

packages/transporter/src/CollectionIndex.ts:81

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

packages/transporter/src/Transporter.ts:119

___

### MethodFilter

Ƭ **MethodFilter**<`PK`, `SK`\>: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexfilterrecord)<`PK`, `SK`\> extends infer F ? `F` extends `unknown` ? { [K in keyof F]?: F[K] } & { `id?`: [`PKSKValueType`](Transporter___Base_to_connect_any_Database_to_Powership_.md#pkskvaluetype)  } : {} : {}\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PK` | extends `string` |
| `SK` | extends `string` \| `undefined` |

#### Defined in

packages/transporter/src/Transporter.ts:124

___

### OneFilterOperation

Ƭ **OneFilterOperation**: { [K in keyof AllFilterOperations]: { [L in K]: AllFilterOperations[K] } }[keyof [`AllFilterOperations`](Transporter___Base_to_connect_any_Database_to_Powership_.md#allfilteroperations)]

#### Defined in

packages/transporter/src/Transporter.ts:56

___

### PKSKValueType

Ƭ **PKSKValueType**: `string` \| `number` \| ``null``

#### Defined in

packages/transporter/src/Transporter.ts:38

___

### PaginationResult

Ƭ **PaginationResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |

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

packages/transporter/src/Transporter.ts:432

___

### ParsedDocumentIndexes

Ƭ **ParsedDocumentIndexes**: { `error`: ``null`` ; `filtersFound?`: [`DocumentIndexFilterParsed`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexfilterparsed)[] ; `firstIndex`: [`FirstIndexParsed`](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md) ; `indexFields`: [`CommonIndexFields`](Transporter___Base_to_connect_any_Database_to_Powership_.md#commonindexfields) ; `invalidFields`: ``null`` ; `parsedIndexKeys`: [`ParsedIndexKey`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexkey)[] ; `valid`: ``true``  } \| { `error`: [`CollectionErrors`](../classes/Transporter___Base_to_connect_any_Database_to_Powership_.CollectionErrors.md) ; `firstIndex`: [`FirstIndexParsed`](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md) \| ``null`` ; `indexFields`: ``null`` ; `invalidFields`: [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexpart)[``"invalidFields"``] ; `parsedIndexKeys`: [`ParsedIndexKey`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexkey)[] ; `uniqIndexCondition?`: `undefined` ; `valid`: ``false``  }

#### Defined in

packages/transporter/src/CollectionIndex.ts:136

___

### ParsedIndexFilterPart

Ƭ **ParsedIndexFilterPart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PKPartOpen` | `string` |
| `PKPartParsed` | [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexpart) |
| `SKPartParsed` | [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexpart) \| ``null`` |
| `entity` | `string` |
| `index` | [`DocumentIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexitem) |
| `indexFilter` | [`IndexFilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexfilterrecord) |

#### Defined in

packages/transporter/src/parseFilterIndexFilterParts.ts:21

___

### ParsedIndexKey

Ƭ **ParsedIndexKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK` | { `definition`: `Readonly`<[`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anydocindexitem)[``"PK"``]\> ; `destinationField`: { `key`: `string` ; `value`: `string`  } ; `parsed`: [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexpart) ; `requiredFields`: `string`[]  } |
| `PK.definition` | `Readonly`<[`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anydocindexitem)[``"PK"``]\> |
| `PK.destinationField` | { `key`: `string` ; `value`: `string`  } |
| `PK.destinationField.key` | `string` |
| `PK.destinationField.value` | `string` |
| `PK.parsed` | [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexpart) |
| `PK.requiredFields` | `string`[] |
| `SK` | { `definition`: `Readonly`<[`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anydocindexitem)[``"SK"``]\> ; `destinationField`: { `key`: `string` ; `value`: `string`  } ; `parsed`: [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexpart) ; `requiredFields`: `string`[]  } |
| `SK.definition` | `Readonly`<[`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anydocindexitem)[``"SK"``]\> |
| `SK.destinationField` | { `key`: `string` ; `value`: `string`  } |
| `SK.destinationField.key` | `string` |
| `SK.destinationField.value` | `string` |
| `SK.parsed` | [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexpart) |
| `SK.requiredFields` | `string`[] |
| `entity` | `string` |
| `index` | [`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anydocindexitem) |
| `indexFieldsParsed` | [`DocumentIndexFieldsParsed`](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.DocumentIndexFieldsParsed.md) |

#### Defined in

packages/transporter/src/CollectionIndex.ts:110

___

### ParsedIndexPart

Ƭ **ParsedIndexPart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK_SK` | ``"PK"`` \| ``"SK"`` |
| `conditionFound?` | [`OneFilterOperation`](Transporter___Base_to_connect_any_Database_to_Powership_.md#onefilteroperation) |
| `foundEmptyCondition?` | `boolean` |
| `foundParts` | `string`[] |
| `fullIndexFound` | `string` \| ``null`` |
| `indexField` | [`AnyDocIndexItem`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anydocindexitem)[``"name"``] |
| `invalidFields` | [`InvalidParsedIndexField`](Transporter___Base_to_connect_any_Database_to_Powership_.md#invalidparsedindexfield)[] |
| `isFilter` | `boolean` |
| `nullableFound?` | { `value`: ``null`` \| `undefined`  } |
| `nullableFound.value` | ``null`` \| `undefined` |
| `requiredFields` | `string`[] |
| `valid` | `boolean` |

#### Defined in

packages/transporter/src/CollectionIndex.ts:89

___

### ParsedUpdateExpression

Ƭ **ParsedUpdateExpression**<`TSchema`\>: [`UpdateExpression`](Transporter___Base_to_connect_any_Database_to_Powership_.md#updateexpression)<`TSchema`\> extends infer UX ? keyof `UX` extends infer OP ? `OP` extends keyof `UX` ? `UX`[`OP`] extends infer V ? { `entries`: [`Join`<`NestedPaths`<`TSchema`\>, ``"."``\>, `V`][] ; `operator`: `OP` ; `valueConstructorName`: `string`  } : `any` : `any` : `any` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | `Record`<`string`, `any`\> |

#### Defined in

packages/transporter/src/parseUpdateExpression.ts:6

___

### QuerySort

Ƭ **QuerySort**: ``"ASC"`` \| ``"DESC"``

#### Defined in

packages/transporter/src/Transporter.ts:117

___

### RelationsFilter

Ƭ **RelationsFilter**: `Object`

#### Index signature

▪ [k: `string`]: { `$startsWith`: \`${string}⊰\`  }

#### Defined in

packages/transporter/src/CollectionIndex.ts:24

___

### RootFilterOperators

Ƭ **RootFilterOperators**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = `Record`<`string`, `any`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$and?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\>[] |
| `$not?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\> |
| `$or?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\>[] |

#### Defined in

packages/transporter/src/Transporter.ts:60

___

### TopLevelFilterKey

Ƭ **TopLevelFilterKey**: typeof [`TopLevelFilterKeys`](Transporter___Base_to_connect_any_Database_to_Powership_.md#toplevelfilterkeys)[`number`]

#### Defined in

packages/transporter/src/Transporter.ts:401

___

### TransporterFieldType

Ƭ **TransporterFieldType**: typeof [`FieldTypes`](Transporter___Base_to_connect_any_Database_to_Powership_.md#fieldtypes)[`number`]

#### Defined in

packages/transporter/src/Transporter.ts:36

___

### TransporterLoader

Ƭ **TransporterLoader**: [`TransporterLoadersRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#transporterloadersrecord)[[`TransporterLoaderName`](Transporter___Base_to_connect_any_Database_to_Powership_.md#transporterloadername)]

#### Defined in

packages/transporter/src/Transporter.ts:493

___

### TransporterLoaderName

Ƭ **TransporterLoaderName**: typeof [`transporterLoaderNames`](Transporter___Base_to_connect_any_Database_to_Powership_.md#transporterloadernames)[`number`]

#### Defined in

packages/transporter/src/Transporter.ts:487

___

### TransporterLoadersRecord

Ƭ **TransporterLoadersRecord**: { [K in TransporterLoaderName]: Transporter[K] }

#### Defined in

packages/transporter/src/Transporter.ts:489

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
| `$addToSet?` | [`ArrayOperationRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#arrayoperationrecord)<`TSchema`\> |
| `$append?` | [`ArrayOperationRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#arrayoperationrecord)<`TSchema`\> |
| `$inc?` | `UpdateDefinition`<`TSchema`\>[``"$inc"``] |
| `$prepend?` | [`ArrayOperationRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#arrayoperationrecord)<`TSchema`\> |
| `$pull?` | [`ArrayOperationRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#arrayoperationrecord)<`TSchema`, ``"$in"``\> |
| `$remove?` | `MaybeArray`<\`${Join<NestedPaths<TSchema\>, "."\>}${\`.${string}\` \| ""}\`\> |
| `$set?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |
| `$setIfNull?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |
| `$setOnInsert?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |

#### Defined in

packages/transporter/src/Transporter.ts:288

___

### UpdateExpressionKey

Ƭ **UpdateExpressionKey**: `Extract`<keyof [`UpdateExpression`](Transporter___Base_to_connect_any_Database_to_Powership_.md#updateexpression)<`any`\>, `string`\>

#### Defined in

packages/transporter/src/Transporter.ts:311

___

### UpdateManyConfig

Ƭ **UpdateManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Powership_.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `update` | [`UpdateExpression`](Transporter___Base_to_connect_any_Database_to_Powership_.md#updateexpression)<`Doc`\> |
| `upsert?` | `boolean` |

#### Defined in

packages/transporter/src/Transporter.ts:229

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

packages/transporter/src/Transporter.ts:417

___

### UpdateOneConfig

Ƭ **UpdateOneConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Transporter___Base_to_connect_any_Database_to_Powership_.md#loadercontext) |
| `filter` | [`MethodFilter`](Transporter___Base_to_connect_any_Database_to_Powership_.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `update` | [`UpdateExpression`](Transporter___Base_to_connect_any_Database_to_Powership_.md#updateexpression)<`Doc`\> |
| `upsert?` | `boolean` |

#### Defined in

packages/transporter/src/Transporter.ts:213

___

### UpdateOneResult

Ƭ **UpdateOneResult**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) = [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `created` | `boolean` |
| `error?` | `string` \| ``null`` |
| `item` | `T` \| ``null`` |
| `updated` | `boolean` |

#### Defined in

packages/transporter/src/Transporter.ts:410

## Variables

### AttributeFilterKeys

• `Const` **AttributeFilterKeys**: [``"$eq"``, ``"$ne"``, ``"$lte"``, ``"$lt"``, ``"$gt"``, ``"$gte"``, ``"$between"``, ``"$exists"``, ``"$type"``, ``"$startsWith"``, ``"$contains"``, ``"$matchString"``, ``"$in"``]

#### Defined in

packages/transporter/src/Transporter.ts:382

___

### DEFAULT\_SORT

• `Const` **DEFAULT\_SORT**: ``"ASC"``

#### Defined in

packages/transporter/src/Transporter.ts:34

___

### EntityErrorKind

• `Const` **EntityErrorKind**: { `EMPTY_FILTER`: ``"EMPTY_FILTER"`` ; `INVALID_FIELDS`: ``"INVALID_FIELDS"`` ; `INVALID_FILTER`: ``"INVALID_FILTER"`` ; `INVALID_INDEX_KEY`: ``"INVALID_INDEX_KEY"``  } & { `list`: (``"INVALID_FIELDS"`` \| ``"INVALID_INDEX_KEY"`` \| ``"EMPTY_FILTER"`` \| ``"INVALID_FILTER"``)[]  } & { `enum`: ``"INVALID_FIELDS"`` \| ``"INVALID_INDEX_KEY"`` \| ``"EMPTY_FILTER"`` \| ``"INVALID_FILTER"``  }

#### Defined in

packages/transporter/src/CollectionErrors.ts:6

packages/transporter/src/CollectionErrors.ts:38

___

### FieldTypes

• `Const` **FieldTypes**: [``"String"``, ``"Number"``, ``"Binary"``, ``"Boolean"``, ``"Null"``, ``"List"``, ``"Map"``, ``"StringSet"``, ``"NumberSet"``]

#### Defined in

packages/transporter/src/Transporter.ts:22

___

### FilterConditionsParsers

• `Const` **FilterConditionsParsers**: { [K in keyof FilterConditions]-?: Function }

#### Defined in

packages/transporter/src/Transporter.ts:313

___

### TopLevelFilterKeys

• `Const` **TopLevelFilterKeys**: [``"$not"``, ``"$or"``, ``"$and"``]

#### Defined in

packages/transporter/src/Transporter.ts:400

___

### indexConfigSchema

• `Const` **indexConfigSchema**: `ObjectType`<`Object`, `Object`\>

#### Defined in

packages/transporter/src/CollectionIndex.ts:177

___

### indexItemSchema

• `Const` **indexItemSchema**: `ObjectType`<`Object`, `Object`\>

#### Defined in

packages/transporter/src/CollectionIndex.ts:169

___

### relationSchema

• `Const` **relationSchema**: `ObjectType`<`Object`, `Object`\>

#### Defined in

packages/transporter/src/CollectionIndex.ts:164

___

### transporterLoaderNames

• `Const` **transporterLoaderNames**: [``"createOne"``, ``"findById"``, ``"findMany"``, ``"findOne"``, ``"updateOne"``, ``"updateMany"``, ``"deleteOne"``, ``"deleteMany"``, ``"paginate"``]

#### Defined in

packages/transporter/src/Transporter.ts:475

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

packages/transporter/src/Transporter.ts:495

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

packages/transporter/src/Transporter.ts:504

___

### createAggioIndexBasedFilters

▸ **createAggioIndexBasedFilters**(`options`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.filter` | [`IndexFilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexfilterrecord)<`string`, `string`\> |
| `options.indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anycollectionindexconfig) |

#### Returns

`Query`<`any`\>[]

#### Defined in

packages/transporter/src/parseAggioAttributeFilters.ts:19

___

### createDocumentIndexBasedFilters

▸ **createDocumentIndexBasedFilters**(`filter`, `indexConfig`): [`IndexBasedFilterParsed`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexbasedfilterparsed)

Receives a document indexConfig and a key-value filter and converts to
an index based search filter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`IndexFilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexfilterrecord)<`string`, `string`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anycollectionindexconfig) |

#### Returns

[`IndexBasedFilterParsed`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexbasedfilterparsed)

#### Defined in

packages/transporter/src/createDocumentIndexBasedFilters.ts:24

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

packages/transporter/src/encodeIndexValue.ts:3

___

### getDocumentIndexFields

▸ **getDocumentIndexFields**<`Document`\>(`doc`, `indexConfig`): [`ParsedDocumentIndexes`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parseddocumentindexes)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Document` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Document` |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anycollectionindexconfig) |

#### Returns

[`ParsedDocumentIndexes`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parseddocumentindexes)

#### Defined in

packages/transporter/src/getDocumentIndexFields.ts:16

___

### getParsedIndexKeys

▸ **getParsedIndexKeys**(`indexConfig`): [`ParsedIndexKey`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexkey)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anycollectionindexconfig) |

#### Returns

[`ParsedIndexKey`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexkey)[]

#### Defined in

packages/transporter/src/createDocumentIndexBasedFilters.ts:76

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

packages/transporter/src/Transporter.ts:522

___

### mergeIndexRelationsResult

▸ **mergeIndexRelationsResult**(`input`): [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anycollectionindexconfig) |
| `input.items` | [`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)[] |

#### Returns

[`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)[]

#### Defined in

packages/transporter/src/mergeIndexRelationsResult.ts:14

___

### parseAggioAttributeFilters

▸ **parseAggioAttributeFilters**(`attFilter`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `attFilter` | [`FilterRecord`](Transporter___Base_to_connect_any_Database_to_Powership_.md#filterrecord)<[`DocumentBase`](Transporter___Base_to_connect_any_Database_to_Powership_.md#documentbase)\> |

#### Returns

`Query`<`any`\>[]

#### Defined in

packages/transporter/src/parseAggioAttributeFilters.ts:41

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

packages/transporter/src/parseAggioUpdateExpression.ts:5

___

### parseCollectionIndexConfig

▸ **parseCollectionIndexConfig**<`T`\>(`indexConfig`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anycollectionindexconfig) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | `T` |

#### Returns

`T`

#### Defined in

packages/transporter/src/CollectionIndex.ts:187

___

### parseEntityIndexFields

▸ **parseEntityIndexFields**(`indexConfig`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anycollectionindexconfig) |

#### Returns

`any`

#### Defined in

packages/transporter/src/parseEntityIndexFields.ts:10

___

### parseFilterIndexFilterParts

▸ **parseFilterIndexFilterParts**(`filter`, `indexConfig`): { `isFinalParsedSearch`: ``false`` ; `parts`: [`ParsedIndexFilterPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexfilterpart)[]  } \| { `cursor`: `ParsedIndexCursor` ; `isFinalParsedSearch`: ``true``  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Record`<`string`, `any`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anycollectionindexconfig) |

#### Returns

{ `isFinalParsedSearch`: ``false`` ; `parts`: [`ParsedIndexFilterPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexfilterpart)[]  } \| { `cursor`: `ParsedIndexCursor` ; `isFinalParsedSearch`: ``true``  }

#### Defined in

packages/transporter/src/parseFilterIndexFilterParts.ts:30

___

### parseOneIndexDocumentFields

▸ **parseOneIndexDocumentFields**(`parsedIndex`): [`DocumentIndexFieldsParsed`](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.DocumentIndexFieldsParsed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsedIndex` | `ParsedIndexCursor` |

#### Returns

[`DocumentIndexFieldsParsed`](../interfaces/Transporter___Base_to_connect_any_Database_to_Powership_.DocumentIndexFieldsParsed.md)

#### Defined in

packages/transporter/src/CollectionIndex.ts:253

___

### parseUpdateExpression

▸ **parseUpdateExpression**<`Schema`\>(`updateExpression`, `indexConfig`): [`ParsedUpdateExpression`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedupdateexpression)<`Schema`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateExpression` | [`UpdateExpression`](Transporter___Base_to_connect_any_Database_to_Powership_.md#updateexpression)<`Schema`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.md#anycollectionindexconfig) |

#### Returns

[`ParsedUpdateExpression`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedupdateexpression)<`Schema`\>[]

#### Defined in

packages/transporter/src/parseUpdateExpression.ts:21

___

### pickIndexKeyPartsFromDocument

▸ **pickIndexKeyPartsFromDocument**(`param`): [`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexpart)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.acceptNullable` | `boolean` |
| `param.destination` | ``"filter"`` \| ``"document"`` |
| `param.doc` | `Record`<`string`, `any`\> |
| `param.indexField` | `string` |
| `param.indexPartKind` | [`IndexPartKind`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexpartkind) |
| `param.indexParts` | readonly [`IndexKeyHash`](Transporter___Base_to_connect_any_Database_to_Powership_.md#indexkeyhash)<`string`\>[] |

#### Returns

[`ParsedIndexPart`](Transporter___Base_to_connect_any_Database_to_Powership_.md#parsedindexpart)

#### Defined in

packages/transporter/src/pickIndexKeyPartsFromDocument.ts:16
