[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / GraphType

# Class: GraphType<Definition\>

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).GraphType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

## Table of contents

### Constructors

- [constructor](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#constructor)

### Properties

- [\_\_isGraphType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#__isgraphtype)
- [\_\_lazyGetter](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#__lazygetter)
- [beforeInitialize](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#beforeinitialize)
- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#definition)
- [touched](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#touched)
- [\_\_isGraphType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#__isgraphtype-1)
- [register](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#register)
- [resolvers](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#resolvers)

### Accessors

- [hidden](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#hidden)
- [id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#id)
- [optionalId](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#optionalid)

### Methods

- [\_toGraphQL](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#_tographql)
- [clone](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#clone)
- [graphQLInputType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#graphqlinputtype)
- [graphQLInterface](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#graphqlinterface)
- [graphQLType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#graphqltype)
- [identify](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#identify)
- [listType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#listtype)
- [mutateFields](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#mutatefields)
- [optionalType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#optionaltype)
- [override](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#override)
- [parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#parse)
- [print](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#print)
- [requiredType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#requiredtype)
- [singleType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#singletype)
- [touch](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#touch)
- [typescriptPrint](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#typescriptprint)
- [getOrSet](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#getorset)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#is)
- [isTypeDefinition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#istypedefinition)
- [reset](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#reset)

## Constructors

### constructor

• **new GraphType**<`Definition`\>(`definition`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Definition` extends [`ObjectFieldInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) ? `Definition` \| () => `Definition` : `never` |

#### Defined in

packages/schema/src/GraphType/GraphType.ts:78

• **new GraphType**<`Definition`\>(`name`, `definition`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Definition` extends [`ObjectFieldInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) ? `Definition` \| () => `Definition` : `never` |

#### Defined in

packages/schema/src/GraphType/GraphType.ts:84

## Properties

### \_\_isGraphType

• `Readonly` **\_\_isGraphType**: ``true``

#### Defined in

packages/schema/src/GraphType/GraphType.ts:45

___

### \_\_lazyGetter

• **\_\_lazyGetter**: [`LazyParseGraphTypePayload`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#lazyparsegraphtypepayload)

#### Defined in

packages/schema/src/GraphType/GraphType.ts:96

___

### beforeInitialize

• **beforeInitialize**: (`definition`: [`LazyParseGraphTypePayload`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#lazyparsegraphtypepayload)) => [`LazyParseGraphTypePayload`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#lazyparsegraphtypepayload)[] = `[]`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:202

___

### definition

• `Readonly` **definition**: `Definition`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:55

___

### touched

• **touched**: `boolean` = `false`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:98

___

### \_\_isGraphType

▪ `Static` **\_\_isGraphType**: `boolean` = `true`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:44

___

### register

▪ `Static` **register**: `Store`<`Record`<`string`, [`GraphTypeLike`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md)\>, `string`, [`GraphTypeLike`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md)\>

#### Defined in

packages/schema/src/GraphType/GraphType.ts:47

___

### resolvers

▪ `Static` **resolvers**: `Store`<`Record`<`string`, { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  }\>, `string`, { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  }\>

#### Defined in

packages/schema/src/GraphType/GraphType.ts:48

## Accessors

### hidden

• `get` **hidden**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:128

• `set` **hidden**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:123

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:57

___

### optionalId

• `get` **optionalId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:74

## Methods

### \_toGraphQL

▸ **_toGraphQL**(): `ConvertFieldResult`

#### Returns

`ConvertFieldResult`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:157

___

### clone

▸ **clone**<`T`\>(`handler`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`input`: [`ExtendObjectDefinition`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<[`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>, [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>\>) => `T` |

#### Returns

`T`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:191

___

### graphQLInputType

▸ **graphQLInputType**(`...args`): `GraphQLNamedInputType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [options?: ParseInputTypeOptions] |

#### Returns

`GraphQLNamedInputType`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:173

___

### graphQLInterface

▸ **graphQLInterface**(`...args`): `GraphQLInterfaceType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [options?: ParseInterfaceOptions] |

#### Returns

`GraphQLInterfaceType`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:179

___

### graphQLType

▸ **graphQLType**(`...args`): `GraphQLNamedType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [options?: ParseTypeOptions] |

#### Returns

`GraphQLNamedType`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:167

___

### identify

▸ **identify**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:108

___

### listType

▸ **listType**(`name?`): `Definition` extends `unknown` ? [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`MakeTypeList`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)<`Definition`\>\> : `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Definition` extends `unknown` ? [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`MakeTypeList`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)<`Definition`\>\> : `never`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:296

___

### mutateFields

▸ **mutateFields**<`Def`\>(`callback`): [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<{ `object`: `Def`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectDefinitionInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`input`: [`ExtendObjectDefinition`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<[`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>, [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>\>) => `Def` |

#### Returns

[`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<{ `object`: `Def`  }\>

#### Defined in

packages/schema/src/GraphType/GraphType.ts:206

___

### optionalType

▸ **optionalType**(`name?`): `Definition` extends `unknown` ? [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `optional`: ``true``  }\>\> : `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Definition` extends `unknown` ? [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `optional`: ``true``  }\>\> : `never`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:276

___

### override

▸ **override**<`T`\>(`handler`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`input`: [`ExtendType`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>\>) => `T` |

#### Returns

`T`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:197

___

### parse

▸ **parse**(`input`, `options?`): [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`Definition`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | [`FieldParserConfig`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparserconfig) |

#### Returns

[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`Definition`\>

#### Defined in

packages/schema/src/GraphType/GraphType.ts:132

___

### print

▸ **print**(): `string`[]

#### Returns

`string`[]

#### Defined in

packages/schema/src/GraphType/GraphType.ts:245

___

### requiredType

▸ **requiredType**(`name?`): `Definition` extends `unknown` ? [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `optional`: ``false``  }\>\> : `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Definition` extends `unknown` ? [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `optional`: ``false``  }\>\> : `never`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:286

___

### singleType

▸ **singleType**(`name?`): `Definition` extends `unknown` ? [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `list`: ``false``  }\>\> : `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Definition` extends `unknown` ? [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `list`: ``false``  }\>\> : `never`

#### Defined in

packages/schema/src/GraphType/GraphType.ts:306

___

### touch

▸ **touch**(): [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>

#### Returns

[`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>

#### Defined in

packages/schema/src/GraphType/GraphType.ts:100

___

### typescriptPrint

▸ **typescriptPrint**(`options?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ObjectToTypescriptOptions` & { `name?`: `string`  } |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/schema/src/GraphType/GraphType.ts:260

___

### getOrSet

▸ `Static` **getOrSet**<`T`\>(`id`, `def`): [`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`T`\>

Get an Object with the provided id
   or set a new Object in the register if not found.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `def` | `T` |

#### Returns

[`GraphType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`T`\>

#### Defined in

packages/schema/src/GraphType/GraphType.ts:322

___

### is

▸ `Static` **is**(`input`): input is GraphType<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is GraphType<any\>

#### Defined in

packages/schema/src/GraphType/GraphType.ts:334

___

### isTypeDefinition

▸ `Static` **isTypeDefinition**(`input`): input is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Object

#### Defined in

packages/schema/src/GraphType/GraphType.ts:338

___

### reset

▸ `Static` **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/schema/src/GraphType/GraphType.ts:50
