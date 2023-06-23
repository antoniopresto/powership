[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / ObjectField

# Class: ObjectField<DefinitionInput\>

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).ObjectField

## Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends [`ObjectDefinitionInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectdefinitioninput) |

## Hierarchy

- [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`\>

  ↳ **`ObjectField`**

## Table of contents

### Constructors

- [constructor](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#constructor)

### Properties

- [$](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#$)
- [\_\_\_inferable](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#___inferable)
- [\_\_isFieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#__isfieldtype)
- [composer](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#composer)
- [def](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#def)
- [defaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#defaultvalue)
- [description](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#description)
- [hidden](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#hidden)
- [id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#id)
- [list](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#list)
- [name](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#name)
- [optional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#optional)
- [options](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#options)
- [parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#parse)
- [type](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#type)
- [typeName](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#typename)
- [utils](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#utils)

### Accessors

- [asFinalFieldDef](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#asfinalfielddef)
- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#definition)

### Methods

- [applyParser](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#applyparser)
- [clone](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#clone)
- [describe](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#describe)
- [describeField](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#describefield)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#is)
- [setDefaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#setdefaultvalue)
- [toList](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#tolist)
- [toOptional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#tooptional)
- [toRequired](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#torequired)
- [validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#validate)
- [create](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#create)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md#is-1)

## Constructors

### constructor

• **new ObjectField**<`DefinitionInput`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends [`ObjectDefinitionInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `DefinitionInput` |

#### Overrides

FieldType&lt;unknown, &#x27;object&#x27;, DefinitionInput\&gt;.constructor

#### Defined in

packages/schema/src/fields/ObjectField.ts:27

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[$](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#$)

#### Defined in

packages/schema/src/fields/FieldType.ts:140

___

### \_\_\_inferable

• **\_\_\_inferable**: `unknown`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[___inferable](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#___inferable)

#### Defined in

packages/schema/src/fields/FieldType.ts:59

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[__isFieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#__isfieldtype)

#### Defined in

packages/schema/src/fields/FieldType.ts:288

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, `unknown`\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[composer](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)

#### Defined in

packages/schema/src/fields/FieldType.ts:65

___

### def

• `Readonly` **def**: `DefinitionInput`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[def](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#def)

#### Defined in

packages/schema/src/fields/FieldType.ts:57

___

### defaultValue

• **defaultValue**: `undefined`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[defaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#defaultvalue)

#### Defined in

packages/schema/src/fields/FieldType.ts:137

___

### description

• `Optional` **description**: `string`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[description](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#description)

#### Defined in

packages/schema/src/fields/FieldType.ts:138

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[hidden](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#hidden)

#### Defined in

packages/schema/src/fields/FieldType.ts:139

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#id)

#### Defined in

packages/schema/src/fields/FieldType.ts:71

___

### list

• **list**: ``false``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[list](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#list)

#### Defined in

packages/schema/src/fields/FieldType.ts:136

___

### name

• `Optional` **name**: `string`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[name](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#name)

#### Defined in

packages/schema/src/fields/FieldType.ts:72

___

### optional

• **optional**: ``false``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[optional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#optional)

#### Defined in

packages/schema/src/fields/FieldType.ts:135

___

### options

• **options**: `Object`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[options](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#options)

#### Defined in

packages/schema/src/fields/FieldType.ts:73

___

### parse

• **parse**: [`FieldTypeParser`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`unknown`\>

#### Overrides

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)

#### Defined in

packages/schema/src/fields/ObjectField.ts:17

___

### type

• **type**: ``"object"``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[type](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)

#### Defined in

packages/schema/src/fields/FieldType.ts:55

___

### typeName

• `Readonly` **typeName**: ``"object"``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[typeName](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#typename)

#### Defined in

packages/schema/src/fields/FieldType.ts:54

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Defined in

packages/schema/src/fields/ObjectField.ts:19

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.asFinalFieldDef

#### Defined in

packages/schema/src/fields/FieldType.ts:265

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.definition

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

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[applyParser](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#applyparser)

#### Defined in

packages/schema/src/fields/FieldType.ts:191

___

### clone

▸ **clone**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[clone](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#clone)

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

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[describe](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describe)

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

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[describeField](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describefield)

#### Defined in

packages/schema/src/fields/FieldType.ts:147

___

### is

▸ **is**(`input`): input is unknown

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is unknown

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)

#### Defined in

packages/schema/src/fields/FieldType.ts:131

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[setDefaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/src/fields/FieldType.ts:183

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toList](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)

#### Defined in

packages/schema/src/fields/FieldType.ts:172

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toOptional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)

#### Defined in

packages/schema/src/fields/FieldType.ts:160

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toRequired](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)

#### Defined in

packages/schema/src/fields/FieldType.ts:166

___

### validate

▸ **validate**(`input`): input is unknown

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is unknown

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)

#### Defined in

packages/schema/src/fields/FieldType.ts:122

___

### create

▸ `Static` **create**<`DefinitionInput`\>(`def`): [`ObjectField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md)<`DefinitionInput`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends [`ObjectDefinitionInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `DefinitionInput` |

#### Returns

[`ObjectField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectField.md)<`DefinitionInput`\>

#### Overrides

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[create](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

#### Defined in

packages/schema/src/fields/ObjectField.ts:42

___

### is

▸ `Static` **is**(`t`): t is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

t is Object

#### Defined in

packages/schema/src/fields/ObjectField.ts:23
