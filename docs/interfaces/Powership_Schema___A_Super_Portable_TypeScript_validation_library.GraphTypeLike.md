[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / GraphTypeLike

# Interface: GraphTypeLike

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).GraphTypeLike

## Table of contents

### Properties

- [\_\_isGraphType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md#__isgraphtype)
- [\_\_lazyGetter](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md#__lazygetter)
- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md#definition)
- [id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md#id)
- [optionalId](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md#optionalid)

### Methods

- [parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.GraphTypeLike.md#parse)

## Properties

### \_\_isGraphType

• **\_\_isGraphType**: ``true``

#### Defined in

[packages/schema/src/fields/IObjectLike.ts:12](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/IObjectLike.ts#L12)

___

### \_\_lazyGetter

• **\_\_lazyGetter**: [`LazyParseGraphTypePayload`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#lazyparsegraphtypepayload)

#### Defined in

[packages/schema/src/fields/IObjectLike.ts:13](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/IObjectLike.ts#L13)

___

### definition

• **definition**: `AnyRecord`

#### Defined in

[packages/schema/src/fields/IObjectLike.ts:14](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/IObjectLike.ts#L14)

___

### id

• `Readonly` **id**: `string`

#### Defined in

[packages/schema/src/fields/IObjectLike.ts:15](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/IObjectLike.ts#L15)

___

### optionalId

• `Readonly` **optionalId**: `undefined` \| `string`

#### Defined in

[packages/schema/src/fields/IObjectLike.ts:16](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/IObjectLike.ts#L16)

## Methods

### parse

▸ **parse**(`value`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | [`FieldParserConfig`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparserconfig) |

#### Returns

`any`

#### Defined in

[packages/schema/src/fields/IObjectLike.ts:17](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/IObjectLike.ts#L17)
