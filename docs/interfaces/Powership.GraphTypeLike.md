[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / GraphTypeLike

# Interface: GraphTypeLike

[Powership](../modules/Powership.md).GraphTypeLike

## Table of contents

### Properties

- [\_\_isGraphType](Powership.GraphTypeLike.md#__isgraphtype)
- [\_\_lazyGetter](Powership.GraphTypeLike.md#__lazygetter)
- [definition](Powership.GraphTypeLike.md#definition)
- [id](Powership.GraphTypeLike.md#id)
- [optionalId](Powership.GraphTypeLike.md#optionalid)

### Methods

- [parse](Powership.GraphTypeLike.md#parse)

## Properties

### \_\_isGraphType

• **\_\_isGraphType**: ``true``

#### Defined in

packages/schema/out/fields/IObjectLike.d.ts:11

___

### \_\_lazyGetter

• **\_\_lazyGetter**: [`LazyParseGraphTypePayload`](../modules/Powership.md#lazyparsegraphtypepayload)

#### Defined in

packages/schema/out/fields/IObjectLike.d.ts:12

___

### definition

• **definition**: [`AnyRecord`](../modules/Powership.TU.md#anyrecord)

#### Defined in

packages/schema/out/fields/IObjectLike.d.ts:13

___

### id

• `Readonly` **id**: `string`

#### Defined in

packages/schema/out/fields/IObjectLike.d.ts:14

___

### optionalId

• `Readonly` **optionalId**: `undefined` \| `string`

#### Defined in

packages/schema/out/fields/IObjectLike.d.ts:15

## Methods

### parse

▸ **parse**(`value`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | [`FieldParserConfig`](../modules/Powership.md#fieldparserconfig) |

#### Returns

`any`

#### Defined in

packages/schema/out/fields/IObjectLike.d.ts:16
