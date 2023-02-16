[Backland](../README.md) / [Modules](../modules.md) / [Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md) / GraphType

# Class: GraphType<Definition\>

[Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md).GraphType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

## Table of contents

### Constructors

- [constructor](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#constructor)

### Properties

- [\_\_isGraphType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#__isgraphtype)
- [\_\_lazyGetter](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#__lazygetter)
- [beforeInitialize](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#beforeinitialize)
- [definition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#definition)
- [touched](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#touched)
- [\_\_isGraphType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#__isgraphtype-1)
- [register](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#register)
- [resolvers](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#resolvers)

### Accessors

- [hidden](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#hidden)
- [id](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#id)
- [optionalId](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#optionalid)

### Methods

- [\_toGraphQL](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#_tographql)
- [clone](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#clone)
- [graphQLInputType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#graphqlinputtype)
- [graphQLInterface](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#graphqlinterface)
- [graphQLType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#graphqltype)
- [identify](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#identify)
- [listType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#listtype)
- [mutateFields](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#mutatefields)
- [optionalType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#optionaltype)
- [override](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#override)
- [parse](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#parse)
- [print](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#print)
- [requiredType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#requiredtype)
- [singleType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#singletype)
- [touch](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#touch)
- [typescriptPrint](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#typescriptprint)
- [getOrSet](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#getorset)
- [is](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#is)
- [isTypeDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#istypedefinition)
- [reset](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md#reset)

## Constructors

### constructor

• **new GraphType**<`Definition`\>(`definition`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Definition` extends [`ObjectFieldInput`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) ? `Definition` \| () => `Definition` : `never` |

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:78](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L78)

• **new GraphType**<`Definition`\>(`name`, `definition`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Definition` extends [`ObjectFieldInput`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) ? `Definition` \| () => `Definition` : `never` |

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:84](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L84)

## Properties

### \_\_isGraphType

• `Readonly` **\_\_isGraphType**: ``true``

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:45](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L45)

___

### \_\_lazyGetter

• **\_\_lazyGetter**: [`LazyParseGraphTypePayload`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#lazyparsegraphtypepayload)

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:96](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L96)

___

### beforeInitialize

• **beforeInitialize**: (`definition`: [`LazyParseGraphTypePayload`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#lazyparsegraphtypepayload)) => [`LazyParseGraphTypePayload`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#lazyparsegraphtypepayload)[] = `[]`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:202](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L202)

___

### definition

• `Readonly` **definition**: `Definition`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:55](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L55)

___

### touched

• **touched**: `boolean` = `false`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:98](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L98)

___

### \_\_isGraphType

▪ `Static` **\_\_isGraphType**: `boolean` = `true`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:44](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L44)

___

### register

▪ `Static` **register**: `Store`<`Record`<`string`, [`GraphTypeLike`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md)\>, `string`, [`GraphTypeLike`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md)\>

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:47](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L47)

___

### resolvers

▪ `Static` **resolvers**: `Store`<`Record`<`string`, { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  }\>, `string`, { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `type`: `any` ; `typeDef`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\>  }\>

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:48](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L48)

## Accessors

### hidden

• `get` **hidden**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:128](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L128)

• `set` **hidden**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:123](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L123)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:57](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L57)

___

### optionalId

• `get` **optionalId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:74](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L74)

## Methods

### \_toGraphQL

▸ **_toGraphQL**(): `ConvertFieldResult`

#### Returns

`ConvertFieldResult`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:157](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L157)

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
| `handler` | (`input`: [`ExtendObjectDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<[`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>, [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>\>) => `T` |

#### Returns

`T`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:191](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L191)

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

[packages/schema/src/GraphType/GraphType.ts:173](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L173)

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

[packages/schema/src/GraphType/GraphType.ts:179](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L179)

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

[packages/schema/src/GraphType/GraphType.ts:167](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L167)

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

[packages/schema/src/GraphType/GraphType.ts:108](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L108)

___

### listType

▸ **listType**(`name?`): `Definition` extends `unknown` ? [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`MakeTypeList`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)<`Definition`\>\> : `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Definition` extends `unknown` ? [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`MakeTypeList`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#maketypelist)<`Definition`\>\> : `never`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:296](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L296)

___

### mutateFields

▸ **mutateFields**<`Def`\>(`callback`): [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<{ `object`: `Def`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`input`: [`ExtendObjectDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<[`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>, [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>\>) => `Def` |

#### Returns

[`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<{ `object`: `Def`  }\>

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:206](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L206)

___

### optionalType

▸ **optionalType**(`name?`): `Definition` extends `unknown` ? [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `optional`: ``true``  }\>\> : `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Definition` extends `unknown` ? [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `optional`: ``true``  }\>\> : `never`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:276](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L276)

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
| `handler` | (`input`: [`ExtendType`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendType.md)<[`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>\>) => `T` |

#### Returns

`T`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:197](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L197)

___

### parse

▸ **parse**(`input`, `options?`): [`Infer`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`Definition`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | [`FieldParserConfig`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparserconfig) |

#### Returns

[`Infer`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`Definition`\>

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:132](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L132)

___

### print

▸ **print**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:245](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L245)

___

### requiredType

▸ **requiredType**(`name?`): `Definition` extends `unknown` ? [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `optional`: ``false``  }\>\> : `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Definition` extends `unknown` ? [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `optional`: ``false``  }\>\> : `never`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:286](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L286)

___

### singleType

▸ **singleType**(`name?`): `Definition` extends `unknown` ? [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `list`: ``false``  }\>\> : `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Definition` extends `unknown` ? [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<[`DescribeAndOverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeandoverridefield)<`Definition`, { `list`: ``false``  }\>\> : `never`

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:306](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L306)

___

### touch

▸ **touch**(): [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>

#### Returns

[`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`Definition`\>

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:100](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L100)

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

[packages/schema/src/GraphType/GraphType.ts:260](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L260)

___

### getOrSet

▸ `Static` **getOrSet**<`T`\>(`id`, `def`): [`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`T`\>

Get an Object with the provided id
   or set a new Object in the register if not found.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `def` | `T` |

#### Returns

[`GraphType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<`T`\>

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:322](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L322)

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

[packages/schema/src/GraphType/GraphType.ts:334](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L334)

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

[packages/schema/src/GraphType/GraphType.ts:338](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L338)

___

### reset

▸ `Static` **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/schema/src/GraphType/GraphType.ts:50](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/GraphType/GraphType.ts#L50)
