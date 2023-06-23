[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / MetaField

# Class: MetaField

[Powership](../modules/Powership.md).MetaField

## Hierarchy

- [`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef)\>

  ↳ **`MetaField`**

## Table of contents

### Constructors

- [constructor](Powership.MetaField.md#constructor)

### Properties

- [$](Powership.MetaField.md#$)
- [\_\_\_inferable](Powership.MetaField.md#___inferable)
- [\_\_isFieldType](Powership.MetaField.md#__isfieldtype)
- [applyParser](Powership.MetaField.md#applyparser)
- [clone](Powership.MetaField.md#clone)
- [composer](Powership.MetaField.md#composer)
- [def](Powership.MetaField.md#def)
- [defaultValue](Powership.MetaField.md#defaultvalue)
- [describe](Powership.MetaField.md#describe)
- [describeField](Powership.MetaField.md#describefield)
- [description](Powership.MetaField.md#description)
- [hidden](Powership.MetaField.md#hidden)
- [id](Powership.MetaField.md#id)
- [list](Powership.MetaField.md#list)
- [name](Powership.MetaField.md#name)
- [optional](Powership.MetaField.md#optional)
- [options](Powership.MetaField.md#options)
- [parse](Powership.MetaField.md#parse)
- [toString](Powership.MetaField.md#tostring)
- [type](Powership.MetaField.md#type)
- [typeName](Powership.MetaField.md#typename)
- [create](Powership.MetaField.md#create)

### Accessors

- [asFinalFieldDef](Powership.MetaField.md#asfinalfielddef)
- [definition](Powership.MetaField.md#definition)

### Methods

- [is](Powership.MetaField.md#is)
- [setDefaultValue](Powership.MetaField.md#setdefaultvalue)
- [toList](Powership.MetaField.md#tolist)
- [toOptional](Powership.MetaField.md#tooptional)
- [toRequired](Powership.MetaField.md#torequired)
- [validate](Powership.MetaField.md#validate)

## Constructors

### constructor

• **new MetaField**(`def?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`MetaFieldDef`](../modules/Powership.md#metafielddef) |

#### Overrides

FieldType&lt;MetaField, &#x27;meta&#x27;, MetaFieldDef\&gt;.constructor

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:13

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership.FieldType.md).[$](Powership.FieldType.md#$)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:42

___

### \_\_\_inferable

• **\_\_\_inferable**: [`MetaField`](Powership.MetaField.md)

#### Inherited from

[FieldType](Powership.FieldType.md).[___inferable](Powership.FieldType.md#___inferable)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Inherited from

[FieldType](Powership.FieldType.md).[__isFieldType](Powership.FieldType.md#__isfieldtype)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:64

___

### applyParser

• **applyParser**: <Type_1\>(`parser`: { `parse`: (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject)) => `Type_1` ; `preParse?`: (`input`: `any`) => `Type_1`  }) => [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`Type_1`\>

#### Type declaration

▸ <`Type_1`\>(`parser`): [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`Type_1`\>

##### Type parameters

| Name |
| :------ |
| `Type_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | `Object` |
| `parser.parse` | (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject)) => `Type_1` |
| `parser.preParse?` | (`input`: `any`) => `Type_1` |

##### Returns

[`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`Type_1`\>

#### Inherited from

[FieldType](Powership.FieldType.md).[applyParser](Powership.FieldType.md#applyparser)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:58

___

### clone

• **clone**: () => [`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[clone](Powership.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:66

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership.md#fieldcomposer)<`Record`<`string`, `any`\>, [`MetaField`](Powership.MetaField.md)\>

#### Inherited from

[FieldType](Powership.FieldType.md).[composer](Powership.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:24

___

### def

• `Readonly` **def**: [`MetaFieldDef`](../modules/Powership.md#metafielddef)

#### Inherited from

[FieldType](Powership.FieldType.md).[def](Powership.FieldType.md#def)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:22

___

### defaultValue

• **defaultValue**: `undefined`

#### Inherited from

[FieldType](Powership.FieldType.md).[defaultValue](Powership.FieldType.md#defaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:39

___

### describe

• **describe**: (`description`: `string`) => [`MetaField`](Powership.MetaField.md)

#### Type declaration

▸ (`description`): [`MetaField`](Powership.MetaField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`MetaField`](Powership.MetaField.md)

#### Inherited from

[FieldType](Powership.FieldType.md).[describe](Powership.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:43

___

### describeField

• **describeField**: () => { `$?`: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) ; `def`: [`MetaFieldDef`](../modules/Powership.md#metafielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: [`MetaField`](Powership.MetaField.md)  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$?` | [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) |
| `def` | [`MetaFieldDef`](../modules/Powership.md#metafielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | [`MetaField`](Powership.MetaField.md) |

#### Inherited from

[FieldType](Powership.FieldType.md).[describeField](Powership.FieldType.md#describefield)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:44

___

### description

• `Optional` **description**: `string`

#### Inherited from

[FieldType](Powership.FieldType.md).[description](Powership.FieldType.md#description)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:40

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

[FieldType](Powership.FieldType.md).[hidden](Powership.FieldType.md#hidden)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FieldType](Powership.FieldType.md).[id](Powership.FieldType.md#id)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:26

___

### list

• **list**: ``false``

#### Inherited from

[FieldType](Powership.FieldType.md).[list](Powership.FieldType.md#list)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:38

___

### name

• `Optional` **name**: `string`

#### Inherited from

[FieldType](Powership.FieldType.md).[name](Powership.FieldType.md#name)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:27

___

### optional

• **optional**: ``false``

#### Inherited from

[FieldType](Powership.FieldType.md).[optional](Powership.FieldType.md#optional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:37

___

### options

• **options**: `Object`

#### Inherited from

[FieldType](Powership.FieldType.md).[options](Powership.FieldType.md#options)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:28

___

### parse

• **parse**: [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<[`MetaField`](Powership.MetaField.md)\>

#### Overrides

[FieldType](Powership.FieldType.md).[parse](Powership.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:12

___

### toString

• **toString**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:15

___

### type

• **type**: ``"meta"``

#### Inherited from

[FieldType](Powership.FieldType.md).[type](Powership.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:21

___

### typeName

• `Readonly` **typeName**: ``"meta"``

#### Inherited from

[FieldType](Powership.FieldType.md).[typeName](Powership.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### create

▪ `Static` **create**: (`def?`: [`MetaFieldDef`](../modules/Powership.md#metafielddef)) => [`MetaField`](Powership.MetaField.md)

#### Type declaration

▸ (`def?`): [`MetaField`](Powership.MetaField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`MetaFieldDef`](../modules/Powership.md#metafielddef) |

##### Returns

[`MetaField`](Powership.MetaField.md)

#### Overrides

[FieldType](Powership.FieldType.md).[create](Powership.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:14

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.asFinalFieldDef

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:62

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.definition

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:25

## Methods

### is

▸ **is**(`input`): input is MetaField

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is MetaField

#### Inherited from

[FieldType](Powership.FieldType.md).[is](Powership.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:36

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[setDefaultValue](Powership.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:57

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toList](Powership.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:56

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toOptional](Powership.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<[`MetaField`](Powership.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Powership.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toRequired](Powership.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

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

[FieldType](Powership.FieldType.md).[validate](Powership.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35
