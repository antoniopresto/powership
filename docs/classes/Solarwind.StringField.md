[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / StringField

# Class: StringField

[Solarwind](../modules/Solarwind.md).StringField

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, [`StringFieldDef`](../modules/Solarwind.md#stringfielddef) \| `undefined`\>

  ↳ **`StringField`**

## Table of contents

### Constructors

- [constructor](Solarwind.StringField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.StringField.md#___inferable)
- [\_\_isFieldType](Solarwind.StringField.md#__isfieldtype)
- [applyParser](Solarwind.StringField.md#applyparser)
- [clone](Solarwind.StringField.md#clone)
- [composer](Solarwind.StringField.md#composer)
- [def](Solarwind.StringField.md#def)
- [defaultValue](Solarwind.StringField.md#defaultvalue)
- [describe](Solarwind.StringField.md#describe)
- [describeField](Solarwind.StringField.md#describefield)
- [description](Solarwind.StringField.md#description)
- [hidden](Solarwind.StringField.md#hidden)
- [id](Solarwind.StringField.md#id)
- [list](Solarwind.StringField.md#list)
- [name](Solarwind.StringField.md#name)
- [optional](Solarwind.StringField.md#optional)
- [options](Solarwind.StringField.md#options)
- [parse](Solarwind.StringField.md#parse)
- [type](Solarwind.StringField.md#type)
- [typeName](Solarwind.StringField.md#typename)
- [create](Solarwind.StringField.md#create)

### Accessors

- [asFinalFieldDef](Solarwind.StringField.md#asfinalfielddef)
- [definition](Solarwind.StringField.md#definition)

### Methods

- [is](Solarwind.StringField.md#is)
- [setDefaultValue](Solarwind.StringField.md#setdefaultvalue)
- [toList](Solarwind.StringField.md#tolist)
- [toOptional](Solarwind.StringField.md#tooptional)
- [toRequired](Solarwind.StringField.md#torequired)
- [validate](Solarwind.StringField.md#validate)

## Constructors

### constructor

• **new StringField**(`def?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`StringFieldDef`](../modules/Solarwind.md#stringfielddef) |

#### Overrides

FieldType&lt;string, &#x27;string&#x27;, StringFieldDef \| undefined\&gt;.constructor

#### Defined in

packages/schema/lib/fields/StringField.d.ts:9

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: `string`

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

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[clone](Solarwind.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, `string`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[composer](Solarwind.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef)

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

• **describe**: (`description`: `string`) => [`StringField`](Solarwind.StringField.md)

#### Type declaration

▸ (`description`): [`StringField`](Solarwind.StringField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`StringField`](Solarwind.StringField.md)

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `string`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `string` |

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

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`string`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/StringField.d.ts:8

___

### type

• **type**: ``"string"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"string"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[typeName](Solarwind.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: (`def?`: [`StringFieldDef`](../modules/Solarwind.md#stringfielddef)) => [`StringField`](Solarwind.StringField.md)

#### Type declaration

▸ (`def?`): [`StringField`](Solarwind.StringField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`StringFieldDef`](../modules/Solarwind.md#stringfielddef) |

##### Returns

[`StringField`](Solarwind.StringField.md)

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/StringField.d.ts:10

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

▸ **is**(`input`): input is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is string

#### Inherited from

[FieldType](Solarwind.FieldType.md).[is](Solarwind.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`string`, ``"string"``, `undefined` \| [`StringFieldDef`](../modules/Solarwind.md#stringfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toRequired](Solarwind.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

___

### validate

▸ **validate**(`input`): input is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is string

#### Inherited from

[FieldType](Solarwind.FieldType.md).[validate](Solarwind.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34
