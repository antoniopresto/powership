[Solarwind](../README.md) / [Modules](../modules.md) / Solarwind

# Module: Solarwind

## Table of contents

### References

- [InferField](Solarwind.md#inferfield)

### Classes

- [AliasField](../classes/Solarwind.AliasField.md)
- [AnyField](../classes/Solarwind.AnyField.md)
- [BooleanField](../classes/Solarwind.BooleanField.md)
- [CollectionErrors](../classes/Solarwind.CollectionErrors.md)
- [CursorField](../classes/Solarwind.CursorField.md)
- [DateField](../classes/Solarwind.DateField.md)
- [EmailField](../classes/Solarwind.EmailField.md)
- [EnumField](../classes/Solarwind.EnumField.md)
- [FieldType](../classes/Solarwind.FieldType.md)
- [FieldTypeError](../classes/Solarwind.FieldTypeError.md)
- [FloatField](../classes/Solarwind.FloatField.md)
- [GraphType](../classes/Solarwind.GraphType.md)
- [IDField](../classes/Solarwind.IDField.md)
- [IntField](../classes/Solarwind.IntField.md)
- [LiteralField](../classes/Solarwind.LiteralField.md)
- [MetaField](../classes/Solarwind.MetaField.md)
- [NullField](../classes/Solarwind.NullField.md)
- [ObjectField](../classes/Solarwind.ObjectField.md)
- [ObjectType](../classes/Solarwind.ObjectType.md)
- [RecordField](../classes/Solarwind.RecordField.md)
- [StringField](../classes/Solarwind.StringField.md)
- [UlidField](../classes/Solarwind.UlidField.md)
- [UndefinedField](../classes/Solarwind.UndefinedField.md)
- [UnionField](../classes/Solarwind.UnionField.md)
- [UnknownField](../classes/Solarwind.UnknownField.md)

### Interfaces

- [CreateOne](../interfaces/Solarwind.CreateOne.md)
- [CreateResolver](../interfaces/Solarwind.CreateResolver.md)
- [DeleteMany](../interfaces/Solarwind.DeleteMany.md)
- [DeleteOne](../interfaces/Solarwind.DeleteOne.md)
- [DocumentIndexFieldsParsed](../interfaces/Solarwind.DocumentIndexFieldsParsed.md)
- [DocumentIndexesConfig](../interfaces/Solarwind.DocumentIndexesConfig.md)
- [Entity](../interfaces/Solarwind.Entity.md)
- [EntityAddRelation](../interfaces/Solarwind.EntityAddRelation.md)
- [EntityFromContext](../interfaces/Solarwind.EntityFromContext.md)
- [EntityIndexRelations](../interfaces/Solarwind.EntityIndexRelations.md)
- [EntityPlugin](../interfaces/Solarwind.EntityPlugin.md)
- [EntityTypesContext](../interfaces/Solarwind.EntityTypesContext.md)
- [ExtendEntity](../interfaces/Solarwind.ExtendEntity.md)
- [ExtendObjectDefinition](../interfaces/Solarwind.ExtendObjectDefinition.md)
- [ExtendType](../interfaces/Solarwind.ExtendType.md)
- [FindById](../interfaces/Solarwind.FindById.md)
- [FindMany](../interfaces/Solarwind.FindMany.md)
- [FindOne](../interfaces/Solarwind.FindOne.md)
- [FirstIndexParsed](../interfaces/Solarwind.FirstIndexParsed.md)
- [GraphTypeInTypeFieldDefinition](../interfaces/Solarwind.GraphTypeInTypeFieldDefinition.md)
- [GraphTypeLike](../interfaces/Solarwind.GraphTypeLike.md)
- [GraphTypeLikeFieldDefinition](../interfaces/Solarwind.GraphTypeLikeFieldDefinition.md)
- [IndexMethods](../interfaces/Solarwind.IndexMethods.md)
- [IndexPKSKPartsListConfig](../interfaces/Solarwind.IndexPKSKPartsListConfig.md)
- [LiteralFieldDef](../interfaces/Solarwind.LiteralFieldDef.md)
- [ObjectDefinitionInput](../interfaces/Solarwind.ObjectDefinitionInput.md)
- [ObjectInTypeFieldDefinition](../interfaces/Solarwind.ObjectInTypeFieldDefinition.md)
- [ObjectLike](../interfaces/Solarwind.ObjectLike.md)
- [ObjectTypeLikeFieldDefinition](../interfaces/Solarwind.ObjectTypeLikeFieldDefinition.md)
- [Paginate](../interfaces/Solarwind.Paginate.md)
- [ParserHook](../interfaces/Solarwind.ParserHook.md)
- [RemoveParserHook](../interfaces/Solarwind.RemoveParserHook.md)
- [TSFYCustomHandler](../interfaces/Solarwind.TSFYCustomHandler.md)
- [TSFyResult](../interfaces/Solarwind.TSFyResult.md)
- [TSFyWriterConfig](../interfaces/Solarwind.TSFyWriterConfig.md)
- [Transporter](../interfaces/Solarwind.Transporter.md)
- [UpdateMany](../interfaces/Solarwind.UpdateMany.md)
- [UpdateOne](../interfaces/Solarwind.UpdateOne.md)
- [\_EntityLoaderUtils](../interfaces/Solarwind._EntityLoaderUtils.md)

### Type Aliases

- [$inferableKey](Solarwind.md#$inferablekey)
- [$sealed](Solarwind.md#$sealed)
- [$sealedDef](Solarwind.md#$sealeddef)
- [$sealedKey](Solarwind.md#$sealedkey)
- [AliasFieldAggregation](Solarwind.md#aliasfieldaggregation)
- [AliasFieldDef](Solarwind.md#aliasfielddef)
- [AllFieldTypes](Solarwind.md#allfieldtypes)
- [AllFilterOperations](Solarwind.md#allfilteroperations)
- [AllFinalFieldDefinitions](Solarwind.md#allfinalfielddefinitions)
- [AllIndexFilter](Solarwind.md#allindexfilter)
- [AnyCollectionIndexConfig](Solarwind.md#anycollectionindexconfig)
- [AnyDocIndexItem](Solarwind.md#anydocindexitem)
- [AnyEntity](Solarwind.md#anyentity)
- [AnyEntityTypesContext](Solarwind.md#anyentitytypescontext)
- [AnyResolver](Solarwind.md#anyresolver)
- [ArrayOperationRecord](Solarwind.md#arrayoperationrecord)
- [AttributeFilterKey](Solarwind.md#attributefilterkey)
- [SolarwindObjectDefinition](Solarwind.md#solarwindobjectdefinition)
- [CollectionConfigIndexes](Solarwind.md#collectionconfigindexes)
- [CollectionIndexConfig](Solarwind.md#collectionindexconfig)
- [CommonDefSafe](Solarwind.md#commondefsafe)
- [CommonFieldDefinition](Solarwind.md#commonfielddefinition)
- [CommonFieldOptions](Solarwind.md#commonfieldoptions)
- [CommonIndexFields](Solarwind.md#commonindexfields)
- [ComputeFieldDefinition](Solarwind.md#computefielddefinition)
- [CreateGraphQLObjectOptions](Solarwind.md#creategraphqlobjectoptions)
- [CreateOneConfig](Solarwind.md#createoneconfig)
- [CreateOneResult](Solarwind.md#createoneresult)
- [CursorType](Solarwind.md#cursortype)
- [DateFieldDef](Solarwind.md#datefielddef)
- [DeleteManyConfig](Solarwind.md#deletemanyconfig)
- [DeleteManyResult](Solarwind.md#deletemanyresult)
- [DeleteOneConfig](Solarwind.md#deleteoneconfig)
- [DeleteOneResult](Solarwind.md#deleteoneresult)
- [DescribeAndOverrideField](Solarwind.md#describeandoverridefield)
- [DescribeField](Solarwind.md#describefield)
- [DescribeObjectDefinition](Solarwind.md#describeobjectdefinition)
- [DescribeWithoutSeal](Solarwind.md#describewithoutseal)
- [DocumentBase](Solarwind.md#documentbase)
- [DocumentIndexFieldKey](Solarwind.md#documentindexfieldkey)
- [DocumentIndexFilterParsed](Solarwind.md#documentindexfilterparsed)
- [DocumentIndexItem](Solarwind.md#documentindexitem)
- [DocumentIndexRelation](Solarwind.md#documentindexrelation)
- [EdgeType](Solarwind.md#edgetype)
- [EntityDocument](Solarwind.md#entitydocument)
- [EntityDocumentBase](Solarwind.md#entitydocumentbase)
- [EntityDocumentInput](Solarwind.md#entitydocumentinput)
- [EntityErrorDetails](Solarwind.md#entityerrordetails)
- [EntityErrorKind](Solarwind.md#entityerrorkind)
- [EntityErrorKindEnum](Solarwind.md#entityerrorkindenum)
- [EntityFieldResolver](Solarwind.md#entityfieldresolver)
- [EntityFilters](Solarwind.md#entityfilters)
- [EntityHooks](Solarwind.md#entityhooks)
- [EntityHooksCreateDefinitionKind](Solarwind.md#entityhookscreatedefinitionkind)
- [EntityLoaderConfig](Solarwind.md#entityloaderconfig)
- [EntityLoaderMethods](Solarwind.md#entityloadermethods)
- [EntityOptions](Solarwind.md#entityoptions)
- [EntityParserHookContext](Solarwind.md#entityparserhookcontext)
- [FieldAsString](Solarwind.md#fieldasstring)
- [FieldComposer](Solarwind.md#fieldcomposer)
- [FieldCreators](Solarwind.md#fieldcreators)
- [FieldDefinitionConfig](Solarwind.md#fielddefinitionconfig)
- [FieldDefinitions](Solarwind.md#fielddefinitions)
- [FieldExample](Solarwind.md#fieldexample)
- [FieldExampleFunction](Solarwind.md#fieldexamplefunction)
- [FieldInput](Solarwind.md#fieldinput)
- [FieldInputLikeRequiredKey](Solarwind.md#fieldinputlikerequiredkey)
- [FieldParserConfig](Solarwind.md#fieldparserconfig)
- [FieldParserOptionsObject](Solarwind.md#fieldparseroptionsobject)
- [FieldTypeErrorCode](Solarwind.md#fieldtypeerrorcode)
- [FieldTypeName](Solarwind.md#fieldtypename)
- [FieldTypeOptions](Solarwind.md#fieldtypeoptions)
- [FieldTypeParser](Solarwind.md#fieldtypeparser)
- [FilterConditions](Solarwind.md#filterconditions)
- [FilterRecord](Solarwind.md#filterrecord)
- [FinalFieldDefinition](Solarwind.md#finalfielddefinition)
- [FinalFieldDefinitionStrict](Solarwind.md#finalfielddefinitionstrict)
- [FinalObjectDefinition](Solarwind.md#finalobjectdefinition)
- [FindByIdConfig](Solarwind.md#findbyidconfig)
- [FindManyConfig](Solarwind.md#findmanyconfig)
- [FindManyResult](Solarwind.md#findmanyresult)
- [FindOneConfig](Solarwind.md#findoneconfig)
- [FindOneResult](Solarwind.md#findoneresult)
- [FlattenFieldDefinition](Solarwind.md#flattenfielddefinition)
- [FloatFieldDef](Solarwind.md#floatfielddef)
- [GraphQLSchemaWithUtils](Solarwind.md#graphqlschemawithutils)
- [GraphTypeArgs](Solarwind.md#graphtypeargs)
- [GraphTypeKID](Solarwind.md#graphtypekid)
- [GroupedResolvers](Solarwind.md#groupedresolvers)
- [IDFieldDef](Solarwind.md#idfielddef)
- [ImplementObject](Solarwind.md#implementobject)
- [IndexBasedFilterParsed](Solarwind.md#indexbasedfilterparsed)
- [IndexFilter](Solarwind.md#indexfilter)
- [IndexFilterFound](Solarwind.md#indexfilterfound)
- [IndexFilterRecord](Solarwind.md#indexfilterrecord)
- [IndexKeyHash](Solarwind.md#indexkeyhash)
- [IndexPartKind](Solarwind.md#indexpartkind)
- [Infer](Solarwind.md#infer)
- [InferFinalField](Solarwind.md#inferfinalfield)
- [InferGraphType](Solarwind.md#infergraphtype)
- [InferObjectDefinition](Solarwind.md#inferobjectdefinition)
- [InferObjectType](Solarwind.md#inferobjecttype)
- [InferRecordFieldType](Solarwind.md#inferrecordfieldtype)
- [InferResolverArgs](Solarwind.md#inferresolverargs)
- [InferString](Solarwind.md#inferstring)
- [InferTypeName](Solarwind.md#infertypename)
- [InnerDef](Solarwind.md#innerdef)
- [IntFieldDef](Solarwind.md#intfielddef)
- [InvalidParsedIndexField](Solarwind.md#invalidparsedindexfield)
- [LazyParseGraphTypePayload](Solarwind.md#lazyparsegraphtypepayload)
- [ListDefinition](Solarwind.md#listdefinition)
- [ListDefinitionObject](Solarwind.md#listdefinitionobject)
- [ListDefinitionTruthy](Solarwind.md#listdefinitiontruthy)
- [LoaderContext](Solarwind.md#loadercontext)
- [MakeFieldOptional](Solarwind.md#makefieldoptional)
- [MakeFieldRequired](Solarwind.md#makefieldrequired)
- [MakeTypeList](Solarwind.md#maketypelist)
- [MakeTypeOptional](Solarwind.md#maketypeoptional)
- [MakeTypeRequired](Solarwind.md#maketyperequired)
- [MakeTypeSingle](Solarwind.md#maketypesingle)
- [MetaFieldDef](Solarwind.md#metafielddef)
- [MethodFilter](Solarwind.md#methodfilter)
- [OHas](Solarwind.md#ohas)
- [OPick](Solarwind.md#opick)
- [OWritable](Solarwind.md#owritable)
- [ObjectFieldInput](Solarwind.md#objectfieldinput)
- [ObjectMockOptions](Solarwind.md#objectmockoptions)
- [ObjectTypeFromInput](Solarwind.md#objecttypefrominput)
- [ObjectTypeKID](Solarwind.md#objecttypekid)
- [OneFilterOperation](Solarwind.md#onefilteroperation)
- [OptionalResolverConfig](Solarwind.md#optionalresolverconfig)
- [OverrideField](Solarwind.md#overridefield)
- [PKSKValueType](Solarwind.md#pkskvaluetype)
- [PageInfo](Solarwind.md#pageinfo)
- [PaginationResult](Solarwind.md#paginationresult)
- [PaginationType](Solarwind.md#paginationtype)
- [ParseFieldOptions](Solarwind.md#parsefieldoptions)
- [ParseSpecialObjectKeys](Solarwind.md#parsespecialobjectkeys)
- [ParsedDocumentIndexes](Solarwind.md#parseddocumentindexes)
- [ParsedIndexFilterPart](Solarwind.md#parsedindexfilterpart)
- [ParsedIndexKey](Solarwind.md#parsedindexkey)
- [ParsedIndexPart](Solarwind.md#parsedindexpart)
- [ParsedUpdateExpression](Solarwind.md#parsedupdateexpression)
- [QuerySort](Solarwind.md#querysort)
- [RecordFieldDef](Solarwind.md#recordfielddef)
- [RelationsFilter](Solarwind.md#relationsfilter)
- [Resolver](Solarwind.md#resolver)
- [ResolverContextBase](Solarwind.md#resolvercontextbase)
- [ResolverKind](Solarwind.md#resolverkind)
- [ResolverResolve](Solarwind.md#resolverresolve)
- [ResolversToTypeScriptOptions](Solarwind.md#resolverstotypescriptoptions)
- [RootFilterOperators](Solarwind.md#rootfilteroperators)
- [Seal](Solarwind.md#seal)
- [SealedField](Solarwind.md#sealedfield)
- [ShortenFinalFieldDefinition](Solarwind.md#shortenfinalfielddefinition)
- [SpecialObjectKeys](Solarwind.md#specialobjectkeys)
- [StringFieldDef](Solarwind.md#stringfielddef)
- [TAnyFieldType](Solarwind.md#tanyfieldtype)
- [TSFYConfig](Solarwind.md#tsfyconfig)
- [TSFYContext](Solarwind.md#tsfycontext)
- [TSFYPart](Solarwind.md#tsfypart)
- [TSFYRef](Solarwind.md#tsfyref)
- [TSFyChunkDefinition](Solarwind.md#tsfychunkdefinition)
- [TSFyHandlerUtils](Solarwind.md#tsfyhandlerutils)
- [TSFyTypeDef](Solarwind.md#tsfytypedef)
- [TopLevelFilterKey](Solarwind.md#toplevelfilterkey)
- [TransporterFieldType](Solarwind.md#transporterfieldtype)
- [TransporterLoader](Solarwind.md#transporterloader)
- [TransporterLoaderName](Solarwind.md#transporterloadername)
- [TransporterLoadersRecord](Solarwind.md#transporterloadersrecord)
- [Types](Solarwind.md#types)
- [UnknownFieldDef](Solarwind.md#unknownfielddef)
- [UpdateExpression](Solarwind.md#updateexpression)
- [UpdateExpressionKey](Solarwind.md#updateexpressionkey)
- [UpdateManyConfig](Solarwind.md#updatemanyconfig)
- [UpdateManyResult](Solarwind.md#updatemanyresult)
- [UpdateOneConfig](Solarwind.md#updateoneconfig)
- [UpdateOneResult](Solarwind.md#updateoneresult)
- [ValidationCustomMessage](Solarwind.md#validationcustommessage)
- [\_AllOptional](Solarwind.md#_alloptional)
- [\_AnyEntity](Solarwind.md#_anyentity)
- [\_DescribeField](Solarwind.md#_describefield)
- [\_DescribeObject](Solarwind.md#_describeobject)
- [\_EntityLoaderMethods](Solarwind.md#_entityloadermethods)
- [\_EntityLoaders](Solarwind.md#_entityloaders)
- [\_ExcludeExtend](Solarwind.md#_excludeextend)
- [\_ExtendMethodKeys](Solarwind.md#_extendmethodkeys)
- [\_FieldKV](Solarwind.md#_fieldkv)
- [\_GetAliasFields](Solarwind.md#_getaliasfields)
- [\_GetKey](Solarwind.md#_getkey)
- [\_GetLoaderFilterDef](Solarwind.md#_getloaderfilterdef)
- [\_GetParts](Solarwind.md#_getparts)
- [\_InferAlias](Solarwind.md#_inferalias)
- [\_InferAliasFields](Solarwind.md#_inferaliasfields)
- [\_InferField](Solarwind.md#_inferfield)
- [\_InferFinalField](Solarwind.md#_inferfinalfield)
- [\_InferObjectDefinition](Solarwind.md#_inferobjectdefinition)
- [\_InferSpecialObjectKeys](Solarwind.md#_inferspecialobjectkeys)
- [\_InnerDef](Solarwind.md#_innerdef)
- [\_ObjectFieldInputBase](Solarwind.md#_objectfieldinputbase)
- [\_OmitUndefined](Solarwind.md#_omitundefined)
- [\_ResolverArgs](Solarwind.md#_resolverargs)
- [\_ShortenFinalFieldDefinitionFieldAsString](Solarwind.md#_shortenfinalfielddefinitionfieldasstring)
- [\_ToString](Solarwind.md#_tostring)
- [\_WithInferList](Solarwind.md#_withinferlist)
- [\_WithInferOptional](Solarwind.md#_withinferoptional)

### Variables

- [$inferableKey](Solarwind.md#$inferablekey-1)
- [$sealed](Solarwind.md#$sealed-1)
- [$sealedKey](Solarwind.md#$sealedkey-1)
- [AttributeFilterKeys](Solarwind.md#attributefilterkeys)
- [SolarwindObject](Solarwind.md#solarwindobject)
- [CACHED\_FIELD\_INSTANCE\_KEY](Solarwind.md#cached_field_instance_key)
- [CircularDeps](Solarwind.md#circulardeps)
- [DEFAULT\_SORT](Solarwind.md#default_sort)
- [EntityErrorKind](Solarwind.md#entityerrorkind-1)
- [EntityHooksCreateDefinitionKind](Solarwind.md#entityhookscreatedefinitionkind-1)
- [EntityStore](Solarwind.md#entitystore)
- [FieldTypeErrorCodes](Solarwind.md#fieldtypeerrorcodes)
- [FieldTypes](Solarwind.md#fieldtypes)
- [FieldsTypeCache](Solarwind.md#fieldstypecache)
- [FilterConditionsParsers](Solarwind.md#filterconditionsparsers)
- [PageInfoType](Solarwind.md#pageinfotype)
- [SpecialObjectKeyEnum](Solarwind.md#specialobjectkeyenum)
- [TopLevelFilterKeys](Solarwind.md#toplevelfilterkeys)
- [ULID\_REGEX](Solarwind.md#ulid_regex)
- [\_parserHooks](Solarwind.md#_parserhooks)
- [create](Solarwind.md#create)
- [defaultTypesDest](Solarwind.md#defaulttypesdest)
- [indexConfigSchema](Solarwind.md#indexconfigschema)
- [indexItemSchema](Solarwind.md#indexitemschema)
- [isFieldTypeName](Solarwind.md#isfieldtypename)
- [objectMetaFieldKey](Solarwind.md#objectmetafieldkey)
- [relationSchema](Solarwind.md#relationschema)
- [resolverKinds](Solarwind.md#resolverkinds)
- [transporterLoaderNames](Solarwind.md#transporterloadernames)
- [tsfy\_defaults](Solarwind.md#tsfy_defaults)
- [types](Solarwind.md#types-1)

### Functions

- [\_\_getCachedFieldInstance](Solarwind.md#__getcachedfieldinstance)
- [\_ensureTransporterMethodsImplementation](Solarwind.md#_ensuretransportermethodsimplementation)
- [assertFieldFilter](Solarwind.md#assertfieldfilter)
- [cleanMetaField](Solarwind.md#cleanmetafield)
- [createAggioIndexBasedFilters](Solarwind.md#createaggioindexbasedfilters)
- [createSolarwindObject](Solarwind.md#createsolarwindobject)
- [createDocumentIndexBasedFilters](Solarwind.md#createdocumentindexbasedfilters)
- [createEmptyMetaField](Solarwind.md#createemptymetafield)
- [createEntity](Solarwind.md#createentity)
- [createEntityPlugin](Solarwind.md#createentityplugin)
- [createFieldTypeError](Solarwind.md#createfieldtypeerror)
- [createGraphQLSchema](Solarwind.md#creategraphqlschema)
- [createObjectType](Solarwind.md#createobjecttype)
- [createResolver](Solarwind.md#createresolver)
- [createResolverFactory](Solarwind.md#createresolverfactory)
- [createSchema](Solarwind.md#createschema)
- [createTSFYContext](Solarwind.md#createtsfycontext)
- [createTSfyRef](Solarwind.md#createtsfyref)
- [createType](Solarwind.md#createtype)
- [deleteCachedFieldInstance](Solarwind.md#deletecachedfieldinstance)
- [encodeIndexValue](Solarwind.md#encodeindexvalue)
- [extendObjectDefinition](Solarwind.md#extendobjectdefinition)
- [extendType](Solarwind.md#extendtype)
- [fieldToMock](Solarwind.md#fieldtomock)
- [getDocumentIndexFields](Solarwind.md#getdocumentindexfields)
- [getObjectDefinitionId](Solarwind.md#getobjectdefinitionid)
- [getObjectDefinitionMetaField](Solarwind.md#getobjectdefinitionmetafield)
- [getParsedIndexKeys](Solarwind.md#getparsedindexkeys)
- [getResolver](Solarwind.md#getresolver)
- [getTSFyIdentifier](Solarwind.md#gettsfyidentifier)
- [getType](Solarwind.md#gettype)
- [implementObject](Solarwind.md#implementobject-1)
- [isEntity](Solarwind.md#isentity)
- [isFieldError](Solarwind.md#isfielderror)
- [isFieldInstance](Solarwind.md#isfieldinstance)
- [isFilterConditionKey](Solarwind.md#isfilterconditionkey)
- [isHiddenFieldName](Solarwind.md#ishiddenfieldname)
- [isMetaField](Solarwind.md#ismetafield)
- [isMetaFieldKey](Solarwind.md#ismetafieldkey)
- [isObject](Solarwind.md#isobject)
- [isObjectAsTypeDefinition](Solarwind.md#isobjectastypedefinition)
- [isObjectValidationError](Solarwind.md#isobjectvalidationerror)
- [isPossibleArgsDef](Solarwind.md#ispossibleargsdef)
- [mergeIndexRelationsResult](Solarwind.md#mergeindexrelationsresult)
- [moduleWrapper](Solarwind.md#modulewrapper)
- [objectMock](Solarwind.md#objectmock)
- [parseAggioAttributeFilters](Solarwind.md#parseaggioattributefilters)
- [parseAggioUpdateExpression](Solarwind.md#parseaggioupdateexpression)
- [parseCollectionIndexConfig](Solarwind.md#parsecollectionindexconfig)
- [parseEntityIndexFields](Solarwind.md#parseentityindexfields)
- [parseField](Solarwind.md#parsefield)
- [parseFieldDefinitionConfig](Solarwind.md#parsefielddefinitionconfig)
- [parseFilterIndexFilterParts](Solarwind.md#parsefilterindexfilterparts)
- [parseFlattenFieldDefinition](Solarwind.md#parseflattenfielddefinition)
- [parseObjectDefinition](Solarwind.md#parseobjectdefinition)
- [parseObjectField](Solarwind.md#parseobjectfield)
- [parseOneIndexDocumentFields](Solarwind.md#parseoneindexdocumentfields)
- [parseUpdateExpression](Solarwind.md#parseupdateexpression)
- [parseValidationError](Solarwind.md#parsevalidationerror)
- [pickIndexKeyPartsFromDocument](Solarwind.md#pickindexkeypartsfromdocument)
- [registerEntity](Solarwind.md#registerentity)
- [resetTypesCache](Solarwind.md#resettypescache)
- [resolversToTypescript](Solarwind.md#resolverstotypescript)
- [resolversTypescriptParts](Solarwind.md#resolverstypescriptparts)
- [setParserHook](Solarwind.md#setparserhook)
- [tsfy](Solarwind.md#tsfy)
- [tsfyWriter](Solarwind.md#tsfywriter)

## References

### InferField

Renames and re-exports [Infer](Solarwind.md#infer)

## Type Aliases

### $inferableKey

Ƭ **$inferableKey**: typeof [`$inferableKey`](Solarwind.md#$inferablekey-1)

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:12

packages/schema/lib/fields/Infer/DescribeField.d.ts:13

___

### $sealed

Ƭ **$sealed**: typeof [`$sealed`](Solarwind.md#$sealed-1)

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:10

packages/schema/lib/fields/Infer/DescribeField.d.ts:11

___

### $sealedDef

Ƭ **$sealedDef**: `Compute`<{ `list`: ``false`` ; `literal`: [`$sealed`](Solarwind.md#$sealed-1) ; `optional`: ``false``  } & [`CommonDefSafe`](Solarwind.md#commondefsafe)\>

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:19

___

### $sealedKey

Ƭ **$sealedKey**: typeof [`$sealedKey`](Solarwind.md#$sealedkey-1)

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:8

packages/schema/lib/fields/Infer/DescribeField.d.ts:9

___

### AliasFieldAggregation

Ƭ **AliasFieldAggregation**<`Parent`\>: { `type`: [`FieldInput`](Solarwind.md#fieldinput)  } & { `aggregate`: `Aggregation`<`Parent`\> \| `Readonly`<`Aggregation`<`Parent`\>\> ; `from`: `ObjectPath`<`Parent`\>  } \| { `aggregate`: `Aggregation`<`Parent`\> \| `Readonly`<`Aggregation`<`Parent`\>\> ; `from?`: `undefined`  } \| { `aggregate?`: `undefined` ; `from`: `ObjectPath`<`Parent`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parent` | `any` |

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:5

___

### AliasFieldDef

Ƭ **AliasFieldDef**: `string` \| [`AliasFieldAggregation`](Solarwind.md#aliasfieldaggregation)

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
| `$eq` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) \| `boolean` |
| `$exists` | `boolean` |
| `$gt` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) |
| `$gte` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) |
| `$in` | `unknown`[] |
| `$lt` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) |
| `$lte` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) |
| `$matchString` | `string` |
| `$ne` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) \| `boolean` |
| `$startsWith` | `string` |
| `$type` | [`TransporterFieldType`](Solarwind.md#transporterfieldtype) |

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
| `$eq` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) |
| `$gt` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) |
| `$gte` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) |
| `$lt` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) |
| `$lte` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) |
| `$startsWith` | [`PKSKValueType`](Solarwind.md#pkskvaluetype) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:48

___

### AnyCollectionIndexConfig

Ƭ **AnyCollectionIndexConfig**: [`CollectionIndexConfig`](Solarwind.md#collectionindexconfig)<[`DocumentBase`](Solarwind.md#documentbase), `string`\>

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:44

___

### AnyDocIndexItem

Ƭ **AnyDocIndexItem**: [`DocumentIndexItem`](Solarwind.md#documentindexitem)

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

Ƭ **AnyResolver**: [`Resolver`](Solarwind.md#resolver)<`any`, `any`, `any`, `any`\>

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

Ƭ **AttributeFilterKey**: typeof [`AttributeFilterKeys`](Solarwind.md#attributefilterkeys)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:164

___

### SolarwindObjectDefinition

Ƭ **SolarwindObjectDefinition**: [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)

#### Defined in

packages/schema/lib/TObjectConfig.d.ts:3

___

### CollectionConfigIndexes

Ƭ **CollectionConfigIndexes**<`Doc`, `K`\>: `ReadonlyArray`<[`DocumentIndexItem`](Solarwind.md#documentindexitem)<`K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) |
| `K` | extends `string` = `Extract`<keyof `Doc`, `string`\> |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:39

___

### CollectionIndexConfig

Ƭ **CollectionIndexConfig**<`Doc`, `EntityName`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) |
| `EntityName` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `Readonly`<`EntityName`\> |
| `indexes` | [`CollectionConfigIndexes`](Solarwind.md#collectionconfigindexes)<`Doc`\> |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:40

___

### CommonDefSafe

Ƭ **CommonDefSafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `example?` | [`FieldExample`](Solarwind.md#fieldexample) |
| `hidden?` | `boolean` |
| `name?` | `string` |

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:41

___

### CommonFieldDefinition

Ƭ **CommonFieldDefinition**<`T`\>: { `type`: `T`  } & [`CommonFieldOptions`](Solarwind.md#commonfieldoptions)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:53

___

### CommonFieldOptions

Ƭ **CommonFieldOptions**: [`CommonDefSafe`](Solarwind.md#commondefsafe) & { `def?`: `any` ; `defaultValue?`: `any` ; `list?`: [`ListDefinition`](Solarwind.md#listdefinition) ; `optional?`: `boolean`  }

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
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Solarwind.md#loadercontext) |
| `indexConfig` | [`CollectionIndexConfig`](Solarwind.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
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
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Solarwind.md#loadercontext) |
| `filter` | [`MethodFilter`](Solarwind.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Solarwind.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |

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
| `Item` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Item`\> |
| `context?` | [`LoaderContext`](Solarwind.md#loadercontext) |
| `filter` | [`MethodFilter`](Solarwind.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Solarwind.md#collectionindexconfig)<`Item`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |

#### Defined in

packages/transporter/lib/Transporter.d.ts:134

___

### DeleteOneResult

Ƭ **DeleteOneResult**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `item` | `T` \| ``null`` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:203

___

### DescribeAndOverrideField

Ƭ **DescribeAndOverrideField**<`T`, `Override`\>: [`DescribeWithoutSeal`](Solarwind.md#describewithoutseal)<`T`\> extends infer R ? `R` extends [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition) ? [`SealedField`](Solarwind.md#sealedfield)<`Merge`<{ [K in keyof R as K extends keyof Override ? never : K]: R[K] }, `Override`\>\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |
| `Override` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:32

___

### DescribeField

Ƭ **DescribeField**<`Input`\>: [[`$sealedKey`](Solarwind.md#$sealedkey-1)] extends [keyof `Input`] ? `Input` : [`SealedField`](Solarwind.md#sealedfield)<[`_DescribeField`](Solarwind.md#_describefield)<`Input`\>\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:14

___

### DescribeObjectDefinition

Ƭ **DescribeObjectDefinition**<`Input`\>: [`$sealedKey`](Solarwind.md#$sealedkey-1) extends keyof `Input` ? `Input` : [`Input`] extends [`object`] ? [`Seal`](Solarwind.md#seal)<{ -readonly [K in keyof Input]: DescribeField<Input[K]\> }\> : [`Seal`](Solarwind.md#seal)<{}\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:35

___

### DescribeWithoutSeal

Ƭ **DescribeWithoutSeal**<`T`\>: `Omit`<[`DescribeField`](Solarwind.md#describefield)<`T`\>, [`$inferableKey`](Solarwind.md#$inferablekey-1) \| [`$sealedKey`](Solarwind.md#$sealedkey-1)\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

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
| `PK` | [`FilterConditions`](Solarwind.md#filterconditions) \| `string` |
| `SK` | [`FilterConditions`](Solarwind.md#filterconditions) \| `string` |
| `entity` | `string` |
| `key` | [`AnyDocIndexItem`](Solarwind.md#anydocindexitem)[``"name"``] |

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
| `PK` | [`IndexPKSKPartsListConfig`](../interfaces/Solarwind.IndexPKSKPartsListConfig.md)<`DocKeys`\> |
| `SK?` | [`IndexPKSKPartsListConfig`](../interfaces/Solarwind.IndexPKSKPartsListConfig.md)<`DocKeys`\> |
| `name` | [`DocumentIndexFieldKey`](Solarwind.md#documentindexfieldkey) |
| `relatedTo?` | `string` |
| `relations?` | `ReadonlyArray`<[`DocumentIndexRelation`](Solarwind.md#documentindexrelation)\> |

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

Ƭ **EdgeType**<`T`\>: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: { `cursor`: ``"string"`` ; `node`: `T` extends [`GraphTypeLike`](../interfaces/Solarwind.GraphTypeLike.md) ? `T` : ``"null"``  }  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/entity/lib/paginationUtils.d.ts:11

___

### EntityDocument

Ƭ **EntityDocument**<`Shape`\>: `IsKnown`<`Shape`\> extends ``1`` ? `Merge`<[`EntityDocumentBase`](Solarwind.md#entitydocumentbase), `Shape`\> : [`EntityDocumentBase`](Solarwind.md#entitydocumentbase) & { `[K: string]`: `unknown`;  }

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

Ƭ **EntityDocumentInput**<`Shape`\>: `IsKnown`<`Shape`\> extends ``1`` ? `Merge`<`Partial`<[`EntityDocumentBase`](Solarwind.md#entitydocumentbase)\>, `Shape`\> : `Partial`<[`EntityDocumentBase`](Solarwind.md#entitydocumentbase)\> & { `[K: string]`: `unknown`;  }

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
| `invalidFields?` | [`InvalidParsedIndexField`](Solarwind.md#invalidparsedindexfield)[] |
| `reason` | [`EntityErrorKind`](Solarwind.md#entityerrorkind-1) |

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:29

___

### EntityErrorKind

Ƭ **EntityErrorKind**: keyof [`EntityErrorKindEnum`](Solarwind.md#entityerrorkindenum)

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:2

packages/transporter/lib/CollectionErrors.d.ts:28

___

### EntityErrorKindEnum

Ƭ **EntityErrorKindEnum**: typeof [`EntityErrorKind`](Solarwind.md#entityerrorkind-1)

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:27

___

### EntityFieldResolver

Ƭ **EntityFieldResolver**<`Context`, `TypeDef`, `ArgsDef`, `Root`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | `Context` |
| `TypeDef` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |
| `ArgsDef` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) \| `undefined` |
| `Root` | `Root` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args?` | `ArgsDef` |
| `name` | `string` |
| `resolve` | [`ResolverResolve`](Solarwind.md#resolverresolve)<`Context`, `Root`, `TypeDef`, `ArgsDef`\> |
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
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`EntityDocument`](Solarwind.md#entitydocument)<{ `[K: string]`: `unknown`;  }\> |
| `E` | extends [`AnyEntity`](Solarwind.md#anyentity) = [`AnyEntity`](Solarwind.md#anyentity) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beforeQuery` | `Waterfall`<`EntityOperationInfoContext`, {}\> |
| `createDefinition` | `Parallel`<`Record`<`string`, [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition)\>, { `entityOptions`: [`EntityOptions`](Solarwind.md#entityoptions) ; `fields`: `string`[] ; `kind`: [`EntityHooksCreateDefinitionKind`](Solarwind.md#entityhookscreatedefinitionkind-1) ; `resolvers`: [`EntityFieldResolver`](Solarwind.md#entityfieldresolver)<`any`, `any`, `any`, `any`\>[]  }\> |
| `filterResult` | `Waterfall`<{ `items`: [`EntityDocument`](Solarwind.md#entitydocument)<`Doc`\>[] ; `kind`: ``"items"``  } \| { `kind`: ``"pagination"`` ; `pagination`: [`PaginationResult`](Solarwind.md#paginationresult)<[`EntityDocument`](Solarwind.md#entitydocument)<`Doc`\>\>  }, { `operation`: `EntityOperationInfoContext` ; `resolvers`: [`EntityFieldResolver`](Solarwind.md#entityfieldresolver)<`any`, `any`, `any`, `any`\>[]  }\> |
| `initCreation` | `Parallel`<[`EntityOptions`](Solarwind.md#entityoptions), `E`\> |
| `postParse` | `Waterfall`<`EntityOperationInfoContext`, [`EntityParserHookContext`](Solarwind.md#entityparserhookcontext)<`E`\>\> |
| `preParse` | `Waterfall`<`EntityOperationInfoContext`, [`EntityParserHookContext`](Solarwind.md#entityparserhookcontext)<`E`\>\> |
| `willResolve` | `Waterfall`<[`_EntityLoaders`](Solarwind.md#_entityloaders)<`E`\>, `EntityOperationInfoContext`\> |

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:21

___

### EntityHooksCreateDefinitionKind

Ƭ **EntityHooksCreateDefinitionKind**: typeof [`EntityHooksCreateDefinitionKind`](Solarwind.md#entityhookscreatedefinitionkind-1)[`number`]

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:12

packages/entity/lib/EntityPlugin.d.ts:13

___

### EntityLoaderConfig

Ƭ **EntityLoaderConfig**<`Method`, `Context`\>: [`TransporterLoadersRecord`](Solarwind.md#transporterloadersrecord)[`Method`] extends (`config`: infer Config) => `any` ? `Config` & { `context`: `Context`  } extends infer R ? { [K in keyof R as K extends "context" ? never : K]: R[K] } & { `context`: `Context`  } : `never` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Method` | extends [`TransporterLoaderName`](Solarwind.md#transporterloadername) |
| `Context` | extends [`LoaderContext`](Solarwind.md#loadercontext) = `Record`<`string`, `any`\> |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderConfig.d.ts:2

___

### EntityLoaderMethods

Ƭ **EntityLoaderMethods**<`Context`\>: [`_EntityLoaderMethods`](Solarwind.md#_entityloadermethods)<`Context`\> extends infer Methods ? { [K in keyof Methods]: Methods[K] extends Function ? Options extends Record<string, any\> ? Function & \_EntityLoaderUtils<Options, Context\> : Methods[K] : Methods[K] } & {} : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](Solarwind.md#anyentitytypescontext) |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:5

___

### EntityOptions

Ƭ **EntityOptions**<`InputDocumentDefinition`, `Indexes`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDocumentDefinition` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) = [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |
| `Indexes` | extends [`DocumentIndexesConfig`](../interfaces/Solarwind.DocumentIndexesConfig.md) = [`DocumentIndexesConfig`](../interfaces/Solarwind.DocumentIndexesConfig.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowExtraFields?` | `boolean` |
| `indexes` | `Indexes` |
| `logs?` | `LoggerOptions` |
| `name` | `string` |
| `transporter?` | [`Transporter`](../interfaces/Solarwind.Transporter.md) |
| `type` | [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `InputDocumentDefinition`  }\> |

#### Defined in

packages/entity/lib/EntityOptions.d.ts:4

___

### EntityParserHookContext

Ƭ **EntityParserHookContext**<`E`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`AnyEntity`](Solarwind.md#anyentity) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkForVersion?` | `boolean` |
| `entity` | `E` |

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:14

___

### FieldAsString

Ƭ **FieldAsString**: [`FieldTypeName`](Solarwind.md#fieldtypename) \| \`${FieldTypeName}?\` \| \`[${FieldTypeName}]\` \| \`[${FieldTypeName}]?\`

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
| `def` | [`FinalFieldDefinitionStrict`](Solarwind.md#finalfielddefinitionstrict) |
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

Ƭ **FieldDefinitionConfig**: [`ObjectFieldInput`](Solarwind.md#objectfieldinput)

#### Defined in

packages/schema/lib/TObjectConfig.d.ts:4

___

### FieldDefinitions

Ƭ **FieldDefinitions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ID` | { `autoCreate?`: `boolean`  } \| `undefined` |
| `alias` | [`AliasFieldDef`](Solarwind.md#aliasfielddef) |
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
| `meta` | [`MetaFieldDef`](Solarwind.md#metafielddef) |
| `null` | `undefined` |
| `object` | { `[K: string]`: [`ObjectFieldInput`](Solarwind.md#objectfieldinput);  } \| `Readonly`<{ `[K: string]`: [`ObjectFieldInput`](Solarwind.md#objectfieldinput);  }\> \| [`ObjectLike`](../interfaces/Solarwind.ObjectLike.md) |
| `phone` | `PhoneFieldDef` |
| `record` | [`RecordFieldDef`](Solarwind.md#recordfielddef) \| `undefined` |
| `string` | { `max?`: `number` ; `min?`: `number` ; `regex?`: [`string`] \| [`string`, `string`] \| `Readonly`<[`string`] \| [`string`, `string`]\>  } \| `undefined` |
| `ulid` | { `autoCreate?`: `boolean`  } \| `undefined` |
| `undefined` | `undefined` |
| `union` | [`ObjectFieldInput`](Solarwind.md#objectfieldinput)[] \| `Readonly`<[`ObjectFieldInput`](Solarwind.md#objectfieldinput)[]\> |
| `unknown` | [`UnknownFieldDef`](Solarwind.md#unknownfielddef) \| `undefined` |

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:65

___

### FieldExample

Ƭ **FieldExample**: [`FieldExampleFunction`](Solarwind.md#fieldexamplefunction) \| `string`

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

Ƭ **FieldInput**: [`ObjectFieldInput`](Solarwind.md#objectfieldinput)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:7

___

### FieldInputLikeRequiredKey

Ƭ **FieldInputLikeRequiredKey**: [`ObjectTypeKID`](Solarwind.md#objecttypekid) \| [`GraphTypeKID`](Solarwind.md#graphtypekid) \| [`FieldTypeName`](Solarwind.md#fieldtypename) \| ``"type"``

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:20

___

### FieldParserConfig

Ƭ **FieldParserConfig**: [`ValidationCustomMessage`](Solarwind.md#validationcustommessage) \| [`FieldParserOptionsObject`](Solarwind.md#fieldparseroptionsobject)

#### Defined in

packages/schema/lib/applyValidator.d.ts:11

___

### FieldParserOptionsObject

Ƭ **FieldParserOptionsObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowExtraFields?` | `boolean` |
| `customErrorMessage?` | [`ValidationCustomMessage`](Solarwind.md#validationcustommessage) |
| `customMessage?` | [`ValidationCustomMessage`](Solarwind.md#validationcustommessage) |
| `exclude?` | `string`[] |
| `excludeInvalidListItems?` | `boolean` |
| `includeHidden?` | `boolean` |
| `partial?` | `boolean` |

#### Defined in

packages/schema/lib/applyValidator.d.ts:2

___

### FieldTypeErrorCode

Ƭ **FieldTypeErrorCode**: typeof [`FieldTypeErrorCodes`](Solarwind.md#fieldtypeerrorcodes)[`number`]

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:2

___

### FieldTypeName

Ƭ **FieldTypeName**: `Extract`<keyof [`FieldDefinitions`](Solarwind.md#fielddefinitions), `string`\>

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:113

___

### FieldTypeOptions

Ƭ **FieldTypeOptions**: [`ListDefinitionObject`](Solarwind.md#listdefinitionobject) & { `[K: string]`: `unknown`;  }

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:6

___

### FieldTypeParser

Ƭ **FieldTypeParser**<`Type`\>: (`input`: `any`, `config?`: [`FieldParserConfig`](Solarwind.md#fieldparserconfig)) => `Type`

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
| `config?` | [`FieldParserConfig`](Solarwind.md#fieldparserconfig) |

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
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:34

___

### FilterRecord

Ƭ **FilterRecord**<`Doc`\>: [`EntityFilters`](Solarwind.md#entityfilters)<`Doc`\> \| { `$and?`: [`RootFilterOperators`](Solarwind.md#rootfilteroperators)<`Doc`\>[``"$and"``] ; `$not?`: [`RootFilterOperators`](Solarwind.md#rootfilteroperators)<`Doc`\>[``"$not"``] ; `$or?`: [`RootFilterOperators`](Solarwind.md#rootfilteroperators)<`Doc`\>[``"$or"``] ; `_id?`: `string` ; `_id1?`: `string` ; `_id2?`: `string` ; `_id3?`: `string` ; `id?`: `string`  } & [`EntityFilters`](Solarwind.md#entityfilters)<`Doc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:38

___

### FinalFieldDefinition

Ƭ **FinalFieldDefinition**: { [K in FieldTypeName]: CommonFieldDefinition<K\> }[[`FieldTypeName`](Solarwind.md#fieldtypename)]

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:27

___

### FinalFieldDefinitionStrict

Ƭ **FinalFieldDefinitionStrict**: [`AllFinalFieldDefinitions`](Solarwind.md#allfinalfielddefinitions)[keyof [`AllFinalFieldDefinitions`](Solarwind.md#allfinalfielddefinitions)]

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:26

___

### FinalObjectDefinition

Ƭ **FinalObjectDefinition**: `Object`

#### Index signature

▪ [K: `string`]: [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:11

___

### FindByIdConfig

Ƭ **FindByIdConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Solarwind.md#loadercontext) |
| `id` | `string` |
| `indexConfig` | [`CollectionIndexConfig`](Solarwind.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:97

___

### FindManyConfig

Ƭ **FindManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`IndexFilterRecord`](Solarwind.md#indexfilterrecord)<`PK`, `SK`\> extends infer R ? { [K in keyof R]: R[K] } : {} \| `string` |
| `condition?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Solarwind.md#loadercontext) |
| `filter` | [`MethodFilter`](Solarwind.md#methodfilter)<`PK`, `SK`\> |
| `first?` | `number` |
| `indexConfig` | [`CollectionIndexConfig`](Solarwind.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |
| `sort?` | [`QuerySort`](Solarwind.md#querysort) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:76

___

### FindManyResult

Ƭ **FindManyResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |

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
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Solarwind.md#loadercontext) |
| `filter` | [`MethodFilter`](Solarwind.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Solarwind.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:89

___

### FindOneResult

Ƭ **FindOneResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `item` | `Doc` \| ``null`` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:140

___

### FlattenFieldDefinition

Ƭ **FlattenFieldDefinition**: { [type in FieldTypeName]: { [K in type]: [FieldDefinitions[K]] extends [undefined] ? FieldDefinitions[K] \| Object : FieldDefinitions[K] } }[[`FieldTypeName`](Solarwind.md#fieldtypename)] & [`CommonFieldOptions`](Solarwind.md#commonfieldoptions)

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

Ƭ **GraphQLSchemaWithUtils**: `GraphQLSchema` & { `utils`: { `generateClientUtils`: () => `Promise`<`string`\> ; `grouped`: [`GroupedResolvers`](Solarwind.md#groupedresolvers) ; `print`: () => `string` ; `queryExamples`: (`options?`: [`ObjectMockOptions`](Solarwind.md#objectmockoptions) & { `resolver?`: `string`  }) => `string` ; `queryTemplates`: () => `SchemaQueryTemplatesResult` ; `registeredResolvers`: [`AnyResolver`](Solarwind.md#anyresolver)[] ; `resolvers`: [`AnyResolver`](Solarwind.md#anyresolver)[] ; `typescript`: (`options?`: [`ResolversToTypeScriptOptions`](Solarwind.md#resolverstotypescriptoptions)) => `Promise`<`string`\> ; `usedConfig`: `GraphQLSchemaConfig`  }  }

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:10

___

### GraphTypeArgs

Ƭ **GraphTypeArgs**<`Def`\>: [`string`, `Def` \| (`utils`: `SolarwindModules`) => `Def`] \| [`Def` \| (`utils`: `SolarwindModules`) => `Def`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) = [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |

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

Ƭ **ImplementObject**<`Dest`, `Extends`\>: `Extends` extends [] ? `Dest` : `Extends` extends [infer Item, ...(infer Rest)] ? `Dest` extends [`ObjectType`](../classes/Solarwind.ObjectType.md)<infer DestDef\> ? `Item` extends [`ObjectType`](../classes/Solarwind.ObjectType.md)<infer ItemDef\> ? [`ImplementObject`](Solarwind.md#implementobject)<[`ObjectType`](../classes/Solarwind.ObjectType.md)<{ [K in keyof Merge<ItemDef, DestDef\>]: Merge<ItemDef, DestDef\>[K] }\>, `Rest`\> : `never` : `never` : `never`

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
| `indexFilter` | [`IndexFilterFound`](Solarwind.md#indexfilterfound) |
| `relationFilters` | [`RelationsFilter`](Solarwind.md#relationsfilter)[] \| `undefined` |

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

Ƭ **Infer**<`Input`\>: `OnlyKnown`<`Input`\> extends infer Known ? `Known` extends `string` ? [`InferString`](Solarwind.md#inferstring)<`Known`\> : `Known` extends `object` ? [`$inferableKey`](Solarwind.md#$inferablekey-1) extends keyof `Known` ? `Known`[[`$inferableKey`](Solarwind.md#$inferablekey-1)] : [`_WithInferOptional`](Solarwind.md#_withinferoptional)<`Known`, [`_WithInferList`](Solarwind.md#_withinferlist)<`Known`, [`_InferField`](Solarwind.md#_inferfield)<`Known`\>\>\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:8

___

### InferFinalField

Ƭ **InferFinalField**<`TypeName`, `Def`\>: [`_InferFinalField`](Solarwind.md#_inferfinalfield)<`TypeName`, `Def`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TypeName` | extends [`FieldTypeName`](Solarwind.md#fieldtypename) |
| `Def` | `never` |

#### Defined in

packages/schema/lib/fields/Infer/InferFinalField.d.ts:6

___

### InferGraphType

Ƭ **InferGraphType**<`Input`\>: `Input` extends `unknown` ? `Input` extends [`GraphTypeLikeFieldDefinition`](../interfaces/Solarwind.GraphTypeLikeFieldDefinition.md) ? [`Infer`](Solarwind.md#infer)<`Input`[``"definition"``]\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/InferGraphType.d.ts:9

___

### InferObjectDefinition

Ƭ **InferObjectDefinition**<`Input`\>: [`Input`] extends [`object`] ? `NullableToPartial`<[`_InferObjectDefinition`](Solarwind.md#_inferobjectdefinition)<{ -readonly [K in keyof Input as K extends \`$${string}\` ? never : K]: Input[K] }\> & [`ParseSpecialObjectKeys`](Solarwind.md#parsespecialobjectkeys)<`Input`\>\> : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:11

___

### InferObjectType

Ƭ **InferObjectType**<`T`\>: `T` extends `unknown` ? `T` extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Solarwind.ObjectTypeLikeFieldDefinition.md) ? [`InferObjectDefinition`](Solarwind.md#inferobjectdefinition)<`T`[``"definition"``]\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:10

___

### InferRecordFieldType

Ƭ **InferRecordFieldType**<`Def`\>: `Def` extends { `keyType`: ``"int"`` \| ``"float"``  } ? { `[K: number]`: [`Infer`](Solarwind.md#infer)<`Def` extends { `type`: [`FieldDefinitionConfig`](Solarwind.md#fielddefinitionconfig)  } ? `Def`[``"type"``] : ``"any"``\>;  } : { `[K: string]`: [`Infer`](Solarwind.md#infer)<`Def` extends { `type`: [`FieldDefinitionConfig`](Solarwind.md#fielddefinitionconfig)  } ? `Def`[``"type"``] : ``"any"``\>;  }

#### Type parameters

| Name |
| :------ |
| `Def` |

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:10

___

### InferResolverArgs

Ƭ **InferResolverArgs**<`ArgsDef`\>: [`ArgsDef`] extends [`never`] ? `Record`<`string`, `unknown`\> : [`ArgsDef`] extends [`undefined`] ? `Record`<`string`, `unknown`\> : [`ArgsDef`] extends [{ `[K: string]`: `unknown`;  }] ? [`Infer`](Solarwind.md#infer)<{ `object`: `ArgsDef`  }\> : `Record`<`string`, `unknown`\>

#### Type parameters

| Name |
| :------ |
| `ArgsDef` |

#### Defined in

packages/schema/lib/Resolver.d.ts:8

___

### InferString

Ƭ **InferString**<`Input`\>: `Input` extends \`${infer Start}?\` ? [`InferString`](Solarwind.md#inferstring)<`Start`\> \| `undefined` : `Input` extends \`[${infer Start}]\` ? [`InferString`](Solarwind.md#inferstring)<`Start`\>[] : `Input` extends [`FieldTypeName`](Solarwind.md#fieldtypename) ? [`InferTypeName`](Solarwind.md#infertypename)<`Input`\> : `Input` extends \`[${infer Type}]\` ? [`InferString`](Solarwind.md#inferstring)<`Type`\>[] : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `string` |

#### Defined in

packages/schema/lib/fields/Infer/InferString.d.ts:2

___

### InferTypeName

Ƭ **InferTypeName**<`Type`\>: `Type` extends `unknown` ? `Type` extends [`FieldTypeName`](Solarwind.md#fieldtypename) ? `Type` extends ``"any"`` ? `any` : `Type` extends ``"boolean"`` ? `boolean` : `Type` extends ``"cursor"`` ? [`CursorType`](Solarwind.md#cursortype) : `Type` extends ``"phone"`` ? `string` : `Type` extends ``"null"`` ? ``null`` : `Type` extends ``"undefined"`` ? `undefined` : `Type` extends ``"unknown"`` ? `unknown` : `Type` extends ``"string"`` ? `string` : `Type` extends ``"date"`` ? `Date` : `Type` extends ``"email"`` ? `string` : `Type` extends ``"float"`` ? `number` : `Type` extends ``"record"`` ? { `[K: string]`: `any`;  } : `Type` extends ``"int"`` ? `number` : `Type` extends ``"ulid"`` ? `string` : `Type` extends ``"ID"`` ? `string` : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/fields/Infer/InferString.d.ts:3

___

### InnerDef

Ƭ **InnerDef**<`Input`\>: [`Input`] extends [`object`] ? [`DescribeField`](Solarwind.md#describefield)<`Input`\> extends infer R ? `IsKnown`<`R`\> extends ``1`` ? [`_InnerDef`](Solarwind.md#_innerdef)<`R`\> : [`DescribeObjectDefinition`](Solarwind.md#describeobjectdefinition)<`Input`\> : `never` : `never` extends infer R ? { [K in keyof R]: R[K] } & {} : {}

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
| `indexField` | [`AnyDocIndexItem`](Solarwind.md#anydocindexitem)[``"name"``] |
| `indexPartKind` | [`IndexPartKind`](Solarwind.md#indexpartkind) |
| `reason` | ``"missing"`` \| ``"invalid"`` |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:45

___

### LazyParseGraphTypePayload

Ƭ **LazyParseGraphTypePayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `definition` | [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition) |
| `definitionInput` | [`ObjectFieldInput`](Solarwind.md#objectfieldinput) \| (`utils`: `SolarwindModules`) => [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |
| `field` | [`TAnyFieldType`](Solarwind.md#tanyfieldtype) |
| `id` | `string` \| `undefined` |
| `idFromArgs` | `string` \| `undefined` |
| `objectType?` | `any` |

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:108

___

### ListDefinition

Ƭ **ListDefinition**: [`ListDefinitionObject`](Solarwind.md#listdefinitionobject) \| `boolean`

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

Ƭ **ListDefinitionTruthy**: [`ListDefinitionObject`](Solarwind.md#listdefinitionobject) \| ``true``

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

Ƭ **MakeFieldOptional**<`Object`, `OptionalField`\>: [`OverrideField`](Solarwind.md#overridefield)<`Object`, `OptionalField`, { `optional`: ``true``  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Object` | extends `object` |
| `OptionalField` | extends `A.Key` |

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:42

___

### MakeFieldRequired

Ƭ **MakeFieldRequired**<`Object`, `OptionalField`\>: [`OverrideField`](Solarwind.md#overridefield)<`Object`, `OptionalField`, { `optional`: ``false``  }\>

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

Ƭ **MakeTypeOptional**<`Type`\>: [`DescribeAndOverrideField`](Solarwind.md#describeandoverridefield)<`Type`, { `optional`: ``true``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/extendType.d.ts:21

___

### MakeTypeRequired

Ƭ **MakeTypeRequired**<`Type`\>: [`DescribeAndOverrideField`](Solarwind.md#describeandoverridefield)<`Type`, { `optional`: ``false``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/extendType.d.ts:24

___

### MakeTypeSingle

Ƭ **MakeTypeSingle**<`Type`\>: [`DescribeAndOverrideField`](Solarwind.md#describeandoverridefield)<`Type`, { `list`: ``false``  }\>

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

Ƭ **MethodFilter**<`PK`, `SK`\>: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](Solarwind.md#indexfilterrecord)<`PK`, `SK`\> extends infer F ? `F` extends `unknown` ? { [K in keyof F]?: F[K] } & { `id?`: [`PKSKValueType`](Solarwind.md#pkskvaluetype)  } : {} : {}\>\>

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

Ƭ **ObjectFieldInput**: [`_ObjectFieldInputBase`](Solarwind.md#_objectfieldinputbase) \| [`FlattenFieldDefinition`](Solarwind.md#flattenfielddefinition)

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

Ƭ **ObjectTypeFromInput**<`DefinitionInput`\>: `IsKnown`<`DefinitionInput`\> extends ``1`` ? [`DefinitionInput`] extends [[`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)] ? [`ObjectType`](../classes/Solarwind.ObjectType.md)<`DefinitionInput`\> : `never` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)\> |

#### Defined in

packages/schema/lib/ObjectType.d.ts:115

___

### ObjectTypeKID

Ƭ **ObjectTypeKID**: ``"__isSolarwindObject"``

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:17

___

### OneFilterOperation

Ƭ **OneFilterOperation**: { [K in keyof AllFilterOperations]: { [L in K]: AllFilterOperations[K] } }[keyof [`AllFilterOperations`](Solarwind.md#allfilteroperations)]

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

Ƭ **PageInfo**: [`Infer`](Solarwind.md#infer)<typeof [`PageInfoType`](Solarwind.md#pageinfotype)\>

#### Defined in

packages/entity/lib/paginationUtils.d.ts:10

___

### PaginationResult

Ƭ **PaginationResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |

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

Ƭ **PaginationType**<`T`\>: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: { `edges`: { `list`: ``true`` ; `type`: [`EdgeType`](Solarwind.md#edgetype)<`T`\>  } ; `pageInfo`: typeof [`PageInfoType`](Solarwind.md#pageinfotype)  }  }\>

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

Ƭ **ParsedDocumentIndexes**: { `error`: ``null`` ; `filtersFound?`: [`DocumentIndexFilterParsed`](Solarwind.md#documentindexfilterparsed)[] ; `firstIndex`: [`FirstIndexParsed`](../interfaces/Solarwind.FirstIndexParsed.md) ; `indexFields`: [`CommonIndexFields`](Solarwind.md#commonindexfields) ; `invalidFields`: ``null`` ; `parsedIndexKeys`: [`ParsedIndexKey`](Solarwind.md#parsedindexkey)[] ; `valid`: ``true``  } \| { `error`: [`CollectionErrors`](../classes/Solarwind.CollectionErrors.md) ; `firstIndex`: [`FirstIndexParsed`](../interfaces/Solarwind.FirstIndexParsed.md) \| ``null`` ; `indexFields`: ``null`` ; `invalidFields`: [`ParsedIndexPart`](Solarwind.md#parsedindexpart)[``"invalidFields"``] ; `parsedIndexKeys`: [`ParsedIndexKey`](Solarwind.md#parsedindexkey)[] ; `uniqIndexCondition?`: `undefined` ; `valid`: ``false``  }

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:101

___

### ParsedIndexFilterPart

Ƭ **ParsedIndexFilterPart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PKPartOpen` | `string` |
| `PKPartParsed` | [`ParsedIndexPart`](Solarwind.md#parsedindexpart) |
| `SKPartParsed` | [`ParsedIndexPart`](Solarwind.md#parsedindexpart) \| ``null`` |
| `entity` | `string` |
| `index` | [`DocumentIndexItem`](Solarwind.md#documentindexitem) |
| `indexFilter` | [`IndexFilterRecord`](Solarwind.md#indexfilterrecord) |

#### Defined in

packages/transporter/lib/parseFilterIndexFilterParts.d.ts:4

___

### ParsedIndexKey

Ƭ **ParsedIndexKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK` | { `definition`: `Readonly`<[`AnyDocIndexItem`](Solarwind.md#anydocindexitem)[``"PK"``]\> ; `destinationField`: { `key`: `string` ; `value`: `string`  } ; `parsed`: [`ParsedIndexPart`](Solarwind.md#parsedindexpart) ; `requiredFields`: `string`[]  } |
| `PK.definition` | `Readonly`<[`AnyDocIndexItem`](Solarwind.md#anydocindexitem)[``"PK"``]\> |
| `PK.destinationField` | { `key`: `string` ; `value`: `string`  } |
| `PK.destinationField.key` | `string` |
| `PK.destinationField.value` | `string` |
| `PK.parsed` | [`ParsedIndexPart`](Solarwind.md#parsedindexpart) |
| `PK.requiredFields` | `string`[] |
| `SK` | { `definition`: `Readonly`<[`AnyDocIndexItem`](Solarwind.md#anydocindexitem)[``"SK"``]\> ; `destinationField`: { `key`: `string` ; `value`: `string`  } ; `parsed`: [`ParsedIndexPart`](Solarwind.md#parsedindexpart) ; `requiredFields`: `string`[]  } |
| `SK.definition` | `Readonly`<[`AnyDocIndexItem`](Solarwind.md#anydocindexitem)[``"SK"``]\> |
| `SK.destinationField` | { `key`: `string` ; `value`: `string`  } |
| `SK.destinationField.key` | `string` |
| `SK.destinationField.value` | `string` |
| `SK.parsed` | [`ParsedIndexPart`](Solarwind.md#parsedindexpart) |
| `SK.requiredFields` | `string`[] |
| `entity` | `string` |
| `index` | [`AnyDocIndexItem`](Solarwind.md#anydocindexitem) |
| `indexFieldsParsed` | [`DocumentIndexFieldsParsed`](../interfaces/Solarwind.DocumentIndexFieldsParsed.md) |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:73

___

### ParsedIndexPart

Ƭ **ParsedIndexPart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK_SK` | ``"PK"`` \| ``"SK"`` |
| `conditionFound?` | [`OneFilterOperation`](Solarwind.md#onefilteroperation) |
| `foundEmptyCondition?` | `boolean` |
| `foundParts` | `string`[] |
| `fullIndexFound` | `string` \| ``null`` |
| `indexField` | [`AnyDocIndexItem`](Solarwind.md#anydocindexitem)[``"name"``] |
| `invalidFields` | [`InvalidParsedIndexField`](Solarwind.md#invalidparsedindexfield)[] |
| `isFilter` | `boolean` |
| `nullableFound?` | { `value`: ``null`` \| `undefined`  } |
| `nullableFound.value` | ``null`` \| `undefined` |
| `requiredFields` | `string`[] |
| `valid` | `boolean` |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:52

___

### ParsedUpdateExpression

Ƭ **ParsedUpdateExpression**<`TSchema`\>: [`UpdateExpression`](Solarwind.md#updateexpression)<`TSchema`\> extends infer UX ? keyof `UX` extends infer OP ? `OP` extends keyof `UX` ? `UX`[`OP`] extends infer V ? { `entries`: [`Join`<`NestedPaths`<`TSchema`\>, ``"."``\>, `V`][] ; `operator`: `OP` ; `valueConstructorName`: `string`  } : `any` : `any` : `any` : `any`

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
| `type?` | [`FieldDefinitionConfig`](Solarwind.md#fielddefinitionconfig) |

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

Ƭ **Resolver**<`Context`, `Root`, `Type`, `Args`\>: `Compute`<[`OptionalResolverConfig`](Solarwind.md#optionalresolverconfig)<`Root`, `Context`, `Args`\> & { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `Args`, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Type`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  }, ``1``\>

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

Ƭ **ResolverResolve**<`Context`, `Source`, `TypeDef`, `ArgsDef`\>: (`x`: [`InferResolverArgs`](Solarwind.md#inferresolverargs)<`ArgsDef`\>) => `any` extends (`x`: infer R) => `any` ? { [K in keyof R]: R[K] } : `never` extends infer Args ? (`x`: [`Infer`](Solarwind.md#infer)<`TypeDef`\>) => `any` extends (`x`: infer R) => `any` ? (`parent`: `Compute`<`Source`\>, `args`: `Compute`<`Args`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `IsKnown`<`R`\> extends ``1`` ? `Compute`<`Promise`<`R`\> \| `R`\> : `any` : (`parent`: `Source`, `args`: `Record`<`string`, `unknown`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `Promise`<`any`\> \| `any` : `never` extends infer R ? `R` : `never`

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
| `resolvers` | [`AnyResolver`](Solarwind.md#anyresolver)[] |

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:39

___

### RootFilterOperators

Ƭ **RootFilterOperators**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = `Record`<`string`, `any`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$and?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Doc`\>[] |
| `$not?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Doc`\> |
| `$or?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Doc`\>[] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:29

___

### Seal

Ƭ **Seal**<`T`\>: `Merge`<`T`, { `$sealed`: [`$sealedDef`](Solarwind.md#$sealeddef)  }\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:24

___

### SealedField

Ƭ **SealedField**<`D`\>: ``"type"`` extends keyof `D` ? [`Seal`](Solarwind.md#seal)<`Merge`<[`CommonDefSafe`](Solarwind.md#commondefsafe), `D`\>\> : `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:18

___

### ShortenFinalFieldDefinition

Ƭ **ShortenFinalFieldDefinition**: { [Type in FieldTypeName]: { [K in \_ShortenFinalFieldDefinitionFieldAsString<Type\>]: K \| { [L in K]: FieldDefinitions[Type] \| Object } }[\_ShortenFinalFieldDefinitionFieldAsString<Type\>] }[[`FieldTypeName`](Solarwind.md#fieldtypename)]

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

Ƭ **TAnyFieldType**: [`AllFieldTypes`](Solarwind.md#allfieldtypes)[keyof [`AllFieldTypes`](Solarwind.md#allfieldtypes)]

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:69

___

### TSFYConfig

Ƭ **TSFYConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `context?` | [`TSFYContext`](Solarwind.md#tsfycontext) |
| `customParser?` | [`TSFYCustomHandler`](../interfaces/Solarwind.TSFYCustomHandler.md) |
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
| `config` | `PartialRequired`<[`TSFYConfig`](Solarwind.md#tsfyconfig), ``"customParser"``\> |
| `header` | `Record`<`string`, `string`\> |
| `refs` | `Record`<`string`, [`TSFYRef`](Solarwind.md#tsfyref)\> |

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:26

___

### TSFYPart

Ƭ **TSFYPart**: `string` \| [`TSFYRef`](Solarwind.md#tsfyref) \| [`TSFYPart`](Solarwind.md#tsfypart)[]

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
| `parts` | [`TSFYPart`](Solarwind.md#tsfypart)[] |
| `result?` | `string` |

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:19

___

### TSFyChunkDefinition

Ƭ **TSFyChunkDefinition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `functionArguments?` | [`TSFyTypeDef`](Solarwind.md#tsfytypedef)[] |
| `functionResult?` | [`TSFyTypeDef`](Solarwind.md#tsfytypedef) |
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
| `context` | [`TSFYContext`](Solarwind.md#tsfycontext) |
| `currentRef` | [`TSFYRef`](Solarwind.md#tsfyref) |
| `existing` | [`TSFYRef`](Solarwind.md#tsfyref) \| `undefined` |
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
| `body` | ([`TSFyChunkDefinition`](Solarwind.md#tsfychunkdefinition) \| `string`)[] |
| `header?` | `Record`<`string`, `string`\> |

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:39

___

### TopLevelFilterKey

Ƭ **TopLevelFilterKey**: typeof [`TopLevelFilterKeys`](Solarwind.md#toplevelfilterkeys)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:166

___

### TransporterFieldType

Ƭ **TransporterFieldType**: typeof [`FieldTypes`](Solarwind.md#fieldtypes)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:7

___

### TransporterLoader

Ƭ **TransporterLoader**: [`TransporterLoadersRecord`](Solarwind.md#transporterloadersrecord)[[`TransporterLoaderName`](Solarwind.md#transporterloadername)]

#### Defined in

packages/transporter/lib/Transporter.d.ts:224

___

### TransporterLoaderName

Ƭ **TransporterLoaderName**: typeof [`transporterLoaderNames`](Solarwind.md#transporterloadernames)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:220

___

### TransporterLoadersRecord

Ƭ **TransporterLoadersRecord**: { [K in TransporterLoaderName]: Transporter[K] }

#### Defined in

packages/transporter/lib/Transporter.d.ts:221

___

### Types

Ƭ **Types**: typeof [`types`](Solarwind.md#types-1)

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
| `$addToSet?` | [`ArrayOperationRecord`](Solarwind.md#arrayoperationrecord)<`TSchema`\> |
| `$append?` | [`ArrayOperationRecord`](Solarwind.md#arrayoperationrecord)<`TSchema`\> |
| `$inc?` | `UpdateDefinition`<`TSchema`\>[``"$inc"``] |
| `$prepend?` | [`ArrayOperationRecord`](Solarwind.md#arrayoperationrecord)<`TSchema`\> |
| `$pull?` | [`ArrayOperationRecord`](Solarwind.md#arrayoperationrecord)<`TSchema`, ``"$in"``\> |
| `$remove?` | `MaybeArray`<\`${Join<NestedPaths<TSchema\>, "."\>}${\`.${string}\` \| ""}\`\> |
| `$set?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |
| `$setIfNull?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |
| `$setOnInsert?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:148

___

### UpdateExpressionKey

Ƭ **UpdateExpressionKey**: `Extract`<keyof [`UpdateExpression`](Solarwind.md#updateexpression)<`any`\>, `string`\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:159

___

### UpdateManyConfig

Ƭ **UpdateManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Solarwind.md#loadercontext) |
| `filter` | [`MethodFilter`](Solarwind.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Solarwind.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `update` | [`UpdateExpression`](Solarwind.md#updateexpression)<`Doc`\> |
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
| `Doc` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Solarwind.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Solarwind.md#loadercontext) |
| `filter` | [`MethodFilter`](Solarwind.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Solarwind.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `update` | [`UpdateExpression`](Solarwind.md#updateexpression)<`Doc`\> |
| `upsert?` | `boolean` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:112

___

### UpdateOneResult

Ƭ **UpdateOneResult**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](Solarwind.md#documentbase) = [`DocumentBase`](Solarwind.md#documentbase) |

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

Ƭ **\_AllOptional**<`Input`\>: [`MakeFieldOptional`](Solarwind.md#makefieldoptional)<[`DescribeObjectDefinition`](Solarwind.md#describeobjectdefinition)<`Input`\>, keyof `Input`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:75

___

### \_AnyEntity

Ƭ **\_AnyEntity**: [`EntityFromContext`](../interfaces/Solarwind.EntityFromContext.md)<[`EntityTypesContext`](../interfaces/Solarwind.EntityTypesContext.md)<{}, [`DocumentIndexItem`](Solarwind.md#documentindexitem)[]\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/Entity.d.ts:7

___

### \_DescribeField

Ƭ **\_DescribeField**<`Input`\>: `OnlyKnown`<`Input`\> extends infer Known ? `Known` extends `string` ? `ParseStringDefinition`<`Known`\> : `Known` extends `object` ? [`_DescribeObject`](Solarwind.md#_describeobject)<`Known`\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:17

___

### \_DescribeObject

Ƭ **\_DescribeObject**<`Input`\>: [`_FieldKV`](Solarwind.md#_fieldkv)<`Input`\> extends [infer K, infer V] ? `K` extends keyof `Input` ? `K` extends [`GraphTypeKID`](Solarwind.md#graphtypekid) ? ``"definition"`` extends keyof `Input` ? [`DescribeField`](Solarwind.md#describefield)<`Input`[``"definition"``]\> : `never` : `K` extends [`ObjectTypeKID`](Solarwind.md#objecttypekid) ? ``"definition"`` extends keyof `Input` ? { `def`: [`DescribeObjectDefinition`](Solarwind.md#describeobjectdefinition)<`Input`[``"definition"``]\> ; `list`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"optional"``\> ; `type`: ``"object"``  } : `never` : `K` extends [`FieldTypeName`](Solarwind.md#fieldtypename) ? { `def`: `V` ; `list`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"optional"``\> ; `type`: `K`  } : `K` extends ``"type"`` ? `V` extends [`FieldTypeName`](Solarwind.md#fieldtypename) ? { `def`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"def"``\> ; `list`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"optional"``\> ; `type`: `V`  } : `Input`[`K`] extends [`GraphTypeLikeFieldDefinition`](../interfaces/Solarwind.GraphTypeLikeFieldDefinition.md) ? `Merge`<[`DescribeField`](Solarwind.md#describefield)<`Input`[`K`][``"definition"``]\>, [`_OmitUndefined`](Solarwind.md#_omitundefined)<{ `list`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"optional"``\>  }\>\> : `Input`[`K`] extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Solarwind.ObjectTypeLikeFieldDefinition.md) ? { `def`: [`DescribeObjectDefinition`](Solarwind.md#describeobjectdefinition)<`Input`[`K`][``"definition"``]\> ; `list`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"optional"``\> ; `type`: ``"object"``  } : `never` : `never` : `never` : `never`

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
| `Context` | extends [`AnyEntityTypesContext`](Solarwind.md#anyentitytypescontext) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createOne` | [`CreateOne`](../interfaces/Solarwind.CreateOne.md)<`Context`[``"documentCreationInput"``], `Context`[``"document"``], `Context`[``"indexes"``]\> |
| `deleteMany` | [`DeleteMany`](../interfaces/Solarwind.DeleteMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `deleteOne` | [`DeleteOne`](../interfaces/Solarwind.DeleteOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findById` | [`FindById`](../interfaces/Solarwind.FindById.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findMany` | [`FindMany`](../interfaces/Solarwind.FindMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findOne` | [`FindOne`](../interfaces/Solarwind.FindOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `paginate` | [`Paginate`](../interfaces/Solarwind.Paginate.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `updateMany` | [`UpdateMany`](../interfaces/Solarwind.UpdateMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `updateOne` | [`UpdateOne`](../interfaces/Solarwind.UpdateOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |

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

Ƭ **\_FieldKV**<`Input`\>: keyof `Input` extends infer K ? `K` extends `unknown` ? `K` extends keyof `Input` ? `K` extends [`FieldInputLikeRequiredKey`](Solarwind.md#fieldinputlikerequiredkey) ? [`K`, `Input`[`K`]] : `never` : `never` : `never` : `never`

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

Ƭ **\_InferAlias**<`Input`, `Parent`\>: `Input` extends `string` ? `GetFieldByDotNotation`<`Parent`, `Input`\> : `Input` extends `object` ? keyof `Input` extends infer K ? `K` extends `unknown` ? `K` extends keyof `Input` ? `K` extends ``"type"`` ? [`Infer`](Solarwind.md#infer)<`Input`[`K`]\> : `K` extends ``"alias"`` ? [`_InferAlias`](Solarwind.md#_inferalias)<`Input`[`K`], `Parent`\> : `never` : `never` : `never` : `never` : `never`

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

Ƭ **\_InferField**<`Input`\>: [`_FieldKV`](Solarwind.md#_fieldkv)<`Input`\> extends [infer K, infer V] ? `K` extends keyof `Input` ? `K` extends [`GraphTypeKID`](Solarwind.md#graphtypekid) ? [`InferGraphType`](Solarwind.md#infergraphtype)<`Input`\> : `K` extends [`ObjectTypeKID`](Solarwind.md#objecttypekid) ? [`InferObjectType`](Solarwind.md#inferobjecttype)<`Input`\> : `K` extends [`FieldTypeName`](Solarwind.md#fieldtypename) ? [`InferFinalField`](Solarwind.md#inferfinalfield)<`K`, `V`\> : `K` extends ``"type"`` ? `V` extends [`FieldTypeName`](Solarwind.md#fieldtypename) ? [`InferFinalField`](Solarwind.md#inferfinalfield)<`V`, [`_GetKey`](Solarwind.md#_getkey)<`Input`, ``"def"``\>\> : `Input`[`K`] extends [`GraphTypeLikeFieldDefinition`](../interfaces/Solarwind.GraphTypeLikeFieldDefinition.md) ? [`InferGraphType`](Solarwind.md#infergraphtype)<`Input`[`K`]\> : `Input`[`K`] extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Solarwind.ObjectTypeLikeFieldDefinition.md) ? [`InferObjectType`](Solarwind.md#inferobjecttype)<`Input`[`K`]\> : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:9

___

### \_InferFinalField

Ƭ **\_InferFinalField**<`TypeName`, `Def`\>: `TypeName` extends ``"literal"`` ? `Def` : `TypeName` extends ``"array"`` ? [`Def`] extends [`ArrayFieldDef`<infer Of\>] ? [`Infer`](Solarwind.md#infer)<`Of`\>[] : `never` : `TypeName` extends ``"object"`` ? [`Def`] extends [`object`] ? [`InferObjectDefinition`](Solarwind.md#inferobjectdefinition)<`Def`\> : `never` : `TypeName` extends ``"enum"`` ? [`Def`] extends [`ReadonlyArray`<infer Item\>] ? `Item` : `never` : `TypeName` extends ``"union"`` ? [`Def`] extends [`ReadonlyArray`<infer Item\>] ? [`Infer`](Solarwind.md#infer)<`Item`\> : `never` : `TypeName` extends ``"record"`` ? [`Def`] extends [{ `keyType?`: infer KeyType ; `type?`: infer Type  }] ? { [K in KeyType extends "int" \| "float" ? number : string]: Infer<Type\> } : { `[K: string]`: `any`;  } : `TypeName` extends ``"literal"`` ? `Def` : [`InferTypeName`](Solarwind.md#infertypename)<`TypeName`\>

#### Type parameters

| Name |
| :------ |
| `TypeName` |
| `Def` |

#### Defined in

packages/schema/lib/fields/Infer/InferFinalField.d.ts:7

___

### \_InferObjectDefinition

Ƭ **\_InferObjectDefinition**<`Input`\>: [`_GetAliasFields`](Solarwind.md#_getaliasfields)<`Input`\> extends infer Aliases ? { [K in Exclude<keyof Input, keyof Aliases\>]: Infer<Input[K]\> } & [`_InferSpecialObjectKeys`](Solarwind.md#_inferspecialobjectkeys)<`Input`\> extends infer Parent ? [`_InferAliasFields`](Solarwind.md#_inferaliasfields)<`Cast`<`Aliases`, `object`\>, `Cast`<`Parent`, `object`\>\> & `Parent` : `never` : `never`

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

Ƭ **\_InnerDef**<`R`\>: ``"type"`` extends keyof `R` ? ``"def"`` extends keyof `R` ? `R`[``"type"``] extends ``"object"`` ? `R`[``"def"``] extends `object` ? [`DescribeObjectDefinition`](Solarwind.md#describeobjectdefinition)<`R`[``"def"``]\> : `never` : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `R` |

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:41

___

### \_ObjectFieldInputBase

Ƭ **\_ObjectFieldInputBase**: [`GraphTypeLikeFieldDefinition`](../interfaces/Solarwind.GraphTypeLikeFieldDefinition.md) \| [`ObjectTypeLikeFieldDefinition`](../interfaces/Solarwind.ObjectTypeLikeFieldDefinition.md) \| [`ObjectInTypeFieldDefinition`](../interfaces/Solarwind.ObjectInTypeFieldDefinition.md) \| [`GraphTypeInTypeFieldDefinition`](../interfaces/Solarwind.GraphTypeInTypeFieldDefinition.md) \| [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition) \| [`FieldAsString`](Solarwind.md#fieldasstring)

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

Ƭ **\_ResolverArgs**<`ArgsType`\>: `Exclude`<`ArgsType`, `undefined`\> extends infer R ? `IsKnown`<`R`\> extends ``1`` ? [`Infer`](Solarwind.md#infer)<{ `object`: `R`  }\> : {} : {}

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
| `T` | extends [`FieldTypeName`](Solarwind.md#fieldtypename) |

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

Ƭ **\_WithInferList**<`FieldDefinition`, `InferredValue`\>: [``true``] extends [[`_GetKey`](Solarwind.md#_getkey)<`FieldDefinition`, ``"list"``\>] ? `InferredValue`[] : `InferredValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FieldDefinition` | extends `object` |
| `InferredValue` | `InferredValue` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:13

___

### \_WithInferOptional

Ƭ **\_WithInferOptional**<`FieldDefinition`, `InferredValue`\>: [``true``] extends [[`_GetKey`](Solarwind.md#_getkey)<`FieldDefinition`, ``"optional"``\>] ? `InferredValue` \| `undefined` : `InferredValue`

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

### SolarwindObject

• `Const` **SolarwindObject**: typeof [`ObjectType`](../classes/Solarwind.ObjectType.md)

#### Defined in

packages/schema/lib/ObjectType.d.ts:114

___

### CACHED\_FIELD\_INSTANCE\_KEY

• `Const` **CACHED\_FIELD\_INSTANCE\_KEY**: ``"__cachedFieldInstance"``

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:48

___

### CircularDeps

• `Const` **CircularDeps**: `SolarwindModules`

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

• `Const` **FieldsTypeCache**: `Map`<`string`, { `defKeys`: `string`[] \| `undefined` ; `fieldType`: [`TAnyFieldType`](Solarwind.md#tanyfieldtype)  }\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:14

___

### FilterConditionsParsers

• `Const` **FilterConditionsParsers**: { [K in keyof FilterConditions]-?: Function }

#### Defined in

packages/transporter/lib/Transporter.d.ts:160

___

### PageInfoType

• `Const` **PageInfoType**: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: { `endCursor`: ``"string?"`` ; `hasNextPage`: ``"boolean"`` ; `hasPreviousPage`: ``"boolean"`` ; `startCursor`: ``"string?"``  }  }\>

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

• `Const` **\_parserHooks**: [`ParserHook`](../interfaces/Solarwind.ParserHook.md)[]

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:10

___

### create

• `Const` **create**: [`FieldCreators`](Solarwind.md#fieldcreators)

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
| `ID` | typeof [`IDField`](../classes/Solarwind.IDField.md) |
| `alias` | typeof [`AliasField`](../classes/Solarwind.AliasField.md) |
| `any` | typeof [`AnyField`](../classes/Solarwind.AnyField.md) |
| `array` | typeof `ArrayField` |
| `boolean` | typeof [`BooleanField`](../classes/Solarwind.BooleanField.md) |
| `cursor` | typeof [`CursorField`](../classes/Solarwind.CursorField.md) |
| `date` | typeof [`DateField`](../classes/Solarwind.DateField.md) |
| `email` | typeof [`EmailField`](../classes/Solarwind.EmailField.md) |
| `enum` | typeof [`EnumField`](../classes/Solarwind.EnumField.md) |
| `float` | typeof [`FloatField`](../classes/Solarwind.FloatField.md) |
| `int` | typeof [`IntField`](../classes/Solarwind.IntField.md) |
| `literal` | typeof [`LiteralField`](../classes/Solarwind.LiteralField.md) |
| `meta` | typeof [`MetaField`](../classes/Solarwind.MetaField.md) |
| `null` | typeof [`NullField`](../classes/Solarwind.NullField.md) |
| `object` | typeof [`ObjectField`](../classes/Solarwind.ObjectField.md) |
| `phone` | typeof `PhoneField` |
| `record` | typeof [`RecordField`](../classes/Solarwind.RecordField.md) |
| `string` | typeof [`StringField`](../classes/Solarwind.StringField.md) |
| `ulid` | typeof [`UlidField`](../classes/Solarwind.UlidField.md) |
| `undefined` | typeof [`UndefinedField`](../classes/Solarwind.UndefinedField.md) |
| `union` | typeof [`UnionField`](../classes/Solarwind.UnionField.md) |
| `unknown` | typeof [`UnknownField`](../classes/Solarwind.UnknownField.md) |

#### Defined in

packages/schema/lib/fields/fieldTypes.d.ts:44

## Functions

### \_\_getCachedFieldInstance

▸ **__getCachedFieldInstance**(`field`): [`TAnyFieldType`](Solarwind.md#tanyfieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `Object` |

#### Returns

[`TAnyFieldType`](Solarwind.md#tanyfieldtype)

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
| `options.filter` | [`IndexFilterRecord`](Solarwind.md#indexfilterrecord)<`string`, `string`\> |
| `options.indexConfig` | [`AnyCollectionIndexConfig`](Solarwind.md#anycollectionindexconfig) |

#### Returns

`Query`<`any`\>[]

#### Defined in

packages/transporter/lib/parseAggioAttributeFilters.d.ts:4

___

### createSolarwindObject

▸ **createSolarwindObject**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:116

▸ **createSolarwindObject**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:117

___

### createDocumentIndexBasedFilters

▸ **createDocumentIndexBasedFilters**(`filter`, `indexConfig`): [`IndexBasedFilterParsed`](Solarwind.md#indexbasedfilterparsed)

Receives a document indexConfig and a key-value filter and converts to
an index based search filter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`IndexFilterRecord`](Solarwind.md#indexfilterrecord)<`string`, `string`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Solarwind.md#anycollectionindexconfig) |

#### Returns

[`IndexBasedFilterParsed`](Solarwind.md#indexbasedfilterparsed)

#### Defined in

packages/transporter/lib/createDocumentIndexBasedFilters.d.ts:9

___

### createEmptyMetaField

▸ **createEmptyMetaField**(): [`MetaField`](../classes/Solarwind.MetaField.md)[``"asFinalFieldDef"``]

#### Returns

[`MetaField`](../classes/Solarwind.MetaField.md)[``"asFinalFieldDef"``]

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:16

___

### createEntity

▸ **createEntity**<`InputDefinition`, `Indexes`, `Options`\>(`configOptions`): [`Entity`](../interfaces/Solarwind.Entity.md)<`InputDefinition`, `Indexes`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDefinition` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |
| `Indexes` | extends [`DocumentIndexesConfig`](../interfaces/Solarwind.DocumentIndexesConfig.md)<`string`, `Indexes`\> |
| `Options` | extends [`EntityOptions`](Solarwind.md#entityoptions)<`InputDefinition`, `Indexes`\> = [`EntityOptions`](Solarwind.md#entityoptions)<`InputDefinition`, `Indexes`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configOptions` | [`EntityOptions`](Solarwind.md#entityoptions)<`InputDefinition`, `Indexes`\> \| () => [`EntityOptions`](Solarwind.md#entityoptions)<`InputDefinition`, `Indexes`\> |

#### Returns

[`Entity`](../interfaces/Solarwind.Entity.md)<`InputDefinition`, `Indexes`\>

#### Defined in

packages/entity/lib/Entity.d.ts:6

___

### createEntityPlugin

▸ **createEntityPlugin**(`name`, `handler`): [`EntityPlugin`](../interfaces/Solarwind.EntityPlugin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handler` | [`EntityPlugin`](../interfaces/Solarwind.EntityPlugin.md) |

#### Returns

[`EntityPlugin`](../interfaces/Solarwind.EntityPlugin.md)

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:8

___

### createFieldTypeError

▸ **createFieldTypeError**(`code`, `details?`): [`FieldTypeError`](../classes/Solarwind.FieldTypeError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | ``"minSize"`` \| ``"maxSize"`` \| ``"regexMismatch"`` \| ``"sizeMismatch"`` \| ``"unexpected"`` \| ``"unexpectedType"`` \| ``"custom"`` \| ``"invalidPhone"`` \| ``"requiredField"`` |
| `details?` | `any` |

#### Returns

[`FieldTypeError`](../classes/Solarwind.FieldTypeError.md)

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:9

___

### createGraphQLSchema

▸ **createGraphQLSchema**<`T`\>(`resolvers?`, `config?`): `T` extends { `__isResolver`: `any`  } ? [`GraphQLSchemaWithUtils`](Solarwind.md#graphqlschemawithutils) : `never`

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

`T` extends { `__isResolver`: `any`  } ? [`GraphQLSchemaWithUtils`](Solarwind.md#graphqlschemawithutils) : `never`

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:35

▸ **createGraphQLSchema**<`Config`\>(`config?`): `Config` extends [`CreateGraphQLObjectOptions`](Solarwind.md#creategraphqlobjectoptions) ? [`GraphQLSchemaWithUtils`](Solarwind.md#graphqlschemawithutils) : `never`

#### Type parameters

| Name |
| :------ |
| `Config` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Config` |

#### Returns

`Config` extends [`CreateGraphQLObjectOptions`](Solarwind.md#creategraphqlobjectoptions) ? [`GraphQLSchemaWithUtils`](Solarwind.md#graphqlschemawithutils) : `never`

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:38

___

### createObjectType

▸ **createObjectType**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:116

▸ **createObjectType**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:117

___

### createResolver

▸ **createResolver**<`ResultType`, `ArgsType`\>(`config`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve?`: `undefined` ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Solarwind.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `resolver` | <Returns, Root\>(`handler`: (`root`: `Root`, `args`: [`_ResolverArgs`](Solarwind.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Solarwind.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\>) => { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Solarwind.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Solarwind.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } |

#### Defined in

packages/schema/lib/Resolver.d.ts:40

▸ **createResolver**<`ResultType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Solarwind.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `undefined` ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Solarwind.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Solarwind.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Solarwind.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

packages/schema/lib/Resolver.d.ts:49

▸ **createResolver**<`ResultType`, `ArgsType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Solarwind.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Solarwind.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Solarwind.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Solarwind.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Solarwind.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Solarwind.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Solarwind.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

packages/schema/lib/Resolver.d.ts:58

___

### createResolverFactory

▸ **createResolverFactory**<`Context`\>(): [`CreateResolver`](../interfaces/Solarwind.CreateResolver.md)<`Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`ResolverContextBase`](Solarwind.md#resolvercontextbase) |

#### Returns

[`CreateResolver`](../interfaces/Solarwind.CreateResolver.md)<`Context`\>

#### Defined in

packages/schema/lib/Resolver.d.ts:68

___

### createSchema

▸ **createSchema**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:116

▸ **createSchema**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Solarwind.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:117

___

### createTSFYContext

▸ **createTSFYContext**(`config`): [`TSFYContext`](Solarwind.md#tsfycontext)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TSFYConfig`](Solarwind.md#tsfyconfig) |

#### Returns

[`TSFYContext`](Solarwind.md#tsfycontext)

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:32

___

### createTSfyRef

▸ **createTSfyRef**(`hash`, `identifier?`): [`TSFYRef`](Solarwind.md#tsfyref)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `identifier?` | `string` |

#### Returns

[`TSFYRef`](Solarwind.md#tsfyref)

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:31

___

### createType

▸ **createType**<`Definition`\>(`definition`): [`GraphType`](../classes/Solarwind.GraphType.md)<`Definition`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Definition` \| (`utils`: `SolarwindModules`) => `Definition` |

#### Returns

[`GraphType`](../classes/Solarwind.GraphType.md)<`Definition`\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:117

▸ **createType**<`Definition`\>(`name`, `definition`): [`GraphType`](../classes/Solarwind.GraphType.md)<`Definition`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Definition` \| (`utils`: `SolarwindModules`) => `Definition` |

#### Returns

[`GraphType`](../classes/Solarwind.GraphType.md)<`Definition`\>

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

▸ **extendObjectDefinition**<`Input`\>(`input`): [`ExtendObjectDefinition`](../interfaces/Solarwind.ExtendObjectDefinition.md)<`Input`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

#### Returns

[`ExtendObjectDefinition`](../interfaces/Solarwind.ExtendObjectDefinition.md)<`Input`, `Input`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:35

___

### extendType

▸ **extendType**<`Input`\>(`input`): [`ExtendType`](../interfaces/Solarwind.ExtendType.md)<`Input`\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

#### Returns

[`ExtendType`](../interfaces/Solarwind.ExtendType.md)<`Input`\>

#### Defined in

packages/schema/lib/extendType.d.ts:20

___

### fieldToMock

▸ **fieldToMock**(`fieldInput`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldInput` | [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |
| `options?` | [`ObjectMockOptions`](Solarwind.md#objectmockoptions) |

#### Returns

`any`

#### Defined in

packages/schema/lib/mockObject.d.ts:13

___

### getDocumentIndexFields

▸ **getDocumentIndexFields**<`Document`\>(`doc`, `indexConfig`): [`ParsedDocumentIndexes`](Solarwind.md#parseddocumentindexes)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Document` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Document` |
| `indexConfig` | [`AnyCollectionIndexConfig`](Solarwind.md#anycollectionindexconfig) |

#### Returns

[`ParsedDocumentIndexes`](Solarwind.md#parseddocumentindexes)

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

▸ **getObjectDefinitionMetaField**(`input`): [`MetaField`](../classes/Solarwind.MetaField.md)[``"asFinalFieldDef"``] \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Record`<`string`, `any`\> |

#### Returns

[`MetaField`](../classes/Solarwind.MetaField.md)[``"asFinalFieldDef"``] \| `undefined`

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:20

___

### getParsedIndexKeys

▸ **getParsedIndexKeys**(`indexConfig`): [`ParsedIndexKey`](Solarwind.md#parsedindexkey)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | [`AnyCollectionIndexConfig`](Solarwind.md#anycollectionindexconfig) |

#### Returns

[`ParsedIndexKey`](Solarwind.md#parsedindexkey)[]

#### Defined in

packages/transporter/lib/createDocumentIndexBasedFilters.d.ts:10

___

### getResolver

▸ **getResolver**(`name`): [`AnyResolver`](Solarwind.md#anyresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`AnyResolver`](Solarwind.md#anyresolver)

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

▸ **getType**(`name`): [`GraphTypeLike`](../interfaces/Solarwind.GraphTypeLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GraphTypeLike`](../interfaces/Solarwind.GraphTypeLike.md)

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:119

___

### implementObject

▸ **implementObject**<`Def`, `Parents`\>(`name`, `definition`, `...parents`): [`ImplementObject`](Solarwind.md#implementobject)<[`ObjectType`](../classes/Solarwind.ObjectType.md)<`Def`\>, `Parents`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |
| `Parents` | extends readonly [`ObjectLike`](../interfaces/Solarwind.ObjectLike.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Readonly`<`Def`\> |
| `...parents` | `Parents` |

#### Returns

[`ImplementObject`](Solarwind.md#implementobject)<[`ObjectType`](../classes/Solarwind.ObjectType.md)<`Def`\>, `Parents`\>

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

▸ **mergeIndexRelationsResult**(`input`): [`DocumentBase`](Solarwind.md#documentbase)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.indexConfig` | [`AnyCollectionIndexConfig`](Solarwind.md#anycollectionindexconfig) |
| `input.items` | [`DocumentBase`](Solarwind.md#documentbase)[] |

#### Returns

[`DocumentBase`](Solarwind.md#documentbase)[]

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

▸ **objectMock**<`T`\>(`definition`, `options?`): [`Infer`](Solarwind.md#infer)<{ `object`: `T`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |
| `options?` | [`ObjectMockOptions`](Solarwind.md#objectmockoptions) |

#### Returns

[`Infer`](Solarwind.md#infer)<{ `object`: `T`  }\>

#### Defined in

packages/schema/lib/mockObject.d.ts:8

___

### parseAggioAttributeFilters

▸ **parseAggioAttributeFilters**(`attFilter`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `attFilter` | [`FilterRecord`](Solarwind.md#filterrecord)<[`DocumentBase`](Solarwind.md#documentbase)\> |

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
| `T` | extends [`AnyCollectionIndexConfig`](Solarwind.md#anycollectionindexconfig) |

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

▸ **parseEntityIndexFields**(`indexConfig`): [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | [`AnyCollectionIndexConfig`](Solarwind.md#anycollectionindexconfig) |

#### Returns

[`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)

#### Defined in

packages/transporter/lib/parseEntityIndexFields.d.ts:3

___

### parseField

▸ **parseField**(`definition`): [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |

#### Returns

[`FinalFieldDefinition`](Solarwind.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:24

___

### parseFieldDefinitionConfig

▸ **parseFieldDefinitionConfig**<`T`, `Options`\>(`definition`, `options?`): [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Solarwind.md#fieldasstring) \| [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition) \| [`ShortenFinalFieldDefinition`](Solarwind.md#shortenfinalfielddefinition) : [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |
| `Options` | extends [`ParseFieldOptions`](Solarwind.md#parsefieldoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |
| `options?` | `Options` |

#### Returns

[`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Solarwind.md#fieldasstring) \| [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition) \| [`ShortenFinalFieldDefinition`](Solarwind.md#shortenfinalfielddefinition) : [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:25

___

### parseFilterIndexFilterParts

▸ **parseFilterIndexFilterParts**(`filter`, `indexConfig`): { `isFinalParsedSearch`: ``false`` ; `parts`: [`ParsedIndexFilterPart`](Solarwind.md#parsedindexfilterpart)[]  } \| { `cursor`: `ParsedIndexCursor` ; `isFinalParsedSearch`: ``true``  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Record`<`string`, `any`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Solarwind.md#anycollectionindexconfig) |

#### Returns

{ `isFinalParsedSearch`: ``false`` ; `parts`: [`ParsedIndexFilterPart`](Solarwind.md#parsedindexfilterpart)[]  } \| { `cursor`: `ParsedIndexCursor` ; `isFinalParsedSearch`: ``true``  }

#### Defined in

packages/transporter/lib/parseFilterIndexFilterParts.d.ts:12

___

### parseFlattenFieldDefinition

▸ **parseFlattenFieldDefinition**(`input`, `options?`): [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition) \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | [`ParseFieldOptions`](Solarwind.md#parsefieldoptions) |

#### Returns

[`FinalFieldDefinition`](Solarwind.md#finalfielddefinition) \| ``false``

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:47

___

### parseObjectDefinition

▸ **parseObjectDefinition**(`input`, `options?`): `ParseResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Record`<`string`, `any`\> |
| `options?` | `Omit`<[`ParseFieldOptions`](Solarwind.md#parsefieldoptions), ``"returnInstance"``\> |

#### Returns

`ParseResult`

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:41

___

### parseObjectField

▸ **parseObjectField**<`T`, `Options`\>(`fieldName`, `definition`, `options`): [`Options`[``"returnInstance"``]] extends [``true``] ? [`TAnyFieldType`](Solarwind.md#tanyfieldtype) : [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Solarwind.md#fieldasstring) : [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |
| `Options` | extends [`ParseFieldOptions`](Solarwind.md#parsefieldoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |
| `options` | `Options` |

#### Returns

[`Options`[``"returnInstance"``]] extends [``true``] ? [`TAnyFieldType`](Solarwind.md#tanyfieldtype) : [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Solarwind.md#fieldasstring) : [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:15

▸ **parseObjectField**<`T`\>(`fieldName`, `definition`): [`FinalFieldDefinition`](Solarwind.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |

#### Returns

[`FinalFieldDefinition`](Solarwind.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:16

▸ **parseObjectField**<`T`\>(`fieldName`, `definition`, `options`): [`TAnyFieldType`](Solarwind.md#tanyfieldtype)

**`Deprecated`**

use the object options instead of true

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Solarwind.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |
| `options` | ``true`` |

#### Returns

[`TAnyFieldType`](Solarwind.md#tanyfieldtype)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:23

___

### parseOneIndexDocumentFields

▸ **parseOneIndexDocumentFields**(`parsedIndex`): [`DocumentIndexFieldsParsed`](../interfaces/Solarwind.DocumentIndexFieldsParsed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsedIndex` | `ParsedIndexCursor` |

#### Returns

[`DocumentIndexFieldsParsed`](../interfaces/Solarwind.DocumentIndexFieldsParsed.md)

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:477

___

### parseUpdateExpression

▸ **parseUpdateExpression**<`Schema`\>(`updateExpression`, `indexConfig`): [`ParsedUpdateExpression`](Solarwind.md#parsedupdateexpression)<`Schema`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateExpression` | [`UpdateExpression`](Solarwind.md#updateexpression)<`Schema`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Solarwind.md#anycollectionindexconfig) |

#### Returns

[`ParsedUpdateExpression`](Solarwind.md#parsedupdateexpression)<`Schema`\>[]

#### Defined in

packages/transporter/lib/parseUpdateExpression.d.ts:9

___

### parseValidationError

▸ **parseValidationError**(`input`, `customMessage`, `originalError`): `Error` & { `[K: string]`: `any`;  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `customMessage` | `undefined` \| [`ValidationCustomMessage`](Solarwind.md#validationcustommessage) |
| `originalError` | `string` \| `Error` & { `[K: string]`: `any`;  } |

#### Returns

`Error` & { `[K: string]`: `any`;  }

#### Defined in

packages/schema/lib/applyValidator.d.ts:13

___

### pickIndexKeyPartsFromDocument

▸ **pickIndexKeyPartsFromDocument**(`param`): [`ParsedIndexPart`](Solarwind.md#parsedindexpart)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.acceptNullable` | `boolean` |
| `param.destination` | ``"filter"`` \| ``"document"`` |
| `param.doc` | `Record`<`string`, `any`\> |
| `param.indexField` | `string` |
| `param.indexPartKind` | [`IndexPartKind`](Solarwind.md#indexpartkind) |
| `param.indexParts` | readonly [`IndexKeyHash`](Solarwind.md#indexkeyhash)<`string`\>[] |

#### Returns

[`ParsedIndexPart`](Solarwind.md#parsedindexpart)

#### Defined in

packages/transporter/lib/pickIndexKeyPartsFromDocument.d.ts:2

___

### registerEntity

▸ **registerEntity**(`entity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`AnyEntity`](Solarwind.md#anyentity) |

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
| `params` | [`ResolversToTypeScriptOptions`](Solarwind.md#resolverstotypescriptoptions) |

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
| `params` | [`ResolversToTypeScriptOptions`](Solarwind.md#resolverstotypescriptoptions) |

#### Returns

`Promise`<{ `code`: `string` ; `lines`: { `args`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `code`: `string` ; `entryName`: `string` ; `inputName`: `any` ; `payload`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `payloadName`: `any` ; `resolver`: { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField` ; `astNode?`: `Maybe` ; `deprecationReason?`: `Maybe` ; `description?`: `Maybe` ; `extensions?`: `Maybe` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `subscribe?`: `GraphQLFieldResolver` ; `type`: `any` ; `typeDef`: `any`  }  }[]  }\>

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:44

___

### setParserHook

▸ **setParserHook**(`hook`): [`RemoveParserHook`](../interfaces/Solarwind.RemoveParserHook.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hook` | [`ParserHook`](../interfaces/Solarwind.ParserHook.md) |

#### Returns

[`RemoveParserHook`](../interfaces/Solarwind.RemoveParserHook.md)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:14

___

### tsfy

▸ **tsfy**(`input`, `config?`): [`TSFyResult`](../interfaces/Solarwind.TSFyResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `config?` | [`TSFYConfig`](Solarwind.md#tsfyconfig) |

#### Returns

[`TSFyResult`](../interfaces/Solarwind.TSFyResult.md)

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:16

___

### tsfyWriter

▸ **tsfyWriter**(`options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`TSFyWriterConfig`](../interfaces/Solarwind.TSFyWriterConfig.md) |

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
