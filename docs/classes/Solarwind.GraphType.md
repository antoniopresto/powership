[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / GraphType

# Class: GraphType<Definition\>

[Solarwind](../modules/Solarwind.md).GraphType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Solarwind.md#objectfieldinput) |

## Table of contents

### Constructors

- [constructor](Solarwind.GraphType.md#constructor)

### Properties

- [\_\_isGraphType](Solarwind.GraphType.md#__isgraphtype)
- [\_\_lazyGetter](Solarwind.GraphType.md#__lazygetter)
- [\_toGraphQL](Solarwind.GraphType.md#_tographql)
- [beforeInitialize](Solarwind.GraphType.md#beforeinitialize)
- [definition](Solarwind.GraphType.md#definition)
- [graphQLInputType](Solarwind.GraphType.md#graphqlinputtype)
- [graphQLInterface](Solarwind.GraphType.md#graphqlinterface)
- [graphQLType](Solarwind.GraphType.md#graphqltype)
- [identify](Solarwind.GraphType.md#identify)
- [listType](Solarwind.GraphType.md#listtype)
- [optionalType](Solarwind.GraphType.md#optionaltype)
- [parse](Solarwind.GraphType.md#parse)
- [print](Solarwind.GraphType.md#print)
- [requiredType](Solarwind.GraphType.md#requiredtype)
- [singleType](Solarwind.GraphType.md#singletype)
- [touched](Solarwind.GraphType.md#touched)
- [typescriptPrint](Solarwind.GraphType.md#typescriptprint)
- [\_\_isGraphType](Solarwind.GraphType.md#__isgraphtype-1)
- [getOrSet](Solarwind.GraphType.md#getorset)
- [register](Solarwind.GraphType.md#register)
- [reset](Solarwind.GraphType.md#reset)
- [resolvers](Solarwind.GraphType.md#resolvers)

### Accessors

- [hidden](Solarwind.GraphType.md#hidden)
- [id](Solarwind.GraphType.md#id)
- [optionalId](Solarwind.GraphType.md#optionalid)

### Methods

- [clone](Solarwind.GraphType.md#clone)
- [mutateFields](Solarwind.GraphType.md#mutatefields)
- [override](Solarwind.GraphType.md#override)
- [touch](Solarwind.GraphType.md#touch)
- [is](Solarwind.GraphType.md#is)
- [isTypeDefinition](Solarwind.GraphType.md#istypedefinition)

## Constructors

### constructor

• **new GraphType**<`Definition`\>(`definition`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Solarwind.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Definition` extends [`ObjectFieldInput`](../modules/Solarwind.md#objectfieldinput) ? `Definition` \| () => `Definition` : `never` |

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:62

• **new GraphType**<`Definition`\>(`name`, `definition`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Solarwind.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Definition` extends [`ObjectFieldInput`](../modules/Solarwind.md#objectfieldinput) ? `Definition` \| () => `Definition` : `never` |

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:63

## Properties

### \_\_isGraphType

• `Readonly` **\_\_isGraphType**: ``true``

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:14

___

### \_\_lazyGetter

• **\_\_lazyGetter**: [`LazyParseGraphTypePayload`](../modules/Solarwind.md#lazyparsegraphtypepayload)

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:64

___

### \_toGraphQL

• **\_toGraphQL**: () => `ConvertFieldResult`

#### Type declaration

▸ (): `ConvertFieldResult`

##### Returns

`ConvertFieldResult`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:72

___

### beforeInitialize

• **beforeInitialize**: (`definition`: [`LazyParseGraphTypePayload`](../modules/Solarwind.md#lazyparsegraphtypepayload)) => [`LazyParseGraphTypePayload`](../modules/Solarwind.md#lazyparsegraphtypepayload)[]

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:78

___

### definition

• `Readonly` **definition**: `Definition`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:58

___

### graphQLInputType

• **graphQLInputType**: (`options?`: `ParseInputTypeOptions`) => `GraphQLNamedInputType`

#### Type declaration

▸ (`options?`): `GraphQLNamedInputType`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ParseInputTypeOptions` |

##### Returns

`GraphQLNamedInputType`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:74

___

### graphQLInterface

• **graphQLInterface**: (`options?`: `ParseInterfaceOptions`) => `GraphQLInterfaceType`

#### Type declaration

▸ (`options?`): `GraphQLInterfaceType`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ParseInterfaceOptions` |

##### Returns

`GraphQLInterfaceType`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:75

___

### graphQLType

• **graphQLType**: (`options?`: `ParseTypeOptions`) => `GraphQLNamedType`

#### Type declaration

▸ (`options?`): `GraphQLNamedType`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ParseTypeOptions` |

##### Returns

`GraphQLNamedType`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:73

___

### identify

• **identify**: (`name`: `string`) => `void`

#### Type declaration

▸ (`name`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`void`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:68

___

### listType

• **listType**: (`name?`: `string`) => `Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`MakeTypeList`](../modules/Solarwind.md#maketypelist)<`Definition`\>\> : `never`

#### Type declaration

▸ (`name?`): `Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`MakeTypeList`](../modules/Solarwind.md#maketypelist)<`Definition`\>\> : `never`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

##### Returns

`Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`MakeTypeList`](../modules/Solarwind.md#maketypelist)<`Definition`\>\> : `never`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:88

___

### optionalType

• **optionalType**: (`name?`: `string`) => `Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<`Definition`, { `optional`: ``true``  }\>\> : `never`

#### Type declaration

▸ (`name?`): `Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<`Definition`, { `optional`: ``true``  }\>\> : `never`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

##### Returns

`Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<`Definition`, { `optional`: ``true``  }\>\> : `never`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:86

___

### parse

• **parse**: (`input`: `any`, `options?`: [`FieldParserConfig`](../modules/Solarwind.md#fieldparserconfig)) => [`Infer`](../modules/Solarwind.md#infer)<`Definition`\>

#### Type declaration

▸ (`input`, `options?`): [`Infer`](../modules/Solarwind.md#infer)<`Definition`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | [`FieldParserConfig`](../modules/Solarwind.md#fieldparserconfig) |

##### Returns

[`Infer`](../modules/Solarwind.md#infer)<`Definition`\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:71

___

### print

• **print**: () => `string`[]

#### Type declaration

▸ (): `string`[]

##### Returns

`string`[]

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:82

___

### requiredType

• **requiredType**: (`name?`: `string`) => `Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<`Definition`, { `optional`: ``false``  }\>\> : `never`

#### Type declaration

▸ (`name?`): `Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<`Definition`, { `optional`: ``false``  }\>\> : `never`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

##### Returns

`Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<`Definition`, { `optional`: ``false``  }\>\> : `never`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:87

___

### singleType

• **singleType**: (`name?`: `string`) => `Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<`Definition`, { `list`: ``false``  }\>\> : `never`

#### Type declaration

▸ (`name?`): `Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<`Definition`, { `list`: ``false``  }\>\> : `never`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

##### Returns

`Definition` extends `unknown` ? [`GraphType`](Solarwind.GraphType.md)<[`DescribeAndOverrideField`](../modules/Solarwind.md#describeandoverridefield)<`Definition`, { `list`: ``false``  }\>\> : `never`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:89

___

### touched

• **touched**: `boolean`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:65

___

### typescriptPrint

• **typescriptPrint**: (`options?`: `ObjectToTypescriptOptions` & { `name?`: `string`  }) => `Promise`<`string`\>

#### Type declaration

▸ (`options?`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ObjectToTypescriptOptions` & { `name?`: `string`  } |

##### Returns

`Promise`<`string`\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:83

___

### \_\_isGraphType

▪ `Static` **\_\_isGraphType**: `boolean`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:13

___

### getOrSet

▪ `Static` **getOrSet**: <T\>(`id`: `string`, `def`: `T`) => [`GraphType`](Solarwind.GraphType.md)<`T`\>

#### Type declaration

▸ <`T`\>(`id`, `def`): [`GraphType`](Solarwind.GraphType.md)<`T`\>

Get an Object with the provided id
   or set a new Object in the register if not found.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](../modules/Solarwind.md#objectfieldinput) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `def` | `T` |

##### Returns

[`GraphType`](Solarwind.GraphType.md)<`T`\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:96

___

### register

▪ `Static` **register**: `Store`<`Record`<`string`, [`GraphTypeLike`](../interfaces/Solarwind.GraphTypeLike.md)\>, `string`, [`GraphTypeLike`](../interfaces/Solarwind.GraphTypeLike.md)\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:15

___

### reset

▪ `Static` **reset**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:57

___

### resolvers

▪ `Static` **resolvers**: `Store`<`Record`<`string`, { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\> ; `astNode?`: `Maybe`<`FieldDefinitionNode`\> ; `deprecationReason?`: `Maybe`<`string`\> ; `description?`: `Maybe`<`string`\> ; `extensions?`: `Maybe`<`Readonly`<`GraphQLFieldExtensions`<`any`, `any`, `any`\>\>\> ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `subscribe?`: `GraphQLFieldResolver`<`any`, `any`, `any`, `unknown`\> ; `type`: `any` ; `typeDef`: `any`  }\>, `string`, { `__graphTypeId`: `string` ; `__isRelation`: `boolean` ; `__isResolver`: ``true`` ; `__relatedToGraphTypeId`: `string` ; `args`: `any` ; `argsDef`: `any` ; `argsType`: `any` ; `asObjectField`: (`name?`: `string`) => `GraphQLField`<`any`, `any`, `any`\> ; `astNode?`: `Maybe`<`FieldDefinitionNode`\> ; `deprecationReason?`: `Maybe`<`string`\> ; `description?`: `Maybe`<`string`\> ; `extensions?`: `Maybe`<`Readonly`<`GraphQLFieldExtensions`<`any`, `any`, `any`\>\>\> ; `kind`: `ResolverKind` ; `name`: `string` ; `payloadType`: `any` ; `resolve`: <Root\>(`root`: `Root`, `args`: `any`, `context`: `any`, `info`: `GraphQLResolveInfo`) => `any` ; `subscribe?`: `GraphQLFieldResolver`<`any`, `any`, `any`, `unknown`\> ; `type`: `any` ; `typeDef`: `any`  }\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:16

## Accessors

### hidden

• `get` **hidden**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:70

• `set` **hidden**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:69

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:59

___

### optionalId

• `get` **optionalId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:61

## Methods

### clone

▸ **clone**<`T`\>(`handler`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`input`: [`ExtendObjectDefinition`](../interfaces/Solarwind.ExtendObjectDefinition.md)<[`GraphType`](Solarwind.GraphType.md)<`Definition`\>, [`GraphType`](Solarwind.GraphType.md)<`Definition`\>\>) => `T` |

#### Returns

`T`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:76

___

### mutateFields

▸ **mutateFields**<`Def`\>(`callback`): [`GraphType`](Solarwind.GraphType.md)<{ `object`: `Def`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`input`: [`ExtendObjectDefinition`](../interfaces/Solarwind.ExtendObjectDefinition.md)<[`GraphType`](Solarwind.GraphType.md)<`Definition`\>, [`GraphType`](Solarwind.GraphType.md)<`Definition`\>\>) => `Def` |

#### Returns

[`GraphType`](Solarwind.GraphType.md)<{ `object`: `Def`  }\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:79

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
| `handler` | (`input`: [`ExtendType`](../interfaces/Solarwind.ExtendType.md)<[`GraphType`](Solarwind.GraphType.md)<`Definition`\>\>) => `T` |

#### Returns

`T`

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:77

___

### touch

▸ **touch**(): [`GraphType`](Solarwind.GraphType.md)<`Definition`\>

#### Returns

[`GraphType`](Solarwind.GraphType.md)<`Definition`\>

#### Defined in

packages/schema/lib/GraphType/GraphType.d.ts:66

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

packages/schema/lib/GraphType/GraphType.d.ts:97

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

packages/schema/lib/GraphType/GraphType.d.ts:98
