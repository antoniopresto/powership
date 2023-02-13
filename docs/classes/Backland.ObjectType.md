[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / ObjectType

# Class: ObjectType<Input, HandledInput\>

[Backland](../modules/Backland.md).ObjectType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `Input` |
| `HandledInput` | extends `_HandleInput`<`Input`\> = `_HandleInput`<`Input`\> |

## Table of contents

### Constructors

- [constructor](Backland.ObjectType.md#constructor)

### Properties

- [\_\_withCache](Backland.ObjectType.md#__withcache)
- [addGraphQLMiddleware](Backland.ObjectType.md#addgraphqlmiddleware)
- [graphQLMiddleware](Backland.ObjectType.md#graphqlmiddleware)
- [graphqlInputType](Backland.ObjectType.md#graphqlinputtype)
- [graphqlInterfaceType](Backland.ObjectType.md#graphqlinterfacetype)
- [graphqlPrint](Backland.ObjectType.md#graphqlprint)
- [graphqlType](Backland.ObjectType.md#graphqltype)
- [graphqlTypeToString](Backland.ObjectType.md#graphqltypetostring)
- [helpers](Backland.ObjectType.md#helpers)
- [implement](Backland.ObjectType.md#implement)
- [inputDefinition](Backland.ObjectType.md#inputdefinition)
- [softParse](Backland.ObjectType.md#softparse)
- [toGraphQL](Backland.ObjectType.md#tographql)
- [typescriptPrint](Backland.ObjectType.md#typescriptprint)
- [\_\_isBacklandObject](Backland.ObjectType.md#__isbacklandobject)
- [getOrSet](Backland.ObjectType.md#getorset)
- [register](Backland.ObjectType.md#register)

### Accessors

- [\_\_isBacklandObject](Backland.ObjectType.md#__isbacklandobject-1)
- [definition](Backland.ObjectType.md#definition)
- [description](Backland.ObjectType.md#description)
- [hidden](Backland.ObjectType.md#hidden)
- [id](Backland.ObjectType.md#id)
- [meta](Backland.ObjectType.md#meta)
- [nonNullId](Backland.ObjectType.md#nonnullid)

### Methods

- [\_\_setMetaData](Backland.ObjectType.md#__setmetadata)
- [cleanDefinition](Backland.ObjectType.md#cleandefinition)
- [clone](Backland.ObjectType.md#clone)
- [describe](Backland.ObjectType.md#describe)
- [edit](Backland.ObjectType.md#edit)
- [identify](Backland.ObjectType.md#identify)
- [parse](Backland.ObjectType.md#parse)
- [safeParse](Backland.ObjectType.md#safeparse)
- [validate](Backland.ObjectType.md#validate)
- [is](Backland.ObjectType.md#is)
- [reset](Backland.ObjectType.md#reset)

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

• **implement**: <Parents\>(`name`: `string`, ...`parents`: `Parents`) => [`ImplementObject`](../modules/Backland.md#implementobject)<[`ObjectType`](Backland.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

#### Type declaration

▸ <`Parents`\>(`name`, `...parents`): [`ImplementObject`](../modules/Backland.md#implementobject)<[`ObjectType`](Backland.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Parents` | extends readonly [`ObjectLike`](../interfaces/Backland.ObjectLike.md)[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...parents` | `Parents` |

##### Returns

[`ImplementObject`](../modules/Backland.md#implementobject)<[`ObjectType`](Backland.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:100

___

### inputDefinition

• **inputDefinition**: [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) \| (`modules`: `BacklandModules`) => [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md)

#### Defined in

packages/schema/lib/ObjectType.d.ts:31

___

### softParse

• **softParse**: <T\>(`input`: `any`, `options?`: [`FieldParserOptionsObject`](../modules/Backland.md#fieldparseroptionsobject)) => [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

#### Type declaration

▸ <`T`\>(`input`, `options?`): [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | [`FieldParserOptionsObject`](../modules/Backland.md#fieldparseroptionsobject) |

##### Returns

[`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

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

### \_\_isBacklandObject

▪ `Static` **\_\_isBacklandObject**: `boolean`

#### Defined in

packages/schema/lib/ObjectType.d.ts:27

___

### getOrSet

▪ `Static` **getOrSet**: <T\>(`id`: `string`, `def`: `T` \| () => `T`) => [`ObjectType`](Backland.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

#### Type declaration

▸ <`T`\>(`id`, `def`): [`ObjectType`](Backland.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

Get an Object with the provided id
   or set a new Object in the register if not found.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `def` | `T` \| () => `T` |

##### Returns

[`ObjectType`](Backland.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:109

___

### register

▪ `Static` **register**: `Store`<`Record`<`string`, [`ObjectLike`](../interfaces/Backland.ObjectLike.md)\>, `string`, [`ObjectLike`](../interfaces/Backland.ObjectLike.md)\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:102

## Accessors

### \_\_isBacklandObject

• `get` **__isBacklandObject**(): ``true``

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

• `get` **meta**(): [`MetaFieldDef`](../modules/Backland.md#metafielddef)

#### Returns

[`MetaFieldDef`](../modules/Backland.md#metafielddef)

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
| `k` | keyof [`MetaFieldDef`](../modules/Backland.md#metafielddef) |
| `value` | `Serializable` |

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
| `handler` | (`input`: [`ExtendObjectDefinition`](../interfaces/Backland.ExtendObjectDefinition.md)<{ `object`: `HandledInput`  }, { `object`: `HandledInput`  }\>) => `T` |

#### Returns

`T`

#### Defined in

packages/schema/lib/ObjectType.d.ts:82

___

### describe

▸ **describe**(`...descriptions`): [`ObjectType`](Backland.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...descriptions` | [comment: string] \| [{ [K in string \| number \| symbol]?: string }] |

#### Returns

[`ObjectType`](Backland.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:79

___

### edit

▸ **edit**(): [`ExtendObjectDefinition`](../interfaces/Backland.ExtendObjectDefinition.md)<{ `def`: `HandledInput` ; `type`: ``"object"``  }, { `def`: `HandledInput` ; `type`: ``"object"``  }\>

#### Returns

[`ExtendObjectDefinition`](../interfaces/Backland.ExtendObjectDefinition.md)<{ `def`: `HandledInput` ; `type`: ``"object"``  }, { `def`: `HandledInput` ; `type`: ``"object"``  }\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:40

___

### identify

▸ **identify**<`ID`\>(`id`): [`ObjectType`](Backland.ObjectType.md)<`Input`, `HandledInput`\> & { `id`: `ID`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |

#### Returns

[`ObjectType`](Backland.ObjectType.md)<`Input`, `HandledInput`\> & { `id`: `ID`  }

#### Defined in

packages/schema/lib/ObjectType.d.ts:89

___

### parse

▸ **parse**(`input`, `options?`): [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`HandledInput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Backland.md#validationcustommessage)  } & [`FieldParserOptionsObject`](../modules/Backland.md#fieldparseroptionsobject) |

#### Returns

[`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`HandledInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:49

▸ **parse**(`input`, `options?`): `Partial`<[`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`HandledInput`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `partial`: ``true``  } & [`FieldParserOptionsObject`](../modules/Backland.md#fieldparseroptionsobject) |

#### Returns

`Partial`<[`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`HandledInput`\>\>

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
| `options` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Backland.md#validationcustommessage) ; `fields`: `Fields`  } & [`FieldParserOptionsObject`](../modules/Backland.md#fieldparseroptionsobject) |

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
| `options` | { `exclude`: `Fields`  } & [`FieldParserOptionsObject`](../modules/Backland.md#fieldparseroptionsobject) |

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
| `options?` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Backland.md#validationcustommessage) ; `excludeInvalidListItems?`: `boolean` ; `fields?`: keyof `HandledInput`[] ; `partial?`: `boolean`  } & [`FieldParserOptionsObject`](../modules/Backland.md#fieldparseroptionsobject) |

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
