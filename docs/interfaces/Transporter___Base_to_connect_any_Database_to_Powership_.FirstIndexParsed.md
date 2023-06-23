[Powership](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md) / FirstIndexParsed

# Interface: FirstIndexParsed

[Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md).FirstIndexParsed

## Hierarchy

- `Omit`<[`DocumentIndexItem`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexitem), ``"relatedTo"``\>

- `ParsedIndexCursor`

  ↳ **`FirstIndexParsed`**

## Table of contents

### Properties

- [PK](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#pk)
- [PKFieldName](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#pkfieldname)
- [PKPart](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#pkpart)
- [PKPartOpen](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#pkpartopen)
- [SK](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#sk)
- [SKFieldName](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#skfieldname)
- [SKPart](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#skpart)
- [cursor](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#cursor)
- [entity](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#entity)
- [filter](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#filter)
- [key](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#key)
- [name](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#name)
- [parentPrefix](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#parentprefix)
- [relatedTo](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#relatedto)
- [relations](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#relations)
- [value](Transporter___Base_to_connect_any_Database_to_Powership_.FirstIndexParsed.md#value)

## Properties

### PK

• **PK**: [`IndexPKSKPartsListConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.IndexPKSKPartsListConfig.md)<`string`\>

#### Inherited from

Omit.PK

#### Defined in

packages/transporter/src/CollectionIndex.ts:48

___

### PKFieldName

• **PKFieldName**: `string`

#### Inherited from

ParsedIndexCursor.PKFieldName

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:21

___

### PKPart

• **PKPart**: `string`

#### Inherited from

ParsedIndexCursor.PKPart

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:20

___

### PKPartOpen

• **PKPartOpen**: `string`

#### Inherited from

ParsedIndexCursor.PKPartOpen

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:19

___

### SK

• `Optional` **SK**: [`IndexPKSKPartsListConfig`](Transporter___Base_to_connect_any_Database_to_Powership_.IndexPKSKPartsListConfig.md)<`string`\>

#### Inherited from

Omit.SK

#### Defined in

packages/transporter/src/CollectionIndex.ts:49

___

### SKFieldName

• **SKFieldName**: `string`

#### Inherited from

ParsedIndexCursor.SKFieldName

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:22

___

### SKPart

• **SKPart**: `undefined` \| ``null`` \| `string`

#### Inherited from

ParsedIndexCursor.SKPart

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:24

___

### cursor

• **cursor**: `string`

#### Inherited from

ParsedIndexCursor.cursor

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:18

___

### entity

• **entity**: `string`

#### Inherited from

ParsedIndexCursor.entity

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:14

___

### filter

• **filter**: `Record`<`string`, `any`\>

#### Inherited from

ParsedIndexCursor.filter

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:23

___

### key

• **key**: `string`

#### Defined in

packages/transporter/src/CollectionIndex.ts:131

___

### name

• **name**: `string`

#### Inherited from

Omit.name

#### Defined in

packages/transporter/src/CollectionIndex.ts:50

___

### parentPrefix

• **parentPrefix**: ``null`` \| `string`

#### Inherited from

ParsedIndexCursor.parentPrefix

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:17

___

### relatedTo

• **relatedTo**: ``null`` \| `string`

#### Overrides

ParsedIndexCursor.relatedTo

#### Defined in

packages/transporter/src/CollectionIndex.ts:133

___

### relations

• `Optional` **relations**: readonly [`DocumentIndexRelation`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#documentindexrelation)[]

#### Inherited from

Omit.relations

#### Defined in

packages/transporter/src/CollectionIndex.ts:52

___

### value

• **value**: `string`

#### Defined in

packages/transporter/src/CollectionIndex.ts:132
