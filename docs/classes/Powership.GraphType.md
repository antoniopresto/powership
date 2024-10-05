[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / GraphType

# Class: GraphType<Definition\>

[Powership](../modules/Powership.md).GraphType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Powership.md#objectfieldinput) |

## Table of contents

### Constructors

- [constructor](Powership.GraphType.md#constructor)

### Properties

- [\_\_isGraphType](Powership.GraphType.md#__isgraphtype)
- [\_\_lazyGetter](Powership.GraphType.md#__lazygetter)
- [\_toGraphQL](Powership.GraphType.md#_tographql)
- [beforeInitialize](Powership.GraphType.md#beforeinitialize)
- [definition](Powership.GraphType.md#definition)
- [graphQLInputType](Powership.GraphType.md#graphqlinputtype)
- [graphQLInterface](Powership.GraphType.md#graphqlinterface)
- [graphQLType](Powership.GraphType.md#graphqltype)
- [id](Powership.GraphType.md#id)
- [identify](Powership.GraphType.md#identify)
- [listType](Powership.GraphType.md#listtype)
- [optionalType](Powership.GraphType.md#optionaltype)
- [parse](Powership.GraphType.md#parse)
- [print](Powership.GraphType.md#print)
- [requiredType](Powership.GraphType.md#requiredtype)
- [singleType](Powership.GraphType.md#singletype)
- [touched](Powership.GraphType.md#touched)
- [typescriptPrint](Powership.GraphType.md#typescriptprint)
- [\_\_isGraphType](Powership.GraphType.md#__isgraphtype-1)
- [getOrSet](Powership.GraphType.md#getorset)
- [register](Powership.GraphType.md#register)
- [reset](Powership.GraphType.md#reset)

### Accessors

- [hidden](Powership.GraphType.md#hidden)
- [optionalId](Powership.GraphType.md#optionalid)

### Methods

- [clone](Powership.GraphType.md#clone)
- [mutateFields](Powership.GraphType.md#mutatefields)
- [override](Powership.GraphType.md#override)
- [touch](Powership.GraphType.md#touch)
- [assert](Powership.GraphType.md#assert)
- [is](Powership.GraphType.md#is)
- [isTypeDefinition](Powership.GraphType.md#istypedefinition)

## Constructors

### constructor

• **new GraphType**<`Definition`\>(`definition`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Powership.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Definition` extends [`ObjectFieldInput`](../modules/Powership.md#objectfieldinput) ? `Definition` \| () => `Definition` : `never` |

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:24

• **new GraphType**<`Definition`\>(`name`, `definition`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends [`ObjectFieldInput`](../modules/Powership.md#objectfieldinput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Definition` extends [`ObjectFieldInput`](../modules/Powership.md#objectfieldinput) ? `Definition` \| () => `Definition` : `never` |

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:25

## Properties

### \_\_isGraphType

• `Readonly` **\_\_isGraphType**: ``true``

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:17

___

### \_\_lazyGetter

• **\_\_lazyGetter**: [`LazyParseGraphTypePayload`](../modules/Powership.md#lazyparsegraphtypepayload)

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:26

___

### \_toGraphQL

• **\_toGraphQL**: () => `ConvertFieldResult`

#### Type declaration

▸ (): `ConvertFieldResult`

##### Returns

`ConvertFieldResult`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:34

___

### beforeInitialize

• **beforeInitialize**: (`definition`: [`LazyParseGraphTypePayload`](../modules/Powership.md#lazyparsegraphtypepayload)) => [`LazyParseGraphTypePayload`](../modules/Powership.md#lazyparsegraphtypepayload)[]

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:40

___

### definition

• `Readonly` **definition**: `Definition`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:20

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

packages/schema/out/GraphType/GraphType.d.ts:36

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

packages/schema/out/GraphType/GraphType.d.ts:37

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

packages/schema/out/GraphType/GraphType.d.ts:35

___

### id

• **id**: `string`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:21

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

packages/schema/out/GraphType/GraphType.d.ts:30

___

### listType

• **listType**: (`name?`: `string`) => `Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`MakeTypeList`](../modules/Powership.md#maketypelist)<`Definition`\>\> : `never`

#### Type declaration

▸ (`name?`): `Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`MakeTypeList`](../modules/Powership.md#maketypelist)<`Definition`\>\> : `never`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

##### Returns

`Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`MakeTypeList`](../modules/Powership.md#maketypelist)<`Definition`\>\> : `never`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:50

___

### optionalType

• **optionalType**: (`name?`: `string`) => `Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<`Definition`, { `optional`: ``true``  }\>\> : `never`

#### Type declaration

▸ (`name?`): `Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<`Definition`, { `optional`: ``true``  }\>\> : `never`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

##### Returns

`Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<`Definition`, { `optional`: ``true``  }\>\> : `never`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:48

___

### parse

• **parse**: (`input`: `any`, `options?`: [`FieldParserConfig`](../modules/Powership.md#fieldparserconfig)) => [`Infer`](../modules/Powership.md#infer)<`Definition`\>

#### Type declaration

▸ (`input`, `options?`): [`Infer`](../modules/Powership.md#infer)<`Definition`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | [`FieldParserConfig`](../modules/Powership.md#fieldparserconfig) |

##### Returns

[`Infer`](../modules/Powership.md#infer)<`Definition`\>

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:33

___

### print

• **print**: () => `string`[]

#### Type declaration

▸ (): `string`[]

##### Returns

`string`[]

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:44

___

### requiredType

• **requiredType**: (`name?`: `string`) => `Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<`Definition`, { `optional`: ``false``  }\>\> : `never`

#### Type declaration

▸ (`name?`): `Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<`Definition`, { `optional`: ``false``  }\>\> : `never`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

##### Returns

`Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<`Definition`, { `optional`: ``false``  }\>\> : `never`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:49

___

### singleType

• **singleType**: (`name?`: `string`) => `Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<`Definition`, { `list`: ``false``  }\>\> : `never`

#### Type declaration

▸ (`name?`): `Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<`Definition`, { `list`: ``false``  }\>\> : `never`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

##### Returns

`Definition` extends `unknown` ? [`GraphType`](Powership.GraphType.md)<[`DescribeAndOverrideField`](../modules/Powership.md#describeandoverridefield)<`Definition`, { `list`: ``false``  }\>\> : `never`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:51

___

### touched

• **touched**: `boolean`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:27

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

packages/schema/out/GraphType/GraphType.d.ts:45

___

### \_\_isGraphType

▪ `Static` **\_\_isGraphType**: `boolean`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:16

___

### getOrSet

▪ `Static` **getOrSet**: <T\>(`id`: `string`, `def`: `T`) => [`GraphType`](Powership.GraphType.md)<`T`\>

#### Type declaration

▸ <`T`\>(`id`, `def`): [`GraphType`](Powership.GraphType.md)<`T`\>

Get an Object with the provided id
   or set a new Object in the register if not found.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectFieldInput`](../modules/Powership.md#objectfieldinput) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `def` | `T` |

##### Returns

[`GraphType`](Powership.GraphType.md)<`T`\>

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:58

___

### register

▪ `Static` **register**: [`Store`](../interfaces/Powership.Store.md)<`Record`<`string`, [`GraphTypeLike`](../interfaces/Powership.GraphTypeLike.md)\>, `string`, [`GraphTypeLike`](../interfaces/Powership.GraphTypeLike.md)\>

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:18

___

### reset

▪ `Static` **reset**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:19

## Accessors

### hidden

• `get` **hidden**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:32

• `set` **hidden**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:31

___

### optionalId

• `get` **optionalId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:23

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
| `handler` | (`input`: [`ExtendObjectDefinition`](../interfaces/Powership.ExtendObjectDefinition.md)<[`GraphType`](Powership.GraphType.md)<`Definition`\>, [`GraphType`](Powership.GraphType.md)<`Definition`\>\>) => `T` |

#### Returns

`T`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:38

___

### mutateFields

▸ **mutateFields**<`Def`\>(`callback`): [`GraphType`](Powership.GraphType.md)<{ `object`: `Def`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`input`: [`ExtendObjectDefinition`](../interfaces/Powership.ExtendObjectDefinition.md)<[`GraphType`](Powership.GraphType.md)<`Definition`\>, [`GraphType`](Powership.GraphType.md)<`Definition`\>\>) => `Def` |

#### Returns

[`GraphType`](Powership.GraphType.md)<{ `object`: `Def`  }\>

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:41

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
| `handler` | (`input`: [`ExtendType`](../interfaces/Powership.ExtendType.md)<[`GraphType`](Powership.GraphType.md)<`Definition`\>\>) => `T` |

#### Returns

`T`

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:39

___

### touch

▸ **touch**(): [`GraphType`](Powership.GraphType.md)<`Definition`\>

#### Returns

[`GraphType`](Powership.GraphType.md)<`Definition`\>

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:28

___

### assert

▸ `Static` **assert**(`type`): asserts type is GraphType<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |

#### Returns

asserts type is GraphType<any\>

#### Defined in

packages/schema/out/GraphType/GraphType.d.ts:15

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

packages/schema/out/GraphType/GraphType.d.ts:59

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

packages/schema/out/GraphType/GraphType.d.ts:60
