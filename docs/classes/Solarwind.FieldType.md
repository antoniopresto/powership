[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / FieldType

# Class: FieldType<Type, TypeName, Def, List, Optional, DefaultValue, Options\>

[Solarwind](../modules/Solarwind.md).FieldType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `TypeName` | extends [`FieldTypeName`](../modules/Solarwind.md#fieldtypename) |
| `Def` | extends [`FieldDefinitions`](../modules/Solarwind.md#fielddefinitions)[`TypeName`] |
| `List` | extends ``1`` \| ``0`` = ``0`` |
| `Optional` | extends ``1`` \| ``0`` = ``0`` |
| `DefaultValue` | extends `unknown` \| `undefined` = `undefined` |
| `Options` | extends [`FieldTypeOptions`](../modules/Solarwind.md#fieldtypeoptions) = {} |

## Hierarchy

- **`FieldType`**

  ↳ [`AnyField`](Solarwind.AnyField.md)

  ↳ [`BooleanField`](Solarwind.BooleanField.md)

  ↳ [`CursorField`](Solarwind.CursorField.md)

  ↳ [`DateField`](Solarwind.DateField.md)

  ↳ [`EmailField`](Solarwind.EmailField.md)

  ↳ [`EnumField`](Solarwind.EnumField.md)

  ↳ [`FloatField`](Solarwind.FloatField.md)

  ↳ [`IDField`](Solarwind.IDField.md)

  ↳ [`IntField`](Solarwind.IntField.md)

  ↳ [`LiteralField`](Solarwind.LiteralField.md)

  ↳ [`MetaField`](Solarwind.MetaField.md)

  ↳ [`NullField`](Solarwind.NullField.md)

  ↳ [`ObjectField`](Solarwind.ObjectField.md)

  ↳ [`RecordField`](Solarwind.RecordField.md)

  ↳ [`StringField`](Solarwind.StringField.md)

  ↳ [`UlidField`](Solarwind.UlidField.md)

  ↳ [`UndefinedField`](Solarwind.UndefinedField.md)

  ↳ [`UnionField`](Solarwind.UnionField.md)

  ↳ [`UnknownField`](Solarwind.UnknownField.md)

  ↳ [`AliasField`](Solarwind.AliasField.md)

## Table of contents

### Properties

- [\_\_\_inferable](Solarwind.FieldType.md#___inferable)
- [\_\_isFieldType](Solarwind.FieldType.md#__isfieldtype)
- [applyParser](Solarwind.FieldType.md#applyparser)
- [clone](Solarwind.FieldType.md#clone)
- [composer](Solarwind.FieldType.md#composer)
- [def](Solarwind.FieldType.md#def)
- [defaultValue](Solarwind.FieldType.md#defaultvalue)
- [describe](Solarwind.FieldType.md#describe)
- [describeField](Solarwind.FieldType.md#describefield)
- [description](Solarwind.FieldType.md#description)
- [hidden](Solarwind.FieldType.md#hidden)
- [id](Solarwind.FieldType.md#id)
- [list](Solarwind.FieldType.md#list)
- [name](Solarwind.FieldType.md#name)
- [optional](Solarwind.FieldType.md#optional)
- [options](Solarwind.FieldType.md#options)
- [parse](Solarwind.FieldType.md#parse)
- [type](Solarwind.FieldType.md#type)
- [typeName](Solarwind.FieldType.md#typename)

### Accessors

- [asFinalFieldDef](Solarwind.FieldType.md#asfinalfielddef)
- [definition](Solarwind.FieldType.md#definition)

### Methods

- [is](Solarwind.FieldType.md#is)
- [setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)
- [toList](Solarwind.FieldType.md#tolist)
- [toOptional](Solarwind.FieldType.md#tooptional)
- [toRequired](Solarwind.FieldType.md#torequired)
- [validate](Solarwind.FieldType.md#validate)
- [create](Solarwind.FieldType.md#create)

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

• **applyParser**: <Type_1\>(`parser`: { `parse`: (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Solarwind.md#fieldparseroptionsobject)) => `Type_1` ; `preParse?`: (`input`: `any`) => `Type_1`  }) => [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`Type_1`\>

#### Type declaration

▸ <`Type_1`\>(`parser`): [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`Type_1`\>

##### Type parameters

| Name |
| :------ |
| `Type_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | `Object` |
| `parser.parse` | (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Solarwind.md#fieldparseroptionsobject)) => `Type_1` |
| `parser.preParse?` | (`input`: `any`) => `Type_1` |

##### Returns

[`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`Type_1`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

___

### clone

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, `Type`\>

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

• **describe**: (`description`: `string`) => [`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Type declaration

▸ (`description`): [`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

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

• `Abstract` **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`Type`\>

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

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Solarwind.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Solarwind.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:59

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Solarwind.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Solarwind.md#allfinalfielddefinitions)[`TypeName`]

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

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

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

▸ `Static` **create**(`..._args`): [`TAnyFieldType`](../modules/Solarwind.md#tanyfieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `any`[] |

#### Returns

[`TAnyFieldType`](../modules/Solarwind.md#tanyfieldtype)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:62
