[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / FirstIndexParsed

# Interface: FirstIndexParsed

[Powership](../modules/Powership.md).FirstIndexParsed

## Hierarchy

- `Omit`<[`DocumentIndexItem`](../modules/Powership.md#documentindexitem), ``"relatedTo"``\>

- [`ParsedIndexCursor`](Powership.ParsedIndexCursor.md)

  ↳ **`FirstIndexParsed`**

## Table of contents

### Properties

- [PK](Powership.FirstIndexParsed.md#pk)
- [PKFieldName](Powership.FirstIndexParsed.md#pkfieldname)
- [PKPart](Powership.FirstIndexParsed.md#pkpart)
- [PKPartOpen](Powership.FirstIndexParsed.md#pkpartopen)
- [SK](Powership.FirstIndexParsed.md#sk)
- [SKFieldName](Powership.FirstIndexParsed.md#skfieldname)
- [SKPart](Powership.FirstIndexParsed.md#skpart)
- [cursor](Powership.FirstIndexParsed.md#cursor)
- [entity](Powership.FirstIndexParsed.md#entity)
- [filter](Powership.FirstIndexParsed.md#filter)
- [key](Powership.FirstIndexParsed.md#key)
- [name](Powership.FirstIndexParsed.md#name)
- [parentPrefix](Powership.FirstIndexParsed.md#parentprefix)
- [relatedTo](Powership.FirstIndexParsed.md#relatedto)
- [relations](Powership.FirstIndexParsed.md#relations)
- [value](Powership.FirstIndexParsed.md#value)

## Properties

### PK

• **PK**: [`IndexPKSKPartsListConfig`](Powership.IndexPKSKPartsListConfig.md)<`string`\>

#### Inherited from

Omit.PK

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:28

___

### PKFieldName

• **PKFieldName**: `string`

#### Inherited from

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[PKFieldName](Powership.ParsedIndexCursor.md#pkfieldname)

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:21

___

### PKPart

• **PKPart**: `string`

#### Inherited from

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[PKPart](Powership.ParsedIndexCursor.md#pkpart)

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:20

___

### PKPartOpen

• **PKPartOpen**: `string`

#### Inherited from

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[PKPartOpen](Powership.ParsedIndexCursor.md#pkpartopen)

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:19

___

### SK

• `Optional` **SK**: [`IndexPKSKPartsListConfig`](Powership.IndexPKSKPartsListConfig.md)<`string`\>

#### Inherited from

Omit.SK

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:29

___

### SKFieldName

• **SKFieldName**: `string`

#### Inherited from

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[SKFieldName](Powership.ParsedIndexCursor.md#skfieldname)

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:22

___

### SKPart

• **SKPart**: `undefined` \| ``null`` \| `string`

#### Inherited from

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[SKPart](Powership.ParsedIndexCursor.md#skpart)

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:24

___

### cursor

• **cursor**: `string`

#### Inherited from

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[cursor](Powership.ParsedIndexCursor.md#cursor)

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:18

___

### entity

• **entity**: `string`

#### Inherited from

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[entity](Powership.ParsedIndexCursor.md#entity)

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:14

___

### filter

• **filter**: `Record`<`string`, `any`\>

#### Inherited from

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[filter](Powership.ParsedIndexCursor.md#filter)

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:23

___

### key

• **key**: `string`

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:97

___

### name

• **name**: `string`

#### Inherited from

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[name](Powership.ParsedIndexCursor.md#name)

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:30

___

### parentPrefix

• **parentPrefix**: ``null`` \| `string`

#### Inherited from

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[parentPrefix](Powership.ParsedIndexCursor.md#parentprefix)

#### Defined in

packages/utils/lib/IndexCursor/joinIndexCursor.d.ts:17

___

### relatedTo

• **relatedTo**: ``null`` \| `string`

#### Overrides

[ParsedIndexCursor](Powership.ParsedIndexCursor.md).[relatedTo](Powership.ParsedIndexCursor.md#relatedto)

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:99

___

### relations

• `Optional` **relations**: readonly [`DocumentIndexRelation`](../modules/Powership.md#documentindexrelation)[]

#### Inherited from

Omit.relations

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:32

___

### value

• **value**: `string`

#### Defined in

packages/transporter/lib/CollectionIndex.d.ts:98
