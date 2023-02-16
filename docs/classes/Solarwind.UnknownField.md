[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / UnknownField

# Class: UnknownField

[Solarwind](../modules/Solarwind.md).UnknownField

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef) \| `undefined`\>

  ↳ **`UnknownField`**

## Table of contents

### Constructors

- [constructor](Solarwind.UnknownField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.UnknownField.md#___inferable)
- [\_\_isFieldType](Solarwind.UnknownField.md#__isfieldtype)
- [applyParser](Solarwind.UnknownField.md#applyparser)
- [clone](Solarwind.UnknownField.md#clone)
- [composer](Solarwind.UnknownField.md#composer)
- [def](Solarwind.UnknownField.md#def)
- [defaultValue](Solarwind.UnknownField.md#defaultvalue)
- [describe](Solarwind.UnknownField.md#describe)
- [describeField](Solarwind.UnknownField.md#describefield)
- [description](Solarwind.UnknownField.md#description)
- [hidden](Solarwind.UnknownField.md#hidden)
- [id](Solarwind.UnknownField.md#id)
- [list](Solarwind.UnknownField.md#list)
- [name](Solarwind.UnknownField.md#name)
- [optional](Solarwind.UnknownField.md#optional)
- [options](Solarwind.UnknownField.md#options)
- [parse](Solarwind.UnknownField.md#parse)
- [type](Solarwind.UnknownField.md#type)
- [typeName](Solarwind.UnknownField.md#typename)
- [create](Solarwind.UnknownField.md#create)

### Accessors

- [asFinalFieldDef](Solarwind.UnknownField.md#asfinalfielddef)
- [definition](Solarwind.UnknownField.md#definition)

### Methods

- [is](Solarwind.UnknownField.md#is)
- [setDefaultValue](Solarwind.UnknownField.md#setdefaultvalue)
- [toList](Solarwind.UnknownField.md#tolist)
- [toOptional](Solarwind.UnknownField.md#tooptional)
- [toRequired](Solarwind.UnknownField.md#torequired)
- [validate](Solarwind.UnknownField.md#validate)

## Constructors

### constructor

• **new UnknownField**(`def?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef) |

#### Overrides

FieldType&lt;unknown, &#x27;unknown&#x27;, UnknownFieldDef \| undefined\&gt;.constructor

#### Defined in

packages/schema/lib/fields/UnknownField.d.ts:7

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: `unknown`

#### Inherited from

[FieldType](Solarwind.FieldType.md).[___inferable](Solarwind.FieldType.md#___inferable)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:22

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[__isFieldType](Solarwind.FieldType.md#__isfieldtype)

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

#### Inherited from

[FieldType](Solarwind.FieldType.md).[applyParser](Solarwind.FieldType.md#applyparser)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

___

### clone

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[clone](Solarwind.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, `unknown`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[composer](Solarwind.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef)

#### Inherited from

[FieldType](Solarwind.FieldType.md).[def](Solarwind.FieldType.md#def)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:21

___

### defaultValue

• **defaultValue**: `undefined`

#### Inherited from

[FieldType](Solarwind.FieldType.md).[defaultValue](Solarwind.FieldType.md#defaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:38

___

### describe

• **describe**: (`description`: `string`) => [`UnknownField`](Solarwind.UnknownField.md)

#### Type declaration

▸ (`description`): [`UnknownField`](Solarwind.UnknownField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`UnknownField`](Solarwind.UnknownField.md)

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `unknown`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `unknown` |

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describeField](Solarwind.FieldType.md#describefield)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:42

___

### description

• `Optional` **description**: `string`

#### Inherited from

[FieldType](Solarwind.FieldType.md).[description](Solarwind.FieldType.md#description)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:39

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

[FieldType](Solarwind.FieldType.md).[hidden](Solarwind.FieldType.md#hidden)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:40

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FieldType](Solarwind.FieldType.md).[id](Solarwind.FieldType.md#id)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:25

___

### list

• **list**: ``false``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[list](Solarwind.FieldType.md#list)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:37

___

### name

• `Optional` **name**: `string`

#### Inherited from

[FieldType](Solarwind.FieldType.md).[name](Solarwind.FieldType.md#name)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:26

___

### optional

• **optional**: ``false``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[optional](Solarwind.FieldType.md#optional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:36

___

### options

• **options**: `Object`

#### Inherited from

[FieldType](Solarwind.FieldType.md).[options](Solarwind.FieldType.md#options)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:27

___

### parse

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`any`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/UnknownField.d.ts:6

___

### type

• **type**: ``"unknown"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"unknown"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[typeName](Solarwind.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: (`def?`: [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef)) => [`UnknownField`](Solarwind.UnknownField.md)

#### Type declaration

▸ (`def?`): [`UnknownField`](Solarwind.UnknownField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef) |

##### Returns

[`UnknownField`](Solarwind.UnknownField.md)

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/UnknownField.d.ts:8

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Solarwind.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Solarwind.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.asFinalFieldDef

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:59

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Solarwind.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Solarwind.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.definition

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:24

## Methods

### is

▸ **is**(`input`): input is unknown

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is unknown

#### Inherited from

[FieldType](Solarwind.FieldType.md).[is](Solarwind.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"unknown"``, `undefined` \| [`UnknownFieldDef`](../modules/Solarwind.md#unknownfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toRequired](Solarwind.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

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

[FieldType](Solarwind.FieldType.md).[validate](Solarwind.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34
