[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / ObjectType

# Class: ObjectType<Input, HandledInput\>

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).ObjectType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `Input` |
| `HandledInput` | extends `_HandleInput`<`Input`\> = `_HandleInput`<`Input`\> |

## Table of contents

### Constructors

- [constructor](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#constructor)

### Properties

- [\_\_withCache](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#__withcache)
- [graphQLMiddleware](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqlmiddleware)
- [inputDefinition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#inputdefinition)
- [\_\_isPowershipObject](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#__ispowershipobject)
- [register](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#register)

### Accessors

- [\_\_isPowershipObject](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#__ispowershipobject-1)
- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#definition)
- [description](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#description)
- [hidden](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#hidden)
- [id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#id)
- [meta](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#meta)
- [nonNullId](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#nonnullid)

### Methods

- [\_\_setMetaData](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#__setmetadata)
- [addGraphQLMiddleware](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#addgraphqlmiddleware)
- [cleanDefinition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#cleandefinition)
- [clone](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#clone)
- [describe](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#describe)
- [edit](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#edit)
- [graphqlInputType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqlinputtype)
- [graphqlInterfaceType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqlinterfacetype)
- [graphqlPrint](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqlprint)
- [graphqlType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqltype)
- [graphqlTypeToString](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqltypetostring)
- [helpers](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#helpers)
- [identify](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#identify)
- [implement](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#implement)
- [parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#parse)
- [safeParse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#safeparse)
- [softParse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#softparse)
- [toGraphQL](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#tographql)
- [typescriptPrint](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#typescriptprint)
- [validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#validate)
- [getOrSet](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#getorset)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#is)
- [reset](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#reset)

## Constructors

### constructor

• **new ObjectType**<`Input`, `HandledInput`\>(`objectDef`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `Input` |
| `HandledInput` | `_HandleInput`<`Input`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectDef` | `HandledInput` \| (`modules`: `PowershipModules`) => `HandledInput` |

#### Defined in

packages/schema/src/ObjectType.ts:83

## Properties

### \_\_withCache

• **\_\_withCache**: `WithCache`<{ `helpers`: `ObjectHelpers`  }\>

#### Defined in

packages/schema/src/ObjectType.ts:75

___

### graphQLMiddleware

• **graphQLMiddleware**: `GraphQLParseMiddleware`[] = `[]`

#### Defined in

packages/schema/src/ObjectType.ts:590

___

### inputDefinition

• **inputDefinition**: [`ObjectDefinitionInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectdefinitioninput) \| (`modules`: `PowershipModules`) => [`ObjectDefinitionInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectdefinitioninput)

#### Defined in

packages/schema/src/ObjectType.ts:79

___

### \_\_isPowershipObject

▪ `Static` **\_\_isPowershipObject**: `boolean` = `true`

#### Defined in

packages/schema/src/ObjectType.ts:73

___

### register

▪ `Static` **register**: `Store`<`Record`<`string`, [`ObjectLike`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectLike.md)\>, `string`, [`ObjectLike`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectLike.md)\>

#### Defined in

packages/schema/src/ObjectType.ts:563

## Accessors

### \_\_isPowershipObject

• `get` **__isPowershipObject**(): ``true``

#### Returns

``true``

#### Defined in

packages/schema/src/ObjectType.ts:69

___

### definition

• `get` **definition**(): `HandledInput`

#### Returns

`HandledInput`

#### Defined in

packages/schema/src/ObjectType.ts:91

___

### description

• `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/schema/src/ObjectType.ts:108

___

### hidden

• `get` **hidden**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/schema/src/ObjectType.ts:118

• `set` **hidden**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

packages/schema/src/ObjectType.ts:114

___

### id

• `get` **id**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

packages/schema/src/ObjectType.ts:448

___

### meta

• `get` **meta**(): [`MetaFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef)

#### Returns

[`MetaFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef)

#### Defined in

packages/schema/src/ObjectType.ts:135

___

### nonNullId

• `get` **nonNullId**(): `string`

#### Returns

`string`

#### Defined in

packages/schema/src/ObjectType.ts:452

## Methods

### \_\_setMetaData

▸ **__setMetaData**(`k`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | keyof [`MetaFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef) |
| `value` | `Serializable` |

#### Returns

`void`

#### Defined in

packages/schema/src/ObjectType.ts:140

___

### addGraphQLMiddleware

▸ **addGraphQLMiddleware**(`middleware`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | `GraphQLParseMiddleware` \| `GraphQLParseMiddleware`[] |

#### Returns

`void`

#### Defined in

packages/schema/src/ObjectType.ts:592

___

### cleanDefinition

▸ **cleanDefinition**(): `HandledInput`

#### Returns

`HandledInput`

#### Defined in

packages/schema/src/ObjectType.ts:123

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
| `handler` | (`input`: [`ExtendObjectDefinition`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `HandledInput`  }, { `object`: `HandledInput`  }\>) => `T` |

#### Returns

`T`

#### Defined in

packages/schema/src/ObjectType.ts:435

___

### describe

▸ **describe**(`...descriptions`): [`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...descriptions` | [comment: string] \| [{ [K in string \| number \| symbol]?: string }] |

#### Returns

[`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>

#### Defined in

packages/schema/src/ObjectType.ts:407

___

### edit

▸ **edit**(): [`ExtendObjectDefinition`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `def`: `HandledInput` ; `type`: ``"object"``  }, { `def`: `HandledInput` ; `type`: ``"object"``  }\>

#### Returns

[`ExtendObjectDefinition`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `def`: `HandledInput` ; `type`: ``"object"``  }, { `def`: `HandledInput` ; `type`: ``"object"``  }\>

#### Defined in

packages/schema/src/ObjectType.ts:128

___

### graphqlInputType

▸ **graphqlInputType**(`options?`): `GraphQLInputObjectType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ParseInputTypeOptions` |

#### Returns

`GraphQLInputObjectType`

#### Defined in

packages/schema/src/ObjectType.ts:534

___

### graphqlInterfaceType

▸ **graphqlInterfaceType**(`options?`): `GraphQLInterfaceType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ParseInterfaceOptions` |

#### Returns

`GraphQLInterfaceType`

#### Defined in

packages/schema/src/ObjectType.ts:510

___

### graphqlPrint

▸ **graphqlPrint**(): `string`

#### Returns

`string`

#### Defined in

packages/schema/src/ObjectType.ts:516

___

### graphqlType

▸ **graphqlType**(`options?`): `GraphQLObjectType`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ParseTypeOptions` |

#### Returns

`GraphQLObjectType`<`any`, `any`\>

#### Defined in

packages/schema/src/ObjectType.ts:506

___

### graphqlTypeToString

▸ **graphqlTypeToString**(): `string`

#### Returns

`string`

#### Defined in

packages/schema/src/ObjectType.ts:530

___

### helpers

▸ **helpers**(): `ObjectHelpers`

#### Returns

`ObjectHelpers`

#### Defined in

packages/schema/src/ObjectType.ts:479

___

### identify

▸ **identify**<`ID`\>(`id`): [`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Input`, `HandledInput`\> & { `id`: `ID`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |

#### Returns

[`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Input`, `HandledInput`\> & { `id`: `ID`  }

#### Defined in

packages/schema/src/ObjectType.ts:462

___

### implement

▸ **implement**<`Parents`\>(`name`, `...parents`): [`ImplementObject`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#implementobject)<[`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parents` | extends readonly [`ObjectLike`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectLike.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...parents` | `Parents` |

#### Returns

[`ImplementObject`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#implementobject)<[`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

#### Defined in

packages/schema/src/ObjectType.ts:538

___

### parse

▸ **parse**(`input`, `options?`): [`InferObjectDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage)  } & [`FieldParserOptionsObject`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

[`InferObjectDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\>

#### Defined in

packages/schema/src/ObjectType.ts:145

▸ **parse**(`input`, `options?`): `Partial`<[`InferObjectDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `partial`: ``true``  } & [`FieldParserOptionsObject`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

`Partial`<[`InferObjectDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\>\>

#### Defined in

packages/schema/src/ObjectType.ts:152

▸ **parse**<`Fields`\>(`input`, `options`): { [K in string \| number \| symbol as K extends Fields[number] ? K : never]: InferObjectDefinition<HandledInput\>[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fields` | extends keyof `HandledInput`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage) ; `fields`: `Fields`  } & [`FieldParserOptionsObject`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

{ [K in string \| number \| symbol as K extends Fields[number] ? K : never]: InferObjectDefinition<HandledInput\>[K] }

#### Defined in

packages/schema/src/ObjectType.ts:159

▸ **parse**<`Fields`\>(`input`, `options`): { [K in string \| number \| symbol as K extends Fields[number] ? never : K]: InferObjectDefinition<HandledInput\>[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fields` | extends keyof `HandledInput`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options` | { `exclude`: `Fields`  } & [`FieldParserOptionsObject`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

{ [K in string \| number \| symbol as K extends Fields[number] ? never : K]: InferObjectDefinition<HandledInput\>[K] }

#### Defined in

packages/schema/src/ObjectType.ts:171

___

### safeParse

▸ **safeParse**(`input`, `options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage) ; `excludeInvalidListItems?`: `boolean` ; `fields?`: keyof `HandledInput`[] ; `partial?`: `boolean`  } & [`FieldParserOptionsObject`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `string`[] |
| `parsed` | `unknown` |

#### Defined in

packages/schema/src/ObjectType.ts:225

___

### softParse

▸ **softParse**<`T`\>(`input`, `options?`): [`InferObjectDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options` | [`FieldParserOptionsObject`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

[`InferObjectDefinition`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

#### Defined in

packages/schema/src/ObjectType.ts:209

___

### toGraphQL

▸ **toGraphQL**(`name?`): `GraphQLParserResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`GraphQLParserResult`

#### Defined in

packages/schema/src/ObjectType.ts:485

___

### typescriptPrint

▸ **typescriptPrint**(`options?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ObjectToTypescriptOptions` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/schema/src/ObjectType.ts:520

___

### validate

▸ **validate**(`input`): input is InferObjectDefinition<HandledInput\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is InferObjectDefinition<HandledInput\>

#### Defined in

packages/schema/src/ObjectType.ts:216

___

### getOrSet

▸ `Static` **getOrSet**<`T`\>(`id`, `def`): [`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

Get an Object with the provided id
   or set a new Object in the register if not found.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectDefinitionInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `def` | `T` \| () => `T` |

#### Returns

[`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

#### Defined in

packages/schema/src/ObjectType.ts:571

___

### is

▸ `Static` **is**(`input`): input is ObjectType<ObjectDefinitionInput, ObjectDefinitionInput\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is ObjectType<ObjectDefinitionInput, ObjectDefinitionInput\>

#### Defined in

packages/schema/src/ObjectType.ts:598

___

### reset

▸ `Static` **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/schema/src/ObjectType.ts:545
