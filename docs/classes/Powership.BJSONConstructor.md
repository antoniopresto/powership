[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / BJSONConstructor

# Class: BJSONConstructor

[Powership](../modules/Powership.md).BJSONConstructor

## Table of contents

### Constructors

- [constructor](Powership.BJSONConstructor.md#constructor)

### Properties

- [parse](Powership.BJSONConstructor.md#parse)
- [serializers](Powership.BJSONConstructor.md#serializers)
- [stringify](Powership.BJSONConstructor.md#stringify)
- [serializers](Powership.BJSONConstructor.md#serializers-1)

### Methods

- [getSerializer](Powership.BJSONConstructor.md#getserializer)
- [tsName](Powership.BJSONConstructor.md#tsname)

## Constructors

### constructor

• **new BJSONConstructor**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.extraSerializers?` | [`Serializer`](Powership.Serializer.md)<`any`\>[] |

#### Defined in

packages/utils/lib/BJSON.d.ts:29

## Properties

### parse

• **parse**: (`input`: `string`) => `any`

#### Type declaration

▸ (`input`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

##### Returns

`any`

#### Defined in

packages/utils/lib/BJSON.d.ts:39

___

### serializers

• **serializers**: [`Serializer`](Powership.Serializer.md)<`any`\>[]

#### Defined in

packages/utils/lib/BJSON.d.ts:28

___

### stringify

• **stringify**: (`value`: `any`, `options?`: [`StringifyOptions`](../modules/Powership.md#stringifyoptions) & { `handler?`: (`utils`: [`StringifyOptions`](../modules/Powership.md#stringifyoptions) & { `self`: [`BJSONConstructor`](Powership.BJSONConstructor.md) ; `serializer?`: [`Serializer`](Powership.Serializer.md)<`any`\> ; `value`: `any`  }) => `undefined` \| `string`  }) => `string`

#### Type declaration

▸ (`value`, `options?`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | [`StringifyOptions`](../modules/Powership.md#stringifyoptions) & { `handler?`: (`utils`: [`StringifyOptions`](../modules/Powership.md#stringifyoptions) & { `self`: [`BJSONConstructor`](Powership.BJSONConstructor.md) ; `serializer?`: [`Serializer`](Powership.Serializer.md)<`any`\> ; `value`: `any`  }) => `undefined` \| `string`  } |

##### Returns

`string`

#### Defined in

packages/utils/lib/BJSON.d.ts:32

___

### serializers

▪ `Static` **serializers**: [`Serializer`](Powership.Serializer.md)<`any`\>[]

#### Defined in

packages/utils/lib/BJSON.d.ts:27

## Methods

### getSerializer

▸ **getSerializer**(`value`): `undefined` \| [`Serializer`](Powership.Serializer.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`undefined` \| [`Serializer`](Powership.Serializer.md)<`any`\>

#### Defined in

packages/utils/lib/BJSON.d.ts:40

___

### tsName

▸ **tsName**(`value`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

packages/utils/lib/BJSON.d.ts:41
