[Backland](../README.md) / [Modules](../modules.md) / [Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md) / FieldType

# Class: FieldType<Type, TypeName, Def, List, Optional, DefaultValue, Options\>

[Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md).FieldType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `TypeName` | extends [`FieldTypeName`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypename) |
| `Def` | extends [`FieldDefinitions`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fielddefinitions)[`TypeName`] |
| `List` | extends ``1`` \| ``0`` = ``0`` |
| `Optional` | extends ``1`` \| ``0`` = ``0`` |
| `DefaultValue` | extends `unknown` \| `undefined` = `undefined` |
| `Options` | extends [`FieldTypeOptions`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeoptions) = {} |

## Hierarchy

- **`FieldType`**

  ↳ [`AnyField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.AnyField.md)

  ↳ [`BooleanField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.BooleanField.md)

  ↳ [`CursorField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md)

  ↳ [`DateField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.DateField.md)

  ↳ [`EmailField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.EmailField.md)

  ↳ [`EnumField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.EnumField.md)

  ↳ [`FloatField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FloatField.md)

  ↳ [`IDField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.IDField.md)

  ↳ [`IntField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.IntField.md)

  ↳ [`LiteralField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md)

  ↳ [`MetaField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)

  ↳ [`NullField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.NullField.md)

  ↳ [`ObjectField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md)

  ↳ [`RecordField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.RecordField.md)

  ↳ [`StringField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.StringField.md)

  ↳ [`UlidField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.UlidField.md)

  ↳ [`UndefinedField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.UndefinedField.md)

  ↳ [`UnionField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md)

  ↳ [`UnknownField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.UnknownField.md)

  ↳ [`AliasField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md)

## Table of contents

### Properties

- [\_\_\_inferable](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#___inferable)
- [\_\_isFieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#__isfieldtype)
- [composer](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)
- [def](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#def)
- [defaultValue](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#defaultvalue)
- [description](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#description)
- [hidden](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#hidden)
- [id](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#id)
- [list](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#list)
- [name](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#name)
- [optional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#optional)
- [options](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#options)
- [parse](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)
- [type](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)
- [typeName](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#typename)

### Accessors

- [asFinalFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#asfinalfielddef)
- [definition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#definition)

### Methods

- [applyParser](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#applyparser)
- [clone](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#clone)
- [describe](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describe)
- [describeField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describefield)
- [is](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)
- [setDefaultValue](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)
- [toList](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)
- [toOptional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)
- [toRequired](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)
- [validate](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)
- [create](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: [`List`] extends [``1``] ? `Type`[] : `Type` extends `R` ? [`Optional`] extends [``1``] ? `undefined` \| `R` : `R` : `never`

#### Defined in

[packages/schema/src/fields/FieldType.ts:58](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L58)

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Defined in

[packages/schema/src/fields/FieldType.ts:284](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L284)

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, `Type`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:64](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L64)

___

### def

• `Readonly` **def**: `Def`

#### Defined in

[packages/schema/src/fields/FieldType.ts:56](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L56)

___

### defaultValue

• **defaultValue**: `DefaultValue`

#### Defined in

[packages/schema/src/fields/FieldType.ts:136](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L136)

___

### description

• `Optional` **description**: `string`

#### Defined in

[packages/schema/src/fields/FieldType.ts:137](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L137)

___

### hidden

• `Optional` **hidden**: `boolean`

#### Defined in

[packages/schema/src/fields/FieldType.ts:138](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L138)

___

### id

• `Optional` **id**: `string`

#### Defined in

[packages/schema/src/fields/FieldType.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L70)

___

### list

• **list**: [`List`] extends [``1``] ? ``true`` : ``false``

#### Defined in

[packages/schema/src/fields/FieldType.ts:135](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L135)

___

### name

• `Optional` **name**: `string`

#### Defined in

[packages/schema/src/fields/FieldType.ts:71](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L71)

___

### optional

• **optional**: [`Optional`] extends [``1``] ? ``true`` : ``false``

#### Defined in

[packages/schema/src/fields/FieldType.ts:134](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L134)

___

### options

• **options**: `Options`

#### Defined in

[packages/schema/src/fields/FieldType.ts:72](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L72)

___

### parse

• `Abstract` **parse**: [`FieldTypeParser`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:282](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L282)

___

### type

• **type**: `TypeName`

#### Defined in

[packages/schema/src/fields/FieldType.ts:54](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L54)

___

### typeName

• `Readonly` **typeName**: `TypeName`

#### Defined in

[packages/schema/src/fields/FieldType.ts:53](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L53)

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

[packages/schema/src/fields/FieldType.ts:262](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L262)

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

[packages/schema/src/fields/FieldType.ts:66](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L66)

## Methods

### applyParser

▸ **applyParser**<`Type`\>(`parser`): [`FieldTypeParser`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | `Object` |
| `parser.parse` | (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject)) => `Type` |
| `parser.preParse?` | (`input`: `any`) => `Type` |

#### Returns

[`FieldTypeParser`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:188](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L188)

___

### clone

▸ **clone**(): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:290](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L290)

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

[packages/schema/src/fields/FieldType.ts:140](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L140)

___

### describeField

▸ **describeField**(): `Object`

#### Returns

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

[packages/schema/src/fields/FieldType.ts:145](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L145)

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

[packages/schema/src/fields/FieldType.ts:130](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L130)

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:180](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L180)

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:169](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L169)

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:157](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L157)

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:163](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L163)

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

[packages/schema/src/fields/FieldType.ts:121](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L121)

___

### create

▸ `Static` **create**(`..._args`): [`TAnyFieldType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `any`[] |

#### Returns

[`TAnyFieldType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)

#### Defined in

[packages/schema/src/fields/FieldType.ts:286](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L286)
