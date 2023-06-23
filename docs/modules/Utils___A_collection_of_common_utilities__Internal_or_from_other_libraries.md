[Powership](../README.md) / [Modules](../modules.md) / Utils - A collection of common utilities. Internal or from other libraries

# Module: Utils - A collection of common utilities. Internal or from other libraries

## Table of contents

### References

- [T](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#t)
- [camelCase](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#camelcase)

### Namespaces

- [TU](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md)
- [formatWithPrettier](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.formatWithPrettier.md)
- [ufo](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ufo.md)

### Classes

- [BJSONConstructor](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.BJSONConstructor.md)
- [InvalidExpectedTruthyError](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InvalidExpectedTruthyError.md)
- [InvalidExpectedTypeError](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InvalidExpectedTypeError.md)
- [Logger](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md)
- [MicroState](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MicroState.md)
- [RuntimeError](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RuntimeError.md)
- [Serializer](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md)
- [StrictMap](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMap.md)

### Interfaces

- [AppConfigInterface](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.AppConfigInterface.md)
- [ErrorWithStack](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ErrorWithStack.md)
- [GetterAttributes](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md)
- [GettersConfig](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GettersConfig.md)
- [GroupByOptions](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GroupByOptions.md)
- [IAppConfig](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md)
- [InitIndexCursor](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InitIndexCursor.md)
- [InitIndexCursorWithParent](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InitIndexCursorWithParent.md)
- [JoinKeyPartsOptions](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.JoinKeyPartsOptions.md)
- [LoggerOptions](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.LoggerOptions.md)
- [Mapper](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Mapper.md)
- [OnChange](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.OnChange.md)
- [PackageJson](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md)
- [ParseCursorOptions](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParseCursorOptions.md)
- [ParsedIndexCursor](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParsedIndexCursor.md)
- [SerializableList](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SerializableList.md)
- [Store](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md)
- [StoreOptions](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StoreOptions.md)
- [StrictMapOptions](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StrictMapOptions.md)
- [Stringifiable](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Stringifiable.md)
- [SubscriptionContext](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.SubscriptionContext.md)
- [UFO](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UFO-1.md)
- [UseMicroState](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UseMicroState.md)

### Type Aliases

- [A\_Z](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#a_z)
- [AnyArray](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#anyarray)
- [AnyFunction](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#anyfunction)
- [AnyList](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#anylist)
- [AnyRecord](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#anyrecord)
- [ArrayKeys](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#arraykeys)
- [ArrayType](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#arraytype)
- [As](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#as)
- [Assertable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#assertable)
- [BinAny](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#binany)
- [BinKnown](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#binknown)
- [Cast](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#cast)
- [Compute](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#compute)
- [ConstructorDescription](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#constructordescription)
- [CreateProxyOptions](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#createproxyoptions)
- [DeepArrayKeys](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#deeparraykeys)
- [DeepFreeze](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#deepfreeze)
- [DeepWritable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#deepwritable)
- [Difference](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#difference)
- [DifferenceAction](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#differenceaction)
- [DifferencePath](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#differencepath)
- [Entries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#entries)
- [ErrorClassCreatorOptions](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#errorclasscreatoroptions)
- [EventMetadataBase](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase)
- [EventMetadataObjectBase](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadataobjectbase)
- [ForceString](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#forcestring)
- [GetFieldByDotNotation](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getfieldbydotnotation)
- [GetFieldByDotPath](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getfieldbydotpath)
- [Hashable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#hashable)
- [IfExtends](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#ifextends)
- [InternalEvent](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#internalevent)
- [IsAny](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isany)
- [IsKnown](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isknown)
- [IsNever](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isnever)
- [IsNullable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isnullable)
- [IsOptional](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isoptional)
- [IsUnknown](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isunknown)
- [IterationMap](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#iterationmap)
- [LogLevel](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevel)
- [LogLevelName](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevelname)
- [LoggerMethods](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loggermethods)
- [MaybeArray](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#maybearray)
- [MaybePromise](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#maybepromise)
- [Merge](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#merge)
- [MergeAll](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#mergeall)
- [MergeGetters](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#mergegetters)
- [ModulesProxyRecord](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#modulesproxyrecord)
- [ModulesProxyResult](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#modulesproxyresult)
- [NATIVE\_TYPE\_NAME](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#native_type_name)
- [NATIVE\_TYPE\_OF](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#native_type_of)
- [Naked](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#naked)
- [Name](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#name)
- [NativeComplexType](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#nativecomplextype)
- [NativeSimpleType](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#nativesimpletype)
- [NextIndex](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#nextindex)
- [NotString](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#notstring)
- [Nullable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#nullable)
- [NullableToPartial](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#nullabletopartial)
- [ObjectEntries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#objectentries)
- [ObjectPath](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#objectpath)
- [ObjectUnion](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#objectunion)
- [OnlyKnown](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#onlyknown)
- [Override](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#override)
- [PartialRequired](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#partialrequired)
- [PathParsed](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#pathparsed)
- [PathType](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#pathtype)
- [Paths](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#paths)
- [Pick](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#pick)
- [PrevIndex](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#previndex)
- [PromiseType](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#promisetype)
- [ProxyGetModule](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#proxygetmodule)
- [ProxyModuleConfig](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#proxymoduleconfig)
- [ReactLike](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#reactlike)
- [RecordBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#recordby)
- [RunTimeErrorOptions](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#runtimeerroroptions)
- [Serializable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#serializable)
- [Simplify](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#simplify)
- [SlugifyOptions](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#slugifyoptions)
- [StoreEvent](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeevent)
- [StoreEventOptions](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#storeeventoptions)
- [StringValue](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringvalue)
- [StringifyDefaultHandler](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringifydefaulthandler)
- [StringifyOptions](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringifyoptions)
- [TypeDescription](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#typedescription)
- [TypeLike](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#typelike)
- [UnionToIntersection](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#uniontointersection)
- [UnknownRecord](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unknownrecord)
- [Unsubscribe](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)
- [Writeable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#writeable)
- [\_Difference](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_difference)
- [\_NullableNullable](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_nullablenullable)
- [\_PathType](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_pathtype)
- [\_UndefinedKeys](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_undefinedkeys)
- [\_UnknownDiff](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_unknowndiff)

### Variables

- [A\_Z](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#a_z-1)
- [AppConfig](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#appconfig)
- [BJSON](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#bjson)
- [BJSON\_FUNCTION](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#bjson_function)
- [BJSON\_UNDEFINED](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#bjson_undefined)
- [CURSOR\_CHARS](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#cursor_chars)
- [CURSOR\_PREFIX](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#cursor_prefix)
- [CustomError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#customerror)
- [ESCAPE\_INDEX\_PART\_SEP](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#escape_index_part_sep)
- [ESCAPE\_KEY\_PART\_SEP](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#escape_key_part_sep)
- [EmailRegex](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#emailregex)
- [GlobalLogger](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#globallogger)
- [INDEX\_PART\_SEP](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#index_part_sep)
- [INDEX\_PART\_SEP\_REGEX](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#index_part_sep_regex)
- [IndexCursor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#indexcursor)
- [InvariantError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#invarianterror)
- [KEY\_PART\_SEP](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#key_part_sep)
- [KEY\_PART\_SEP\_REGEX](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#key_part_sep_regex)
- [KNOWN\_CONSTRUCTOR\_NAMES](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#known_constructor_names)
- [LogLevelEntries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevelentries)
- [LogLevels](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevels)
- [LogLevelsEnum](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevelsenum)
- [MIN\_DOCUMENT\_INDEX\_KEY\_PARTS](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#min_document_index_key_parts)
- [MIN\_FILTER\_INDEX\_KEY\_PARTS](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#min_filter_index_key_parts)
- [NodeLogger](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#nodelogger)
- [Process](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#process)
- [RELATION\_PRECEDES](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#relation_precedes)
- [SEP](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#sep)
- [\_defaultLogger](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_defaultlogger)
- [noop](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#noop)
- [randomNames](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#randomnames)
- [stringCase](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringcase)

### Array Functions

- [uniqBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#uniqby)

### Other Functions

- [$](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#$)
- [\_joinIndexCursorWithParent](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_joinindexcursorwithparent)
- [\_parseAffectedPaths](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_parseaffectedpaths)
- [\_parseSubIndexCursor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_parsesubindexcursor)
- [\_pathToList](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_pathtolist)
- [\_simpleObjectHash](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_simpleobjecthash)
- [\_stringify](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_stringify)
- [allocThreadID](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#allocthreadid)
- [areDifferentElements](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#aredifferentelements)
- [areEqual](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#areequal)
- [assertEqual](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#assertequal)
- [assertError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#asserterror)
- [assertSame](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#assertsame)
- [assertTypes](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#asserttypes)
- [awaitSync](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#awaitsync)
- [base64ToText](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#base64totext)
- [capitalize](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#capitalize)
- [captureStackTrace](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#capturestacktrace)
- [conust](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#conust)
- [createErrorClass](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#createerrorclass)
- [createModulesProxy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#createmodulesproxy)
- [createProxy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#createproxy)
- [createStore](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#createstore)
- [customError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#customerror-1)
- [dateSerialize](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#dateserialize)
- [deepFreeze](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#deepfreeze-1)
- [defineGetters](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#definegetters)
- [delay](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#delay)
- [describeConstructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#describeconstructor)
- [describeType](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#describetype)
- [devAssert](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#devassert)
- [diff](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#diff)
- [encodeNumber](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#encodenumber)
- [ensureArray](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#ensurearray)
- [entries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#entries-1)
- [escapeCursorChars](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#escapecursorchars)
- [escapeStringRegexp](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#escapestringregexp)
- [expectedType](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#expectedtype)
- [filterNull](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#filternull)
- [fnv1a](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#fnv1a)
- [formatGraphQL](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#formatgraphql)
- [formatWithPrettier](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#formatwithprettier)
- [freeThreadID](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#freethreadid)
- [freeze](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#freeze)
- [getGlobalLogLevel](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getgloballoglevel)
- [getKeys](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getkeys)
- [getLogLevelsRecord](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getloglevelsrecord)
- [getNativeConstructorType](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getnativeconstructortype)
- [getNativeTypeOf](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getnativetypeof)
- [getStack](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getstack)
- [getTypeName](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#gettypename)
- [hasProperty](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#hasproperty)
- [hashName](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#hashname)
- [hashObject](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#hashobject)
- [hashString](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#hashstring)
- [indexToCursor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#indextocursor)
- [inspect](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#inspect)
- [inspectObject](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#inspectobject)
- [invariant](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#invariant)
- [invariantType](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#invarianttype)
- [isBrowser](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isbrowser)
- [isErrorWithStack](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#iserrorwithstack)
- [isLogLevel](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isloglevel)
- [isObject](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isobject)
- [isObjectWithoutPrototype](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isobjectwithoutprototype)
- [isPlainObject](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isplainobject)
- [isProduction](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isproduction)
- [isUFO](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#isufo)
- [joinCursorPartsWithTrailingSeparator](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#joincursorpartswithtrailingseparator)
- [joinIndexCursor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#joinindexcursor)
- [joinKeyParts](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#joinkeyparts)
- [joinPKSK](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#joinpksk)
- [joinPathsCamelCase](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#joinpathscamelcase)
- [joinPathsSnakeCase](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#joinpathssnakecase)
- [jsonToTypescript](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#jsontotypescript)
- [keyBy](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#keyby)
- [keys](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#keys)
- [mapper](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#mapper)
- [memoize](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#memoize)
- [merge](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#merge-1)
- [mountGraphID](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#mountgraphid)
- [ms](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#ms)
- [nonNullValues](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#nonnullvalues)
- [notNull](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#notnull)
- [objectEntries](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#objectentries-1)
- [override](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#override-1)
- [parseFilterCursor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#parsefiltercursor)
- [parseIndexCursor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#parseindexcursor)
- [parseIndexFieldName](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#parseindexfieldname)
- [parsePath](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#parsepath)
- [pick](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#pick-1)
- [pluralize](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#pluralize)
- [project](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#project)
- [proxyRealValue](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#proxyrealvalue)
- [pushTrailingIndexSep](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#pushtrailingindexsep)
- [randomInt](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#randomint)
- [randomItem](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#randomitem)
- [randomName](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#randomname)
- [reduceObject](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#reduceobject)
- [setByPath](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#setbypath)
- [setGlobalLogLevel](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#setgloballoglevel)
- [setPrettier](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#setprettier)
- [simpleObjectClone](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#simpleobjectclone)
- [simpleObjectHash](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#simpleobjecthash)
- [sortObject](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#sortobject)
- [splitCursorParts](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#splitcursorparts)
- [stringHash](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringhash)
- [stringify](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringify)
- [stripTrailingIndexSep](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#striptrailingindexsep)
- [textToBase64](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#texttobase64)
- [tuple](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#tuple)
- [tupleEnum](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#tupleenum)
- [tupleNum](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#tuplenum)
- [ufo](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#ufo)
- [ufos](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#ufos)
- [ulid](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#ulid)
- [uniq](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#uniq)
- [upperFirst](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#upperfirst)
- [useProcess](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#useprocess)
- [values](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#values)
- [wrapError](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#wraperror)

## References

### T

Re-exports [T](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.T.md)

___

### camelCase

Renames and re-exports [__type](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#__type)

## Type Aliases

### A\_Z

Ƭ **A\_Z**: typeof [`A_Z`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#a_z-1)[`number`]

#### Defined in

packages/utils/src/typings/index.ts:222

packages/utils/src/typings/index.ts:277

___

### AnyArray

Ƭ **AnyArray**<`T`\>: `ReadonlyArray`<`T`\> \| `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

packages/utils/src/typings/index.ts:105

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

packages/utils/src/typings/index.ts:120

___

### AnyList

Ƭ **AnyList**<`T`\>: [`AnyArray`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyarray)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

packages/utils/src/typings/index.ts:106

___

### AnyRecord

Ƭ **AnyRecord**: `Record`<`string`, `any`\>

#### Defined in

packages/utils/src/typings/index.ts:102

___

### ArrayKeys

Ƭ **ArrayKeys**<`T`\>: `T` extends `any`[] \| `ReadonlyArray`<`any`\> ? `T` extends [`any`, ...(infer Tail)] ? [`ArrayKeys`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#arraykeys)<`Tail`\> \| `Tail`[``"length"``] : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:149

___

### ArrayType

Ƭ **ArrayType**<`T`\>: `T` extends infer N[] ? `N` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:100

___

### As

Ƭ **As**<`T`, `L`\>: `A.Cast`<`T`, `L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `L` |

#### Defined in

packages/utils/src/typings/ts-toolbet.ts:18

___

### Assertable

Ƭ **Assertable**: `string` \| `boolean` \| `number` \| `AssertableList` \| `Readonly`<`AssertableList`\> \| { `[K: string]`: `unknown`;  }

#### Defined in

packages/utils/src/areEqual.ts:9

___

### BinAny

Ƭ **BinAny**<`T`, `True`, `False`\>: { `0`: `False` ; `1`: `True`  }[[`IsAny`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isany)<`T`\> extends ``true`` ? ``0`` : ``1``]

#### Type parameters

| Name |
| :------ |
| `T` |
| `True` |
| `False` |

#### Defined in

packages/utils/src/typings/index.ts:217

___

### BinKnown

Ƭ **BinKnown**<`T`, `True`, `False`\>: { `0`: `False` ; `1`: `True`  }[[`IsKnown`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isknown)<`T`\>]

#### Type parameters

| Name |
| :------ |
| `T` |
| `True` |
| `False` |

#### Defined in

packages/utils/src/typings/index.ts:212

___

### Cast

Ƭ **Cast**<`T`, `L`\>: `A.Cast`<`T`, `L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `L` |

#### Defined in

packages/utils/src/typings/ts-toolbet.ts:32

___

### Compute

Ƭ **Compute**<`T`, `Max`\>: [`IsKnown`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isknown)<`T`\> extends ``1`` ? `ComputeDeep`<`T`, `Max`, ``0``, `never`\> : `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Max` | extends `number` = ``1`` |

#### Defined in

packages/utils/src/typings/Compute.ts:68

___

### ConstructorDescription

Ƭ **ConstructorDescription**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `constructorName` | [`NATIVE_TYPE_NAME`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#native_type_name) \| `string` |
| `isObjectWithoutPrototype` | `boolean` |
| `native` | `boolean` |

#### Defined in

packages/utils/src/getTypeName.ts:192

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

packages/utils/src/createProxy.ts:1

___

### DeepArrayKeys

Ƭ **DeepArrayKeys**<`T`\>: { [K in keyof T]: \`${Extract<K, string\>}.${ObjectPath<T[K]\>}\` }[`number`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |

#### Defined in

packages/utils/src/typings/index.ts:155

___

### DeepFreeze

Ƭ **DeepFreeze**<`O`\>: { readonly [K in keyof O]: O[K] extends M.BuiltIn ? O[K] : DeepFreeze<O[K]\> }

#### Type parameters

| Name |
| :------ |
| `O` |

#### Defined in

packages/utils/src/deepFreeze.ts:21

___

### DeepWritable

Ƭ **DeepWritable**<`T`\>: { -readonly [K in keyof T]: T[K] extends object ? { [L in keyof DeepWritable<T[K]\>]: DeepWritable<T[K]\>[L] } : T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/deepFreeze.ts:25

___

### Difference

Ƭ **Difference**<`Type`\>: `Type` extends `unknown` ? `Type` extends `object` ? { [P in Paths<Type\>]: PathType<Type, P\> extends infer R ? R extends unknown ? [R] extends [never] ? \_UnknownDiff : \_Difference<R, P\> : never : never }[[`Paths`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#paths)<`Type`\>] extends infer R ? `R` extends `unknown` ? { [K in keyof R]: R[K] } & {} : `never` : `never` : [`_Difference`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_difference)<`Type`, ``""``\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `any` |

#### Defined in

packages/utils/src/diff/diff.ts:10

___

### DifferenceAction

Ƭ **DifferenceAction**: ``"add"`` \| ``"update"`` \| ``"delete"``

#### Defined in

packages/utils/src/diff/diff.ts:8

___

### DifferencePath

Ƭ **DifferencePath**: `string` \| `number`

#### Defined in

packages/utils/src/diff/diff.ts:6

___

### Entries

Ƭ **Entries**<`T`\>: { [K in Extract<keyof T, string\>]-?: [K, T[K]] }[`Extract`<keyof `T`, `string`\>][]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:116

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

packages/utils/src/createErrorClass.ts:4

___

### EventMetadataBase

Ƭ **EventMetadataBase**: [`EventMetadataObjectBase`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadataobjectbase) \| [`InternalEvent`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#internalevent)

#### Defined in

packages/utils/src/Store.ts:13

___

### EventMetadataObjectBase

Ƭ **EventMetadataObjectBase**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Defined in

packages/utils/src/Store.ts:12

___

### ForceString

Ƭ **ForceString**<`T`\>: `T` extends `string` ? `T` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:126

___

### GetFieldByDotNotation

Ƭ **GetFieldByDotNotation**<`Obj`, `DotNotation`\>: `DotNotation` extends \`${number}\` ? `number` extends keyof `Obj` ? `Obj`[`number`] : `undefined` : `DotNotation` extends keyof `Obj` ? `Obj`[`DotNotation`] : `DotNotation` extends \`${infer Left}.${infer Right}\` ? `Left` extends keyof `Obj` ? [`GetFieldByDotNotation`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#getfieldbydotnotation)<`Exclude`<`Obj`[`Left`], `undefined`\>, `Right`\> \| `Extract`<`Obj`[`Left`], `undefined`\> : `undefined` : `undefined`

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `DotNotation` |

#### Defined in

packages/utils/src/typings/index.ts:295

___

### GetFieldByDotPath

Ƭ **GetFieldByDotPath**<`Obj`, `DotNotation`\>: [`GetFieldByDotNotation`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#getfieldbydotnotation)<`Obj`, `DotNotation`\>

**`Alias`**

to GetFieldByDotNotation

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `DotNotation` |

#### Defined in

packages/utils/src/typings/index.ts:162

___

### Hashable

Ƭ **Hashable**: [`NativeComplexType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#nativecomplextype) \| [`NativeSimpleType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#nativesimpletype)

#### Defined in

packages/utils/src/getTypeName.ts:190

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

packages/utils/src/typings/index.ts:108

___

### InternalEvent

Ƭ **InternalEvent**: ``"PRUNING"`` \| ``"INITIAL"`` \| ``"CLEAR"``

#### Defined in

packages/utils/src/Store.ts:10

___

### IsAny

Ƭ **IsAny**<`T`\>: ``0`` extends ``1`` & `T` ? ``true`` : ``false``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:66

___

### IsKnown

Ƭ **IsKnown**<`T`\>: [`IsAny`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isany)<`T`\> extends ``true`` ? ``0`` : [`IsNever`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isnever)<`T`\> extends ``true`` ? ``0`` : [`IsUnknown`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isunknown)<`T`\> extends ``true`` ? ``0`` : ``1``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:204

___

### IsNever

Ƭ **IsNever**<`T`\>: [`T`] extends [`never`] ? ``true`` : ``false``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:68

___

### IsNullable

Ƭ **IsNullable**<`T`\>: `Extract`<`T`, ``null`` \| `undefined`\> extends `never` ? ``false`` : ``true``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:70

___

### IsOptional

Ƭ **IsOptional**<`T`\>: `Extract`<`T`, `undefined`\> extends `never` ? ``false`` : ``true``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:74

___

### IsUnknown

Ƭ **IsUnknown**<`T`\>: [`IsNever`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isnever)<`T`\> extends ``false`` ? `T` extends `unknown` ? `unknown` extends `T` ? [`IsAny`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isany)<`T`\> extends ``false`` ? ``true`` : ``false`` : ``false`` : ``false`` : ``false``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:76

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

packages/utils/src/IterationMap.ts:1

___

### LogLevel

Ƭ **LogLevel**: [`LogLevelName`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevelname) \| [`LogLevelName`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevelname)[]

#### Defined in

packages/utils/src/logLevels.ts:21

___

### LogLevelName

Ƭ **LogLevelName**: typeof [`LogLevels`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevels)[`number`]

#### Defined in

packages/utils/src/logLevels.ts:20

___

### LoggerMethods

Ƭ **LoggerMethods**: { [K in LogLevelName]: Function }

#### Defined in

packages/utils/src/nodeLogger.ts:17

___

### MaybeArray

Ƭ **MaybeArray**<`T`\>: `T` \| `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:98

___

### MaybePromise

Ƭ **MaybePromise**<`T`\>: `T` \| `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:94

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

packages/utils/src/typings/ts-toolbet.ts:20

___

### MergeAll

Ƭ **MergeAll**<`L`\>: `L` extends [infer Head, ...(infer Tail)] ? `Tail` extends `object`[] ? [`Merge`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.T.md#merge)<`Head`, [`MergeAll`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#mergeall)<`Tail`\>\> : {} : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `object`[] |

#### Defined in

packages/utils/src/merge.ts:14

___

### MergeGetters

Ƭ **MergeGetters**<`O`, `Extensions`\>: { [K in keyof O as K extends keyof Extensions ? never : K]: O[K] } & { [K in keyof Extensions]: Extensions[K] } extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name |
| :------ |
| `O` |
| `Extensions` |

#### Defined in

packages/utils/src/getters/defineGetters.ts:75

___

### ModulesProxyRecord

Ƭ **ModulesProxyRecord**: `Object`

#### Index signature

▪ [K: `string`]: [`ProxyModuleConfig`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#proxymoduleconfig)<`any`, `any`\>

#### Defined in

packages/utils/src/createModulesProxy.ts:16

___

### ModulesProxyResult

Ƭ **ModulesProxyResult**<`ModulesMap`\>: `Exports`<`ModulesMap`\> & { `transform`: <T\>(`callback`: (`current`: [`ModulesProxyResult`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#modulesproxyresult)<`ModulesMap`\>) => `T`) => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModulesMap` | extends [`ModulesProxyRecord`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#modulesproxyrecord) |

#### Defined in

packages/utils/src/createModulesProxy.ts:24

___

### NATIVE\_TYPE\_NAME

Ƭ **NATIVE\_TYPE\_NAME**: typeof `KNOWN_CONSTRUCTOR_NAMES.enum`

#### Defined in

packages/utils/src/getTypeName.ts:29

___

### NATIVE\_TYPE\_OF

Ƭ **NATIVE\_TYPE\_OF**: `Lowercase`<[`NATIVE_TYPE_NAME`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#native_type_name)\>

#### Defined in

packages/utils/src/getTypeName.ts:49

___

### Naked

Ƭ **Naked**<`L`\>: `Overwrite`<`Required`<`L`\>, `L`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends `List` |

#### Defined in

packages/utils/src/typings/ts-toolbet.ts:33

___

### Name

Ƭ **Name**: \`${A\_Z}${string}\`

#### Defined in

packages/utils/src/typings/index.ts:278

___

### NativeComplexType

Ƭ **NativeComplexType**: `Record`<`string`, `unknown`\> \| `Function`

#### Defined in

packages/utils/src/getTypeName.ts:179

___

### NativeSimpleType

Ƭ **NativeSimpleType**: `string` \| `number` \| ``null`` \| `undefined` \| `bigint` \| `symbol` \| `boolean`

#### Defined in

packages/utils/src/getTypeName.ts:181

___

### NextIndex

Ƭ **NextIndex**<`Current`\>: `Current` extends `number` ? `I.Pos`<`Next`<`I.IterationOf`<`Current`\>\>\> : `never`

#### Type parameters

| Name |
| :------ |
| `Current` |

#### Defined in

packages/utils/src/typings/Compute.ts:10

___

### NotString

Ƭ **NotString**<`T`\>: `string` extends `T` ? `never` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:127

___

### Nullable

Ƭ **Nullable**<`T`, `Nullish`\>: { [K in keyof T]-?: T[K] \| Nullish } & {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `Nullish` | extends ``null`` \| `undefined` = `undefined` |

#### Defined in

packages/utils/src/Store.ts:28

___

### NullableToPartial

Ƭ **NullableToPartial**<`T`\>: [`UnionToIntersection`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#uniontointersection)<{ [K in keyof T as IsOptional<T[K]\> extends true ? never : K]-?: T[K] } \| { [K in keyof T as IsOptional<T[K]\> extends true ? K : never]?: T[K] }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:129

___

### ObjectEntries

Ƭ **ObjectEntries**<`T`\>: { [K in Extract<keyof T, string\>]: [K, T[K]] }[`Extract`<keyof `T`, `string`\>][]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/objectEntries.ts:1

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

packages/utils/src/typings/index.ts:167

___

### ObjectUnion

Ƭ **ObjectUnion**<`A`, `B`\>: { [K in keyof (A & B)]: (A & B)[K] }

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Defined in

packages/utils/src/typings/index.ts:112

___

### OnlyKnown

Ƭ **OnlyKnown**<`T`\>: [`IsAny`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isany)<`T`\> extends ``true`` ? `never` : [`IsNever`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isnever)<`T`\> extends ``true`` ? `never` : [`IsUnknown`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isunknown)<`T`\> extends ``true`` ? `never` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:86

___

### Override

Ƭ **Override**<`T`, `O`\>: `O` extends `Record`<`string`, `unknown`\> ? `Omit`<`T`, keyof `O`\> & `O` : `T`

#### Type parameters

| Name |
| :------ |
| `T` |
| `O` |

#### Defined in

packages/utils/src/override.ts:1

___

### PartialRequired

Ƭ **PartialRequired**<`T`, `Optionals`\>: { [P in keyof T as P extends Optionals ? never : P]-?: T[P] } & { [K in Optionals]?: T[K] } & {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Optionals` | extends keyof `T` |

#### Defined in

packages/utils/src/typings/index.ts:282

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
| `diff` | (`prev`: `any`, `next`: `any`) => [`Difference`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#difference)[] |
| `parts` | `ReadonlyArray`<`string`\> |
| `path` | `Path` |
| `pick` | <O\>(`object`: `O`) => [`PathType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`O`, `Path`\> |

#### Defined in

packages/utils/src/parsePath.ts:6

___

### PathType

Ƭ **PathType**<`Type`, `Property`\>: `Type` extends `unknown` ? [`_PathType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#_pathtype)<`Type`, `Property`\> extends infer R ? [`R`] extends [`never`] ? `unknown` : `R` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `Property` | extends `string` |

#### Defined in

packages/utils/src/typings/Path.ts:1

___

### Paths

Ƭ **Paths**<`T`, `D`\>: [`D`] extends [`never`] ? `never` : `T` extends `object` ? { [K in keyof T]-?: K extends string \| number ? \`${K}\` \| (Paths<T[K], Prev[D]\> extends infer R ? Join<K, R\> : never) : never }[keyof `T`] : `never` \| ``""``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | extends `number` = ``10`` |

#### Defined in

packages/utils/src/typings/Path.ts:47

___

### Pick

Ƭ **Pick**<`Obj`, `DotNotation`\>: [`GetFieldByDotNotation`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#getfieldbydotnotation)<`Obj`, `DotNotation`\>

**`Alias`**

to GetFieldByDotNotation

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `DotNotation` |

#### Defined in

packages/utils/src/typings/index.ts:291

___

### PrevIndex

Ƭ **PrevIndex**<`Current`\>: `Current` extends `number` ? `I.Pos`<`I.Prev`<`I.IterationOf`<`Current`\>\>\> : `never`

#### Type parameters

| Name |
| :------ |
| `Current` |

#### Defined in

packages/utils/src/typings/Compute.ts:14

___

### PromiseType

Ƭ **PromiseType**<`P`\>: `P` extends `Promise`<infer T\> ? `T` : `never`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Defined in

packages/utils/src/typings/index.ts:96

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

packages/utils/src/createModulesProxy.ts:9

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
| `module` | [`ProxyGetModule`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#proxygetmodule)<`T`\> |
| `server` | `ServerOnly` |

#### Defined in

packages/utils/src/createModulesProxy.ts:11

___

### ReactLike

Ƭ **ReactLike**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createContext` | [`AnyFunction`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction) |
| `createElement` | [`AnyFunction`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction) |
| `useContext` | [`AnyFunction`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction) |
| `useEffect` | [`AnyFunction`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction) |
| `useMemo` | [`AnyFunction`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction) |
| `useState` | [`AnyFunction`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction) |

#### Defined in

packages/utils/src/MicroState.ts:311

___

### RecordBy

Ƭ **RecordBy**<`Dict`, `Field`\>: { [K in Pick<Dict[keyof Dict], Field\> extends infer Key ? Key extends string \| number ? Key : string : never]: Dict[keyof Dict][] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Dict` | extends `Record`<`string`, `any`\> |
| `Field` | extends `string` |

#### Defined in

packages/utils/src/Store.ts:55

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

packages/utils/src/RuntimeError.ts:3

___

### Serializable

Ƭ **Serializable**: ``null`` \| `undefined` \| [`Stringifiable`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.Stringifiable.md) \| [`SerializableList`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.SerializableList.md)

#### Defined in

packages/utils/src/typings/index.ts:11

___

### Simplify

Ƭ **Simplify**<`T`\>: { [KeyType in keyof T]: T[KeyType] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:147

___

### SlugifyOptions

Ƭ **SlugifyOptions**: `Parameters`<typeof `slugify`\>[``1``] extends infer R ? `R` extends `object` ? `R` : `never` : `never`

#### Defined in

packages/utils/src/slugify.ts:3

___

### StoreEvent

Ƭ **StoreEvent**<`K`, `V`, `Meta`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `V` | `V` |
| `Meta` | extends [`EventMetadataBase`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) = [`EventMetadataBase`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) |

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

packages/utils/src/Store.ts:15

___

### StoreEventOptions

Ƭ **StoreEventOptions**<`Meta`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Meta` | extends [`EventMetadataBase`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) = [`EventMetadataBase`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#eventmetadatabase) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | `Meta` |
| `silently?` | `boolean` |

#### Defined in

packages/utils/src/Store.ts:35

___

### StringValue

Ƭ **StringValue**: \`${number}\` \| \`${number}${UnitAnyCase}\` \| \`${number} ${UnitAnyCase}\`

#### Defined in

packages/utils/src/ms.ts:46

___

### StringifyDefaultHandler

Ƭ **StringifyDefaultHandler**: (`payload`: { `options`: [`StringifyOptions`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringifyoptions) ; `value`: `any`  }) => `string` \| `undefined`

#### Type declaration

▸ (`payload`): `string` \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `payload.options` | [`StringifyOptions`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringifyoptions) |
| `payload.value` | `any` |

##### Returns

`string` \| `undefined`

#### Defined in

packages/utils/src/BJSON.ts:251

___

### StringifyOptions

Ƭ **StringifyOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultHandler?` | [`StringifyDefaultHandler`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringifydefaulthandler) |
| `key?` | `string` \| `number` |
| `quoteKeys?` | (`str`: `string`) => `string` |
| `quoteValues?` | (`str`: `string` \| `number` \| `boolean`, `info`: { `key`: `string` \| `number` \| `undefined`  }) => `string` |

#### Defined in

packages/utils/src/BJSON.ts:256

___

### TypeDescription

Ƭ **TypeDescription**: `ReturnType`<typeof [`describeType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#describetype)\>

#### Defined in

packages/utils/src/getTypeName.ts:147

___

### TypeLike

Ƭ **TypeLike**<`T`, `Level`\>: `T` extends { `[K: string]`: `any`;  } ? { [K in keyof T]: T[K] extends Object ? Level["length"] extends 2 ? any : T[K] extends AnyFunction ? AnyFunction : TypeLike<T[K], [...Level, 0]\> : any } : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Level` | extends `ReadonlyArray`<`number`\> = [``0``] |

#### Defined in

packages/utils/src/typings/index.ts:190

___

### UnionToIntersection

Ƭ **UnionToIntersection**<`T`\>: `T` extends `any` ? (`x`: `T`) => `any` : `never` extends (`x`: infer R) => `any` ? { [K in keyof R]: R[K] } : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:139

___

### UnknownRecord

Ƭ **UnknownRecord**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Defined in

packages/utils/src/typings/index.ts:103

___

### Unsubscribe

Ƭ **Unsubscribe**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

packages/utils/src/MicroState.ts:24

___

### Writeable

Ƭ **Writeable**<`T`\>: { -readonly [P in keyof T]: T[P] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/typings/index.ts:122

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
| `action` | [`DifferenceAction`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#differenceaction) |
| `newValue?` | `Value` |
| `oldValue?` | `Value` |
| `parsed` | [`PathParsed`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#pathparsed)<`Path`\> |
| `path` | `Path` |
| `pathParts` | [`DifferencePath`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#differencepath)[] |

#### Defined in

packages/utils/src/diff/diff.ts:28

___

### \_NullableNullable

Ƭ **\_NullableNullable**<`Obj`\>: [`_UndefinedKeys`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_undefinedkeys)<`Obj`\> extends infer UK ? `Union.Merge`<{ [K in keyof Obj as [Obj[K]] extends [undefined] ? never : K]: Obj[K] } & {}\> extends infer Union ? [`NullableToPartial`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#nullabletopartial)<{ [K in keyof Union]: K extends UK ? Union[K] \| undefined : Union[K] } & {}\> : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Obj` | extends `object` |

#### Defined in

packages/utils/src/mapper.ts:61

___

### \_PathType

Ƭ **\_PathType**<`Type`, `Property`\>: `string` extends `Property` ? `never` : `Property` extends keyof `Type` ? `Type`[`Property`] : `Property` extends \`${infer Head}.$\` ? [`PathType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<[`PathType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`Type`, `Head`\>, ``"$"``\> : `Property` extends ``"$"`` ? `Type` extends `ReadonlyArray`<infer T\> ? `T`[] : `Type` extends `object` ? { [K in Extract<keyof Type, string\>]: Type[K] }[`Extract`<keyof `Type`, `string`\>][] : `undefined` : `Property` extends ``""`` ? `Type` : `Property` extends \`${number}\` ? `Type` extends `ReadonlyArray`<infer ArrayType\> ? `ArrayType` : `undefined` : `Property` extends \`${infer Key}.${infer Rest}\` ? `Key` extends \`${number}\` ? `Type` extends `ReadonlyArray`<infer ArrayType\> ? [`PathType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`ArrayType`, `Rest`\> : `undefined` : `Key` extends keyof `Type` ? `Type`[`Key`] extends `Map`<`string`, infer MapType\> ? `MapType` : [`PathType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`Type`[`Key`], `Rest`\> : `undefined` : `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `Property` | extends `string` |

#### Defined in

packages/utils/src/typings/Path.ts:9

___

### \_UndefinedKeys

Ƭ **\_UndefinedKeys**<`T`\>: keyof `Union.Merge`<`Extract`<`T` extends `unknown` ? { [K in keyof T as T[K] extends undefined ? K : never]: K } & {} : {}, `object`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/utils/src/mapper.ts:52

___

### \_UnknownDiff

Ƭ **\_UnknownDiff**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | [`DifferenceAction`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#differenceaction) |
| `newValue?` | `unknown` |
| `oldValue?` | `unknown` |
| `parsed` | [`PathParsed`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#pathparsed) |
| `path` | `string` |
| `pathParts` | [`DifferencePath`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#differencepath)[] |

#### Defined in

packages/utils/src/diff/diff.ts:37

## Variables

### A\_Z

• `Const` **A\_Z**: [``"A"``, ``"B"``, ``"C"``, ``"D"``, ``"E"``, ``"F"``, ``"G"``, ``"H"``, ``"I"``, ``"J"``, ``"K"``, ``"L"``, ``"M"``, ``"N"``, ``"O"``, ``"P"``, ``"Q"``, ``"R"``, ``"S"``, ``"T"``, ``"U"``, ``"V"``, ``"W"``, ``"X"``, ``"Y"``, ``"Z"``, ``"a"``, ``"b"``, ``"c"``, ``"d"``, ``"e"``, ``"f"``, ``"g"``, ``"h"``, ``"i"``]

#### Defined in

packages/utils/src/typings/index.ts:222

packages/utils/src/typings/index.ts:277

___

### AppConfig

• `Const` **AppConfig**: [`IAppConfig`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IAppConfig.md)<[`AppConfigInterface`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.AppConfigInterface.md)\>

#### Defined in

packages/utils/src/AppConfig.ts:13

___

### BJSON

• `Const` **BJSON**: [`BJSONConstructor`](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.BJSONConstructor.md)

#### Defined in

packages/utils/src/BJSON.ts:375

___

### BJSON\_FUNCTION

• `Const` **BJSON\_FUNCTION**: `string`

#### Defined in

packages/utils/src/BJSON.ts:12

___

### BJSON\_UNDEFINED

• `Const` **BJSON\_UNDEFINED**: `string`

#### Defined in

packages/utils/src/BJSON.ts:11

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

packages/utils/src/IndexCursor/joinIndexCursor.ts:34

___

### CURSOR\_PREFIX

• `Const` **CURSOR\_PREFIX**: ``"~!"``

#### Defined in

packages/utils/src/IndexCursor/parseFilterCursor.ts:7

___

### CustomError

• `Const` **CustomError**: typeof `InvariantError`

#### Defined in

packages/utils/src/createErrorClass.ts:100

___

### ESCAPE\_INDEX\_PART\_SEP

• **ESCAPE\_INDEX\_PART\_SEP**: ``"⦙"``

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:45

___

### ESCAPE\_KEY\_PART\_SEP

• **ESCAPE\_KEY\_PART\_SEP**: ``"⦁"``

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:44

___

### EmailRegex

• `Const` **EmailRegex**: `RegExp`

#### Defined in

packages/utils/src/emailRegex.ts:4

___

### GlobalLogger

• `Const` **GlobalLogger**: [`Logger`](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md) = `NodeLogger`

#### Defined in

packages/utils/src/nodeLogger.ts:222

___

### INDEX\_PART\_SEP

• **INDEX\_PART\_SEP**: ``"⋮"``

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:43

___

### INDEX\_PART\_SEP\_REGEX

• `Const` **INDEX\_PART\_SEP\_REGEX**: `RegExp`

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:77

___

### IndexCursor

• `Const` **IndexCursor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `escape` | (`init`: `string`) => `string` |
| `join` | (`init`: [`InitIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InitIndexCursor.md), `options`: [`ParseCursorOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParseCursorOptions.md)) => `string` |
| `joinCursorPartsWithTrailingSeparator` | (`parts`: (``null`` \| `string`)[]) => `string` |
| `joinKeyParts` | (`init`: `string`[], `options`: [`JoinKeyPartsOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.JoinKeyPartsOptions.md)) => `string` |
| `joinPKSK` | (`init`: { `PK`: `string`[] ; `SK`: ``null`` \| `string`[]  }, `options`: [`JoinKeyPartsOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.JoinKeyPartsOptions.md)) => `string` |
| `parse` | (`init`: `string` \| `string`[] \| [`InitIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InitIndexCursor.md), `options`: [`ParseCursorOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParseCursorOptions.md)) => [`ParsedIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParsedIndexCursor.md) |
| `stripTrailingIndexSep` | (`init`: `string`) => `string` |

#### Defined in

packages/utils/src/IndexCursor/IndexCursor.ts:13

___

### InvariantError

• `Const` **InvariantError**: typeof `InvariantError`

#### Defined in

packages/utils/src/invariant.ts:73

___

### KEY\_PART\_SEP

• **KEY\_PART\_SEP**: ``"∙"``

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:46

___

### KEY\_PART\_SEP\_REGEX

• `Const` **KEY\_PART\_SEP\_REGEX**: `RegExp`

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:78

___

### KNOWN\_CONSTRUCTOR\_NAMES

• `Const` **KNOWN\_CONSTRUCTOR\_NAMES**: { `Array`: ``"Array"`` ; `BigInt`: ``"BigInt"`` ; `Boolean`: ``"Boolean"`` ; `Function`: ``"Function"`` ; `Infinity`: ``"Infinity"`` ; `NaN`: ``"NaN"`` ; `Null`: ``"Null"`` ; `Number`: ``"Number"`` ; `Object`: ``"Object"`` ; `String`: ``"String"`` ; `Symbol`: ``"Symbol"`` ; `Undefined`: ``"Undefined"``  } & { `list`: (``"NaN"`` \| ``"Undefined"`` \| ``"Function"`` \| ``"Null"`` \| ``"String"`` \| ``"Boolean"`` \| ``"BigInt"`` \| ``"Symbol"`` \| ``"Array"`` \| ``"Infinity"`` \| ``"Number"`` \| ``"Object"``)[]  } & { `enum`: ``"NaN"`` \| ``"Undefined"`` \| ``"Function"`` \| ``"Null"`` \| ``"String"`` \| ``"Boolean"`` \| ``"BigInt"`` \| ``"Symbol"`` \| ``"Array"`` \| ``"Infinity"`` \| ``"Number"`` \| ``"Object"``  }

#### Defined in

packages/utils/src/getTypeName.ts:14

___

### LogLevelEntries

• `Const` **LogLevelEntries**: [`ObjectEntries`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#objectentries)<{ `alert`: ``1`` = 1; `crit`: ``2`` = 2; `debug`: ``7`` = 7; `emerg`: ``0`` = 0; `error`: ``3`` = 3; `info`: ``6`` = 6; `none`: ``100`` = 100; `notice`: ``5`` = 5; `warning`: ``4`` = 4 }\>

#### Defined in

packages/utils/src/logLevels.ts:17

___

### LogLevels

• `Const` **LogLevels**: (``"error"`` \| ``"emerg"`` \| ``"alert"`` \| ``"crit"`` \| ``"warning"`` \| ``"notice"`` \| ``"info"`` \| ``"debug"`` \| ``"none"``)[]

#### Defined in

packages/utils/src/logLevels.ts:18

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

packages/utils/src/logLevels.ts:5

___

### MIN\_DOCUMENT\_INDEX\_KEY\_PARTS

• `Const` **MIN\_DOCUMENT\_INDEX\_KEY\_PARTS**: ``4``

#### Defined in

packages/utils/src/IndexCursor/parseIndexCursor.ts:16

___

### MIN\_FILTER\_INDEX\_KEY\_PARTS

• `Const` **MIN\_FILTER\_INDEX\_KEY\_PARTS**: ``3``

#### Defined in

packages/utils/src/IndexCursor/parseIndexCursor.ts:17

___

### NodeLogger

• `Const` **NodeLogger**: [`Logger`](../classes/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Logger.md)

#### Defined in

packages/utils/src/nodeLogger.ts:221

___

### Process

• `Const` **Process**: `Partial`<`Process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Defined in

packages/utils/src/useProcess.ts:24

___

### RELATION\_PRECEDES

• **RELATION\_PRECEDES**: ``"⊰"``

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:47

___

### SEP

• `Const` **SEP**: ``"ː"``

#### Defined in

packages/utils/src/BJSON.ts:5

___

### \_defaultLogger

• `Const` **\_defaultLogger**: [`LoggerMethods`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loggermethods)

#### Defined in

packages/utils/src/nodeLogger.ts:19

___

### noop

• `Const` **noop**: `Object`

#### Defined in

packages/utils/src/typings/index.ts:286

___

### randomNames

• `Const` **randomNames**: `string`[]

#### Defined in

packages/utils/src/randomItem.ts:23

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

packages/utils/src/stringCase.ts:19

## Array Functions

### uniqBy

▸ **uniqBy**<`T`\>(`array`, `iteratee?`): `T`[]

This method is like `_.uniq` except that it accepts `iteratee` which is
invoked for each element in `array` to generate the criterion by which
uniqueness is computed. The iteratee is invoked with one argument: (value).

**`Example`**

_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// using the `_.property` iteratee shorthand
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `undefined` \| ``null`` \| `List`<`T`\> | The array to inspect. |
| `iteratee?` | `ValueIteratee`<`T`\> | The iteratee invoked per element. |

#### Returns

`T`[]

Returns the new duplicate free array.

#### Defined in

node_modules/.pnpm/@types+lodash@4.14.191/node_modules/@types/lodash/common/array.d.ts:1723

___

## Other Functions

### $

▸ **$**<`V`\>(`current`): [`UFO`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UFO-1.md)<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `V` |

#### Returns

[`UFO`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UFO-1.md)<`V`\>

#### Defined in

packages/utils/src/ufo.ts:8

___

### \_joinIndexCursorWithParent

▸ **_joinIndexCursorWithParent**(`init`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`InitIndexCursorWithParent`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InitIndexCursorWithParent.md) |
| `options` | [`JoinKeyPartsOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.JoinKeyPartsOptions.md) |

#### Returns

`string`

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:114

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

packages/utils/src/parsePath.ts:85

___

### \_parseSubIndexCursor

▸ **_parseSubIndexCursor**(`init`, `options`): [`ParsedIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParsedIndexCursor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Object` |
| `init.parentPrefix?` | `string` |
| `init.parts` | `string`[] |
| `options` | [`ParseCursorOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParseCursorOptions.md) |

#### Returns

[`ParsedIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParsedIndexCursor.md)

#### Defined in

packages/utils/src/IndexCursor/parseIndexCursor.ts:84

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

packages/utils/src/parsePath.ts:63

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

packages/utils/src/simpleObjectHash.ts:11

___

### \_stringify

▸ **_stringify**(`value`, `options?`): `string` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options` | [`StringifyOptions`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringifyoptions) |

#### Returns

`string` \| `undefined`

#### Defined in

packages/utils/src/BJSON.ts:287

___

### allocThreadID

▸ **allocThreadID**(): `ThreadID`

#### Returns

`ThreadID`

#### Defined in

packages/utils/src/threadId.ts:35

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

packages/utils/src/diff/diff.ts:175

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

packages/utils/src/areEqual.ts:5

___

### assertEqual

▸ **assertEqual**<`ToBe`\>(`value`, `toBe`, `message?`, `details?`): asserts value is ToBe extends Assertable ? ToBe : never

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ToBe` | extends `Readonly`<[`Assertable`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#assertable)\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `unknown` | `undefined` |
| `toBe` | `ToBe` | `undefined` |
| `message` | `string` | `'UNEXPECTED_VALUE'` |
| `details` | `Object` | `{}` |

#### Returns

asserts value is ToBe extends Assertable ? ToBe : never

#### Defined in

packages/utils/src/areEqual.ts:19

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

packages/utils/src/invariant.ts:94

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

packages/utils/src/assertSame.ts:4

___

### assertTypes

▸ **assertTypes**<`Input`\>(`input`, `expected`, `optional?`): `Input`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `Object` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `Input` | `undefined` |
| `expected` | `string` \| `string`[] | `undefined` |
| `optional` | `boolean` \| ``"truthy"`` | `false` |

#### Returns

`Input`

#### Defined in

packages/utils/src/expectedType.ts:26

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
| `promises` | [`MaybePromise`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#maybepromise)<`T`\>[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

packages/utils/src/awaitSync.ts:3

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

packages/utils/src/textToBase64.ts:14

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

packages/utils/src/stringCase.ts:7

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

packages/utils/src/stackTrace.ts:9

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

packages/utils/src/conust.ts:168

___

### createErrorClass

▸ **createErrorClass**(`originalName`, `options?`): typeof `InvariantError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `originalName` | `string` |
| `options?` | [`ErrorClassCreatorOptions`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#errorclasscreatoroptions) |

#### Returns

typeof `InvariantError`

#### Defined in

packages/utils/src/createErrorClass.ts:18

___

### createModulesProxy

▸ **createModulesProxy**<`ModulesMap`\>(`getModules`): [`Compute`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#compute)<[`ModulesProxyResult`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#modulesproxyresult)<`ModulesMap`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModulesMap` | extends [`ModulesProxyRecord`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#modulesproxyrecord) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getModules` | () => `ModulesMap` |

#### Returns

[`Compute`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#compute)<[`ModulesProxyResult`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#modulesproxyresult)<`ModulesMap`\>\>

#### Defined in

packages/utils/src/createModulesProxy.ts:31

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
| `options?` | [`CreateProxyOptions`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#createproxyoptions)<`T`\> |

#### Returns

`T`

#### Defined in

packages/utils/src/createProxy.ts:13

___

### createStore

▸ **createStore**<`Dict`\>(`init?`): [`Store`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md)<`Dict`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Dict` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | [`ObjectEntries`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#objectentries)<`Dict`\> \| [`StoreOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.StoreOptions.md)<`Dict`\> |

#### Returns

[`Store`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Store.md)<`Dict`\>

#### Defined in

packages/utils/src/Store.ts:141

___

### customError

▸ **customError**(`options`): `InvariantError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.details?` | `any` |
| `options.message?` | `string` |
| `options.stackFrom?` | `any` |

#### Returns

`InvariantError`

#### Defined in

packages/utils/src/createErrorClass.ts:102

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

packages/utils/src/dateSerialize.ts:1

___

### deepFreeze

▸ **deepFreeze**<`T`\>(`object`): [`DeepFreeze`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#deepfreeze)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

[`DeepFreeze`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#deepfreeze)<`T`\>

#### Defined in

packages/utils/src/deepFreeze.ts:4

___

### defineGetters

▸ **defineGetters**<`O`, `Extensions`\>(`object`, `getters`, `globalOptions?`): [`MergeGetters`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#mergegetters)<`O`, `Extensions`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `object` |
| `Extensions` | extends `object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `O` |
| `getters` | { [K in string \| number \| symbol]: GettersConfig<O, Extensions[K]\> \| Function } |
| `globalOptions?` | [`GetterAttributes`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.GetterAttributes.md) |

#### Returns

[`MergeGetters`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#mergegetters)<`O`, `Extensions`\>

#### Defined in

packages/utils/src/getters/defineGetters.ts:18

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

packages/utils/src/delay.ts:1

___

### describeConstructor

▸ **describeConstructor**(`value`): [`ConstructorDescription`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#constructordescription)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`ConstructorDescription`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#constructordescription)

#### Defined in

packages/utils/src/getTypeName.ts:72

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
| `nativeTypeOf` | `undefined` \| ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` \| ``"nan"`` \| ``"null"`` \| ``"array"`` \| ``"infinity"`` |
| `plusString` | `string` |
| `toString` | () => `string` |
| `typeOf` | ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` |
| `typename` | `string` |

#### Defined in

packages/utils/src/getTypeName.ts:149

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

packages/utils/src/devAssert.ts:3

___

### diff

▸ **diff**(`current`, `next`, `pathToLook?`): [`Difference`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#difference)[]

Returns a list of differences between two types

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `any` |
| `next` | `any` |
| `pathToLook?` | `string` \| [`DifferencePath`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#differencepath)[] |

#### Returns

[`Difference`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#difference)[]

#### Defined in

packages/utils/src/diff/diff.ts:54

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

packages/utils/src/conust.ts:110

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

packages/utils/src/ensureArray.ts:1

___

### entries

▸ **entries**<`O`\>(`init`): [`ObjectEntries`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#objectentries)<`O`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `O` |

#### Returns

[`ObjectEntries`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#objectentries)<`O`\>

#### Defined in

packages/utils/src/objectEntries.ts:7

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

packages/utils/src/IndexCursor/joinIndexCursor.ts:80

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

packages/utils/src/scapeRegex.ts:2

___

### expectedType

▸ **expectedType**<`Input`\>(`input`, `expected`, `optional?`): `Input`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `Object` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `Input` | `undefined` |
| `expected` | `string` \| `string`[] | `undefined` |
| `optional` | `boolean` \| ``"truthy"`` | `false` |

#### Returns

`Input`

#### Defined in

packages/utils/src/expectedType.ts:26

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

packages/utils/src/filterNull.ts:1

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

packages/utils/src/fvn1a.ts:5

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

packages/utils/src/formatGraphQL.ts:3

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

packages/utils/src/formatWithPrettier.ts:5

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

packages/utils/src/threadId.ts:44

___

### freeze

▸ **freeze**<`T`\>(`object`): [`DeepFreeze`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#deepfreeze)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

[`DeepFreeze`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#deepfreeze)<`T`\>

#### Defined in

packages/utils/src/deepFreeze.ts:4

___

### getGlobalLogLevel

▸ **getGlobalLogLevel**(): [`LogLevel`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevel)

#### Returns

[`LogLevel`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevel)

#### Defined in

packages/utils/src/logLevels.ts:31

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

packages/utils/src/getKeys.ts:4

___

### getLogLevelsRecord

▸ **getLogLevelsRecord**(`env?`): `Set`<[`LogLevelName`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevelname)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `env` | [`LogLevel`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevel) | `globalLogLevel` |

#### Returns

`Set`<[`LogLevelName`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevelname)\>

#### Defined in

packages/utils/src/logLevels.ts:43

___

### getNativeConstructorType

▸ **getNativeConstructorType**(`input`): [`NATIVE_TYPE_NAME`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#native_type_name) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`NATIVE_TYPE_NAME`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#native_type_name) \| `undefined`

#### Defined in

packages/utils/src/getTypeName.ts:31

___

### getNativeTypeOf

▸ **getNativeTypeOf**(`input`): [`NATIVE_TYPE_OF`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#native_type_of) \| `undefined`

Returns a string representation of the constructor of the given value if a simple native type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | {any} The value to get the constructor name of. |

#### Returns

[`NATIVE_TYPE_OF`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#native_type_of) \| `undefined`

#### Defined in

packages/utils/src/getTypeName.ts:55

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

packages/utils/src/stackTrace.ts:1

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

packages/utils/src/getTypeName.ts:8

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

packages/utils/src/getKeys.ts:15

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

packages/utils/src/hashString.ts:7

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

packages/utils/src/hashObject.ts:3

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

packages/utils/src/hashString.ts:3

___

### indexToCursor

▸ **indexToCursor**(`init`, `options`): [`ParsedIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParsedIndexCursor.md)

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
| `options` | [`ParseCursorOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParseCursorOptions.md) |

#### Returns

[`ParsedIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParsedIndexCursor.md)

#### Defined in

packages/utils/src/IndexCursor/parseIndexCursor.ts:152

___

### inspect

▸ **inspect**(`arg`, `depth?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arg` | `any` | `undefined` |
| `depth` | `number` | `5` |

#### Returns

`string`

#### Defined in

packages/utils/src/nodeLogger.ts:224

___

### inspectObject

▸ **inspectObject**(`inputObject`, `options?`, `appendDetailIndex?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `inputObject` | `any` | `undefined` |
| `options` | `InspectObjectDetails` | `{}` |
| `appendDetailIndex` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

packages/utils/src/inspectObject.ts:14

___

### invariant

▸ **invariant**(`truthy`, `errorMessage?`, `details?`): asserts truthy

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `truthy` | `any` | `undefined` |
| `errorMessage` | `string` \| `Error` | `''` |
| `details` | `any` | `null` |

#### Returns

asserts truthy

#### Defined in

packages/utils/src/invariant.ts:109

___

### invariantType

▸ **invariantType**(`object`, `type`, `extraInfo?`, `depth?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `object` | `undefined` |
| `type` | `string` \| `string`[] | `undefined` |
| `extraInfo?` | `any` | `undefined` |
| `depth` | `number` | `2` |

#### Returns

`boolean`

#### Defined in

packages/utils/src/invariant.ts:127

___

### isBrowser

▸ **isBrowser**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/utils/src/isBrowser.ts:1

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

packages/utils/src/invariant.ts:100

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

packages/utils/src/logLevels.ts:27

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

packages/utils/src/isObject.ts:3

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

packages/utils/src/getTypeName.ts:68

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

packages/utils/src/isObject.ts:7

___

### isProduction

▸ **isProduction**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/utils/src/env.ts:3

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

packages/utils/src/ufo.ts:29

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

packages/utils/src/IndexCursor/joinIndexCursor.ts:136

___

### joinIndexCursor

▸ **joinIndexCursor**(`init`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`InitIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InitIndexCursor.md) |
| `options` | [`ParseCursorOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParseCursorOptions.md) |

#### Returns

`string`

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:50

___

### joinKeyParts

▸ **joinKeyParts**(`init`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `string`[] |
| `options` | [`JoinKeyPartsOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.JoinKeyPartsOptions.md) |

#### Returns

`string`

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:86

___

### joinPKSK

▸ **joinPKSK**(`init`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Object` |
| `init.PK` | `string`[] |
| `init.SK` | ``null`` \| `string`[] |
| `options` | [`JoinKeyPartsOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.JoinKeyPartsOptions.md) |

#### Returns

`string`

#### Defined in

packages/utils/src/IndexCursor/joinIndexCursor.ts:94

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

packages/utils/src/stringCase.ts:11

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

packages/utils/src/stringCase.ts:15

___

### jsonToTypescript

▸ **jsonToTypescript**(`schema`, `name`, `options?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `JSONSchema4` |
| `name` | `string` |
| `options` | `Partial`<`Options`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/utils/src/jsonToTypescript.ts:7

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

packages/utils/src/keyBy.ts:1

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

packages/utils/src/objectEntries.ts:11

___

### mapper

▸ **mapper**<`Item`\>(`items`): [`Mapper`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Mapper.md)<`Item`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Item` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | (`undefined` \| ``null`` \| `Item`)[] |

#### Returns

[`Mapper`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Mapper.md)<`Item`\>

#### Defined in

packages/utils/src/mapper.ts:14

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

packages/utils/src/memoize.ts:10

___

### merge

▸ **merge**<`Values`\>(`...values`): [`MergeAll`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#mergeall)<`Values`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends `object`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `Values` |

#### Returns

[`MergeAll`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#mergeall)<`Values`\>

#### Defined in

packages/utils/src/merge.ts:5

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

packages/utils/src/IndexCursor/parseFilterCursor.ts:10

___

### ms

▸ **ms**(`value`, `options?`): `number`

Parse or format the given value.

**`Throws`**

Error if `value` is not a non-empty string or a number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`StringValue`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringvalue) | The string or number to convert |
| `options?` | `Options` | Options for the conversion |

#### Returns

`number`

#### Defined in

packages/utils/src/ms.ts:65

▸ **ms**(`value`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

packages/utils/src/ms.ts:66

___

### nonNullValues

▸ **nonNullValues**<`T`\>(`object`, `customMessage?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | { [key in string \| number \| symbol]: undefined \| null \| T[key] } | `undefined` |
| `customMessage` | `string` | `''` |

#### Returns

`T`

#### Defined in

packages/utils/src/invariant.ts:20

___

### notNull

▸ **notNull**<`T`\>(`input`, `appendErrorMessage?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T` | `undefined` |
| `appendErrorMessage` | `string` \| `Error` | `''` |

#### Returns

`T`

#### Defined in

packages/utils/src/invariant.ts:55

___

### objectEntries

▸ **objectEntries**<`T`\>(`obj`): [`Entries`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#entries)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

[`Entries`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#entries)<`T`\>

#### Defined in

packages/utils/src/getKeys.ts:10

___

### override

▸ **override**<`T`, `O`\>(`input`, `overrider`): [`Override`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#override)<`T`, `O`\>

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

[`Override`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#override)<`T`, `O`\>

#### Defined in

packages/utils/src/override.ts:5

___

### parseFilterCursor

▸ **parseFilterCursor**(`initFullID`): [`ParsedIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParsedIndexCursor.md) \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `initFullID` | `string` |

#### Returns

[`ParsedIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParsedIndexCursor.md) \| ``null``

#### Defined in

packages/utils/src/IndexCursor/parseFilterCursor.ts:15

___

### parseIndexCursor

▸ **parseIndexCursor**(`init`, `options`): [`ParsedIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParsedIndexCursor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `string` \| `string`[] \| [`InitIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InitIndexCursor.md) |
| `options` | [`ParseCursorOptions`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParseCursorOptions.md) |

#### Returns

[`ParsedIndexCursor`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ParsedIndexCursor.md)

#### Defined in

packages/utils/src/IndexCursor/parseIndexCursor.ts:19

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

packages/utils/src/IndexCursor/parseIndexFieldName.ts:1

___

### parsePath

▸ **parsePath**(`init`): [`PathParsed`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#pathparsed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `string` \| (`string` \| `number`)[] |

#### Returns

[`PathParsed`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#pathparsed)

#### Defined in

packages/utils/src/parsePath.ts:15

___

### pick

▸ **pick**<`O`, `P`\>(`object`, `path`): [`IsKnown`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isknown)<`O`\> extends ``1`` ? `P` extends `string` ? [`PathType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`O`, `P`\> : `any` : `any`

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

[`IsKnown`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#isknown)<`O`\> extends ``1`` ? `P` extends `string` ? [`PathType`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`O`, `P`\> : `any` : `any`

#### Defined in

packages/utils/src/pick.ts:9

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

packages/utils/src/pluralize.ts:56

___

### project

▸ **project**<`T`, `Path`\>(`value`, `paths`): `T` \| {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Path` | [`Paths`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#paths)<`T`, ``10``\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `paths` | ``"*"`` \| `ArrayLike`<`Path`\> |

#### Returns

`T` \| {}

#### Defined in

packages/utils/src/project.ts:5

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

packages/utils/src/createProxy.ts:7

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

packages/utils/src/IndexCursor/joinIndexCursor.ts:167

___

### randomInt

▸ **randomInt**(`lower?`, `upper?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lower` | `number` | `0` |
| `upper` | `number` | `100` |

#### Returns

`number`

#### Defined in

packages/utils/src/randomInt.ts:1

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

packages/utils/src/randomItem.ts:4

___

### randomName

▸ **randomName**(): `string`

#### Returns

`string`

#### Defined in

packages/utils/src/randomItem.ts:18

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

packages/utils/src/reduceObject.ts:1

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

packages/utils/src/setByPath.ts:3

___

### setGlobalLogLevel

▸ **setGlobalLogLevel**(`level`): [`LogLevel`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevel)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevel) |

#### Returns

[`LogLevel`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#loglevel)

#### Defined in

packages/utils/src/logLevels.ts:35

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

packages/utils/src/formatWithPrettier.ts:22

___

### simpleObjectClone

▸ **simpleObjectClone**<`T`\>(`input`, `options?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `T` | `undefined` |
| `options` | `Object` | `undefined` |
| `options.sort` | `boolean` | `false` |

#### Returns

`T`

#### Defined in

packages/utils/src/simpleObjectClone.ts:7

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

packages/utils/src/simpleObjectHash.ts:7

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
| `seen` | `WeakMap`<`object`, `any`\> |

#### Returns

`O`

#### Defined in

packages/utils/src/sortObject.ts:4

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

packages/utils/src/IndexCursor/joinIndexCursor.ts:148

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

packages/utils/src/hashString.ts:3

___

### stringify

▸ **stringify**(`value`, `options?`): `string` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options` | [`StringifyOptions`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringifyoptions) |

#### Returns

`string` \| `undefined`

#### Defined in

packages/utils/src/BJSON.ts:268

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

packages/utils/src/IndexCursor/joinIndexCursor.ts:163

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

packages/utils/src/textToBase64.ts:4

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

packages/utils/src/typings/index.ts:9

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

packages/utils/src/typings/index.ts:21

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

packages/utils/src/typings/index.ts:19

___

### ufo

▸ **ufo**<`V`\>(`current`): [`UFO`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UFO-1.md)<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `V` |

#### Returns

[`UFO`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UFO-1.md)<`V`\>

#### Defined in

packages/utils/src/ufo.ts:8

___

### ufos

▸ **ufos**<`V`\>(`current`): [`UFO`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UFO-1.md)<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `V` |

#### Returns

[`UFO`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.UFO-1.md)<`V`\>

#### Defined in

packages/utils/src/ufo.ts:8

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

packages/utils/src/ulid.ts:3

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

packages/utils/src/uniq.ts:6

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

packages/utils/src/upperFirst.ts:1

___

### useProcess

▸ **useProcess**(): `Partial`<typeof `process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Returns

`Partial`<typeof `process`\> & { `env`: `Record`<`string`, `any`\> ; `isMock?`: `boolean` ; `cwd`: () => `string`  }

#### Defined in

packages/utils/src/useProcess.ts:9

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

packages/utils/src/objectEntries.ts:15

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
| `overrideError?` | <Err\>(`error`: `Err`) => `void` \| [`ErrorWithStack`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ErrorWithStack.md) |

#### Returns

`T`

#### Defined in

packages/utils/src/invariant.ts:75
