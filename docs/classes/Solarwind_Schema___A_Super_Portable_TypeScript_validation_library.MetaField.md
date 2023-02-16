[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind Schema - A Super Portable TypeScript validation library](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md) / MetaField

# Class: MetaField

[Solarwind Schema - A Super Portable TypeScript validation library](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md).MetaField

## Hierarchy

- [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef)\>

  ↳ **`MetaField`**

## Table of contents

### Constructors

- [constructor](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#___inferable)
- [\_\_isFieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#__isfieldtype)
- [composer](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#composer)
- [def](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#def)
- [defaultValue](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#defaultvalue)
- [description](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#description)
- [hidden](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#hidden)
- [id](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#id)
- [list](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#list)
- [name](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#name)
- [optional](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#optional)
- [options](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#options)
- [parse](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#parse)
- [type](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#type)
- [typeName](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#typename)

### Accessors

- [asFinalFieldDef](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#asfinalfielddef)
- [definition](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#definition)

### Methods

- [applyParser](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#applyparser)
- [clone](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#clone)
- [describe](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#describe)
- [describeField](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#describefield)
- [is](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#is)
- [setDefaultValue](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#setdefaultvalue)
- [toList](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#tolist)
- [toOptional](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#tooptional)
- [toRequired](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#torequired)
- [toString](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#tostring)
- [validate](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#validate)
- [create](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md#create)

## Constructors

### constructor

• **new MetaField**(`def?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef) |

#### Overrides

FieldType&lt;MetaField, &#x27;meta&#x27;, MetaFieldDef\&gt;.constructor

#### Defined in

[packages/schema/src/fields/MetaFieldField.ts:20](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L20)

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: [`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[___inferable](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#___inferable)

#### Defined in

[packages/schema/src/fields/FieldType.ts:58](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L58)

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[__isFieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#__isfieldtype)

#### Defined in

[packages/schema/src/fields/FieldType.ts:284](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L284)

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, [`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[composer](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)

#### Defined in

[packages/schema/src/fields/FieldType.ts:64](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L64)

___

### def

• `Readonly` **def**: [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef)

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[def](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#def)

#### Defined in

[packages/schema/src/fields/FieldType.ts:56](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L56)

___

### defaultValue

• **defaultValue**: `undefined`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[defaultValue](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#defaultvalue)

#### Defined in

[packages/schema/src/fields/FieldType.ts:136](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L136)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[description](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#description)

#### Defined in

[packages/schema/src/fields/FieldType.ts:137](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L137)

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[hidden](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#hidden)

#### Defined in

[packages/schema/src/fields/FieldType.ts:138](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L138)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[id](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#id)

#### Defined in

[packages/schema/src/fields/FieldType.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L70)

___

### list

• **list**: ``false``

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[list](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#list)

#### Defined in

[packages/schema/src/fields/FieldType.ts:135](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L135)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[name](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#name)

#### Defined in

[packages/schema/src/fields/FieldType.ts:71](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L71)

___

### optional

• **optional**: ``false``

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[optional](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#optional)

#### Defined in

[packages/schema/src/fields/FieldType.ts:134](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L134)

___

### options

• **options**: `Object`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[options](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#options)

#### Defined in

[packages/schema/src/fields/FieldType.ts:72](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L72)

___

### parse

• **parse**: [`FieldTypeParser`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)\>

#### Overrides

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[parse](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)

#### Defined in

[packages/schema/src/fields/MetaFieldField.ts:18](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L18)

___

### type

• **type**: ``"meta"``

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[type](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)

#### Defined in

[packages/schema/src/fields/FieldType.ts:54](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L54)

___

### typeName

• `Readonly` **typeName**: ``"meta"``

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[typeName](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#typename)

#### Defined in

[packages/schema/src/fields/FieldType.ts:53](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L53)

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.asFinalFieldDef

#### Defined in

[packages/schema/src/fields/FieldType.ts:262](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L262)

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.definition

#### Defined in

[packages/schema/src/fields/FieldType.ts:66](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L66)

## Methods

### applyParser

▸ **applyParser**<`Type`\>(`parser`): [`FieldTypeParser`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | `Object` |
| `parser.parse` | (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject)) => `Type` |
| `parser.preParse?` | (`input`: `any`) => `Type` |

#### Returns

[`FieldTypeParser`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[applyParser](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#applyparser)

#### Defined in

[packages/schema/src/fields/FieldType.ts:188](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L188)

___

### clone

▸ **clone**(): [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[clone](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#clone)

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

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[describe](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describe)

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

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[describeField](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describefield)

#### Defined in

[packages/schema/src/fields/FieldType.ts:145](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L145)

___

### is

▸ **is**(`input`): input is MetaField

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is MetaField

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[is](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)

#### Defined in

[packages/schema/src/fields/FieldType.ts:130](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L130)

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[setDefaultValue](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)

#### Defined in

[packages/schema/src/fields/FieldType.ts:180](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L180)

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toList](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)

#### Defined in

[packages/schema/src/fields/FieldType.ts:169](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L169)

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toOptional](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)

#### Defined in

[packages/schema/src/fields/FieldType.ts:157](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L157)

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toRequired](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)

#### Defined in

[packages/schema/src/fields/FieldType.ts:163](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L163)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/schema/src/fields/MetaFieldField.ts:42](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L42)

___

### validate

▸ **validate**(`input`): input is MetaField

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is MetaField

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[validate](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)

#### Defined in

[packages/schema/src/fields/FieldType.ts:121](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L121)

___

### create

▸ `Static` **create**(`def?`): [`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`MetaFieldDef`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#metafielddef) |

#### Returns

[`MetaField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.MetaField.md)

#### Overrides

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[create](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

#### Defined in

[packages/schema/src/fields/MetaFieldField.ts:38](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/MetaFieldField.ts#L38)
