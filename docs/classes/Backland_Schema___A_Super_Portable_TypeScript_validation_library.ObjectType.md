[Backland](../README.md) / [Modules](../modules.md) / [Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md) / ObjectType

# Class: ObjectType<Input, HandledInput\>

[Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md).ObjectType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `Input` |
| `HandledInput` | extends `_HandleInput`<`Input`\> = `_HandleInput`<`Input`\> |

## Table of contents

### Constructors

- [constructor](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#constructor)

### Properties

- [\_\_withCache](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#__withcache)
- [graphQLMiddleware](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqlmiddleware)
- [inputDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#inputdefinition)
- [\_\_isBacklandObject](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#__isbacklandobject)
- [register](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#register)

### Accessors

- [\_\_isBacklandObject](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#__isbacklandobject-1)
- [definition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#definition)
- [description](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#description)
- [hidden](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#hidden)
- [id](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#id)
- [meta](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#meta)
- [nonNullId](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#nonnullid)

### Methods

- [\_\_setMetaData](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#__setmetadata)
- [addGraphQLMiddleware](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#addgraphqlmiddleware)
- [cleanDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#cleandefinition)
- [clone](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#clone)
- [describe](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#describe)
- [edit](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#edit)
- [graphqlInputType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqlinputtype)
- [graphqlInterfaceType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqlinterfacetype)
- [graphqlPrint](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqlprint)
- [graphqlType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqltype)
- [graphqlTypeToString](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#graphqltypetostring)
- [helpers](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#helpers)
- [identify](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#identify)
- [implement](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#implement)
- [parse](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#parse)
- [safeParse](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#safeparse)
- [softParse](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#softparse)
- [toGraphQL](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#tographql)
- [typescriptPrint](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#typescriptprint)
- [validate](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#validate)
- [getOrSet](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#getorset)
- [is](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#is)
- [reset](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md#reset)

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
| `objectDef` | `HandledInput` \| (`modules`: `BacklandModules`) => `HandledInput` |

#### Defined in

[packages/schema/src/ObjectType.ts:83](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L83)

## Properties

### \_\_withCache

• **\_\_withCache**: `WithCache`<{ `helpers`: `ObjectHelpers`  }\>

#### Defined in

[packages/schema/src/ObjectType.ts:75](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L75)

___

### graphQLMiddleware

• **graphQLMiddleware**: `GraphQLParseMiddleware`[] = `[]`

#### Defined in

[packages/schema/src/ObjectType.ts:590](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L590)

___

### inputDefinition

• **inputDefinition**: [`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md) \| (`modules`: `BacklandModules`) => [`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md)

#### Defined in

[packages/schema/src/ObjectType.ts:79](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L79)

___

### \_\_isBacklandObject

▪ `Static` **\_\_isBacklandObject**: `boolean` = `true`

#### Defined in

[packages/schema/src/ObjectType.ts:73](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L73)

___

### register

▪ `Static` **register**: `Store`<`Record`<`string`, [`ObjectLike`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectLike.md)\>, `string`, [`ObjectLike`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectLike.md)\>

#### Defined in

[packages/schema/src/ObjectType.ts:563](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L563)

## Accessors

### \_\_isBacklandObject

• `get` **__isBacklandObject**(): ``true``

#### Returns

``true``

#### Defined in

[packages/schema/src/ObjectType.ts:69](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L69)

___

### definition

• `get` **definition**(): `HandledInput`

#### Returns

`HandledInput`

#### Defined in

[packages/schema/src/ObjectType.ts:91](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L91)

___

### description

• `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/schema/src/ObjectType.ts:108](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L108)

___

### hidden

• `get` **hidden**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/schema/src/ObjectType.ts:118](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L118)

• `set` **hidden**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/schema/src/ObjectType.ts:114](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L114)

___

### id

• `get` **id**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[packages/schema/src/ObjectType.ts:448](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L448)

___

### meta

• `get` **meta**(): [`MetaFieldDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef)

#### Returns

[`MetaFieldDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef)

#### Defined in

[packages/schema/src/ObjectType.ts:135](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L135)

___

### nonNullId

• `get` **nonNullId**(): `string`

#### Returns

`string`

#### Defined in

[packages/schema/src/ObjectType.ts:452](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L452)

## Methods

### \_\_setMetaData

▸ **__setMetaData**(`k`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | keyof [`MetaFieldDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef) |
| `value` | `Serializable` |

#### Returns

`void`

#### Defined in

[packages/schema/src/ObjectType.ts:140](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L140)

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

[packages/schema/src/ObjectType.ts:592](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L592)

___

### cleanDefinition

▸ **cleanDefinition**(): `HandledInput`

#### Returns

`HandledInput`

#### Defined in

[packages/schema/src/ObjectType.ts:123](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L123)

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
| `handler` | (`input`: [`ExtendObjectDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `HandledInput`  }, { `object`: `HandledInput`  }\>) => `T` |

#### Returns

`T`

#### Defined in

[packages/schema/src/ObjectType.ts:435](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L435)

___

### describe

▸ **describe**(`...descriptions`): [`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...descriptions` | [comment: string] \| [{ [K in string \| number \| symbol]?: string }] |

#### Returns

[`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>

#### Defined in

[packages/schema/src/ObjectType.ts:407](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L407)

___

### edit

▸ **edit**(): [`ExtendObjectDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `def`: `HandledInput` ; `type`: ``"object"``  }, { `def`: `HandledInput` ; `type`: ``"object"``  }\>

#### Returns

[`ExtendObjectDefinition`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `def`: `HandledInput` ; `type`: ``"object"``  }, { `def`: `HandledInput` ; `type`: ``"object"``  }\>

#### Defined in

[packages/schema/src/ObjectType.ts:128](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L128)

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

[packages/schema/src/ObjectType.ts:534](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L534)

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

[packages/schema/src/ObjectType.ts:510](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L510)

___

### graphqlPrint

▸ **graphqlPrint**(): `string`

#### Returns

`string`

#### Defined in

[packages/schema/src/ObjectType.ts:516](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L516)

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

[packages/schema/src/ObjectType.ts:506](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L506)

___

### graphqlTypeToString

▸ **graphqlTypeToString**(): `string`

#### Returns

`string`

#### Defined in

[packages/schema/src/ObjectType.ts:530](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L530)

___

### helpers

▸ **helpers**(): `ObjectHelpers`

#### Returns

`ObjectHelpers`

#### Defined in

[packages/schema/src/ObjectType.ts:479](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L479)

___

### identify

▸ **identify**<`ID`\>(`id`): [`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Input`, `HandledInput`\> & { `id`: `ID`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |

#### Returns

[`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`Input`, `HandledInput`\> & { `id`: `ID`  }

#### Defined in

[packages/schema/src/ObjectType.ts:462](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L462)

___

### implement

▸ **implement**<`Parents`\>(`name`, `...parents`): [`ImplementObject`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#implementobject)<[`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parents` | extends readonly [`ObjectLike`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectLike.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...parents` | `Parents` |

#### Returns

[`ImplementObject`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#implementobject)<[`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

#### Defined in

[packages/schema/src/ObjectType.ts:538](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L538)

___

### parse

▸ **parse**(`input`, `options?`): [`InferObjectDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage)  } & [`FieldParserOptionsObject`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

[`InferObjectDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\>

#### Defined in

[packages/schema/src/ObjectType.ts:145](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L145)

▸ **parse**(`input`, `options?`): `Partial`<[`InferObjectDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `partial`: ``true``  } & [`FieldParserOptionsObject`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

`Partial`<[`InferObjectDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\>\>

#### Defined in

[packages/schema/src/ObjectType.ts:152](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L152)

▸ **parse**<`Fields`\>(`input`, `options`): { [K in string \| number \| symbol as K extends Fields[number] ? K : never]: InferObjectDefinition<HandledInput\>[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fields` | extends keyof `HandledInput`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage) ; `fields`: `Fields`  } & [`FieldParserOptionsObject`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

{ [K in string \| number \| symbol as K extends Fields[number] ? K : never]: InferObjectDefinition<HandledInput\>[K] }

#### Defined in

[packages/schema/src/ObjectType.ts:159](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L159)

▸ **parse**<`Fields`\>(`input`, `options`): { [K in string \| number \| symbol as K extends Fields[number] ? never : K]: InferObjectDefinition<HandledInput\>[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fields` | extends keyof `HandledInput`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options` | { `exclude`: `Fields`  } & [`FieldParserOptionsObject`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

{ [K in string \| number \| symbol as K extends Fields[number] ? never : K]: InferObjectDefinition<HandledInput\>[K] }

#### Defined in

[packages/schema/src/ObjectType.ts:171](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L171)

___

### safeParse

▸ **safeParse**(`input`, `options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#validationcustommessage) ; `excludeInvalidListItems?`: `boolean` ; `fields?`: keyof `HandledInput`[] ; `partial?`: `boolean`  } & [`FieldParserOptionsObject`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `string`[] |
| `parsed` | `unknown` |

#### Defined in

[packages/schema/src/ObjectType.ts:225](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L225)

___

### softParse

▸ **softParse**<`T`\>(`input`, `options?`): [`InferObjectDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options` | [`FieldParserOptionsObject`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject) |

#### Returns

[`InferObjectDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

#### Defined in

[packages/schema/src/ObjectType.ts:209](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L209)

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

[packages/schema/src/ObjectType.ts:485](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L485)

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

[packages/schema/src/ObjectType.ts:520](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L520)

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

[packages/schema/src/ObjectType.ts:216](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L216)

___

### getOrSet

▸ `Static` **getOrSet**<`T`\>(`id`, `def`): [`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

Get an Object with the provided id
   or set a new Object in the register if not found.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectDefinitionInput`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `def` | `T` \| () => `T` |

#### Returns

[`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

#### Defined in

[packages/schema/src/ObjectType.ts:571](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L571)

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

[packages/schema/src/ObjectType.ts:598](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L598)

___

### reset

▸ `Static` **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/schema/src/ObjectType.ts:545](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/ObjectType.ts#L545)
