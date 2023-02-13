[Backland](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Backland.](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md) / FirstIndexParsed

# Interface: FirstIndexParsed

[Transporter - Base to connect any Database to Backland.](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md).FirstIndexParsed

## Hierarchy

- `Omit`<[`DocumentIndexItem`](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md#documentindexitem), ``"relatedTo"``\>

- `ParsedIndexCursor`

  ↳ **`FirstIndexParsed`**

## Table of contents

### Properties

- [PK](Transporter___Base_to_connect_any_Database_to_Backland_.FirstIndexParsed.md#pk)
- [SK](Transporter___Base_to_connect_any_Database_to_Backland_.FirstIndexParsed.md#sk)
- [key](Transporter___Base_to_connect_any_Database_to_Backland_.FirstIndexParsed.md#key)
- [name](Transporter___Base_to_connect_any_Database_to_Backland_.FirstIndexParsed.md#name)
- [relatedTo](Transporter___Base_to_connect_any_Database_to_Backland_.FirstIndexParsed.md#relatedto)
- [relations](Transporter___Base_to_connect_any_Database_to_Backland_.FirstIndexParsed.md#relations)
- [value](Transporter___Base_to_connect_any_Database_to_Backland_.FirstIndexParsed.md#value)

## Properties

### PK

• **PK**: [`IndexPKSKPartsListConfig`](Transporter___Base_to_connect_any_Database_to_Backland_.IndexPKSKPartsListConfig.md)<`string`\>

#### Inherited from

Omit.PK

#### Defined in

[packages/transporter/src/CollectionIndex.ts:48](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L48)

___

### SK

• `Optional` **SK**: [`IndexPKSKPartsListConfig`](Transporter___Base_to_connect_any_Database_to_Backland_.IndexPKSKPartsListConfig.md)<`string`\>

#### Inherited from

Omit.SK

#### Defined in

[packages/transporter/src/CollectionIndex.ts:49](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L49)

___

### key

• **key**: `string`

#### Defined in

[packages/transporter/src/CollectionIndex.ts:131](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L131)

___

### name

• **name**: `string`

#### Inherited from

Omit.name

#### Defined in

[packages/transporter/src/CollectionIndex.ts:50](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L50)

___

### relatedTo

• **relatedTo**: ``null`` \| `string`

#### Overrides

ParsedIndexCursor.relatedTo

#### Defined in

[packages/transporter/src/CollectionIndex.ts:133](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L133)

___

### relations

• `Optional` **relations**: readonly [`DocumentIndexRelation`](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md#documentindexrelation)[]

#### Inherited from

Omit.relations

#### Defined in

[packages/transporter/src/CollectionIndex.ts:52](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L52)

___

### value

• **value**: `string`

#### Defined in

[packages/transporter/src/CollectionIndex.ts:132](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionIndex.ts#L132)
