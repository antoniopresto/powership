[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / ObjectType

# Class: ObjectType<Input, HandledInput\>

[Powership](../modules/Powership.md).ObjectType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `Input` |
| `HandledInput` | extends `_HandleInput`<`Input`\> = `_HandleInput`<`Input`\> |

## Table of contents

### Constructors

- [constructor](Powership.ObjectType.md#constructor)

### Properties

- [\_\_withCache](Powership.ObjectType.md#__withcache)
- [addGraphQLMiddleware](Powership.ObjectType.md#addgraphqlmiddleware)
- [graphQLMiddleware](Powership.ObjectType.md#graphqlmiddleware)
- [graphqlInputType](Powership.ObjectType.md#graphqlinputtype)
- [graphqlInterfaceType](Powership.ObjectType.md#graphqlinterfacetype)
- [graphqlPrint](Powership.ObjectType.md#graphqlprint)
- [graphqlType](Powership.ObjectType.md#graphqltype)
- [graphqlTypeToString](Powership.ObjectType.md#graphqltypetostring)
- [helpers](Powership.ObjectType.md#helpers)
- [implement](Powership.ObjectType.md#implement)
- [inputDefinition](Powership.ObjectType.md#inputdefinition)
- [softParse](Powership.ObjectType.md#softparse)
- [toGraphQL](Powership.ObjectType.md#tographql)
- [typescriptPrint](Powership.ObjectType.md#typescriptprint)
- [\_\_isPowershipObject](Powership.ObjectType.md#__ispowershipobject)
- [getOrSet](Powership.ObjectType.md#getorset)
- [register](Powership.ObjectType.md#register)

### Accessors

- [\_\_isPowershipObject](Powership.ObjectType.md#__ispowershipobject-1)
- [definition](Powership.ObjectType.md#definition)
- [description](Powership.ObjectType.md#description)
- [hidden](Powership.ObjectType.md#hidden)
- [id](Powership.ObjectType.md#id)
- [meta](Powership.ObjectType.md#meta)
- [nonNullId](Powership.ObjectType.md#nonnullid)

### Methods

- [\_\_setMetaData](Powership.ObjectType.md#__setmetadata)
- [cleanDefinition](Powership.ObjectType.md#cleandefinition)
- [clone](Powership.ObjectType.md#clone)
- [describe](Powership.ObjectType.md#describe)
- [edit](Powership.ObjectType.md#edit)
- [identify](Powership.ObjectType.md#identify)
- [parse](Powership.ObjectType.md#parse)
- [safeParse](Powership.ObjectType.md#safeparse)
- [validate](Powership.ObjectType.md#validate)
- [is](Powership.ObjectType.md#is)
- [reset](Powership.ObjectType.md#reset)

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

packages/schema/lib/ObjectType.d.ts:32

## Properties

### \_\_withCache

• **\_\_withCache**: `WithCache`<{ `helpers`: `ObjectHelpers`  }\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:28

___

### addGraphQLMiddleware

• **addGraphQLMiddleware**: (`middleware`: `GraphQLParseMiddleware` \| `GraphQLParseMiddleware`[]) => `void`

#### Type declaration

▸ (`middleware`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | `GraphQLParseMiddleware` \| `GraphQLParseMiddleware`[] |

##### Returns

`void`

#### Defined in

packages/schema/lib/ObjectType.d.ts:111

___

### graphQLMiddleware

• **graphQLMiddleware**: `GraphQLParseMiddleware`[]

#### Defined in

packages/schema/lib/ObjectType.d.ts:110

___

### graphqlInputType

• **graphqlInputType**: (`options?`: `ParseInputTypeOptions`) => `GraphQLInputObjectType`

#### Type declaration

▸ (`options?`): `GraphQLInputObjectType`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ParseInputTypeOptions` |

##### Returns

`GraphQLInputObjectType`

#### Defined in

packages/schema/lib/ObjectType.d.ts:99

___

### graphqlInterfaceType

• **graphqlInterfaceType**: (`options?`: `ParseInterfaceOptions`) => `GraphQLInterfaceType`

#### Type declaration

▸ (`options?`): `GraphQLInterfaceType`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ParseInterfaceOptions` |

##### Returns

`GraphQLInterfaceType`

#### Defined in

packages/schema/lib/ObjectType.d.ts:95

___

### graphqlPrint

• **graphqlPrint**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

packages/schema/lib/ObjectType.d.ts:96

___

### graphqlType

• **graphqlType**: (`options?`: `ParseTypeOptions`) => `GraphQLObjectType`<`any`, `any`\>

#### Type declaration

▸ (`options?`): `GraphQLObjectType`<`any`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ParseTypeOptions` |

##### Returns

`GraphQLObjectType`<`any`, `any`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:94

___

### graphqlTypeToString

• **graphqlTypeToString**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

packages/schema/lib/ObjectType.d.ts:98

___

### helpers

• **helpers**: () => `ObjectHelpers`

#### Type declaration

▸ (): `ObjectHelpers`

##### Returns

`ObjectHelpers`

#### Defined in

packages/schema/lib/ObjectType.d.ts:92

___

### implement

• **implement**: <Parents\>(`name`: `string`, ...`parents`: `Parents`) => [`ImplementObject`](../modules/Powership.md#implementobject)<[`ObjectType`](Powership.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

#### Type declaration

▸ <`Parents`\>(`name`, `...parents`): [`ImplementObject`](../modules/Powership.md#implementobject)<[`ObjectType`](Powership.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Parents` | extends readonly [`ObjectLike`](../interfaces/Powership.ObjectLike.md)[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...parents` | `Parents` |

##### Returns

[`ImplementObject`](../modules/Powership.md#implementobject)<[`ObjectType`](Powership.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:100

___

### inputDefinition

• **inputDefinition**: [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput) \| (`modules`: `PowershipModules`) => [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)

#### Defined in

packages/schema/lib/ObjectType.d.ts:31

___

### softParse

• **softParse**: <T\>(`input`: `any`, `options?`: [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject)) => [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

#### Type declaration

▸ <`T`\>(`input`, `options?`): [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject) |

##### Returns

[`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

#### Defined in

packages/schema/lib/ObjectType.d.ts:66

___

### toGraphQL

• **toGraphQL**: (`name?`: `string`) => `GraphQLParserResult`

#### Type declaration

▸ (`name?`): `GraphQLParserResult`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

##### Returns

`GraphQLParserResult`

#### Defined in

packages/schema/lib/ObjectType.d.ts:93

___

### typescriptPrint

• **typescriptPrint**: (`options?`: `ObjectToTypescriptOptions`) => `Promise`<`string`\>

#### Type declaration

▸ (`options?`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ObjectToTypescriptOptions` |

##### Returns

`Promise`<`string`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:97

___

### \_\_isPowershipObject

▪ `Static` **\_\_isPowershipObject**: `boolean`

#### Defined in

packages/schema/lib/ObjectType.d.ts:27

___

### getOrSet

▪ `Static` **getOrSet**: <T\>(`id`: `string`, `def`: `T` \| () => `T`) => [`ObjectType`](Powership.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

#### Type declaration

▸ <`T`\>(`id`, `def`): [`ObjectType`](Powership.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

Get an Object with the provided id
   or set a new Object in the register if not found.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `def` | `T` \| () => `T` |

##### Returns

[`ObjectType`](Powership.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:109

___

### register

▪ `Static` **register**: [`Store`](../interfaces/Powership.Store.md)<`Record`<`string`, [`ObjectLike`](../interfaces/Powership.ObjectLike.md)\>, `string`, [`ObjectLike`](../interfaces/Powership.ObjectLike.md)\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:102

## Accessors

### \_\_isPowershipObject

• `get` **__isPowershipObject**(): ``true``

#### Returns

``true``

#### Defined in

packages/schema/lib/ObjectType.d.ts:26

___

### definition

• `get` **definition**(): `HandledInput`

#### Returns

`HandledInput`

#### Defined in

packages/schema/lib/ObjectType.d.ts:34

___

### description

• `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/schema/lib/ObjectType.d.ts:35

___

### hidden

• `get` **hidden**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/schema/lib/ObjectType.d.ts:38

• `set` **hidden**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

packages/schema/lib/ObjectType.d.ts:37

___

### id

• `get` **id**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

packages/schema/lib/ObjectType.d.ts:87

___

### meta

• `get` **meta**(): [`MetaFieldDef`](../modules/Powership.md#metafielddef)

#### Returns

[`MetaFieldDef`](../modules/Powership.md#metafielddef)

#### Defined in

packages/schema/lib/ObjectType.d.ts:47

___

### nonNullId

• `get` **nonNullId**(): `string`

#### Returns

`string`

#### Defined in

packages/schema/lib/ObjectType.d.ts:88

## Methods

### \_\_setMetaData

▸ **__setMetaData**(`k`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | keyof [`MetaFieldDef`](../modules/Powership.md#metafielddef) |
| `value` | [`Serializable`](../modules/Powership.TU.md#serializable) |

#### Returns

`void`

#### Defined in

packages/schema/lib/ObjectType.d.ts:48

___

### cleanDefinition

▸ **cleanDefinition**(): `HandledInput`

#### Returns

`HandledInput`

#### Defined in

packages/schema/lib/ObjectType.d.ts:39

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
| `handler` | (`input`: [`ExtendObjectDefinition`](../interfaces/Powership.ExtendObjectDefinition.md)<{ `object`: `HandledInput`  }, { `object`: `HandledInput`  }\>) => `T` |

#### Returns

`T`

#### Defined in

packages/schema/lib/ObjectType.d.ts:82

___

### describe

▸ **describe**(`...descriptions`): [`ObjectType`](Powership.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...descriptions` | [comment: string] \| [{ [K in string \| number \| symbol]?: string }] |

#### Returns

[`ObjectType`](Powership.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:79

___

### edit

▸ **edit**(): [`ExtendObjectDefinition`](../interfaces/Powership.ExtendObjectDefinition.md)<{ `def`: `HandledInput` ; `type`: ``"object"``  }, { `def`: `HandledInput` ; `type`: ``"object"``  }\>

#### Returns

[`ExtendObjectDefinition`](../interfaces/Powership.ExtendObjectDefinition.md)<{ `def`: `HandledInput` ; `type`: ``"object"``  }, { `def`: `HandledInput` ; `type`: ``"object"``  }\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:40

___

### identify

▸ **identify**<`ID`\>(`id`): [`ObjectType`](Powership.ObjectType.md)<`Input`, `HandledInput`\> & { `id`: `ID`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |

#### Returns

[`ObjectType`](Powership.ObjectType.md)<`Input`, `HandledInput`\> & { `id`: `ID`  }

#### Defined in

packages/schema/lib/ObjectType.d.ts:89

___

### parse

▸ **parse**(`input`, `options?`): [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`HandledInput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Powership.md#validationcustommessage)  } & [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject) |

#### Returns

[`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`HandledInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:49

▸ **parse**(`input`, `options?`): `Partial`<[`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`HandledInput`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `partial`: ``true``  } & [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject) |

#### Returns

`Partial`<[`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`HandledInput`\>\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:52

▸ **parse**<`Fields`\>(`input`, `options`): { [K in string \| number \| symbol as K extends Fields[number] ? K : never]: InferObjectDefinition<HandledInput\>[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fields` | extends keyof `HandledInput`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Powership.md#validationcustommessage) ; `fields`: `Fields`  } & [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject) |

#### Returns

{ [K in string \| number \| symbol as K extends Fields[number] ? K : never]: InferObjectDefinition<HandledInput\>[K] }

#### Defined in

packages/schema/lib/ObjectType.d.ts:55

▸ **parse**<`Fields`\>(`input`, `options`): { [K in string \| number \| symbol as K extends Fields[number] ? never : K]: InferObjectDefinition<HandledInput\>[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fields` | extends keyof `HandledInput`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options` | { `exclude`: `Fields`  } & [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject) |

#### Returns

{ [K in string \| number \| symbol as K extends Fields[number] ? never : K]: InferObjectDefinition<HandledInput\>[K] }

#### Defined in

packages/schema/lib/ObjectType.d.ts:61

___

### safeParse

▸ **safeParse**(`input`, `options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Powership.md#validationcustommessage) ; `excludeInvalidListItems?`: `boolean` ; `fields?`: keyof `HandledInput`[] ; `partial?`: `boolean`  } & [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `string`[] |
| `parsed` | `unknown` |

#### Defined in

packages/schema/lib/ObjectType.d.ts:70

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

packages/schema/lib/ObjectType.d.ts:69

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

packages/schema/lib/ObjectType.d.ts:112

___

### reset

▸ `Static` **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:101
