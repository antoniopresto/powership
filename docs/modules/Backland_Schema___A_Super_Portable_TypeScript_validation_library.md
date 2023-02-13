[Backland](../README.md) / [Modules](../modules.md) / Backland Schema - A Super Portable TypeScript validation library

# Module: Backland Schema - A Super Portable TypeScript validation library

## Table of contents

### References

- [InferField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferfield)

### Classes

- [AliasField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md)
- [AnyField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.AnyField.md)
- [BooleanField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.BooleanField.md)
- [CursorField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md)
- [DateField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.DateField.md)
- [EmailField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.EmailField.md)
- [EnumField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.EnumField.md)
- [FieldType](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)
- [FieldTypeError](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldTypeError.md)
- [FloatField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.FloatField.md)
- [GraphType](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)
- [IDField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.IDField.md)
- [IntField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.IntField.md)
- [LiteralField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md)
- [MetaField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)
- [NullField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.NullField.md)
- [ObjectField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md)
- [ObjectType](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)
- [RecordField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.RecordField.md)
- [StringField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.StringField.md)
- [UlidField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.UlidField.md)
- [UndefinedField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.UndefinedField.md)
- [UnionField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md)
- [UnknownField](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.UnknownField.md)

### Interfaces

- [CreateResolver](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.CreateResolver.md)
- [ExtendObjectDefinition](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)
- [ExtendType](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)
- [GraphTypeInTypeFieldDefinition](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeInTypeFieldDefinition.md)
- [GraphTypeLike](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md)
- [GraphTypeLikeFieldDefinition](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLikeFieldDefinition.md)
- [LiteralFieldDef](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md)
- [ObjectDefinitionInput](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)
- [ObjectInTypeFieldDefinition](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectInTypeFieldDefinition.md)
- [ObjectLike](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectLike.md)
- [ObjectTypeLikeFieldDefinition](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectTypeLikeFieldDefinition.md)
- [ParserHook](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ParserHook.md)
- [RemoveParserHook](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.RemoveParserHook.md)
- [TSFYCustomHandler](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.TSFYCustomHandler.md)
- [TSFyResult](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.TSFyResult.md)
- [TSFyWriterConfig](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md)

### Type Aliases

- [$inferableKey](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$inferablekey)
- [$sealed](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealed)
- [$sealedDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealeddef)
- [$sealedKey](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealedkey)
- [AliasFieldAggregation](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfieldaggregation)
- [AliasFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef)
- [AllFieldTypes](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfieldtypes)
- [AllFinalFieldDefinitions](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)
- [AnyResolver](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#anyresolver)
- [BacklandObjectDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#backlandobjectdefinition)
- [CommonDefSafe](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#commondefsafe)
- [CommonFieldDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#commonfielddefinition)
- [CommonFieldOptions](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#commonfieldoptions)
- [ComputeFieldDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#computefielddefinition)
- [CreateGraphQLObjectOptions](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#creategraphqlobjectoptions)
- [CursorType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype)
- [DateFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#datefielddef)
- [DescribeAndOverrideField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)
- [DescribeField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describefield)
- [DescribeObjectDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeobjectdefinition)
- [DescribeWithoutSeal](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)
- [FieldAsString](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldasstring)
- [FieldComposer](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)
- [FieldCreators](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcreators)
- [FieldDefinitionConfig](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fielddefinitionconfig)
- [FieldDefinitions](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fielddefinitions)
- [FieldExample](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldexample)
- [FieldExampleFunction](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldexamplefunction)
- [FieldInput](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldinput)
- [FieldInputLikeRequiredKey](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldinputlikerequiredkey)
- [FieldParserConfig](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparserconfig)
- [FieldParserOptionsObject](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject)
- [FieldTypeErrorCode](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeerrorcode)
- [FieldTypeName](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename)
- [FieldTypeOptions](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeoptions)
- [FieldTypeParser](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)
- [FinalFieldDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)
- [FinalFieldDefinitionStrict](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinitionstrict)
- [FinalObjectDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalobjectdefinition)
- [FlattenFieldDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#flattenfielddefinition)
- [FloatFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#floatfielddef)
- [GraphQLSchemaWithUtils](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#graphqlschemawithutils)
- [GraphTypeArgs](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#graphtypeargs)
- [GraphTypeKID](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#graphtypekid)
- [GroupedResolvers](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#groupedresolvers)
- [IDFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#idfielddef)
- [ImplementObject](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#implementobject)
- [Infer](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)
- [InferFinalField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferfinalfield)
- [InferGraphType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infergraphtype)
- [InferObjectDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)
- [InferObjectType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjecttype)
- [InferRecordFieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferrecordfieldtype)
- [InferResolverArgs](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferresolverargs)
- [InferString](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferstring)
- [InferTypeName](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infertypename)
- [InnerDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)
- [IntFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#intfielddef)
- [LazyParseGraphTypePayload](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#lazyparsegraphtypepayload)
- [ListDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinition)
- [ListDefinitionObject](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitionobject)
- [ListDefinitionTruthy](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy)
- [MakeFieldOptional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#makefieldoptional)
- [MakeFieldRequired](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#makefieldrequired)
- [MakeTypeList](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)
- [MakeTypeOptional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypeoptional)
- [MakeTypeRequired](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#maketyperequired)
- [MakeTypeSingle](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypesingle)
- [MetaFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef)
- [OHas](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#ohas)
- [OPick](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#opick)
- [OWritable](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#owritable)
- [ObjectFieldInput](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput)
- [ObjectMockOptions](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectmockoptions)
- [ObjectTypeFromInput](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)
- [ObjectTypeKID](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypekid)
- [OptionalResolverConfig](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#optionalresolverconfig)
- [OverrideField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)
- [ParseFieldOptions](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parsefieldoptions)
- [ParseSpecialObjectKeys](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parsespecialobjectkeys)
- [RecordFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#recordfielddef)
- [Resolver](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolver)
- [ResolverContextBase](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolvercontextbase)
- [ResolverKind](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolverkind)
- [ResolverResolve](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolverresolve)
- [ResolversToTypeScriptOptions](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolverstotypescriptoptions)
- [Seal](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#seal)
- [SealedField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#sealedfield)
- [ShortenFinalFieldDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#shortenfinalfielddefinition)
- [SpecialObjectKeys](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#specialobjectkeys)
- [StringFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#stringfielddef)
- [TAnyFieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)
- [TSFYConfig](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyconfig)
- [TSFYContext](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfycontext)
- [TSFYPart](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfypart)
- [TSFYRef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyref)
- [TSFyChunkDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfychunkdefinition)
- [TSFyHandlerUtils](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyhandlerutils)
- [TSFyTypeDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfytypedef)
- [Types](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#types)
- [UnknownFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#unknownfielddef)
- [ValidationCustomMessage](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage)
- [\_DescribeField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_describefield)
- [\_DescribeObject](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_describeobject)
- [\_FieldKV](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_fieldkv)
- [\_GetAliasFields](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getaliasfields)
- [\_GetKey](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)
- [\_GetParts](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getparts)
- [\_InferAlias](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferalias)
- [\_InferAliasFields](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferaliasfields)
- [\_InferField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferfield)
- [\_InferFinalField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferfinalfield)
- [\_InferObjectDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferobjectdefinition)
- [\_InferSpecialObjectKeys](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferspecialobjectkeys)
- [\_InnerDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_innerdef)
- [\_ObjectFieldInputBase](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_objectfieldinputbase)
- [\_OmitUndefined](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_omitundefined)
- [\_ResolverArgs](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)
- [\_ShortenFinalFieldDefinitionFieldAsString](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_shortenfinalfielddefinitionfieldasstring)
- [\_ToString](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_tostring)
- [\_WithInferList](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_withinferlist)
- [\_WithInferOptional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_withinferoptional)

### Variables

- [$inferableKey](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$inferablekey-1)
- [$sealed](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealed-1)
- [$sealedKey](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealedkey-1)
- [BacklandObject](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#backlandobject)
- [CACHED\_FIELD\_INSTANCE\_KEY](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cached_field_instance_key)
- [CircularDeps](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#circulardeps)
- [FieldTypeErrorCodes](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeerrorcodes)
- [FieldsTypeCache](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldstypecache)
- [SpecialObjectKeyEnum](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#specialobjectkeyenum)
- [ULID\_REGEX](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#ulid_regex)
- [\_parserHooks](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_parserhooks)
- [create](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#create)
- [defaultTypesDest](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#defaulttypesdest)
- [isFieldTypeName](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#isfieldtypename)
- [objectMetaFieldKey](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectmetafieldkey)
- [resolverKinds](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolverkinds)
- [tsfy\_defaults](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfy_defaults)
- [types](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#types-1)

### Functions

- [\_\_getCachedFieldInstance](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#__getcachedfieldinstance)
- [cleanMetaField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cleanmetafield)
- [createBacklandObject](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#createbacklandobject)
- [createEmptyMetaField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#createemptymetafield)
- [createFieldTypeError](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#createfieldtypeerror)
- [createGraphQLSchema](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#creategraphqlschema)
- [createObjectType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#createobjecttype)
- [createResolver](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#createresolver)
- [createResolverFactory](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#createresolverfactory)
- [createSchema](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#createschema)
- [createTSFYContext](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#createtsfycontext)
- [createTSfyRef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#createtsfyref)
- [createType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#createtype)
- [deleteCachedFieldInstance](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#deletecachedfieldinstance)
- [extendObjectDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#extendobjectdefinition)
- [extendType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#extendtype)
- [fieldToMock](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtomock)
- [getObjectDefinitionId](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#getobjectdefinitionid)
- [getObjectDefinitionMetaField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#getobjectdefinitionmetafield)
- [getResolver](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#getresolver)
- [getTSFyIdentifier](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#gettsfyidentifier)
- [getType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#gettype)
- [implementObject](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#implementobject-1)
- [isFieldError](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#isfielderror)
- [isFieldInstance](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#isfieldinstance)
- [isHiddenFieldName](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#ishiddenfieldname)
- [isMetaField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#ismetafield)
- [isMetaFieldKey](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#ismetafieldkey)
- [isObject](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#isobject)
- [isObjectAsTypeDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#isobjectastypedefinition)
- [isObjectValidationError](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#isobjectvalidationerror)
- [isPossibleArgsDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#ispossibleargsdef)
- [moduleWrapper](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#modulewrapper)
- [objectMock](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectmock)
- [parseField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parsefield)
- [parseFieldDefinitionConfig](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parsefielddefinitionconfig)
- [parseFlattenFieldDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parseflattenfielddefinition)
- [parseObjectDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parseobjectdefinition)
- [parseObjectField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parseobjectfield)
- [parseValidationError](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parsevalidationerror)
- [resetTypesCache](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resettypescache)
- [resolversToTypescript](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolverstotypescript)
- [resolversTypescriptParts](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolverstypescriptparts)
- [setParserHook](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#setparserhook)
- [tsfy](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfy)
- [tsfyWriter](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfywriter)

## References

### InferField

Renames and re-exports [Infer](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)

## Type Aliases

### $inferableKey

Ƭ **$inferableKey**: typeof [`$inferableKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$inferablekey-1)

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:16](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L16)

[packages/schema/src/fields/Infer/DescribeField.ts:17](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L17)

___

### $sealed

Ƭ **$sealed**: typeof [`$sealed`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealed-1)

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:13](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L13)

[packages/schema/src/fields/Infer/DescribeField.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L14)

___

### $sealedDef

Ƭ **$sealedDef**: `Compute`<{ `list`: ``false`` ; `literal`: [`$sealed`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealed-1) ; `optional`: ``false``  } & [`CommonDefSafe`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#commondefsafe)\>

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:39](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L39)

___

### $sealedKey

Ƭ **$sealedKey**: typeof [`$sealedKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealedkey-1)

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:11](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L11)

[packages/schema/src/fields/Infer/DescribeField.ts:12](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L12)

___

### AliasFieldAggregation

Ƭ **AliasFieldAggregation**<`Parent`\>: { `type`: [`FieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldinput)  } & { `aggregate`: `Aggregation`<`Parent`\> \| `Readonly`<`Aggregation`<`Parent`\>\> ; `from`: `ObjectDotNotations`<`Parent`\>  } \| { `aggregate`: `Aggregation`<`Parent`\> \| `Readonly`<`Aggregation`<`Parent`\>\> ; `from?`: `undefined`  } \| { `aggregate?`: `undefined` ; `from`: `ObjectDotNotations`<`Parent`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parent` | `any` |

#### Defined in

[packages/schema/src/fields/AliasField.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/AliasField.ts#L21)

___

### AliasFieldDef

Ƭ **AliasFieldDef**: `string` \| [`AliasFieldAggregation`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfieldaggregation)

#### Defined in

[packages/schema/src/fields/AliasField.ts:35](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/AliasField.ts#L35)

___

### AllFieldTypes

Ƭ **AllFieldTypes**: { [K in keyof FieldDefinitions]: FieldType<unknown, K, FieldDefinitions[K], 0, 0\> }

#### Defined in

[packages/schema/src/fields/FieldType.ts:329](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L329)

___

### AllFinalFieldDefinitions

Ƭ **AllFinalFieldDefinitions**: { [Type in FieldTypeName]: Object }

#### Defined in

[packages/schema/src/fields/_parseFields.ts:36](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L36)

___

### AnyResolver

Ƭ **AnyResolver**: [`Resolver`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolver)<`any`, `any`, `any`, `any`\>

#### Defined in

[packages/schema/src/Resolver.ts:153](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L153)

___

### BacklandObjectDefinition

Ƭ **BacklandObjectDefinition**: [`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)

#### Defined in

[packages/schema/src/TObjectConfig.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/TObjectConfig.ts#L5)

___

### CommonDefSafe

Ƭ **CommonDefSafe**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `example?` | [`FieldExample`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldexample) |
| `hidden?` | `boolean` |
| `name?` | `string` |

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:56](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L56)

___

### CommonFieldDefinition

Ƭ **CommonFieldDefinition**<`T`\>: { `type`: `T`  } & [`CommonFieldOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#commonfieldoptions)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L70)

___

### CommonFieldOptions

Ƭ **CommonFieldOptions**: [`CommonDefSafe`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#commondefsafe) & { `def?`: `any` ; `defaultValue?`: `any` ; `list?`: [`ListDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinition) ; `optional?`: `boolean`  }

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:63](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L63)

___

### ComputeFieldDefinition

Ƭ **ComputeFieldDefinition**<`T`\>: `T` extends `unknown` ? { `__infer`: `_get`<`T`, ``"__infer"``\> ; `def`: `_get`<`T`, ``"def"``\> ; `defaultValue`: `_get`<`T`, ``"defaultValue"``\> ; `description`: `_get`<`T`, ``"description"``\> ; `example`: `_get`<`T`, ``"example"``\> ; `hidden`: `_get`<`T`, ``"hidden"``\> ; `list`: `_get`<`T`, ``"list"``\> ; `name`: `_get`<`T`, ``"name"``\> ; `optional`: `_get`<`T`, ``"optional"``\> ; `type`: `_get`<`T`, ``"type"``\>  } : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:41](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L41)

___

### CreateGraphQLObjectOptions

Ƭ **CreateGraphQLObjectOptions**: `Partial`<`GraphQLSchemaConfig`\>

#### Defined in

[packages/schema/src/createGraphQLSchema.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/createGraphQLSchema.ts#L22)

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

[packages/schema/src/fields/_fieldDefinitions.ts:12](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L12)

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

[packages/schema/src/fields/DateField.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/DateField.ts#L6)

___

### DescribeAndOverrideField

Ƭ **DescribeAndOverrideField**<`T`, `Override`\>: [`DescribeWithoutSeal`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describewithoutseal)<`T`\> extends infer R ? `R` extends [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition) ? [`SealedField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#sealedfield)<`Merge`<{ [K in keyof R as K extends keyof Override ? never : K]: R[K] }, `Override`\>\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |
| `Override` |

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:58](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L58)

___

### DescribeField

Ƭ **DescribeField**<`Input`\>: [[`$sealedKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealedkey-1)] extends [keyof `Input`] ? `Input` : [`SealedField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#sealedfield)<[`_DescribeField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_describefield)<`Input`\>\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:19](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L19)

___

### DescribeObjectDefinition

Ƭ **DescribeObjectDefinition**<`Input`\>: [`$sealedKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealedkey-1) extends keyof `Input` ? `Input` : [`Input`] extends [`object`] ? [`Seal`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#seal)<{ -readonly [K in keyof Input]: DescribeField<Input[K]\> }\> : [`Seal`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#seal)<{}\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:72](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L72)

___

### DescribeWithoutSeal

Ƭ **DescribeWithoutSeal**<`T`\>: `Omit`<[`DescribeField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describefield)<`T`\>, [`$inferableKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$inferablekey-1) \| [`$sealedKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealedkey-1)\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:51](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L51)

___

### FieldAsString

Ƭ **FieldAsString**: [`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) \| \`${FieldTypeName}?\` \| \`[${FieldTypeName}]\` \| \`[${FieldTypeName}]?\`

#### Defined in

[packages/schema/src/fields/_parseFields.ts:66](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L66)

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
| `def` | [`FinalFieldDefinitionStrict`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinitionstrict) |
| `validate` | (`input`: `any`, `parent`: `Schema`) => `T` |

#### Defined in

[packages/schema/src/fields/FieldType.ts:30](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L30)

___

### FieldCreators

Ƭ **FieldCreators**: `Readonly`<{ [K in FieldTypeName]: Types[K]["create"] }\>

#### Defined in

[packages/schema/src/fields/fieldTypes.ts:86](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/fieldTypes.ts#L86)

___

### FieldDefinitionConfig

Ƭ **FieldDefinitionConfig**: [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput)

#### Defined in

[packages/schema/src/TObjectConfig.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/TObjectConfig.ts#L6)

___

### FieldDefinitions

Ƭ **FieldDefinitions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ID` | { `autoCreate?`: `boolean`  } \| `undefined` |
| `alias` | [`AliasFieldDef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef) |
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
| `meta` | [`MetaFieldDef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef) |
| `null` | `undefined` |
| `object` | { `[K: string]`: [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput);  } \| `Readonly`<{ `[K: string]`: [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput);  }\> \| [`ObjectLike`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectLike.md) |
| `phone` | `PhoneFieldDef` |
| `record` | [`RecordFieldDef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#recordfielddef) \| `undefined` |
| `string` | { `max?`: `number` ; `min?`: `number` ; `regex?`: [`string`] \| [`string`, `string`] \| `Readonly`<[`string`] \| [`string`, `string`]\>  } \| `undefined` |
| `ulid` | { `autoCreate?`: `boolean`  } \| `undefined` |
| `undefined` | `undefined` |
| `union` | [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput)[] \| `Readonly`<[`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput)[]\> |
| `unknown` | [`UnknownFieldDef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#unknownfielddef) \| `undefined` |

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:77](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L77)

___

### FieldExample

Ƭ **FieldExample**: [`FieldExampleFunction`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldexamplefunction) \| `string`

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:33](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L33)

___

### FieldExampleFunction

Ƭ **FieldExampleFunction**: () => `string` \| `Promise`<`string`\>

#### Type declaration

▸ (): `string` \| `Promise`<`string`\>

##### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:32](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L32)

___

### FieldInput

Ƭ **FieldInput**: [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput)

#### Defined in

[packages/schema/src/fields/_parseFields.ts:28](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L28)

___

### FieldInputLikeRequiredKey

Ƭ **FieldInputLikeRequiredKey**: [`ObjectTypeKID`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypekid) \| [`GraphTypeKID`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#graphtypekid) \| [`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) \| ``"type"``

#### Defined in

[packages/schema/src/fields/Infer/InferField.ts:93](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferField.ts#L93)

___

### FieldParserConfig

Ƭ **FieldParserConfig**: [`ValidationCustomMessage`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage) \| [`FieldParserOptionsObject`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject)

#### Defined in

[packages/schema/src/applyValidator.ts:17](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/applyValidator.ts#L17)

___

### FieldParserOptionsObject

Ƭ **FieldParserOptionsObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowExtraFields?` | `boolean` |
| `customErrorMessage?` | [`ValidationCustomMessage`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage) |
| `customMessage?` | [`ValidationCustomMessage`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage) |
| `exclude?` | `string`[] |
| `excludeInvalidListItems?` | `boolean` |
| `includeHidden?` | `boolean` |
| `partial?` | `boolean` |

#### Defined in

[packages/schema/src/applyValidator.ts:7](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/applyValidator.ts#L7)

___

### FieldTypeErrorCode

Ƭ **FieldTypeErrorCode**: typeof [`FieldTypeErrorCodes`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeerrorcodes)[`number`]

#### Defined in

[packages/schema/src/fields/FieldTypeErrors.ts:15](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldTypeErrors.ts#L15)

___

### FieldTypeName

Ƭ **FieldTypeName**: `Extract`<keyof [`FieldDefinitions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fielddefinitions), `string`\>

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:167](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L167)

___

### FieldTypeOptions

Ƭ **FieldTypeOptions**: [`ListDefinitionObject`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitionobject) & { `[K: string]`: `unknown`;  }

#### Defined in

[packages/schema/src/fields/FieldType.ts:27](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L27)

___

### FieldTypeParser

Ƭ **FieldTypeParser**<`Type`\>: (`input`: `any`, `config?`: [`FieldParserConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparserconfig)) => `Type`

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
| `config?` | [`FieldParserConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparserconfig) |

##### Returns

`Type`

#### Defined in

[packages/schema/src/applyValidator.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/applyValidator.ts#L21)

___

### FinalFieldDefinition

Ƭ **FinalFieldDefinition**: { [K in FieldTypeName]: CommonFieldDefinition<K\> }[[`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename)]

#### Defined in

[packages/schema/src/fields/_parseFields.ts:52](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L52)

___

### FinalFieldDefinitionStrict

Ƭ **FinalFieldDefinitionStrict**: [`AllFinalFieldDefinitions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[keyof [`AllFinalFieldDefinitions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)]

#### Defined in

[packages/schema/src/fields/_parseFields.ts:49](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L49)

___

### FinalObjectDefinition

Ƭ **FinalObjectDefinition**: `Object`

#### Index signature

▪ [K: `string`]: [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)

#### Defined in

[packages/schema/src/fields/_parseFields.ts:34](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L34)

___

### FlattenFieldDefinition

Ƭ **FlattenFieldDefinition**: { [type in FieldTypeName]: { [K in type]: [FieldDefinitions[K]] extends [undefined] ? FieldDefinitions[K] \| Object : FieldDefinitions[K] } }[[`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename)] & [`CommonFieldOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#commonfieldoptions)

#### Defined in

[packages/schema/src/fields/_parseFields.ts:57](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L57)

___

### FloatFieldDef

Ƭ **FloatFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `number` |
| `min?` | `number` |

#### Defined in

[packages/schema/src/fields/FloatField.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FloatField.ts#L5)

___

### GraphQLSchemaWithUtils

Ƭ **GraphQLSchemaWithUtils**: `GraphQLSchema` & { `utils`: { `generateClientUtils`: () => `Promise`<`string`\> ; `grouped`: [`GroupedResolvers`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#groupedresolvers) ; `print`: () => `string` ; `queryExamples`: (`options?`: [`ObjectMockOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectmockoptions) & { `resolver?`: `string`  }) => `string` ; `queryTemplates`: () => `SchemaQueryTemplatesResult` ; `registeredResolvers`: [`AnyResolver`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#anyresolver)[] ; `resolvers`: [`AnyResolver`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#anyresolver)[] ; `typescript`: (`options?`: [`ResolversToTypeScriptOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolverstotypescriptoptions)) => `Promise`<`string`\> ; `usedConfig`: `GraphQLSchemaConfig`  }  }

#### Defined in

[packages/schema/src/createGraphQLSchema.ts:28](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/createGraphQLSchema.ts#L28)

___

### GraphTypeArgs

Ƭ **GraphTypeArgs**<`Def`\>: [`string`, `Def` \| (`utils`: `BacklandModules`) => `Def`] \| [`Def` \| (`utils`: `BacklandModules`) => `Def`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) = [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:363](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L363)

___

### GraphTypeKID

Ƭ **GraphTypeKID**: ``"__isGraphType"``

#### Defined in

[packages/schema/src/fields/Infer/InferField.ts:89](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferField.ts#L89)

___

### GroupedResolvers

Ƭ **GroupedResolvers**: { [K in AnyResolver["kind"]]: undefined \| AnyResolver[] }

#### Defined in

[packages/schema/src/createGraphQLSchema.ts:24](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/createGraphQLSchema.ts#L24)

___

### IDFieldDef

Ƭ **IDFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoCreate?` | `boolean` |

#### Defined in

[packages/schema/src/fields/IDField.ts:7](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/IDField.ts#L7)

___

### ImplementObject

Ƭ **ImplementObject**<`Dest`, `Extends`\>: `Extends` extends [] ? `Dest` : `Extends` extends [infer Item, ...(infer Rest)] ? `Dest` extends [`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<infer DestDef\> ? `Item` extends [`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<infer ItemDef\> ? [`ImplementObject`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#implementobject)<[`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<{ [K in keyof Merge<ItemDef, DestDef\>]: Merge<ItemDef, DestDef\>[K] }\>, `Rest`\> : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Dest` |
| `Extends` |

#### Defined in

[packages/schema/src/implementObject.ts:10](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/implementObject.ts#L10)

___

### Infer

Ƭ **Infer**<`Input`\>: `OnlyKnown`<`Input`\> extends infer Known ? `Known` extends `string` ? [`InferString`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferstring)<`Known`\> : `Known` extends `object` ? [`$inferableKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$inferablekey-1) extends keyof `Known` ? `Known`[[`$inferableKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$inferablekey-1)] : [`_WithInferOptional`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_withinferoptional)<`Known`, [`_WithInferList`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_withinferlist)<`Known`, [`_InferField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferfield)<`Known`\>\>\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

[packages/schema/src/fields/Infer/InferField.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferField.ts#L14)

___

### InferFinalField

Ƭ **InferFinalField**<`TypeName`, `Def`\>: [`_InferFinalField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferfinalfield)<`TypeName`, `Def`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TypeName` | extends [`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) |
| `Def` | `never` |

#### Defined in

[packages/schema/src/fields/Infer/InferFinalField.ts:8](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferFinalField.ts#L8)

___

### InferGraphType

Ƭ **InferGraphType**<`Input`\>: `Input` extends `unknown` ? `Input` extends [`GraphTypeLikeFieldDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLikeFieldDefinition.md) ? [`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`Input`[``"definition"``]\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

[packages/schema/src/fields/Infer/InferGraphType.ts:13](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferGraphType.ts#L13)

___

### InferObjectDefinition

Ƭ **InferObjectDefinition**<`Input`\>: [`Input`] extends [`object`] ? `NullableToPartial`<[`_InferObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferobjectdefinition)<{ -readonly [K in keyof Input as K extends \`$${string}\` ? never : K]: Input[K] }\> & [`ParseSpecialObjectKeys`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parsespecialobjectkeys)<`Input`\>\> : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

[packages/schema/src/fields/Infer/InferObjectType.ts:27](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferObjectType.ts#L27)

___

### InferObjectType

Ƭ **InferObjectType**<`T`\>: `T` extends `unknown` ? `T` extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectTypeLikeFieldDefinition.md) ? [`InferObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`T`[``"definition"``]\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/schema/src/fields/Infer/InferObjectType.ts:19](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferObjectType.ts#L19)

___

### InferRecordFieldType

Ƭ **InferRecordFieldType**<`Def`\>: `Def` extends { `keyType`: ``"int"`` \| ``"float"``  } ? { `[K: number]`: [`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`Def` extends { `type`: [`FieldDefinitionConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fielddefinitionconfig)  } ? `Def`[``"type"``] : ``"any"``\>;  } : { `[K: string]`: [`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`Def` extends { `type`: [`FieldDefinitionConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fielddefinitionconfig)  } ? `Def`[``"type"``] : ``"any"``\>;  }

#### Type parameters

| Name |
| :------ |
| `Def` |

#### Defined in

[packages/schema/src/fields/RecordField.ts:18](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/RecordField.ts#L18)

___

### InferResolverArgs

Ƭ **InferResolverArgs**<`ArgsDef`\>: [`ArgsDef`] extends [`never`] ? `Record`<`string`, `unknown`\> : [`ArgsDef`] extends [`undefined`] ? `Record`<`string`, `unknown`\> : [`ArgsDef`] extends [{ `[K: string]`: `unknown`;  }] ? [`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<{ `object`: `ArgsDef`  }\> : `Record`<`string`, `unknown`\>

#### Type parameters

| Name |
| :------ |
| `ArgsDef` |

#### Defined in

[packages/schema/src/Resolver.ts:116](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L116)

___

### InferString

Ƭ **InferString**<`Input`\>: `Input` extends \`${infer Start}?\` ? [`InferString`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferstring)<`Start`\> \| `undefined` : `Input` extends \`[${infer Start}]\` ? [`InferString`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferstring)<`Start`\>[] : `Input` extends [`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) ? [`InferTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infertypename)<`Input`\> : `Input` extends \`[${infer Type}]\` ? [`InferString`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferstring)<`Type`\>[] : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `string` |

#### Defined in

[packages/schema/src/fields/Infer/InferString.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferString.ts#L3)

___

### InferTypeName

Ƭ **InferTypeName**<`Type`\>: `Type` extends `unknown` ? `Type` extends [`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) ? `Type` extends ``"any"`` ? `any` : `Type` extends ``"boolean"`` ? `boolean` : `Type` extends ``"cursor"`` ? [`CursorType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype) : `Type` extends ``"phone"`` ? `string` : `Type` extends ``"null"`` ? ``null`` : `Type` extends ``"undefined"`` ? `undefined` : `Type` extends ``"unknown"`` ? `unknown` : `Type` extends ``"string"`` ? `string` : `Type` extends ``"date"`` ? `Date` : `Type` extends ``"email"`` ? `string` : `Type` extends ``"float"`` ? `number` : `Type` extends ``"record"`` ? { `[K: string]`: `any`;  } : `Type` extends ``"int"`` ? `number` : `Type` extends ``"ulid"`` ? `string` : `Type` extends ``"ID"`` ? `string` : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

[packages/schema/src/fields/Infer/InferString.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferString.ts#L22)

___

### InnerDef

Ƭ **InnerDef**<`Input`\>: [`Input`] extends [`object`] ? [`DescribeField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describefield)<`Input`\> extends infer R ? `IsKnown`<`R`\> extends ``1`` ? [`_InnerDef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_innerdef)<`R`\> : [`DescribeObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeobjectdefinition)<`Input`\> : `never` : `never` extends infer R ? { [K in keyof R]: R[K] } & {} : {}

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:223](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L223)

___

### IntFieldDef

Ƭ **IntFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `number` |
| `min?` | `number` |

#### Defined in

[packages/schema/src/fields/IntField.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/IntField.ts#L5)

___

### LazyParseGraphTypePayload

Ƭ **LazyParseGraphTypePayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `definition` | [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition) |
| `definitionInput` | [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) \| (`utils`: `BacklandModules`) => [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `field` | [`TAnyFieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype) |
| `id` | `string` \| `undefined` |
| `idFromArgs` | `string` \| `undefined` |
| `objectType?` | `any` |

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:351](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L351)

___

### ListDefinition

Ƭ **ListDefinition**: [`ListDefinitionObject`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitionobject) \| `boolean`

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:29](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L29)

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

[packages/schema/src/fields/_fieldDefinitions.ts:23](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L23)

___

### ListDefinitionTruthy

Ƭ **ListDefinitionTruthy**: [`ListDefinitionObject`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitionobject) \| ``true``

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:30](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L30)

___

### MakeFieldOptional

Ƭ **MakeFieldOptional**<`Object`, `OptionalField`\>: [`OverrideField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<`Object`, `OptionalField`, { `optional`: ``true``  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Object` | extends `object` |
| `OptionalField` | extends `A.Key` |

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:248](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L248)

___

### MakeFieldRequired

Ƭ **MakeFieldRequired**<`Object`, `OptionalField`\>: [`OverrideField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<`Object`, `OptionalField`, { `optional`: ``false``  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Object` | extends `object` |
| `OptionalField` | extends `A.Key` |

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:253](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L253)

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

[packages/schema/src/extendType.ts:136](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L136)

___

### MakeTypeOptional

Ƭ **MakeTypeOptional**<`Type`\>: [`DescribeAndOverrideField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Type`, { `optional`: ``true``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

[packages/schema/src/extendType.ts:126](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L126)

___

### MakeTypeRequired

Ƭ **MakeTypeRequired**<`Type`\>: [`DescribeAndOverrideField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Type`, { `optional`: ``false``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

[packages/schema/src/extendType.ts:131](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L131)

___

### MakeTypeSingle

Ƭ **MakeTypeSingle**<`Type`\>: [`DescribeAndOverrideField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Type`, { `list`: ``false``  }\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

[packages/schema/src/extendType.ts:138](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L138)

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

[packages/schema/src/fields/MetaFieldField.ts:10](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L10)

___

### OHas

Ƭ **OHas**<`Obj`, `K`\>: `Obj` extends `object` ? `K` extends `string` ? `O.Has`<`Obj`, `K`\> : ``0`` : ``0``

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `K` |

#### Defined in

[packages/schema/src/fields/Infer/OHas.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/OHas.ts#L3)

___

### OPick

Ƭ **OPick**<`Obj`, `K`\>: `Obj` extends `unknown` ? `Obj` extends `object` ? `K` extends `unknown` ? `K` extends `string` ? `K` extends keyof `Obj` ? `Obj`[`K`] : `never` : `never` : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Obj` |
| `K` |

#### Defined in

[packages/schema/src/fields/Infer/OHas.ts:9](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/OHas.ts#L9)

___

### OWritable

Ƭ **OWritable**<`T`\>: `T` extends `object` ? `O.Writable`<`T`, `Extract`<keyof `T`, `string`\>, ``"deep"``\> : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/schema/src/fields/Infer/OHas.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/OHas.ts#L21)

___

### ObjectFieldInput

Ƭ **ObjectFieldInput**: [`_ObjectFieldInputBase`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_objectfieldinputbase) \| [`FlattenFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#flattenfielddefinition)

#### Defined in

[packages/schema/src/fields/_parseFields.ts:18](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L18)

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

[packages/schema/src/mockObject.ts:24](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/mockObject.ts#L24)

___

### ObjectTypeFromInput

Ƭ **ObjectTypeFromInput**<`DefinitionInput`\>: `IsKnown`<`DefinitionInput`\> extends ``1`` ? [`DefinitionInput`] extends [[`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)] ? [`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`DefinitionInput`\> : `never` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)\> |

#### Defined in

[packages/schema/src/ObjectType.ts:605](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L605)

___

### ObjectTypeKID

Ƭ **ObjectTypeKID**: ``"__isBacklandObject"``

#### Defined in

[packages/schema/src/fields/Infer/InferField.ts:88](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferField.ts#L88)

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

[packages/schema/src/Resolver.ts:191](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L191)

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

[packages/schema/src/extendObjectDefinition.ts:258](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L258)

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

[packages/schema/src/parseObjectDefinition.ts:356](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L356)

___

### ParseSpecialObjectKeys

Ƭ **ParseSpecialObjectKeys**<`T`\>: { -readonly [K in keyof T as K extends "$string" ? string : K extends "$number" ? number : never]: Infer<T[K]\> } & {}

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/schema/src/fields/Infer/InferObjectType.ts:38](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferObjectType.ts#L38)

___

### RecordFieldDef

Ƭ **RecordFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `keyType?` | `ValidKeyType` |
| `type?` | [`FieldDefinitionConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fielddefinitionconfig) |

#### Defined in

[packages/schema/src/fields/RecordField.ts:13](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/RecordField.ts#L13)

___

### Resolver

Ƭ **Resolver**<`Context`, `Root`, `Type`, `Args`\>: `Compute`<[`OptionalResolverConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#optionalresolverconfig)<`Root`, `Context`, `Args`\> & { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `Args`, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Type`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  }, ``1``\>

#### Type parameters

| Name |
| :------ |
| `Context` |
| `Root` |
| `Type` |
| `Args` |

#### Defined in

[packages/schema/src/Resolver.ts:128](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L128)

___

### ResolverContextBase

Ƭ **ResolverContextBase**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Defined in

[packages/schema/src/Resolver.ts:20](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L20)

___

### ResolverKind

Ƭ **ResolverKind**: typeof `resolverKinds.enum`

#### Defined in

[packages/schema/src/createGraphQLSchema.ts:45](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/createGraphQLSchema.ts#L45)

___

### ResolverResolve

Ƭ **ResolverResolve**<`Context`, `Source`, `TypeDef`, `ArgsDef`\>: (`x`: [`InferResolverArgs`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferresolverargs)<`ArgsDef`\>) => `any` extends (`x`: infer R) => `any` ? { [K in keyof R]: R[K] } : `never` extends infer Args ? (`x`: [`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`TypeDef`\>) => `any` extends (`x`: infer R) => `any` ? (`parent`: `Compute`<`Source`\>, `args`: `Compute`<`Args`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `IsKnown`<`R`\> extends ``1`` ? `Compute`<`Promise`<`R`\> \| `R`\> : `any` : (`parent`: `Source`, `args`: `Record`<`string`, `unknown`\>, `context`: `Context`, `info`: `GraphQLResolveInfo`) => `Promise`<`any`\> \| `any` : `never` extends infer R ? `R` : `never`

#### Type parameters

| Name |
| :------ |
| `Context` |
| `Source` |
| `TypeDef` |
| `ArgsDef` |

#### Defined in

[packages/schema/src/Resolver.ts:155](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L155)

___

### ResolversToTypeScriptOptions

Ƭ **ResolversToTypeScriptOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `ObjectToTypescriptOptions` |
| `resolvers` | [`AnyResolver`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#anyresolver)[] |

#### Defined in

[packages/schema/src/createGraphQLSchema.ts:157](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/createGraphQLSchema.ts#L157)

___

### Seal

Ƭ **Seal**<`T`\>: `Merge`<`T`, { `$sealed`: [`$sealedDef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealeddef)  }\> extends infer R ? { [K in keyof R]: R[K] } & {} : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:44](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L44)

___

### SealedField

Ƭ **SealedField**<`D`\>: ``"type"`` extends keyof `D` ? [`Seal`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#seal)<`Merge`<[`CommonDefSafe`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#commondefsafe), `D`\>\> : `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `object` |

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:35](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L35)

___

### ShortenFinalFieldDefinition

Ƭ **ShortenFinalFieldDefinition**: { [Type in FieldTypeName]: { [K in \_ShortenFinalFieldDefinitionFieldAsString<Type\>]: K \| { [L in K]: FieldDefinitions[Type] \| Object } }[\_ShortenFinalFieldDefinitionFieldAsString<Type\>] }[[`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename)]

#### Defined in

[packages/schema/src/fields/_parseFields.ts:75](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L75)

___

### SpecialObjectKeys

Ƭ **SpecialObjectKeys**: typeof `SpecialObjectKeyEnum.enum`

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:75](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L75)

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

[packages/schema/src/fields/StringField.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/StringField.ts#L6)

___

### TAnyFieldType

Ƭ **TAnyFieldType**: [`AllFieldTypes`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfieldtypes)[keyof [`AllFieldTypes`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfieldtypes)]

#### Defined in

[packages/schema/src/fields/FieldType.ts:339](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L339)

___

### TSFYConfig

Ƭ **TSFYConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `context?` | [`TSFYContext`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfycontext) |
| `customParser?` | [`TSFYCustomHandler`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.TSFYCustomHandler.md) |
| `groupInTypeThreshold?` | `number` |
| `iterationLimit?` | `number` |
| `many?` | `boolean` |

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:19](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L19)

___

### TSFYContext

Ƭ **TSFYContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | `PartialRequired`<[`TSFYConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyconfig), ``"customParser"``\> |
| `header` | `Record`<`string`, `string`\> |
| `refs` | `Record`<`string`, [`TSFYRef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyref)\> |

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:209](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L209)

___

### TSFYPart

Ƭ **TSFYPart**: `string` \| [`TSFYRef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyref) \| [`TSFYPart`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfypart)[]

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:177](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L177)

___

### TSFYRef

Ƭ **TSFYRef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `hash` | `string` |
| `identifier` | `string` \| `undefined` |
| `parts` | [`TSFYPart`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfypart)[] |
| `result?` | `string` |

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:201](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L201)

___

### TSFyChunkDefinition

Ƭ **TSFyChunkDefinition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `functionArguments?` | [`TSFyTypeDef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfytypedef)[] |
| `functionResult?` | [`TSFyTypeDef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfytypedef) |
| `identifier?` | `string` |
| `value?` | `string` |

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:252](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L252)

___

### TSFyHandlerUtils

Ƭ **TSFyHandlerUtils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `context` | [`TSFYContext`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfycontext) |
| `currentRef` | [`TSFYRef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyref) |
| `existing` | [`TSFYRef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyref) \| `undefined` |
| `hash` | `string` |
| `identifier` | `string` \| `undefined` |
| `typeDescription` | `TypeDescription` |
| `value` | `any` |

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:264](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L264)

___

### TSFyTypeDef

Ƭ **TSFyTypeDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | ([`TSFyChunkDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfychunkdefinition) \| `string`)[] |
| `header?` | `Record`<`string`, `string`\> |

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:259](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L259)

___

### Types

Ƭ **Types**: typeof [`types`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#types-1)

#### Defined in

[packages/schema/src/fields/fieldTypes.ts:84](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/fieldTypes.ts#L84)

___

### UnknownFieldDef

Ƭ **UnknownFieldDef**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `types?` | `string`[] \| `string` |

#### Defined in

[packages/schema/src/fields/UnknownField.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/UnknownField.ts#L6)

___

### ValidationCustomMessage

Ƭ **ValidationCustomMessage**: `string` \| (`value`: `any`, `originalError`: `Error`) => `string` \| `Error`

#### Defined in

[packages/schema/src/applyValidator.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/applyValidator.ts#L3)

___

### \_DescribeField

Ƭ **\_DescribeField**<`Input`\>: `OnlyKnown`<`Input`\> extends infer Known ? `Known` extends `string` ? `ParseStringDefinition`<`Known`\> : `Known` extends `object` ? [`_DescribeObject`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_describeobject)<`Known`\> : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:25](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L25)

___

### \_DescribeObject

Ƭ **\_DescribeObject**<`Input`\>: [`_FieldKV`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_fieldkv)<`Input`\> extends [infer K, infer V] ? `K` extends keyof `Input` ? `K` extends [`GraphTypeKID`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#graphtypekid) ? ``"definition"`` extends keyof `Input` ? [`DescribeField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describefield)<`Input`[``"definition"``]\> : `never` : `K` extends [`ObjectTypeKID`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypekid) ? ``"definition"`` extends keyof `Input` ? { `def`: [`DescribeObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeobjectdefinition)<`Input`[``"definition"``]\> ; `list`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"optional"``\> ; `type`: ``"object"``  } : `never` : `K` extends [`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) ? { `def`: `V` ; `list`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"optional"``\> ; `type`: `K`  } : `K` extends ``"type"`` ? `V` extends [`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) ? { `def`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"def"``\> ; `list`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"optional"``\> ; `type`: `V`  } : `Input`[`K`] extends [`GraphTypeLikeFieldDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLikeFieldDefinition.md) ? `Merge`<[`DescribeField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describefield)<`Input`[`K`][``"definition"``]\>, [`_OmitUndefined`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_omitundefined)<{ `list`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"optional"``\>  }\>\> : `Input`[`K`] extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectTypeLikeFieldDefinition.md) ? { `def`: [`DescribeObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeobjectdefinition)<`Input`[`K`][``"definition"``]\> ; `list`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"list"``\> ; `optional`: [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"optional"``\> ; `type`: ``"object"``  } : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:80](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L80)

___

### \_FieldKV

Ƭ **\_FieldKV**<`Input`\>: keyof `Input` extends infer K ? `K` extends `unknown` ? `K` extends keyof `Input` ? `K` extends [`FieldInputLikeRequiredKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldinputlikerequiredkey) ? [`K`, `Input`[`K`]] : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

[packages/schema/src/fields/Infer/InferField.ts:76](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferField.ts#L76)

___

### \_GetAliasFields

Ƭ **\_GetAliasFields**<`Input`\>: { [K in keyof Input as keyof Input[K] extends "alias" ? K : "type" extends keyof Input[K] ? "alias" extends Input[K]["type"] ? K : never : never]: Input[K] } & {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

[packages/schema/src/fields/Infer/InferObjectType.ts:55](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferObjectType.ts#L55)

___

### \_GetKey

Ƭ **\_GetKey**<`T`, `Key`\>: `GetFieldByDotNotation`<`T`, `Key`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Key` | extends `string` |

#### Defined in

[packages/schema/src/fields/Infer/InferField.ts:91](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferField.ts#L91)

___

### \_GetParts

Ƭ **\_GetParts**: () => `Promise`<{ `body`: `string` ; `footer`: `Set`<`string`\> ; `header`: `Set`<`string`\>  }\>

#### Type declaration

▸ (): `Promise`<{ `body`: `string` ; `footer`: `Set`<`string`\> ; `header`: `Set`<`string`\>  }\>

##### Returns

`Promise`<{ `body`: `string` ; `footer`: `Set`<`string`\> ; `header`: `Set`<`string`\>  }\>

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:291](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L291)

___

### \_InferAlias

Ƭ **\_InferAlias**<`Input`, `Parent`\>: `Input` extends `string` ? `GetFieldByDotNotation`<`Parent`, `Input`\> : `Input` extends `object` ? keyof `Input` extends infer K ? `K` extends `unknown` ? `K` extends keyof `Input` ? `K` extends ``"type"`` ? [`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`Input`[`K`]\> : `K` extends ``"alias"`` ? [`_InferAlias`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferalias)<`Input`[`K`], `Parent`\> : `never` : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `Input` |
| `Parent` | extends `object` |

#### Defined in

[packages/schema/src/fields/Infer/InferObjectType.ts:65](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferObjectType.ts#L65)

___

### \_InferAliasFields

Ƭ **\_InferAliasFields**<`AliasFields`, `Parent`\>: { [K in keyof AliasFields]: \_InferAlias<AliasFields[K], Parent\> } & {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AliasFields` | extends `object` |
| `Parent` | extends `object` |

#### Defined in

[packages/schema/src/fields/Infer/InferObjectType.ts:90](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferObjectType.ts#L90)

___

### \_InferField

Ƭ **\_InferField**<`Input`\>: [`_FieldKV`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_fieldkv)<`Input`\> extends [infer K, infer V] ? `K` extends keyof `Input` ? `K` extends [`GraphTypeKID`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#graphtypekid) ? [`InferGraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infergraphtype)<`Input`\> : `K` extends [`ObjectTypeKID`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypekid) ? [`InferObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjecttype)<`Input`\> : `K` extends [`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) ? [`InferFinalField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferfinalfield)<`K`, `V`\> : `K` extends ``"type"`` ? `V` extends [`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) ? [`InferFinalField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferfinalfield)<`V`, [`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`Input`, ``"def"``\>\> : `Input`[`K`] extends [`GraphTypeLikeFieldDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLikeFieldDefinition.md) ? [`InferGraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infergraphtype)<`Input`[`K`]\> : `Input`[`K`] extends [`ObjectTypeLikeFieldDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectTypeLikeFieldDefinition.md) ? [`InferObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjecttype)<`Input`[`K`]\> : `never` : `never` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

[packages/schema/src/fields/Infer/InferField.ts:26](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferField.ts#L26)

___

### \_InferFinalField

Ƭ **\_InferFinalField**<`TypeName`, `Def`\>: `TypeName` extends ``"literal"`` ? `Def` : `TypeName` extends ``"array"`` ? [`Def`] extends [`ArrayFieldDef`<infer Of\>] ? [`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`Of`\>[] : `never` : `TypeName` extends ``"object"`` ? [`Def`] extends [`object`] ? [`InferObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`Def`\> : `never` : `TypeName` extends ``"enum"`` ? [`Def`] extends [`ReadonlyArray`<infer Item\>] ? `Item` : `never` : `TypeName` extends ``"union"`` ? [`Def`] extends [`ReadonlyArray`<infer Item\>] ? [`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`Item`\> : `never` : `TypeName` extends ``"record"`` ? [`Def`] extends [{ `keyType?`: infer KeyType ; `type?`: infer Type  }] ? { [K in KeyType extends "int" \| "float" ? number : string]: Infer<Type\> } : { `[K: string]`: `any`;  } : `TypeName` extends ``"literal"`` ? `Def` : [`InferTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infertypename)<`TypeName`\>

#### Type parameters

| Name |
| :------ |
| `TypeName` |
| `Def` |

#### Defined in

[packages/schema/src/fields/Infer/InferFinalField.ts:12](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferFinalField.ts#L12)

___

### \_InferObjectDefinition

Ƭ **\_InferObjectDefinition**<`Input`\>: [`_GetAliasFields`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getaliasfields)<`Input`\> extends infer Aliases ? { [K in Exclude<keyof Input, keyof Aliases\>]: Infer<Input[K]\> } & [`_InferSpecialObjectKeys`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferspecialobjectkeys)<`Input`\> extends infer Parent ? [`_InferAliasFields`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_inferaliasfields)<`Cast`<`Aliases`, `object`\>, `Cast`<`Parent`, `object`\>\> & `Parent` : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `object` |

#### Defined in

[packages/schema/src/fields/Infer/InferObjectType.ts:46](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferObjectType.ts#L46)

___

### \_InferSpecialObjectKeys

Ƭ **\_InferSpecialObjectKeys**<`T`\>: { -readonly [K in keyof T as K extends "$string" ? string : K extends "$number" ? number : never]: Infer<T[K]\> } & {}

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/schema/src/fields/Infer/InferObjectType.ts:97](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferObjectType.ts#L97)

___

### \_InnerDef

Ƭ **\_InnerDef**<`R`\>: ``"type"`` extends keyof `R` ? ``"def"`` extends keyof `R` ? `R`[``"type"``] extends ``"object"`` ? `R`[``"def"``] extends `object` ? [`DescribeObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeobjectdefinition)<`R`[``"def"``]\> : `never` : `never` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `R` |

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:238](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L238)

___

### \_ObjectFieldInputBase

Ƭ **\_ObjectFieldInputBase**: [`GraphTypeLikeFieldDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLikeFieldDefinition.md) \| [`ObjectTypeLikeFieldDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectTypeLikeFieldDefinition.md) \| [`ObjectInTypeFieldDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectInTypeFieldDefinition.md) \| [`GraphTypeInTypeFieldDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeInTypeFieldDefinition.md) \| [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition) \| [`FieldAsString`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldasstring)

#### Defined in

[packages/schema/src/fields/_parseFields.ts:20](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L20)

___

### \_OmitUndefined

Ƭ **\_OmitUndefined**<`T`\>: { [K in keyof T as T[K] extends undefined ? never : K]: T[K] } & {}

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:148](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L148)

___

### \_ResolverArgs

Ƭ **\_ResolverArgs**<`ArgsType`\>: `Exclude`<`ArgsType`, `undefined`\> extends infer R ? `IsKnown`<`R`\> extends ``1`` ? [`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<{ `object`: `R`  }\> : {} : {}

#### Type parameters

| Name |
| :------ |
| `ArgsType` |

#### Defined in

[packages/schema/src/Resolver.ts:270](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L270)

___

### \_ShortenFinalFieldDefinitionFieldAsString

Ƭ **\_ShortenFinalFieldDefinitionFieldAsString**<`T`\>: `T` \| \`${T}?\` \| \`[${T}]\` \| \`[${T}]?\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FieldTypeName`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) |

#### Defined in

[packages/schema/src/fields/_parseFields.ts:72](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_parseFields.ts#L72)

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

[packages/schema/src/tsfy/tsfy.ts:303](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L303)

___

### \_WithInferList

Ƭ **\_WithInferList**<`FieldDefinition`, `InferredValue`\>: [``true``] extends [[`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`FieldDefinition`, ``"list"``\>] ? `InferredValue`[] : `InferredValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FieldDefinition` | extends `object` |
| `InferredValue` | `InferredValue` |

#### Defined in

[packages/schema/src/fields/Infer/InferField.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferField.ts#L70)

___

### \_WithInferOptional

Ƭ **\_WithInferOptional**<`FieldDefinition`, `InferredValue`\>: [``true``] extends [[`_GetKey`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_getkey)<`FieldDefinition`, ``"optional"``\>] ? `InferredValue` \| `undefined` : `InferredValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FieldDefinition` | extends `object` |
| `InferredValue` | `InferredValue` |

#### Defined in

[packages/schema/src/fields/Infer/InferField.ts:64](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/InferField.ts#L64)

## Variables

### $inferableKey

• `Const` **$inferableKey**: ``"___inferable"``

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:16](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L16)

[packages/schema/src/fields/Infer/DescribeField.ts:17](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L17)

___

### $sealed

• `Const` **$sealed**: typeof [`$sealed`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#$sealed-1)

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:13](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L13)

[packages/schema/src/fields/Infer/DescribeField.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L14)

___

### $sealedKey

• `Const` **$sealedKey**: ``"___sealed"``

#### Defined in

[packages/schema/src/fields/Infer/DescribeField.ts:11](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L11)

[packages/schema/src/fields/Infer/DescribeField.ts:12](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/Infer/DescribeField.ts#L12)

___

### BacklandObject

• `Const` **BacklandObject**: typeof [`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md) = `ObjectType`

#### Defined in

[packages/schema/src/ObjectType.ts:603](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L603)

___

### CACHED\_FIELD\_INSTANCE\_KEY

• `Const` **CACHED\_FIELD\_INSTANCE\_KEY**: ``"__cachedFieldInstance"``

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:542](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L542)

___

### CircularDeps

• `Const` **CircularDeps**: `BacklandModules`

#### Defined in

[packages/schema/src/CircularDeps.ts:264](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/CircularDeps.ts#L264)

___

### FieldTypeErrorCodes

• `Const` **FieldTypeErrorCodes**: [``"minSize"``, ``"maxSize"``, ``"regexMismatch"``, ``"sizeMismatch"``, ``"unexpected"``, ``"unexpectedType"``, ``"custom"``, ``"invalidPhone"``, ``"requiredField"``]

#### Defined in

[packages/schema/src/fields/FieldTypeErrors.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldTypeErrors.ts#L3)

___

### FieldsTypeCache

• `Const` **FieldsTypeCache**: `Map`<`string`, { `defKeys`: `undefined` \| `string`[] ; `fieldType`: [`TAnyFieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)  }\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:36](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L36)

___

### SpecialObjectKeyEnum

• `Const` **SpecialObjectKeyEnum**: { `$number`: ``"$number"`` ; `$string`: ``"$string"``  } & {} & {}

#### Defined in

[packages/schema/src/fields/_fieldDefinitions.ts:74](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/_fieldDefinitions.ts#L74)

___

### ULID\_REGEX

• `Const` **ULID\_REGEX**: `RegExp`

#### Defined in

[packages/schema/src/fields/UlidField.ts:10](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/UlidField.ts#L10)

___

### \_parserHooks

• `Const` **\_parserHooks**: [`ParserHook`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ParserHook.md)[] = `[]`

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:38](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L38)

___

### create

• `Const` **create**: [`FieldCreators`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcreators)

#### Defined in

[packages/schema/src/fields/fieldTypes.ts:90](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/fieldTypes.ts#L90)

___

### defaultTypesDest

• `Const` **defaultTypesDest**: `string`

#### Defined in

[packages/schema/src/tsfy/tsfyWriter.ts:11](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfyWriter.ts#L11)

___

### isFieldTypeName

• `Const` **isFieldTypeName**: `any`

#### Defined in

[packages/schema/src/fields/fieldTypes.ts:105](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/fieldTypes.ts#L105)

___

### objectMetaFieldKey

• `Const` **objectMetaFieldKey**: ``"__dschm__"``

#### Defined in

[packages/schema/src/fields/MetaFieldField.ts:45](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L45)

___

### resolverKinds

• `Const` **resolverKinds**: { `mutation`: ``"mutation"`` ; `query`: ``"query"`` ; `subscription`: ``"subscription"``  } & {} & {}

#### Defined in

[packages/schema/src/createGraphQLSchema.ts:44](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/createGraphQLSchema.ts#L44)

___

### tsfy\_defaults

• `Const` **tsfy\_defaults**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `iterationLimit` | `number` |

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:15](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L15)

___

### types

• `Const` **types**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ID` | typeof [`IDField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.IDField.md) |
| `alias` | typeof [`AliasField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md) |
| `any` | typeof [`AnyField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.AnyField.md) |
| `array` | typeof `ArrayField` |
| `boolean` | typeof [`BooleanField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.BooleanField.md) |
| `cursor` | typeof [`CursorField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md) |
| `date` | typeof [`DateField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.DateField.md) |
| `email` | typeof [`EmailField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.EmailField.md) |
| `enum` | typeof [`EnumField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.EnumField.md) |
| `float` | typeof [`FloatField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.FloatField.md) |
| `int` | typeof [`IntField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.IntField.md) |
| `literal` | typeof [`LiteralField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md) |
| `meta` | typeof [`MetaField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md) |
| `null` | typeof [`NullField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.NullField.md) |
| `object` | typeof [`ObjectField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md) |
| `phone` | typeof `PhoneField` |
| `record` | typeof [`RecordField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.RecordField.md) |
| `string` | typeof [`StringField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.StringField.md) |
| `ulid` | typeof [`UlidField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.UlidField.md) |
| `undefined` | typeof [`UndefinedField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.UndefinedField.md) |
| `union` | typeof [`UnionField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md) |
| `unknown` | typeof [`UnknownField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.UnknownField.md) |

#### Defined in

[packages/schema/src/fields/fieldTypes.ts:59](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/fieldTypes.ts#L59)

## Functions

### \_\_getCachedFieldInstance

▸ **__getCachedFieldInstance**(`field`): [`TAnyFieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `Object` |

#### Returns

[`TAnyFieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:544](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L544)

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

[packages/schema/src/fields/MetaFieldField.ts:55](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L55)

___

### createBacklandObject

▸ **createBacklandObject**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

[packages/schema/src/ObjectType.ts:613](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L613)

▸ **createBacklandObject**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

[packages/schema/src/ObjectType.ts:617](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L617)

___

### createEmptyMetaField

▸ **createEmptyMetaField**(): [`MetaField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)[``"asFinalFieldDef"``]

#### Returns

[`MetaField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)[``"asFinalFieldDef"``]

#### Defined in

[packages/schema/src/fields/MetaFieldField.ts:47](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L47)

___

### createFieldTypeError

▸ **createFieldTypeError**(`code`, `details?`): [`FieldTypeError`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldTypeError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | ``"minSize"`` \| ``"maxSize"`` \| ``"regexMismatch"`` \| ``"sizeMismatch"`` \| ``"unexpected"`` \| ``"unexpectedType"`` \| ``"custom"`` \| ``"invalidPhone"`` \| ``"requiredField"`` |
| `details?` | `any` |

#### Returns

[`FieldTypeError`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldTypeError.md)

#### Defined in

[packages/schema/src/fields/FieldTypeErrors.ts:39](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldTypeErrors.ts#L39)

___

### createGraphQLSchema

▸ **createGraphQLSchema**<`T`\>(`resolvers?`, `config?`): `T` extends { `__isResolver`: `any`  } ? [`GraphQLSchemaWithUtils`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#graphqlschemawithutils) : `never`

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

`T` extends { `__isResolver`: `any`  } ? [`GraphQLSchemaWithUtils`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#graphqlschemawithutils) : `never`

#### Defined in

[packages/schema/src/createGraphQLSchema.ts:47](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/createGraphQLSchema.ts#L47)

▸ **createGraphQLSchema**<`Config`\>(`config?`): `Config` extends [`CreateGraphQLObjectOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#creategraphqlobjectoptions) ? [`GraphQLSchemaWithUtils`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#graphqlschemawithutils) : `never`

#### Type parameters

| Name |
| :------ |
| `Config` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Config` |

#### Returns

`Config` extends [`CreateGraphQLObjectOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#creategraphqlobjectoptions) ? [`GraphQLSchemaWithUtils`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#graphqlschemawithutils) : `never`

#### Defined in

[packages/schema/src/createGraphQLSchema.ts:52](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/createGraphQLSchema.ts#L52)

___

### createObjectType

▸ **createObjectType**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

[packages/schema/src/ObjectType.ts:613](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L613)

▸ **createObjectType**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

[packages/schema/src/ObjectType.ts:617](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L617)

___

### createResolver

▸ **createResolver**<`ResultType`, `ArgsType`\>(`config`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve?`: `undefined` ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `resolver` | <Returns, Root\>(`handler`: (`root`: `Root`, `args`: [`_ResolverArgs`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\>) => { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } |

#### Defined in

[packages/schema/src/Resolver.ts:201](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L201)

▸ **createResolver**<`ResultType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args?`: `undefined` ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: {}, `context`: [`ResolverContextBase`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

[packages/schema/src/Resolver.ts:220](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L220)

▸ **createResolver**<`ResultType`, `ArgsType`, `Returns`\>(`config`): { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultType` | extends [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `ArgsType` | extends [`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md) |
| `Returns` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | { `args`: `ArgsType` \| `Readonly`<`ArgsType`\> ; `kind?`: `ResolverKind` ; `name`: `string` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `ResultType` \| `Readonly`<`ResultType`\>  } & [`OptionalResolverConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#optionalresolverconfig)<`any`, `any`, `any`\> |

#### Returns

{ `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: [`_ResolverArgs`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#_resolverargs)<`ArgsType`\>, `context`: [`ResolverContextBase`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolvercontextbase), `info`: `GraphQLResolveInfo`) => `MaybePromise`<`Returns`\> ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  } & { `resolver?`: `undefined`  }

#### Defined in

[packages/schema/src/Resolver.ts:235](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L235)

___

### createResolverFactory

▸ **createResolverFactory**<`Context`\>(): [`CreateResolver`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.CreateResolver.md)<`Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`ResolverContextBase`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolvercontextbase) |

#### Returns

[`CreateResolver`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.CreateResolver.md)<`Context`\>

#### Defined in

[packages/schema/src/Resolver.ts:257](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L257)

___

### createSchema

▸ **createSchema**<`DefinitionInput`\>(`fields`): [`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `Readonly`<`DefinitionInput`\> |

#### Returns

[`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

[packages/schema/src/ObjectType.ts:613](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L613)

▸ **createSchema**<`DefinitionInput`\>(`name`, `fields`): [`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends `Readonly`<[`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | `DefinitionInput` |

#### Returns

[`ObjectTypeFromInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objecttypefrominput)<`DefinitionInput`\>

#### Defined in

[packages/schema/src/ObjectType.ts:617](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L617)

___

### createTSFYContext

▸ **createTSFYContext**(`config`): [`TSFYContext`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfycontext)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TSFYConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyconfig) |

#### Returns

[`TSFYContext`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfycontext)

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:227](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L227)

___

### createTSfyRef

▸ **createTSfyRef**(`hash`, `identifier?`): [`TSFYRef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyref)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `identifier?` | `string` |

#### Returns

[`TSFYRef`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyref)

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:215](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L215)

___

### createType

▸ **createType**<`Definition`\>(`definition`): [`GraphType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Definition` \| (`utils`: `BacklandModules`) => `Definition` |

#### Returns

[`GraphType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:367](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L367)

▸ **createType**<`Definition`\>(`name`, `definition`): [`GraphType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Definition` \| (`utils`: `BacklandModules`) => `Definition` |

#### Returns

[`GraphType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:371](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L371)

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

[packages/schema/src/parseObjectDefinition.ts:572](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L572)

___

### extendObjectDefinition

▸ **extendObjectDefinition**<`Input`\>(`input`): [`ExtendObjectDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<`Input`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

#### Returns

[`ExtendObjectDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<`Input`, `Input`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:78](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L78)

___

### extendType

▸ **extendType**<`Input`\>(`input`): [`ExtendType`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<`Input`\>

#### Type parameters

| Name |
| :------ |
| `Input` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

#### Returns

[`ExtendType`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<`Input`\>

#### Defined in

[packages/schema/src/extendType.ts:51](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendType.ts#L51)

___

### fieldToMock

▸ **fieldToMock**(`fieldInput`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldInput` | [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `options?` | [`ObjectMockOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectmockoptions) |

#### Returns

`any`

#### Defined in

[packages/schema/src/mockObject.ts:55](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/mockObject.ts#L55)

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

[packages/schema/src/fields/MetaFieldField.ts:96](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L96)

▸ **getObjectDefinitionId**(`definition`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Record`<`string`, `any`\> |

#### Returns

`string`

#### Defined in

[packages/schema/src/fields/MetaFieldField.ts:101](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L101)

___

### getObjectDefinitionMetaField

▸ **getObjectDefinitionMetaField**(`input`): [`MetaField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)[``"asFinalFieldDef"``] \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Record`<`string`, `any`\> |

#### Returns

[`MetaField`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)[``"asFinalFieldDef"``] \| `undefined`

#### Defined in

[packages/schema/src/fields/MetaFieldField.ts:90](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L90)

___

### getResolver

▸ **getResolver**(`name`): [`AnyResolver`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#anyresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`AnyResolver`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#anyresolver)

#### Defined in

[packages/schema/src/Resolver.ts:187](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L187)

___

### getTSFyIdentifier

▸ **getTSFyIdentifier**(`value`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:179](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L179)

___

### getType

▸ **getType**(`name`): [`GraphTypeLike`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GraphTypeLike`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md)

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:383](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L383)

___

### implementObject

▸ **implementObject**<`Def`, `Parents`\>(`name`, `definition`, `...parents`): [`ImplementObject`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#implementobject)<[`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Def`\>, `Parents`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md) |
| `Parents` | extends readonly [`ObjectLike`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectLike.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Readonly`<`Def`\> |
| `...parents` | `Parents` |

#### Returns

[`ImplementObject`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#implementobject)<[`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Def`\>, `Parents`\>

#### Defined in

[packages/schema/src/implementObject.ts:28](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/implementObject.ts#L28)

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

[packages/schema/src/fields/FieldTypeErrors.ts:43](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldTypeErrors.ts#L43)

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

[packages/schema/src/fields/FieldType.ts:325](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L325)

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

[packages/schema/src/isHiddenFieldName.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/isHiddenFieldName.ts#L5)

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

[packages/schema/src/fields/MetaFieldField.ts:80](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L80)

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

[packages/schema/src/fields/MetaFieldField.ts:76](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L76)

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

[packages/schema/src/objectInferenceUtils.ts:9](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/objectInferenceUtils.ts#L9)

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

[packages/schema/src/parseObjectDefinition.ts:454](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L454)

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

[packages/schema/src/objectInferenceUtils.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/objectInferenceUtils.ts#L3)

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

[packages/schema/src/Resolver.ts:181](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/Resolver.ts#L181)

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

[packages/schema/src/tsfy/tsfyWriter.ts:126](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfyWriter.ts#L126)

___

### objectMock

▸ **objectMock**<`T`\>(`definition`, `options?`): [`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<{ `object`: `T`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |
| `options?` | [`ObjectMockOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectmockoptions) |

#### Returns

[`Infer`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<{ `object`: `T`  }\>

#### Defined in

[packages/schema/src/mockObject.ts:30](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/mockObject.ts#L30)

___

### parseField

▸ **parseField**(`definition`): [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Returns

[`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:128](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L128)

___

### parseFieldDefinitionConfig

▸ **parseFieldDefinitionConfig**<`T`, `Options`\>(`definition`, `options?`): [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldasstring) \| [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition) \| [`ShortenFinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#shortenfinalfielddefinition) : [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `Options` | extends [`ParseFieldOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parsefieldoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |
| `options?` | `Options` |

#### Returns

[`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldasstring) \| [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition) \| [`ShortenFinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#shortenfinalfielddefinition) : [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:138](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L138)

___

### parseFlattenFieldDefinition

▸ **parseFlattenFieldDefinition**(`input`, `options?`): [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition) \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options` | [`ParseFieldOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parsefieldoptions) |

#### Returns

[`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition) \| ``false``

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:471](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L471)

___

### parseObjectDefinition

▸ **parseObjectDefinition**(`input`, `options?`): `ParseResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Record`<`string`, `any`\> |
| `options` | `Omit`<[`ParseFieldOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parsefieldoptions), ``"returnInstance"``\> |

#### Returns

`ParseResult`

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:371](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L371)

___

### parseObjectField

▸ **parseObjectField**<`T`, `Options`\>(`fieldName`, `definition`, `options`): [`Options`[``"returnInstance"``]] extends [``true``] ? [`TAnyFieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype) : [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldasstring) : [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `Options` | extends [`ParseFieldOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#parsefieldoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |
| `options` | `Options` |

#### Returns

[`Options`[``"returnInstance"``]] extends [``true``] ? [`TAnyFieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype) : [`Options`[``"asString"``]] extends [``true``] ? [`FieldAsString`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldasstring) : [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:58](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L58)

▸ **parseObjectField**<`T`\>(`fieldName`, `definition`): [`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |

#### Returns

[`FinalFieldDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#finalfielddefinition)

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:71](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L71)

▸ **parseObjectField**<`T`\>(`fieldName`, `definition`, `options`): [`TAnyFieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)

**`Deprecated`**

use the object options instead of true

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `definition` | `T` |
| `options` | ``true`` |

#### Returns

[`TAnyFieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:82](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L82)

___

### parseValidationError

▸ **parseValidationError**(`input`, `customMessage`, `originalError`): `Error` & { `[K: string]`: `any`;  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `customMessage` | `undefined` \| [`ValidationCustomMessage`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage) |
| `originalError` | `string` \| `Error` & { `[K: string]`: `any`;  } |

#### Returns

`Error` & { `[K: string]`: `any`;  }

#### Defined in

[packages/schema/src/applyValidator.ts:26](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/applyValidator.ts#L26)

___

### resetTypesCache

▸ **resetTypesCache**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/schema/src/ObjectType.ts:545](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L545)

___

### resolversToTypescript

▸ **resolversToTypescript**(`params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResolversToTypeScriptOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolverstotypescriptoptions) |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/schema/src/createGraphQLSchema.ts:236](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/createGraphQLSchema.ts#L236)

___

### resolversTypescriptParts

▸ **resolversTypescriptParts**(`params`): `Promise`<{ `code`: `string` ; `lines`: { `args`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `code`: `string` ; `entryName`: `string` = resolver.name; `inputName`: `any` ; `payload`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `payloadName`: `any` ; `resolver`: { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  }  }[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResolversToTypeScriptOptions`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#resolverstotypescriptoptions) |

#### Returns

`Promise`<{ `code`: `string` ; `lines`: { `args`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `code`: `string` ; `entryName`: `string` = resolver.name; `inputName`: `any` ; `payload`: { `code`: `any` ; `comments`: `string` ; `description`: `string`  } ; `payloadName`: `any` ; `resolver`: { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  }  }[]  }\>

#### Defined in

[packages/schema/src/createGraphQLSchema.ts:163](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/createGraphQLSchema.ts#L163)

___

### setParserHook

▸ **setParserHook**(`hook`): [`RemoveParserHook`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.RemoveParserHook.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hook` | [`ParserHook`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ParserHook.md) |

#### Returns

[`RemoveParserHook`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.RemoveParserHook.md)

#### Defined in

[packages/schema/src/parseObjectDefinition.ts:43](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/parseObjectDefinition.ts#L43)

___

### tsfy

▸ **tsfy**(`input`, `config?`): [`TSFyResult`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.TSFyResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `config?` | [`TSFYConfig`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyconfig) |

#### Returns

[`TSFyResult`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.TSFyResult.md)

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:32](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L32)

___

### tsfyWriter

▸ **tsfyWriter**(`options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TSFyWriterConfig`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `add` | (`value`: `any`) => { `hash`: `string`  } |
| `listen` | () => `Store`<`Record`<`string`, `any`\>, `string`, `any`\> |
| `remove` | (`value`: `any`) => { `hash`: `string` ; `index`: `undefined` \| `number`  } |
| `store` | `Store`<`Record`<`string`, `any`\>, `string`, `any`\> |
| `toString` | () => `Promise`<`string`\> |

#### Defined in

[packages/schema/src/tsfy/tsfyWriter.ts:25](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfyWriter.ts#L25)
