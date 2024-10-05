[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / Serializer

# Class: Serializer<Type\>

[Powership](../modules/Powership.md).Serializer

## Type parameters

| Name |
| :------ |
| `Type` |

## Table of contents

### Constructors

- [constructor](Powership.Serializer.md#constructor)

### Properties

- [blockEnd](Powership.Serializer.md#blockend)
- [blockStart](Powership.Serializer.md#blockstart)
- [formatter](Powership.Serializer.md#formatter)
- [name](Powership.Serializer.md#name)
- [paramSep](Powership.Serializer.md#paramsep)
- [sep](Powership.Serializer.md#sep)
- [SEP](Powership.Serializer.md#sep-1)

### Methods

- [parse](Powership.Serializer.md#parse)
- [stringify](Powership.Serializer.md#stringify)

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

packages/utils/out/BJSON.d.ts:20

## Properties

### blockEnd

• **blockEnd**: `string`

#### Defined in

packages/utils/out/BJSON.d.ts:17

___

### blockStart

• **blockStart**: `string`

#### Defined in

packages/utils/out/BJSON.d.ts:16

___

### formatter

• **formatter**: `Formatter`<`Type`\>

#### Defined in

packages/utils/out/BJSON.d.ts:19

___

### name

• **name**: `string`

#### Defined in

packages/utils/out/BJSON.d.ts:14

___

### paramSep

• **paramSep**: `string`

#### Defined in

packages/utils/out/BJSON.d.ts:18

___

### sep

• **sep**: `string`

#### Defined in

packages/utils/out/BJSON.d.ts:15

___

### SEP

▪ `Static` **SEP**: `string`

#### Defined in

packages/utils/out/BJSON.d.ts:13

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

packages/utils/out/BJSON.d.ts:22

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

packages/utils/out/BJSON.d.ts:21
