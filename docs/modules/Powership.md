[Powership](../README.md) / [Modules](../modules.md) / Powership

# Module: Powership

## Table of contents

### References

- [InferField](Powership.md#inferfield)
- [T](Powership.md#t)
- [isHttpError](Powership.md#ishttperror)

### Namespaces

- [TU](Powership.TU.md)
- [formatWithPrettier](Powership.formatWithPrettier.md)
- [ufo](Powership.ufo.md)

### Classes

- [AliasField](../classes/Powership.AliasField.md)
- [AnyField](../classes/Powership.AnyField.md)
- [BJSONConstructor](../classes/Powership.BJSONConstructor.md)
- [BaseRequest](../classes/Powership.BaseRequest.md)
- [BaseRequestHandler](../classes/Powership.BaseRequestHandler.md)
- [BooleanField](../classes/Powership.BooleanField.md)
- [CollectionErrors](../classes/Powership.CollectionErrors.md)
- [CursorField](../classes/Powership.CursorField.md)
- [DateField](../classes/Powership.DateField.md)
- [EmailField](../classes/Powership.EmailField.md)
- [EnumField](../classes/Powership.EnumField.md)
- [FieldType](../classes/Powership.FieldType.md)
- [FieldTypeError](../classes/Powership.FieldTypeError.md)
- [FloatField](../classes/Powership.FloatField.md)
- [GraphType](../classes/Powership.GraphType.md)
- [IDField](../classes/Powership.IDField.md)
- [IntField](../classes/Powership.IntField.md)
- [InvalidExpectedTruthyError](../classes/Powership.InvalidExpectedTruthyError.md)
- [InvalidExpectedTypeError](../classes/Powership.InvalidExpectedTypeError.md)
- [LiteralField](../classes/Powership.LiteralField.md)
- [Logger](../classes/Powership.Logger.md)
- [MetaField](../classes/Powership.MetaField.md)
- [MicroState](../classes/Powership.MicroState.md)
- [NullField](../classes/Powership.NullField.md)
- [ObjectField](../classes/Powership.ObjectField.md)
- [ObjectType](../classes/Powership.ObjectType.md)
- [RecordField](../classes/Powership.RecordField.md)
- [RuntimeError](../classes/Powership.RuntimeError.md)
- [Serializer](../classes/Powership.Serializer.md)
- [Server](../classes/Powership.Server.md)
- [ServerRequest](../classes/Powership.ServerRequest.md)
- [ServerResponse](../classes/Powership.ServerResponse.md)
- [StrictMap](../classes/Powership.StrictMap.md)
- [StringField](../classes/Powership.StringField.md)
- [UlidField](../classes/Powership.UlidField.md)
- [UndefinedField](../classes/Powership.UndefinedField.md)
- [UnionField](../classes/Powership.UnionField.md)
- [UnknownField](../classes/Powership.UnknownField.md)

### Interfaces

- [AppConfigInterface](../interfaces/Powership.AppConfigInterface.md)
- [CommonFieldDefinitionProps](../interfaces/Powership.CommonFieldDefinitionProps.md)
- [CreateOne](../interfaces/Powership.CreateOne.md)
- [CreateResolver](../interfaces/Powership.CreateResolver.md)
- [CustomFieldConfig](../interfaces/Powership.CustomFieldConfig.md)
- [DeleteMany](../interfaces/Powership.DeleteMany.md)
- [DeleteOne](../interfaces/Powership.DeleteOne.md)
- [DocumentIndexFieldsParsed](../interfaces/Powership.DocumentIndexFieldsParsed.md)
- [DocumentIndexesConfig](../interfaces/Powership.DocumentIndexesConfig.md)
- [DurableFieldConfig](../interfaces/Powership.DurableFieldConfig.md)
- [Entity](../interfaces/Powership.Entity.md)
- [EntityAddRelation](../interfaces/Powership.EntityAddRelation.md)
- [EntityFromContext](../interfaces/Powership.EntityFromContext.md)
- [EntityIndexRelations](../interfaces/Powership.EntityIndexRelations.md)
- [EntityPlugin](../interfaces/Powership.EntityPlugin.md)
- [EntityTypesContext](../interfaces/Powership.EntityTypesContext.md)
- [ErrorWithStack](../interfaces/Powership.ErrorWithStack.md)
- [ExtendEntity](../interfaces/Powership.ExtendEntity.md)
- [ExtendObjectDefinition](../interfaces/Powership.ExtendObjectDefinition.md)
- [ExtendType](../interfaces/Powership.ExtendType.md)
- [FieldDefinitionWithType](../interfaces/Powership.FieldDefinitionWithType.md)
- [FindById](../interfaces/Powership.FindById.md)
- [FindMany](../interfaces/Powership.FindMany.md)
- [FindOne](../interfaces/Powership.FindOne.md)
- [FirstIndexParsed](../interfaces/Powership.FirstIndexParsed.md)
- [GetterAttributes](../interfaces/Powership.GetterAttributes.md)
- [GettersConfig](../interfaces/Powership.GettersConfig.md)
- [GraphTypeInTypeFieldDefinition](../interfaces/Powership.GraphTypeInTypeFieldDefinition.md)
- [GraphTypeLike](../interfaces/Powership.GraphTypeLike.md)
- [GraphTypeLikeFieldDefinition](../interfaces/Powership.GraphTypeLikeFieldDefinition.md)
- [GroupByOptions](../interfaces/Powership.GroupByOptions.md)
- [IAppConfig](../interfaces/Powership.IAppConfig.md)
- [IndexMethods](../interfaces/Powership.IndexMethods.md)
- [IndexPKSKPartsListConfig](../interfaces/Powership.IndexPKSKPartsListConfig.md)
- [InitIndexCursor](../interfaces/Powership.InitIndexCursor.md)
- [InitIndexCursorWithParent](../interfaces/Powership.InitIndexCursorWithParent.md)
- [JoinKeyPartsOptions](../interfaces/Powership.JoinKeyPartsOptions.md)
- [LiteralFieldDef](../interfaces/Powership.LiteralFieldDef.md)
- [LoggerOptions](../interfaces/Powership.LoggerOptions.md)
- [Mapper](../interfaces/Powership.Mapper.md)
- [ObjectInTypeFieldDefinition](../interfaces/Powership.ObjectInTypeFieldDefinition.md)
- [ObjectLike](../interfaces/Powership.ObjectLike.md)
- [ObjectTypeLikeFieldDefinition](../interfaces/Powership.ObjectTypeLikeFieldDefinition.md)
- [OnChange](../interfaces/Powership.OnChange.md)
- [PackageJson](../interfaces/Powership.PackageJson.md)
- [Paginate](../interfaces/Powership.Paginate.md)
- [ParseCursorOptions](../interfaces/Powership.ParseCursorOptions.md)
- [ParsedIndexCursor](../interfaces/Powership.ParsedIndexCursor.md)
- [SerializableList](../interfaces/Powership.SerializableList.md)
- [Store](../interfaces/Powership.Store.md)
- [StoreOptions](../interfaces/Powership.StoreOptions.md)
- [StrictMapOptions](../interfaces/Powership.StrictMapOptions.md)
- [Stringifiable](../interfaces/Powership.Stringifiable.md)
- [SubscriptionContext](../interfaces/Powership.SubscriptionContext.md)
- [Transporter](../interfaces/Powership.Transporter.md)
- [UFO](../interfaces/Powership.UFO-1.md)
- [UpdateMany](../interfaces/Powership.UpdateMany.md)
- [UpdateOne](../interfaces/Powership.UpdateOne.md)
- [UseMicroState](../interfaces/Powership.UseMicroState.md)
- [\_EntityLoaderUtils](../interfaces/Powership._EntityLoaderUtils.md)

### Type Aliases

- [$inferableKey](Powership.md#$inferablekey)
- [$sealed](Powership.md#$sealed)
- [$sealedDef](Powership.md#$sealeddef)
- [$sealedKey](Powership.md#$sealedkey)
- [A\_Z](Powership.md#a_z)
- [AliasFieldAggregation](Powership.md#aliasfieldaggregation)
- [AliasFieldDef](Powership.md#aliasfielddef)
- [AllFieldTypes](Powership.md#allfieldtypes)
- [AllFilterOperations](Powership.md#allfilteroperations)
- [AllFinalFieldDefinitions](Powership.md#allfinalfielddefinitions)
- [AllIndexFilter](Powership.md#allindexfilter)
- [AnyArray](Powership.md#anyarray)
- [AnyCollectionIndexConfig](Powership.md#anycollectionindexconfig)
- [AnyDocIndexItem](Powership.md#anydocindexitem)
- [AnyEntity](Powership.md#anyentity)
- [AnyEntityTypesContext](Powership.md#anyentitytypescontext)
- [AnyFunction](Powership.md#anyfunction)
- [AnyList](Powership.md#anylist)
- [AnyRecord](Powership.md#anyrecord)
- [AnyResolver](Powership.md#anyresolver)
- [ArrayKeys](Powership.md#arraykeys)
- [ArrayOperationRecord](Powership.md#arrayoperationrecord)
- [ArrayType](Powership.md#arraytype)
- [As](Powership.md#as)
- [Assertable](Powership.md#assertable)
- [AttributeFilterKey](Powership.md#attributefilterkey)
- [BaseRequestHandlerInit](Powership.md#baserequesthandlerinit)
- [BinAny](Powership.md#binany)
- [BinKnown](Powership.md#binknown)
- [Cast](Powership.md#cast)
- [CollectionConfigIndexes](Powership.md#collectionconfigindexes)
- [CollectionIndexConfig](Powership.md#collectionindexconfig)
- [CommonIndexFields](Powership.md#commonindexfields)
- [Compute](Powership.md#compute)
- [ConstructorDescription](Powership.md#constructordescription)
- [CreateGraphQLObjectOptions](Powership.md#creategraphqlobjectoptions)
- [CreateOneConfig](Powership.md#createoneconfig)
- [CreateOneResult](Powership.md#createoneresult)
- [CreateProxyOptions](Powership.md#createproxyoptions)
- [CursorType](Powership.md#cursortype)
- [DateFieldDef](Powership.md#datefielddef)
- [DeepArrayKeys](Powership.md#deeparraykeys)
- [DeepFreeze](Powership.md#deepfreeze)
- [DeepWritable](Powership.md#deepwritable)
- [DeleteManyConfig](Powership.md#deletemanyconfig)
- [DeleteManyResult](Powership.md#deletemanyresult)
- [DeleteOneConfig](Powership.md#deleteoneconfig)
- [DeleteOneResult](Powership.md#deleteoneresult)
- [DescribeAndOverrideField](Powership.md#describeandoverridefield)
- [DescribeField](Powership.md#describefield)
- [DescribeObjectDefinition](Powership.md#describeobjectdefinition)
- [DescribeWithoutSeal](Powership.md#describewithoutseal)
- [Difference](Powership.md#difference)
- [DifferenceAction](Powership.md#differenceaction)
- [DifferencePath](Powership.md#differencepath)
- [DocumentBase](Powership.md#documentbase)
- [DocumentIndexFieldKey](Powership.md#documentindexfieldkey)
- [DocumentIndexFilterParsed](Powership.md#documentindexfilterparsed)
- [DocumentIndexItem](Powership.md#documentindexitem)
- [DocumentIndexRelation](Powership.md#documentindexrelation)
- [EdgeType](Powership.md#edgetype)
- [EntityDocument](Powership.md#entitydocument)
- [EntityDocumentBase](Powership.md#entitydocumentbase)
- [EntityDocumentInput](Powership.md#entitydocumentinput)
- [EntityErrorDetails](Powership.md#entityerrordetails)
- [EntityErrorKind](Powership.md#entityerrorkind)
- [EntityErrorKindEnum](Powership.md#entityerrorkindenum)
- [EntityFieldResolver](Powership.md#entityfieldresolver)
- [EntityFilters](Powership.md#entityfilters)
- [EntityHooks](Powership.md#entityhooks)
- [EntityHooksCreateDefinitionKind](Powership.md#entityhookscreatedefinitionkind)
- [EntityLoaderConfig](Powership.md#entityloaderconfig)
- [EntityLoaderMethods](Powership.md#entityloadermethods)
- [EntityOptions](Powership.md#entityoptions)
- [EntityParserHookContext](Powership.md#entityparserhookcontext)
- [Entries](Powership.md#entries)
- [ErrorClassCreatorOptions](Powership.md#errorclasscreatoroptions)
- [EventMetadataBase](Powership.md#eventmetadatabase)
- [EventMetadataObjectBase](Powership.md#eventmetadataobjectbase)
- [FieldAsString](Powership.md#fieldasstring)
- [FieldComposer](Powership.md#fieldcomposer)
- [FieldCreators](Powership.md#fieldcreators)
- [FieldDefinitionConfig](Powership.md#fielddefinitionconfig)
- [FieldDefinitions](Powership.md#fielddefinitions)
- [FieldExample](Powership.md#fieldexample)
- [FieldExampleFunction](Powership.md#fieldexamplefunction)
- [FieldInput](Powership.md#fieldinput)
- [FieldInputLikeRequiredKey](Powership.md#fieldinputlikerequiredkey)
- [FieldParserConfig](Powership.md#fieldparserconfig)
- [FieldParserOptionsObject](Powership.md#fieldparseroptionsobject)
- [FieldTypeErrorCode](Powership.md#fieldtypeerrorcode)
- [FieldTypeName](Powership.md#fieldtypename)
- [FieldTypeOptions](Powership.md#fieldtypeoptions)
- [FieldTypeParser](Powership.md#fieldtypeparser)
- [FilterConditions](Powership.md#filterconditions)
- [FilterRecord](Powership.md#filterrecord)
- [FinalFieldDefinition](Powership.md#finalfielddefinition)
- [FinalFieldDefinitionStrict](Powership.md#finalfielddefinitionstrict)
- [FinalObjectDefinition](Powership.md#finalobjectdefinition)
- [FindByIdConfig](Powership.md#findbyidconfig)
- [FindManyConfig](Powership.md#findmanyconfig)
- [FindManyResult](Powership.md#findmanyresult)
- [FindOneConfig](Powership.md#findoneconfig)
- [FindOneResult](Powership.md#findoneresult)
- [FlattenFieldDefinition](Powership.md#flattenfielddefinition)
- [FloatFieldDef](Powership.md#floatfielddef)
- [ForceString](Powership.md#forcestring)
- [GetFieldByDotNotation](Powership.md#getfieldbydotnotation)
- [GetFieldByDotPath](Powership.md#getfieldbydotpath)
- [GraphQLDataResponse](Powership.md#graphqldataresponse)
- [GraphQLResponseRecord](Powership.md#graphqlresponserecord)
- [GraphQLSchemaWithUtils](Powership.md#graphqlschemawithutils)
- [GraphTypeArgs](Powership.md#graphtypeargs)
- [GraphTypeKID](Powership.md#graphtypekid)
- [GroupedResolvers](Powership.md#groupedresolvers)
- [HTTPHandlerParsed](Powership.md#httphandlerparsed)
- [Hashable](Powership.md#hashable)
- [HeaderNamed](Powership.md#headernamed)
- [HeaderRecord](Powership.md#headerrecord)
- [HeaderRecordInit](Powership.md#headerrecordinit)
- [IDFieldDef](Powership.md#idfielddef)
- [IfExtends](Powership.md#ifextends)
- [ImplementObject](Powership.md#implementobject)
- [IndexBasedFilterParsed](Powership.md#indexbasedfilterparsed)
- [IndexFilter](Powership.md#indexfilter)
- [IndexFilterFound](Powership.md#indexfilterfound)
- [IndexFilterRecord](Powership.md#indexfilterrecord)
- [IndexKeyHash](Powership.md#indexkeyhash)
- [IndexPartKind](Powership.md#indexpartkind)
- [Infer](Powership.md#infer)
- [InferFinalField](Powership.md#inferfinalfield)
- [InferGraphType](Powership.md#infergraphtype)
- [InferObjectDefinition](Powership.md#inferobjectdefinition)
- [InferObjectType](Powership.md#inferobjecttype)
- [InferRecordFieldType](Powership.md#inferrecordfieldtype)
- [InferResolverArgs](Powership.md#inferresolverargs)
- [InferString](Powership.md#inferstring)
- [InferTypeName](Powership.md#infertypename)
- [InnerDef](Powership.md#innerdef)
- [IntFieldDef](Powership.md#intfielddef)
- [InternalEvent](Powership.md#internalevent)
- [InvalidParsedIndexField](Powership.md#invalidparsedindexfield)
- [IsAny](Powership.md#isany)
- [IsKnown](Powership.md#isknown)
- [IsNever](Powership.md#isnever)
- [IsNullable](Powership.md#isnullable)
- [IsOptional](Powership.md#isoptional)
- [IsUnknown](Powership.md#isunknown)
- [IterationMap](Powership.md#iterationmap)
- [LazyParseGraphTypePayload](Powership.md#lazyparsegraphtypepayload)
- [ListDefinition](Powership.md#listdefinition)
- [ListDefinitionObject](Powership.md#listdefinitionobject)
- [ListDefinitionTruthy](Powership.md#listdefinitiontruthy)
- [LoaderContext](Powership.md#loadercontext)
- [LogLevel](Powership.md#loglevel)
- [LogLevelName](Powership.md#loglevelname)
- [LoggerMethods](Powership.md#loggermethods)
- [MakeFieldOptional](Powership.md#makefieldoptional)
- [MakeFieldRequired](Powership.md#makefieldrequired)
- [MakeTypeList](Powership.md#maketypelist)
- [MakeTypeOptional](Powership.md#maketypeoptional)
- [MakeTypeRequired](Powership.md#maketyperequired)
- [MakeTypeSingle](Powership.md#maketypesingle)
- [MaybeArray](Powership.md#maybearray)
- [MaybePromise](Powership.md#maybepromise)
- [Merge](Powership.md#merge)
- [MergeAll](Powership.md#mergeall)
- [MergeGetters](Powership.md#mergegetters)
- [MetaFieldDef](Powership.md#metafielddef)
- [MethodFilter](Powership.md#methodfilter)
- [ModulesProxyRecord](Powership.md#modulesproxyrecord)
- [ModulesProxyResult](Powership.md#modulesproxyresult)
- [NATIVE\_TYPE\_NAME](Powership.md#native_type_name)
- [NATIVE\_TYPE\_OF](Powership.md#native_type_of)
- [Naked](Powership.md#naked)
- [Name](Powership.md#name)
- [NativeComplexType](Powership.md#nativecomplextype)
- [NativeSimpleType](Powership.md#nativesimpletype)
- [NextIndex](Powership.md#nextindex)
- [NotString](Powership.md#notstring)
- [Nullable](Powership.md#nullable)
- [NullableToPartial](Powership.md#nullabletopartial)
- [OHas](Powership.md#ohas)
- [OPick](Powership.md#opick)
- [OWritable](Powership.md#owritable)
- [ObjectDefinitionInput](Powership.md#objectdefinitioninput)
- [ObjectEntries](Powership.md#objectentries)
- [ObjectFieldInput](Powership.md#objectfieldinput)
- [ObjectMockOptions](Powership.md#objectmockoptions)
- [ObjectPath](Powership.md#objectpath)
- [ObjectTypeFromInput](Powership.md#objecttypefrominput)
- [ObjectTypeKID](Powership.md#objecttypekid)
- [ObjectUnion](Powership.md#objectunion)
- [OneFilterOperation](Powership.md#onefilteroperation)
- [OnlyKnown](Powership.md#onlyknown)
- [OptionalResolverConfig](Powership.md#optionalresolverconfig)
- [Override](Powership.md#override)
- [OverrideField](Powership.md#overridefield)
- [PKSKValueType](Powership.md#pkskvaluetype)
- [PageInfo](Powership.md#pageinfo)
- [PaginationResult](Powership.md#paginationresult)
- [PaginationType](Powership.md#paginationtype)
- [ParseFieldOptions](Powership.md#parsefieldoptions)
- [ParseSpecialObjectKeys](Powership.md#parsespecialobjectkeys)
- [ParsedDocumentIndexes](Powership.md#parseddocumentindexes)
- [ParsedIndexFilterPart](Powership.md#parsedindexfilterpart)
- [ParsedIndexKey](Powership.md#parsedindexkey)
- [ParsedIndexPart](Powership.md#parsedindexpart)
- [ParsedUpdateExpression](Powership.md#parsedupdateexpression)
- [PartialRequired](Powership.md#partialrequired)
- [PathParsed](Powership.md#pathparsed)
- [PathType](Powership.md#pathtype)
- [Paths](Powership.md#paths)
- [Pick](Powership.md#pick)
- [PowershipObjectDefinition](Powership.md#powershipobjectdefinition)
- [PrevIndex](Powership.md#previndex)
- [PromiseType](Powership.md#promisetype)
- [ProxyGetModule](Powership.md#proxygetmodule)
- [ProxyModuleConfig](Powership.md#proxymoduleconfig)
- [QuerySort](Powership.md#querysort)
- [ReactLike](Powership.md#reactlike)
- [RecordBy](Powership.md#recordby)
- [RecordFieldDef](Powership.md#recordfielddef)
- [RelationsFilter](Powership.md#relationsfilter)
- [RequestBody](Powership.md#requestbody)
- [Resolver](Powership.md#resolver)
- [ResolverContextBase](Powership.md#resolvercontextbase)
- [ResolverKind](Powership.md#resolverkind)
- [ResolverResolve](Powership.md#resolverresolve)
- [ResolversToTypeScriptOptions](Powership.md#resolverstotypescriptoptions)
- [RootFilterOperators](Powership.md#rootfilteroperators)
- [RunTimeErrorOptions](Powership.md#runtimeerroroptions)
- [Seal](Powership.md#seal)
- [SealedField](Powership.md#sealedfield)
- [Serializable](Powership.md#serializable)
- [ServerRequestInit](Powership.md#serverrequestinit)
- [ServerResponseInit](Powership.md#serverresponseinit)
- [ServerResponseStatus](Powership.md#serverresponsestatus)
- [Shape](Powership.md#shape)
- [ShortenFinalFieldDefinition](Powership.md#shortenfinalfielddefinition)
- [Simplify](Powership.md#simplify)
- [SlugifyOptions](Powership.md#slugifyoptions)
- [SpecialObjectKeys](Powership.md#specialobjectkeys)
- [StoreEvent](Powership.md#storeevent)
- [StoreEventOptions](Powership.md#storeeventoptions)
- [StringFieldDef](Powership.md#stringfielddef)
- [StringValue](Powership.md#stringvalue)
- [StringifyDefaultHandler](Powership.md#stringifydefaulthandler)
- [StringifyOptions](Powership.md#stringifyoptions)
- [TAnyFieldType](Powership.md#tanyfieldtype)
- [TopLevelFilterKey](Powership.md#toplevelfilterkey)
- [TransporterFieldType](Powership.md#transporterfieldtype)
- [TransporterLoader](Powership.md#transporterloader)
- [TransporterLoaderName](Powership.md#transporterloadername)
- [TransporterLoadersRecord](Powership.md#transporterloadersrecord)
- [TypeDescription](Powership.md#typedescription)
- [TypeLike](Powership.md#typelike)
- [Types](Powership.md#types)
- [UnhandledSymbol](Powership.md#unhandledsymbol)
- [UnionToIntersection](Powership.md#uniontointersection)
- [UnknownFieldDef](Powership.md#unknownfielddef)
- [UnknownRecord](Powership.md#unknownrecord)
- [Unsubscribe](Powership.md#unsubscribe)
- [UpdateExpression](Powership.md#updateexpression)
- [UpdateExpressionKey](Powership.md#updateexpressionkey)
- [UpdateManyConfig](Powership.md#updatemanyconfig)
- [UpdateManyResult](Powership.md#updatemanyresult)
- [UpdateOneConfig](Powership.md#updateoneconfig)
- [UpdateOneResult](Powership.md#updateoneresult)
- [ValidationCustomMessage](Powership.md#validationcustommessage)
- [Writeable](Powership.md#writeable)
- [\_AllOptional](Powership.md#_alloptional)
- [\_AnyEntity](Powership.md#_anyentity)
- [\_DescribeField](Powership.md#_describefield)
- [\_DescribeObject](Powership.md#_describeobject)
- [\_Difference](Powership.md#_difference)
- [\_EntityLoaderMethods](Powership.md#_entityloadermethods)
- [\_EntityLoaders](Powership.md#_entityloaders)
- [\_ExcludeExtend](Powership.md#_excludeextend)
- [\_ExtendMethodKeys](Powership.md#_extendmethodkeys)
- [\_FieldKV](Powership.md#_fieldkv)
- [\_GetAliasFields](Powership.md#_getaliasfields)
- [\_GetKey](Powership.md#_getkey)
- [\_GetLoaderFilterDef](Powership.md#_getloaderfilterdef)
- [\_GraphQLDataBasic](Powership.md#_graphqldatabasic)
- [\_InferAlias](Powership.md#_inferalias)
- [\_InferAliasFields](Powership.md#_inferaliasfields)
- [\_InferField](Powership.md#_inferfield)
- [\_InferFinalField](Powership.md#_inferfinalfield)
- [\_InferObjectDefinition](Powership.md#_inferobjectdefinition)
- [\_InferSpecialObjectKeys](Powership.md#_inferspecialobjectkeys)
- [\_InnerDef](Powership.md#_innerdef)
- [\_NullableNullable](Powership.md#_nullablenullable)
- [\_ObjectFieldInputBase](Powership.md#_objectfieldinputbase)
- [\_OmitUndefined](Powership.md#_omitundefined)
- [\_PathType](Powership.md#_pathtype)
- [\_ResolverArgs](Powership.md#_resolverargs)
- [\_ShortenFinalFieldDefinitionFieldAsString](Powership.md#_shortenfinalfielddefinitionfieldasstring)
- [\_UndefinedKeys](Powership.md#_undefinedkeys)
- [\_UnknownDiff](Powership.md#_unknowndiff)
- [\_WithInferList](Powership.md#_withinferlist)
- [\_WithInferOptional](Powership.md#_withinferoptional)

### Properties

- [HttpError](Powership.md#httperror)

### Variables

- [$inferableKey](Powership.md#$inferablekey-1)
- [$sealed](Powership.md#$sealed-1)
- [$sealedKey](Powership.md#$sealedkey-1)
- [A\_Z](Powership.md#a_z-1)
- [AppConfig](Powership.md#appconfig)
- [AttributeFilterKeys](Powership.md#attributefilterkeys)
- [BJSON](Powership.md#bjson)
- [BJSON\_FUNCTION](Powership.md#bjson_function)
- [BJSON\_UNDEFINED](Powership.md#bjson_undefined)
- [CACHED\_FIELD\_INSTANCE\_KEY](Powership.md#cached_field_instance_key)
- [CURSOR\_CHARS](Powership.md#cursor_chars)
- [CURSOR\_PREFIX](Powership.md#cursor_prefix)
- [CircularDeps](Powership.md#circulardeps)
- [CustomError](Powership.md#customerror)
- [DEFAULT\_SORT](Powership.md#default_sort)
- [ESCAPE\_INDEX\_PART\_SEP](Powership.md#escape_index_part_sep)
- [ESCAPE\_KEY\_PART\_SEP](Powership.md#escape_key_part_sep)
- [EmailRegex](Powership.md#emailregex)
- [EntityErrorKind](Powership.md#entityerrorkind-1)
- [EntityHooksCreateDefinitionKind](Powership.md#entityhookscreatedefinitionkind-1)
- [EntityStore](Powership.md#entitystore)
- [FieldTypeErrorCodes](Powership.md#fieldtypeerrorcodes)
- [FieldTypes](Powership.md#fieldtypes)
- [FieldsTypeCache](Powership.md#fieldstypecache)
- [FilterConditionsParsers](Powership.md#filterconditionsparsers)
- [GlobalLogger](Powership.md#globallogger)
- [INDEX\_PART\_SEP](Powership.md#index_part_sep)
- [INDEX\_PART\_SEP\_REGEX](Powership.md#index_part_sep_regex)
- [IndexCursor](Powership.md#indexcursor)
- [InvariantError](Powership.md#invarianterror)
- [KEY\_PART\_SEP](Powership.md#key_part_sep)
- [KEY\_PART\_SEP\_REGEX](Powership.md#key_part_sep_regex)
- [KNOWN\_CONSTRUCTOR\_NAMES](Powership.md#known_constructor_names)
- [LogLevelEntries](Powership.md#loglevelentries)
- [LogLevels](Powership.md#loglevels)
- [LogLevelsEnum](Powership.md#loglevelsenum)
- [MIN\_DOCUMENT\_INDEX\_KEY\_PARTS](Powership.md#min_document_index_key_parts)
- [MIN\_FILTER\_INDEX\_KEY\_PARTS](Powership.md#min_filter_index_key_parts)
- [NodeLogger](Powership.md#nodelogger)
- [PageInfoType](Powership.md#pageinfotype)
- [PowershipObject](Powership.md#powershipobject)
- [Process](Powership.md#process)
- [RELATION\_PRECEDES](Powership.md#relation_precedes)
- [SEP](Powership.md#sep)
- [ServerLogs](Powership.md#serverlogs)
- [SpecialObjectKeyEnum](Powership.md#specialobjectkeyenum)
- [TopLevelFilterKeys](Powership.md#toplevelfilterkeys)
- [ULID\_REGEX](Powership.md#ulid_regex)
- [UnhandledSymbol](Powership.md#unhandledsymbol-1)
- [\_\_LOCAL\_DEV\_USERID\_\_](Powership.md#__local_dev_userid__)
- [\_defaultLogger](Powership.md#_defaultlogger)
- [create](Powership.md#create)
- [indexConfigSchema](Powership.md#indexconfigschema)
- [indexItemSchema](Powership.md#indexitemschema)
- [isFieldTypeName](Powership.md#isfieldtypename)
- [noop](Powership.md#noop)
- [objectMetaFieldKey](Powership.md#objectmetafieldkey)
- [randomNames](Powership.md#randomnames)
- [relationSchema](Powership.md#relationschema)
- [resolverKinds](Powership.md#resolverkinds)
- [stringCase](Powership.md#stringcase)
- [transporterLoaderNames](Powership.md#transporterloadernames)
- [types](Powership.md#types-1)

### Functions

- [$](Powership.md#$)
- [\_\_getCachedFieldInstance](Powership.md#__getcachedfieldinstance)
- [\_ensureTransporterMethodsImplementation](Powership.md#_ensuretransportermethodsimplementation)
- [\_joinIndexCursorWithParent](Powership.md#_joinindexcursorwithparent)
- [\_parseAffectedPaths](Powership.md#_parseaffectedpaths)
- [\_parseSubIndexCursor](Powership.md#_parsesubindexcursor)
- [\_pathToList](Powership.md#_pathtolist)
- [\_simpleObjectHash](Powership.md#_simpleobjecthash)
- [\_stringify](Powership.md#_stringify)
- [allocThreadID](Powership.md#allocthreadid)
- [areDifferentElements](Powership.md#aredifferentelements)
- [areEqual](Powership.md#areequal)
- [assertEqual](Powership.md#assertequal)
- [assertError](Powership.md#asserterror)
- [assertFieldFilter](Powership.md#assertfieldfilter)
- [assertSame](Powership.md#assertsame)
- [assertType](Powership.md#asserttype)
- [assertTypes](Powership.md#asserttypes)
- [awaitSync](Powership.md#awaitsync)
- [base64ToText](Powership.md#base64totext)
- [capitalize](Powership.md#capitalize)
- [captureStackTrace](Powership.md#capturestacktrace)
- [cleanMetaField](Powership.md#cleanmetafield)
- [conust](Powership.md#conust)
- [createAggioIndexBasedFilters](Powership.md#createaggioindexbasedfilters)
- [createDocumentIndexBasedFilters](Powership.md#createdocumentindexbasedfilters)
- [createEmptyMetaField](Powership.md#createemptymetafield)
- [createEntity](Powership.md#createentity)
- [createEntityPlugin](Powership.md#createentityplugin)
- [createErrorClass](Powership.md#createerrorclass)
- [createGraphQLHandlers](Powership.md#creategraphqlhandlers)
- [createGraphQLSchema](Powership.md#creategraphqlschema)
- [createModulesProxy](Powership.md#createmodulesproxy)
- [createObjectType](Powership.md#createobjecttype)
- [createPowershipObject](Powership.md#createpowershipobject)
- [createProxy](Powership.md#createproxy)
- [createResolver](Powership.md#createresolver)
- [createResolverFactory](Powership.md#createresolverfactory)
- [createRouteHandler](Powership.md#createroutehandler)
- [createRouteMatcher](Powership.md#createroutematcher)
- [createSchema](Powership.md#createschema)
- [createStore](Powership.md#createstore)
- [createType](Powership.md#createtype)
- [customError](Powership.md#customerror-1)
- [dateSerialize](Powership.md#dateserialize)
- [deepFreeze](Powership.md#deepfreeze-1)
- [defineGetters](Powership.md#definegetters)
- [delay](Powership.md#delay)
- [deleteCachedFieldInstance](Powership.md#deletecachedfieldinstance)
- [describeConstructor](Powership.md#describeconstructor)
- [describeType](Powership.md#describetype)
- [devAssert](Powership.md#devassert)
- [diff](Powership.md#diff)
- [encodeIndexValue](Powership.md#encodeindexvalue)
- [encodeNumber](Powership.md#encodenumber)
- [ensureArray](Powership.md#ensurearray)
- [entries](Powership.md#entries-1)
- [escapeCursorChars](Powership.md#escapecursorchars)
- [escapeStringRegexp](Powership.md#escapestringregexp)
- [expectedType](Powership.md#expectedtype)
- [extendObjectDefinition](Powership.md#extendobjectdefinition)
- [extendType](Powership.md#extendtype)
- [fieldToMock](Powership.md#fieldtomock)
- [filterNull](Powership.md#filternull)
- [fnv1a](Powership.md#fnv1a)
- [formatGraphQL](Powership.md#formatgraphql)
- [formatWithPrettier](Powership.md#formatwithprettier)
- [freeThreadID](Powership.md#freethreadid)
- [freeze](Powership.md#freeze)
- [getDocumentIndexFields](Powership.md#getdocumentindexfields)
- [getGlobalLogLevel](Powership.md#getgloballoglevel)
- [getKeys](Powership.md#getkeys)
- [getLogLevelsRecord](Powership.md#getloglevelsrecord)
- [getNativeConstructorType](Powership.md#getnativeconstructortype)
- [getNativeTypeOf](Powership.md#getnativetypeof)
- [getObjectDefinitionId](Powership.md#getobjectdefinitionid)
- [getObjectDefinitionMetaField](Powership.md#getobjectdefinitionmetafield)
- [getParsedIndexKeys](Powership.md#getparsedindexkeys)
- [getResolver](Powership.md#getresolver)
- [getStack](Powership.md#getstack)
- [getType](Powership.md#gettype)
- [getTypeName](Powership.md#gettypename)
- [hasProperty](Powership.md#hasproperty)
- [hashName](Powership.md#hashname)
- [hashObject](Powership.md#hashobject)
- [hashString](Powership.md#hashstring)
- [implementObject](Powership.md#implementobject-1)
- [indexToCursor](Powership.md#indextocursor)
- [inspect](Powership.md#inspect)
- [inspectObject](Powership.md#inspectobject)
- [invariant](Powership.md#invariant)
- [invariantType](Powership.md#invarianttype)
- [isBrowser](Powership.md#isbrowser)
- [isEntity](Powership.md#isentity)
- [isErrorWithStack](Powership.md#iserrorwithstack)
- [isFieldError](Powership.md#isfielderror)
- [isFieldInstance](Powership.md#isfieldinstance)
- [isFilterConditionKey](Powership.md#isfilterconditionkey)
- [isHiddenFieldName](Powership.md#ishiddenfieldname)
- [isLogLevel](Powership.md#isloglevel)
- [isMetaField](Powership.md#ismetafield)
- [isMetaFieldKey](Powership.md#ismetafieldkey)
- [isObject](Powership.md#isobject)
- [isObjectAsTypeDefinition](Powership.md#isobjectastypedefinition)
- [isObjectType](Powership.md#isobjecttype)
- [isObjectValidationError](Powership.md#isobjectvalidationerror)
- [isObjectWithoutPrototype](Powership.md#isobjectwithoutprototype)
- [isPlainObject](Powership.md#isplainobject)
- [isPossibleArgsDef](Powership.md#ispossibleargsdef)
- [isProduction](Powership.md#isproduction)
- [isUFO](Powership.md#isufo)
- [joinCursorPartsWithTrailingSeparator](Powership.md#joincursorpartswithtrailingseparator)
- [joinIndexCursor](Powership.md#joinindexcursor)
- [joinKeyParts](Powership.md#joinkeyparts)
- [joinPKSK](Powership.md#joinpksk)
- [joinPathsCamelCase](Powership.md#joinpathscamelcase)
- [joinPathsSnakeCase](Powership.md#joinpathssnakecase)
- [jsonToTypescript](Powership.md#jsontotypescript)
- [keyBy](Powership.md#keyby)
- [keys](Powership.md#keys)
- [mapper](Powership.md#mapper)
- [memoize](Powership.md#memoize)
- [merge](Powership.md#merge-1)
- [mergeIndexRelationsResult](Powership.md#mergeindexrelationsresult)
- [mountGraphID](Powership.md#mountgraphid)
- [ms](Powership.md#ms)
- [nonNullValues](Powership.md#nonnullvalues)
- [notNull](Powership.md#notnull)
- [objectEntries](Powership.md#objectentries-1)
- [objectMock](Powership.md#objectmock)
- [override](Powership.md#override-1)
- [parseAggioAttributeFilters](Powership.md#parseaggioattributefilters)
- [parseAggioUpdateExpression](Powership.md#parseaggioupdateexpression)
- [parseCollectionIndexConfig](Powership.md#parsecollectionindexconfig)
- [parseEntityIndexFields](Powership.md#parseentityindexfields)
- [parseField](Powership.md#parsefield)
- [parseFieldDefinitionConfig](Powership.md#parsefielddefinitionconfig)
- [parseFilterCursor](Powership.md#parsefiltercursor)
- [parseFilterIndexFilterParts](Powership.md#parsefilterindexfilterparts)
- [parseFlattenFieldDefinition](Powership.md#parseflattenfielddefinition)
- [parseIndexCursor](Powership.md#parseindexcursor)
- [parseIndexFieldName](Powership.md#parseindexfieldname)
- [parseObjectDefinition](Powership.md#parseobjectdefinition)
- [parseObjectField](Powership.md#parseobjectfield)
- [parseOneIndexDocumentFields](Powership.md#parseoneindexdocumentfields)
- [parsePath](Powership.md#parsepath)
- [parseUpdateExpression](Powership.md#parseupdateexpression)
- [parseValidationError](Powership.md#parsevalidationerror)
- [pick](Powership.md#pick-1)
- [pickIndexKeyPartsFromDocument](Powership.md#pickindexkeypartsfromdocument)
- [pluralize](Powership.md#pluralize)
- [project](Powership.md#project)
- [proxyRealValue](Powership.md#proxyrealvalue)
- [pushTrailingIndexSep](Powership.md#pushtrailingindexsep)
- [randomInt](Powership.md#randomint)
- [randomItem](Powership.md#randomitem)
- [randomName](Powership.md#randomname)
- [reduceObject](Powership.md#reduceobject)
- [registerEntity](Powership.md#registerentity)
- [resetTypesCache](Powership.md#resettypescache)
- [resolversToTypescript](Powership.md#resolverstotypescript)
- [resolversTypescriptParts](Powership.md#resolverstypescriptparts)
- [setByPath](Powership.md#setbypath)
- [setGlobalLogLevel](Powership.md#setgloballoglevel)
- [setPrettier](Powership.md#setprettier)
- [simpleObjectClone](Powership.md#simpleobjectclone)
- [simpleObjectHash](Powership.md#simpleobjecthash)
- [sortObject](Powership.md#sortobject)
- [splitCursorParts](Powership.md#splitcursorparts)
- [stringHash](Powership.md#stringhash)
- [stringify](Powership.md#stringify)
- [stripTrailingIndexSep](Powership.md#striptrailingindexsep)
- [textToBase64](Powership.md#texttobase64)
- [tuple](Powership.md#tuple)
- [tupleEnum](Powership.md#tupleenum)
- [tupleNum](Powership.md#tuplenum)
- [ufo](Powership.md#ufo)
- [ufos](Powership.md#ufos)
- [ulid](Powership.md#ulid)
- [uniq](Powership.md#uniq)
- [uniqBy](Powership.md#uniqby)
- [upperFirst](Powership.md#upperfirst)
- [useProcess](Powership.md#useprocess)
- [values](Powership.md#values)
- [wrapError](Powership.md#wraperror)

## References

### InferField

Renames and re-exports [Infer](Powership.md#infer)

___

### T

Re-exports [T](Powership.TU.T.md)

___

### isHttpError

Renames and re-exports [HttpError](Powership.md#httperror)

## Type Aliases

### $inferableKey

Ƭ **$inferableKey**: typeof [`$inferableKey`](Powership.md#$inferablekey-1)

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:12

packages/schema/lib/fields/Infer/DescribeField.d.ts:13

___

### $sealed

Ƭ **$sealed**: typeof [`$sealed`](Powership.md#$sealed-1)

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:10

packages/schema/lib/fields/Infer/DescribeField.d.ts:11

___

### $sealedDef

Ƭ **$sealedDef**: [`Compute`](Powership.TU.md#compute)<{ `list`: ``false`` ; `literal`: [`$sealed`](Powership.md#$sealed-1) ; `optional`: ``false``  } & [`CommonFieldDefinitionProps`](../interfaces/Powership.CommonFieldDefinitionProps.md)\>

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:19

___

### $sealedKey

Ƭ **$sealedKey**: typeof [`$sealedKey`](Powership.md#$sealedkey-1)

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:8

packages/schema/lib/fields/Infer/DescribeField.d.ts:9

___

### A\_Z

Ƭ **A\_Z**: typeof [`A_Z`](Powership.TU.md#a_z-1)[`number`]

#### Defined in

packages/utils/lib/typings/index.d.ts:95

packages/utils/lib/typings/index.d.ts:96

___

### AliasFieldAggregation

Ƭ **AliasFieldAggregation**<`Parent`\>: { `type`: [`FieldInput`](Powership.md#fieldinput)  } & { `aggregate`: `Aggregation`<`Parent`\> \| `Readonly`<`Aggregation`<`Parent`\>\> ; `from`: [`ObjectPath`](Powership.TU.md#objectpath)<`Parent`\>  } \| { `aggregate`: `Aggregation`<`Parent`\> \| `Readonly`<`Aggregation`<`Parent`\>\> ; `from?`: `undefined`  } \| { `aggregate?`: `undefined` ; `from`: [`ObjectPath`](Powership.TU.md#objectpath)<`Parent`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parent` | `any` |

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:5

___

### AliasFieldDef

Ƭ **AliasFieldDef**: `string` \| [`AliasFieldAggregation`](Powership.md#aliasfieldaggregation)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:17

___

### AllFieldTypes

Ƭ **AllFieldTypes**: { [K in keyof FieldDefinitions]: FieldType<unknown, K, FieldDefinitions[K], 0, 0\> }

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:69

___

### AllFilterOperations

Ƭ **AllFilterOperations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$between` | [`string`, `string`] \| [`number`, `number`] |
| `$contains` | `string` \| `number` \| `boolean` \| ``null`` |
| `$eq` | [`PKSKValueType`](Powership.md#pkskvaluetype) \| `boolean` |
| `$exists` | `boolean` |
| `$gt` | [`PKSKValueType`](Powership.md#pkskvaluetype) |
| `$gte` | [`PKSKValueType`](Powership.md#pkskvaluetype) |
| `$in` | `unknown`[] |
| `$lt` | [`PKSKValueType`](Powership.md#pkskvaluetype) |
| `$lte` | [`PKSKValueType`](Powership.md#pkskvaluetype) |
| `$matchString` | `string` |
| `$ne` | [`PKSKValueType`](Powership.md#pkskvaluetype) \| `boolean` |
| `$startsWith` | `string` |
| `$type` | [`TransporterFieldType`](Powership.md#transporterfieldtype) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:9

___

### AllFinalFieldDefinitions

Ƭ **AllFinalFieldDefinitions**: { [Type in FieldTypeName]: Object }

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:18

___

### AllIndexFilter

Ƭ **AllIndexFilter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$between` | [`string`, `string`] \| [`number`, `number`] |
| `$eq` | [`PKSKValueType`](Powership.md#pkskvaluetype) |
| `$gt` | [`PKSKValueType`](Powership.md#pkskvaluetype) |
| `$gte` | [`PKSKValueType`](Powership.md#pkskvaluetype) |
| `$lt` | [`PKSKValueType`](Powership.md#pkskvaluetype) |
| `$lte` | [`PKSKValueType`](Powership.md#pkskvaluetype) |
| `$startsWith` | [`PKSKValueType`](Powership.md#pkskvaluetype) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:48

___

### AnyArray

Ƭ **AnyArray**<`T`\>: `ReadonlyArray`<`T`\> \| `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

packages/utils/lib/typings/index.d.ts:37

___

### AnyCollectionIndexConfig

Ƭ **AnyCollectionIndexConfig**: [`CollectionIndexConfig`](Powership.md#collectionindexconfig)<[`DocumentBase`](Powership.md#documentbase), `string`\>

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:44

___

### AnyDocIndexItem

Ƭ **AnyDocIndexItem**: [`DocumentIndexItem`](Powership.md#documentindexitem)

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

### AnyFunction

Ƭ **AnyFunction**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

packages/utils/lib/typings/index.d.ts:46

___

### AnyList

Ƭ **AnyList**<`T`\>: [`AnyArray`](Powership.TU.md#anyarray)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

packages/utils/lib/typings/index.d.ts:38

___

### AnyRecord

Ƭ **AnyRecord**: `Record`<`string`, `any`\>

#### Defined in

packages/utils/lib/typings/index.d.ts:33

___

### AnyResolver

Ƭ **AnyResolver**: [`Resolver`](Powership.md#resolver)<`any`, `any`, `any`, `any`\>

#### Defined in

packages/schema/lib/Resolver.d.ts:32

___

### ArrayKeys

Ƭ **ArrayKeys**<`T`\>: `T` extends `any`[] \| `ReadonlyArray`<`any`\> ? `T` extends [`any`, ...(infer Tail)] ? [`ArrayKeys`](Powership.TU.md#arraykeys)<`Tail`\> \| `Tail`[``"length"``] : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:63

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

### ArrayType

Ƭ **ArrayType**<`T`\>: `T` extends infer N[] ? `N` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:32

___

### As

Ƭ **As**<`T`, `L`\>: `A.Cast`<`T`, `L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `L` |

#### Defined in

packages/utils/lib/typings/ts-toolbet.d.ts:17

___

### Assertable

Ƭ **Assertable**: `string` \| `boolean` \| `number` \| `AssertableList` \| `Readonly`<`AssertableList`\> \| { `[K: string]`: `unknown`;  }

#### Defined in

packages/utils/lib/areEqual.d.ts:2

___

### AttributeFilterKey

Ƭ **AttributeFilterKey**: typeof [`AttributeFilterKeys`](Powership.md#attributefilterkeys)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:164

___

### BaseRequestHandlerInit

Ƭ **BaseRequestHandlerInit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body?` | [`RequestBody`](Powership.md#requestbody) |
| `headers?` | [`HeaderRecordInit`](Powership.md#headerrecordinit) \| `Headers` |
| `method?` | `string` |
| `statusCode?` | [`ServerResponseStatus`](Powership.md#serverresponsestatus) |
| `url?` | `string` |

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:7

___

### BinAny

Ƭ **BinAny**<`T`, `True`, `False`\>: { `0`: `False` ; `1`: `True`  }[[`IsAny`](Powership.TU.md#isany)<`T`\> extends ``true`` ? ``0`` : ``1``]

#### Type parameters

| Name |
| :------ |
| `T` |
| `True` |
| `False` |

#### Defined in

packages/utils/lib/typings/index.d.ts:91

___

### BinKnown

Ƭ **BinKnown**<`T`, `True`, `False`\>: { `0`: `False` ; `1`: `True`  }[[`IsKnown`](Powership.TU.md#isknown)<`T`\>]

#### Type parameters

| Name |
| :------ |
| `T` |
| `True` |
| `False` |

#### Defined in

packages/utils/lib/typings/index.d.ts:87

___

### Cast

Ƭ **Cast**<`T`, `L`\>: `A.Cast`<`T`, `L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `L` |

#### Defined in

packages/utils/lib/typings/ts-toolbet.d.ts:19

___

### CollectionConfigIndexes

Ƭ **CollectionConfigIndexes**<`Doc`, `K`\>: `ReadonlyArray`<[`DocumentIndexItem`](Powership.md#documentindexitem)<`K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) |
| `K` | extends `string` = `Extract`<keyof `Doc`, `string`\> |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:39

___

### CollectionIndexConfig

Ƭ **CollectionIndexConfig**<`Doc`, `EntityName`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) |
| `EntityName` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `Readonly`<`EntityName`\> |
| `indexes` | [`CollectionConfigIndexes`](Powership.md#collectionconfigindexes)<`Doc`\> |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:40

___

### CommonIndexFields

Ƭ **CommonIndexFields**: { `_c`: `string` ; `_e`: `string` ; `_id`: `string` ; `_rpk?`: `string`[]  } & { [L in \`${string}PK\`]: string } & { [L in \`${string}SK\`]: string }

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:462

___

### Compute

Ƭ **Compute**<`T`, `Max`\>: [`IsKnown`](Powership.TU.md#isknown)<`T`\> extends ``1`` ? `ComputeDeep`<`T`, `Max`, ``0``, `never`\> : `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Max` | extends `number` = ``1`` |

#### Defined in

packages/utils/lib/typings/Compute.d.ts:17

___

### ConstructorDescription

Ƭ **ConstructorDescription**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `constructorName` | [`NATIVE_TYPE_NAME`](Powership.md#native_type_name) \| `string` |
| `isObjectWithoutPrototype` | `boolean` |
| `native` | `boolean` |

#### Defined in

packages/utils/lib/getTypeName.d.ts:44

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
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Powership.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Powership.md#loadercontext) |
| `indexConfig` | [`CollectionIndexConfig`](Powership.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
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

### CreateProxyOptions

Ƭ **CreateProxyOptions**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onGet?` | <K\>(`field`: `K`) => `T`[`K`] \| ``null`` |
| `onHas?` | <K\>(`field`: `K`) => `boolean` \| ``null`` |
| `onSet?` | <K\>(`field`: `K`, `v`: `any`) => ``true`` \| ``null`` |

#### Defined in

packages/utils/lib/createProxy.d.ts:1

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

packages/schema/lib/fields/_fieldDefinitions.d.ts:10

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

### DeepArrayKeys

Ƭ **DeepArrayKeys**<`T`\>: { [K in keyof T]: \`${Extract<K, string\>}.${ObjectPath<T[K]\>}\` }[`number`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |

#### Defined in

packages/utils/lib/typings/index.d.ts:64

___

### DeepFreeze

Ƭ **DeepFreeze**<`O`\>: { readonly [K in keyof O]: O[K] extends M.BuiltIn ? O[K] : DeepFreeze<O[K]\> }

#### Type parameters

| Name |
| :------ |
| `O` |

#### Defined in

packages/utils/lib/deepFreeze.d.ts:3

___

### DeepWritable

Ƭ **DeepWritable**<`T`\>: { -readonly [K in keyof T]: T[K] extends object ? { [L in keyof DeepWritable<T[K]\>]: DeepWritable<T[K]\>[L] } : T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/deepFreeze.d.ts:6

___

### DeleteManyConfig

Ƭ **DeleteManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Powership.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Powership.md#loadercontext) |
| `filter` | [`MethodFilter`](Powership.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Powership.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |

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
| `Item` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Powership.md#filterrecord)<`Item`\> |
| `context?` | [`LoaderContext`](Powership.md#loadercontext) |
| `filter` | [`MethodFilter`](Powership.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Powership.md#collectionindexconfig)<`Item`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |

#### Defined in

packages/transporter/lib/Transporter.d.ts:134

___

### DeleteOneResult

Ƭ **DeleteOneResult**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `item` | `T` \| ``null`` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:203

___

### DescribeAndOverrideField

Ƭ **DescribeAndOverrideField**<`T`, `Override`\>: [`DescribeWithoutSeal`](Powership.md#describewithoutseal)<`T`\> extends infer R ? `R` extends [`FinalFieldDefinition`](Powership.md#finalfielddefinition) ? [`SealedField`](Powership.md#sealedfield)<[`Merge`](Powership.TU.T.md#merge)<{ [K in keyof R as K extends keyof Override ? never : K]: R[K] }, `Override`\>\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |
| `Override` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:32

___

### DescribeField

Ƭ **DescribeField**<`Input`\>: [[`$sealedKey`](Powership.md#$sealedkey-1)] extends [keyof `Input`] ? `Input` : [`SealedField`](Powership.md#sealedfield)<[`_DescribeField`](Powership.md#_describefield)<`Input`\>\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:14

___

### DescribeObjectDefinition

Ƭ **DescribeObjectDefinition**<`Input`\>: [`$sealedKey`](Powership.md#$sealedkey-1) extends keyof `Input` ? `Input` : [`Input`] extends [`object`] ? [`Seal`](Powership.md#seal)<{ -readonly [K in keyof Input]: DescribeField<Input[K]\> }\> : [`Seal`](Powership.md#seal)<{}\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:35

___

### DescribeWithoutSeal

Ƭ **DescribeWithoutSeal**<`T`\>: `Omit`<[`DescribeField`](Powership.md#describefield)<`T`\>, [`$inferableKey`](Powership.md#$inferablekey-1) \| [`$sealedKey`](Powership.md#$sealedkey-1)\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:29

___

### Difference

Ƭ **Difference**<`Type`\>: `Type` extends `unknown` ? `Type` extends `object` ? { [P in Paths<Type\>]: PathType<Type, P\> extends infer R ? R extends unknown ? [R] extends [never] ? \_UnknownDiff : \_Difference<R, P\> : never : never }[[`Paths`](Powership.TU.md#paths)<`Type`\>] extends infer R ? `R` extends `unknown` ? { [K in keyof R]: R[K] } & {} : `never` : `never` : [`_Difference`](Powership.md#_difference)<`Type`, ``""``\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `any` |

#### Defined in

packages/utils/lib/diff/diff.d.ts:5

___

### DifferenceAction

Ƭ **DifferenceAction**: ``"add"`` \| ``"update"`` \| ``"delete"``

#### Defined in

packages/utils/lib/diff/diff.d.ts:4

___

### DifferencePath

Ƭ **DifferencePath**: `string` \| `number`

#### Defined in

packages/utils/lib/diff/diff.d.ts:3

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
| `PK` | [`FilterConditions`](Powership.md#filterconditions) \| `string` |
| `SK` | [`FilterConditions`](Powership.md#filterconditions) \| `string` |
| `entity` | `string` |
| `key` | [`AnyDocIndexItem`](Powership.md#anydocindexitem)[``"name"``] |

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
| `PK` | [`IndexPKSKPartsListConfig`](../interfaces/Powership.IndexPKSKPartsListConfig.md)<`DocKeys`\> |
| `SK?` | [`IndexPKSKPartsListConfig`](../interfaces/Powership.IndexPKSKPartsListConfig.md)<`DocKeys`\> |
| `name` | [`DocumentIndexFieldKey`](Powership.md#documentindexfieldkey) |
| `relatedTo?` | `string` |
| `relations?` | `ReadonlyArray`<[`DocumentIndexRelation`](Powership.md#documentindexrelation)\> |

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

Ƭ **EdgeType**<`T`\>: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: { `cursor`: ``"string"`` ; `node`: `T` extends [`GraphTypeLike`](../interfaces/Powership.GraphTypeLike.md) ? `T` : ``"null"``  }  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/entity/lib/paginationUtils.d.ts:11

___

### EntityDocument

Ƭ **EntityDocument**<`Shape`\>: [`IsKnown`](Powership.TU.md#isknown)<`Shape`\> extends ``1`` ? [`Merge`](Powership.TU.T.md#merge)<[`EntityDocumentBase`](Powership.md#entitydocumentbase), `Shape`\> : [`EntityDocumentBase`](Powership.md#entitydocumentbase) & { `[K: string]`: `unknown`;  }

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

Ƭ **EntityDocumentInput**<`Shape`\>: [`IsKnown`](Powership.TU.md#isknown)<`Shape`\> extends ``1`` ? [`Merge`](Powership.TU.T.md#merge)<`Partial`<[`EntityDocumentBase`](Powership.md#entitydocumentbase)\>, `Shape`\> : `Partial`<[`EntityDocumentBase`](Powership.md#entitydocumentbase)\> & { `[K: string]`: `unknown`;  }

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
| `invalidFields?` | [`InvalidParsedIndexField`](Powership.md#invalidparsedindexfield)[] |
| `reason` | [`EntityErrorKind`](Powership.md#entityerrorkind-1) |

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:29

___

### EntityErrorKind

Ƭ **EntityErrorKind**: keyof [`EntityErrorKindEnum`](Powership.md#entityerrorkindenum)

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:2

packages/transporter/lib/CollectionErrors.d.ts:28

___

### EntityErrorKindEnum

Ƭ **EntityErrorKindEnum**: typeof [`EntityErrorKind`](Powership.md#entityerrorkind-1)

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:27

___

### EntityFieldResolver

Ƭ **EntityFieldResolver**<`Context`, `TypeDef`, `ArgsDef`, `Root`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | `Context` |
| `TypeDef` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) |
| `ArgsDef` | extends [`ObjectDefinitionInput`](Powership.md#objectdefinitioninput) \| `undefined` |
| `Root` | `Root` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args?` | `ArgsDef` |
| `name` | `string` |
| `resolve` | [`ResolverResolve`](Powership.md#resolverresolve)<`Context`, `Root`, `TypeDef`, `ArgsDef`\> |
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
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`EntityDocument`](Powership.md#entitydocument)<{ `[K: string]`: `unknown`;  }\> |
| `E` | extends [`AnyEntity`](Powership.md#anyentity) = [`AnyEntity`](Powership.md#anyentity) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beforeQuery` | `AsyncPlugin`<`EntityOperationInfoContext`, {}\> |
| `createDefinition` | `SyncPlugin`<`Record`<`string`, [`FinalFieldDefinition`](Powership.md#finalfielddefinition)\>, { `entityOptions`: [`EntityOptions`](Powership.md#entityoptions) ; `fields`: `string`[] ; `kind`: [`EntityHooksCreateDefinitionKind`](Powership.md#entityhookscreatedefinitionkind-1) ; `resolvers`: [`EntityFieldResolver`](Powership.md#entityfieldresolver)<`any`, `any`, `any`, `any`\>[]  }\> |
| `filterResult` | `AsyncPlugin`<{ `items`: [`EntityDocument`](Powership.md#entitydocument)<`Doc`\>[] ; `kind`: ``"items"``  } \| { `kind`: ``"pagination"`` ; `pagination`: [`PaginationResult`](Powership.md#paginationresult)<[`EntityDocument`](Powership.md#entitydocument)<`Doc`\>\>  }, { `operation`: `EntityOperationInfoContext` ; `resolvers`: [`EntityFieldResolver`](Powership.md#entityfieldresolver)<`any`, `any`, `any`, `any`\>[]  }\> |
| `initCreation` | `SyncPlugin`<[`EntityOptions`](Powership.md#entityoptions), `E`\> |
| `postParse` | `AsyncPlugin`<`EntityOperationInfoContext`, [`EntityParserHookContext`](Powership.md#entityparserhookcontext)<`E`\>\> |
| `preParse` | `AsyncPlugin`<`EntityOperationInfoContext`, [`EntityParserHookContext`](Powership.md#entityparserhookcontext)<`E`\>\> |
| `willResolve` | `AsyncPlugin`<[`_EntityLoaders`](Powership.md#_entityloaders)<`E`\>, `EntityOperationInfoContext`\> |

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:21

___

### EntityHooksCreateDefinitionKind

Ƭ **EntityHooksCreateDefinitionKind**: typeof [`EntityHooksCreateDefinitionKind`](Powership.md#entityhookscreatedefinitionkind-1)[`number`]

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:12

packages/entity/lib/EntityPlugin.d.ts:13

___

### EntityLoaderConfig

Ƭ **EntityLoaderConfig**<`Method`, `Context`\>: [`TransporterLoadersRecord`](Powership.md#transporterloadersrecord)[`Method`] extends (`config`: infer Config) => `any` ? `Config` & { `context`: `Context`  } extends infer R ? { [K in keyof R as K extends "context" ? never : K]: R[K] } & { `context`: `Context`  } : `never` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Method` | extends [`TransporterLoaderName`](Powership.md#transporterloadername) |
| `Context` | extends [`LoaderContext`](Powership.md#loadercontext) = `Record`<`string`, `any`\> |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderConfig.d.ts:2

___

### EntityLoaderMethods

Ƭ **EntityLoaderMethods**<`Context`\>: [`_EntityLoaderMethods`](Powership.md#_entityloadermethods)<`Context`\> extends infer Methods ? { [K in keyof Methods]: Methods[K] extends Function ? Options extends Record<string, any\> ? Function & \_EntityLoaderUtils<Options, Context\> : Methods[K] : Methods[K] } & {} : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](Powership.md#anyentitytypescontext) |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:5

___

### EntityOptions

Ƭ **EntityOptions**<`InputDocumentDefinition`, `Indexes`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDocumentDefinition` | extends [`ObjectDefinitionInput`](Powership.md#objectdefinitioninput) = [`ObjectDefinitionInput`](Powership.md#objectdefinitioninput) |
| `Indexes` | extends [`DocumentIndexesConfig`](../interfaces/Powership.DocumentIndexesConfig.md) = [`DocumentIndexesConfig`](../interfaces/Powership.DocumentIndexesConfig.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowExtraFields?` | `boolean` |
| `indexes` | `Indexes` |
| `logs?` | [`LoggerOptions`](../interfaces/Powership.LoggerOptions.md) |
| `name` | `string` |
| `transporter?` | [`Transporter`](../interfaces/Powership.Transporter.md) |
| `type` | [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: `InputDocumentDefinition`  }\> |

#### Defined in

packages/entity/lib/EntityOptions.d.ts:4

___

### EntityParserHookContext

Ƭ **EntityParserHookContext**<`E`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`AnyEntity`](Powership.md#anyentity) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkForVersion?` | `boolean` |
| `entity` | `E` |

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:14

___

### Entries

Ƭ **Entries**<`T`\>: { [K in Extract<keyof T, string\>]-?: [K, T[K]] }[`Extract`<keyof `T`, `string`\>][]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:43

___

### ErrorClassCreatorOptions

Ƭ **ErrorClassCreatorOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultShouldPublishStack?` | ``false`` |
| `errorGroup?` | `string` |
| `publicName?` | `string` |

#### Defined in

packages/utils/lib/createErrorClass.d.ts:2

___

### EventMetadataBase

Ƭ **EventMetadataBase**: [`EventMetadataObjectBase`](Powership.md#eventmetadataobjectbase) \| [`InternalEvent`](Powership.md#internalevent)

#### Defined in

packages/utils/lib/Store.d.ts:9

___

### EventMetadataObjectBase

Ƭ **EventMetadataObjectBase**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Defined in

packages/utils/lib/Store.d.ts:6

___

### FieldAsString

Ƭ **FieldAsString**: [`FieldTypeName`](Powership.md#fieldtypename) \| \`${FieldTypeName}?\` \| \`[${FieldTypeName}]\` \| \`[${FieldTypeName}]?\`

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:39

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
| `def` | [`FinalFieldDefinitionStrict`](Powership.md#finalfielddefinitionstrict) |
| `validate` | (`input`: `any`, `parent`: `Schema`) => `T` |

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:10

___

### FieldCreators

Ƭ **FieldCreators**: `Readonly`<{ [K in FieldTypeName]: Types[K]["create"] }\>

#### Defined in

packages/schema/lib/fields/fieldTypes.d.ts:69

___

### FieldDefinitionConfig

Ƭ **FieldDefinitionConfig**: [`ObjectFieldInput`](Powership.md#objectfieldinput)

#### Defined in

packages/schema/lib/TObjectConfig.d.ts:4

___

### FieldDefinitions

Ƭ **FieldDefinitions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ID` | { `autoCreate?`: `boolean`  } \| `undefined` |
| `alias` | [`AliasFieldDef`](Powership.md#aliasfielddef) |
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
| `meta` | [`MetaFieldDef`](Powership.md#metafielddef) |
| `null` | `undefined` |
| `object` | { `[K: string]`: [`ObjectFieldInput`](Powership.md#objectfieldinput);  } \| `Readonly`<{ `[K: string]`: [`ObjectFieldInput`](Powership.md#objectfieldinput);  }\> \| [`ObjectLike`](../interfaces/Powership.ObjectLike.md) |
| `phone` | `PhoneFieldDef` |
| `record` | [`RecordFieldDef`](Powership.md#recordfielddef) \| `undefined` |
| `string` | { `max?`: `number` ; `min?`: `number` ; `regex?`: [`string`] \| [`string`, `string`] \| `Readonly`<[`string`] \| [`string`, `string`]\>  } \| `undefined` |
| `ulid` | { `autoCreate?`: `boolean`  } \| `undefined` |
| `undefined` | `undefined` |
| `union` | [`ObjectFieldInput`](Powership.md#objectfieldinput)[] \| `Readonly`<[`ObjectFieldInput`](Powership.md#objectfieldinput)[]\> |
| `unknown` | [`UnknownFieldDef`](Powership.md#unknownfielddef) \| `undefined` |

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:52

___

### FieldExample

Ƭ **FieldExample**: [`FieldExampleFunction`](Powership.md#fieldexamplefunction) \| `string`

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:28

___

### FieldExampleFunction

Ƭ **FieldExampleFunction**: () => `string` \| `Promise`<`string`\>

#### Type declaration

▸ (): `string` \| `Promise`<`string`\>

##### Returns

`string` \| `Promise`<`string`\>

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:27

___

### FieldInput

Ƭ **FieldInput**: [`ObjectFieldInput`](Powership.md#objectfieldinput)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:8

___

### FieldInputLikeRequiredKey

Ƭ **FieldInputLikeRequiredKey**: [`ObjectTypeKID`](Powership.md#objecttypekid) \| [`GraphTypeKID`](Powership.md#graphtypekid) \| [`FieldTypeName`](Powership.md#fieldtypename) \| ``"type"``

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:20

___

### FieldParserConfig

Ƭ **FieldParserConfig**: [`ValidationCustomMessage`](Powership.md#validationcustommessage) \| [`FieldParserOptionsObject`](Powership.md#fieldparseroptionsobject)

#### Defined in

packages/schema/lib/applyValidator.d.ts:11

___

### FieldParserOptionsObject

Ƭ **FieldParserOptionsObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowExtraFields?` | `boolean` |
| `customErrorMessage?` | [`ValidationCustomMessage`](Powership.md#validationcustommessage) |
| `customMessage?` | [`ValidationCustomMessage`](Powership.md#validationcustommessage) |
| `exclude?` | `string`[] |
| `excludeInvalidListItems?` | `boolean` |
| `includeHidden?` | `boolean` |
| `partial?` | `boolean` |

#### Defined in

packages/schema/lib/applyValidator.d.ts:2

___

### FieldTypeErrorCode

Ƭ **FieldTypeErrorCode**: typeof [`FieldTypeErrorCodes`](Powership.md#fieldtypeerrorcodes)[`number`]

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:2

___

### FieldTypeName

Ƭ **FieldTypeName**: `Extract`<keyof [`FieldDefinitions`](Powership.md#fielddefinitions), `string`\>

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:100

___

### FieldTypeOptions

Ƭ **FieldTypeOptions**: [`ListDefinitionObject`](Powership.md#listdefinitionobject) & { `[K: string]`: `unknown`;  }

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:7

___

### FieldTypeParser

Ƭ **FieldTypeParser**<`Type`\>: (`input`: `any`, `config?`: [`FieldParserConfig`](Powership.md#fieldparserconfig)) => `Type`

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
| `config?` | [`FieldParserConfig`](Powership.md#fieldparserconfig) |

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
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:34

___

### FilterRecord

Ƭ **FilterRecord**<`Doc`\>: [`EntityFilters`](Powership.md#entityfilters)<`Doc`\> \| { `$and?`: [`RootFilterOperators`](Powership.md#rootfilteroperators)<`Doc`\>[``"$and"``] ; `$not?`: [`RootFilterOperators`](Powership.md#rootfilteroperators)<`Doc`\>[``"$not"``] ; `$or?`: [`RootFilterOperators`](Powership.md#rootfilteroperators)<`Doc`\>[``"$or"``] ; `_id?`: `string` ; `_id1?`: `string` ; `_id2?`: `string` ; `_id3?`: `string` ; `id?`: `string`  } & [`EntityFilters`](Powership.md#entityfilters)<`Doc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:38

___

### FinalFieldDefinition

Ƭ **FinalFieldDefinition**: { [K in FieldTypeName]: FieldDefinitionWithType<K\> }[[`FieldTypeName`](Powership.md#fieldtypename)]

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:31

___

### FinalFieldDefinitionStrict

Ƭ **FinalFieldDefinitionStrict**: [`AllFinalFieldDefinitions`](Powership.md#allfinalfielddefinitions)[keyof [`AllFinalFieldDefinitions`](Powership.md#allfinalfielddefinitions)]

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:30

___

### FinalObjectDefinition

Ƭ **FinalObjectDefinition**: `Object`

#### Index signature

▪ [K: `string`]: [`FinalFieldDefinition`](Powership.md#finalfielddefinition)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:15

___

### FindByIdConfig

Ƭ **FindByIdConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Powership.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Powership.md#loadercontext) |
| `id` | `string` |
| `indexConfig` | [`CollectionIndexConfig`](Powership.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:97

___

### FindManyConfig

Ƭ **FindManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`IndexFilterRecord`](Powership.md#indexfilterrecord)<`PK`, `SK`\> extends infer R ? { [K in keyof R]: R[K] } : {} \| `string` |
| `condition?` | [`FilterRecord`](Powership.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Powership.md#loadercontext) |
| `filter` | [`MethodFilter`](Powership.md#methodfilter)<`PK`, `SK`\> |
| `first?` | `number` |
| `indexConfig` | [`CollectionIndexConfig`](Powership.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |
| `sort?` | [`QuerySort`](Powership.md#querysort) |

#### Defined in

packages/transporter/lib/Transporter.d.ts:76

___

### FindManyResult

Ƭ **FindManyResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |

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
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Powership.md#filterrecord)<`Doc`\> |
| `consistent?` | `boolean` |
| `context?` | [`LoaderContext`](Powership.md#loadercontext) |
| `filter` | [`MethodFilter`](Powership.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Powership.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `projection?` | `string`[] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:89

___

### FindOneResult

Ƭ **FindOneResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `item` | `Doc` \| ``null`` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:140

___

### FlattenFieldDefinition

Ƭ **FlattenFieldDefinition**: { [type in FieldTypeName]: { [K in type]: [FieldDefinitions[K]] extends [undefined] ? FieldDefinitions[K] \| Object : FieldDefinitions[K] } }[[`FieldTypeName`](Powership.md#fieldtypename)] & [`CommonFieldDefinitionProps`](../interfaces/Powership.CommonFieldDefinitionProps.md)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:34

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

### ForceString

Ƭ **ForceString**<`T`\>: `T` extends `string` ? `T` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:50

___

### GetFieldByDotNotation

Ƭ **GetFieldByDotNotation**<`Obj`, `DotNotation`\>: `DotNotation` extends \`${number}\` ? `number` extends keyof `Obj` ? `Obj`[`number`] : `undefined` : `DotNotation` extends keyof `Obj` ? `Obj`[`DotNotation`] : `DotNotation` extends \`${infer Left}.${infer Right}\` ? `Left` extends keyof `Obj` ? [`GetFieldByDotNotation`](Powership.TU.md#getfieldbydotnotation)<`Exclude`<`Obj`[`Left`], `undefined`\>, `Right`\> \| `Extract`<`Obj`[`Left`], `undefined`\> : `undefined` : `undefined`

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `DotNotation` |

#### Defined in

packages/utils/lib/typings/index.d.ts:109

___

### GetFieldByDotPath

Ƭ **GetFieldByDotPath**<`Obj`, `DotNotation`\>: [`GetFieldByDotNotation`](Powership.TU.md#getfieldbydotnotation)<`Obj`, `DotNotation`\>

**`Alias`**

to GetFieldByDotNotation

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `DotNotation` |

#### Defined in

packages/utils/lib/typings/index.d.ts:70

___

### GraphQLDataResponse

Ƭ **GraphQLDataResponse**: [`_GraphQLDataBasic`](Powership.md#_graphqldatabasic) \| [`GraphQLDataResponse`](Powership.md#graphqldataresponse)[] \| `Record`<`string`, [`_GraphQLDataBasic`](Powership.md#_graphqldatabasic)\>

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:37

___

### GraphQLResponseRecord

Ƭ **GraphQLResponseRecord**: `Object`

#### Index signature

▪ [K: `string`]: [`GraphQLDataResponse`](Powership.md#graphqldataresponse)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:38

___

### GraphQLSchemaWithUtils

Ƭ **GraphQLSchemaWithUtils**: `GraphQLSchema` & { `utils`: { `generateClientUtils`: () => `Promise`<`string`\> ; `grouped`: [`GroupedResolvers`](Powership.md#groupedresolvers) ; `print`: () => `string` ; `queryExamples`: (`options?`: [`ObjectMockOptions`](Powership.md#objectmockoptions) & { `resolver?`: `string`  }) => `string` ; `queryTemplates`: () => `SchemaQueryTemplatesResult` ; `registeredResolvers`: [`AnyResolver`](Powership.md#anyresolver)[] ; `resolvers`: [`AnyResolver`](Powership.md#anyresolver)[] ; `typescript`: (`options?`: [`ResolversToTypeScriptOptions`](Powership.md#resolverstotypescriptoptions)) => `Promise`<`string`\> ; `usedConfig`: `GraphQLSchemaConfig`  }  }

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:10

___

### GraphTypeArgs

Ƭ **GraphTypeArgs**<`Def`\>: [`string`, `Def` \| (`utils`: `PowershipModules`) => `Def`] \| [`Def` \| (`utils`: `PowershipModules`) => `Def`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) = [`ObjectFieldInput`](Powership.md#objectfieldinput) |

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

### HTTPHandlerParsed

Ƭ **HTTPHandlerParsed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | `any` |
| `headers` | [`HeaderRecord`](Powership.md#headerrecord) |
| `headersNamed` | [`HeaderNamed`](Powership.md#headernamed)[] |
| `method` | `string` |
| `payload` | `Record`<`string`, `unknown`\> |
| `query` | [`HttpError`](Powership.md#httperror) |
| `statusCode` | `number` |
| `type` | ``"REQUEST"`` \| ``"RESPONSE"`` |

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:71

___

### Hashable

Ƭ **Hashable**: [`NativeComplexType`](Powership.md#nativecomplextype) \| [`NativeSimpleType`](Powership.md#nativesimpletype)

#### Defined in

packages/utils/lib/getTypeName.d.ts:43

___

### HeaderNamed

Ƭ **HeaderNamed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:82

___

### HeaderRecord

Ƭ **HeaderRecord**: `Object`

#### Index signature

▪ [K: `string`]: `string`[]

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:86

___

### HeaderRecordInit

Ƭ **HeaderRecordInit**: `Object`

#### Index signature

▪ [K: `string`]: `string` \| `boolean` \| `string`[] \| `undefined`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:89

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

### IfExtends

Ƭ **IfExtends**<`Param`, `Type`, `IfTrue`, `IfFalse`\>: `Param` extends `Type` ? `IfTrue` : `IfFalse`

#### Type parameters

| Name |
| :------ |
| `Param` |
| `Type` |
| `IfTrue` |
| `IfFalse` |

#### Defined in

packages/utils/lib/typings/index.d.ts:39

___

### ImplementObject

Ƭ **ImplementObject**<`Dest`, `Extends`\>: `Extends` extends [] ? `Dest` : `Extends` extends [infer Item, ...(infer Rest)] ? `Dest` extends [`ObjectType`](../classes/Powership.ObjectType.md)<infer DestDef\> ? `Item` extends [`ObjectType`](../classes/Powership.ObjectType.md)<infer ItemDef\> ? [`ImplementObject`](Powership.md#implementobject)<[`ObjectType`](../classes/Powership.ObjectType.md)<{ [K in keyof Merge<ItemDef, DestDef\>]: Merge<ItemDef, DestDef\>[K] }\>, `Rest`\> : `never` : `never` : `never`

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
| `indexFilter` | [`IndexFilterFound`](Powership.md#indexfilterfound) |
| `relationFilters` | [`RelationsFilter`](Powership.md#relationsfilter)[] \| `undefined` |

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

Ƭ **Infer**<`Input`\>: [`OnlyKnown`](Powership.TU.md#onlyknown)<`Input`\> extends infer Known ? `Known` extends `string` ? [`InferString`](Powership.md#inferstring)<`Known`\> : `Known` extends `object` ? [`$inferableKey`](Powership.md#$inferablekey-1) extends keyof `Known` ? `Known`[[`$inferableKey`](Powership.md#$inferablekey-1)] : [`_WithInferOptional`](Powership.md#_withinferoptional)<`Known`, [`_WithInferList`](Powership.md#_withinferlist)<`Known`, [`_InferField`](Powership.md#_inferfield)<`Known`\>\>\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:8

___

### InferFinalField

Ƭ **InferFinalField**<`TypeName`, `Def`\>: [`_InferFinalField`](Powership.md#_inferfinalfield)<`TypeName`, `Def`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TypeName` | extends [`FieldTypeName`](Powership.md#fieldtypename) |
| `Def` | `never` |

#### Defined in

packages/schema/lib/fields/Infer/InferFinalField.d.ts:6

___

### InferGraphType

Ƭ **InferGraphType**<`Input`\>: `Input` extends `unknown` ? `Input` extends [`GraphTypeLikeFieldDefinition`](../interfaces/Powership.GraphTypeLikeFieldDefinition.md) ? [`Infer`](Powership.md#infer)<`Input`[``"definition"``]\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/InferGraphType.d.ts:9

___

### InferObjectDefinition

Ƭ **InferObjectDefinition**<`Input`\>: [`Input`] extends [`object`] ? [`NullableToPartial`](Powership.TU.md#nullabletopartial)<[`_InferObjectDefinition`](Powership.md#_inferobjectdefinition)<{ -readonly [K in keyof Input as K extends \`$${string}\` ? never : K]: Input[K] }\> & [`ParseSpecialObjectKeys`](Powership.md#parsespecialobjectkeys)<`Input`\>\> : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:11

___

### InferObjectType

Ƭ **InferObjectType**<`T`\>: `T` extends `unknown` ? `T` extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Powership.ObjectTypeLikeFieldDefinition.md) ? [`InferObjectDefinition`](Powership.md#inferobjectdefinition)<`T`[``"definition"``]\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/schema/lib/fields/Infer/InferObjectType.d.ts:10

___

### InferRecordFieldType

Ƭ **InferRecordFieldType**<`Def`\>: `Def` extends { `keyType`: ``"int"`` \| ``"float"``  } ? { `[K: number]`: [`Infer`](Powership.md#infer)<`Def` extends { `type`: [`FieldDefinitionConfig`](Powership.md#fielddefinitionconfig)  } ? `Def`[``"type"``] : ``"any"``\>;  } : { `[K: string]`: [`Infer`](Powership.md#infer)<`Def` extends { `type`: [`FieldDefinitionConfig`](Powership.md#fielddefinitionconfig)  } ? `Def`[``"type"``] : ``"any"``\>;  }

#### Type parameters

| Name |
| :------ |
| `Def` |

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:10

___

### InferResolverArgs

Ƭ **InferResolverArgs**<`ArgsDef`\>: [`ArgsDef`] extends [`never`] ? `Record`<`string`, `unknown`\> : [`ArgsDef`] extends [`undefined`] ? `Record`<`string`, `unknown`\> : [`ArgsDef`] extends [{ `[K: string]`: `unknown`;  }] ? [`Infer`](Powership.md#infer)<{ `object`: `ArgsDef`  }\> : `Record`<`string`, `unknown`\>

#### Type parameters

| Name |
| :------ |
| `ArgsDef` |

#### Defined in

packages/schema/lib/Resolver.d.ts:8

___

### InferString

Ƭ **InferString**<`Input`\>: `Input` extends \`${infer Start}?\` ? [`InferString`](Powership.md#inferstring)<`Start`\> \| `undefined` : `Input` extends \`[${infer Start}]\` ? [`InferString`](Powership.md#inferstring)<`Start`\>[] : `Input` extends [`FieldTypeName`](Powership.md#fieldtypename) ? [`InferTypeName`](Powership.md#infertypename)<`Input`\> : `Input` extends \`[${infer Type}]\` ? [`InferString`](Powership.md#inferstring)<`Type`\>[] : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `string` |

#### Defined in

packages/schema/lib/fields/Infer/InferString.d.ts:2

___

### InferTypeName

Ƭ **InferTypeName**<`Type`\>: `Type` extends `unknown` ? `Type` extends [`FieldTypeName`](Powership.md#fieldtypename) ? `Type` extends ``"any"`` ? `any` : `Type` extends ``"boolean"`` ? `boolean` : `Type` extends ``"cursor"`` ? [`CursorType`](Powership.md#cursortype) : `Type` extends ``"phone"`` ? `string` : `Type` extends ``"null"`` ? ``null`` : `Type` extends ``"undefined"`` ? `undefined` : `Type` extends ``"unknown"`` ? `unknown` : `Type` extends ``"string"`` ? `string` : `Type` extends ``"date"`` ? `Date` : `Type` extends ``"email"`` ? `string` : `Type` extends ``"float"`` ? `number` : `Type` extends ``"record"`` ? { `[K: string]`: `any`;  } : `Type` extends ``"int"`` ? `number` : `Type` extends ``"ulid"`` ? `string` : `Type` extends ``"ID"`` ? `string` : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/fields/Infer/InferString.d.ts:3

___

### InnerDef

Ƭ **InnerDef**<`Input`\>: [`Input`] extends [`object`] ? [`DescribeField`](Powership.md#describefield)<`Input`\> extends infer R ? [`IsKnown`](Powership.TU.md#isknown)<`R`\> extends ``1`` ? [`_InnerDef`](Powership.md#_innerdef)<`R`\> : [`DescribeObjectDefinition`](Powership.md#describeobjectdefinition)<`Input`\> : `never` : `never` extends infer R ? { [K in keyof R]: R[K] } & {} : {}

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

### InternalEvent

Ƭ **InternalEvent**: ``"PRUNING"`` \| ``"INITIAL"`` \| ``"CLEAR"``

#### Defined in

packages/utils/lib/Store.d.ts:5

___

### InvalidParsedIndexField

Ƭ **InvalidParsedIndexField**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `details` | `string` |
| `documentField` | `string` |
| `indexField` | [`AnyDocIndexItem`](Powership.md#anydocindexitem)[``"name"``] |
| `indexPartKind` | [`IndexPartKind`](Powership.md#indexpartkind) |
| `reason` | ``"missing"`` \| ``"invalid"`` |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:45

___

### IsAny

Ƭ **IsAny**<`T`\>: ``0`` extends ``1`` & `T` ? ``true`` : ``false``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:23

___

### IsKnown

Ƭ **IsKnown**<`T`\>: [`IsAny`](Powership.TU.md#isany)<`T`\> extends ``true`` ? ``0`` : [`IsNever`](Powership.TU.md#isnever)<`T`\> extends ``true`` ? ``0`` : [`IsUnknown`](Powership.TU.md#isunknown)<`T`\> extends ``true`` ? ``0`` : ``1``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:86

___

### IsNever

Ƭ **IsNever**<`T`\>: [`T`] extends [`never`] ? ``true`` : ``false``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:24

___

### IsNullable

Ƭ **IsNullable**<`T`\>: `Extract`<`T`, ``null`` \| `undefined`\> extends `never` ? ``false`` : ``true``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:25

___

### IsOptional

Ƭ **IsOptional**<`T`\>: `Extract`<`T`, `undefined`\> extends `never` ? ``false`` : ``true``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:26

___

### IsUnknown

Ƭ **IsUnknown**<`T`\>: [`IsNever`](Powership.TU.md#isnever)<`T`\> extends ``false`` ? `T` extends `unknown` ? `unknown` extends `T` ? [`IsAny`](Powership.TU.md#isany)<`T`\> extends ``false`` ? ``true`` : ``false`` : ``false`` : ``false`` : ``false``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:27

___

### IterationMap

Ƭ **IterationMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `-1` | [``-1``, ``"-"``, ``"-2"``, ``"0"``, ``"1"``] |
| `-10` | [``-10``, ``"-"``, ``"-11"``, ``"-9"``, ``"10"``] |
| `-100` | [``-100``, ``"-"``, ``"__"``, ``"-99"``, ``"100"``] |
| `-11` | [``-11``, ``"-"``, ``"-12"``, ``"-10"``, ``"11"``] |
| `-12` | [``-12``, ``"-"``, ``"-13"``, ``"-11"``, ``"12"``] |
| `-13` | [``-13``, ``"-"``, ``"-14"``, ``"-12"``, ``"13"``] |
| `-14` | [``-14``, ``"-"``, ``"-15"``, ``"-13"``, ``"14"``] |
| `-15` | [``-15``, ``"-"``, ``"-16"``, ``"-14"``, ``"15"``] |
| `-16` | [``-16``, ``"-"``, ``"-17"``, ``"-15"``, ``"16"``] |
| `-17` | [``-17``, ``"-"``, ``"-18"``, ``"-16"``, ``"17"``] |
| `-18` | [``-18``, ``"-"``, ``"-19"``, ``"-17"``, ``"18"``] |
| `-19` | [``-19``, ``"-"``, ``"-20"``, ``"-18"``, ``"19"``] |
| `-2` | [``-2``, ``"-"``, ``"-3"``, ``"-1"``, ``"2"``] |
| `-20` | [``-20``, ``"-"``, ``"-21"``, ``"-19"``, ``"20"``] |
| `-21` | [``-21``, ``"-"``, ``"-22"``, ``"-20"``, ``"21"``] |
| `-22` | [``-22``, ``"-"``, ``"-23"``, ``"-21"``, ``"22"``] |
| `-23` | [``-23``, ``"-"``, ``"-24"``, ``"-22"``, ``"23"``] |
| `-24` | [``-24``, ``"-"``, ``"-25"``, ``"-23"``, ``"24"``] |
| `-25` | [``-25``, ``"-"``, ``"-26"``, ``"-24"``, ``"25"``] |
| `-26` | [``-26``, ``"-"``, ``"-27"``, ``"-25"``, ``"26"``] |
| `-27` | [``-27``, ``"-"``, ``"-28"``, ``"-26"``, ``"27"``] |
| `-28` | [``-28``, ``"-"``, ``"-29"``, ``"-27"``, ``"28"``] |
| `-29` | [``-29``, ``"-"``, ``"-30"``, ``"-28"``, ``"29"``] |
| `-3` | [``-3``, ``"-"``, ``"-4"``, ``"-2"``, ``"3"``] |
| `-30` | [``-30``, ``"-"``, ``"-31"``, ``"-29"``, ``"30"``] |
| `-31` | [``-31``, ``"-"``, ``"-32"``, ``"-30"``, ``"31"``] |
| `-32` | [``-32``, ``"-"``, ``"-33"``, ``"-31"``, ``"32"``] |
| `-33` | [``-33``, ``"-"``, ``"-34"``, ``"-32"``, ``"33"``] |
| `-34` | [``-34``, ``"-"``, ``"-35"``, ``"-33"``, ``"34"``] |
| `-35` | [``-35``, ``"-"``, ``"-36"``, ``"-34"``, ``"35"``] |
| `-36` | [``-36``, ``"-"``, ``"-37"``, ``"-35"``, ``"36"``] |
| `-37` | [``-37``, ``"-"``, ``"-38"``, ``"-36"``, ``"37"``] |
| `-38` | [``-38``, ``"-"``, ``"-39"``, ``"-37"``, ``"38"``] |
| `-39` | [``-39``, ``"-"``, ``"-40"``, ``"-38"``, ``"39"``] |
| `-4` | [``-4``, ``"-"``, ``"-5"``, ``"-3"``, ``"4"``] |
| `-40` | [``-40``, ``"-"``, ``"-41"``, ``"-39"``, ``"40"``] |
| `-41` | [``-41``, ``"-"``, ``"-42"``, ``"-40"``, ``"41"``] |
| `-42` | [``-42``, ``"-"``, ``"-43"``, ``"-41"``, ``"42"``] |
| `-43` | [``-43``, ``"-"``, ``"-44"``, ``"-42"``, ``"43"``] |
| `-44` | [``-44``, ``"-"``, ``"-45"``, ``"-43"``, ``"44"``] |
| `-45` | [``-45``, ``"-"``, ``"-46"``, ``"-44"``, ``"45"``] |
| `-46` | [``-46``, ``"-"``, ``"-47"``, ``"-45"``, ``"46"``] |
| `-47` | [``-47``, ``"-"``, ``"-48"``, ``"-46"``, ``"47"``] |
| `-48` | [``-48``, ``"-"``, ``"-49"``, ``"-47"``, ``"48"``] |
| `-49` | [``-49``, ``"-"``, ``"-50"``, ``"-48"``, ``"49"``] |
| `-5` | [``-5``, ``"-"``, ``"-6"``, ``"-4"``, ``"5"``] |
| `-50` | [``-50``, ``"-"``, ``"-51"``, ``"-49"``, ``"50"``] |
| `-51` | [``-51``, ``"-"``, ``"-52"``, ``"-50"``, ``"51"``] |
| `-52` | [``-52``, ``"-"``, ``"-53"``, ``"-51"``, ``"52"``] |
| `-53` | [``-53``, ``"-"``, ``"-54"``, ``"-52"``, ``"53"``] |
| `-54` | [``-54``, ``"-"``, ``"-55"``, ``"-53"``, ``"54"``] |
| `-55` | [``-55``, ``"-"``, ``"-56"``, ``"-54"``, ``"55"``] |
| `-56` | [``-56``, ``"-"``, ``"-57"``, ``"-55"``, ``"56"``] |
| `-57` | [``-57``, ``"-"``, ``"-58"``, ``"-56"``, ``"57"``] |
| `-58` | [``-58``, ``"-"``, ``"-59"``, ``"-57"``, ``"58"``] |
| `-59` | [``-59``, ``"-"``, ``"-60"``, ``"-58"``, ``"59"``] |
| `-6` | [``-6``, ``"-"``, ``"-7"``, ``"-5"``, ``"6"``] |
| `-60` | [``-60``, ``"-"``, ``"-61"``, ``"-59"``, ``"60"``] |
| `-61` | [``-61``, ``"-"``, ``"-62"``, ``"-60"``, ``"61"``] |
| `-62` | [``-62``, ``"-"``, ``"-63"``, ``"-61"``, ``"62"``] |
| `-63` | [``-63``, ``"-"``, ``"-64"``, ``"-62"``, ``"63"``] |
| `-64` | [``-64``, ``"-"``, ``"-65"``, ``"-63"``, ``"64"``] |
| `-65` | [``-65``, ``"-"``, ``"-66"``, ``"-64"``, ``"65"``] |
| `-66` | [``-66``, ``"-"``, ``"-67"``, ``"-65"``, ``"66"``] |
| `-67` | [``-67``, ``"-"``, ``"-68"``, ``"-66"``, ``"67"``] |
| `-68` | [``-68``, ``"-"``, ``"-69"``, ``"-67"``, ``"68"``] |
| `-69` | [``-69``, ``"-"``, ``"-70"``, ``"-68"``, ``"69"``] |
| `-7` | [``-7``, ``"-"``, ``"-8"``, ``"-6"``, ``"7"``] |
| `-70` | [``-70``, ``"-"``, ``"-71"``, ``"-69"``, ``"70"``] |
| `-71` | [``-71``, ``"-"``, ``"-72"``, ``"-70"``, ``"71"``] |
| `-72` | [``-72``, ``"-"``, ``"-73"``, ``"-71"``, ``"72"``] |
| `-73` | [``-73``, ``"-"``, ``"-74"``, ``"-72"``, ``"73"``] |
| `-74` | [``-74``, ``"-"``, ``"-75"``, ``"-73"``, ``"74"``] |
| `-75` | [``-75``, ``"-"``, ``"-76"``, ``"-74"``, ``"75"``] |
| `-76` | [``-76``, ``"-"``, ``"-77"``, ``"-75"``, ``"76"``] |
| `-77` | [``-77``, ``"-"``, ``"-78"``, ``"-76"``, ``"77"``] |
| `-78` | [``-78``, ``"-"``, ``"-79"``, ``"-77"``, ``"78"``] |
| `-79` | [``-79``, ``"-"``, ``"-80"``, ``"-78"``, ``"79"``] |
| `-8` | [``-8``, ``"-"``, ``"-9"``, ``"-7"``, ``"8"``] |
| `-80` | [``-80``, ``"-"``, ``"-81"``, ``"-79"``, ``"80"``] |
| `-81` | [``-81``, ``"-"``, ``"-82"``, ``"-80"``, ``"81"``] |
| `-82` | [``-82``, ``"-"``, ``"-83"``, ``"-81"``, ``"82"``] |
| `-83` | [``-83``, ``"-"``, ``"-84"``, ``"-82"``, ``"83"``] |
| `-84` | [``-84``, ``"-"``, ``"-85"``, ``"-83"``, ``"84"``] |
| `-85` | [``-85``, ``"-"``, ``"-86"``, ``"-84"``, ``"85"``] |
| `-86` | [``-86``, ``"-"``, ``"-87"``, ``"-85"``, ``"86"``] |
| `-87` | [``-87``, ``"-"``, ``"-88"``, ``"-86"``, ``"87"``] |
| `-88` | [``-88``, ``"-"``, ``"-89"``, ``"-87"``, ``"88"``] |
| `-89` | [``-89``, ``"-"``, ``"-90"``, ``"-88"``, ``"89"``] |
| `-9` | [``-9``, ``"-"``, ``"-10"``, ``"-8"``, ``"9"``] |
| `-90` | [``-90``, ``"-"``, ``"-91"``, ``"-89"``, ``"90"``] |
| `-91` | [``-91``, ``"-"``, ``"-92"``, ``"-90"``, ``"91"``] |
| `-92` | [``-92``, ``"-"``, ``"-93"``, ``"-91"``, ``"92"``] |
| `-93` | [``-93``, ``"-"``, ``"-94"``, ``"-92"``, ``"93"``] |
| `-94` | [``-94``, ``"-"``, ``"-95"``, ``"-93"``, ``"94"``] |
| `-95` | [``-95``, ``"-"``, ``"-96"``, ``"-94"``, ``"95"``] |
| `-96` | [``-96``, ``"-"``, ``"-97"``, ``"-95"``, ``"96"``] |
| `-97` | [``-97``, ``"-"``, ``"-98"``, ``"-96"``, ``"97"``] |
| `-98` | [``-98``, ``"-"``, ``"-99"``, ``"-97"``, ``"98"``] |
| `-99` | [``-99``, ``"-"``, ``"-100"``, ``"-98"``, ``"99"``] |
| `0` | [``0``, ``"0"``, ``"-1"``, ``"1"``, ``"0"``] |
| `1` | [``1``, ``"+"``, ``"0"``, ``"2"``, ``"-1"``] |
| `10` | [``10``, ``"+"``, ``"9"``, ``"11"``, ``"-10"``] |
| `100` | [``100``, ``"+"``, ``"99"``, ``"__"``, ``"-100"``] |
| `11` | [``11``, ``"+"``, ``"10"``, ``"12"``, ``"-11"``] |
| `12` | [``12``, ``"+"``, ``"11"``, ``"13"``, ``"-12"``] |
| `13` | [``13``, ``"+"``, ``"12"``, ``"14"``, ``"-13"``] |
| `14` | [``14``, ``"+"``, ``"13"``, ``"15"``, ``"-14"``] |
| `15` | [``15``, ``"+"``, ``"14"``, ``"16"``, ``"-15"``] |
| `16` | [``16``, ``"+"``, ``"15"``, ``"17"``, ``"-16"``] |
| `17` | [``17``, ``"+"``, ``"16"``, ``"18"``, ``"-17"``] |
| `18` | [``18``, ``"+"``, ``"17"``, ``"19"``, ``"-18"``] |
| `19` | [``19``, ``"+"``, ``"18"``, ``"20"``, ``"-19"``] |
| `2` | [``2``, ``"+"``, ``"1"``, ``"3"``, ``"-2"``] |
| `20` | [``20``, ``"+"``, ``"19"``, ``"21"``, ``"-20"``] |
| `21` | [``21``, ``"+"``, ``"20"``, ``"22"``, ``"-21"``] |
| `22` | [``22``, ``"+"``, ``"21"``, ``"23"``, ``"-22"``] |
| `23` | [``23``, ``"+"``, ``"22"``, ``"24"``, ``"-23"``] |
| `24` | [``24``, ``"+"``, ``"23"``, ``"25"``, ``"-24"``] |
| `25` | [``25``, ``"+"``, ``"24"``, ``"26"``, ``"-25"``] |
| `26` | [``26``, ``"+"``, ``"25"``, ``"27"``, ``"-26"``] |
| `27` | [``27``, ``"+"``, ``"26"``, ``"28"``, ``"-27"``] |
| `28` | [``28``, ``"+"``, ``"27"``, ``"29"``, ``"-28"``] |
| `29` | [``29``, ``"+"``, ``"28"``, ``"30"``, ``"-29"``] |
| `3` | [``3``, ``"+"``, ``"2"``, ``"4"``, ``"-3"``] |
| `30` | [``30``, ``"+"``, ``"29"``, ``"31"``, ``"-30"``] |
| `31` | [``31``, ``"+"``, ``"30"``, ``"32"``, ``"-31"``] |
| `32` | [``32``, ``"+"``, ``"31"``, ``"33"``, ``"-32"``] |
| `33` | [``33``, ``"+"``, ``"32"``, ``"34"``, ``"-33"``] |
| `34` | [``34``, ``"+"``, ``"33"``, ``"35"``, ``"-34"``] |
| `35` | [``35``, ``"+"``, ``"34"``, ``"36"``, ``"-35"``] |
| `36` | [``36``, ``"+"``, ``"35"``, ``"37"``, ``"-36"``] |
| `37` | [``37``, ``"+"``, ``"36"``, ``"38"``, ``"-37"``] |
| `38` | [``38``, ``"+"``, ``"37"``, ``"39"``, ``"-38"``] |
| `39` | [``39``, ``"+"``, ``"38"``, ``"40"``, ``"-39"``] |
| `4` | [``4``, ``"+"``, ``"3"``, ``"5"``, ``"-4"``] |
| `40` | [``40``, ``"+"``, ``"39"``, ``"41"``, ``"-40"``] |
| `41` | [``41``, ``"+"``, ``"40"``, ``"42"``, ``"-41"``] |
| `42` | [``42``, ``"+"``, ``"41"``, ``"43"``, ``"-42"``] |
| `43` | [``43``, ``"+"``, ``"42"``, ``"44"``, ``"-43"``] |
| `44` | [``44``, ``"+"``, ``"43"``, ``"45"``, ``"-44"``] |
| `45` | [``45``, ``"+"``, ``"44"``, ``"46"``, ``"-45"``] |
| `46` | [``46``, ``"+"``, ``"45"``, ``"47"``, ``"-46"``] |
| `47` | [``47``, ``"+"``, ``"46"``, ``"48"``, ``"-47"``] |
| `48` | [``48``, ``"+"``, ``"47"``, ``"49"``, ``"-48"``] |
| `49` | [``49``, ``"+"``, ``"48"``, ``"50"``, ``"-49"``] |
| `5` | [``5``, ``"+"``, ``"4"``, ``"6"``, ``"-5"``] |
| `50` | [``50``, ``"+"``, ``"49"``, ``"51"``, ``"-50"``] |
| `51` | [``51``, ``"+"``, ``"50"``, ``"52"``, ``"-51"``] |
| `52` | [``52``, ``"+"``, ``"51"``, ``"53"``, ``"-52"``] |
| `53` | [``53``, ``"+"``, ``"52"``, ``"54"``, ``"-53"``] |
| `54` | [``54``, ``"+"``, ``"53"``, ``"55"``, ``"-54"``] |
| `55` | [``55``, ``"+"``, ``"54"``, ``"56"``, ``"-55"``] |
| `56` | [``56``, ``"+"``, ``"55"``, ``"57"``, ``"-56"``] |
| `57` | [``57``, ``"+"``, ``"56"``, ``"58"``, ``"-57"``] |
| `58` | [``58``, ``"+"``, ``"57"``, ``"59"``, ``"-58"``] |
| `59` | [``59``, ``"+"``, ``"58"``, ``"60"``, ``"-59"``] |
| `6` | [``6``, ``"+"``, ``"5"``, ``"7"``, ``"-6"``] |
| `60` | [``60``, ``"+"``, ``"59"``, ``"61"``, ``"-60"``] |
| `61` | [``61``, ``"+"``, ``"60"``, ``"62"``, ``"-61"``] |
| `62` | [``62``, ``"+"``, ``"61"``, ``"63"``, ``"-62"``] |
| `63` | [``63``, ``"+"``, ``"62"``, ``"64"``, ``"-63"``] |
| `64` | [``64``, ``"+"``, ``"63"``, ``"65"``, ``"-64"``] |
| `65` | [``65``, ``"+"``, ``"64"``, ``"66"``, ``"-65"``] |
| `66` | [``66``, ``"+"``, ``"65"``, ``"67"``, ``"-66"``] |
| `67` | [``67``, ``"+"``, ``"66"``, ``"68"``, ``"-67"``] |
| `68` | [``68``, ``"+"``, ``"67"``, ``"69"``, ``"-68"``] |
| `69` | [``69``, ``"+"``, ``"68"``, ``"70"``, ``"-69"``] |
| `7` | [``7``, ``"+"``, ``"6"``, ``"8"``, ``"-7"``] |
| `70` | [``70``, ``"+"``, ``"69"``, ``"71"``, ``"-70"``] |
| `71` | [``71``, ``"+"``, ``"70"``, ``"72"``, ``"-71"``] |
| `72` | [``72``, ``"+"``, ``"71"``, ``"73"``, ``"-72"``] |
| `73` | [``73``, ``"+"``, ``"72"``, ``"74"``, ``"-73"``] |
| `74` | [``74``, ``"+"``, ``"73"``, ``"75"``, ``"-74"``] |
| `75` | [``75``, ``"+"``, ``"74"``, ``"76"``, ``"-75"``] |
| `76` | [``76``, ``"+"``, ``"75"``, ``"77"``, ``"-76"``] |
| `77` | [``77``, ``"+"``, ``"76"``, ``"78"``, ``"-77"``] |
| `78` | [``78``, ``"+"``, ``"77"``, ``"79"``, ``"-78"``] |
| `79` | [``79``, ``"+"``, ``"78"``, ``"80"``, ``"-79"``] |
| `8` | [``8``, ``"+"``, ``"7"``, ``"9"``, ``"-8"``] |
| `80` | [``80``, ``"+"``, ``"79"``, ``"81"``, ``"-80"``] |
| `81` | [``81``, ``"+"``, ``"80"``, ``"82"``, ``"-81"``] |
| `82` | [``82``, ``"+"``, ``"81"``, ``"83"``, ``"-82"``] |
| `83` | [``83``, ``"+"``, ``"82"``, ``"84"``, ``"-83"``] |
| `84` | [``84``, ``"+"``, ``"83"``, ``"85"``, ``"-84"``] |
| `85` | [``85``, ``"+"``, ``"84"``, ``"86"``, ``"-85"``] |
| `86` | [``86``, ``"+"``, ``"85"``, ``"87"``, ``"-86"``] |
| `87` | [``87``, ``"+"``, ``"86"``, ``"88"``, ``"-87"``] |
| `88` | [``88``, ``"+"``, ``"87"``, ``"89"``, ``"-88"``] |
| `89` | [``89``, ``"+"``, ``"88"``, ``"90"``, ``"-89"``] |
| `9` | [``9``, ``"+"``, ``"8"``, ``"10"``, ``"-9"``] |
| `90` | [``90``, ``"+"``, ``"89"``, ``"91"``, ``"-90"``] |
| `91` | [``91``, ``"+"``, ``"90"``, ``"92"``, ``"-91"``] |
| `92` | [``92``, ``"+"``, ``"91"``, ``"93"``, ``"-92"``] |
| `93` | [``93``, ``"+"``, ``"92"``, ``"94"``, ``"-93"``] |
| `94` | [``94``, ``"+"``, ``"93"``, ``"95"``, ``"-94"``] |
| `95` | [``95``, ``"+"``, ``"94"``, ``"96"``, ``"-95"``] |
| `96` | [``96``, ``"+"``, ``"95"``, ``"97"``, ``"-96"``] |
| `97` | [``97``, ``"+"``, ``"96"``, ``"98"``, ``"-97"``] |
| `98` | [``98``, ``"+"``, ``"97"``, ``"99"``, ``"-98"``] |
| `99` | [``99``, ``"+"``, ``"98"``, ``"100"``, ``"-99"``] |
| `__` | [`number`, ``"-"`` \| ``"0"`` \| ``"+"``, ``"__"``, ``"__"``, ``"__"``] |

#### Defined in

packages/utils/lib/IterationMap.d.ts:1

___

### LazyParseGraphTypePayload

Ƭ **LazyParseGraphTypePayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `definition` | [`FinalFieldDefinition`](Powership.md#finalfielddefinition) |
| `definitionInput` | [`ObjectFieldInput`](Powership.md#objectfieldinput) \| (`utils`: `PowershipModules`) => [`ObjectFieldInput`](Powership.md#objectfieldinput) |
| `field` | [`TAnyFieldType`](Powership.md#tanyfieldtype) |
| `id` | `string` \| `undefined` |
| `idFromArgs` | `string` \| `undefined` |
| `objectType?` | `any` |

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:108

___

### ListDefinition

Ƭ **ListDefinition**: [`ListDefinitionObject`](Powership.md#listdefinitionobject) \| `boolean`

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:25

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

packages/schema/lib/fields/_fieldDefinitions.d.ts:20

___

### ListDefinitionTruthy

Ƭ **ListDefinitionTruthy**: [`ListDefinitionObject`](Powership.md#listdefinitionobject) \| ``true``

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:26

___

### LoaderContext

Ƭ **LoaderContext**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `userId?` | (...`args`: `unknown`[]) => [`MaybePromise`](Powership.TU.md#maybepromise)<`undefined` \| `string`\> |

#### Defined in

packages/transporter/lib/Transporter.d.ts:67

___

### LogLevel

Ƭ **LogLevel**: [`LogLevelName`](Powership.md#loglevelname) \| [`LogLevelName`](Powership.md#loglevelname)[]

#### Defined in

packages/utils/lib/logLevels.d.ts:25

___

### LogLevelName

Ƭ **LogLevelName**: typeof [`LogLevels`](Powership.md#loglevels)[`number`]

#### Defined in

packages/utils/lib/logLevels.d.ts:24

___

### LoggerMethods

Ƭ **LoggerMethods**: { [K in LogLevelName]: Function }

#### Defined in

packages/utils/lib/nodeLogger.d.ts:2

___

### MakeFieldOptional

Ƭ **MakeFieldOptional**<`Object`, `OptionalField`\>: [`OverrideField`](Powership.md#overridefield)<`Object`, `OptionalField`, { `optional`: ``true``  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Object` | extends `object` |
| `OptionalField` | extends `A.Key` |

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:42

___

### MakeFieldRequired

Ƭ **MakeFieldRequired**<`Object`, `OptionalField`\>: [`OverrideField`](Powership.md#overridefield)<`Object`, `OptionalField`, { `optional`: ``false``  }\>

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

Ƭ **MakeTypeOptional**<`Type`\>: [`DescribeAndOverrideField`](Powership.md#describeandoverridefield)<`Type`, { `optional`: ``true``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/extendType.d.ts:21

___

### MakeTypeRequired

Ƭ **MakeTypeRequired**<`Type`\>: [`DescribeAndOverrideField`](Powership.md#describeandoverridefield)<`Type`, { `optional`: ``false``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/extendType.d.ts:24

___

### MakeTypeSingle

Ƭ **MakeTypeSingle**<`Type`\>: [`DescribeAndOverrideField`](Powership.md#describeandoverridefield)<`Type`, { `list`: ``false``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

packages/schema/lib/extendType.d.ts:32

___

### MaybeArray

Ƭ **MaybeArray**<`T`\>: `T` \| `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:31

___

### MaybePromise

Ƭ **MaybePromise**<`T`\>: `T` \| `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:29

___

### Merge

Ƭ **Merge**<`O`, `O1`, `depth`, `ignore`, `fill`\>: `O` extends `object` ? `O1` extends `object` ? `O.Merge`<`Omit`<`O`, keyof `O1`\>, `O1`, `depth`, `ignore`, `fill`\> : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | `O` |
| `O1` | `O1` |
| `depth` | extends `Depth` = ``"flat"`` |
| `ignore` | extends `object` = `BuiltIn` |
| `fill` | extends `any` = `undefined` |

#### Defined in

packages/utils/lib/typings/ts-toolbet.d.ts:18

___

### MergeAll

Ƭ **MergeAll**<`L`\>: `L` extends [infer Head, ...(infer Tail)] ? `Tail` extends `object`[] ? [`Merge`](Powership.TU.T.md#merge)<`Head`, [`MergeAll`](Powership.md#mergeall)<`Tail`\>\> : {} : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `object`[] |

#### Defined in

packages/utils/lib/merge.d.ts:3

___

### MergeGetters

Ƭ **MergeGetters**<`O`, `Extensions`\>: { [K in keyof O as K extends keyof Extensions ? never : K]: O[K] } & { [K in keyof Extensions]: Extensions[K] } extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name |
| :------ |
| `O` |
| `Extensions` |

#### Defined in

packages/utils/lib/getters/defineGetters.d.ts:13

___

### MetaFieldDef

Ƭ **MetaFieldDef**: `Object`

#### Index signature

▪ [K: `string`]: [`Serializable`](Powership.TU.md#serializable)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `custom?` | [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) |
| `description?` | `string` |
| `id` | `string` \| ``null`` |
| `implements?` | `string`[] |

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:4

___

### MethodFilter

Ƭ **MethodFilter**<`PK`, `SK`\>: [`Compute`](Powership.TU.md#compute)<[`UnionToIntersection`](Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](Powership.md#indexfilterrecord)<`PK`, `SK`\> extends infer F ? `F` extends `unknown` ? { [K in keyof F]?: F[K] } & { `id?`: [`PKSKValueType`](Powership.md#pkskvaluetype)  } : {} : {}\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PK` | extends `string` |
| `SK` | extends `string` \| `undefined` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:71

___

### ModulesProxyRecord

Ƭ **ModulesProxyRecord**: `Object`

#### Index signature

▪ [K: `string`]: [`ProxyModuleConfig`](Powership.md#proxymoduleconfig)<`any`, `any`\>

#### Defined in

packages/utils/lib/createModulesProxy.d.ts:7

___

### ModulesProxyResult

Ƭ **ModulesProxyResult**<`ModulesMap`\>: `Exports`<`ModulesMap`\> & { `transform`: <T\>(`callback`: (`current`: [`ModulesProxyResult`](Powership.md#modulesproxyresult)<`ModulesMap`\>) => `T`) => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModulesMap` | extends [`ModulesProxyRecord`](Powership.md#modulesproxyrecord) |

#### Defined in

packages/utils/lib/createModulesProxy.d.ts:15

___

### NATIVE\_TYPE\_NAME

Ƭ **NATIVE\_TYPE\_NAME**: typeof `KNOWN_CONSTRUCTOR_NAMES.enum`

#### Defined in

packages/utils/lib/getTypeName.d.ts:20

___

### NATIVE\_TYPE\_OF

Ƭ **NATIVE\_TYPE\_OF**: `Lowercase`<[`NATIVE_TYPE_NAME`](Powership.md#native_type_name)\>

#### Defined in

packages/utils/lib/getTypeName.d.ts:22

___

### Naked

Ƭ **Naked**<`L`\>: `Overwrite`<`Required`<`L`\>, `L`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `List` |

#### Defined in

packages/utils/lib/typings/ts-toolbet.d.ts:20

___

### Name

Ƭ **Name**: \`${A\_Z}${string}\`

#### Defined in

packages/utils/lib/typings/index.d.ts:97

___

### NativeComplexType

Ƭ **NativeComplexType**: `Record`<`string`, `unknown`\> \| `Function`

#### Defined in

packages/utils/lib/getTypeName.d.ts:41

___

### NativeSimpleType

Ƭ **NativeSimpleType**: `string` \| `number` \| ``null`` \| `undefined` \| `bigint` \| `symbol` \| `boolean`

#### Defined in

packages/utils/lib/getTypeName.d.ts:42

___

### NextIndex

Ƭ **NextIndex**<`Current`\>: `Current` extends `number` ? `I.Pos`<`Next`<`I.IterationOf`<`Current`\>\>\> : `never`

#### Type parameters

| Name |
| :------ |
| `Current` |

#### Defined in

packages/utils/lib/typings/Compute.d.ts:8

___

### NotString

Ƭ **NotString**<`T`\>: `string` extends `T` ? `never` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:51

___

### Nullable

Ƭ **Nullable**<`T`, `Nullish`\>: { [K in keyof T]-?: T[K] \| Nullish } & {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `Nullish` | extends ``null`` \| `undefined` = `undefined` |

#### Defined in

packages/utils/lib/Store.d.ts:18

___

### NullableToPartial

Ƭ **NullableToPartial**<`T`\>: [`UnionToIntersection`](Powership.TU.md#uniontointersection)<{ [K in keyof T as IsOptional<T[K]\> extends true ? never : K]-?: T[K] } \| { [K in keyof T as IsOptional<T[K]\> extends true ? K : never]?: T[K] }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:52

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

### ObjectDefinitionInput

Ƭ **ObjectDefinitionInput**: { `[K: string]`: [`ObjectFieldInput`](Powership.md#objectfieldinput);  } & { `$?`: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md)  }

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:9

___

### ObjectEntries

Ƭ **ObjectEntries**<`T`\>: { [K in Extract<keyof T, string\>]: [K, T[K]] }[`Extract`<keyof `T`, `string`\>][]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/objectEntries.d.ts:1

___

### ObjectFieldInput

Ƭ **ObjectFieldInput**: [`_ObjectFieldInputBase`](Powership.md#_objectfieldinputbase) \| [`FlattenFieldDefinition`](Powership.md#flattenfielddefinition)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:6

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

### ObjectPath

Ƭ **ObjectPath**<`Obj`, `Limit`, `Level`\>: `Level`[``"length"``] extends `Limit` ? `never` : `Obj` extends { `[K: string]`: `any`;  } ? { [K in keyof Obj]: K extends string \| number ? Obj[K] extends Object ? Obj[K] extends ReadonlyArray<any\> ? K \| \`${K}.${number}\` \| \`${K}.${number}.${ObjectPath<Obj[K][number]\>}\` : K \| \`${K}.${ObjectPath<Obj[K], Limit, [...Level, 1]\>}\` : K : never }[keyof `Obj`] : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Obj` | `Obj` |
| `Limit` | extends `number` = ``10`` |
| `Level` | extends `number`[] = [] |

#### Defined in

packages/utils/lib/typings/index.d.ts:71

___

### ObjectTypeFromInput

Ƭ **ObjectTypeFromInput**<`DefinitionInput`\>: [`IsKnown`](Powership.TU.md#isknown)<`DefinitionInput`\> extends ``1`` ? [`DefinitionInput`] extends [[`ObjectDefinitionInput`](Powership.md#objectdefinitioninput)] ? [`ObjectType`](../classes/Powership.ObjectType.md)<`DefinitionInput`\> : `never` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](Powership.md#objectdefinitioninput)\> |

#### Defined in

packages/schema/lib/ObjectType.d.ts:115

___

### ObjectTypeKID

Ƭ **ObjectTypeKID**: ``"__isPowershipObject"``

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:17

___

### ObjectUnion

Ƭ **ObjectUnion**<`A`, `B`\>: { [K in keyof (A & B)]: (A & B)[K] }

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Defined in

packages/utils/lib/typings/index.d.ts:40

___

### OneFilterOperation

Ƭ **OneFilterOperation**: { [K in keyof AllFilterOperations]: { [L in K]: AllFilterOperations[K] } }[keyof [`AllFilterOperations`](Powership.md#allfilteroperations)]

#### Defined in

packages/transporter/lib/Transporter.d.ts:24

___

### OnlyKnown

Ƭ **OnlyKnown**<`T`\>: [`IsAny`](Powership.TU.md#isany)<`T`\> extends ``true`` ? `never` : [`IsNever`](Powership.TU.md#isnever)<`T`\> extends ``true`` ? `never` : [`IsUnknown`](Powership.TU.md#isunknown)<`T`\> extends ``true`` ? `never` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:28

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

### Override

Ƭ **Override**<`T`, `O`\>: `O` extends `Record`<`string`, `unknown`\> ? `Omit`<`T`, keyof `O`\> & `O` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |
| `O` |

#### Defined in

packages/utils/lib/override.d.ts:1

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

Ƭ **PageInfo**: [`Infer`](Powership.md#infer)<typeof [`PageInfoType`](Powership.md#pageinfotype)\>

#### Defined in

packages/entity/lib/paginationUtils.d.ts:10

___

### PaginationResult

Ƭ **PaginationResult**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |

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

Ƭ **PaginationType**<`T`\>: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: { `edges`: { `list`: ``true`` ; `type`: [`EdgeType`](Powership.md#edgetype)<`T`\>  } ; `pageInfo`: typeof [`PageInfoType`](Powership.md#pageinfotype)  }  }\>

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

packages/schema/lib/parseObjectDefinition.d.ts:12

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

Ƭ **ParsedDocumentIndexes**: { `error`: ``null`` ; `filtersFound?`: [`DocumentIndexFilterParsed`](Powership.md#documentindexfilterparsed)[] ; `firstIndex`: [`FirstIndexParsed`](../interfaces/Powership.FirstIndexParsed.md) ; `indexFields`: [`CommonIndexFields`](Powership.md#commonindexfields) ; `invalidFields`: ``null`` ; `parsedIndexKeys`: [`ParsedIndexKey`](Powership.md#parsedindexkey)[] ; `valid`: ``true``  } \| { `error`: [`CollectionErrors`](../classes/Powership.CollectionErrors.md) ; `firstIndex`: [`FirstIndexParsed`](../interfaces/Powership.FirstIndexParsed.md) \| ``null`` ; `indexFields`: ``null`` ; `invalidFields`: [`ParsedIndexPart`](Powership.md#parsedindexpart)[``"invalidFields"``] ; `parsedIndexKeys`: [`ParsedIndexKey`](Powership.md#parsedindexkey)[] ; `uniqIndexCondition?`: `undefined` ; `valid`: ``false``  }

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:101

___

### ParsedIndexFilterPart

Ƭ **ParsedIndexFilterPart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PKPartOpen` | `string` |
| `PKPartParsed` | [`ParsedIndexPart`](Powership.md#parsedindexpart) |
| `SKPartParsed` | [`ParsedIndexPart`](Powership.md#parsedindexpart) \| ``null`` |
| `entity` | `string` |
| `index` | [`DocumentIndexItem`](Powership.md#documentindexitem) |
| `indexFilter` | [`IndexFilterRecord`](Powership.md#indexfilterrecord) |

#### Defined in

packages/transporter/lib/parseFilterIndexFilterParts.d.ts:4

___

### ParsedIndexKey

Ƭ **ParsedIndexKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK` | { `definition`: `Readonly`<[`AnyDocIndexItem`](Powership.md#anydocindexitem)[``"PK"``]\> ; `destinationField`: { `key`: `string` ; `value`: `string`  } ; `parsed`: [`ParsedIndexPart`](Powership.md#parsedindexpart) ; `requiredFields`: `string`[]  } |
| `PK.definition` | `Readonly`<[`AnyDocIndexItem`](Powership.md#anydocindexitem)[``"PK"``]\> |
| `PK.destinationField` | { `key`: `string` ; `value`: `string`  } |
| `PK.destinationField.key` | `string` |
| `PK.destinationField.value` | `string` |
| `PK.parsed` | [`ParsedIndexPart`](Powership.md#parsedindexpart) |
| `PK.requiredFields` | `string`[] |
| `SK` | { `definition`: `Readonly`<[`AnyDocIndexItem`](Powership.md#anydocindexitem)[``"SK"``]\> ; `destinationField`: { `key`: `string` ; `value`: `string`  } ; `parsed`: [`ParsedIndexPart`](Powership.md#parsedindexpart) ; `requiredFields`: `string`[]  } |
| `SK.definition` | `Readonly`<[`AnyDocIndexItem`](Powership.md#anydocindexitem)[``"SK"``]\> |
| `SK.destinationField` | { `key`: `string` ; `value`: `string`  } |
| `SK.destinationField.key` | `string` |
| `SK.destinationField.value` | `string` |
| `SK.parsed` | [`ParsedIndexPart`](Powership.md#parsedindexpart) |
| `SK.requiredFields` | `string`[] |
| `entity` | `string` |
| `index` | [`AnyDocIndexItem`](Powership.md#anydocindexitem) |
| `indexFieldsParsed` | [`DocumentIndexFieldsParsed`](../interfaces/Powership.DocumentIndexFieldsParsed.md) |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:73

___

### ParsedIndexPart

Ƭ **ParsedIndexPart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PK_SK` | ``"PK"`` \| ``"SK"`` |
| `conditionFound?` | [`OneFilterOperation`](Powership.md#onefilteroperation) |
| `foundEmptyCondition?` | `boolean` |
| `foundParts` | `string`[] |
| `fullIndexFound` | `string` \| ``null`` |
| `indexField` | [`AnyDocIndexItem`](Powership.md#anydocindexitem)[``"name"``] |
| `invalidFields` | [`InvalidParsedIndexField`](Powership.md#invalidparsedindexfield)[] |
| `isFilter` | `boolean` |
| `nullableFound?` | { `value`: ``null`` \| `undefined`  } |
| `nullableFound.value` | ``null`` \| `undefined` |
| `requiredFields` | `string`[] |
| `valid` | `boolean` |

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:52

___

### ParsedUpdateExpression

Ƭ **ParsedUpdateExpression**<`TSchema`\>: [`UpdateExpression`](Powership.md#updateexpression)<`TSchema`\> extends infer UX ? keyof `UX` extends infer OP ? `OP` extends keyof `UX` ? `UX`[`OP`] extends infer V ? { `entries`: [`Join`<`NestedPaths`<`TSchema`\>, ``"."``\>, `V`][] ; `operator`: `OP` ; `valueConstructorName`: `string`  } : `any` : `any` : `any` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | `Record`<`string`, `any`\> |

#### Defined in

packages/transporter/lib/parseUpdateExpression.d.ts:4

___

### PartialRequired

Ƭ **PartialRequired**<`T`, `Optionals`\>: { [P in keyof T as P extends Optionals ? never : P]-?: T[P] } & { [K in Optionals]?: T[K] } & {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Optionals` | extends keyof `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:99

___

### PathParsed

Ƭ **PathParsed**<`Path`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `affected` | `Set`<`string`\> |
| `affectedList` | `ReadonlyArray`<`string`\> |
| `diff` | (`prev`: `any`, `next`: `any`) => [`Difference`](Powership.md#difference)[] |
| `parts` | `ReadonlyArray`<`string`\> |
| `path` | `Path` |
| `pick` | <O\>(`object`: `O`) => [`PathType`](Powership.TU.md#pathtype)<`O`, `Path`\> |

#### Defined in

packages/utils/lib/parsePath.d.ts:3

___

### PathType

Ƭ **PathType**<`Type`, `Property`\>: `Type` extends `unknown` ? [`_PathType`](Powership.TU.md#_pathtype)<`Type`, `Property`\> extends infer R ? [`R`] extends [`never`] ? `unknown` : `R` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `Property` | extends `string` |

#### Defined in

packages/utils/lib/typings/Path.d.ts:1

___

### Paths

Ƭ **Paths**<`T`, `D`\>: [`D`] extends [`never`] ? `never` : `T` extends `object` ? { [K in keyof T]-?: K extends string \| number ? \`${K}\` \| (Paths<T[K], Prev[D]\> extends infer R ? Join<K, R\> : never) : never }[keyof `T`] : `never` \| ``""``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | extends `number` = ``10`` |

#### Defined in

packages/utils/lib/typings/Path.d.ts:6

___

### Pick

Ƭ **Pick**<`Obj`, `DotNotation`\>: [`GetFieldByDotNotation`](Powership.TU.md#getfieldbydotnotation)<`Obj`, `DotNotation`\>

**`Alias`**

to GetFieldByDotNotation

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `DotNotation` |

#### Defined in

packages/utils/lib/typings/index.d.ts:108

___

### PowershipObjectDefinition

Ƭ **PowershipObjectDefinition**: [`ObjectDefinitionInput`](Powership.md#objectdefinitioninput)

#### Defined in

packages/schema/lib/TObjectConfig.d.ts:3

___

### PrevIndex

Ƭ **PrevIndex**<`Current`\>: `Current` extends `number` ? `I.Pos`<`I.Prev`<`I.IterationOf`<`Current`\>\>\> : `never`

#### Type parameters

| Name |
| :------ |
| `Current` |

#### Defined in

packages/utils/lib/typings/Compute.d.ts:9

___

### PromiseType

Ƭ **PromiseType**<`P`\>: `P` extends `Promise`<infer T\> ? `T` : `never`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Defined in

packages/utils/lib/typings/index.d.ts:30

___

### ProxyGetModule

Ƭ **ProxyGetModule**<`T`\>: () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `T`

##### Returns

`T`

#### Defined in

packages/utils/lib/createModulesProxy.d.ts:2

___

### ProxyModuleConfig

Ƭ **ProxyModuleConfig**<`T`, `ServerOnly`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` |
| `ServerOnly` | extends `boolean` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `module` | [`ProxyGetModule`](Powership.md#proxygetmodule)<`T`\> |
| `server` | `ServerOnly` |

#### Defined in

packages/utils/lib/createModulesProxy.d.ts:3

___

### QuerySort

Ƭ **QuerySort**: ``"ASC"`` \| ``"DESC"``

#### Defined in

packages/transporter/lib/Transporter.d.ts:66

___

### ReactLike

Ƭ **ReactLike**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createContext` | [`AnyFunction`](Powership.TU.md#anyfunction) |
| `createElement` | [`AnyFunction`](Powership.TU.md#anyfunction) |
| `useContext` | [`AnyFunction`](Powership.TU.md#anyfunction) |
| `useEffect` | [`AnyFunction`](Powership.TU.md#anyfunction) |
| `useMemo` | [`AnyFunction`](Powership.TU.md#anyfunction) |
| `useState` | [`AnyFunction`](Powership.TU.md#anyfunction) |

#### Defined in

packages/utils/lib/MicroState.d.ts:58

___

### RecordBy

Ƭ **RecordBy**<`Dict`, `Field`\>: { [K in Pick<Dict[keyof Dict], Field\> extends infer Key ? Key extends string \| number ? Key : string : never]: Dict[keyof Dict][] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Dict` | extends `Record`<`string`, `any`\> |
| `Field` | extends `string` |

#### Defined in

packages/utils/lib/Store.d.ts:34

___

### RecordFieldDef

Ƭ **RecordFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `keyType?` | `ValidKeyType` |
| `type?` | [`FieldDefinitionConfig`](Powership.md#fielddefinitionconfig) |

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

### RequestBody

Ƭ **RequestBody**: `string` \| `Record`<`string`, `unknown`\> \| [`UnhandledSymbol`](Powership.md#unhandledsymbol-1)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:81

___

### Resolver

Ƭ **Resolver**<`Context`, `Root`, `Type`, `Args`\>: [`Compute`](Powership.TU.md#compute)<[`OptionalResolverConfig`](Powership.md#optionalresolverconfig)<`Root`, `Context`, `Args`\> & { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `Args`, `context`: `Context`, `info`: `GraphQLResolveInfo`) => [`MaybePromise`](Powership.TU.md#maybepromise)<`Type`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  }, ``1``\>

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

Ƭ **ResolverResolve**<`Context`, `Source`, `TypeDef`, `ArgsDef`\>: (`x`: [`InferResolverArgs`](Powership.md#inferresolverargs)<`ArgsDef`\>) => `any` extends (`x`: infer R) => `any` ? { [K in keyof R]: R[K] } : `never` extends infer Args ? (`x`: [`Infer`](Powership.md#infer)<`TypeDef`\>) => `any` extends (`x`: infer R) => `any` ? (`parent`: [`Compute`](Powership.TU.md#compute)<`Source`\>, `args`: [`Compute`](Powership.TU.md#compute)<`Args`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => [`IsKnown`](Powership.TU.md#isknown)<`R`\> extends ``1`` ? [`Compute`](Powership.TU.md#compute)<`Promise`<`R`\> \| `R`\> : `any` : (`parent`: `Source`, `args`: `Record`<`string`, `unknown`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `Promise`<`any`\> \| `any` : `never` extends infer R ? `R` : `never`

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
| `resolvers` | [`AnyResolver`](Powership.md#anyresolver)[] |

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:39

___

### RootFilterOperators

Ƭ **RootFilterOperators**<`Doc`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = `Record`<`string`, `any`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$and?` | [`FilterRecord`](Powership.md#filterrecord)<`Doc`\>[] |
| `$not?` | [`FilterRecord`](Powership.md#filterrecord)<`Doc`\> |
| `$or?` | [`FilterRecord`](Powership.md#filterrecord)<`Doc`\>[] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:29

___

### RunTimeErrorOptions

Ƭ **RunTimeErrorOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `depth?` | `number` |
| `limitStackTrace?` | `number` |
| `skipStackLines?` | `number` |

#### Defined in

packages/utils/lib/RuntimeError.d.ts:1

___

### Seal

Ƭ **Seal**<`T`\>: [`Merge`](Powership.TU.T.md#merge)<`T`, { `$sealed`: [`$sealedDef`](Powership.md#$sealeddef)  }\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:24

___

### SealedField

Ƭ **SealedField**<`D`\>: ``"type"`` extends keyof `D` ? [`Seal`](Powership.md#seal)<[`Merge`](Powership.TU.T.md#merge)<[`CommonFieldDefinitionProps`](../interfaces/Powership.CommonFieldDefinitionProps.md), `D`\>\> : `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:18

___

### Serializable

Ƭ **Serializable**: ``null`` \| `undefined` \| [`Stringifiable`](../interfaces/Powership.TU.Stringifiable.md) \| [`SerializableList`](../interfaces/Powership.TU.SerializableList.md)

#### Defined in

packages/utils/lib/typings/index.d.ts:7

___

### ServerRequestInit

Ƭ **ServerRequestInit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`RequestBody`](Powership.md#requestbody) |
| `headers` | [`HeaderRecordInit`](Powership.md#headerrecordinit) \| `Headers` |
| `locals?` | `Record`<`string`, `unknown`\> |
| `method` | `string` |
| `permissions?` | `string`[] |
| `url` | `string` \| `undefined` |
| `userId?` | `string` |

#### Defined in

packages/server/lib/ServerRequest.d.ts:2

___

### ServerResponseInit

Ƭ **ServerResponseInit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body?` | `string` \| `Record`<`string`, `any`\> \| [`UnhandledSymbol`](Powership.md#unhandledsymbol-1) |
| `headers?` | [`HeaderRecordInit`](Powership.md#headerrecordinit) \| `Headers` |
| `statusCode?` | [`ServerResponseStatus`](Powership.md#serverresponsestatus) |

#### Defined in

packages/server/lib/ServerResponse.d.ts:3

___

### ServerResponseStatus

Ƭ **ServerResponseStatus**: keyof typeof `StatusCodesEnum` \| `StatusCodesEnum`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:92

___

### Shape

Ƭ **Shape**: [`ObjectDefinitionInput`](Powership.md#objectdefinitioninput)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:14

___

### ShortenFinalFieldDefinition

Ƭ **ShortenFinalFieldDefinition**: { [Type in FieldTypeName]: { [K in \_ShortenFinalFieldDefinitionFieldAsString<Type\>]: K \| { [L in K]: FieldDefinitions[Type] \| Object } }[\_ShortenFinalFieldDefinitionFieldAsString<Type\>] }[[`FieldTypeName`](Powership.md#fieldtypename)]

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:41

___

### Simplify

Ƭ **Simplify**<`T`\>: { [KeyType in keyof T]: T[KeyType] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:60

___

### SlugifyOptions

Ƭ **SlugifyOptions**: `Parameters`<typeof `slugify`\>[``1``] extends infer R ? `R` extends `object` ? `R` : `never` : `never`

#### Defined in

packages/utils/lib/slugify.d.ts:2

___

### SpecialObjectKeys

Ƭ **SpecialObjectKeys**: typeof `SpecialObjectKeyEnum.enum`

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:51

___

### StoreEvent

Ƭ **StoreEvent**<`K`, `V`, `Meta`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `V` | `V` |
| `Meta` | extends [`EventMetadataBase`](Powership.md#eventmetadatabase) = [`EventMetadataBase`](Powership.md#eventmetadatabase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exists` | `boolean` |
| `index` | `number` |
| `key` | `K` |
| `length` | `number` |
| `meta?` | `Meta` |
| `value` | `V` |

#### Defined in

packages/utils/lib/Store.d.ts:10

___

### StoreEventOptions

Ƭ **StoreEventOptions**<`Meta`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Meta` | extends [`EventMetadataBase`](Powership.md#eventmetadatabase) = [`EventMetadataBase`](Powership.md#eventmetadatabase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | `Meta` |
| `silently?` | `boolean` |

#### Defined in

packages/utils/lib/Store.d.ts:21

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

### StringValue

Ƭ **StringValue**: \`${number}\` \| \`${number}${UnitAnyCase}\` \| \`${number} ${UnitAnyCase}\`

#### Defined in

packages/utils/lib/ms.d.ts:3

___

### StringifyDefaultHandler

Ƭ **StringifyDefaultHandler**: (`payload`: { `options`: [`StringifyOptions`](Powership.md#stringifyoptions) ; `value`: `any`  }) => `string` \| `undefined`

#### Type declaration

▸ (`payload`): `string` \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `payload.options` | [`StringifyOptions`](Powership.md#stringifyoptions) |
| `payload.value` | `any` |

##### Returns

`string` \| `undefined`

#### Defined in

packages/utils/lib/BJSON.d.ts:43

___

### StringifyOptions

Ƭ **StringifyOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultHandler?` | [`StringifyDefaultHandler`](Powership.md#stringifydefaulthandler) |
| `key?` | `string` \| `number` |
| `quoteKeys?` | (`str`: `string`) => `string` |
| `quoteValues?` | (`str`: `string` \| `number` \| `boolean`, `info`: { `key`: `string` \| `number` \| `undefined`  }) => `string` |

#### Defined in

packages/utils/lib/BJSON.d.ts:47

___

### TAnyFieldType

Ƭ **TAnyFieldType**: [`AllFieldTypes`](Powership.md#allfieldtypes)[keyof [`AllFieldTypes`](Powership.md#allfieldtypes)]

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:72

___

### TopLevelFilterKey

Ƭ **TopLevelFilterKey**: typeof [`TopLevelFilterKeys`](Powership.md#toplevelfilterkeys)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:166

___

### TransporterFieldType

Ƭ **TransporterFieldType**: typeof [`FieldTypes`](Powership.md#fieldtypes)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:7

___

### TransporterLoader

Ƭ **TransporterLoader**: [`TransporterLoadersRecord`](Powership.md#transporterloadersrecord)[[`TransporterLoaderName`](Powership.md#transporterloadername)]

#### Defined in

packages/transporter/lib/Transporter.d.ts:224

___

### TransporterLoaderName

Ƭ **TransporterLoaderName**: typeof [`transporterLoaderNames`](Powership.md#transporterloadernames)[`number`]

#### Defined in

packages/transporter/lib/Transporter.d.ts:220

___

### TransporterLoadersRecord

Ƭ **TransporterLoadersRecord**: { [K in TransporterLoaderName]: Transporter[K] }

#### Defined in

packages/transporter/lib/Transporter.d.ts:221

___

### TypeDescription

Ƭ **TypeDescription**: `ReturnType`<typeof [`describeType`](Powership.md#describetype)\>

#### Defined in

packages/utils/lib/getTypeName.d.ts:30

___

### TypeLike

Ƭ **TypeLike**<`T`, `Level`\>: `T` extends { `[K: string]`: `any`;  } ? { [K in keyof T]: T[K] extends Object ? Level["length"] extends 2 ? any : T[K] extends AnyFunction ? AnyFunction : TypeLike<T[K], [...Level, 0]\> : any } : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Level` | extends `ReadonlyArray`<`number`\> = [``0``] |

#### Defined in

packages/utils/lib/typings/index.d.ts:79

___

### Types

Ƭ **Types**: typeof [`types`](Powership.md#types-1)

#### Defined in

packages/schema/lib/fields/fieldTypes.d.ts:68

___

### UnhandledSymbol

Ƭ **UnhandledSymbol**: typeof [`UnhandledSymbol`](Powership.md#unhandledsymbol-1)

#### Defined in

packages/server/lib/Symbol.d.ts:1

packages/server/lib/Symbol.d.ts:2

___

### UnionToIntersection

Ƭ **UnionToIntersection**<`T`\>: `T` extends `any` ? (`x`: `T`) => `any` : `never` extends (`x`: infer R) => `any` ? { [K in keyof R]: R[K] } : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:57

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

### UnknownRecord

Ƭ **UnknownRecord**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Defined in

packages/utils/lib/typings/index.d.ts:34

___

### Unsubscribe

Ƭ **Unsubscribe**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

packages/utils/lib/MicroState.d.ts:10

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
| `$addToSet?` | [`ArrayOperationRecord`](Powership.md#arrayoperationrecord)<`TSchema`\> |
| `$append?` | [`ArrayOperationRecord`](Powership.md#arrayoperationrecord)<`TSchema`\> |
| `$inc?` | `UpdateDefinition`<`TSchema`\>[``"$inc"``] |
| `$prepend?` | [`ArrayOperationRecord`](Powership.md#arrayoperationrecord)<`TSchema`\> |
| `$pull?` | [`ArrayOperationRecord`](Powership.md#arrayoperationrecord)<`TSchema`, ``"$in"``\> |
| `$remove?` | [`MaybeArray`](Powership.TU.md#maybearray)<\`${Join<NestedPaths<TSchema\>, "."\>}${\`.${string}\` \| ""}\`\> |
| `$set?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |
| `$setIfNull?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |
| `$setOnInsert?` | `UpdateDefinition`<`TSchema`\>[``"$set"``] |

#### Defined in

packages/transporter/lib/Transporter.d.ts:148

___

### UpdateExpressionKey

Ƭ **UpdateExpressionKey**: `Extract`<keyof [`UpdateExpression`](Powership.md#updateexpression)<`any`\>, `string`\>

#### Defined in

packages/transporter/lib/Transporter.d.ts:159

___

### UpdateManyConfig

Ƭ **UpdateManyConfig**<`Doc`, `PK`, `SK`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Powership.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Powership.md#loadercontext) |
| `filter` | [`MethodFilter`](Powership.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Powership.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `update` | [`UpdateExpression`](Powership.md#updateexpression)<`Doc`\> |
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
| `Doc` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |
| `PK` | extends `string` = `string` |
| `SK` | extends `string` \| `undefined` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`FilterRecord`](Powership.md#filterrecord)<`Doc`\> |
| `context?` | [`LoaderContext`](Powership.md#loadercontext) |
| `filter` | [`MethodFilter`](Powership.md#methodfilter)<`PK`, `SK`\> |
| `indexConfig` | [`CollectionIndexConfig`](Powership.md#collectionindexconfig)<`Doc`, `PK` \| `SK` extends `undefined` ? `PK` : `SK`\> |
| `update` | [`UpdateExpression`](Powership.md#updateexpression)<`Doc`\> |
| `upsert?` | `boolean` |

#### Defined in

packages/transporter/lib/Transporter.d.ts:112

___

### UpdateOneResult

Ƭ **UpdateOneResult**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DocumentBase`](Powership.md#documentbase) = [`DocumentBase`](Powership.md#documentbase) |

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

### Writeable

Ƭ **Writeable**<`T`\>: { -readonly [P in keyof T]: T[P] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/typings/index.d.ts:47

___

### \_AllOptional

Ƭ **\_AllOptional**<`Input`\>: [`MakeFieldOptional`](Powership.md#makefieldoptional)<[`DescribeObjectDefinition`](Powership.md#describeobjectdefinition)<`Input`\>, keyof `Input`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends [`ObjectDefinitionInput`](Powership.md#objectdefinitioninput) |

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:75

___

### \_AnyEntity

Ƭ **\_AnyEntity**: [`EntityFromContext`](../interfaces/Powership.EntityFromContext.md)<[`EntityTypesContext`](../interfaces/Powership.EntityTypesContext.md)<{}, [`DocumentIndexItem`](Powership.md#documentindexitem)[]\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/Entity.d.ts:7

___

### \_DescribeField

Ƭ **\_DescribeField**<`Input`\>: [`OnlyKnown`](Powership.TU.md#onlyknown)<`Input`\> extends infer Known ? `Known` extends `string` ? `ParseStringDefinition`<`Known`\> : `Known` extends `object` ? [`_DescribeObject`](Powership.md#_describeobject)<`Known`\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:17

___

### \_DescribeObject

Ƭ **\_DescribeObject**<`Input`\>: [`_FieldKV`](Powership.md#_fieldkv)<`Input`\> extends [infer K, infer V] ? `K` extends keyof `Input` ? `K` extends [`GraphTypeKID`](Powership.md#graphtypekid) ? ``"definition"`` extends keyof `Input` ? [`DescribeField`](Powership.md#describefield)<`Input`[``"definition"``]\> : `never` : `K` extends [`ObjectTypeKID`](Powership.md#objecttypekid) ? ``"definition"`` extends keyof `Input` ? { `def`: [`DescribeObjectDefinition`](Powership.md#describeobjectdefinition)<`Input`[``"definition"``]\> ; `list`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"optional"``\> ; `type`: ``"object"``  } : `never` : `K` extends [`FieldTypeName`](Powership.md#fieldtypename) ? { `def`: `V` ; `list`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"optional"``\> ; `type`: `K`  } : `K` extends ``"type"`` ? `V` extends [`FieldTypeName`](Powership.md#fieldtypename) ? { `def`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"def"``\> ; `list`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"optional"``\> ; `type`: `V`  } : `Input`[`K`] extends [`GraphTypeLikeFieldDefinition`](../interfaces/Powership.GraphTypeLikeFieldDefinition.md) ? [`Merge`](Powership.TU.T.md#merge)<[`DescribeField`](Powership.md#describefield)<`Input`[`K`][``"definition"``]\>, [`_OmitUndefined`](Powership.md#_omitundefined)<{ `list`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"optional"``\>  }\>\> : `Input`[`K`] extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Powership.ObjectTypeLikeFieldDefinition.md) ? { `def`: [`DescribeObjectDefinition`](Powership.md#describeobjectdefinition)<`Input`[`K`][``"definition"``]\> ; `list`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Powership.md#_getkey)<`Input`, ``"optional"``\> ; `type`: ``"object"``  } : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/DescribeField.d.ts:38

___

### \_Difference

Ƭ **\_Difference**<`Value`, `Path`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | `Value` |
| `Path` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | [`DifferenceAction`](Powership.md#differenceaction) |
| `newValue?` | `Value` |
| `oldValue?` | `Value` |
| `parsed` | [`PathParsed`](Powership.md#pathparsed)<`Path`\> |
| `path` | `Path` |
| `pathParts` | [`DifferencePath`](Powership.md#differencepath)[] |

#### Defined in

packages/utils/lib/diff/diff.d.ts:10

___

### \_EntityLoaderMethods

Ƭ **\_EntityLoaderMethods**<`Context`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](Powership.md#anyentitytypescontext) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createOne` | [`CreateOne`](../interfaces/Powership.CreateOne.md)<`Context`[``"documentCreationInput"``], `Context`[``"document"``], `Context`[``"indexes"``]\> |
| `deleteMany` | [`DeleteMany`](../interfaces/Powership.DeleteMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `deleteOne` | [`DeleteOne`](../interfaces/Powership.DeleteOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findById` | [`FindById`](../interfaces/Powership.FindById.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findMany` | [`FindMany`](../interfaces/Powership.FindMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findOne` | [`FindOne`](../interfaces/Powership.FindOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `paginate` | [`Paginate`](../interfaces/Powership.Paginate.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `updateMany` | [`UpdateMany`](../interfaces/Powership.UpdateMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `updateOne` | [`UpdateOne`](../interfaces/Powership.UpdateOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\> |

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

Ƭ **\_FieldKV**<`Input`\>: keyof `Input` extends infer K ? `K` extends `unknown` ? `K` extends keyof `Input` ? `K` extends [`FieldInputLikeRequiredKey`](Powership.md#fieldinputlikerequiredkey) ? [`K`, `Input`[`K`]] : `never` : `never` : `never` : `never`

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

Ƭ **\_GetKey**<`T`, `Key`\>: [`GetFieldByDotNotation`](Powership.TU.md#getfieldbydotnotation)<`T`, `Key`\>

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

### \_GraphQLDataBasic

Ƭ **\_GraphQLDataBasic**: ``null`` \| `undefined` \| `string` \| `number`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:36

___

### \_InferAlias

Ƭ **\_InferAlias**<`Input`, `Parent`\>: `Input` extends `string` ? [`GetFieldByDotNotation`](Powership.TU.md#getfieldbydotnotation)<`Parent`, `Input`\> : `Input` extends `object` ? keyof `Input` extends infer K ? `K` extends `unknown` ? `K` extends keyof `Input` ? `K` extends ``"type"`` ? [`Infer`](Powership.md#infer)<`Input`[`K`]\> : `K` extends ``"alias"`` ? [`_InferAlias`](Powership.md#_inferalias)<`Input`[`K`], `Parent`\> : `never` : `never` : `never` : `never` : `never`

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

Ƭ **\_InferField**<`Input`\>: [`_FieldKV`](Powership.md#_fieldkv)<`Input`\> extends [infer K, infer V] ? `K` extends keyof `Input` ? `K` extends [`GraphTypeKID`](Powership.md#graphtypekid) ? [`InferGraphType`](Powership.md#infergraphtype)<`Input`\> : `K` extends [`ObjectTypeKID`](Powership.md#objecttypekid) ? [`InferObjectType`](Powership.md#inferobjecttype)<`Input`\> : `K` extends [`FieldTypeName`](Powership.md#fieldtypename) ? [`InferFinalField`](Powership.md#inferfinalfield)<`K`, `V`\> : `K` extends ``"type"`` ? `V` extends [`FieldTypeName`](Powership.md#fieldtypename) ? [`InferFinalField`](Powership.md#inferfinalfield)<`V`, [`_GetKey`](Powership.md#_getkey)<`Input`, ``"def"``\>\> : `Input`[`K`] extends [`GraphTypeLikeFieldDefinition`](../interfaces/Powership.GraphTypeLikeFieldDefinition.md) ? [`InferGraphType`](Powership.md#infergraphtype)<`Input`[`K`]\> : `Input`[`K`] extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Powership.ObjectTypeLikeFieldDefinition.md) ? [`InferObjectType`](Powership.md#inferobjecttype)<`Input`[`K`]\> : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:9

___

### \_InferFinalField

Ƭ **\_InferFinalField**<`TypeName`, `Def`\>: `TypeName` extends ``"literal"`` ? `Def` : `TypeName` extends ``"array"`` ? [`Def`] extends [`ArrayFieldDef`<infer Of\>] ? [`Infer`](Powership.md#infer)<`Of`\>[] : `never` : `TypeName` extends ``"object"`` ? [`Def`] extends [`object`] ? [`InferObjectDefinition`](Powership.md#inferobjectdefinition)<`Def`\> : `never` : `TypeName` extends ``"enum"`` ? [`Def`] extends [`ReadonlyArray`<infer Item\>] ? `Item` : `never` : `TypeName` extends ``"union"`` ? [`Def`] extends [`ReadonlyArray`<infer Item\>] ? [`Infer`](Powership.md#infer)<`Item`\> : `never` : `TypeName` extends ``"record"`` ? [`Def`] extends [{ `keyType?`: infer KeyType ; `type?`: infer Type  }] ? { [K in KeyType extends "int" \| "float" ? number : string]: Infer<Type\> } : { `[K: string]`: `any`;  } : `TypeName` extends ``"literal"`` ? `Def` : [`InferTypeName`](Powership.md#infertypename)<`TypeName`\>

#### Type parameters

| Name |
| :------ |
| `TypeName` |
| `Def` |

#### Defined in

packages/schema/lib/fields/Infer/InferFinalField.d.ts:7

___

### \_InferObjectDefinition

Ƭ **\_InferObjectDefinition**<`Input`\>: [`_GetAliasFields`](Powership.md#_getaliasfields)<`Input`\> extends infer Aliases ? { [K in Exclude<keyof Input, keyof Aliases\>]: Infer<Input[K]\> } & [`_InferSpecialObjectKeys`](Powership.md#_inferspecialobjectkeys)<`Input`\> extends infer Parent ? [`_InferAliasFields`](Powership.md#_inferaliasfields)<[`Cast`](Powership.TU.T.md#cast)<`Aliases`, `object`\>, [`Cast`](Powership.TU.T.md#cast)<`Parent`, `object`\>\> & `Parent` : `never` : `never`

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

Ƭ **\_InnerDef**<`R`\>: ``"type"`` extends keyof `R` ? ``"def"`` extends keyof `R` ? `R`[``"type"``] extends ``"object"`` ? `R`[``"def"``] extends `object` ? [`DescribeObjectDefinition`](Powership.md#describeobjectdefinition)<`R`[``"def"``]\> : `never` : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `R` |

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:41

___

### \_NullableNullable

Ƭ **\_NullableNullable**<`Obj`\>: [`_UndefinedKeys`](Powership.md#_undefinedkeys)<`Obj`\> extends infer UK ? `Union.Merge`<{ [K in keyof Obj as [Obj[K]] extends [undefined] ? never : K]: Obj[K] } & {}\> extends infer Union ? [`NullableToPartial`](Powership.TU.md#nullabletopartial)<{ [K in keyof Union]: K extends UK ? Union[K] \| undefined : Union[K] } & {}\> : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Obj` | extends `object` |

#### Defined in

packages/utils/lib/mapper.d.ts:11

___

### \_ObjectFieldInputBase

Ƭ **\_ObjectFieldInputBase**: [`GraphTypeLikeFieldDefinition`](../interfaces/Powership.GraphTypeLikeFieldDefinition.md) \| [`ObjectTypeLikeFieldDefinition`](../interfaces/Powership.ObjectTypeLikeFieldDefinition.md) \| [`ObjectInTypeFieldDefinition`](../interfaces/Powership.ObjectInTypeFieldDefinition.md) \| [`GraphTypeInTypeFieldDefinition`](../interfaces/Powership.GraphTypeInTypeFieldDefinition.md) \| [`FinalFieldDefinition`](Powership.md#finalfielddefinition) \| [`FieldAsString`](Powership.md#fieldasstring)

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:7

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

### \_PathType

Ƭ **\_PathType**<`Type`, `Property`\>: `string` extends `Property` ? `never` : `Property` extends keyof `Type` ? `Type`[`Property`] : `Property` extends \`${infer Head}.$\` ? [`PathType`](Powership.TU.md#pathtype)<[`PathType`](Powership.TU.md#pathtype)<`Type`, `Head`\>, ``"$"``\> : `Property` extends ``"$"`` ? `Type` extends `ReadonlyArray`<infer T\> ? `T`[] : `Type` extends `object` ? { [K in Extract<keyof Type, string\>]: Type[K] }[`Extract`<keyof `Type`, `string`\>][] : `undefined` : `Property` extends ``""`` ? `Type` : `Property` extends \`${number}\` ? `Type` extends `ReadonlyArray`<infer ArrayType\> ? `ArrayType` : `undefined` : `Property` extends \`${infer Key}.${infer Rest}\` ? `Key` extends \`${number}\` ? `Type` extends `ReadonlyArray`<infer ArrayType\> ? [`PathType`](Powership.TU.md#pathtype)<`ArrayType`, `Rest`\> : `undefined` : `Key` extends keyof `Type` ? `Type`[`Key`] extends `Map`<`string`, infer MapType\> ? `MapType` : [`PathType`](Powership.TU.md#pathtype)<`Type`[`Key`], `Rest`\> : `undefined` : `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `Property` | extends `string` |

#### Defined in

packages/utils/lib/typings/Path.d.ts:2

___

### \_ResolverArgs

Ƭ **\_ResolverArgs**<`ArgsType`\>: `Exclude`<`ArgsType`, `undefined`\> extends infer R ? [`IsKnown`](Powership.TU.md#isknown)<`R`\> extends ``1`` ? [`Infer`](Powership.md#infer)<{ `object`: `R`  }\> : {} : {}

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
| `T` | extends [`FieldTypeName`](Powership.md#fieldtypename) |

#### Defined in

packages/schema/lib/fields/_parseFields.d.ts:40

___

### \_UndefinedKeys

Ƭ **\_UndefinedKeys**<`T`\>: keyof `Union.Merge`<`Extract`<`T` extends `unknown` ? { [K in keyof T as T[K] extends undefined ? K : never]: K } & {} : {}, `object`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/lib/mapper.d.ts:8

___

### \_UnknownDiff

Ƭ **\_UnknownDiff**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | [`DifferenceAction`](Powership.md#differenceaction) |
| `newValue?` | `unknown` |
| `oldValue?` | `unknown` |
| `parsed` | [`PathParsed`](Powership.md#pathparsed) |
| `path` | `string` |
| `pathParts` | [`DifferencePath`](Powership.md#differencepath)[] |

#### Defined in

packages/utils/lib/diff/diff.d.ts:18

___

### \_WithInferList

Ƭ **\_WithInferList**<`FieldDefinition`, `InferredValue`\>: [``true``] extends [[`_GetKey`](Powership.md#_getkey)<`FieldDefinition`, ``"list"``\>] ? `InferredValue`[] : `InferredValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FieldDefinition` | extends `object` |
| `InferredValue` | `InferredValue` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:13

___

### \_WithInferOptional

Ƭ **\_WithInferOptional**<`FieldDefinition`, `InferredValue`\>: [``true``] extends [[`_GetKey`](Powership.md#_getkey)<`FieldDefinition`, ``"optional"``\>] ? `InferredValue` \| `undefined` : `InferredValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FieldDefinition` | extends `object` |
| `InferredValue` | `InferredValue` |

#### Defined in

packages/schema/lib/fields/Infer/InferField.d.ts:10

## Properties

### HttpError

• **HttpError**: `any`

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

### A\_Z

• `Const` **A\_Z**: [``"A"``, ``"B"``, ``"C"``, ``"D"``, ``"E"``, ``"F"``, ``"G"``, ``"H"``, ``"I"``, ``"J"``, ``"K"``, ``"L"``, ``"M"``, ``"N"``, ``"O"``, ``"P"``, ``"Q"``, ``"R"``, ``"S"``, ``"T"``, ``"U"``, ``"V"``, ``"W"``, ``"X"``, ``"Y"``, ``"Z"``, ``"a"``, ``"b"``, ``"c"``, ``"d"``, ``"e"``, ``"f"``, ``"g"``, ``"h"``, ``"i"``, ``"j"``, ``"k"``, ``"l"``, ``"m"``, ``"n"``, ``"o"``, ``"p"``, ``"q"``, ``"r"``, ``"s"``, ``"t"``, ``"u"``, ``"v"``, ``"w"``, ``"x"``, ``"y"``, ``"z"``]

#### Defined in

packages/utils/lib/typings/index.d.ts:95

packages/utils/lib/typings/index.d.ts:96

___

### AppConfig

• `Const` **AppConfig**: [`IAppConfig`](../interfaces/Powership.IAppConfig.md)<[`AppConfigInterface`](../interfaces/Powership.AppConfigInterface.md)\>

#### Defined in

packages/utils/lib/AppConfig.d.ts:7

___

### AttributeFilterKeys

• `Const` **AttributeFilterKeys**: [``"$eq"``, ``"$ne"``, ``"$lte"``, ``"$lt"``, ``"$gt"``, ``"$gte"``, ``"$between"``, ``"$exists"``, ``"$type"``, ``"$startsWith"``, ``"$contains"``, ``"$matchString"``, ``"$in"``]

#### Defined in

packages/transporter/lib/Transporter.d.ts:163

___

### BJSON

• `Const` **BJSON**: [`BJSONConstructor`](../classes/Powership.BJSONConstructor.md)

#### Defined in

packages/utils/lib/BJSON.d.ts:57

___

### BJSON\_FUNCTION

• `Const` **BJSON\_FUNCTION**: `string`

#### Defined in

packages/utils/lib/BJSON.d.ts:3

___

### BJSON\_UNDEFINED

• `Const` **BJSON\_UNDEFINED**: `string`

#### Defined in

packages/utils/lib/BJSON.d.ts:2

___

### CACHED\_FIELD\_INSTANCE\_KEY

• `Const` **CACHED\_FIELD\_INSTANCE\_KEY**: ``"__cachedFieldInstance"``

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:35

___

### CURSOR\_CHARS

• `Const` **CURSOR\_CHARS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ESCAPE_INDEX_PART_SEP` | ``"⦙"`` |
| `ESCAPE_KEY_PART_SEP` | ``"⦁"`` |
| `INDEX_PART_SEP` | ``"⋮"`` |
| `KEY_PART_SEP` | ``"∙"`` |
| `RELATION_PRECEDES` | ``"⊰"`` |

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:26

___

### CURSOR\_PREFIX

• `Const` **CURSOR\_PREFIX**: ``"~!"``

#### Defined in

packages/utils/lib/IndexCursor/parseFilterCursor.d.ts:2

___

### CircularDeps

• `Const` **CircularDeps**: `PowershipModules`

#### Defined in

packages/schema/lib/CircularDeps.d.ts:97

___

### CustomError

• `Const` **CustomError**: `Object`

#### Call signature

• **new CustomError**(`message?`, `details?`, `shouldPublishStack?`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `details?` | `any` |
| `shouldPublishStack?` | ``false`` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$kind` | `string` |
| `__$name__` | `string` |
| `__originalStack` | `string` |
| `cause?` | `unknown` |
| `errorGroup` | `string` |
| `identify` | (`name`: `string`) => `any` |
| `message` | `string` |
| `name` | `string` |
| `publicErrorMessage` | `string` \| `undefined` |
| `publish` | (`message?`: `string`) => `any` |
| `stack?` | `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `is` | (`item`: `any`) => item is Object |
| `prepareStackTrace?` | (`err`: `Error`, `stackTraces`: `NodeJS.CallSite`[]) => `any` |
| `stackTraceLimit` | `number` |
| `captureStackTrace` | (`targetObject`: `object`, `constructorOpt?`: `Function`) => `void` |

#### Defined in

packages/utils/lib/createErrorClass.d.ts:38

___

### DEFAULT\_SORT

• `Const` **DEFAULT\_SORT**: ``"ASC"``

#### Defined in

packages/transporter/lib/Transporter.d.ts:6

___

### ESCAPE\_INDEX\_PART\_SEP

• `Const` **ESCAPE\_INDEX\_PART\_SEP**: ``"⦙"``

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:33

___

### ESCAPE\_KEY\_PART\_SEP

• `Const` **ESCAPE\_KEY\_PART\_SEP**: ``"⦁"``

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:33

___

### EmailRegex

• `Const` **EmailRegex**: `RegExp`

#### Defined in

packages/utils/lib/emailRegex.d.ts:1

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

• `Const` **FieldsTypeCache**: `Map`<`string`, { `defKeys`: `string`[] \| `undefined` ; `fieldType`: [`TAnyFieldType`](Powership.md#tanyfieldtype)  }\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:15

___

### FilterConditionsParsers

• `Const` **FilterConditionsParsers**: { [K in keyof FilterConditions]-?: Function }

#### Defined in

packages/transporter/lib/Transporter.d.ts:160

___

### GlobalLogger

• `Const` **GlobalLogger**: [`Logger`](../classes/Powership.Logger.md)

#### Defined in

packages/utils/lib/nodeLogger.d.ts:44

___

### INDEX\_PART\_SEP

• `Const` **INDEX\_PART\_SEP**: ``"⋮"``

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:33

___

### INDEX\_PART\_SEP\_REGEX

• `Const` **INDEX\_PART\_SEP\_REGEX**: `RegExp`

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:35

___

### IndexCursor

• `Const` **IndexCursor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `escape` | typeof [`escapeCursorChars`](Powership.md#escapecursorchars) |
| `join` | typeof [`joinIndexCursor`](Powership.md#joinindexcursor) |
| `joinCursorPartsWithTrailingSeparator` | typeof [`joinCursorPartsWithTrailingSeparator`](Powership.md#joincursorpartswithtrailingseparator) |
| `joinKeyParts` | typeof [`joinKeyParts`](Powership.md#joinkeyparts) |
| `joinPKSK` | typeof [`joinPKSK`](Powership.md#joinpksk) |
| `parse` | typeof [`parseIndexCursor`](Powership.md#parseindexcursor) |
| `stripTrailingIndexSep` | typeof [`stripTrailingIndexSep`](Powership.md#striptrailingindexsep) |

#### Defined in

packages/utils/lib/IndexCursor/IndexCursor.d.ts:4

___

### InvariantError

• `Const` **InvariantError**: `Object`

#### Call signature

• **new InvariantError**(`message?`, `details?`, `shouldPublishStack?`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `details?` | `any` |
| `shouldPublishStack?` | ``false`` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$kind` | `string` |
| `__$name__` | `string` |
| `__originalStack` | `string` |
| `cause?` | `unknown` |
| `errorGroup` | `string` |
| `identify` | (`name`: `string`) => `any` |
| `message` | `string` |
| `name` | `string` |
| `publicErrorMessage` | `string` \| `undefined` |
| `publish` | (`message?`: `string`) => `any` |
| `stack?` | `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `is` | (`item`: `any`) => item is Object |
| `prepareStackTrace?` | (`err`: `Error`, `stackTraces`: `NodeJS.CallSite`[]) => `any` |
| `stackTraceLimit` | `number` |
| `captureStackTrace` | (`targetObject`: `object`, `constructorOpt?`: `Function`) => `void` |

#### Defined in

packages/utils/lib/invariant.d.ts:6

___

### KEY\_PART\_SEP

• `Const` **KEY\_PART\_SEP**: ``"∙"``

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:33

___

### KEY\_PART\_SEP\_REGEX

• `Const` **KEY\_PART\_SEP\_REGEX**: `RegExp`

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:36

___

### KNOWN\_CONSTRUCTOR\_NAMES

• `Const` **KNOWN\_CONSTRUCTOR\_NAMES**: { `Array`: ``"Array"`` ; `BigInt`: ``"BigInt"`` ; `Boolean`: ``"Boolean"`` ; `Function`: ``"Function"`` ; `Infinity`: ``"Infinity"`` ; `NaN`: ``"NaN"`` ; `Null`: ``"Null"`` ; `Number`: ``"Number"`` ; `Object`: ``"Object"`` ; `String`: ``"String"`` ; `Symbol`: ``"Symbol"`` ; `Undefined`: ``"Undefined"``  } & { `list`: (``"NaN"`` \| ``"Undefined"`` \| ``"Function"`` \| ``"Null"`` \| ``"String"`` \| ``"Boolean"`` \| ``"BigInt"`` \| ``"Symbol"`` \| ``"Array"`` \| ``"Infinity"`` \| ``"Number"`` \| ``"Object"``)[]  } & { `enum`: ``"NaN"`` \| ``"Undefined"`` \| ``"Function"`` \| ``"Null"`` \| ``"String"`` \| ``"Boolean"`` \| ``"BigInt"`` \| ``"Symbol"`` \| ``"Array"`` \| ``"Infinity"`` \| ``"Number"`` \| ``"Object"``  }

#### Defined in

packages/utils/lib/getTypeName.d.ts:2

___

### LogLevelEntries

• `Const` **LogLevelEntries**: `ObjectEntries`

#### Defined in

packages/utils/lib/logLevels.d.ts:12

___

### LogLevels

• `Const` **LogLevels**: (``"error"`` \| ``"emerg"`` \| ``"alert"`` \| ``"crit"`` \| ``"warning"`` \| ``"notice"`` \| ``"info"`` \| ``"debug"`` \| ``"none"``)[]

#### Defined in

packages/utils/lib/logLevels.d.ts:23

___

### LogLevelsEnum

• `Const` **LogLevelsEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alert` | ``1`` |
| `crit` | ``2`` |
| `debug` | ``7`` |
| `emerg` | ``0`` |
| `error` | ``3`` |
| `info` | ``6`` |
| `none` | ``100`` |
| `notice` | ``5`` |
| `warning` | ``4`` |

#### Defined in

packages/utils/lib/logLevels.d.ts:1

___

### MIN\_DOCUMENT\_INDEX\_KEY\_PARTS

• `Const` **MIN\_DOCUMENT\_INDEX\_KEY\_PARTS**: ``4``

#### Defined in

packages/utils/lib/IndexCursor/parseIndexCursor.d.ts:2

___

### MIN\_FILTER\_INDEX\_KEY\_PARTS

• `Const` **MIN\_FILTER\_INDEX\_KEY\_PARTS**: ``3``

#### Defined in

packages/utils/lib/IndexCursor/parseIndexCursor.d.ts:3

___

### NodeLogger

• `Const` **NodeLogger**: [`Logger`](../classes/Powership.Logger.md)

#### Defined in

packages/utils/lib/nodeLogger.d.ts:43

___

### PageInfoType

• `Const` **PageInfoType**: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: { `endCursor`: ``"string?"`` ; `hasNextPage`: ``"boolean"`` ; `hasPreviousPage`: ``"boolean"`` ; `startCursor`: ``"string?"``  }  }\>

#### Defined in

packages/entity/lib/paginationUtils.d.ts:2

___

### PowershipObject

• `Const` **PowershipObject**: typeof [`ObjectType`](../classes/Powership.ObjectType.md)

#### Defined in

packages/schema/lib/ObjectType.d.ts:114

___

### Process

• `Const` **Process**: `Partial`<`NodeJS.Process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Defined in

packages/utils/lib/useProcess.d.ts:8

___

### RELATION\_PRECEDES

• `Const` **RELATION\_PRECEDES**: ``"⊰"``

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:33

___

### SEP

• `Const` **SEP**: ``"ː"``

#### Defined in

packages/utils/lib/BJSON.d.ts:1

___

### ServerLogs

• `Const` **ServerLogs**: `LogStorm`

#### Defined in

packages/server/lib/ServerLogs.d.ts:1

___

### SpecialObjectKeyEnum

• `Const` **SpecialObjectKeyEnum**: { `$number`: ``"$number"`` ; `$string`: ``"$string"``  } & { `list`: (``"$string"`` \| ``"$number"``)[]  } & { `enum`: ``"$string"`` \| ``"$number"``  }

#### Defined in

packages/schema/lib/fields/_fieldDefinitions.d.ts:43

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

### UnhandledSymbol

• `Const` **UnhandledSymbol**: unique `symbol`

#### Defined in

packages/server/lib/Symbol.d.ts:1

packages/server/lib/Symbol.d.ts:2

___

### \_\_LOCAL\_DEV\_USERID\_\_

• **\_\_LOCAL\_DEV\_USERID\_\_**: `string` \| ``null``

#### Defined in

packages/server/lib/ServerRequest.d.ts:11

___

### \_defaultLogger

• `Const` **\_defaultLogger**: [`LoggerMethods`](Powership.md#loggermethods)

#### Defined in

packages/utils/lib/nodeLogger.d.ts:5

___

### create

• `Const` **create**: [`FieldCreators`](Powership.md#fieldcreators)

#### Defined in

packages/schema/lib/fields/fieldTypes.d.ts:72

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

### noop

• `Const` **noop**: `Object`

#### Defined in

packages/utils/lib/typings/index.d.ts:104

___

### objectMetaFieldKey

• `Const` **objectMetaFieldKey**: ``"__dschm__"``

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:17

___

### randomNames

• `Const` **randomNames**: `string`[]

#### Defined in

packages/utils/lib/randomItem.d.ts:3

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

### stringCase

• `Const` **stringCase**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `camelCase` | (`string?`: `string`) => `string` |
| `capitalized` | (`s`: `string`) => `string` |
| `keep` | (`s`: `string`) => `string` |
| `lowercase` | (`s`: `string`) => `string` |
| `random` | (`s`: `string`) => `string` |
| `slugify` | (`s`: `string`) => `string` |
| `undefined` | (`s`: `string`) => `string` |

#### Defined in

packages/utils/lib/stringCase.d.ts:5

___

### transporterLoaderNames

• `Const` **transporterLoaderNames**: [``"createOne"``, ``"findById"``, ``"findMany"``, ``"findOne"``, ``"updateOne"``, ``"updateMany"``, ``"deleteOne"``, ``"deleteMany"``, ``"paginate"``]

#### Defined in

packages/transporter/lib/Transporter.d.ts:219

___

### types

• `Const` **types**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ID` | typeof [`IDField`](../classes/Powership.IDField.md) |
| `alias` | typeof [`AliasField`](../classes/Powership.AliasField.md) |
| `any` | typeof [`AnyField`](../classes/Powership.AnyField.md) |
| `array` | typeof `ArrayField` |
| `boolean` | typeof [`BooleanField`](../classes/Powership.BooleanField.md) |
| `cursor` | typeof [`CursorField`](../classes/Powership.CursorField.md) |
| `date` | typeof [`DateField`](../classes/Powership.DateField.md) |
| `email` | typeof [`EmailField`](../classes/Powership.EmailField.md) |
| `enum` | typeof [`EnumField`](../classes/Powership.EnumField.md) |
| `float` | typeof [`FloatField`](../classes/Powership.FloatField.md) |
| `int` | typeof [`IntField`](../classes/Powership.IntField.md) |
| `literal` | typeof [`LiteralField`](../classes/Powership.LiteralField.md) |
| `meta` | typeof [`MetaField`](../classes/Powership.MetaField.md) |
| `null` | typeof [`NullField`](../classes/Powership.NullField.md) |
| `object` | typeof [`ObjectField`](../classes/Powership.ObjectField.md) |
| `phone` | typeof `PhoneField` |
| `record` | typeof [`RecordField`](../classes/Powership.RecordField.md) |
| `string` | typeof [`StringField`](../classes/Powership.StringField.md) |
| `ulid` | typeof [`UlidField`](../classes/Powership.UlidField.md) |
| `undefined` | typeof [`UndefinedField`](../classes/Powership.UndefinedField.md) |
| `union` | typeof [`UnionField`](../classes/Powership.UnionField.md) |
| `unknown` | typeof [`UnknownField`](../classes/Powership.UnknownField.md) |

#### Defined in

packages/schema/lib/fields/fieldTypes.d.ts:44

## Functions

### $

▸ **$**<`V`\>(`current`): [`UFO`](../interfaces/Powership.UFO-1.md)<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `V` |

#### Returns

[`UFO`](../interfaces/Powership.UFO-1.md)<`V`\>

#### Defined in

packages/utils/lib/ufo.d.ts:7

___

### \_\_getCachedFieldInstance

▸ **__getCachedFieldInstance**(`field`): [`TAnyFieldType`](Powership.md#tanyfieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `Object` |

#### Returns

[`TAnyFieldType`](Powership.md#tanyfieldtype)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:36

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

### \_joinIndexCursorWithParent

▸ **_joinIndexCursorWithParent**(`init`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`InitIndexCursorWithParent`](../interfaces/Powership.InitIndexCursorWithParent.md) |
| `options` | [`JoinKeyPartsOptions`](../interfaces/Powership.JoinKeyPartsOptions.md) |

#### Returns

`string`

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:46

___

### \_parseAffectedPaths

▸ **_parseAffectedPaths**(`path`): `Set`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |

#### Returns

`Set`<`string`\>

#### Defined in

packages/utils/lib/parsePath.d.ts:13

___

### \_parseSubIndexCursor

▸ **_parseSubIndexCursor**(`init`, `options`): [`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Object` |
| `init.parentPrefix?` | `string` |
| `init.parts` | `string`[] |
| `options` | [`ParseCursorOptions`](../interfaces/Powership.ParseCursorOptions.md) |

#### Returns

[`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md)

#### Defined in

packages/utils/lib/IndexCursor/parseIndexCursor.d.ts:5

___

### \_pathToList

▸ **_pathToList**(`path`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| (`string` \| `number`)[] |

#### Returns

`string`[]

#### Defined in

packages/utils/lib/parsePath.d.ts:12

___

### \_simpleObjectHash

▸ **_simpleObjectHash**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

packages/utils/lib/simpleObjectHash.d.ts:2

___

### \_stringify

▸ **_stringify**(`value`, `options?`): `string` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | [`StringifyOptions`](Powership.md#stringifyoptions) |

#### Returns

`string` \| `undefined`

#### Defined in

packages/utils/lib/BJSON.d.ts:56

___

### allocThreadID

▸ **allocThreadID**(): `ThreadID`

#### Returns

`ThreadID`

#### Defined in

packages/utils/lib/threadId.d.ts:2

___

### areDifferentElements

▸ **areDifferentElements**(`currentElement`, `nextElement`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentElement` | `any` |
| `nextElement` | `any` |

#### Returns

`boolean`

#### Defined in

packages/utils/lib/diff/diff.d.ts:33

___

### areEqual

▸ **areEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

#### Returns

`boolean`

#### Defined in

packages/utils/lib/areEqual.d.ts:1

___

### assertEqual

▸ **assertEqual**<`ToBe`\>(`value`, `toBe`, `message?`, `details?`): asserts value is ToBe extends Assertable ? ToBe : never

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ToBe` | extends `Readonly`<[`Assertable`](Powership.md#assertable)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `toBe` | `ToBe` |
| `message?` | `string` |
| `details?` | `Object` |

#### Returns

asserts value is ToBe extends Assertable ? ToBe : never

#### Defined in

packages/utils/lib/areEqual.d.ts:7

___

### assertError

▸ **assertError**(`e`): asserts e is ErrorWithStack

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

asserts e is ErrorWithStack

#### Defined in

packages/utils/lib/invariant.d.ts:38

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

### assertSame

▸ **assertSame**<`A`\>(`message`, `a`, `b`): asserts b is A

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `a` | `A` |
| `b` | `any` |

#### Returns

asserts b is A

#### Defined in

packages/utils/lib/assertSame.d.ts:1

___

### assertType

▸ **assertType**<`Type`\>(`value`, `type`, `customMessage?`): asserts value is Infer<Type\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | `Type` |
| `customMessage?` | `string` |

#### Returns

asserts value is Infer<Type\>

#### Defined in

packages/schema/lib/assertType.d.ts:3

___

### assertTypes

▸ **assertTypes**<`Input`\>(`input`, `expected`, `optional?`): `Input`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |
| `expected` | `string` \| `string`[] |
| `optional?` | `boolean` \| ``"truthy"`` |

#### Returns

`Input`

#### Defined in

packages/utils/lib/expectedType.d.ts:10

___

### awaitSync

▸ **awaitSync**<`T`\>(`promises`): `Promise`<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promises` | [`MaybePromise`](Powership.TU.md#maybepromise)<`T`\>[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

packages/utils/lib/awaitSync.d.ts:2

___

### base64ToText

▸ **base64ToText**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/textToBase64.d.ts:2

___

### capitalize

▸ **capitalize**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/stringCase.d.ts:2

___

### captureStackTrace

▸ **captureStackTrace**(`error`, `parent?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |
| `parent?` | `any` |

#### Returns

`void`

#### Defined in

packages/utils/lib/stackTrace.d.ts:2

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

packages/schema/lib/fields/MetaFieldField.d.ts:19

___

### conust

▸ **conust**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `number` |

#### Returns

`string`

#### Defined in

packages/utils/lib/conust.d.ts:2

___

### createAggioIndexBasedFilters

▸ **createAggioIndexBasedFilters**(`options`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.filter` | [`IndexFilterRecord`](Powership.md#indexfilterrecord)<`string`, `string`\> |
| `options.indexConfig` | [`AnyCollectionIndexConfig`](Powership.md#anycollectionindexconfig) |

#### Returns

`Query`<`any`\>[]

#### Defined in

packages/transporter/lib/parseAggioAttributeFilters.d.ts:4

___

### createDocumentIndexBasedFilters

▸ **createDocumentIndexBasedFilters**(`filter`, `indexConfig`): [`IndexBasedFilterParsed`](Powership.md#indexbasedfilterparsed)

Receives a document indexConfig and a key-value filter and converts to
an index based search filter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`IndexFilterRecord`](Powership.md#indexfilterrecord)<`string`, `string`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Powership.md#anycollectionindexconfig) |

#### Returns

[`IndexBasedFilterParsed`](Powership.md#indexbasedfilterparsed)

#### Defined in

packages/transporter/lib/createDocumentIndexBasedFilters.d.ts:9

___

### createEmptyMetaField

▸ **createEmptyMetaField**(): [`MetaField`](../classes/Powership.MetaField.md)[``"asFinalFieldDef"``]

#### Returns

[`MetaField`](../classes/Powership.MetaField.md)[``"asFinalFieldDef"``]

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:18

___

### createEntity

▸ **createEntity**<`InputDefinition`, `Indexes`, `Options`\>(`configOptions`): [`Entity`](../interfaces/Powership.Entity.md)<`InputDefinition`, `Indexes`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDefinition` | extends [`ObjectDefinitionInput`](Powership.md#objectdefinitioninput) |
| `Indexes` | extends [`DocumentIndexesConfig`](../interfaces/Powership.DocumentIndexesConfig.md)<`string`, `Indexes`\> |
| `Options` | extends [`EntityOptions`](Powership.md#entityoptions)<`InputDefinition`, `Indexes`\> = [`EntityOptions`](Powership.md#entityoptions)<`InputDefinition`, `Indexes`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configOptions` | [`EntityOptions`](Powership.md#entityoptions)<`InputDefinition`, `Indexes`\> \| () => [`EntityOptions`](Powership.md#entityoptions)<`InputDefinition`, `Indexes`\> |

#### Returns

[`Entity`](../interfaces/Powership.Entity.md)<`InputDefinition`, `Indexes`\>

#### Defined in

packages/entity/lib/Entity.d.ts:6

___

### createEntityPlugin

▸ **createEntityPlugin**(`name`, `handler`): [`EntityPlugin`](../interfaces/Powership.EntityPlugin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handler` | [`EntityPlugin`](../interfaces/Powership.EntityPlugin.md) |

#### Returns

[`EntityPlugin`](../interfaces/Powership.EntityPlugin.md)

#### Defined in

packages/entity/lib/EntityPlugin.d.ts:8

___

### createErrorClass

▸ **createErrorClass**(`originalName`, `options?`): (`message?`: `string`, `details?`: `any`, `shouldPublishStack?`: ``false``) => { `$kind`: `string` ; `__$name__`: `string` ; `__originalStack`: `string` ; `cause?`: `unknown` ; `errorGroup`: `string` ; `identify`: (`name`: `string`) => `any` ; `message`: `string` ; `name`: `string` ; `publicErrorMessage`: `string` \| `undefined` ; `publish`: (`message?`: `string`) => `any` ; `stack?`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `originalName` | `string` |
| `options?` | [`ErrorClassCreatorOptions`](Powership.md#errorclasscreatoroptions) |

#### Returns

`fn`

• **new createErrorClass**(`message?`, `details?`, `shouldPublishStack?`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `details?` | `any` |
| `shouldPublishStack?` | ``false`` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$kind` | `string` |
| `__$name__` | `string` |
| `__originalStack` | `string` |
| `cause?` | `unknown` |
| `errorGroup` | `string` |
| `identify` | (`name`: `string`) => `any` |
| `message` | `string` |
| `name` | `string` |
| `publicErrorMessage` | `string` \| `undefined` |
| `publish` | (`message?`: `string`) => `any` |
| `stack?` | `string` |

| Name | Type |
| :------ | :------ |
| `is` | (`item`: `any`) => item is Object |
| `prepareStackTrace?` | (`err`: `Error`, `stackTraces`: `NodeJS.CallSite`[]) => `any` |
| `stackTraceLimit` | `number` |
| `captureStackTrace` | (`targetObject`: `object`, `constructorOpt?`: `Function`) => `void` |

#### Defined in

packages/utils/lib/createErrorClass.d.ts:7

___

### createGraphQLHandlers

▸ **createGraphQLHandlers**<`Resolvers`\>(`definition`): `Handler`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Resolvers` | extends `ResolversRecord` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `GraphqlHandlerOptions`<`Resolvers`\> |

#### Returns

`Handler`[]

#### Defined in

packages/server/lib/graphql/graphqlHandler.d.ts:9

___

### createGraphQLSchema

▸ **createGraphQLSchema**<`T`\>(`resolvers?`, `config?`): `T` extends { `__isResolver`: `any`  } ? [`GraphQLSchemaWithUtils`](Powership.md#graphqlschemawithutils) : `never`

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

`T` extends { `__isResolver`: `any`  } ? [`GraphQLSchemaWithUtils`](Powership.md#graphqlschemawithutils) : `never`

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:35

▸ **createGraphQLSchema**<`Config`\>(`config?`): `Config` extends [`CreateGraphQLObjectOptions`](Powership.md#creategraphqlobjectoptions) ? [`GraphQLSchemaWithUtils`](Powership.md#graphqlschemawithutils) : `never`

#### Type parameters

| Name |
| :------ |
| `Config` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Config` |

#### Returns

`Config` extends [`CreateGraphQLObjectOptions`](Powership.md#creategraphqlobjectoptions) ? [`GraphQLSchemaWithUtils`](Powership.md#graphqlschemawithutils) : `never`

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:38

___

### createModulesProxy

▸ **createModulesProxy**<`ModulesMap`\>(`getModules`): [`Compute`](Powership.TU.md#compute)<[`ModulesProxyResult`](Powership.md#modulesproxyresult)<`ModulesMap`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModulesMap` | extends [`ModulesProxyRecord`](Powership.md#modulesproxyrecord) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getModules` | () => `ModulesMap` |

#### Returns

[`Compute`](Powership.TU.md#compute)<[`ModulesProxyResult`](Powership.md#modulesproxyresult)<`ModulesMap`\>\>

#### Defined in

packages/utils/lib/createModulesProxy.d.ts:18

___

### createObjectType

▸ **createObjectType**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](Powership.md#objectdefinitioninput)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:116

▸ **createObjectType**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](Powership.md#objectdefinitioninput)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:117

___

### createPowershipObject

▸ **createPowershipObject**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](Powership.md#objectdefinitioninput)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:116

▸ **createPowershipObject**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](Powership.md#objectdefinitioninput)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:117

___

### createProxy

▸ **createProxy**<`T`\>(`thunk`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `thunk` | () => `T` |
| `options?` | [`CreateProxyOptions`](Powership.md#createproxyoptions)<`T`\> |

#### Returns

`T`

#### Defined in

packages/utils/lib/createProxy.d.ts:7

___

### createResolver

▸ **createResolver**<`ResultType`, `ArgsType`\>(`config`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](Powership.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve?`: `undefined` ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Powership.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `resolver` | <Returns, Root\>(`handler`: (`root`: `Root`, `args`: [`_ResolverArgs`](Powership.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Powership.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => [`MaybePromise`](Powership.TU.md#maybepromise)<`Returns`\>) => { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Powership.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Powership.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => [`MaybePromise`](Powership.TU.md#maybepromise)<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } |

#### Defined in

packages/schema/lib/Resolver.d.ts:40

▸ **createResolver**<`ResultType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Powership.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => [`MaybePromise`](Powership.TU.md#maybepromise)<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `undefined` ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Powership.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => [`MaybePromise`](Powership.TU.md#maybepromise)<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Powership.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Powership.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => [`MaybePromise`](Powership.TU.md#maybepromise)<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

packages/schema/lib/Resolver.d.ts:49

▸ **createResolver**<`ResultType`, `ArgsType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Powership.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Powership.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => [`MaybePromise`](Powership.TU.md#maybepromise)<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](Powership.md#objectdefinitioninput) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Powership.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Powership.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => [`MaybePromise`](Powership.TU.md#maybepromise)<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Powership.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Powership.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Powership.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => [`MaybePromise`](Powership.TU.md#maybepromise)<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

packages/schema/lib/Resolver.d.ts:58

___

### createResolverFactory

▸ **createResolverFactory**<`Context`\>(): [`CreateResolver`](../interfaces/Powership.CreateResolver.md)<`Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`ResolverContextBase`](Powership.md#resolvercontextbase) |

#### Returns

[`CreateResolver`](../interfaces/Powership.CreateResolver.md)<`Context`\>

#### Defined in

packages/schema/lib/Resolver.d.ts:68

___

### createRouteHandler

▸ **createRouteHandler**<`Path`, `Callback`\>(`path`, `handler`): `Handler`<`undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |
| `Callback` | extends `RouteHandlerCallback`<`Path`, `Callback`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `Path` |
| `handler` | `RouteHandlerCallback`<`Path`\> |

#### Returns

`Handler`<`undefined`\>

#### Defined in

packages/server/lib/createRouteHandler.d.ts:16

▸ **createRouteHandler**<`Path`, `Callback`, `StaticData`\>(`path`, `handler`, `data`): `Handler`<`StaticData`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |
| `Callback` | extends `RouteHandlerCallback`<`Path`, `Callback`\> |
| `StaticData` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `Path` |
| `handler` | `RouteHandlerCallback`<`Path`\> |
| `data` | `StaticData` |

#### Returns

`Handler`<`StaticData`\>

#### Defined in

packages/server/lib/createRouteHandler.d.ts:17

___

### createRouteMatcher

▸ **createRouteMatcher**<`Path`\>(`path`): `RouteMatcher`<`Path`\>

A wrapper around UrlPattern with improved typings

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `Path` | see: https://github.com/snd/url-pattern |

#### Returns

`RouteMatcher`<`Path`\>

#### Defined in

packages/server/lib/routeMatch.d.ts:7

___

### createSchema

▸ **createSchema**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](Powership.md#objectdefinitioninput)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:116

▸ **createSchema**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](Powership.md#objectdefinitioninput)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Powership.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:117

___

### createStore

▸ **createStore**<`Dict`\>(`init?`): [`Store`](../interfaces/Powership.Store.md)<`Dict`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Dict` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | [`ObjectEntries`](Powership.md#objectentries)<`Dict`\> \| [`StoreOptions`](../interfaces/Powership.StoreOptions.md)<`Dict`\> |

#### Returns

[`Store`](../interfaces/Powership.Store.md)<`Dict`\>

#### Defined in

packages/utils/lib/Store.d.ts:72

___

### createType

▸ **createType**<`Definition`\>(`definition`): [`GraphType`](../classes/Powership.GraphType.md)<`Definition`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Definition` \| (`utils`: `PowershipModules`) => `Definition` |

#### Returns

[`GraphType`](../classes/Powership.GraphType.md)<`Definition`\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:117

▸ **createType**<`Definition`\>(`name`, `definition`): [`GraphType`](../classes/Powership.GraphType.md)<`Definition`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Definition` \| (`utils`: `PowershipModules`) => `Definition` |

#### Returns

[`GraphType`](../classes/Powership.GraphType.md)<`Definition`\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:118

___

### customError

▸ **customError**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.details?` | `any` |
| `options.message?` | `string` |
| `options.stackFrom?` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$kind` | `string` |
| `__$name__` | `string` |
| `__originalStack` | `string` |
| `cause?` | `unknown` |
| `errorGroup` | `string` |
| `identify` | (`name`: `string`) => `any` |
| `message` | `string` |
| `name` | `string` |
| `publicErrorMessage` | `string` \| `undefined` |
| `publish` | (`message?`: `string`) => `any` |
| `stack?` | `string` |

#### Defined in

packages/utils/lib/createErrorClass.d.ts:69

___

### dateSerialize

▸ **dateSerialize**(`value`): `Date` \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`Date` \| ``null``

#### Defined in

packages/utils/lib/dateSerialize.d.ts:1

___

### deepFreeze

▸ **deepFreeze**<`T`\>(`object`): [`DeepFreeze`](Powership.md#deepfreeze)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

[`DeepFreeze`](Powership.md#deepfreeze)<`T`\>

#### Defined in

packages/utils/lib/deepFreeze.d.ts:2

___

### defineGetters

▸ **defineGetters**<`O`, `Extensions`\>(`object`, `getters`, `globalOptions?`): [`MergeGetters`](Powership.md#mergegetters)<`O`, `Extensions`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `object` |
| `Extensions` | extends `object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `O` |
| `getters` | { [K in string \| number \| symbol]: Function \| GettersConfig<O, Extensions[K]\> } |
| `globalOptions?` | [`GetterAttributes`](../interfaces/Powership.GetterAttributes.md) |

#### Returns

[`MergeGetters`](Powership.md#mergegetters)<`O`, `Extensions`\>

#### Defined in

packages/utils/lib/getters/defineGetters.d.ts:10

___

### delay

▸ **delay**(`time`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

packages/utils/lib/delay.d.ts:1

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

packages/schema/lib/parseObjectDefinition.d.ts:39

___

### describeConstructor

▸ **describeConstructor**(`value`): [`ConstructorDescription`](Powership.md#constructordescription)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`ConstructorDescription`](Powership.md#constructordescription)

#### Defined in

packages/utils/lib/getTypeName.d.ts:29

___

### describeType

▸ **describeType**(`value`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `hash` | () => `string` |
| `isLocalProxy` | `boolean` |
| `native` | `boolean` |
| `nativeTypeOf` | ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` \| ``"nan"`` \| ``"null"`` \| ``"array"`` \| ``"infinity"`` \| `undefined` |
| `plusString` | `string` |
| `toString` | () => `string` |
| `typeOf` | ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` |
| `typename` | `string` |

#### Defined in

packages/utils/lib/getTypeName.d.ts:31

___

### devAssert

▸ **devAssert**(`message`, `details?`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `details?` | `Record`<`string`, `any`\> |
| `options?` | `Object` |
| `options.depth` | `number` |
| `options.skipStackLines?` | `number` |

#### Returns

`any`

#### Defined in

packages/utils/lib/devAssert.d.ts:1

___

### diff

▸ **diff**(`current`, `next`, `pathToLook?`): [`Difference`](Powership.md#difference)[]

Returns a list of differences between two types

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `any` |
| `next` | `any` |
| `pathToLook?` | `string` \| [`DifferencePath`](Powership.md#differencepath)[] |

#### Returns

[`Difference`](Powership.md#difference)[]

#### Defined in

packages/utils/lib/diff/diff.d.ts:32

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

### encodeNumber

▸ **encodeNumber**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `number` |

#### Returns

`string`

#### Defined in

packages/utils/lib/conust.d.ts:1

___

### ensureArray

▸ **ensureArray**<`T`\>(`input`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` \| `T`[] |

#### Returns

`T`[]

#### Defined in

packages/utils/lib/ensureArray.d.ts:1

___

### entries

▸ **entries**<`O`\>(`init`): [`ObjectEntries`](Powership.md#objectentries)<`O`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `O` |

#### Returns

[`ObjectEntries`](Powership.md#objectentries)<`O`\>

#### Defined in

packages/utils/lib/objectEntries.d.ts:4

___

### escapeCursorChars

▸ **escapeCursorChars**(`init`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:37

___

### escapeStringRegexp

▸ **escapeStringRegexp**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/scapeRegex.d.ts:1

___

### expectedType

▸ **expectedType**<`Input`\>(`input`, `expected`, `optional?`): `Input`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |
| `expected` | `string` \| `string`[] |
| `optional?` | `boolean` \| ``"truthy"`` |

#### Returns

`Input`

#### Defined in

packages/utils/lib/expectedType.d.ts:10

___

### extendObjectDefinition

▸ **extendObjectDefinition**<`Input`\>(`input`): [`ExtendObjectDefinition`](../interfaces/Powership.ExtendObjectDefinition.md)<`Input`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

#### Returns

[`ExtendObjectDefinition`](../interfaces/Powership.ExtendObjectDefinition.md)<`Input`, `Input`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:35

___

### extendType

▸ **extendType**<`Input`\>(`input`): [`ExtendType`](../interfaces/Powership.ExtendType.md)<`Input`\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

#### Returns

[`ExtendType`](../interfaces/Powership.ExtendType.md)<`Input`\>

#### Defined in

packages/schema/lib/extendType.d.ts:20

___

### fieldToMock

▸ **fieldToMock**(`fieldInput`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldInput` | [`ObjectFieldInput`](Powership.md#objectfieldinput) |
| `options?` | [`ObjectMockOptions`](Powership.md#objectmockoptions) |

#### Returns

`any`

#### Defined in

packages/schema/lib/mockObject.d.ts:13

___

### filterNull

▸ **filterNull**<`T`\>(`input`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `undefined` \| ``null`` \| (`undefined` \| ``null`` \| `T`)[] |

#### Returns

`T`[]

#### Defined in

packages/utils/lib/filterNull.d.ts:1

___

### fnv1a

▸ **fnv1a**(`string`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`number`

#### Defined in

packages/utils/lib/fvn1a.d.ts:1

___

### formatGraphQL

▸ **formatGraphQL**(`schemaSdl`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaSdl` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/formatGraphQL.d.ts:1

___

### formatWithPrettier

▸ **formatWithPrettier**(`source`, `options?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `options?` | `Options` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/utils/lib/formatWithPrettier.d.ts:3

___

### freeThreadID

▸ **freeThreadID**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

packages/utils/lib/threadId.d.ts:3

___

### freeze

▸ **freeze**<`T`\>(`object`): [`DeepFreeze`](Powership.md#deepfreeze)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

[`DeepFreeze`](Powership.md#deepfreeze)<`T`\>

#### Defined in

packages/utils/lib/deepFreeze.d.ts:2

___

### getDocumentIndexFields

▸ **getDocumentIndexFields**<`Document`\>(`doc`, `indexConfig`): [`ParsedDocumentIndexes`](Powership.md#parseddocumentindexes)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Document` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Document` |
| `indexConfig` | [`AnyCollectionIndexConfig`](Powership.md#anycollectionindexconfig) |

#### Returns

[`ParsedDocumentIndexes`](Powership.md#parseddocumentindexes)

#### Defined in

packages/transporter/lib/getDocumentIndexFields.d.ts:2

___

### getGlobalLogLevel

▸ **getGlobalLogLevel**(): [`LogLevel`](Powership.md#loglevel)

#### Returns

[`LogLevel`](Powership.md#loglevel)

#### Defined in

packages/utils/lib/logLevels.d.ts:27

___

### getKeys

▸ **getKeys**<`T`\>(`obj`): `Extract`<keyof `T`, `string`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`Extract`<keyof `T`, `string`\>[]

#### Defined in

packages/utils/lib/getKeys.d.ts:2

___

### getLogLevelsRecord

▸ **getLogLevelsRecord**(`env?`): `Set`<[`LogLevelName`](Powership.md#loglevelname)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `env?` | [`LogLevel`](Powership.md#loglevel) |

#### Returns

`Set`<[`LogLevelName`](Powership.md#loglevelname)\>

#### Defined in

packages/utils/lib/logLevels.d.ts:29

___

### getNativeConstructorType

▸ **getNativeConstructorType**(`input`): [`NATIVE_TYPE_NAME`](Powership.md#native_type_name) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`NATIVE_TYPE_NAME`](Powership.md#native_type_name) \| `undefined`

#### Defined in

packages/utils/lib/getTypeName.d.ts:21

___

### getNativeTypeOf

▸ **getNativeTypeOf**(`input`): [`NATIVE_TYPE_OF`](Powership.md#native_type_of) \| `undefined`

Returns a string representation of the constructor of the given value if a simple native type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | {any} The value to get the constructor name of. |

#### Returns

[`NATIVE_TYPE_OF`](Powership.md#native_type_of) \| `undefined`

#### Defined in

packages/utils/lib/getTypeName.d.ts:27

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

packages/schema/lib/fields/MetaFieldField.d.ts:23

▸ **getObjectDefinitionId**(`definition`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Record`<`string`, `any`\> |

#### Returns

`string`

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:24

___

### getObjectDefinitionMetaField

▸ **getObjectDefinitionMetaField**(`input`): [`MetaField`](../classes/Powership.MetaField.md)[``"asFinalFieldDef"``] \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Record`<`string`, `any`\> |

#### Returns

[`MetaField`](../classes/Powership.MetaField.md)[``"asFinalFieldDef"``] \| `undefined`

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:22

___

### getParsedIndexKeys

▸ **getParsedIndexKeys**(`indexConfig`): [`ParsedIndexKey`](Powership.md#parsedindexkey)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | [`AnyCollectionIndexConfig`](Powership.md#anycollectionindexconfig) |

#### Returns

[`ParsedIndexKey`](Powership.md#parsedindexkey)[]

#### Defined in

packages/transporter/lib/createDocumentIndexBasedFilters.d.ts:10

___

### getResolver

▸ **getResolver**(`name`): [`AnyResolver`](Powership.md#anyresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`AnyResolver`](Powership.md#anyresolver)

#### Defined in

packages/schema/lib/Resolver.d.ts:37

___

### getStack

▸ **getStack**(`parent?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | `any` |

#### Returns

`string`

#### Defined in

packages/utils/lib/stackTrace.d.ts:1

___

### getType

▸ **getType**(`name`): [`GraphTypeLike`](../interfaces/Powership.GraphTypeLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GraphTypeLike`](../interfaces/Powership.GraphTypeLike.md)

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:119

___

### getTypeName

▸ **getTypeName**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

`string`

#### Defined in

packages/utils/lib/getTypeName.d.ts:1

___

### hasProperty

▸ **hasProperty**<`P`\>(`obj`, `prop`): obj is { [K in string]: unknown }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `prop` | `P` |

#### Returns

obj is { [K in string]: unknown }

#### Defined in

packages/utils/lib/getKeys.d.ts:4

___

### hashName

▸ **hashName**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/hashString.d.ts:2

___

### hashObject

▸ **hashObject**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

packages/utils/lib/hashObject.d.ts:1

___

### hashString

▸ **hashString**(`string`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`number`

#### Defined in

packages/utils/lib/hashString.d.ts:1

___

### implementObject

▸ **implementObject**<`Def`, `Parents`\>(`name`, `definition`, `...parents`): [`ImplementObject`](Powership.md#implementobject)<[`ObjectType`](../classes/Powership.ObjectType.md)<`Def`\>, `Parents`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectDefinitionInput`](Powership.md#objectdefinitioninput) |
| `Parents` | extends readonly [`ObjectLike`](../interfaces/Powership.ObjectLike.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Readonly`<`Def`\> |
| `...parents` | `Parents` |

#### Returns

[`ImplementObject`](Powership.md#implementobject)<[`ObjectType`](../classes/Powership.ObjectType.md)<`Def`\>, `Parents`\>

#### Defined in

packages/schema/lib/implementObject.d.ts:8

___

### indexToCursor

▸ **indexToCursor**(`init`, `options`): [`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Object` |
| `init.PK` | `string` |
| `init.SK` | `undefined` \| `string` |
| `init.entity` | `string` |
| `init.name` | `string` |
| `init.parentPrefix` | `undefined` \| `string` |
| `init.relatedTo` | `undefined` \| `string` |
| `options` | [`ParseCursorOptions`](../interfaces/Powership.ParseCursorOptions.md) |

#### Returns

[`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md)

#### Defined in

packages/utils/lib/IndexCursor/parseIndexCursor.d.ts:9

___

### inspect

▸ **inspect**(`arg`, `depth?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |
| `depth?` | `number` |

#### Returns

`string`

#### Defined in

packages/utils/lib/nodeLogger.d.ts:45

___

### inspectObject

▸ **inspectObject**(`inputObject`, `options?`, `appendDetailIndex?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputObject` | `any` |
| `options?` | `InspectObjectDetails` |
| `appendDetailIndex?` | `boolean` |

#### Returns

`string`

#### Defined in

packages/utils/lib/inspectObject.d.ts:8

___

### invariant

▸ **invariant**(`truthy`, `errorMessage?`, `details?`): asserts truthy

#### Parameters

| Name | Type |
| :------ | :------ |
| `truthy` | `any` |
| `errorMessage?` | `string` \| `Error` |
| `details?` | `any` |

#### Returns

asserts truthy

#### Defined in

packages/utils/lib/invariant.d.ts:44

___

### invariantType

▸ **invariantType**(`object`, `type`, `extraInfo?`, `depth?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `object` |
| `type` | `string` \| `string`[] |
| `extraInfo?` | `any` |
| `depth?` | `number` |

#### Returns

`boolean`

#### Defined in

packages/utils/lib/invariant.d.ts:45

___

### isBrowser

▸ **isBrowser**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/utils/lib/isBrowser.d.ts:1

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

### isErrorWithStack

▸ **isErrorWithStack**(`t`): t is ErrorWithStack

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

t is ErrorWithStack

#### Defined in

packages/utils/lib/invariant.d.ts:39

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

packages/schema/lib/fields/FieldTypeErrors.d.ts:9

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

packages/schema/lib/fields/FieldType.d.ts:68

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

### isLogLevel

▸ **isLogLevel**(`value`): value is "error" \| "emerg" \| "alert" \| "crit" \| "warning" \| "notice" \| "info" \| "debug" \| "none"

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is "error" \| "emerg" \| "alert" \| "crit" \| "warning" \| "notice" \| "info" \| "debug" \| "none"

#### Defined in

packages/utils/lib/logLevels.d.ts:26

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

packages/schema/lib/fields/MetaFieldField.d.ts:21

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

packages/schema/lib/fields/MetaFieldField.d.ts:20

___

### isObject

▸ **isObject**(`value`): value is AnyRecord

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is AnyRecord

#### Defined in

packages/utils/lib/isObject.d.ts:2

___

### isObjectAsTypeDefinition

▸ **isObjectAsTypeDefinition**(`input`): input is FieldDefinitionWithType<ObjectType<any, Object\>\>

Object as field['type'] is deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is FieldDefinitionWithType<ObjectType<any, Object\>\>

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:33

___

### isObjectType

▸ **isObjectType**(`input`): input is ObjectType<any, Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is ObjectType<any, Object\>

#### Defined in

packages/schema/lib/objectInferenceUtils.d.ts:5

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

### isObjectWithoutPrototype

▸ **isObjectWithoutPrototype**(`value`): value is Record<string, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Record<string, any\>

#### Defined in

packages/utils/lib/getTypeName.d.ts:28

___

### isPlainObject

▸ **isPlainObject**(`value`): value is AnyRecord

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is AnyRecord

#### Defined in

packages/utils/lib/isObject.d.ts:3

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

### isProduction

▸ **isProduction**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/utils/lib/env.d.ts:1

___

### isUFO

▸ **isUFO**(`input`): input is UFO<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is UFO<unknown\>

#### Defined in

packages/utils/lib/ufo.d.ts:13

___

### joinCursorPartsWithTrailingSeparator

▸ **joinCursorPartsWithTrailingSeparator**(`parts`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parts` | (``null`` \| `string`)[] |

#### Returns

`string`

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:47

___

### joinIndexCursor

▸ **joinIndexCursor**(`init`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`InitIndexCursor`](../interfaces/Powership.InitIndexCursor.md) |
| `options` | [`ParseCursorOptions`](../interfaces/Powership.ParseCursorOptions.md) |

#### Returns

`string`

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:34

___

### joinKeyParts

▸ **joinKeyParts**(`init`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `string`[] |
| `options` | [`JoinKeyPartsOptions`](../interfaces/Powership.JoinKeyPartsOptions.md) |

#### Returns

`string`

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:38

___

### joinPKSK

▸ **joinPKSK**(`init`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Object` |
| `init.PK` | `string`[] |
| `init.SK` | ``null`` \| `string`[] |
| `options` | [`JoinKeyPartsOptions`](../interfaces/Powership.JoinKeyPartsOptions.md) |

#### Returns

`string`

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:39

___

### joinPathsCamelCase

▸ **joinPathsCamelCase**(`...parts`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parts` | (`undefined` \| ``null`` \| `string`)[] |

#### Returns

`string`

#### Defined in

packages/utils/lib/stringCase.d.ts:3

___

### joinPathsSnakeCase

▸ **joinPathsSnakeCase**(`...parts`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parts` | (`undefined` \| ``null`` \| `string`)[] |

#### Returns

`string`

#### Defined in

packages/utils/lib/stringCase.d.ts:4

___

### jsonToTypescript

▸ **jsonToTypescript**(`schema`, `name`, `options?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `JSONSchema4` |
| `name` | `string` |
| `options?` | `Partial`<`Options`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/utils/lib/jsonToTypescript.d.ts:5

___

### keyBy

▸ **keyBy**<`T`, `GetKey`\>(`arr`, `getKey`, `onDuplicate?`): `Record`<`ReturnType`<`GetKey`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`any`, `any`\> |
| `GetKey` | extends (`current`: `T`) => `T`[keyof `T`] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `getKey` | `GetKey` |
| `onDuplicate?` | <K\>(`key`: `K`, `value`: `T`[`K`]) => `any` |

#### Returns

`Record`<`ReturnType`<`GetKey`\>, `T`\>

#### Defined in

packages/utils/lib/keyBy.d.ts:1

___

### keys

▸ **keys**<`O`\>(`init`): `Extract`<keyof `O`, `string`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `O` |

#### Returns

`Extract`<keyof `O`, `string`\>[]

#### Defined in

packages/utils/lib/objectEntries.d.ts:5

___

### mapper

▸ **mapper**<`Item`\>(`items`): [`Mapper`](../interfaces/Powership.Mapper.md)<`Item`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Item` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | (`undefined` \| ``null`` \| `Item`)[] |

#### Returns

[`Mapper`](../interfaces/Powership.Mapper.md)<`Item`\>

#### Defined in

packages/utils/lib/mapper.d.ts:7

___

### memoize

▸ **memoize**(`...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

packages/utils/lib/memoize.d.ts:1

___

### merge

▸ **merge**<`Values`\>(`...values`): [`MergeAll`](Powership.md#mergeall)<`Values`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends `object`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `Values` |

#### Returns

[`MergeAll`](Powership.md#mergeall)<`Values`\>

#### Defined in

packages/utils/lib/merge.d.ts:2

___

### mergeIndexRelationsResult

▸ **mergeIndexRelationsResult**(`input`): [`DocumentBase`](Powership.md#documentbase)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.indexConfig` | [`AnyCollectionIndexConfig`](Powership.md#anycollectionindexconfig) |
| `input.items` | [`DocumentBase`](Powership.md#documentbase)[] |

#### Returns

[`DocumentBase`](Powership.md#documentbase)[]

#### Defined in

packages/transporter/lib/mergeIndexRelationsResult.d.ts:3

___

### mountGraphID

▸ **mountGraphID**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `cursor` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/IndexCursor/parseFilterCursor.d.ts:3

___

### ms

▸ **ms**(`value`, `options?`): `number`

Parse or format the given value.

**`Throws`**

Error if `value` is not a non-empty string or a number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`StringValue`](Powership.md#stringvalue) | The string or number to convert |
| `options?` | `Options` | Options for the conversion |

#### Returns

`number`

#### Defined in

packages/utils/lib/ms.d.ts:17

▸ **ms**(`value`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

packages/utils/lib/ms.d.ts:18

___

### nonNullValues

▸ **nonNullValues**<`T`\>(`object`, `customMessage?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | { [key in string \| number \| symbol]: undefined \| null \| T[key] } |
| `customMessage?` | `string` |

#### Returns

`T`

#### Defined in

packages/utils/lib/invariant.d.ts:2

___

### notNull

▸ **notNull**<`T`\>(`input`, `appendErrorMessage?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T` |
| `appendErrorMessage?` | `string` \| `Error` |

#### Returns

`T`

#### Defined in

packages/utils/lib/invariant.d.ts:5

___

### objectEntries

▸ **objectEntries**<`T`\>(`obj`): [`Entries`](Powership.TU.md#entries)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

[`Entries`](Powership.TU.md#entries)<`T`\>

#### Defined in

packages/utils/lib/getKeys.d.ts:3

___

### objectMock

▸ **objectMock**<`T`\>(`definition`, `options?`): [`Infer`](Powership.md#infer)<{ `object`: `T`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |
| `options?` | [`ObjectMockOptions`](Powership.md#objectmockoptions) |

#### Returns

[`Infer`](Powership.md#infer)<{ `object`: `T`  }\>

#### Defined in

packages/schema/lib/mockObject.d.ts:8

___

### override

▸ **override**<`T`, `O`\>(`input`, `overrider`): [`Override`](Powership.md#override)<`T`, `O`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `O` | `O` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |
| `overrider` | `O` |

#### Returns

[`Override`](Powership.md#override)<`T`, `O`\>

#### Defined in

packages/utils/lib/override.d.ts:2

___

### parseAggioAttributeFilters

▸ **parseAggioAttributeFilters**(`attFilter`): `Query`<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `attFilter` | [`FilterRecord`](Powership.md#filterrecord)<[`DocumentBase`](Powership.md#documentbase)\> |

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
| `operations` | ({ `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$addToSet"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$append"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Record`<`string`, `undefined` \| `number`\>][] ; `operator`: ``"$inc"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$prepend"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| {}][] ; `operator`: ``"$pull"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| [`MaybeArray`](Powership.TU.md#maybearray)<`string`\>][] ; `operator`: ``"$remove"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$set"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$setIfNull"`` ; `valueConstructorName`: `string`  } \| { `entries`: [`string`, `undefined` \| `Readonly`<{} & {} & {}\>][] ; `operator`: ``"$setOnInsert"`` ; `valueConstructorName`: `string`  })[] |

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
| `T` | extends [`AnyCollectionIndexConfig`](Powership.md#anycollectionindexconfig) |

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

▸ **parseEntityIndexFields**(`indexConfig`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexConfig` | [`AnyCollectionIndexConfig`](Powership.md#anycollectionindexconfig) |

#### Returns

`any`

#### Defined in

packages/transporter/lib/parseEntityIndexFields.d.ts:2

___

### parseField

▸ **parseField**(`definition`): [`FinalFieldDefinition`](Powership.md#finalfielddefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`ObjectFieldInput`](Powership.md#objectfieldinput) |

#### Returns

[`FinalFieldDefinition`](Powership.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:10

___

### parseFieldDefinitionConfig

▸ **parseFieldDefinitionConfig**<`T`, `Options`\>(`definition`, `options?`): [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Powership.md#fieldasstring) \| [`FinalFieldDefinition`](Powership.md#finalfielddefinition) \| [`ShortenFinalFieldDefinition`](Powership.md#shortenfinalfielddefinition) : [`FinalFieldDefinition`](Powership.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) |
| `Options` | extends [`ParseFieldOptions`](Powership.md#parsefieldoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |
| `options?` | `Options` |

#### Returns

[`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Powership.md#fieldasstring) \| [`FinalFieldDefinition`](Powership.md#finalfielddefinition) \| [`ShortenFinalFieldDefinition`](Powership.md#shortenfinalfielddefinition) : [`FinalFieldDefinition`](Powership.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:11

___

### parseFilterCursor

▸ **parseFilterCursor**(`initFullID`): [`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md) \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `initFullID` | `string` |

#### Returns

[`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md) \| ``null``

#### Defined in

packages/utils/lib/IndexCursor/parseFilterCursor.d.ts:6

___

### parseFilterIndexFilterParts

▸ **parseFilterIndexFilterParts**(`filter`, `indexConfig`): { `isFinalParsedSearch`: ``false`` ; `parts`: [`ParsedIndexFilterPart`](Powership.md#parsedindexfilterpart)[]  } \| { `cursor`: [`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md) ; `isFinalParsedSearch`: ``true``  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Record`<`string`, `any`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Powership.md#anycollectionindexconfig) |

#### Returns

{ `isFinalParsedSearch`: ``false`` ; `parts`: [`ParsedIndexFilterPart`](Powership.md#parsedindexfilterpart)[]  } \| { `cursor`: [`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md) ; `isFinalParsedSearch`: ``true``  }

#### Defined in

packages/transporter/lib/parseFilterIndexFilterParts.d.ts:12

___

### parseFlattenFieldDefinition

▸ **parseFlattenFieldDefinition**(`input`, `options?`): [`FinalFieldDefinition`](Powership.md#finalfielddefinition) \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | [`ParseFieldOptions`](Powership.md#parsefieldoptions) |

#### Returns

[`FinalFieldDefinition`](Powership.md#finalfielddefinition) \| ``false``

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:34

___

### parseIndexCursor

▸ **parseIndexCursor**(`init`, `options`): [`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `string` \| `string`[] \| [`InitIndexCursor`](../interfaces/Powership.InitIndexCursor.md) |
| `options` | [`ParseCursorOptions`](../interfaces/Powership.ParseCursorOptions.md) |

#### Returns

[`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md)

#### Defined in

packages/utils/lib/IndexCursor/parseIndexCursor.d.ts:4

___

### parseIndexFieldName

▸ **parseIndexFieldName**(`prefix`, `suffix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `suffix` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/IndexCursor/parseIndexFieldName.d.ts:1

___

### parseObjectDefinition

▸ **parseObjectDefinition**(`input`, `options?`): `ParseResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Record`<`string`, `any`\> |
| `options?` | `Omit`<[`ParseFieldOptions`](Powership.md#parsefieldoptions), ``"returnInstance"``\> |

#### Returns

`ParseResult`

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:28

___

### parseObjectField

▸ **parseObjectField**<`T`, `Options`\>(`fieldName`, `definition`, `options`): [`Options`[``"returnInstance"``]] extends [``true``] ? [`TAnyFieldType`](Powership.md#tanyfieldtype) : [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Powership.md#fieldasstring) : [`FinalFieldDefinition`](Powership.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) |
| `Options` | extends [`ParseFieldOptions`](Powership.md#parsefieldoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |
| `options` | `Options` |

#### Returns

[`Options`[``"returnInstance"``]] extends [``true``] ? [`TAnyFieldType`](Powership.md#tanyfieldtype) : [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Powership.md#fieldasstring) : [`FinalFieldDefinition`](Powership.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:8

▸ **parseObjectField**<`T`\>(`fieldName`, `definition`): [`FinalFieldDefinition`](Powership.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Powership.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |

#### Returns

[`FinalFieldDefinition`](Powership.md#finalfielddefinition)

#### Defined in

packages/schema/lib/parseObjectDefinition.d.ts:9

___

### parseOneIndexDocumentFields

▸ **parseOneIndexDocumentFields**(`parsedIndex`): [`DocumentIndexFieldsParsed`](../interfaces/Powership.DocumentIndexFieldsParsed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsedIndex` | [`ParsedIndexCursor`](../interfaces/Powership.ParsedIndexCursor.md) |

#### Returns

[`DocumentIndexFieldsParsed`](../interfaces/Powership.DocumentIndexFieldsParsed.md)

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:477

___

### parsePath

▸ **parsePath**(`init`): [`PathParsed`](Powership.md#pathparsed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `string` \| (`string` \| `number`)[] |

#### Returns

[`PathParsed`](Powership.md#pathparsed)

#### Defined in

packages/utils/lib/parsePath.d.ts:11

___

### parseUpdateExpression

▸ **parseUpdateExpression**<`Schema`\>(`updateExpression`, `indexConfig`): [`ParsedUpdateExpression`](Powership.md#parsedupdateexpression)<`Schema`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Schema` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateExpression` | [`UpdateExpression`](Powership.md#updateexpression)<`Schema`\> |
| `indexConfig` | [`AnyCollectionIndexConfig`](Powership.md#anycollectionindexconfig) |

#### Returns

[`ParsedUpdateExpression`](Powership.md#parsedupdateexpression)<`Schema`\>[]

#### Defined in

packages/transporter/lib/parseUpdateExpression.d.ts:9

___

### parseValidationError

▸ **parseValidationError**(`input`, `customMessage`, `originalError`): `Error` & { `[K: string]`: `any`;  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `customMessage` | `undefined` \| [`ValidationCustomMessage`](Powership.md#validationcustommessage) |
| `originalError` | `string` \| `Error` & { `[K: string]`: `any`;  } |

#### Returns

`Error` & { `[K: string]`: `any`;  }

#### Defined in

packages/schema/lib/applyValidator.d.ts:13

___

### pick

▸ **pick**<`O`, `P`\>(`object`, `path`): [`IsKnown`](Powership.TU.md#isknown)<`O`\> extends ``1`` ? `P` extends `string` ? [`PathType`](Powership.TU.md#pathtype)<`O`, `P`\> : `any` : `any`

Pick one object property by path

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | `O` |
| `P` | extends `string` \| (`string` \| `number`)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `O` |
| `path` | `P` |

#### Returns

[`IsKnown`](Powership.TU.md#isknown)<`O`\> extends ``1`` ? `P` extends `string` ? [`PathType`](Powership.TU.md#pathtype)<`O`, `P`\> : `any` : `any`

#### Defined in

packages/utils/lib/pick.d.ts:7

___

### pickIndexKeyPartsFromDocument

▸ **pickIndexKeyPartsFromDocument**(`param`): [`ParsedIndexPart`](Powership.md#parsedindexpart)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.acceptNullable` | `boolean` |
| `param.destination` | ``"filter"`` \| ``"document"`` |
| `param.doc` | `Record`<`string`, `any`\> |
| `param.indexField` | `string` |
| `param.indexPartKind` | [`IndexPartKind`](Powership.md#indexpartkind) |
| `param.indexParts` | readonly [`IndexKeyHash`](Powership.md#indexkeyhash)<`string`\>[] |

#### Returns

[`ParsedIndexPart`](Powership.md#parsedindexpart)

#### Defined in

packages/transporter/lib/pickIndexKeyPartsFromDocument.d.ts:2

___

### pluralize

▸ **pluralize**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/pluralize.d.ts:1

___

### project

▸ **project**<`T`, `Path`\>(`value`, `paths`): `T` \| {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Path` | [`Paths`](Powership.TU.md#paths)<`T`, ``10``\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `paths` | `ArrayLike`<`Path`\> \| ``"*"`` |

#### Returns

`T` \| {}

#### Defined in

packages/utils/lib/project.d.ts:2

___

### proxyRealValue

▸ **proxyRealValue**<`T`\>(`obj`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`T`

#### Defined in

packages/utils/lib/createProxy.d.ts:6

___

### pushTrailingIndexSep

▸ **pushTrailingIndexSep**(`init`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:50

___

### randomInt

▸ **randomInt**(`lower?`, `upper?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lower?` | `number` |
| `upper?` | `number` |

#### Returns

`number`

#### Defined in

packages/utils/lib/randomInt.d.ts:1

___

### randomItem

▸ **randomItem**<`T`\>(`...list`): `T` extends [`unknown`] ? `T`[``0``] extends infer R ? `R` extends `any`[] \| `ReadonlyArray`<`any`\> ? `R`[`number`] : `T`[`number`] : `T`[`number`] : `T`[`number`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...list` | `Readonly`<`T`\> |

#### Returns

`T` extends [`unknown`] ? `T`[``0``] extends infer R ? `R` extends `any`[] \| `ReadonlyArray`<`any`\> ? `R`[`number`] : `T`[`number`] : `T`[`number`] : `T`[`number`]

#### Defined in

packages/utils/lib/randomItem.d.ts:1

___

### randomName

▸ **randomName**(): `string`

#### Returns

`string`

#### Defined in

packages/utils/lib/randomItem.d.ts:2

___

### reduceObject

▸ **reduceObject**<`Result`, `O`\>(`items`, `reducer`): `Result`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Result` | `Result` |
| `O` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `O`[] |
| `reducer` | (`object`: `O`) => `Partial`<`Result`\> |

#### Returns

`Result`

#### Defined in

packages/utils/lib/reduceObject.d.ts:1

___

### registerEntity

▸ **registerEntity**(`entity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`AnyEntity`](Powership.md#anyentity) |

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
| `params` | [`ResolversToTypeScriptOptions`](Powership.md#resolverstotypescriptoptions) |

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
| `params` | [`ResolversToTypeScriptOptions`](Powership.md#resolverstotypescriptoptions) |

#### Returns

`Promise`<{ `code`: `string` ; `lines`: { `args`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `code`: `string` ; `entryName`: `string` ; `inputName`: `any` ; `payload`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `payloadName`: `any` ; `resolver`: { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField` ; `astNode?`: `Maybe` ; `deprecationReason?`: `Maybe` ; `description?`: `Maybe` ; `extensions?`: `Maybe` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `subscribe?`: `GraphQLFieldResolver` ; `type`: `any` ; `typeDef`: `any`  }  }[]  }\>

#### Defined in

packages/schema/lib/createGraphQLSchema.d.ts:44

___

### setByPath

▸ **setByPath**<`T`\>(`obj`, `path`, `value`, `customizer?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `path` | `string` |
| `value` | `any` |
| `customizer?` | (`nsValue`: `any`, `key`: `string`, `nsObject`: `T`) => `any` |

#### Returns

`T`

#### Defined in

packages/utils/lib/setByPath.d.ts:1

___

### setGlobalLogLevel

▸ **setGlobalLogLevel**(`level`): [`LogLevel`](Powership.md#loglevel)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](Powership.md#loglevel) |

#### Returns

[`LogLevel`](Powership.md#loglevel)

#### Defined in

packages/utils/lib/logLevels.d.ts:28

___

### setPrettier

▸ **setPrettier**<`Prettier`\>(`prettier`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Prettier` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prettier` | `Prettier` |

#### Returns

`void`

#### Defined in

packages/utils/lib/formatWithPrettier.d.ts:9

___

### simpleObjectClone

▸ **simpleObjectClone**<`T`\>(`input`, `options?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |
| `options?` | `Object` |
| `options.sort` | `boolean` |

#### Returns

`T`

#### Defined in

packages/utils/lib/simpleObjectClone.d.ts:1

___

### simpleObjectHash

▸ **simpleObjectHash**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

packages/utils/lib/simpleObjectHash.d.ts:1

___

### sortObject

▸ **sortObject**<`O`\>(`object`, `seen?`): `O`

#### Type parameters

| Name |
| :------ |
| `O` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `O` |
| `seen?` | `WeakMap`<`object`, `any`\> |

#### Returns

`O`

#### Defined in

packages/utils/lib/sortObject.d.ts:1

___

### splitCursorParts

▸ **splitCursorParts**(`init`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `string` |

#### Returns

`string`[]

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:48

___

### stringHash

▸ **stringHash**(`string`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`number`

#### Defined in

packages/utils/lib/hashString.d.ts:1

___

### stringify

▸ **stringify**(`value`, `options?`): `string` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | [`StringifyOptions`](Powership.md#stringifyoptions) |

#### Returns

`string` \| `undefined`

#### Defined in

packages/utils/lib/BJSON.d.ts:55

___

### stripTrailingIndexSep

▸ **stripTrailingIndexSep**(`init`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:49

___

### textToBase64

▸ **textToBase64**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/textToBase64.d.ts:1

___

### tuple

▸ **tuple**<`T`\>(`...args`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

#### Returns

`T`

#### Defined in

packages/utils/lib/typings/index.d.ts:6

___

### tupleEnum

▸ **tupleEnum**<`T`\>(`...values`): { readonly [K in string]: K } & `T`[`number`] extends ``"list"`` ? { `__list`: `any`[`any`][]  } : { `list`: `T`[`number`][]  } & `T`[`number`] extends ``"enum"`` ? { `__enum`: `any`[`any`]  } : { `enum`: `T`[`number`]  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `T` |

#### Returns

{ readonly [K in string]: K } & `T`[`number`] extends ``"list"`` ? { `__list`: `any`[`any`][]  } : { `list`: `T`[`number`][]  } & `T`[`number`] extends ``"enum"`` ? { `__enum`: `any`[`any`]  } : { `enum`: `T`[`number`]  }

#### Defined in

packages/utils/lib/typings/index.d.ts:14

___

### tupleNum

▸ **tupleNum**<`T`\>(`...args`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

#### Returns

`T`

#### Defined in

packages/utils/lib/typings/index.d.ts:13

___

### ufo

▸ **ufo**<`V`\>(`current`): [`UFO`](../interfaces/Powership.UFO-1.md)<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `V` |

#### Returns

[`UFO`](../interfaces/Powership.UFO-1.md)<`V`\>

#### Defined in

packages/utils/lib/ufo.d.ts:7

___

### ufos

▸ **ufos**<`V`\>(`current`): [`UFO`](../interfaces/Powership.UFO-1.md)<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `V` |

#### Returns

[`UFO`](../interfaces/Powership.UFO-1.md)<`V`\>

#### Defined in

packages/utils/lib/ufo.d.ts:7

___

### ulid

▸ **ulid**(`seedTime?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `seedTime?` | `number` |

#### Returns

`string`

#### Defined in

packages/utils/lib/ulid.d.ts:1

___

### uniq

▸ **uniq**<`T`\>(`array`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `undefined` \| ``null`` \| `T`[] |

#### Returns

`T`[]

#### Defined in

packages/utils/lib/uniq.d.ts:2

___

### uniqBy

▸ **uniqBy**<`T`\>(`array`, `iteratee`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `undefined` \| ``null`` \| `List`<`T`\> |
| `iteratee` | `ValueIteratee`<`T`\> |

#### Returns

`T`[]

#### Defined in

packages/utils/lib/uniq.d.ts:3

___

### upperFirst

▸ **upperFirst**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

packages/utils/lib/upperFirst.d.ts:1

___

### useProcess

▸ **useProcess**(): `Partial`<typeof `process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Returns

`Partial`<typeof `process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Defined in

packages/utils/lib/useProcess.d.ts:3

___

### values

▸ **values**<`O`\>(`init`): `O`[keyof `O`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `O` |

#### Returns

`O`[keyof `O`][]

#### Defined in

packages/utils/lib/objectEntries.d.ts:6

___

### wrapError

▸ **wrapError**<`T`\>(`callback`, `parent?`, `overrideError?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `T` |
| `parent?` | `any` |
| `overrideError?` | <Err\>(`error`: `Err`) => `void` \| [`ErrorWithStack`](../interfaces/Powership.ErrorWithStack.md) |

#### Returns

`T`

#### Defined in

packages/utils/lib/invariant.d.ts:37
