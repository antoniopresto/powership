[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / BJSONConstructor

# Class: BJSONConstructor

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).BJSONConstructor

## Table of contents

### Constructors

- [constructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.BJSONConstructor.md#constructor)

### Properties

- [serializers](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.BJSONConstructor.md#serializers)
- [serializers](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.BJSONConstructor.md#serializers-1)

### Methods

- [getSerializer](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.BJSONConstructor.md#getserializer)
- [parse](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.BJSONConstructor.md#parse)
- [stringify](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.BJSONConstructor.md#stringify)
- [tsName](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.BJSONConstructor.md#tsname)

## Constructors

### constructor

• **new BJSONConstructor**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.extraSerializers?` | [`Serializer`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md)<`any`\>[] |

#### Defined in

packages/utils/src/BJSON.ts:176

## Properties

### serializers

• **serializers**: [`Serializer`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md)<`any`\>[] = `[]`

#### Defined in

packages/utils/src/BJSON.ts:174

___

### serializers

▪ `Static` **serializers**: [`Serializer`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md)<`any`\>[]

#### Defined in

packages/utils/src/BJSON.ts:86

## Methods

### getSerializer

▸ **getSerializer**(`value`): `undefined` \| [`Serializer`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`undefined` \| [`Serializer`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md)<`any`\>

#### Defined in

packages/utils/src/BJSON.ts:240

___

### parse

▸ **parse**(`input`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`any`

#### Defined in

packages/utils/src/BJSON.ts:222

___

### stringify

▸ **stringify**(`value`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options` | [`StringifyOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringifyoptions) & { `handler?`: (`utils`: [`StringifyOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#stringifyoptions) & { `self`: [`BJSONConstructor`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.BJSONConstructor.md) ; `serializer?`: [`Serializer`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md)<`any`\> ; `value`: `any`  }) => `undefined` \| `string`  } |

#### Returns

`string`

#### Defined in

packages/utils/src/BJSON.ts:187

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

packages/utils/src/BJSON.ts:246
