[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / ObjectType

# Class: ObjectType<Input, HandledInput\>

[Solarwind](../modules/Solarwind.md).ObjectType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `Input` |
| `HandledInput` | extends `_HandleInput`<`Input`\> = `_HandleInput`<`Input`\> |

## Table of contents

### Constructors

- [constructor](Solarwind.ObjectType.md#constructor)

### Properties

- [\_\_withCache](Solarwind.ObjectType.md#__withcache)
- [addGraphQLMiddleware](Solarwind.ObjectType.md#addgraphqlmiddleware)
- [graphQLMiddleware](Solarwind.ObjectType.md#graphqlmiddleware)
- [graphqlInputType](Solarwind.ObjectType.md#graphqlinputtype)
- [graphqlInterfaceType](Solarwind.ObjectType.md#graphqlinterfacetype)
- [graphqlPrint](Solarwind.ObjectType.md#graphqlprint)
- [graphqlType](Solarwind.ObjectType.md#graphqltype)
- [graphqlTypeToString](Solarwind.ObjectType.md#graphqltypetostring)
- [helpers](Solarwind.ObjectType.md#helpers)
- [implement](Solarwind.ObjectType.md#implement)
- [inputDefinition](Solarwind.ObjectType.md#inputdefinition)
- [softParse](Solarwind.ObjectType.md#softparse)
- [toGraphQL](Solarwind.ObjectType.md#tographql)
- [typescriptPrint](Solarwind.ObjectType.md#typescriptprint)
- [\_\_isSolarwindObject](Solarwind.ObjectType.md#__issolarwindobject)
- [getOrSet](Solarwind.ObjectType.md#getorset)
- [register](Solarwind.ObjectType.md#register)

### Accessors

- [\_\_isSolarwindObject](Solarwind.ObjectType.md#__issolarwindobject-1)
- [definition](Solarwind.ObjectType.md#definition)
- [description](Solarwind.ObjectType.md#description)
- [hidden](Solarwind.ObjectType.md#hidden)
- [id](Solarwind.ObjectType.md#id)
- [meta](Solarwind.ObjectType.md#meta)
- [nonNullId](Solarwind.ObjectType.md#nonnullid)

### Methods

- [\_\_setMetaData](Solarwind.ObjectType.md#__setmetadata)
- [cleanDefinition](Solarwind.ObjectType.md#cleandefinition)
- [clone](Solarwind.ObjectType.md#clone)
- [describe](Solarwind.ObjectType.md#describe)
- [edit](Solarwind.ObjectType.md#edit)
- [identify](Solarwind.ObjectType.md#identify)
- [parse](Solarwind.ObjectType.md#parse)
- [safeParse](Solarwind.ObjectType.md#safeparse)
- [validate](Solarwind.ObjectType.md#validate)
- [is](Solarwind.ObjectType.md#is)
- [reset](Solarwind.ObjectType.md#reset)

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
| `objectDef` | `HandledInput` \| (`modules`: `SolarwindModules`) => `HandledInput` |

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

• **implement**: <Parents\>(`name`: `string`, ...`parents`: `Parents`) => [`ImplementObject`](../modules/Solarwind.md#implementobject)<[`ObjectType`](Solarwind.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

#### Type declaration

▸ <`Parents`\>(`name`, `...parents`): [`ImplementObject`](../modules/Solarwind.md#implementobject)<[`ObjectType`](Solarwind.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Parents` | extends readonly [`ObjectLike`](../interfaces/Solarwind.ObjectLike.md)[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...parents` | `Parents` |

##### Returns

[`ImplementObject`](../modules/Solarwind.md#implementobject)<[`ObjectType`](Solarwind.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>, `Parents`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:100

___

### inputDefinition

• **inputDefinition**: [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) \| (`modules`: `SolarwindModules`) => [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md)

#### Defined in

packages/schema/lib/ObjectType.d.ts:31

___

### softParse

• **softParse**: <T\>(`input`: `any`, `options?`: [`FieldParserOptionsObject`](../modules/Solarwind.md#fieldparseroptionsobject)) => [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

#### Type declaration

▸ <`T`\>(`input`, `options?`): [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | [`FieldParserOptionsObject`](../modules/Solarwind.md#fieldparseroptionsobject) |

##### Returns

[`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`HandledInput`\> & { `[K: string]`: `T`;  }

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

### \_\_isSolarwindObject

▪ `Static` **\_\_isSolarwindObject**: `boolean`

#### Defined in

packages/schema/lib/ObjectType.d.ts:27

___

### getOrSet

▪ `Static` **getOrSet**: <T\>(`id`: `string`, `def`: `T` \| () => `T`) => [`ObjectType`](Solarwind.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

#### Type declaration

▸ <`T`\>(`id`, `def`): [`ObjectType`](Solarwind.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

Get an Object with the provided id
   or set a new Object in the register if not found.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `def` | `T` \| () => `T` |

##### Returns

[`ObjectType`](Solarwind.ObjectType.md)<`T`, `_HandleInput`<`T`\>\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:109

___

### register

▪ `Static` **register**: `Store`<`Record`<`string`, [`ObjectLike`](../interfaces/Solarwind.ObjectLike.md)\>, `string`, [`ObjectLike`](../interfaces/Solarwind.ObjectLike.md)\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:102

## Accessors

### \_\_isSolarwindObject

• `get` **__isSolarwindObject**(): ``true``

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

• `get` **meta**(): [`MetaFieldDef`](../modules/Solarwind.md#metafielddef)

#### Returns

[`MetaFieldDef`](../modules/Solarwind.md#metafielddef)

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
| `k` | keyof [`MetaFieldDef`](../modules/Solarwind.md#metafielddef) |
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
| `handler` | (`input`: [`ExtendObjectDefinition`](../interfaces/Solarwind.ExtendObjectDefinition.md)<{ `object`: `HandledInput`  }, { `object`: `HandledInput`  }\>) => `T` |

#### Returns

`T`

#### Defined in

packages/schema/lib/ObjectType.d.ts:82

___

### describe

▸ **describe**(`...descriptions`): [`ObjectType`](Solarwind.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...descriptions` | [comment: string] \| [{ [K in string \| number \| symbol]?: string }] |

#### Returns

[`ObjectType`](Solarwind.ObjectType.md)<`HandledInput`, `_HandleInput`<`HandledInput`\>\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:79

___

### edit

▸ **edit**(): [`ExtendObjectDefinition`](../interfaces/Solarwind.ExtendObjectDefinition.md)<{ `def`: `HandledInput` ; `type`: ``"object"``  }, { `def`: `HandledInput` ; `type`: ``"object"``  }\>

#### Returns

[`ExtendObjectDefinition`](../interfaces/Solarwind.ExtendObjectDefinition.md)<{ `def`: `HandledInput` ; `type`: ``"object"``  }, { `def`: `HandledInput` ; `type`: ``"object"``  }\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:40

___

### identify

▸ **identify**<`ID`\>(`id`): [`ObjectType`](Solarwind.ObjectType.md)<`Input`, `HandledInput`\> & { `id`: `ID`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |

#### Returns

[`ObjectType`](Solarwind.ObjectType.md)<`Input`, `HandledInput`\> & { `id`: `ID`  }

#### Defined in

packages/schema/lib/ObjectType.d.ts:89

___

### parse

▸ **parse**(`input`, `options?`): [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`HandledInput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Solarwind.md#validationcustommessage)  } & [`FieldParserOptionsObject`](../modules/Solarwind.md#fieldparseroptionsobject) |

#### Returns

[`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`HandledInput`\>

#### Defined in

packages/schema/lib/ObjectType.d.ts:49

▸ **parse**(`input`, `options?`): `Partial`<[`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`HandledInput`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `options?` | { `partial`: ``true``  } & [`FieldParserOptionsObject`](../modules/Solarwind.md#fieldparseroptionsobject) |

#### Returns

`Partial`<[`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`HandledInput`\>\>

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
| `options` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Solarwind.md#validationcustommessage) ; `fields`: `Fields`  } & [`FieldParserOptionsObject`](../modules/Solarwind.md#fieldparseroptionsobject) |

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
| `options` | { `exclude`: `Fields`  } & [`FieldParserOptionsObject`](../modules/Solarwind.md#fieldparseroptionsobject) |

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
| `options?` | { `customMessage?`: [`ValidationCustomMessage`](../modules/Solarwind.md#validationcustommessage) ; `excludeInvalidListItems?`: `boolean` ; `fields?`: keyof `HandledInput`[] ; `partial?`: `boolean`  } & [`FieldParserOptionsObject`](../modules/Solarwind.md#fieldparseroptionsobject) |

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
