[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / FieldType

# Class: FieldType<Type, TypeName, Def, List, Optional, DefaultValue, Options\>

[Backland](../modules/Backland.md).FieldType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `TypeName` | extends [`FieldTypeName`](../modules/Backland.md#fieldtypename) |
| `Def` | extends [`FieldDefinitions`](../modules/Backland.md#fielddefinitions)[`TypeName`] |
| `List` | extends ``1`` \| ``0`` = ``0`` |
| `Optional` | extends ``1`` \| ``0`` = ``0`` |
| `DefaultValue` | extends `unknown` \| `undefined` = `undefined` |
| `Options` | extends [`FieldTypeOptions`](../modules/Backland.md#fieldtypeoptions) = {} |

## Hierarchy

- **`FieldType`**

  ↳ [`AnyField`](Backland.AnyField.md)

  ↳ [`BooleanField`](Backland.BooleanField.md)

  ↳ [`CursorField`](Backland.CursorField.md)

  ↳ [`DateField`](Backland.DateField.md)

  ↳ [`EmailField`](Backland.EmailField.md)

  ↳ [`EnumField`](Backland.EnumField.md)

  ↳ [`FloatField`](Backland.FloatField.md)

  ↳ [`IDField`](Backland.IDField.md)

  ↳ [`IntField`](Backland.IntField.md)

  ↳ [`LiteralField`](Backland.LiteralField.md)

  ↳ [`MetaField`](Backland.MetaField.md)

  ↳ [`NullField`](Backland.NullField.md)

  ↳ [`ObjectField`](Backland.ObjectField.md)

  ↳ [`RecordField`](Backland.RecordField.md)

  ↳ [`StringField`](Backland.StringField.md)

  ↳ [`UlidField`](Backland.UlidField.md)

  ↳ [`UndefinedField`](Backland.UndefinedField.md)

  ↳ [`UnionField`](Backland.UnionField.md)

  ↳ [`UnknownField`](Backland.UnknownField.md)

  ↳ [`AliasField`](Backland.AliasField.md)

## Table of contents

### Properties

- [\_\_\_inferable](Backland.FieldType.md#___inferable)
- [\_\_isFieldType](Backland.FieldType.md#__isfieldtype)
- [applyParser](Backland.FieldType.md#applyparser)
- [clone](Backland.FieldType.md#clone)
- [composer](Backland.FieldType.md#composer)
- [def](Backland.FieldType.md#def)
- [defaultValue](Backland.FieldType.md#defaultvalue)
- [describe](Backland.FieldType.md#describe)
- [describeField](Backland.FieldType.md#describefield)
- [description](Backland.FieldType.md#description)
- [hidden](Backland.FieldType.md#hidden)
- [id](Backland.FieldType.md#id)
- [list](Backland.FieldType.md#list)
- [name](Backland.FieldType.md#name)
- [optional](Backland.FieldType.md#optional)
- [options](Backland.FieldType.md#options)
- [parse](Backland.FieldType.md#parse)
- [type](Backland.FieldType.md#type)
- [typeName](Backland.FieldType.md#typename)

### Accessors

- [asFinalFieldDef](Backland.FieldType.md#asfinalfielddef)
- [definition](Backland.FieldType.md#definition)

### Methods

- [is](Backland.FieldType.md#is)
- [setDefaultValue](Backland.FieldType.md#setdefaultvalue)
- [toList](Backland.FieldType.md#tolist)
- [toOptional](Backland.FieldType.md#tooptional)
- [toRequired](Backland.FieldType.md#torequired)
- [validate](Backland.FieldType.md#validate)
- [create](Backland.FieldType.md#create)

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: [`List`] extends [``1``] ? `Type`[] : `Type` extends `R` ? [`Optional`] extends [``1``] ? `undefined` \| `R` : `R` : `never`

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:22

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:61

___

### applyParser

• **applyParser**: <Type_1\>(`parser`: { `parse`: (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Backland.md#fieldparseroptionsobject)) => `Type_1` ; `preParse?`: (`input`: `any`) => `Type_1`  }) => [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<`Type_1`\>

#### Type declaration

▸ <`Type_1`\>(`parser`): [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<`Type_1`\>

##### Type parameters

| Name |
| :------ |
| `Type_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | `Object` |
| `parser.parse` | (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Backland.md#fieldparseroptionsobject)) => `Type_1` |
| `parser.preParse?` | (`input`: `any`) => `Type_1` |

##### Returns

[`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<`Type_1`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

___

### clone

• **clone**: () => [`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Type declaration

▸ (): [`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

##### Returns

[`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland.md#fieldcomposer)<`Record`<`string`, `any`\>, `Type`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `Def`

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:21

___

### defaultValue

• **defaultValue**: `DefaultValue`

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:38

___

### describe

• **describe**: (`description`: `string`) => [`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Type declaration

▸ (`description`): [`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `Def` ; `defaultValue`: `DefaultValue` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: [`List`] extends [``1``] ? ``true`` : ``false`` ; `optional`: [`Optional`] extends [``1``] ? ``true`` : ``false`` ; `type`: `Type`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `Def` |
| `defaultValue` | `DefaultValue` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | [`List`] extends [``1``] ? ``true`` : ``false`` |
| `optional` | [`Optional`] extends [``1``] ? ``true`` : ``false`` |
| `type` | `Type` |

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:42

___

### description

• `Optional` **description**: `string`

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:39

___

### hidden

• `Optional` **hidden**: `boolean`

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:40

___

### id

• `Optional` **id**: `string`

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:25

___

### list

• **list**: [`List`] extends [``1``] ? ``true`` : ``false``

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:37

___

### name

• `Optional` **name**: `string`

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:26

___

### optional

• **optional**: [`Optional`] extends [``1``] ? ``true`` : ``false``

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:36

___

### options

• **options**: `Options`

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:27

___

### parse

• `Abstract` **parse**: [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<`Type`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:60

___

### type

• **type**: `TypeName`

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: `TypeName`

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Backland.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Backland.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:59

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Backland.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Backland.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:24

## Methods

### is

▸ **is**(`input`): input is Type

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Type

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

___

### validate

▸ **validate**(`input`): input is Type

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Type

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34

___

### create

▸ `Static` **create**(`..._args`): [`TAnyFieldType`](../modules/Backland.md#tanyfieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `any`[] |

#### Returns

[`TAnyFieldType`](../modules/Backland.md#tanyfieldtype)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:62
