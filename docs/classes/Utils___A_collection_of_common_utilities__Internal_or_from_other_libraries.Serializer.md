[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / Serializer

# Class: Serializer<Type\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).Serializer

## Type parameters

| Name |
| :------ |
| `Type` |

## Table of contents

### Constructors

- [constructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md#constructor)

### Properties

- [blockEnd](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md#blockend)
- [blockStart](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md#blockstart)
- [formatter](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md#formatter)
- [name](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md#name)
- [paramSep](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md#paramsep)
- [sep](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md#sep)
- [SEP](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md#sep-1)

### Methods

- [parse](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md#parse)
- [stringify](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Serializer.md#stringify)

## Constructors

### constructor

• **new Serializer**<`Type`\>(`formatter`)

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatter` | `Formatter`<`Type`\> |

#### Defined in

packages/utils/src/BJSON.ts:32

## Properties

### blockEnd

• **blockEnd**: `string`

#### Defined in

packages/utils/src/BJSON.ts:28

___

### blockStart

• **blockStart**: `string`

#### Defined in

packages/utils/src/BJSON.ts:27

___

### formatter

• **formatter**: `Formatter`<`Type`\>

#### Defined in

packages/utils/src/BJSON.ts:30

___

### name

• **name**: `string`

#### Defined in

packages/utils/src/BJSON.ts:25

___

### paramSep

• **paramSep**: `string`

#### Defined in

packages/utils/src/BJSON.ts:29

___

### sep

• **sep**: `string`

#### Defined in

packages/utils/src/BJSON.ts:26

___

### SEP

▪ `Static` **SEP**: `string` = `SEP`

#### Defined in

packages/utils/src/BJSON.ts:24

## Methods

### parse

▸ **parse**(`value`): `undefined` \| { `value`: `Type`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`undefined` \| { `value`: `Type`  }

#### Defined in

packages/utils/src/BJSON.ts:57

___

### stringify

▸ **stringify**(`value`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| `string`

#### Defined in

packages/utils/src/BJSON.ts:41
