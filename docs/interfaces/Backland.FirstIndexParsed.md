[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / FirstIndexParsed

# Interface: FirstIndexParsed

[Backland](../modules/Backland.md).FirstIndexParsed

## Hierarchy

- `Omit`<[`DocumentIndexItem`](../modules/Backland.md#documentindexitem), ``"relatedTo"``\>

- `ParsedIndexCursor`

  ↳ **`FirstIndexParsed`**

## Table of contents

### Properties

- [PK](Backland.FirstIndexParsed.md#pk)
- [SK](Backland.FirstIndexParsed.md#sk)
- [key](Backland.FirstIndexParsed.md#key)
- [name](Backland.FirstIndexParsed.md#name)
- [relatedTo](Backland.FirstIndexParsed.md#relatedto)
- [relations](Backland.FirstIndexParsed.md#relations)
- [value](Backland.FirstIndexParsed.md#value)

## Properties

### PK

• **PK**: [`IndexPKSKPartsListConfig`](Backland.IndexPKSKPartsListConfig.md)<`string`\>

#### Inherited from

Omit.PK

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:28

___

### SK

• `Optional` **SK**: [`IndexPKSKPartsListConfig`](Backland.IndexPKSKPartsListConfig.md)<`string`\>

#### Inherited from

Omit.SK

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:29

___

### key

• **key**: `string`

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:97

___

### name

• **name**: `string`

#### Inherited from

Omit.name

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:30

___

### relatedTo

• **relatedTo**: ``null`` \| `string`

#### Overrides

ParsedIndexCursor.relatedTo

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:99

___

### relations

• `Optional` **relations**: readonly [`DocumentIndexRelation`](../modules/Backland.md#documentindexrelation)[]

#### Inherited from

Omit.relations

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:32

___

### value

• **value**: `string`

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:98
