[Backland](../README.md) / [Modules](../modules.md) / Backland

# Module: Backland

## Table of contents

### References

- [InferField](Backland.md#inferfield)

### Classes

- [AliasField](../classes/Backland.AliasField.md)
- [AnyField](../classes/Backland.AnyField.md)
- [BooleanField](../classes/Backland.BooleanField.md)
- [CollectionErrors](../classes/Backland.CollectionErrors.md)
- [CursorField](../classes/Backland.CursorField.md)
- [DateField](../classes/Backland.DateField.md)
- [EmailField](../classes/Backland.EmailField.md)
- [EnumField](../classes/Backland.EnumField.md)
- [FieldType](../classes/Backland.FieldType.md)
- [FieldTypeError](../classes/Backland.FieldTypeError.md)
- [FloatField](../classes/Backland.FloatField.md)
- [GraphType](../classes/Backland.GraphType.md)
- [IDField](../classes/Backland.IDField.md)
- [IntField](../classes/Backland.IntField.md)
- [LiteralField](../classes/Backland.LiteralField.md)
- [MetaField](../classes/Backland.MetaField.md)
- [NullField](../classes/Backland.NullField.md)
- [ObjectField](../classes/Backland.ObjectField.md)
- [ObjectType](../classes/Backland.ObjectType.md)
- [RecordField](../classes/Backland.RecordField.md)
- [StringField](../classes/Backland.StringField.md)
- [UlidField](../classes/Backland.UlidField.md)
- [UndefinedField](../classes/Backland.UndefinedField.md)
- [UnionField](../classes/Backland.UnionField.md)
- [UnknownField](../classes/Backland.UnknownField.md)

### Interfaces

- [CreateOne](../interfaces/Backland.CreateOne.md)
- [CreateResolver](../interfaces/Backland.CreateResolver.md)
- [DeleteMany](../interfaces/Backland.DeleteMany.md)
- [DeleteOne](../interfaces/Backland.DeleteOne.md)
- [DocumentIndexFieldsParsed](../interfaces/Backland.DocumentIndexFieldsParsed.md)
- [DocumentIndexesConfig](../interfaces/Backland.DocumentIndexesConfig.md)
- [Entity](../interfaces/Backland.Entity.md)
- [EntityAddRelation](../interfaces/Backland.EntityAddRelation.md)
- [EntityFromContext](../interfaces/Backland.EntityFromContext.md)
- [EntityIndexRelations](../interfaces/Backland.EntityIndexRelations.md)
- [EntityPlugin](../interfaces/Backland.EntityPlugin.md)
- [EntityTypesContext](../interfaces/Backland.EntityTypesContext.md)
- [ExtendEntity](../interfaces/Backland.ExtendEntity.md)
- [ExtendObjectDefinition](../interfaces/Backland.ExtendObjectDefinition.md)
- [ExtendType](../interfaces/Backland.ExtendType.md)
- [FindById](../interfaces/Backland.FindById.md)
- [FindMany](../interfaces/Backland.FindMany.md)
- [FindOne](../interfaces/Backland.FindOne.md)
- [FirstIndexParsed](../interfaces/Backland.FirstIndexParsed.md)
- [GraphTypeInTypeFieldDefinition](../interfaces/Backland.GraphTypeInTypeFieldDefinition.md)
- [GraphTypeLike](../interfaces/Backland.GraphTypeLike.md)
- [GraphTypeLikeFieldDefinition](../interfaces/Backland.GraphTypeLikeFieldDefinition.md)
- [IndexMethods](../interfaces/Backland.IndexMethods.md)
- [IndexPKSKPartsListConfig](../interfaces/Backland.IndexPKSKPartsListConfig.md)
- [LiteralFieldDef](../interfaces/Backland.LiteralFieldDef.md)
- [ObjectDefinitionInput](../interfaces/Backland.ObjectDefinitionInput.md)
- [ObjectInTypeFieldDefinition](../interfaces/Backland.ObjectInTypeFieldDefinition.md)
- [ObjectLike](../interfaces/Backland.ObjectLike.md)
- [ObjectTypeLikeFieldDefinition](../interfaces/Backland.ObjectTypeLikeFieldDefinition.md)
- [Paginate](../interfaces/Backland.Paginate.md)
- [ParserHook](../interfaces/Backland.ParserHook.md)
- [RemoveParserHook](../interfaces/Backland.RemoveParserHook.md)
- [TSFYCustomHandler](../interfaces/Backland.TSFYCustomHandler.md)
- [TSFyResult](../interfaces/Backland.TSFyResult.md)
- [TSFyWriterConfig](../interfaces/Backland.TSFyWriterConfig.md)
- [Transporter](../interfaces/Backland.Transporter.md)
- [UpdateMany](../interfaces/Backland.UpdateMany.md)
- [UpdateOne](../interfaces/Backland.UpdateOne.md)
- [\_EntityLoaderUtils](../interfaces/Backland._EntityLoaderUtils.md)

### Type Aliases

- [$inferableKey](Backland.md#$inferablekey)
- [$sealed](Backland.md#$sealed)
- [$sealedDef](Backland.md#$sealeddef)
- [$sealedKey](Backland.md#$sealedkey)
- [AliasFieldAggregation](Backland.md#aliasfieldaggregation)
- [AliasFieldDef](Backland.md#aliasfielddef)
- [AllFieldTypes](Backland.md#allfieldtypes)
- [AllFilterOperations](Backland.md#allfilteroperations)
- [AllFinalFieldDefinitions](Backland.md#allfinalfielddefinitions)
- [AllIndexFilter](Backland.md#allindexfilter)
- [AnyCollectionIndexConfig](Backland.md#anycollectionindexconfig)
- [AnyDocIndexItem](Backland.md#anydocindexitem)
- [AnyEntity](Backland.md#anyentity)
- [AnyEntityTypesContext](Backland.md#anyentitytypescontext)
- [AnyResolver](Backland.md#anyresolver)
- [ArrayOperationRecord](Backland.md#arrayoperationrecord)
- [AttributeFilterKey](Backland.md#attributefilterkey)
- [BacklandObjectDefinition](Backland.md#backlandobjectdefinition)
- [CollectionConfigIndexes](Backland.md#collectionconfigindexes)
- [CollectionIndexConfig](Backland.md#collectionindexconfig)
- [CommonDefSafe](Backland.md#commondefsafe)
- [CommonFieldDefinition](Backland.md#commonfielddefinition)
- [CommonFieldOptions](Backland.md#commonfieldoptions)
- [CommonIndexFields](Backland.md#commonindexfields)
- [ComputeFieldDefinition](Backland.md#computefielddefinition)
- [CreateGraphQLObjectOptions](Backland.md#creategraphqlobjectoptions)
- [CreateOneConfig](Backland.md#createoneconfig)
- [CreateOneResult](Backland.md#createoneresult)
- [CursorType](Backland.md#cursortype)
- [DateFieldDef](Backland.md#datefielddef)
- [DeleteManyConfig](Backland.md#deletemanyconfig)
- [DeleteManyResult](Backland.md#deletemanyresult)
- [DeleteOneConfig](Backland.md#deleteoneconfig)
- [DeleteOneResult](Backland.md#deleteoneresult)
- [DescribeAndOverrideField](Backland.md#describeandoverridefield)
- [DescribeField](Backland.md#describefield)
- [DescribeObjectDefinition](Backland.md#describeobjectdefinition)
- [DescribeWithoutSeal](Backland.md#describewithoutseal)
- [DocumentBase](Backland.md#documentbase)
- [DocumentIndexFieldKey](Backland.md#documentindexfieldkey)
- [DocumentIndexFilterParsed](Backland.md#documentindexfilterparsed)
- [DocumentIndexItem](Backland.md#documentindexitem)
- [DocumentIndexRelation](Backland.md#documentindexrelation)
- [EdgeType](Backland.md#edgetype)
- [EntityDocument](Backland.md#entitydocument)
- [EntityDocumentBase](Backland.md#entitydocumentbase)
- [EntityDocumentInput](Backland.md#entitydocumentinput)
- [EntityErrorDetails](Backland.md#entityerrordetails)
- [EntityErrorKind](Backland.md#entityerrorkind)
- [EntityErrorKindEnum](Backland.md#entityerrorkindenum)
- [EntityFieldResolver](Backland.md#entityfieldresolver)
- [EntityFilters](Backland.md#entityfilters)
- [EntityHooks](Backland.md#entityhooks)
- [EntityHooksCreateDefinitionKind](Backland.md#entityhookscreatedefinitionkind)
- [EntityLoaderConfig](Backland.md#entityloaderconfig)
- [EntityLoaderMethods](Backland.md#entityloadermethods)
- [EntityOptions](Backland.md#entityoptions)
- [EntityParserHookContext](Backland.md#entityparserhookcontext)
- [FieldAsString](Backland.md#fieldasstring)
- [FieldComposer](Backland.md#fieldcomposer)
- [FieldCreators](Backland.md#fieldcreators)
- [FieldDefinitionConfig](Backland.md#fielddefinitionconfig)
- [FieldDefinitions](Backland.md#fielddefinitions)
- [FieldExample](Backland.md#fieldexample)
- [FieldExampleFunction](Backland.md#fieldexamplefunction)
- [FieldInput](Backland.md#fieldinput)
- [FieldInputLikeRequiredKey](Backland.md#fieldinputlikerequiredkey)
- [FieldParserConfig](Backland.md#fieldparserconfig)
- [FieldParserOptionsObject](Backland.md#fieldparseroptionsobject)
- [FieldTypeErrorCode](Backland.md#fieldtypeerrorcode)
- [FieldTypeName](Backland.md#fieldtypename)
- [FieldTypeOptions](Backland.md#fieldtypeoptions)
- [FieldTypeParser](Backland.md#fieldtypeparser)
- [FilterConditions](Backland.md#filterconditions)
- [FilterRecord](Backland.md#filterrecord)
- [FinalFieldDefinition](Backland.md#finalfielddefinition)
- [FinalFieldDefinitionStrict](Backland.md#finalfielddefinitionstrict)
- [FinalObjectDefinition](Backland.md#finalobjectdefinition)
- [FindByIdConfig](Backland.md#findbyidconfig)
- [FindManyConfig](Backland.md#findmanyconfig)
- [FindManyResult](Backland.md#findmanyresult)
- [FindOneConfig](Backland.md#findoneconfig)
- [FindOneResult](Backland.md#findoneresult)
- [FlattenFieldDefinition](Backland.md#flattenfielddefinition)
- [FloatFieldDef](Backland.md#floatfielddef)
- [GraphQLSchemaWithUtils](Backland.md#graphqlschemawithutils)
- [GraphTypeArgs](Backland.md#graphtypeargs)
- [GraphTypeKID](Backland.md#graphtypekid)
- [GroupedResolvers](Backland.md#groupedresolvers)
- [IDFieldDef](Backland.md#idfielddef)
- [ImplementObject](Backland.md#implementobject)
- [IndexBasedFilterParsed](Backland.md#indexbasedfilterparsed)
- [IndexFilter](Backland.md#indexfilter)
- [IndexFilterFound](Backland.md#indexfilterfound)
- [IndexFilterRecord](Backland.md#indexfilterrecord)
- [IndexKeyHash](Backland.md#indexkeyhash)
- [IndexPartKind](Backland.md#indexpartkind)
- [Infer](Backland.md#infer)
- [InferFinalField](Backland.md#inferfinalfield)
- [InferGraphType](Backland.md#infergraphtype)
- [InferObjectDefinition](Backland.md#inferobjectdefinition)
- [InferObjectType](Backland.md#inferobjecttype)
- [InferRecordFieldType](Backland.md#inferrecordfieldtype)
- [InferResolverArgs](Backland.md#inferresolverargs)
- [InferString](Backland.md#inferstring)
- [InferTypeName](Backland.md#infertypename)
- [InnerDef](Backland.md#innerdef)
- [IntFieldDef](Backland.md#intfielddef)
- [InvalidParsedIndexField](Backland.md#invalidparsedindexfield)
- [LazyParseGraphTypePayload](Backland.md#lazyparsegraphtypepayload)
- [ListDefinition](Backland.md#listdefinition)
- [ListDefinitionObject](Backland.md#listdefinitionobject)
- [ListDefinitionTruthy](Backland.md#listdefinitiontruthy)
- [LoaderContext](Backland.md#loadercontext)
- [MakeFieldOptional](Backland.md#makefieldoptional)
- [MakeFieldRequired](Backland.md#makefieldrequired)
- [MakeTypeList](Backland.md#maketypelist)
- [MakeTypeOptional](Backland.md#maketypeoptional)
- [MakeTypeRequired](Backland.md#maketyperequired)
- [MakeTypeSingle](Backland.md#maketypesingle)
- [MetaFieldDef](Backland.md#metafielddef)
- [MethodFilter](Backland.md#methodfilter)
- [OHas](Backland.md#ohas)
- [OPick](Backland.md#opick)
- [OWritable](Backland.md#owritable)
- [ObjectFieldInput](Backland.md#objectfieldinput)
- [ObjectMockOptions](Backland.md#objectmockoptions)
- [ObjectTypeFromInput](Backland.md#objecttypefrominput)
- [ObjectTypeKID](Backland.md#objecttypekid)
- [OneFilterOperation](Backland.md#onefilteroperation)
- [OptionalResolverConfig](Backland.md#optionalresolverconfig)
- [OverrideField](Backland.md#overridefield)
- [PKSKValueType](Backland.md#pkskvaluetype)
- [PageInfo](Backland.md#pageinfo)
- [PaginationResult](Backland.md#paginationresult)
- [PaginationType](Backland.md#paginationtype)
- [ParseFieldOptions](Backland.md#parsefieldoptions)
- [ParseSpecialObjectKeys](Backland.md#parsespecialobjectkeys)
- [ParsedDocumentIndexes](Backland.md#parseddocumentindexes)
- [ParsedIndexFilterPart](Backland.md#parsedindexfilterpart)
- [ParsedIndexKey](Backland.md#parsedindexkey)
- [ParsedIndexPart](Backland.md#parsedindexpart)
- [ParsedUpdateExpression](Backland.md#parsedupdateexpression)
- [QuerySort](Backland.md#querysort)
- [RecordFieldDef](Backland.md#recordfielddef)
- [RelationsFilter](Backland.md#relationsfilter)
- [Resolver](Backland.md#resolver)
- [ResolverContextBase](Backland.md#resolvercontextbase)
- [ResolverKind](Backland.md#resolverkind)
- [ResolverResolve](Backland.md#resolverresolve)
- [ResolversToTypeScriptOptions](Backland.md#resolverstotypescriptoptions)
- [RootFilterOperators](Backland.md#rootfilteroperators)
- [Seal](Backland.md#seal)
- [SealedField](Backland.md#sealedfield)
- [ShortenFinalFieldDefinition](Backland.md#shortenfinalfielddefinition)
- [SpecialObjectKeys](Backland.md#specialobjectkeys)
- [StringFieldDef](Backland.md#stringfielddef)
- [TAnyFieldType](Backland.md#tanyfieldtype)
- [TSFYConfig](Backland.md#tsfyconfig)
- [TSFYContext](Backland.md#tsfycontext)
- [TSFYPart](Backland.md#tsfypart)
- [TSFYRef](Backland.md#tsfyref)
- [TSFyChunkDefinition](Backland.md#tsfychunkdefinition)
- [TSFyHandlerUtils](Backland.md#tsfyhandlerutils)
- [TSFyTypeDef](Backland.md#tsfytypedef)
- [TopLevelFilterKey](Backland.md#toplevelfilterkey)
- [TransporterFieldType](Backland.md#transporterfieldtype)
- [TransporterLoader](Backland.md#transporterloader)
- [TransporterLoaderName](Backland.md#transporterloadername)
- [TransporterLoadersRecord](Backland.md#transporterloadersrecord)
- [Types](Backland.md#types)
- [UnknownFieldDef](Backland.md#unknownfielddef)
- [UpdateExpression](Backland.md#updateexpression)
- [UpdateExpressionKey](Backland.md#updateexpressionkey)
- [UpdateManyConfig](Backland.md#updatemanyconfig)
- [UpdateManyResult](Backland.md#updatemanyresult)
- [UpdateOneConfig](Backland.md#updateoneconfig)
- [UpdateOneResult](Backland.md#updateoneresult)
- [ValidationCustomMessage](Backland.md#validationcustommessage)
- [\_AllOptional](Backland.md#_alloptional)
- [\_AnyEntity](Backland.md#_anyentity)
- [\_DescribeField](Backland.md#_describefield)
- [\_DescribeObject](Backland.md#_describeobject)
- [\_EntityLoaderMethods](Backland.md#_entityloadermethods)
- [\_EntityLoaders](Backland.md#_entityloaders)
- [\_ExcludeExtend](Backland.md#_excludeextend)
- [\_ExtendMethodKeys](Backland.md#_extendmethodkeys)
- [\_FieldKV](Backland.md#_fieldkv)
- [\_GetAliasFields](Backland.md#_getaliasfields)
- [\_GetKey](Backland.md#_getkey)
- [\_GetLoaderFilterDef](Backland.md#_getloaderfilterdef)
- [\_GetParts](Backland.md#_getparts)
- [\_InferAlias](Backland.md#_inferalias)
- [\_InferAliasFields](Backland.md#_inferaliasfields)
- [\_InferField](Backland.md#_inferfield)
- [\_InferFinalField](Backland.md#_inferfinalfield)
- [\_InferObjectDefinition](Backland.md#_inferobjectdefinition)
- [\_InferSpecialObjectKeys](Backland.md#_inferspecialobjectkeys)
- [\_InnerDef](Backland.md#_innerdef)
- [\_ObjectFieldInputBase](Backland.md#_objectfieldinputbase)
- [\_OmitUndefined](Backland.md#_omitundefined)
- [\_ResolverArgs](Backland.md#_resolverargs)
- [\_ShortenFinalFieldDefinitionFieldAsString](Backland.md#_shortenfinalfielddefinitionfieldasstring)
- [\_ToString](Backland.md#_tostring)
- [\_WithInferList](Backland.md#_withinferlist)
- [\_WithInferOptional](Backland.md#_withinferoptional)

### Variables

- [$inferableKey](Backland.md#$inferablekey-1)
- [$sealed](Backland.md#$sealed-1)
- [$sealedKey](Backland.md#$sealedkey-1)
- [AttributeFilterKeys](Backland.md#attributefilterkeys)
- [BacklandObject](Backland.md#backlandobject)
- [CACHED\_FIELD\_INSTANCE\_KEY](Backland.md#cached_field_instance_key)
- [CircularDeps](Backland.md#circulardeps)
- [DEFAULT\_SORT](Backland.md#default_sort)
- [EntityErrorKind](Backland.md#entityerrorkind-1)
- [EntityHooksCreateDefinitionKind](Backland.md#entityhookscreatedefinitionkind-1)
- [EntityStore](Backland.md#entitystore)
- [FieldTypeErrorCodes](Backland.md#fieldtypeerrorcodes)
- [FieldTypes](Backland.md#fieldtypes)
- [FieldsTypeCache](Backland.md#fieldstypecache)
- [FilterConditionsParsers](Backland.md#filterconditionsparsers)
- [PageInfoType](Backland.md#pageinfotype)
- [SpecialObjectKeyEnum](Backland.md#specialobjectkeyenum)
- [TopLevelFilterKeys](Backland.md#toplevelfilterkeys)
- [ULID\_REGEX](Backland.md#ulid_regex)
- [\_parserHooks](Backland.md#_parserhooks)
- [create](Backland.md#create)
- [defaultTypesDest](Backland.md#defaulttypesdest)
- [indexConfigSchema](Backland.md#indexconfigschema)
- [indexItemSchema](Backland.md#indexitemschema)
- [isFieldTypeName](Backland.md#isfieldtypename)
- [objectMetaFieldKey](Backland.md#objectmetafieldkey)
- [relationSchema](Backland.md#relationschema)
- [resolverKinds](Backland.md#resolverkinds)
- [transporterLoaderNames](Backland.md#transporterloadernames)
- [tsfy\_defaults](Backland.md#tsfy_defaults)
- [types](Backland.md#types-1)

### Functions

- [\_\_getCachedFieldInstance](Backland.md#__getcachedfieldinstance)
- [\_ensureTransporterMethodsImplementation](Backland.md#_ensuretransportermethodsimplementation)
- [assertFieldFilter](Backland.md#assertfieldfilter)
- [cleanMetaField](Backland.md#cleanmetafield)
- [createAggioIndexBasedFilters](Backland.md#createaggioindexbasedfilters)
- [createBacklandObject](Backland.md#createbacklandobject)
- [createDocumentIndexBasedFilters](Backland.md#createdocumentindexbasedfilters)
- [createEmptyMetaField](Backland.md#createemptymetafield)
- [createEntity](Backland.md#createentity)
- [createEntityPlugin](Backland.md#createentityplugin)
- [createFieldTypeError](Backland.md#createfieldtypeerror)
- [createGraphQLSchema](Backland.md#creategraphqlschema)
- [createObjectType](Backland.md#createobjecttype)
- [createResolver](Backland.md#createresolver)
- [createResolverFactory](Backland.md#createresolverfactory)
- [createSchema](Backland.md#createschema)
- [createTSFYContext](Backland.md#createtsfycontext)
- [createTSfyRef](Backland.md#createtsfyref)
- [createType](Backland.md#createtype)
- [deleteCachedFieldInstance](Backland.md#deletecachedfieldinstance)
- [encodeIndexValue](Backland.md#encodeindexvalue)
- [extendObjectDefinition](Backland.md#extendobjectdefinition)
- [extendType](Backland.md#extendtype)
- [fieldToMock](Backland.md#fieldtomock)
- [getDocumentIndexFields](Backland.md#getdocumentindexfields)
- [getObjectDefinitionId](Backland.md#getobjectdefinitionid)
- [getObjectDefinitionMetaField](Backland.md#getobjectdefinitionmetafield)
- [getParsedIndexKeys](Backland.md#getparsedindexkeys)
- [getResolver](Backland.md#getresolver)
- [getTSFyIdentifier](Backland.md#gettsfyidentifier)
- [getType](Backland.md#gettype)
- [implementObject](Backland.md#implementobject-1)
- [isEntity](Backland.md#isentity)
- [isFieldError](Backland.md#isfielderror)
- [isFieldInstance](Backland.md#isfieldinstance)
- [isFilterConditionKey](Backland.md#isfilterconditionkey)
- [isHiddenFieldName](Backland.md#ishiddenfieldname)
- [isMetaField](Backland.md#ismetafield)
- [isMetaFieldKey](Backland.md#ismetafieldkey)
- [isObject](Backland.md#isobject)
- [isObjectAsTypeDefinition](Backland.md#isobjectastypedefinition)
- [isObjectValidationError](Backland.md#isobjectvalidationerror)
- [isPossibleArgsDef](Backland.md#ispossibleargsdef)
- [mergeIndexRelationsResult](Backland.md#mergeindexrelationsresult)
- [moduleWrapper](Backland.md#modulewrapper)
- [objectMock](Backland.md#objectmock)
- [parseAggioAttributeFilters](Backland.md#parseaggioattributefilters)
- [parseAggioUpdateExpression](Backland.md#parseaggioupdateexpression)
- [parseCollectionIndexConfig](Backland.md#parsecollectionindexconfig)
- [parseEntityIndexFields](Backland.md#parseentityindexfields)
- [parseField](Backland.md#parsefield)
- [parseFieldDefinitionConfig](Backland.md#parsefielddefinitionconfig)
- [parseFilterIndexFilterParts](Backland.md#parsefilterindexfilterparts)
- [parseFlattenFieldDefinition](Backland.md#parseflattenfielddefinition)
- [parseObjectDefinition](Backland.md#parseobjectdefinition)
- [parseObjectField](Backland.md#parseobjectfield)
- [parseOneIndexDocumentFields](Backland.md#parseoneindexdocumentfields)
- [parseUpdateExpression](Backland.md#parseupdateexpression)
- [parseValidationError](Backland.md#parsevalidationerror)
- [pickIndexKeyPartsFromDocument](Backland.md#pickindexkeypartsfromdocument)
- [registerEntity](Backland.md#registerentity)
- [resetTypesCache](Backland.md#resettypescache)
- [resolversToTypescript](Backland.md#resolverstotypescript)
- [resolversTypescriptParts](Backland.md#resolverstypescriptparts)
- [setParserHook](Backland.md#setparserhook)
- [tsfy](Backland.md#tsfy)
- [tsfyWriter](Backland.md#tsfywriter)

## References

### InferField

Renames and re-exports [Infer](Backland.md#infer)

## Type Aliases

### $inferableKey

Ƭ **$inferableKey**: typeof [`$inferableKey`](Backland.md#$inferablekey-1)

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:12

packages/schema/lib/fields/Infer/DescribeField.d.ts:13

___

### $sealed

Ƭ **$sealed**: typeof [`$sealed`](Backland.md#$sealed-1)

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:10

packages/schema/lib/fields/Infer/DescribeField.d.ts:11

___

### $sealedDef

Ƭ **$sealedDef**: `Compute`<{ `list`: ``false`` ; `literal`: [`$sealed`](Backland.md#$sealed-1) ; `optional`: ``false``  } & [`CommonDefSafe`](Backland.md#commondefsafe)\>

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:19

___

### $sealedKey

Ƭ **$sealedKey**: typeof [`$sealedKey`](Backland.md#$sealedkey-1)

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:8

packages/schema/lib/fields/Infer/DescribeField.d.ts:9

___

### AliasFieldAggregation

Ƭ **AliasFieldAggregation**<`Parent`\>: { `type`: [`FieldInput`](Backland.md#fieldinput)  } & { `aggregate`: `Aggregation`<`Parent`\> \| `Readonly`<`Aggregation`<`Parent`\>\> ; `from`: `ObjectDotNotations`<`Parent`\>  } \| { `aggregate`: `Aggregation`<`Parent`\> \| `Readonly`<`Aggregation`<`Parent`\>\> ; `from?`: `undefined`  } \| { `aggregate?`: `undefined` ; `from`: `ObjectDotNotations`<`Parent`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parent` | `any` |

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:5

___

### AliasFieldDef

Ƭ **AliasFieldDef**: `string` \| [`AliasFieldAggregation`](Backland.md#aliasfieldaggregation)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:17

___

### AllFieldTypes

Ƭ **AllFieldTypes**: { [K in keyof FieldDefinitions]: FieldType<unknown, K, FieldDefinitions[K], 0, 0\> }

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:66

___

### AllFilterOperations

Ƭ **AllFilterOperations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$between` | [`string`, `string`] \| [`number`, `number`] |
| `$contains` | `string` \| `number` \| `boolean` \| ``null`` |
| `$eq` | [`PKSKValueType`](Backland.md#pkskvaluetype) \| `boolean` |
| `$exists` | `boolean` |
| `$gt` | [`PKSKValueType`](Backland.md#pkskvaluetype) |
| `$gte` | [`PKSKValueType`](Backland.md#pkskvaluetype) |
| `$in` | `unknown`[] |
| `$lt` | [`PKSKValueType`](Backland.md#pkskvaluetype) |
| `$lte` | [`PKSKValueType`](Backland.md#pkskvaluetype) |
| `$matchString` | `string` |
| `$ne` | [`PKSKValueType`](Backland.md#pkskvaluetype) \| `boolean` |
| `$startsWith` | `string` |
| `$type` | [`TransporterFieldType`](Backland.md#transporterfieldtype) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:9

___

### AllFinalFieldDefinitions

Ƭ **AllFinalFieldDefinitions**: { [Type in FieldTypeName]: Object }

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:14

___

### AllIndexFilter

Ƭ **AllIndexFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$between` | [`string`, `string`] \| [`number`, `number`] |
| `$eq` | [`PKSKValueType`](Backland.md#pkskvaluetype) |
| `$gt` | [`PKSKValueType`](Backland.md#pkskvaluetype) |
| `$gte` | [`PKSKValueType`](Backland.md#pkskvaluetype) |
| `$lt` | [`PKSKValueType`](Backland.md#pkskvaluetype) |
| `$lte` | [`PKSKValueType`](Backland.md#pkskvaluetype) |
| `$startsWith` | [`PKSKValueType`](Backland.md#pkskvaluetype) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:48

___

### AnyCollectionIndexConfig

Ƭ **AnyCollectionIndexConfig**: [`CollectionIndexConfig`](Backland.md#collectionindexconfig)<[`DocumentBase`](Backland.md#documentbase), `string`\>

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:44

___

### AnyDocIndexItem

Ƭ **AnyDocIndexItem**: [`DocumentIndexItem`](Backland.md#documentindexitem)

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:38

___

### AnyEntity

Ƭ **AnyEntity**: { [K in keyof \_AnyEntity]: any }

#### Defined in

packages/entity/lib/EntityInterfaces/Entity.d.ts:8

___

### AnyEntityTypesContext

Ƭ **AnyEntityTypesContext**: { [K in keyof EntityTypesContext<any, any\>]: any } & {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:39

___

### AnyResolver

Ƭ **AnyResolver**: [`Resolver`](Backland.md#resolver)<`any`, `any`, `any`, `any`\>

#### Defined in

packages/schema/lib/Resolver.d.ts:32

___

### ArrayOperationRecord

Ƭ **ArrayOperationRecord**<`TSchema`, `KV`\>: `MatchKeysAndValues`<`TSchema`\> extends infer All ? { [K in keyof All as [NonNullable<All[K]\>] extends [any[]] ? K : never]?: Cast<NonNullable<All[K]\>, any[]\>[number] \| { [Kv in KV]?: Cast<NonNullable<All[K]\>, any[]\>[number][] } } : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | `TSchema` |
| `KV` | extends `string` = ``"$each"`` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:143

___

### AttributeFilterKey

Ƭ **AttributeFilterKey**: typeof [`AttributeFilterKeys`](Backland.md#attributefilterkeys)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:164

___

### BacklandObjectDefinition

Ƭ **BacklandObjectDefinition**: [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)

#### Defined in

packages/schema/lib/TObjectConfig.d.ts:3

___

### CollectionConfigIndexes

Ƭ **CollectionConfigIndexes**<`Doc`, `K`\>: `ReadonlyArray`<[`DocumentIndexItem`](Backland.md#documentindexitem)<`K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) |
| `K` | extends `string` = `Extract`<keyof `Doc`, `string`\> |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:39

___

### CollectionIndexConfig

Ƭ **CollectionIndexConfig**<`Doc`, `EntityName`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) |
| `EntityName` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `Readonly`<`EntityName`\> |
| `indexes` | [`CollectionConfigIndexes`](Backland.md#collectionconfigindexes)<`Doc`\> |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:40

___

### CommonDefSafe

Ƭ **CommonDefSafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `example?` | [`FieldExample`](Backland.md#fieldexample) |
| `hidden?` | `boolean` |
| `name?` | `string` |

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:41

___

### CommonFieldDefinition

Ƭ **CommonFieldDefinition**<`T`\>: { `type`: `T`  } & [`CommonFieldOptions`](Backland.md#commonfieldoptions)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:53

___

### CommonFieldOptions

Ƭ **CommonFieldOptions**: [`CommonDefSafe`](Backland.md#commondefsafe) & { `def?`: `any` ; `defaultValue?`: `any` ; `list?`: [`ListDefinition`](Backland.md#listdefinition) ; `optional?`: `boolean`  }

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:47

___

### CommonIndexFields

Ƭ **CommonIndexFields**: { `_c`: `string` ; `_e`: `string` ; `_id`: `string` ; `_rpk?`: `string`[]  } & { [L in \`${string}PK\`]: string } & { [L in \`${string}SK\`]: string }

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:462

___

### ComputeFieldDefinition

Ƭ **ComputeFieldDefinition**<`T`\>: `T` extends `unknown` ? { `__infer`: `_get`<`T`, ``"__infer"``\> ; `def`: `_get`<`T`, ``"def"``\> ; `defaultValue`: `_get`<`T`, ``"defaultValue"``\> ; `description`: `_get`<`T`, ``"description"``\> ; `example`: `_get`<`T`, ``"example"``\> ; `hidden`: `_get`<`T`, ``"hidden"``\> ; `list`: `_get`<`T`, ``"list"``\> ; `name`: `_get`<`T`, ``"name"``\> ; `optional`: `_get`<`T`, ``"optional"``\> ; `type`: `_get`<`T`, ``"type"``\>  } : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:29

___

### CreateGraphQLObjectOptions

Ƭ **CreateGraphQLObjectOptions**: `Partial`<`GraphQLSchemaConfig`\>

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:6

___

### CreateOneConfig

Ƭ **CreateOneConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Backland.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Backland.md#loadercontext) |
| `indexConfig` | [`CollectionIndexConfig`](Backland.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `item` | `Doc` |
| `replace?` | `boolean` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:105

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

packages/transporter/lib/Transporter.d.ts:167

___

### CursorType

Ƭ **CursorType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK` | `string` |
| `SK?` | `string` |
| `after?` | `string` |
| `fields?` | `string`[] |
| `limit?` | `number` |
| `prefix?` | `string` |
| `sep?` | `string` |
| `version?` | `string` |

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:9

___

### DateFieldDef

Ƭ **DateFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoCreate?` | `boolean` |
| `max?` | `Date` |
| `min?` | `Date` |

#### Defined in

packages/schema/lib/fields/DateField.d.ts:2

___

### DeleteManyConfig

Ƭ **DeleteManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Backland.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Backland.md#loadercontext) |
| `filter` | [`MethodFilter`](Backland.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Backland.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |

#### Defined in

packages/transporter/lib/Transporter.d.ts:128

___

### DeleteManyResult

Ƭ **DeleteManyResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deletedCount` | `number` |
| `error?` | `string` \| ``null`` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:184

___

### DeleteOneConfig

Ƭ **DeleteOneConfig**<`Item`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Item` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Backland.md#filterrecord)<`Item`\> |
| `context?` | [`LoaderContext`](Backland.md#loadercontext) |
| `filter` | [`MethodFilter`](Backland.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Backland.md#collectionindexconfig)<`Item`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |

#### Defined in

packages/transporter/lib/Transporter.d.ts:134

___

### DeleteOneResult

Ƭ **DeleteOneResult**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `item` | `T` \| ``null`` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:203

___

### DescribeAndOverrideField

Ƭ **DescribeAndOverrideField**<`T`, `Override`\>: [`DescribeWithoutSeal`](Backland.md#describewithoutseal)<`T`\> extends infer R ? `R` extends [`FinalFieldDefinition`](Backland.md#finalfielddefinition) ? [`SealedField`](Backland.md#sealedfield)<`Merge`<{ [K in keyof R as K extends keyof Override ? never : K]: R[K] }, `Override`\>\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |
| `Override` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:32

___

### DescribeField

Ƭ **DescribeField**<`Input`\>: [[`$sealedKey`](Backland.md#$sealedkey-1)] extends [keyof `Input`] ? `Input` : [`SealedField`](Backland.md#sealedfield)<[`_DescribeField`](Backland.md#_describefield)<`Input`\>\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:14

___

### DescribeObjectDefinition

Ƭ **DescribeObjectDefinition**<`Input`\>: [`$sealedKey`](Backland.md#$sealedkey-1) extends keyof `Input` ? `Input` : [`Input`] extends [`object`] ? [`Seal`](Backland.md#seal)<{ -readonly [K in keyof Input]: DescribeField<Input[K]\> }\> : [`Seal`](Backland.md#seal)<{}\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:35

___

### DescribeWithoutSeal

Ƭ **DescribeWithoutSeal**<`T`\>: `Omit`<[`DescribeField`](Backland.md#describefield)<`T`\>, [`$inferableKey`](Backland.md#$inferablekey-1) \| [`$sealedKey`](Backland.md#$sealedkey-1)\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:29

___

### DocumentBase

Ƭ **DocumentBase**: `Record`<`string`, `any`\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:65

___

### DocumentIndexFieldKey

Ƭ **DocumentIndexFieldKey**: `string`

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:22

___

### DocumentIndexFilterParsed

Ƭ **DocumentIndexFilterParsed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK` | [`FilterConditions`](Backland.md#filterconditions) \| `string` |
| `SK` | [`FilterConditions`](Backland.md#filterconditions) \| `string` |
| `entity` | `string` |
| `key` | [`AnyDocIndexItem`](Backland.md#anydocindexitem)[``"name"``] |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:67

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
| `PK` | [`IndexPKSKPartsListConfig`](../interfaces/Backland.IndexPKSKPartsListConfig.md)<`DocKeys`\> |
| `SK?` | [`IndexPKSKPartsListConfig`](../interfaces/Backland.IndexPKSKPartsListConfig.md)<`DocKeys`\> |
| `name` | [`DocumentIndexFieldKey`](Backland.md#documentindexfieldkey) |
| `relatedTo?` | `string` |
| `relations?` | `ReadonlyArray`<[`DocumentIndexRelation`](Backland.md#documentindexrelation)\> |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:27

___

### DocumentIndexRelation

Ƭ **DocumentIndexRelation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `string` |
| `name` | `string` |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:34

___

### EdgeType

Ƭ **EdgeType**<`T`\>: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: { `cursor`: ``"string"`` ; `node`: `T` extends [`GraphTypeLike`](../interfaces/Backland.GraphTypeLike.md) ? `T` : ``"null"``  }  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/entity/lib/paginationUtils.d.ts:11

___

### EntityDocument

Ƭ **EntityDocument**<`Shape`\>: `IsKnown`<`Shape`\> extends ``1`` ? `Merge`<[`EntityDocumentBase`](Backland.md#entitydocumentbase), `Shape`\> : [`EntityDocumentBase`](Backland.md#entitydocumentbase) & { `[K: string]`: `unknown`;  }

#### Type parameters

| Name |
| :------ |
| `Shape` |

#### Defined in

packages/entity/lib/EntityInterfaces/Document.d.ts:12

___

### EntityDocumentBase

Ƭ **EntityDocumentBase**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_c` | `string` |
| `_v` | `string` |
| `createdAt` | `Date` |
| `createdBy` | `string` \| `undefined` |
| `id` | `string` |
| `ulid` | `string` |
| `updatedAt` | `Date` |
| `updatedBy` | `string` \| `undefined` |

#### Defined in

packages/entity/lib/EntityInterfaces/Document.d.ts:2

___

### EntityDocumentInput

Ƭ **EntityDocumentInput**<`Shape`\>: `IsKnown`<`Shape`\> extends ``1`` ? `Merge`<`Partial`<[`EntityDocumentBase`](Backland.md#entitydocumentbase)\>, `Shape`\> : `Partial`<[`EntityDocumentBase`](Backland.md#entitydocumentbase)\> & { `[K: string]`: `unknown`;  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Shape` | {} |

#### Defined in

packages/entity/lib/EntityInterfaces/Document.d.ts:15

___

### EntityErrorDetails

Ƭ **EntityErrorDetails**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `invalidFields?` | [`InvalidParsedIndexField`](Backland.md#invalidparsedindexfield)[] |
| `reason` | [`EntityErrorKind`](Backland.md#entityerrorkind-1) |

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:29

___

### EntityErrorKind

Ƭ **EntityErrorKind**: keyof [`EntityErrorKindEnum`](Backland.md#entityerrorkindenum)

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:2

packages/transporter/lib/CollectionErrors.d.ts:28

___

### EntityErrorKindEnum

Ƭ **EntityErrorKindEnum**: typeof [`EntityErrorKind`](Backland.md#entityerrorkind-1)

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:27

___

### EntityFieldResolver

Ƭ **EntityFieldResolver**<`Context`, `TypeDef`, `ArgsDef`, `Root`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | `Context` |
| `TypeDef` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) |
| `ArgsDef` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) \| `undefined` |
| `Root` | `Root` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args?` | `ArgsDef` |
| `name` | `string` |
| `resolve` | [`ResolverResolve`](Backland.md#resolverresolve)<`Context`, `Root`, `TypeDef`, `ArgsDef`\> |
| `type` | `TypeDef` |

#### Defined in

packages/entity/lib/EntityOptions.d.ts:14

___

### EntityFilters

Ƭ **EntityFilters**<`Doc`\>: `Query`<`Doc`\>

#### Type parameters

| Name |
| :------ |
| `Doc` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:37

___

### EntityHooks

Ƭ **EntityHooks**<`Doc`, `E`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`EntityDocument`](Backland.md#entitydocument)<{ `[K: string]`: `unknown`;  }\> |
| `E` | extends [`AnyEntity`](Backland.md#anyentity) = [`AnyEntity`](Backland.md#anyentity) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beforeQuery` | `Waterfall`<`EntityOperationInfoContext`, {}\> |
| `createDefinition` | `Parallel`<`Record`<`string`, [`FinalFieldDefinition`](Backland.md#finalfielddefinition)\>, { `entityOptions`: [`EntityOptions`](Backland.md#entityoptions) ; `fields`: `string`[] ; `kind`: [`EntityHooksCreateDefinitionKind`](Backland.md#entityhookscreatedefinitionkind-1) ; `resolvers`: [`EntityFieldResolver`](Backland.md#entityfieldresolver)<`any`, `any`, `any`, `any`\>[]  }\> |
| `filterResult` | `Waterfall`<{ `items`: [`EntityDocument`](Backland.md#entitydocument)<`Doc`\>[] ; `kind`: ``"items"``  } \| { `kind`: ``"pagination"`` ; `pagination`: [`PaginationResult`](Backland.md#paginationresult)<[`EntityDocument`](Backland.md#entitydocument)<`Doc`\>\>  }, { `operation`: `EntityOperationInfoContext` ; `resolvers`: [`EntityFieldResolver`](Backland.md#entityfieldresolver)<`any`, `any`, `any`, `any`\>[]  }\> |
| `initCreation` | `Parallel`<[`EntityOptions`](Backland.md#entityoptions), `E`\> |
| `postParse` | `Waterfall`<`EntityOperationInfoContext`, [`EntityParserHookContext`](Backland.md#entityparserhookcontext)<`E`\>\> |
| `preParse` | `Waterfall`<`EntityOperationInfoContext`, [`EntityParserHookContext`](Backland.md#entityparserhookcontext)<`E`\>\> |
| `willResolve` | `Waterfall`<[`_EntityLoaders`](Backland.md#_entityloaders)<`E`\>, `EntityOperationInfoContext`\> |

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:21

___

### EntityHooksCreateDefinitionKind

Ƭ **EntityHooksCreateDefinitionKind**: typeof [`EntityHooksCreateDefinitionKind`](Backland.md#entityhookscreatedefinitionkind-1)[`number`]

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:12

packages/entity/lib/EntityPlugin.d.ts:13

___

### EntityLoaderConfig

Ƭ **EntityLoaderConfig**<`Method`, `Context`\>: [`TransporterLoadersRecord`](Backland.md#transporterloadersrecord)[`Method`] extends (`config`: infer Config) => `any` ? `Config` & { `context`: `Context`  } extends infer R ? { [K in keyof R as K extends "context" ? never : K]: R[K] } & { `context`: `Context`  } : `never` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Method` | extends [`TransporterLoaderName`](Backland.md#transporterloadername) |
| `Context` | extends [`LoaderContext`](Backland.md#loadercontext) = `Record`<`string`, `any`\> |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderConfig.d.ts:2

___

### EntityLoaderMethods

Ƭ **EntityLoaderMethods**<`Context`\>: [`_EntityLoaderMethods`](Backland.md#_entityloadermethods)<`Context`\> extends infer Methods ? { [K in keyof Methods]: Methods[K] extends Function ? Options extends Record<string, any\> ? Function & \_EntityLoaderUtils<Options, Context\> : Methods[K] : Methods[K] } & {} : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](Backland.md#anyentitytypescontext) |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:5

___

### EntityOptions

Ƭ **EntityOptions**<`InputDocumentDefinition`, `Indexes`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDocumentDefinition` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) = [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) |
| `Indexes` | extends [`DocumentIndexesConfig`](../interfaces/Backland.DocumentIndexesConfig.md) = [`DocumentIndexesConfig`](../interfaces/Backland.DocumentIndexesConfig.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowExtraFields?` | `boolean` |
| `indexes` | `Indexes` |
| `logs?` | `LoggerOptions` |
| `name` | `string` |
| `transporter?` | [`Transporter`](../interfaces/Backland.Transporter.md) |
| `type` | [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `InputDocumentDefinition`  }\> |

#### Defined in

packages/entity/lib/EntityOptions.d.ts:4

___

### EntityParserHookContext

Ƭ **EntityParserHookContext**<`E`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`AnyEntity`](Backland.md#anyentity) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkForVersion?` | `boolean` |
| `entity` | `E` |

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:14

___

### FieldAsString

Ƭ **FieldAsString**: [`FieldTypeName`](Backland.md#fieldtypename) \| \`${FieldTypeName}?\` \| \`[${FieldTypeName}]\` \| \`[${FieldTypeName}]?\`

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:35

___

### FieldComposer

Ƭ **FieldComposer**<`Schema`, `T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | `Record`<`string`, `any`\> |
| `T` | `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `compose` | (`schema`: `Schema`) => `T` |
| `def` | [`FinalFieldDefinitionStrict`](Backland.md#finalfielddefinitionstrict) |
| `validate` | (`input`: `any`, `parent`: `Schema`) => `T` |

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:9

___

### FieldCreators

Ƭ **FieldCreators**: `Readonly`<{ [K in FieldTypeName]: Types[K]["create"] }\>

#### Defined in

packages/schema/lib/fields/fieldTypes.d.ts:69

___

### FieldDefinitionConfig

Ƭ **FieldDefinitionConfig**: [`ObjectFieldInput`](Backland.md#objectfieldinput)

#### Defined in

packages/schema/lib/TObjectConfig.d.ts:4

___

### FieldDefinitions

Ƭ **FieldDefinitions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ID` | { `autoCreate?`: `boolean`  } \| `undefined` |
| `alias` | [`AliasFieldDef`](Backland.md#aliasfielddef) |
| `any` | `undefined` |
| `array` | `ArrayFieldDef` |
| `boolean` | `undefined` |
| `cursor` | `undefined` |
| `date` | { `autoCreate?`: `boolean` ; `max?`: `Date` ; `min?`: `Date`  } \| `undefined` |
| `email` | { `regex?`: [`string`] \| [`string`, `string`] \| `Readonly`<[`string`] \| [`string`, `string`]\>  } \| `undefined` |
| `enum` | `string`[] \| `Readonly`<`string`[]\> |
| `float` | { `max?`: `number` ; `min?`: `number`  } \| `undefined` |
| `int` | { `max?`: `number` ; `min?`: `number`  } \| `undefined` |
| `literal` | `Readonly`<`unknown`\> |
| `meta` | [`MetaFieldDef`](Backland.md#metafielddef) |
| `null` | `undefined` |
| `object` | { `[K: string]`: [`ObjectFieldInput`](Backland.md#objectfieldinput);  } \| `Readonly`<{ `[K: string]`: [`ObjectFieldInput`](Backland.md#objectfieldinput);  }\> \| [`ObjectLike`](../interfaces/Backland.ObjectLike.md) |
| `phone` | `PhoneFieldDef` |
| `record` | [`RecordFieldDef`](Backland.md#recordfielddef) \| `undefined` |
| `string` | { `max?`: `number` ; `min?`: `number` ; `regex?`: [`string`] \| [`string`, `string`] \| `Readonly`<[`string`] \| [`string`, `string`]\>  } \| `undefined` |
| `ulid` | { `autoCreate?`: `boolean`  } \| `undefined` |
| `undefined` | `undefined` |
| `union` | [`ObjectFieldInput`](Backland.md#objectfieldinput)[] \| `Readonly`<[`ObjectFieldInput`](Backland.md#objectfieldinput)[]\> |
| `unknown` | [`UnknownFieldDef`](Backland.md#unknownfielddef) \| `undefined` |

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:65

___

### FieldExample

Ƭ **FieldExample**: [`FieldExampleFunction`](Backland.md#fieldexamplefunction) \| `string`

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:27

___

### FieldExampleFunction

Ƭ **FieldExampleFunction**: () => `string` \| `Promise`<`string`\>

#### Type declaration

▸ (): `string` \| `Promise`<`string`\>

##### Returns

`string` \| `Promise`<`string`\>

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:26

___

### FieldInput

Ƭ **FieldInput**: [`ObjectFieldInput`](Backland.md#objectfieldinput)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:7

___

### FieldInputLikeRequiredKey

Ƭ **FieldInputLikeRequiredKey**: [`ObjectTypeKID`](Backland.md#objecttypekid) \| [`GraphTypeKID`](Backland.md#graphtypekid) \| [`FieldTypeName`](Backland.md#fieldtypename) \| ``"type"``

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:20

___

### FieldParserConfig

Ƭ **FieldParserConfig**: [`ValidationCustomMessage`](Backland.md#validationcustommessage) \| [`FieldParserOptionsObject`](Backland.md#fieldparseroptionsobject)

#### Defined in

packages/schema/lib/applyValidator.d.ts:11

___

### FieldParserOptionsObject

Ƭ **FieldParserOptionsObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowExtraFields?` | `boolean` |
| `customErrorMessage?` | [`ValidationCustomMessage`](Backland.md#validationcustommessage) |
| `customMessage?` | [`ValidationCustomMessage`](Backland.md#validationcustommessage) |
| `exclude?` | `string`[] |
| `excludeInvalidListItems?` | `boolean` |
| `includeHidden?` | `boolean` |
| `partial?` | `boolean` |

#### Defined in

packages/schema/lib/applyValidator.d.ts:2

___

### FieldTypeErrorCode

Ƭ **FieldTypeErrorCode**: typeof [`FieldTypeErrorCodes`](Backland.md#fieldtypeerrorcodes)[`number`]

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:2

___

### FieldTypeName

Ƭ **FieldTypeName**: `Extract`<keyof [`FieldDefinitions`](Backland.md#fielddefinitions), `string`\>

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:113

___

### FieldTypeOptions

Ƭ **FieldTypeOptions**: [`ListDefinitionObject`](Backland.md#listdefinitionobject) & { `[K: string]`: `unknown`;  }

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:6

___

### FieldTypeParser

Ƭ **FieldTypeParser**<`Type`\>: (`input`: `any`, `config?`: [`FieldParserConfig`](Backland.md#fieldparserconfig)) => `Type`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Type declaration

▸ (`input`, `config?`): `Type`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `config?` | [`FieldParserConfig`](Backland.md#fieldparserconfig) |

##### Returns

`Type`

#### Defined in

packages/schema/lib/applyValidator.d.ts:12

___

### FilterConditions

Ƭ **FilterConditions**<`Doc`\>: { [K in keyof (AllFilterOperations & RootFilterOperators<Doc\>)]?: (AllFilterOperations & RootFilterOperators<Doc\>)[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:34

___

### FilterRecord

Ƭ **FilterRecord**<`Doc`\>: [`EntityFilters`](Backland.md#entityfilters)<`Doc`\> \| { `$and?`: [`RootFilterOperators`](Backland.md#rootfilteroperators)<`Doc`\>[``"$and"``] ; `$not?`: [`RootFilterOperators`](Backland.md#rootfilteroperators)<`Doc`\>[``"$not"``] ; `$or?`: [`RootFilterOperators`](Backland.md#rootfilteroperators)<`Doc`\>[``"$or"``] ; `_id?`: `string` ; `_id1?`: `string` ; `_id2?`: `string` ; `_id3?`: `string` ; `id?`: `string`  } & [`EntityFilters`](Backland.md#entityfilters)<`Doc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:38

___

### FinalFieldDefinition

Ƭ **FinalFieldDefinition**: { [K in FieldTypeName]: CommonFieldDefinition<K\> }[[`FieldTypeName`](Backland.md#fieldtypename)]

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:27

___

### FinalFieldDefinitionStrict

Ƭ **FinalFieldDefinitionStrict**: [`AllFinalFieldDefinitions`](Backland.md#allfinalfielddefinitions)[keyof [`AllFinalFieldDefinitions`](Backland.md#allfinalfielddefinitions)]

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:26

___

### FinalObjectDefinition

Ƭ **FinalObjectDefinition**: `Object`

#### Index signature

▪ [K: `string`]: [`FinalFieldDefinition`](Backland.md#finalfielddefinition)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:11

___

### FindByIdConfig

Ƭ **FindByIdConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Backland.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Backland.md#loadercontext) |
| `id` | `string` |
| `indexConfig` | [`CollectionIndexConfig`](Backland.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:97

___

### FindManyConfig

Ƭ **FindManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`IndexFilterRecord`](Backland.md#indexfilterrecord)<`PK`, `SK`\> extends infer R ? { [K in keyof R]: R[K] } : {} \| `string` |
| `condition?` | [`FilterRecord`](Backland.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Backland.md#loadercontext) |
| `filter` | [`MethodFilter`](Backland.md#methodfilter)<`PK`, `SK`\> |
| `first?` | `number` |
| `indexConfig` | [`CollectionIndexConfig`](Backland.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |
| `sort?` | [`QuerySort`](Backland.md#querysort) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:76

___

### FindManyResult

Ƭ **FindManyResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | `Doc`[] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:188

___

### FindOneConfig

Ƭ **FindOneConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Backland.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Backland.md#loadercontext) |
| `filter` | [`MethodFilter`](Backland.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Backland.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:89

___

### FindOneResult

Ƭ **FindOneResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `item` | `Doc` \| ``null`` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:140

___

### FlattenFieldDefinition

Ƭ **FlattenFieldDefinition**: { [type in FieldTypeName]: { [K in type]: [FieldDefinitions[K]] extends [undefined] ? FieldDefinitions[K] \| Object : FieldDefinitions[K] } }[[`FieldTypeName`](Backland.md#fieldtypename)] & [`CommonFieldOptions`](Backland.md#commonfieldoptions)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:30

___

### FloatFieldDef

Ƭ **FloatFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `number` |
| `min?` | `number` |

#### Defined in

packages/schema/lib/fields/FloatField.d.ts:2

___

### GraphQLSchemaWithUtils

Ƭ **GraphQLSchemaWithUtils**: `GraphQLSchema` & { `utils`: { `generateClientUtils`: () => `Promise`<`string`\> ; `grouped`: [`GroupedResolvers`](Backland.md#groupedresolvers) ; `print`: () => `string` ; `queryExamples`: (`options?`: [`ObjectMockOptions`](Backland.md#objectmockoptions) & { `resolver?`: `string`  }) => `string` ; `queryTemplates`: () => `SchemaQueryTemplatesResult` ; `registeredResolvers`: [`AnyResolver`](Backland.md#anyresolver)[] ; `resolvers`: [`AnyResolver`](Backland.md#anyresolver)[] ; `typescript`: (`options?`: [`ResolversToTypeScriptOptions`](Backland.md#resolverstotypescriptoptions)) => `Promise`<`string`\> ; `usedConfig`: `GraphQLSchemaConfig`  }  }

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:10

___

### GraphTypeArgs

Ƭ **GraphTypeArgs**<`Def`\>: [`string`, `Def` \| (`utils`: `BacklandModules`) => `Def`] \| [`Def` \| (`utils`: `BacklandModules`) => `Def`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) = [`ObjectFieldInput`](Backland.md#objectfieldinput) |

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:116

___

### GraphTypeKID

Ƭ **GraphTypeKID**: ``"__isGraphType"``

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:18

___

### GroupedResolvers

Ƭ **GroupedResolvers**: { [K in AnyResolver["kind"]]: undefined \| AnyResolver[] }

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:7

___

### IDFieldDef

Ƭ **IDFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoCreate?` | `boolean` |

#### Defined in

packages/schema/lib/fields/IDField.d.ts:2

___

### ImplementObject

Ƭ **ImplementObject**<`Dest`, `Extends`\>: `Extends` extends [] ? `Dest` : `Extends` extends [infer Item, ...(infer Rest)] ? `Dest` extends [`ObjectType`](../classes/Backland.ObjectType.md)<infer DestDef\> ? `Item` extends [`ObjectType`](../classes/Backland.ObjectType.md)<infer ItemDef\> ? [`ImplementObject`](Backland.md#implementobject)<[`ObjectType`](../classes/Backland.ObjectType.md)<{ [K in keyof Merge<ItemDef, DestDef\>]: Merge<ItemDef, DestDef\>[K] }\>, `Rest`\> : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Dest` |
| `Extends` |

#### Defined in

packages/schema/lib/implementObject.d.ts:5

___

### IndexBasedFilterParsed

Ƭ **IndexBasedFilterParsed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `indexFilter` | [`IndexFilterFound`](Backland.md#indexfilterfound) |
| `relationFilters` | [`RelationsFilter`](Backland.md#relationsfilter)[] \| `undefined` |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:16

___

### IndexFilter

Ƭ **IndexFilter**: { [K in keyof AllIndexFilter]?: AllIndexFilter[K] }

#### Defined in

packages/transporter/lib/Transporter.d.ts:57

___

### IndexFilterFound

Ƭ **IndexFilterFound**: { `_id?`: `string`  } & { [L in \`${string}PK\`]: string } & { [L in \`${string}SK\`]?: string \| FilterRecord }

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:4

___

### IndexFilterRecord

Ƭ **IndexFilterRecord**<`PK`, `SK`\>: { [K in PK]: Partial<AllIndexFilter\> \| PKSKValueType \| undefined } & { [K in SK as SK extends string ? SK : never]?: Partial<AllIndexFilter\> \| PKSKValueType }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:60

___

### IndexKeyHash

Ƭ **IndexKeyHash**<`Keys`\>: \`#${string}\` \| \`.${Extract<Keys, string\>}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Keys` | `string` |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:20

___

### IndexPartKind

Ƭ **IndexPartKind**: ``"PK"`` \| ``"SK"``

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:21

___

### Infer

Ƭ **Infer**<`Input`\>: `OnlyKnown`<`Input`\> extends infer Known ? `Known` extends `string` ? [`InferString`](Backland.md#inferstring)<`Known`\> : `Known` extends `object` ? [`$inferableKey`](Backland.md#$inferablekey-1) extends keyof `Known` ? `Known`[[`$inferableKey`](Backland.md#$inferablekey-1)] : [`_WithInferOptional`](Backland.md#_withinferoptional)<`Known`, [`_WithInferList`](Backland.md#_withinferlist)<`Known`, [`_InferField`](Backland.md#_inferfield)<`Known`\>\>\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:8

___

### InferFinalField

Ƭ **InferFinalField**<`TypeName`, `Def`\>: [`_InferFinalField`](Backland.md#_inferfinalfield)<`TypeName`, `Def`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TypeName` | extends [`FieldTypeName`](Backland.md#fieldtypename) |
| `Def` | `never` |

#### Defined in

packages/schema/lib/fields/Infer/InferFinalField.d.ts:6

___

### InferGraphType

Ƭ **InferGraphType**<`Input`\>: `Input` extends `unknown` ? `Input` extends [`GraphTypeLikeFieldDefinition`](../interfaces/Backland.GraphTypeLikeFieldDefinition.md) ? [`Infer`](Backland.md#infer)<`Input`[``"definition"``]\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/InferGraphType.d.ts:9

___

### InferObjectDefinition

Ƭ **InferObjectDefinition**<`Input`\>: [`Input`] extends [`object`] ? `NullableToPartial`<[`_InferObjectDefinition`](Backland.md#_inferobjectdefinition)<{ -readonly [K in keyof Input as K extends \`$${string}\` ? never : K]: Input[K] }\> & [`ParseSpecialObjectKeys`](Backland.md#parsespecialobjectkeys)<`Input`\>\> : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:11

___

### InferObjectType

Ƭ **InferObjectType**<`T`\>: `T` extends `unknown` ? `T` extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Backland.ObjectTypeLikeFieldDefinition.md) ? [`InferObjectDefinition`](Backland.md#inferobjectdefinition)<`T`[``"definition"``]\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:10

___

### InferRecordFieldType

Ƭ **InferRecordFieldType**<`Def`\>: `Def` extends { `keyType`: ``"int"`` \| ``"float"``  } ? { `[K: number]`: [`Infer`](Backland.md#infer)<`Def` extends { `type`: [`FieldDefinitionConfig`](Backland.md#fielddefinitionconfig)  } ? `Def`[``"type"``] : ``"any"``\>;  } : { `[K: string]`: [`Infer`](Backland.md#infer)<`Def` extends { `type`: [`FieldDefinitionConfig`](Backland.md#fielddefinitionconfig)  } ? `Def`[``"type"``] : ``"any"``\>;  }

#### Type parameters

| Name |
| :------ |
| `Def` |

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:10

___

### InferResolverArgs

Ƭ **InferResolverArgs**<`ArgsDef`\>: [`ArgsDef`] extends [`never`] ? `Record`<`string`, `unknown`\> : [`ArgsDef`] extends [`undefined`] ? `Record`<`string`, `unknown`\> : [`ArgsDef`] extends [{ `[K: string]`: `unknown`;  }] ? [`Infer`](Backland.md#infer)<{ `object`: `ArgsDef`  }\> : `Record`<`string`, `unknown`\>

#### Type parameters

| Name |
| :------ |
| `ArgsDef` |

#### Defined in

packages/schema/lib/Resolver.d.ts:8

___

### InferString

Ƭ **InferString**<`Input`\>: `Input` extends \`${infer Start}?\` ? [`InferString`](Backland.md#inferstring)<`Start`\> \| `undefined` : `Input` extends \`[${infer Start}]\` ? [`InferString`](Backland.md#inferstring)<`Start`\>[] : `Input` extends [`FieldTypeName`](Backland.md#fieldtypename) ? [`InferTypeName`](Backland.md#infertypename)<`Input`\> : `Input` extends \`[${infer Type}]\` ? [`InferString`](Backland.md#inferstring)<`Type`\>[] : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `string` |

#### Defined in

packages/schema/lib/fields/Infer/InferString.d.ts:2

___

### InferTypeName

Ƭ **InferTypeName**<`Type`\>: `Type` extends `unknown` ? `Type` extends [`FieldTypeName`](Backland.md#fieldtypename) ? `Type` extends ``"any"`` ? `any` : `Type` extends ``"boolean"`` ? `boolean` : `Type` extends ``"cursor"`` ? [`CursorType`](Backland.md#cursortype) : `Type` extends ``"phone"`` ? `string` : `Type` extends ``"null"`` ? ``null`` : `Type` extends ``"undefined"`` ? `undefined` : `Type` extends ``"unknown"`` ? `unknown` : `Type` extends ``"string"`` ? `string` : `Type` extends ``"date"`` ? `Date` : `Type` extends ``"email"`` ? `string` : `Type` extends ``"float"`` ? `number` : `Type` extends ``"record"`` ? { `[K: string]`: `any`;  } : `Type` extends ``"int"`` ? `number` : `Type` extends ``"ulid"`` ? `string` : `Type` extends ``"ID"`` ? `string` : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/fields/Infer/InferString.d.ts:3

___

### InnerDef

Ƭ **InnerDef**<`Input`\>: [`Input`] extends [`object`] ? [`DescribeField`](Backland.md#describefield)<`Input`\> extends infer R ? `IsKnown`<`R`\> extends ``1`` ? [`_InnerDef`](Backland.md#_innerdef)<`R`\> : [`DescribeObjectDefinition`](Backland.md#describeobjectdefinition)<`Input`\> : `never` : `never` extends infer R ? { [K in keyof R]: R[K] } & {} : {}

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:36

___

### IntFieldDef

Ƭ **IntFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `number` |
| `min?` | `number` |

#### Defined in

packages/schema/lib/fields/IntField.d.ts:2

___

### InvalidParsedIndexField

Ƭ **InvalidParsedIndexField**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `details` | `string` |
| `documentField` | `string` |
| `indexField` | [`AnyDocIndexItem`](Backland.md#anydocindexitem)[``"name"``] |
| `indexPartKind` | [`IndexPartKind`](Backland.md#indexpartkind) |
| `reason` | ``"missing"`` \| ``"invalid"`` |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:45

___

### LazyParseGraphTypePayload

Ƭ **LazyParseGraphTypePayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `definition` | [`FinalFieldDefinition`](Backland.md#finalfielddefinition) |
| `definitionInput` | [`ObjectFieldInput`](Backland.md#objectfieldinput) \| (`utils`: `BacklandModules`) => [`ObjectFieldInput`](Backland.md#objectfieldinput) |
| `field` | [`TAnyFieldType`](Backland.md#tanyfieldtype) |
| `id` | `string` \| `undefined` |
| `idFromArgs` | `string` \| `undefined` |
| `objectType?` | `any` |

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:108

___

### ListDefinition

Ƭ **ListDefinition**: [`ListDefinitionObject`](Backland.md#listdefinitionobject) \| `boolean`

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:24

___

### ListDefinitionObject

Ƭ **ListDefinitionObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `length?` | `number` |
| `max?` | `number` |
| `min?` | `number` |

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:19

___

### ListDefinitionTruthy

Ƭ **ListDefinitionTruthy**: [`ListDefinitionObject`](Backland.md#listdefinitionobject) \| ``true``

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:25

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

packages/transporter/lib/Transporter.d.ts:67

___

### MakeFieldOptional

Ƭ **MakeFieldOptional**<`Object`, `OptionalField`\>: [`OverrideField`](Backland.md#overridefield)<`Object`, `OptionalField`, { `optional`: ``true``  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Object` | extends `object` |
| `OptionalField` | extends `A.Key` |

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:42

___

### MakeFieldRequired

Ƭ **MakeFieldRequired**<`Object`, `OptionalField`\>: [`OverrideField`](Backland.md#overridefield)<`Object`, `OptionalField`, { `optional`: ``false``  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Object` | extends `object` |
| `OptionalField` | extends `A.Key` |

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:45

___

### MakeTypeList

Ƭ **MakeTypeList**<`Type`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `array` | { `of`: `Type`  } |
| `array.of` | `Type` |

#### Defined in

packages/schema/lib/extendType.d.ts:27

___

### MakeTypeOptional

Ƭ **MakeTypeOptional**<`Type`\>: [`DescribeAndOverrideField`](Backland.md#describeandoverridefield)<`Type`, { `optional`: ``true``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/extendType.d.ts:21

___

### MakeTypeRequired

Ƭ **MakeTypeRequired**<`Type`\>: [`DescribeAndOverrideField`](Backland.md#describeandoverridefield)<`Type`, { `optional`: ``false``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/extendType.d.ts:24

___

### MakeTypeSingle

Ƭ **MakeTypeSingle**<`Type`\>: [`DescribeAndOverrideField`](Backland.md#describeandoverridefield)<`Type`, { `list`: ``false``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/extendType.d.ts:32

___

### MetaFieldDef

Ƭ **MetaFieldDef**: `Object`

#### Index signature

▪ [K: `string`]: `Serializable`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `id` | `string` \| ``null`` |
| `implements?` | `string`[] |

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:3

___

### MethodFilter

Ƭ **MethodFilter**<`PK`, `SK`\>: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](Backland.md#indexfilterrecord)<`PK`, `SK`\> extends infer F ? `F` extends `unknown` ? { [K in keyof F]?: F[K] } & { `id?`: [`PKSKValueType`](Backland.md#pkskvaluetype)  } : {} : {}\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PK` | extends `string` |
| `SK` | extends `string` \| `undefined` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:71

___

### OHas

Ƭ **OHas**<`Obj`, `K`\>: `Obj` extends `object` ? `K` extends `string` ? `O.Has`<`Obj`, `K`\> : ``0`` : ``0``

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `K` |

#### Defined in

packages/schema/lib/fields/Infer/OHas.d.ts:2

___

### OPick

Ƭ **OPick**<`Obj`, `K`\>: `Obj` extends `unknown` ? `Obj` extends `object` ? `K` extends `unknown` ? `K` extends `string` ? `K` extends keyof `Obj` ? `Obj`[`K`] : `never` : `never` : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `K` |

#### Defined in

packages/schema/lib/fields/Infer/OHas.d.ts:3

___

### OWritable

Ƭ **OWritable**<`T`\>: `T` extends `object` ? `O.Writable`<`T`, `Extract`<keyof `T`, `string`\>, ``"deep"``\> : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/Infer/OHas.d.ts:4

___

### ObjectFieldInput

Ƭ **ObjectFieldInput**: [`_ObjectFieldInputBase`](Backland.md#_objectfieldinputbase) \| [`FlattenFieldDefinition`](Backland.md#flattenfielddefinition)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:5

___

### ObjectMockOptions

Ƭ **ObjectMockOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxArrayLength?` | `number` |
| `randomNumber?` | () => `number` |
| `randomText?` | () => `string` |

#### Defined in

packages/schema/lib/mockObject.d.ts:3

___

### ObjectTypeFromInput

Ƭ **ObjectTypeFromInput**<`DefinitionInput`\>: `IsKnown`<`DefinitionInput`\> extends ``1`` ? [`DefinitionInput`] extends [[`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)] ? [`ObjectType`](../classes/Backland.ObjectType.md)<`DefinitionInput`\> : `never` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)\> |

#### Defined in

packages/schema/lib/ObjectType.d.ts:115

___

### ObjectTypeKID

Ƭ **ObjectTypeKID**: ``"__isBacklandObject"``

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:17

___

### OneFilterOperation

Ƭ **OneFilterOperation**: { [K in keyof AllFilterOperations]: { [L in K]: AllFilterOperations[K] } }[keyof [`AllFilterOperations`](Backland.md#allfilteroperations)]

#### Defined in

packages/transporter/lib/Transporter.d.ts:24

___

### OptionalResolverConfig

Ƭ **OptionalResolverConfig**<`Source`, `Context`, `Args`\>: `Omit`<`GraphQLFieldConfig`<`Source`, `Context`, `Args`\>, ``"resolve"`` \| ``"args"`` \| ``"type"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | `any` |
| `Context` | `any` |
| `Args` | `any` |

#### Defined in

packages/schema/lib/Resolver.d.ts:38

___

### OverrideField

Ƭ **OverrideField**<`Object`, `Field`, `Extend`\>: { [K in keyof Object as K extends string ? K : never]: K extends Field ? SealedField<Omit<DescribeField<Object[K]\>, keyof Extend\> & Extend\> : Object[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Object` | extends `object` |
| `Field` | extends `A.Key` |
| `Extend` | extends `object` |

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:48

___

### PKSKValueType

Ƭ **PKSKValueType**: `string` \| `number` \| ``null``

#### Defined in

packages/transporter/lib/Transporter.d.ts:8

___

### PageInfo

Ƭ **PageInfo**: [`Infer`](Backland.md#infer)<typeof [`PageInfoType`](Backland.md#pageinfotype)\>

#### Defined in

packages/entity/lib/paginationUtils.d.ts:10

___

### PaginationResult

Ƭ **PaginationResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |

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

packages/transporter/lib/Transporter.d.ts:191

___

### PaginationType

Ƭ **PaginationType**<`T`\>: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: { `edges`: { `list`: ``true`` ; `type`: [`EdgeType`](Backland.md#edgetype)<`T`\>  } ; `pageInfo`: typeof [`PageInfoType`](Backland.md#pageinfotype)  }  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/entity/lib/paginationUtils.d.ts:17

___

### ParseFieldOptions

Ƭ **ParseFieldOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asString?` | `boolean` |
| `deep?` | { `asString?`: `boolean` ; `omitMeta?`: `boolean`  } |
| `deep.asString?` | `boolean` |
| `deep.omitMeta?` | `boolean` |
| `omitMeta?` | `boolean` |
| `returnInstance?` | `boolean` |

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:26

___

### ParseSpecialObjectKeys

Ƭ **ParseSpecialObjectKeys**<`T`\>: { -readonly [K in keyof T as K extends "$string" ? string : K extends "$number" ? number : never]: Infer<T[K]\> } & {}

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:14

___

### ParsedDocumentIndexes

Ƭ **ParsedDocumentIndexes**: { `error`: ``null`` ; `filtersFound?`: [`DocumentIndexFilterParsed`](Backland.md#documentindexfilterparsed)[] ; `firstIndex`: [`FirstIndexParsed`](../interfaces/Backland.FirstIndexParsed.md) ; `indexFields`: [`CommonIndexFields`](Backland.md#commonindexfields) ; `invalidFields`: ``null`` ; `parsedIndexKeys`: [`ParsedIndexKey`](Backland.md#parsedindexkey)[] ; `valid`: ``true``  } \| { `error`: [`CollectionErrors`](../classes/Backland.CollectionErrors.md) ; `firstIndex`: [`FirstIndexParsed`](../interfaces/Backland.FirstIndexParsed.md) \| ``null`` ; `indexFields`: ``null`` ; `invalidFields`: [`ParsedIndexPart`](Backland.md#parsedindexpart)[``"invalidFields"``] ; `parsedIndexKeys`: [`ParsedIndexKey`](Backland.md#parsedindexkey)[] ; `uniqIndexCondition?`: `undefined` ; `valid`: ``false``  }

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:101

___

### ParsedIndexFilterPart

Ƭ **ParsedIndexFilterPart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PKPartOpen` | `string` |
| `PKPartParsed` | [`ParsedIndexPart`](Backland.md#parsedindexpart) |
| `SKPartParsed` | [`ParsedIndexPart`](Backland.md#parsedindexpart) \| ``null`` |
| `entity` | `string` |
| `index` | [`DocumentIndexItem`](Backland.md#documentindexitem) |
| `indexFilter` | [`IndexFilterRecord`](Backland.md#indexfilterrecord) |

#### Defined in

packages/transporter/lib/parseFilterIndexFilterParts.d.ts:4

___

### ParsedIndexKey

Ƭ **ParsedIndexKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK` | { `definition`: `Readonly`<[`AnyDocIndexItem`](Backland.md#anydocindexitem)[``"PK"``]\> ; `destinationField`: { `key`: `string` ; `value`: `string`  } ; `parsed`: [`ParsedIndexPart`](Backland.md#parsedindexpart) ; `requiredFields`: `string`[]  } |
| `PK.definition` | `Readonly`<[`AnyDocIndexItem`](Backland.md#anydocindexitem)[``"PK"``]\> |
| `PK.destinationField` | { `key`: `string` ; `value`: `string`  } |
| `PK.destinationField.key` | `string` |
| `PK.destinationField.value` | `string` |
| `PK.parsed` | [`ParsedIndexPart`](Backland.md#parsedindexpart) |
| `PK.requiredFields` | `string`[] |
| `SK` | { `definition`: `Readonly`<[`AnyDocIndexItem`](Backland.md#anydocindexitem)[``"SK"``]\> ; `destinationField`: { `key`: `string` ; `value`: `string`  } ; `parsed`: [`ParsedIndexPart`](Backland.md#parsedindexpart) ; `requiredFields`: `string`[]  } |
| `SK.definition` | `Readonly`<[`AnyDocIndexItem`](Backland.md#anydocindexitem)[``"SK"``]\> |
| `SK.destinationField` | { `key`: `string` ; `value`: `string`  } |
| `SK.destinationField.key` | `string` |
| `SK.destinationField.value` | `string` |
| `SK.parsed` | [`ParsedIndexPart`](Backland.md#parsedindexpart) |
| `SK.requiredFields` | `string`[] |
| `entity` | `string` |
| `index` | [`AnyDocIndexItem`](Backland.md#anydocindexitem) |
| `indexFieldsParsed` | [`DocumentIndexFieldsParsed`](../interfaces/Backland.DocumentIndexFieldsParsed.md) |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:73

___

### ParsedIndexPart

Ƭ **ParsedIndexPart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK_SK` | ``"PK"`` \| ``"SK"`` |
| `conditionFound?` | [`OneFilterOperation`](Backland.md#onefilteroperation) |
| `foundEmptyCondition?` | `boolean` |
| `foundParts` | `string`[] |
| `fullIndexFound` | `string` \| ``null`` |
| `indexField` | [`AnyDocIndexItem`](Backland.md#anydocindexitem)[``"name"``] |
| `invalidFields` | [`InvalidParsedIndexField`](Backland.md#invalidparsedindexfield)[] |
| `isFilter` | `boolean` |
| `nullableFound?` | { `value`: ``null`` \| `undefined`  } |
| `nullableFound.value` | ``null`` \| `undefined` |
| `requiredFields` | `string`[] |
| `valid` | `boolean` |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:52

___

### ParsedUpdateExpression

Ƭ **ParsedUpdateExpression**<`TSchema`\>: [`UpdateExpression`](Backland.md#updateexpression)<`TSchema`\> extends infer UX ? keyof `UX` extends infer OP ? `OP` extends keyof `UX` ? `UX`[`OP`] extends infer V ? { `entries`: [`Join`<`NestedPaths`<`TSchema`\>, ``"."``\>, `V`][] ; `operator`: `OP` ; `valueConstructorName`: `string`  } : `any` : `any` : `any` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | `Record`<`string`, `any`\> |

#### Defined in

packages/transporter/lib/parseUpdateExpression.d.ts:4

___

### QuerySort

Ƭ **QuerySort**: ``"ASC"`` \| ``"DESC"``

#### Defined in

packages/transporter/lib/Transporter.d.ts:66

___

### RecordFieldDef

Ƭ **RecordFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `keyType?` | `ValidKeyType` |
| `type?` | [`FieldDefinitionConfig`](Backland.md#fielddefinitionconfig) |

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:6

___

### RelationsFilter

Ƭ **RelationsFilter**: `Object`

#### Index signature

▪ [k: `string`]: { `$startsWith`: \`${string}⊰\`  }

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:11

___

### Resolver

Ƭ **Resolver**<`Context`, `Root`, `Type`, `Args`\>: `Compute`<[`OptionalResolverConfig`](Backland.md#optionalresolverconfig)<`Root`, `Context`, `Args`\> & { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `Args`, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Type`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  }, ``1``\>

#### Type parameters

| Name |
| :------ |
| `Context` |
| `Root` |
| `Type` |
| `Args` |

#### Defined in

packages/schema/lib/Resolver.d.ts:16

___

### ResolverContextBase

Ƭ **ResolverContextBase**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Defined in

packages/schema/lib/Resolver.d.ts:5

___

### ResolverKind

Ƭ **ResolverKind**: typeof `resolverKinds.enum`

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:34

___

### ResolverResolve

Ƭ **ResolverResolve**<`Context`, `Source`, `TypeDef`, `ArgsDef`\>: (`x`: [`InferResolverArgs`](Backland.md#inferresolverargs)<`ArgsDef`\>) => `any` extends (`x`: infer R) => `any` ? { [K in keyof R]: R[K] } : `never` extends infer Args ? (`x`: [`Infer`](Backland.md#infer)<`TypeDef`\>) => `any` extends (`x`: infer R) => `any` ? (`parent`: `Compute`<`Source`\>, `args`: `Compute`<`Args`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `IsKnown`<`R`\> extends ``1`` ? `Compute`<`Promise`<`R`\> \| `R`\> : `any` : (`parent`: `Source`, `args`: `Record`<`string`, `unknown`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `Promise`<`any`\> \| `any` : `never` extends infer R ? `R` : `never`

#### Type parameters

| Name |
| :------ |
| `Context` |
| `Source` |
| `TypeDef` |
| `ArgsDef` |

#### Defined in

packages/schema/lib/Resolver.d.ts:33

___

### ResolversToTypeScriptOptions

Ƭ **ResolversToTypeScriptOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `ObjectToTypescriptOptions` |
| `resolvers` | [`AnyResolver`](Backland.md#anyresolver)[] |

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:39

___

### RootFilterOperators

Ƭ **RootFilterOperators**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = `Record`<`string`, `any`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$and?` | [`FilterRecord`](Backland.md#filterrecord)<`Doc`\>[] |
| `$not?` | [`FilterRecord`](Backland.md#filterrecord)<`Doc`\> |
| `$or?` | [`FilterRecord`](Backland.md#filterrecord)<`Doc`\>[] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:29

___

### Seal

Ƭ **Seal**<`T`\>: `Merge`<`T`, { `$sealed`: [`$sealedDef`](Backland.md#$sealeddef)  }\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:24

___

### SealedField

Ƭ **SealedField**<`D`\>: ``"type"`` extends keyof `D` ? [`Seal`](Backland.md#seal)<`Merge`<[`CommonDefSafe`](Backland.md#commondefsafe), `D`\>\> : `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:18

___

### ShortenFinalFieldDefinition

Ƭ **ShortenFinalFieldDefinition**: { [Type in FieldTypeName]: { [K in \_ShortenFinalFieldDefinitionFieldAsString<Type\>]: K \| { [L in K]: FieldDefinitions[Type] \| Object } }[\_ShortenFinalFieldDefinitionFieldAsString<Type\>] }[[`FieldTypeName`](Backland.md#fieldtypename)]

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:37

___

### SpecialObjectKeys

Ƭ **SpecialObjectKeys**: typeof `SpecialObjectKeyEnum.enum`

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:64

___

### StringFieldDef

Ƭ **StringFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `number` |
| `min?` | `number` |
| `regex?` | [`string`] \| [`string`, `string`] \| `Readonly`<[`string`, `string`] \| [`string`]\> |

#### Defined in

packages/schema/lib/fields/StringField.d.ts:2

___

### TAnyFieldType

Ƭ **TAnyFieldType**: [`AllFieldTypes`](Backland.md#allfieldtypes)[keyof [`AllFieldTypes`](Backland.md#allfieldtypes)]

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:69

___

### TSFYConfig

Ƭ **TSFYConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `context?` | [`TSFYContext`](Backland.md#tsfycontext) |
| `customParser?` | [`TSFYCustomHandler`](../interfaces/Backland.TSFYCustomHandler.md) |
| `groupInTypeThreshold?` | `number` |
| `iterationLimit?` | `number` |
| `many?` | `boolean` |

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:5

___

### TSFYContext

Ƭ **TSFYContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | `PartialRequired`<[`TSFYConfig`](Backland.md#tsfyconfig), ``"customParser"``\> |
| `header` | `Record`<`string`, `string`\> |
| `refs` | `Record`<`string`, [`TSFYRef`](Backland.md#tsfyref)\> |

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:26

___

### TSFYPart

Ƭ **TSFYPart**: `string` \| [`TSFYRef`](Backland.md#tsfyref) \| [`TSFYPart`](Backland.md#tsfypart)[]

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:17

___

### TSFYRef

Ƭ **TSFYRef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `hash` | `string` |
| `identifier` | `string` \| `undefined` |
| `parts` | [`TSFYPart`](Backland.md#tsfypart)[] |
| `result?` | `string` |

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:19

___

### TSFyChunkDefinition

Ƭ **TSFyChunkDefinition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `functionArguments?` | [`TSFyTypeDef`](Backland.md#tsfytypedef)[] |
| `functionResult?` | [`TSFyTypeDef`](Backland.md#tsfytypedef) |
| `identifier?` | `string` |
| `value?` | `string` |

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:33

___

### TSFyHandlerUtils

Ƭ **TSFyHandlerUtils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `context` | [`TSFYContext`](Backland.md#tsfycontext) |
| `currentRef` | [`TSFYRef`](Backland.md#tsfyref) |
| `existing` | [`TSFYRef`](Backland.md#tsfyref) \| `undefined` |
| `hash` | `string` |
| `identifier` | `string` \| `undefined` |
| `typeDescription` | `TypeDescription` |
| `value` | `any` |

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:43

___

### TSFyTypeDef

Ƭ **TSFyTypeDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | ([`TSFyChunkDefinition`](Backland.md#tsfychunkdefinition) \| `string`)[] |
| `header?` | `Record`<`string`, `string`\> |

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:39

___

### TopLevelFilterKey

Ƭ **TopLevelFilterKey**: typeof [`TopLevelFilterKeys`](Backland.md#toplevelfilterkeys)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:166

___

### TransporterFieldType

Ƭ **TransporterFieldType**: typeof [`FieldTypes`](Backland.md#fieldtypes)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:7

___

### TransporterLoader

Ƭ **TransporterLoader**: [`TransporterLoadersRecord`](Backland.md#transporterloadersrecord)[[`TransporterLoaderName`](Backland.md#transporterloadername)]

#### Defined in

packages/transporter/lib/Transporter.d.ts:224

___

### TransporterLoaderName

Ƭ **TransporterLoaderName**: typeof [`transporterLoaderNames`](Backland.md#transporterloadernames)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:220

___

### TransporterLoadersRecord

Ƭ **TransporterLoadersRecord**: { [K in TransporterLoaderName]: Transporter[K] }

#### Defined in

packages/transporter/lib/Transporter.d.ts:221

___

### Types

Ƭ **Types**: typeof [`types`](Backland.md#types-1)

#### Defined in

packages/schema/lib/fields/fieldTypes.d.ts:68

___

### UnknownFieldDef

Ƭ **UnknownFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `types?` | `string`[] \| `string` |

#### Defined in

packages/schema/lib/fields/UnknownField.d.ts:2

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
| `$addToSet?` | [`ArrayOperationRecord`](Backland.md#arrayoperationrecord)<`TSchema`\> |
| `$append?` | [`ArrayOperationRecord`](Backland.md#arrayoperationrecord)<`TSchema`\> |
| `$inc?` | `UpdateDefinition`<`TSchema`\>[``"$inc"``] |
| `$prepend?` | [`ArrayOperationRecord`](Backland.md#arrayoperationrecord)<`TSchema`\> |
| `$pull?` | [`ArrayOperationRecord`](Backland.md#arrayoperationrecord)<`TSchema`, ``"$in"``\> |
| `$remove?` | `MaybeArray`<\`${Join<NestedPaths<TSchema\>, "."\>}${\`.${string}\` \| ""}\`\> |
| `$set?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |
| `$setIfNull?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |
| `$setOnInsert?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:148

___

### UpdateExpressionKey

Ƭ **UpdateExpressionKey**: `Extract`<keyof [`UpdateExpression`](Backland.md#updateexpression)<`any`\>, `string`\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:159

___

### UpdateManyConfig

Ƭ **UpdateManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Backland.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Backland.md#loadercontext) |
| `filter` | [`MethodFilter`](Backland.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Backland.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `update` | [`UpdateExpression`](Backland.md#updateexpression)<`Doc`\> |
| `upsert?` | `boolean` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:120

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

packages/transporter/lib/Transporter.d.ts:179

___

### UpdateOneConfig

Ƭ **UpdateOneConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Backland.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Backland.md#loadercontext) |
| `filter` | [`MethodFilter`](Backland.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Backland.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `update` | [`UpdateExpression`](Backland.md#updateexpression)<`Doc`\> |
| `upsert?` | `boolean` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:112

___

### UpdateOneResult

Ƭ **UpdateOneResult**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](Backland.md#documentbase) = [`DocumentBase`](Backland.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `created` | `boolean` |
| `error?` | `string` \| ``null`` |
| `item` | `T` \| ``null`` |
| `updated` | `boolean` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:173

___

### ValidationCustomMessage

Ƭ **ValidationCustomMessage**: `string` \| (`value`: `any`, `originalError`: `Error`) => `string` \| `Error`

#### Defined in

packages/schema/lib/applyValidator.d.ts:1

___

### \_AllOptional

Ƭ **\_AllOptional**<`Input`\>: [`MakeFieldOptional`](Backland.md#makefieldoptional)<[`DescribeObjectDefinition`](Backland.md#describeobjectdefinition)<`Input`\>, keyof `Input`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:75

___

### \_AnyEntity

Ƭ **\_AnyEntity**: [`EntityFromContext`](../interfaces/Backland.EntityFromContext.md)<[`EntityTypesContext`](../interfaces/Backland.EntityTypesContext.md)<{}, [`DocumentIndexItem`](Backland.md#documentindexitem)[]\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/Entity.d.ts:7

___

### \_DescribeField

Ƭ **\_DescribeField**<`Input`\>: `OnlyKnown`<`Input`\> extends infer Known ? `Known` extends `string` ? `ParseStringDefinition`<`Known`\> : `Known` extends `object` ? [`_DescribeObject`](Backland.md#_describeobject)<`Known`\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:17

___

### \_DescribeObject

Ƭ **\_DescribeObject**<`Input`\>: [`_FieldKV`](Backland.md#_fieldkv)<`Input`\> extends [infer K, infer V] ? `K` extends keyof `Input` ? `K` extends [`GraphTypeKID`](Backland.md#graphtypekid) ? ``"definition"`` extends keyof `Input` ? [`DescribeField`](Backland.md#describefield)<`Input`[``"definition"``]\> : `never` : `K` extends [`ObjectTypeKID`](Backland.md#objecttypekid) ? ``"definition"`` extends keyof `Input` ? { `def`: [`DescribeObjectDefinition`](Backland.md#describeobjectdefinition)<`Input`[``"definition"``]\> ; `list`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"optional"``\> ; `type`: ``"object"``  } : `never` : `K` extends [`FieldTypeName`](Backland.md#fieldtypename) ? { `def`: `V` ; `list`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"optional"``\> ; `type`: `K`  } : `K` extends ``"type"`` ? `V` extends [`FieldTypeName`](Backland.md#fieldtypename) ? { `def`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"def"``\> ; `list`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"optional"``\> ; `type`: `V`  } : `Input`[`K`] extends [`GraphTypeLikeFieldDefinition`](../interfaces/Backland.GraphTypeLikeFieldDefinition.md) ? `Merge`<[`DescribeField`](Backland.md#describefield)<`Input`[`K`][``"definition"``]\>, [`_OmitUndefined`](Backland.md#_omitundefined)<{ `list`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"optional"``\>  }\>\> : `Input`[`K`] extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Backland.ObjectTypeLikeFieldDefinition.md) ? { `def`: [`DescribeObjectDefinition`](Backland.md#describeobjectdefinition)<`Input`[`K`][``"definition"``]\> ; `list`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Backland.md#_getkey)<`Input`, ``"optional"``\> ; `type`: ``"object"``  } : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:38

___

### \_EntityLoaderMethods

Ƭ **\_EntityLoaderMethods**<`Context`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](Backland.md#anyentitytypescontext) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createOne` | [`CreateOne`](../interfaces/Backland.CreateOne.md)<`Context`[``"documentCreationInput"``], `Context`[``"document"``], `Context`[``"indexes"``]\> |
| `deleteMany` | [`DeleteMany`](../interfaces/Backland.DeleteMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `deleteOne` | [`DeleteOne`](../interfaces/Backland.DeleteOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findById` | [`FindById`](../interfaces/Backland.FindById.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findMany` | [`FindMany`](../interfaces/Backland.FindMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findOne` | [`FindOne`](../interfaces/Backland.FindOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `paginate` | [`Paginate`](../interfaces/Backland.Paginate.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `updateMany` | [`UpdateMany`](../interfaces/Backland.UpdateMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `updateOne` | [`UpdateOne`](../interfaces/Backland.UpdateOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:28

___

### \_EntityLoaders

Ƭ **\_EntityLoaders**<`E`\>: { [M in TransporterLoaderName]: E[M] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Record`<`string`, `any`\> |

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:18

___

### \_ExcludeExtend

Ƭ **\_ExcludeExtend**<`E`\>: { [K in keyof E as K extends \_ExtendMethodKeys ? never : K]: E[K] } & {}

#### Type parameters

| Name |
| :------ |
| `E` |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:72

___

### \_ExtendMethodKeys

Ƭ **\_ExtendMethodKeys**: ``"addHooks"`` \| ``"addRelation"`` \| ``"extend"``

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:71

___

### \_FieldKV

Ƭ **\_FieldKV**<`Input`\>: keyof `Input` extends infer K ? `K` extends `unknown` ? `K` extends keyof `Input` ? `K` extends [`FieldInputLikeRequiredKey`](Backland.md#fieldinputlikerequiredkey) ? [`K`, `Input`[`K`]] : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:16

___

### \_GetAliasFields

Ƭ **\_GetAliasFields**<`Input`\>: { [K in keyof Input as keyof Input[K] extends "alias" ? K : "type" extends keyof Input[K] ? "alias" extends Input[K]["type"] ? K : never : never]: Input[K] } & {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:20

___

### \_GetKey

Ƭ **\_GetKey**<`T`, `Key`\>: `GetFieldByDotNotation`<`T`, `Key`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Key` | extends `string` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:19

___

### \_GetLoaderFilterDef

Ƭ **\_GetLoaderFilterDef**<`LoaderConfig`, `DocDef`\>: `LoaderConfig` extends { `filter`: infer Filter  } ? { [K in keyof Filter as K extends keyof DocDef ? K : never]: K extends keyof DocDef ? Omit<DescribeField<DocDef[K]\>, "optional"\> & Object : never } extends infer Def ? { [K in keyof Def]: Def[K] } : {} : {}

#### Type parameters

| Name |
| :------ |
| `LoaderConfig` |
| `DocDef` |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:39

___

### \_GetParts

Ƭ **\_GetParts**: () => `Promise`<{ `body`: `string` ; `footer`: `Set`<`string`\> ; `header`: `Set`<`string`\>  }\>

#### Type declaration

▸ (): `Promise`<{ `body`: `string` ; `footer`: `Set`<`string`\> ; `header`: `Set`<`string`\>  }\>

##### Returns

`Promise`<{ `body`: `string` ; `footer`: `Set`<`string`\> ; `header`: `Set`<`string`\>  }\>

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:55

___

### \_InferAlias

Ƭ **\_InferAlias**<`Input`, `Parent`\>: `Input` extends `string` ? `GetFieldByDotNotation`<`Parent`, `Input`\> : `Input` extends `object` ? keyof `Input` extends infer K ? `K` extends `unknown` ? `K` extends keyof `Input` ? `K` extends ``"type"`` ? [`Infer`](Backland.md#infer)<`Input`[`K`]\> : `K` extends ``"alias"`` ? [`_InferAlias`](Backland.md#_inferalias)<`Input`[`K`], `Parent`\> : `never` : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `Input` |
| `Parent` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:23

___

### \_InferAliasFields

Ƭ **\_InferAliasFields**<`AliasFields`, `Parent`\>: { [K in keyof AliasFields]: \_InferAlias<AliasFields[K], Parent\> } & {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AliasFields` | extends `object` |
| `Parent` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:24

___

### \_InferField

Ƭ **\_InferField**<`Input`\>: [`_FieldKV`](Backland.md#_fieldkv)<`Input`\> extends [infer K, infer V] ? `K` extends keyof `Input` ? `K` extends [`GraphTypeKID`](Backland.md#graphtypekid) ? [`InferGraphType`](Backland.md#infergraphtype)<`Input`\> : `K` extends [`ObjectTypeKID`](Backland.md#objecttypekid) ? [`InferObjectType`](Backland.md#inferobjecttype)<`Input`\> : `K` extends [`FieldTypeName`](Backland.md#fieldtypename) ? [`InferFinalField`](Backland.md#inferfinalfield)<`K`, `V`\> : `K` extends ``"type"`` ? `V` extends [`FieldTypeName`](Backland.md#fieldtypename) ? [`InferFinalField`](Backland.md#inferfinalfield)<`V`, [`_GetKey`](Backland.md#_getkey)<`Input`, ``"def"``\>\> : `Input`[`K`] extends [`GraphTypeLikeFieldDefinition`](../interfaces/Backland.GraphTypeLikeFieldDefinition.md) ? [`InferGraphType`](Backland.md#infergraphtype)<`Input`[`K`]\> : `Input`[`K`] extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Backland.ObjectTypeLikeFieldDefinition.md) ? [`InferObjectType`](Backland.md#inferobjecttype)<`Input`[`K`]\> : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:9

___

### \_InferFinalField

Ƭ **\_InferFinalField**<`TypeName`, `Def`\>: `TypeName` extends ``"literal"`` ? `Def` : `TypeName` extends ``"array"`` ? [`Def`] extends [`ArrayFieldDef`<infer Of\>] ? [`Infer`](Backland.md#infer)<`Of`\>[] : `never` : `TypeName` extends ``"object"`` ? [`Def`] extends [`object`] ? [`InferObjectDefinition`](Backland.md#inferobjectdefinition)<`Def`\> : `never` : `TypeName` extends ``"enum"`` ? [`Def`] extends [`ReadonlyArray`<infer Item\>] ? `Item` : `never` : `TypeName` extends ``"union"`` ? [`Def`] extends [`ReadonlyArray`<infer Item\>] ? [`Infer`](Backland.md#infer)<`Item`\> : `never` : `TypeName` extends ``"record"`` ? [`Def`] extends [{ `keyType?`: infer KeyType ; `type?`: infer Type  }] ? { [K in KeyType extends "int" \| "float" ? number : string]: Infer<Type\> } : { `[K: string]`: `any`;  } : `TypeName` extends ``"literal"`` ? `Def` : [`InferTypeName`](Backland.md#infertypename)<`TypeName`\>

#### Type parameters

| Name |
| :------ |
| `TypeName` |
| `Def` |

#### Defined in

packages/schema/lib/fields/Infer/InferFinalField.d.ts:7

___

### \_InferObjectDefinition

Ƭ **\_InferObjectDefinition**<`Input`\>: [`_GetAliasFields`](Backland.md#_getaliasfields)<`Input`\> extends infer Aliases ? { [K in Exclude<keyof Input, keyof Aliases\>]: Infer<Input[K]\> } & [`_InferSpecialObjectKeys`](Backland.md#_inferspecialobjectkeys)<`Input`\> extends infer Parent ? [`_InferAliasFields`](Backland.md#_inferaliasfields)<`Cast`<`Aliases`, `object`\>, `Cast`<`Parent`, `object`\>\> & `Parent` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:17

___

### \_InferSpecialObjectKeys

Ƭ **\_InferSpecialObjectKeys**<`T`\>: { -readonly [K in keyof T as K extends "$string" ? string : K extends "$number" ? number : never]: Infer<T[K]\> } & {}

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:27

___

### \_InnerDef

Ƭ **\_InnerDef**<`R`\>: ``"type"`` extends keyof `R` ? ``"def"`` extends keyof `R` ? `R`[``"type"``] extends ``"object"`` ? `R`[``"def"``] extends `object` ? [`DescribeObjectDefinition`](Backland.md#describeobjectdefinition)<`R`[``"def"``]\> : `never` : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `R` |

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:41

___

### \_ObjectFieldInputBase

Ƭ **\_ObjectFieldInputBase**: [`GraphTypeLikeFieldDefinition`](../interfaces/Backland.GraphTypeLikeFieldDefinition.md) \| [`ObjectTypeLikeFieldDefinition`](../interfaces/Backland.ObjectTypeLikeFieldDefinition.md) \| [`ObjectInTypeFieldDefinition`](../interfaces/Backland.ObjectInTypeFieldDefinition.md) \| [`GraphTypeInTypeFieldDefinition`](../interfaces/Backland.GraphTypeInTypeFieldDefinition.md) \| [`FinalFieldDefinition`](Backland.md#finalfielddefinition) \| [`FieldAsString`](Backland.md#fieldasstring)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:6

___

### \_OmitUndefined

Ƭ **\_OmitUndefined**<`T`\>: { [K in keyof T as T[K] extends undefined ? never : K]: T[K] } & {}

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:62

___

### \_ResolverArgs

Ƭ **\_ResolverArgs**<`ArgsType`\>: `Exclude`<`ArgsType`, `undefined`\> extends infer R ? `IsKnown`<`R`\> extends ``1`` ? [`Infer`](Backland.md#infer)<{ `object`: `R`  }\> : {} : {}

#### Type parameters

| Name |
| :------ |
| `ArgsType` |

#### Defined in

packages/schema/lib/Resolver.d.ts:69

___

### \_ShortenFinalFieldDefinitionFieldAsString

Ƭ **\_ShortenFinalFieldDefinitionFieldAsString**<`T`\>: `T` \| \`${T}?\` \| \`[${T}]\` \| \`[${T}]?\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FieldTypeName`](Backland.md#fieldtypename) |

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:36

___

### \_ToString

Ƭ **\_ToString**: (`options?`: { `name?`: `string` ; `prettier?`: `boolean` ; `wrapper?`: [`string`, `string`]  }) => `Promise`<`string`\>

#### Type declaration

▸ (`options?`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.name?` | `string` |
| `options.prettier?` | `boolean` |
| `options.wrapper?` | [`string`, `string`] |

##### Returns

`Promise`<`string`\>

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:60

___

### \_WithInferList

Ƭ **\_WithInferList**<`FieldDefinition`, `InferredValue`\>: [``true``] extends [[`_GetKey`](Backland.md#_getkey)<`FieldDefinition`, ``"list"``\>] ? `InferredValue`[] : `InferredValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FieldDefinition` | extends `object` |
| `InferredValue` | `InferredValue` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:13

___

### \_WithInferOptional

Ƭ **\_WithInferOptional**<`FieldDefinition`, `InferredValue`\>: [``true``] extends [[`_GetKey`](Backland.md#_getkey)<`FieldDefinition`, ``"optional"``\>] ? `InferredValue` \| `undefined` : `InferredValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FieldDefinition` | extends `object` |
| `InferredValue` | `InferredValue` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:10

## Variables

### $inferableKey

• `Const` **$inferableKey**: ``"___inferable"``

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:12

packages/schema/lib/fields/Infer/DescribeField.d.ts:13

___

### $sealed

• `Const` **$sealed**: unique `symbol`

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:10

packages/schema/lib/fields/Infer/DescribeField.d.ts:11

___

### $sealedKey

• `Const` **$sealedKey**: ``"___sealed"``

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:8

packages/schema/lib/fields/Infer/DescribeField.d.ts:9

___

### AttributeFilterKeys

• `Const` **AttributeFilterKeys**: [``"$eq"``, ``"$ne"``, ``"$lte"``, ``"$lt"``, ``"$gt"``, ``"$gte"``, ``"$between"``, ``"$exists"``, ``"$type"``, ``"$startsWith"``, ``"$contains"``, ``"$matchString"``, ``"$in"``]

#### Defined in

packages/transporter/lib/Transporter.d.ts:163

___

### BacklandObject

• `Const` **BacklandObject**: typeof [`ObjectType`](../classes/Backland.ObjectType.md)

#### Defined in

packages/schema/lib/ObjectType.d.ts:114

___

### CACHED\_FIELD\_INSTANCE\_KEY

• `Const` **CACHED\_FIELD\_INSTANCE\_KEY**: ``"__cachedFieldInstance"``

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:48

___

### CircularDeps

• `Const` **CircularDeps**: `BacklandModules`

#### Defined in

packages/schema/lib/CircularDeps.d.ts:97

___

### DEFAULT\_SORT

• `Const` **DEFAULT\_SORT**: ``"ASC"``

#### Defined in

packages/transporter/lib/Transporter.d.ts:6

___

### EntityErrorKind

• `Const` **EntityErrorKind**: { `EMPTY_FILTER`: ``"EMPTY_FILTER"`` ; `INVALID_FIELDS`: ``"INVALID_FIELDS"`` ; `INVALID_FILTER`: ``"INVALID_FILTER"`` ; `INVALID_INDEX_KEY`: ``"INVALID_INDEX_KEY"``  } & { `list`: (``"INVALID_FIELDS"`` \| ``"INVALID_INDEX_KEY"`` \| ``"EMPTY_FILTER"`` \| ``"INVALID_FILTER"``)[]  } & { `enum`: ``"INVALID_FIELDS"`` \| ``"INVALID_INDEX_KEY"`` \| ``"EMPTY_FILTER"`` \| ``"INVALID_FILTER"``  }

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:2

packages/transporter/lib/CollectionErrors.d.ts:28

___

### EntityHooksCreateDefinitionKind

• `Const` **EntityHooksCreateDefinitionKind**: [``"inputDefinition"``, ``"outputDefinition"``, ``"databaseDefinition"``, ``"updateDefinition"``]

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:12

packages/entity/lib/EntityPlugin.d.ts:13

___

### EntityStore

• `Const` **EntityStore**: `Store`

#### Defined in

packages/entity/lib/EntityStore.d.ts:2

___

### FieldTypeErrorCodes

• `Const` **FieldTypeErrorCodes**: [``"minSize"``, ``"maxSize"``, ``"regexMismatch"``, ``"sizeMismatch"``, ``"unexpected"``, ``"unexpectedType"``, ``"custom"``, ``"invalidPhone"``, ``"requiredField"``]

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:1

___

### FieldTypes

• `Const` **FieldTypes**: [``"String"``, ``"Number"``, ``"Binary"``, ``"Boolean"``, ``"Null"``, ``"List"``, ``"Map"``, ``"StringSet"``, ``"NumberSet"``]

#### Defined in

packages/transporter/lib/Transporter.d.ts:5

___

### FieldsTypeCache

• `Const` **FieldsTypeCache**: `Map`<`string`, { `defKeys`: `string`[] \| `undefined` ; `fieldType`: [`TAnyFieldType`](Backland.md#tanyfieldtype)  }\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:14

___

### FilterConditionsParsers

• `Const` **FilterConditionsParsers**: { [K in keyof FilterConditions]-?: Function }

#### Defined in

packages/transporter/lib/Transporter.d.ts:160

___

### PageInfoType

• `Const` **PageInfoType**: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: { `endCursor`: ``"string?"`` ; `hasNextPage`: ``"boolean"`` ; `hasPreviousPage`: ``"boolean"`` ; `startCursor`: ``"string?"``  }  }\>

#### Defined in

packages/entity/lib/paginationUtils.d.ts:2

___

### SpecialObjectKeyEnum

• `Const` **SpecialObjectKeyEnum**: { `$number`: ``"$number"`` ; `$string`: ``"$string"``  } & { `list`: (``"$string"`` \| ``"$number"``)[]  } & { `enum`: ``"$string"`` \| ``"$number"``  }

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:56

___

### TopLevelFilterKeys

• `Const` **TopLevelFilterKeys**: [``"$not"``, ``"$or"``, ``"$and"``]

#### Defined in

packages/transporter/lib/Transporter.d.ts:165

___

### ULID\_REGEX

• `Const` **ULID\_REGEX**: `RegExp`

#### Defined in

packages/schema/lib/fields/UlidField.d.ts:5

___

### \_parserHooks

• `Const` **\_parserHooks**: [`ParserHook`](../interfaces/Backland.ParserHook.md)[]

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:10

___

### create

• `Const` **create**: [`FieldCreators`](Backland.md#fieldcreators)

#### Defined in

packages/schema/lib/fields/fieldTypes.d.ts:72

___

### defaultTypesDest

• `Const` **defaultTypesDest**: `string`

#### Defined in

packages/schema/lib/tsfy/tsfyWriter.d.ts:3

___

### indexConfigSchema

• `Const` **indexConfigSchema**: `ObjectType`

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:240

___

### indexItemSchema

• `Const` **indexItemSchema**: `ObjectType`

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:141

___

### isFieldTypeName

• `Const` **isFieldTypeName**: `any`

#### Defined in

packages/schema/lib/fields/fieldTypes.d.ts:73

___

### objectMetaFieldKey

• `Const` **objectMetaFieldKey**: ``"__dschm__"``

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:15

___

### relationSchema

• `Const` **relationSchema**: `ObjectType`

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:118

___

### resolverKinds

• `Const` **resolverKinds**: { `mutation`: ``"mutation"`` ; `query`: ``"query"`` ; `subscription`: ``"subscription"``  } & { `list`: (``"query"`` \| ``"mutation"`` \| ``"subscription"``)[]  } & { `enum`: ``"query"`` \| ``"mutation"`` \| ``"subscription"``  }

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:25

___

### transporterLoaderNames

• `Const` **transporterLoaderNames**: [``"createOne"``, ``"findById"``, ``"findMany"``, ``"findOne"``, ``"updateOne"``, ``"updateMany"``, ``"deleteOne"``, ``"deleteMany"``, ``"paginate"``]

#### Defined in

packages/transporter/lib/Transporter.d.ts:219

___

### tsfy\_defaults

• `Const` **tsfy\_defaults**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `iterationLimit` | `number` |

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:2

___

### types

• `Const` **types**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ID` | typeof [`IDField`](../classes/Backland.IDField.md) |
| `alias` | typeof [`AliasField`](../classes/Backland.AliasField.md) |
| `any` | typeof [`AnyField`](../classes/Backland.AnyField.md) |
| `array` | typeof `ArrayField` |
| `boolean` | typeof [`BooleanField`](../classes/Backland.BooleanField.md) |
| `cursor` | typeof [`CursorField`](../classes/Backland.CursorField.md) |
| `date` | typeof [`DateField`](../classes/Backland.DateField.md) |
| `email` | typeof [`EmailField`](../classes/Backland.EmailField.md) |
| `enum` | typeof [`EnumField`](../classes/Backland.EnumField.md) |
| `float` | typeof [`FloatField`](../classes/Backland.FloatField.md) |
| `int` | typeof [`IntField`](../classes/Backland.IntField.md) |
| `literal` | typeof [`LiteralField`](../classes/Backland.LiteralField.md) |
| `meta` | typeof [`MetaField`](../classes/Backland.MetaField.md) |
| `null` | typeof [`NullField`](../classes/Backland.NullField.md) |
| `object` | typeof [`ObjectField`](../classes/Backland.ObjectField.md) |
| `phone` | typeof `PhoneField` |
| `record` | typeof [`RecordField`](../classes/Backland.RecordField.md) |
| `string` | typeof [`StringField`](../classes/Backland.StringField.md) |
| `ulid` | typeof [`UlidField`](../classes/Backland.UlidField.md) |
| `undefined` | typeof [`UndefinedField`](../classes/Backland.UndefinedField.md) |
| `union` | typeof [`UnionField`](../classes/Backland.UnionField.md) |
| `unknown` | typeof [`UnknownField`](../classes/Backland.UnknownField.md) |

#### Defined in

packages/schema/lib/fields/fieldTypes.d.ts:44

## Functions

### \_\_getCachedFieldInstance

▸ **__getCachedFieldInstance**(`field`): [`TAnyFieldType`](Backland.md#tanyfieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `Object` |

#### Returns

[`TAnyFieldType`](Backland.md#tanyfieldtype)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:49

___

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

packages/transporter/lib/Transporter.d.ts:225

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

packages/transporter/lib/Transporter.d.ts:228

___

### cleanMetaField

▸ **cleanMetaField**(`input`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`any`

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:17

___

### createAggioIndexBasedFilters

▸ **createAggioIndexBasedFilters**(`options`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.filter` | [`IndexFilterRecord`](Backland.md#indexfilterrecord)<`string`, `string`\> |
| `options.indexConfig` | [`AnyCollectionIndexConfig`](Backland.md#anycollectionindexconfig) |

#### Returns

`Query`<`any`\>[]

#### Defined in

packages/transporter/lib/parseAggioAttributeFilters.d.ts:4

___

### createBacklandObject

▸ **createBacklandObject**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:116

▸ **createBacklandObject**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:117

___

### createDocumentIndexBasedFilters

▸ **createDocumentIndexBasedFilters**(`filter`, `indexConfig`): [`IndexBasedFilterParsed`](Backland.md#indexbasedfilterparsed)

Receives a document indexConfig and a key-value filter and converts to
an index based search filter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`IndexFilterRecord`](Backland.md#indexfilterrecord)<`string`, `string`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Backland.md#anycollectionindexconfig) |

#### Returns

[`IndexBasedFilterParsed`](Backland.md#indexbasedfilterparsed)

#### Defined in

packages/transporter/lib/createDocumentIndexBasedFilters.d.ts:9

___

### createEmptyMetaField

▸ **createEmptyMetaField**(): [`MetaField`](../classes/Backland.MetaField.md)[``"asFinalFieldDef"``]

#### Returns

[`MetaField`](../classes/Backland.MetaField.md)[``"asFinalFieldDef"``]

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:16

___

### createEntity

▸ **createEntity**<`InputDefinition`, `Indexes`, `Options`\>(`configOptions`): [`Entity`](../interfaces/Backland.Entity.md)<`InputDefinition`, `Indexes`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDefinition` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) |
| `Indexes` | extends [`DocumentIndexesConfig`](../interfaces/Backland.DocumentIndexesConfig.md)<`string`, `Indexes`\> |
| `Options` | extends [`EntityOptions`](Backland.md#entityoptions)<`InputDefinition`, `Indexes`\> = [`EntityOptions`](Backland.md#entityoptions)<`InputDefinition`, `Indexes`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configOptions` | [`EntityOptions`](Backland.md#entityoptions)<`InputDefinition`, `Indexes`\> \| () => [`EntityOptions`](Backland.md#entityoptions)<`InputDefinition`, `Indexes`\> |

#### Returns

[`Entity`](../interfaces/Backland.Entity.md)<`InputDefinition`, `Indexes`\>

#### Defined in

packages/entity/lib/Entity.d.ts:6

___

### createEntityPlugin

▸ **createEntityPlugin**(`name`, `handler`): [`EntityPlugin`](../interfaces/Backland.EntityPlugin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handler` | [`EntityPlugin`](../interfaces/Backland.EntityPlugin.md) |

#### Returns

[`EntityPlugin`](../interfaces/Backland.EntityPlugin.md)

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:8

___

### createFieldTypeError

▸ **createFieldTypeError**(`code`, `details?`): [`FieldTypeError`](../classes/Backland.FieldTypeError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | ``"minSize"`` \| ``"maxSize"`` \| ``"regexMismatch"`` \| ``"sizeMismatch"`` \| ``"unexpected"`` \| ``"unexpectedType"`` \| ``"custom"`` \| ``"invalidPhone"`` \| ``"requiredField"`` |
| `details?` | `any` |

#### Returns

[`FieldTypeError`](../classes/Backland.FieldTypeError.md)

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:9

___

### createGraphQLSchema

▸ **createGraphQLSchema**<`T`\>(`resolvers?`, `config?`): `T` extends { `__isResolver`: `any`  } ? [`GraphQLSchemaWithUtils`](Backland.md#graphqlschemawithutils) : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolvers?` | `T`[] |
| `config?` | `Partial`<`GraphQLSchemaConfig`\> |

#### Returns

`T` extends { `__isResolver`: `any`  } ? [`GraphQLSchemaWithUtils`](Backland.md#graphqlschemawithutils) : `never`

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:35

▸ **createGraphQLSchema**<`Config`\>(`config?`): `Config` extends [`CreateGraphQLObjectOptions`](Backland.md#creategraphqlobjectoptions) ? [`GraphQLSchemaWithUtils`](Backland.md#graphqlschemawithutils) : `never`

#### Type parameters

| Name |
| :------ |
| `Config` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Config` |

#### Returns

`Config` extends [`CreateGraphQLObjectOptions`](Backland.md#creategraphqlobjectoptions) ? [`GraphQLSchemaWithUtils`](Backland.md#graphqlschemawithutils) : `never`

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:38

___

### createObjectType

▸ **createObjectType**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:116

▸ **createObjectType**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:117

___

### createResolver

▸ **createResolver**<`ResultType`, `ArgsType`\>(`config`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve?`: `undefined` ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Backland.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `resolver` | <Returns, Root\>(`handler`: (`root`: `Root`, `args`: [`_ResolverArgs`](Backland.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Backland.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\>) => { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Backland.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Backland.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } |

#### Defined in

packages/schema/lib/Resolver.d.ts:40

▸ **createResolver**<`ResultType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Backland.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `undefined` ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Backland.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Backland.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Backland.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

packages/schema/lib/Resolver.d.ts:49

▸ **createResolver**<`ResultType`, `ArgsType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Backland.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Backland.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Backland.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Backland.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Backland.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Backland.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Backland.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

packages/schema/lib/Resolver.d.ts:58

___

### createResolverFactory

▸ **createResolverFactory**<`Context`\>(): [`CreateResolver`](../interfaces/Backland.CreateResolver.md)<`Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`ResolverContextBase`](Backland.md#resolvercontextbase) |

#### Returns

[`CreateResolver`](../interfaces/Backland.CreateResolver.md)<`Context`\>

#### Defined in

packages/schema/lib/Resolver.d.ts:68

___

### createSchema

▸ **createSchema**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:116

▸ **createSchema**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Backland.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:117

___

### createTSFYContext

▸ **createTSFYContext**(`config`): [`TSFYContext`](Backland.md#tsfycontext)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TSFYConfig`](Backland.md#tsfyconfig) |

#### Returns

[`TSFYContext`](Backland.md#tsfycontext)

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:32

___

### createTSfyRef

▸ **createTSfyRef**(`hash`, `identifier?`): [`TSFYRef`](Backland.md#tsfyref)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `identifier?` | `string` |

#### Returns

[`TSFYRef`](Backland.md#tsfyref)

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:31

___

### createType

▸ **createType**<`Definition`\>(`definition`): [`GraphType`](../classes/Backland.GraphType.md)<`Definition`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Definition` \| (`utils`: `BacklandModules`) => `Definition` |

#### Returns

[`GraphType`](../classes/Backland.GraphType.md)<`Definition`\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:117

▸ **createType**<`Definition`\>(`name`, `definition`): [`GraphType`](../classes/Backland.GraphType.md)<`Definition`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Definition` \| (`utils`: `BacklandModules`) => `Definition` |

#### Returns

[`GraphType`](../classes/Backland.GraphType.md)<`Definition`\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:118

___

### deleteCachedFieldInstance

▸ **deleteCachedFieldInstance**<`T`\>(`def`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Returns

`T`

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:52

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

packages/transporter/lib/encodeIndexValue.d.ts:1

___

### extendObjectDefinition

▸ **extendObjectDefinition**<`Input`\>(`input`): [`ExtendObjectDefinition`](../interfaces/Backland.ExtendObjectDefinition.md)<`Input`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

#### Returns

[`ExtendObjectDefinition`](../interfaces/Backland.ExtendObjectDefinition.md)<`Input`, `Input`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:35

___

### extendType

▸ **extendType**<`Input`\>(`input`): [`ExtendType`](../interfaces/Backland.ExtendType.md)<`Input`\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

#### Returns

[`ExtendType`](../interfaces/Backland.ExtendType.md)<`Input`\>

#### Defined in

packages/schema/lib/extendType.d.ts:20

___

### fieldToMock

▸ **fieldToMock**(`fieldInput`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldInput` | [`ObjectFieldInput`](Backland.md#objectfieldinput) |
| `options?` | [`ObjectMockOptions`](Backland.md#objectmockoptions) |

#### Returns

`any`

#### Defined in

packages/schema/lib/mockObject.d.ts:13

___

### getDocumentIndexFields

▸ **getDocumentIndexFields**<`Document`\>(`doc`, `indexConfig`): [`ParsedDocumentIndexes`](Backland.md#parseddocumentindexes)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Document` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Document` |
| `indexConfig` | [`AnyCollectionIndexConfig`](Backland.md#anycollectionindexconfig) |

#### Returns

[`ParsedDocumentIndexes`](Backland.md#parseddocumentindexes)

#### Defined in

packages/transporter/lib/getDocumentIndexFields.d.ts:2

___

### getObjectDefinitionId

▸ **getObjectDefinitionId**(`definition`, `nullable`): `string` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Record`<`string`, `any`\> |
| `nullable` | ``true`` |

#### Returns

`string` \| `undefined`

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:21

▸ **getObjectDefinitionId**(`definition`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Record`<`string`, `any`\> |

#### Returns

`string`

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:22

___

### getObjectDefinitionMetaField

▸ **getObjectDefinitionMetaField**(`input`): [`MetaField`](../classes/Backland.MetaField.md)[``"asFinalFieldDef"``] \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Record`<`string`, `any`\> |

#### Returns

[`MetaField`](../classes/Backland.MetaField.md)[``"asFinalFieldDef"``] \| `undefined`

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:20

___

### getParsedIndexKeys

▸ **getParsedIndexKeys**(`indexConfig`): [`ParsedIndexKey`](Backland.md#parsedindexkey)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | [`AnyCollectionIndexConfig`](Backland.md#anycollectionindexconfig) |

#### Returns

[`ParsedIndexKey`](Backland.md#parsedindexkey)[]

#### Defined in

packages/transporter/lib/createDocumentIndexBasedFilters.d.ts:10

___

### getResolver

▸ **getResolver**(`name`): [`AnyResolver`](Backland.md#anyresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`AnyResolver`](Backland.md#anyresolver)

#### Defined in

packages/schema/lib/Resolver.d.ts:37

___

### getTSFyIdentifier

▸ **getTSFyIdentifier**(`value`): `string` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string` \| `undefined`

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:18

___

### getType

▸ **getType**(`name`): [`GraphTypeLike`](../interfaces/Backland.GraphTypeLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GraphTypeLike`](../interfaces/Backland.GraphTypeLike.md)

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:119

___

### implementObject

▸ **implementObject**<`Def`, `Parents`\>(`name`, `definition`, `...parents`): [`ImplementObject`](Backland.md#implementobject)<[`ObjectType`](../classes/Backland.ObjectType.md)<`Def`\>, `Parents`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) |
| `Parents` | extends readonly [`ObjectLike`](../interfaces/Backland.ObjectLike.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Readonly`<`Def`\> |
| `...parents` | `Parents` |

#### Returns

[`ImplementObject`](Backland.md#implementobject)<[`ObjectType`](../classes/Backland.ObjectType.md)<`Def`\>, `Parents`\>

#### Defined in

packages/schema/lib/implementObject.d.ts:8

___

### isEntity

▸ **isEntity**(`value`): value is AnyEntity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is AnyEntity

#### Defined in

packages/entity/lib/Entity.d.ts:7

___

### isFieldError

▸ **isFieldError**(`el`): el is FieldTypeError

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `any` |

#### Returns

el is FieldTypeError

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:10

___

### isFieldInstance

▸ **isFieldInstance**(`t`): t is TAnyFieldType

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

t is TAnyFieldType

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:65

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

packages/transporter/lib/Transporter.d.ts:229

___

### isHiddenFieldName

▸ **isHiddenFieldName**(`name`): `boolean`

Checks if the field names should be hidden from generated code

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

packages/schema/lib/isHiddenFieldName.d.ts:5

___

### isMetaField

▸ **isMetaField**(`t`, `fieldName?`): t is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |
| `fieldName?` | `string` |

#### Returns

t is Object

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:19

___

### isMetaFieldKey

▸ **isMetaFieldKey**(`t`): t is "\_\_dschm\_\_"

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

t is "\_\_dschm\_\_"

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:18

___

### isObject

▸ **isObject**(`input`): input is ObjectType<any, Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is ObjectType<any, Object\>

#### Defined in

packages/schema/lib/objectInferenceUtils.d.ts:5

___

### isObjectAsTypeDefinition

▸ **isObjectAsTypeDefinition**(`input`): input is CommonFieldDefinition<ObjectType<any, Object\>\>

Object as field['type'] is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is CommonFieldDefinition<ObjectType<any, Object\>\>

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:46

___

### isObjectValidationError

▸ **isObjectValidationError**(`input`): input is Error & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Error & Object

#### Defined in

packages/schema/lib/objectInferenceUtils.d.ts:2

___

### isPossibleArgsDef

▸ **isPossibleArgsDef**(`args`): args is Readonly<ObjectDefinitionInput\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `any` |

#### Returns

args is Readonly<ObjectDefinitionInput\>

#### Defined in

packages/schema/lib/Resolver.d.ts:36

___

### mergeIndexRelationsResult

▸ **mergeIndexRelationsResult**(`input`): [`DocumentBase`](Backland.md#documentbase)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.indexConfig` | [`AnyCollectionIndexConfig`](Backland.md#anycollectionindexconfig) |
| `input.items` | [`DocumentBase`](Backland.md#documentbase)[] |

#### Returns

[`DocumentBase`](Backland.md#documentbase)[]

#### Defined in

packages/transporter/lib/mergeIndexRelationsResult.d.ts:3

___

### moduleWrapper

▸ **moduleWrapper**(`init`): (`body`: `string`) => `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Object` |
| `init.extra?` | [`string`, `string`][] |
| `init.moduleName` | `string` |

#### Returns

`fn`

▸ (`body`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `string` |

##### Returns

`string`

#### Defined in

packages/schema/lib/tsfy/tsfyWriter.d.ts:24

___

### objectMock

▸ **objectMock**<`T`\>(`definition`, `options?`): [`Infer`](Backland.md#infer)<{ `object`: `T`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |
| `options?` | [`ObjectMockOptions`](Backland.md#objectmockoptions) |

#### Returns

[`Infer`](Backland.md#infer)<{ `object`: `T`  }\>

#### Defined in

packages/schema/lib/mockObject.d.ts:8

___

### parseAggioAttributeFilters

▸ **parseAggioAttributeFilters**(`attFilter`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `attFilter` | [`FilterRecord`](Backland.md#filterrecord)<[`DocumentBase`](Backland.md#documentbase)\> |

#### Returns

`Query`<`any`\>[]

#### Defined in

packages/transporter/lib/parseAggioAttributeFilters.d.ts:8

___

### parseAggioUpdateExpression

▸ **parseAggioUpdateExpression**(`operations`): `UpdateDefinition`<`any`\> \| `UpdateDefinition`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `operations` | ({ `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$addToSet"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$append"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Record`<`string`, `undefined` \| `number`\>][] ; `operator`: ``"$inc"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$prepend"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$pull"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `MaybeArray`<`string`\>][] ; `operator`: ``"$remove"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$set"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$setIfNull"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$setOnInsert"`` ; `valueConstructorName`: `string`  })[] |

#### Returns

`UpdateDefinition`<`any`\> \| `UpdateDefinition`<`any`\>[]

#### Defined in

packages/transporter/lib/parseAggioUpdateExpression.d.ts:3

___

### parseCollectionIndexConfig

▸ **parseCollectionIndexConfig**<`T`\>(`indexConfig`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyCollectionIndexConfig`](Backland.md#anycollectionindexconfig) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | `T` |

#### Returns

`T`

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:461

___

### parseEntityIndexFields

▸ **parseEntityIndexFields**(`indexConfig`): [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | [`AnyCollectionIndexConfig`](Backland.md#anycollectionindexconfig) |

#### Returns

[`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)

#### Defined in

packages/transporter/lib/parseEntityIndexFields.d.ts:3

___

### parseField

▸ **parseField**(`definition`): [`FinalFieldDefinition`](Backland.md#finalfielddefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`ObjectFieldInput`](Backland.md#objectfieldinput) |

#### Returns

[`FinalFieldDefinition`](Backland.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:24

___

### parseFieldDefinitionConfig

▸ **parseFieldDefinitionConfig**<`T`, `Options`\>(`definition`, `options?`): [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Backland.md#fieldasstring) \| [`FinalFieldDefinition`](Backland.md#finalfielddefinition) \| [`ShortenFinalFieldDefinition`](Backland.md#shortenfinalfielddefinition) : [`FinalFieldDefinition`](Backland.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) |
| `Options` | extends [`ParseFieldOptions`](Backland.md#parsefieldoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |
| `options?` | `Options` |

#### Returns

[`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Backland.md#fieldasstring) \| [`FinalFieldDefinition`](Backland.md#finalfielddefinition) \| [`ShortenFinalFieldDefinition`](Backland.md#shortenfinalfielddefinition) : [`FinalFieldDefinition`](Backland.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:25

___

### parseFilterIndexFilterParts

▸ **parseFilterIndexFilterParts**(`filter`, `indexConfig`): { `isFinalParsedSearch`: ``false`` ; `parts`: [`ParsedIndexFilterPart`](Backland.md#parsedindexfilterpart)[]  } \| { `cursor`: `ParsedIndexCursor` ; `isFinalParsedSearch`: ``true``  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Record`<`string`, `any`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Backland.md#anycollectionindexconfig) |

#### Returns

{ `isFinalParsedSearch`: ``false`` ; `parts`: [`ParsedIndexFilterPart`](Backland.md#parsedindexfilterpart)[]  } \| { `cursor`: `ParsedIndexCursor` ; `isFinalParsedSearch`: ``true``  }

#### Defined in

packages/transporter/lib/parseFilterIndexFilterParts.d.ts:12

___

### parseFlattenFieldDefinition

▸ **parseFlattenFieldDefinition**(`input`, `options?`): [`FinalFieldDefinition`](Backland.md#finalfielddefinition) \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | [`ParseFieldOptions`](Backland.md#parsefieldoptions) |

#### Returns

[`FinalFieldDefinition`](Backland.md#finalfielddefinition) \| ``false``

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:47

___

### parseObjectDefinition

▸ **parseObjectDefinition**(`input`, `options?`): `ParseResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Record`<`string`, `any`\> |
| `options?` | `Omit`<[`ParseFieldOptions`](Backland.md#parsefieldoptions), ``"returnInstance"``\> |

#### Returns

`ParseResult`

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:41

___

### parseObjectField

▸ **parseObjectField**<`T`, `Options`\>(`fieldName`, `definition`, `options`): [`Options`[``"returnInstance"``]] extends [``true``] ? [`TAnyFieldType`](Backland.md#tanyfieldtype) : [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Backland.md#fieldasstring) : [`FinalFieldDefinition`](Backland.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) |
| `Options` | extends [`ParseFieldOptions`](Backland.md#parsefieldoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |
| `options` | `Options` |

#### Returns

[`Options`[``"returnInstance"``]] extends [``true``] ? [`TAnyFieldType`](Backland.md#tanyfieldtype) : [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Backland.md#fieldasstring) : [`FinalFieldDefinition`](Backland.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:15

▸ **parseObjectField**<`T`\>(`fieldName`, `definition`): [`FinalFieldDefinition`](Backland.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |

#### Returns

[`FinalFieldDefinition`](Backland.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:16

▸ **parseObjectField**<`T`\>(`fieldName`, `definition`, `options`): [`TAnyFieldType`](Backland.md#tanyfieldtype)

**`Deprecated`**

use the object options instead of true

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Backland.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |
| `options` | ``true`` |

#### Returns

[`TAnyFieldType`](Backland.md#tanyfieldtype)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:23

___

### parseOneIndexDocumentFields

▸ **parseOneIndexDocumentFields**(`parsedIndex`): [`DocumentIndexFieldsParsed`](../interfaces/Backland.DocumentIndexFieldsParsed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsedIndex` | `ParsedIndexCursor` |

#### Returns

[`DocumentIndexFieldsParsed`](../interfaces/Backland.DocumentIndexFieldsParsed.md)

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:477

___

### parseUpdateExpression

▸ **parseUpdateExpression**<`Schema`\>(`updateExpression`, `indexConfig`): [`ParsedUpdateExpression`](Backland.md#parsedupdateexpression)<`Schema`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateExpression` | [`UpdateExpression`](Backland.md#updateexpression)<`Schema`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Backland.md#anycollectionindexconfig) |

#### Returns

[`ParsedUpdateExpression`](Backland.md#parsedupdateexpression)<`Schema`\>[]

#### Defined in

packages/transporter/lib/parseUpdateExpression.d.ts:9

___

### parseValidationError

▸ **parseValidationError**(`input`, `customMessage`, `originalError`): `Error` & { `[K: string]`: `any`;  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `customMessage` | `undefined` \| [`ValidationCustomMessage`](Backland.md#validationcustommessage) |
| `originalError` | `string` \| `Error` & { `[K: string]`: `any`;  } |

#### Returns

`Error` & { `[K: string]`: `any`;  }

#### Defined in

packages/schema/lib/applyValidator.d.ts:13

___

### pickIndexKeyPartsFromDocument

▸ **pickIndexKeyPartsFromDocument**(`param`): [`ParsedIndexPart`](Backland.md#parsedindexpart)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.acceptNullable` | `boolean` |
| `param.destination` | ``"filter"`` \| ``"document"`` |
| `param.doc` | `Record`<`string`, `any`\> |
| `param.indexField` | `string` |
| `param.indexPartKind` | [`IndexPartKind`](Backland.md#indexpartkind) |
| `param.indexParts` | readonly [`IndexKeyHash`](Backland.md#indexkeyhash)<`string`\>[] |

#### Returns

[`ParsedIndexPart`](Backland.md#parsedindexpart)

#### Defined in

packages/transporter/lib/pickIndexKeyPartsFromDocument.d.ts:2

___

### registerEntity

▸ **registerEntity**(`entity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`AnyEntity`](Backland.md#anyentity) |

#### Returns

`void`

#### Defined in

packages/entity/lib/EntityStore.d.ts:5

___

### resetTypesCache

▸ **resetTypesCache**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:101

___

### resolversToTypescript

▸ **resolversToTypescript**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResolversToTypeScriptOptions`](Backland.md#resolverstotypescriptoptions) |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:84

___

### resolversTypescriptParts

▸ **resolversTypescriptParts**(`params`): `Promise`<{ `code`: `string` ; `lines`: { `args`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `code`: `string` ; `entryName`: `string` ; `inputName`: `any` ; `payload`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `payloadName`: `any` ; `resolver`: { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField` ; `astNode?`: `Maybe` ; `deprecationReason?`: `Maybe` ; `description?`: `Maybe` ; `extensions?`: `Maybe` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `subscribe?`: `GraphQLFieldResolver` ; `type`: `any` ; `typeDef`: `any`  }  }[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResolversToTypeScriptOptions`](Backland.md#resolverstotypescriptoptions) |

#### Returns

`Promise`<{ `code`: `string` ; `lines`: { `args`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `code`: `string` ; `entryName`: `string` ; `inputName`: `any` ; `payload`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `payloadName`: `any` ; `resolver`: { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField` ; `astNode?`: `Maybe` ; `deprecationReason?`: `Maybe` ; `description?`: `Maybe` ; `extensions?`: `Maybe` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `subscribe?`: `GraphQLFieldResolver` ; `type`: `any` ; `typeDef`: `any`  }  }[]  }\>

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:44

___

### setParserHook

▸ **setParserHook**(`hook`): [`RemoveParserHook`](../interfaces/Backland.RemoveParserHook.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hook` | [`ParserHook`](../interfaces/Backland.ParserHook.md) |

#### Returns

[`RemoveParserHook`](../interfaces/Backland.RemoveParserHook.md)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:14

___

### tsfy

▸ **tsfy**(`input`, `config?`): [`TSFyResult`](../interfaces/Backland.TSFyResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `config?` | [`TSFYConfig`](Backland.md#tsfyconfig) |

#### Returns

[`TSFyResult`](../interfaces/Backland.TSFyResult.md)

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:16

___

### tsfyWriter

▸ **tsfyWriter**(`options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`TSFyWriterConfig`](../interfaces/Backland.TSFyWriterConfig.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `add` | (`value`: `any`) => { `hash`: `string`  } |
| `listen` | () => `Store`<`Record`<`string`, `any`\>, `string`, `any`\> |
| `remove` | (`value`: `any`) => { `hash`: `string` ; `index`: `number` \| `undefined`  } |
| `store` | `Store`<`Record`<`string`, `any`\>, `string`, `any`\> |
| `toString` | () => `Promise`<`string`\> |

#### Defined in

packages/schema/lib/tsfy/tsfyWriter.d.ts:12
