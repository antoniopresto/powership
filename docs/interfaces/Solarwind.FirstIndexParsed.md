[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / FirstIndexParsed

# Interface: FirstIndexParsed

[Solarwind](../modules/Solarwind.md).FirstIndexParsed

## Hierarchy

- `Omit`<[`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem), ``"relatedTo"``\>

- `ParsedIndexCursor`

  ↳ **`FirstIndexParsed`**

## Table of contents

### Properties

- [PK](Solarwind.FirstIndexParsed.md#pk)
- [SK](Solarwind.FirstIndexParsed.md#sk)
- [key](Solarwind.FirstIndexParsed.md#key)
- [name](Solarwind.FirstIndexParsed.md#name)
- [relatedTo](Solarwind.FirstIndexParsed.md#relatedto)
- [relations](Solarwind.FirstIndexParsed.md#relations)
- [value](Solarwind.FirstIndexParsed.md#value)

## Properties

### PK

• **PK**: [`IndexPKSKPartsListConfig`](Solarwind.IndexPKSKPartsListConfig.md)<`string`\>

#### Inherited from

Omit.PK

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:28

___

### SK

• `Optional` **SK**: [`IndexPKSKPartsListConfig`](Solarwind.IndexPKSKPartsListConfig.md)<`string`\>

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

• `Optional` **relations**: readonly [`DocumentIndexRelation`](../modules/Solarwind.md#documentindexrelation)[]

#### Inherited from

Omit.relations

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:32

___

### value

• **value**: `string`

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:98
