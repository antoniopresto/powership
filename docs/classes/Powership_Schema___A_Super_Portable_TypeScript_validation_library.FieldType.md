[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / FieldType

# Class: FieldType<Type, TypeName, Def, List, Optional, DefaultValue, Options\>

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).FieldType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `TypeName` | extends [`FieldTypeName`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) |
| `Def` | extends [`FieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fielddefinitions)[`TypeName`] |
| `List` | extends ``1`` \| ``0`` = ``0`` |
| `Optional` | extends ``1`` \| ``0`` = ``0`` |
| `DefaultValue` | extends `unknown` \| `undefined` = `undefined` |
| `Options` | extends [`FieldTypeOptions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeoptions) = {} |

## Hierarchy

- **`FieldType`**

  ↳ [`AnyField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AnyField.md)

  ↳ [`BooleanField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.BooleanField.md)

  ↳ [`CursorField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md)

  ↳ [`DateField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.DateField.md)

  ↳ [`EmailField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.EmailField.md)

  ↳ [`EnumField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.EnumField.md)

  ↳ [`FloatField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FloatField.md)

  ↳ [`IDField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.IDField.md)

  ↳ [`IntField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.IntField.md)

  ↳ [`LiteralField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md)

  ↳ [`MetaField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)

  ↳ [`NullField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.NullField.md)

  ↳ [`ObjectField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md)

  ↳ [`RecordField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.RecordField.md)

  ↳ [`StringField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.StringField.md)

  ↳ [`UlidField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UlidField.md)

  ↳ [`UndefinedField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UndefinedField.md)

  ↳ [`UnionField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md)

  ↳ [`UnknownField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnknownField.md)

  ↳ [`AliasField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md)

## Table of contents

### Properties

- [$](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#$)
- [\_\_\_inferable](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#___inferable)
- [\_\_isFieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#__isfieldtype)
- [composer](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)
- [def](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#def)
- [defaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#defaultvalue)
- [description](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#description)
- [hidden](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#hidden)
- [id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#id)
- [list](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#list)
- [name](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#name)
- [optional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#optional)
- [options](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#options)
- [parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)
- [type](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)
- [typeName](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#typename)

### Accessors

- [asFinalFieldDef](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#asfinalfielddef)
- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#definition)

### Methods

- [applyParser](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#applyparser)
- [clone](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#clone)
- [describe](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describe)
- [describeField](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describefield)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)
- [setDefaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)
- [toList](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)
- [toOptional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)
- [toRequired](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)
- [validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)
- [create](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.CustomFieldConfig.md)

#### Defined in

packages/schema/src/fields/FieldType.ts:140

___

### \_\_\_inferable

• **\_\_\_inferable**: [`List`] extends [``1``] ? `Type`[] : `Type` extends `R` ? [`Optional`] extends [``1``] ? `undefined` \| `R` : `R` : `never`

#### Defined in

packages/schema/src/fields/FieldType.ts:59

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Defined in

packages/schema/src/fields/FieldType.ts:288

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, `Type`\>

#### Defined in

packages/schema/src/fields/FieldType.ts:65

___

### def

• `Readonly` **def**: `Def`

#### Defined in

packages/schema/src/fields/FieldType.ts:57

___

### defaultValue

• **defaultValue**: `DefaultValue`

#### Defined in

packages/schema/src/fields/FieldType.ts:137

___

### description

• `Optional` **description**: `string`

#### Defined in

packages/schema/src/fields/FieldType.ts:138

___

### hidden

• `Optional` **hidden**: `boolean`

#### Defined in

packages/schema/src/fields/FieldType.ts:139

___

### id

• `Optional` **id**: `string`

#### Defined in

packages/schema/src/fields/FieldType.ts:71

___

### list

• **list**: [`List`] extends [``1``] ? ``true`` : ``false``

#### Defined in

packages/schema/src/fields/FieldType.ts:136

___

### name

• `Optional` **name**: `string`

#### Defined in

packages/schema/src/fields/FieldType.ts:72

___

### optional

• **optional**: [`Optional`] extends [``1``] ? ``true`` : ``false``

#### Defined in

packages/schema/src/fields/FieldType.ts:135

___

### options

• **options**: `Options`

#### Defined in

packages/schema/src/fields/FieldType.ts:73

___

### parse

• `Abstract` **parse**: [`FieldTypeParser`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Defined in

packages/schema/src/fields/FieldType.ts:286

___

### type

• **type**: `TypeName`

#### Defined in

packages/schema/src/fields/FieldType.ts:55

___

### typeName

• `Readonly` **typeName**: `TypeName`

#### Defined in

packages/schema/src/fields/FieldType.ts:54

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

packages/schema/src/fields/FieldType.ts:265

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

packages/schema/src/fields/FieldType.ts:67

## Methods

### applyParser

▸ **applyParser**<`Type`\>(`parser`): [`FieldTypeParser`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | `Object` |
| `parser.parse` | (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject)) => `Type` |
| `parser.preParse?` | (`input`: `any`) => `Type` |

#### Returns

[`FieldTypeParser`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Defined in

packages/schema/src/fields/FieldType.ts:191

___

### clone

▸ **clone**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/src/fields/FieldType.ts:294

___

### describe

▸ **describe**(`description`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`this`

#### Defined in

packages/schema/src/fields/FieldType.ts:142

___

### describeField

▸ **describeField**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$?` | [`CustomFieldConfig`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.CustomFieldConfig.md) |
| `def` | `Def` |
| `defaultValue` | `DefaultValue` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | [`List`] extends [``1``] ? ``true`` : ``false`` |
| `optional` | [`Optional`] extends [``1``] ? ``true`` : ``false`` |
| `type` | `Type` |

#### Defined in

packages/schema/src/fields/FieldType.ts:147

___

### is

▸ **is**(`input`): input is Type

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Type

#### Defined in

packages/schema/src/fields/FieldType.ts:131

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Defined in

packages/schema/src/fields/FieldType.ts:183

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/src/fields/FieldType.ts:172

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/src/fields/FieldType.ts:160

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/src/fields/FieldType.ts:166

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

packages/schema/src/fields/FieldType.ts:122

___

### create

▸ `Static` **create**(`..._args`): [`TAnyFieldType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `any`[] |

#### Returns

[`TAnyFieldType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)

#### Defined in

packages/schema/src/fields/FieldType.ts:290
