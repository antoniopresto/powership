[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / MetaField

# Class: MetaField

[Backland](../modules/Backland.md).MetaField

## Hierarchy

- [`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef)\>

  ↳ **`MetaField`**

## Table of contents

### Constructors

- [constructor](Backland.MetaField.md#constructor)

### Properties

- [\_\_\_inferable](Backland.MetaField.md#___inferable)
- [\_\_isFieldType](Backland.MetaField.md#__isfieldtype)
- [applyParser](Backland.MetaField.md#applyparser)
- [clone](Backland.MetaField.md#clone)
- [composer](Backland.MetaField.md#composer)
- [def](Backland.MetaField.md#def)
- [defaultValue](Backland.MetaField.md#defaultvalue)
- [describe](Backland.MetaField.md#describe)
- [describeField](Backland.MetaField.md#describefield)
- [description](Backland.MetaField.md#description)
- [hidden](Backland.MetaField.md#hidden)
- [id](Backland.MetaField.md#id)
- [list](Backland.MetaField.md#list)
- [name](Backland.MetaField.md#name)
- [optional](Backland.MetaField.md#optional)
- [options](Backland.MetaField.md#options)
- [parse](Backland.MetaField.md#parse)
- [toString](Backland.MetaField.md#tostring)
- [type](Backland.MetaField.md#type)
- [typeName](Backland.MetaField.md#typename)
- [create](Backland.MetaField.md#create)

### Accessors

- [asFinalFieldDef](Backland.MetaField.md#asfinalfielddef)
- [definition](Backland.MetaField.md#definition)

### Methods

- [is](Backland.MetaField.md#is)
- [setDefaultValue](Backland.MetaField.md#setdefaultvalue)
- [toList](Backland.MetaField.md#tolist)
- [toOptional](Backland.MetaField.md#tooptional)
- [toRequired](Backland.MetaField.md#torequired)
- [validate](Backland.MetaField.md#validate)

## Constructors

### constructor

• **new MetaField**(`def?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`MetaFieldDef`](../modules/Backland.md#metafielddef) |

#### Overrides

FieldType&lt;MetaField, &#x27;meta&#x27;, MetaFieldDef\&gt;.constructor

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:11

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: [`MetaField`](Backland.MetaField.md)

#### Inherited from

[FieldType](Backland.FieldType.md).[___inferable](Backland.FieldType.md#___inferable)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:22

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Inherited from

[FieldType](Backland.FieldType.md).[__isFieldType](Backland.FieldType.md#__isfieldtype)

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

#### Inherited from

[FieldType](Backland.FieldType.md).[applyParser](Backland.FieldType.md#applyparser)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

___

### clone

• **clone**: () => [`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[clone](Backland.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland.md#fieldcomposer)<`Record`<`string`, `any`\>, [`MetaField`](Backland.MetaField.md)\>

#### Inherited from

[FieldType](Backland.FieldType.md).[composer](Backland.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: [`MetaFieldDef`](../modules/Backland.md#metafielddef)

#### Inherited from

[FieldType](Backland.FieldType.md).[def](Backland.FieldType.md#def)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:21

___

### defaultValue

• **defaultValue**: `undefined`

#### Inherited from

[FieldType](Backland.FieldType.md).[defaultValue](Backland.FieldType.md#defaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:38

___

### describe

• **describe**: (`description`: `string`) => [`MetaField`](Backland.MetaField.md)

#### Type declaration

▸ (`description`): [`MetaField`](Backland.MetaField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`MetaField`](Backland.MetaField.md)

#### Inherited from

[FieldType](Backland.FieldType.md).[describe](Backland.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: [`MetaFieldDef`](../modules/Backland.md#metafielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: [`MetaField`](Backland.MetaField.md)  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | [`MetaFieldDef`](../modules/Backland.md#metafielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | [`MetaField`](Backland.MetaField.md) |

#### Inherited from

[FieldType](Backland.FieldType.md).[describeField](Backland.FieldType.md#describefield)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:42

___

### description

• `Optional` **description**: `string`

#### Inherited from

[FieldType](Backland.FieldType.md).[description](Backland.FieldType.md#description)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:39

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

[FieldType](Backland.FieldType.md).[hidden](Backland.FieldType.md#hidden)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:40

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FieldType](Backland.FieldType.md).[id](Backland.FieldType.md#id)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:25

___

### list

• **list**: ``false``

#### Inherited from

[FieldType](Backland.FieldType.md).[list](Backland.FieldType.md#list)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:37

___

### name

• `Optional` **name**: `string`

#### Inherited from

[FieldType](Backland.FieldType.md).[name](Backland.FieldType.md#name)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:26

___

### optional

• **optional**: ``false``

#### Inherited from

[FieldType](Backland.FieldType.md).[optional](Backland.FieldType.md#optional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:36

___

### options

• **options**: `Object`

#### Inherited from

[FieldType](Backland.FieldType.md).[options](Backland.FieldType.md#options)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:27

___

### parse

• **parse**: [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<[`MetaField`](Backland.MetaField.md)\>

#### Overrides

[FieldType](Backland.FieldType.md).[parse](Backland.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:10

___

### toString

• **toString**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:13

___

### type

• **type**: ``"meta"``

#### Inherited from

[FieldType](Backland.FieldType.md).[type](Backland.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"meta"``

#### Inherited from

[FieldType](Backland.FieldType.md).[typeName](Backland.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: (`def?`: [`MetaFieldDef`](../modules/Backland.md#metafielddef)) => [`MetaField`](Backland.MetaField.md)

#### Type declaration

▸ (`def?`): [`MetaField`](Backland.MetaField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`MetaFieldDef`](../modules/Backland.md#metafielddef) |

##### Returns

[`MetaField`](Backland.MetaField.md)

#### Overrides

[FieldType](Backland.FieldType.md).[create](Backland.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/MetaFieldField.d.ts:12

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Backland.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Backland.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.asFinalFieldDef

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:59

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Backland.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Backland.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.definition

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:24

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

[FieldType](Backland.FieldType.md).[is](Backland.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[setDefaultValue](Backland.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toList](Backland.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toOptional](Backland.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<[`MetaField`](Backland.MetaField.md), ``"meta"``, [`MetaFieldDef`](../modules/Backland.md#metafielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toRequired](Backland.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

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

[FieldType](Backland.FieldType.md).[validate](Backland.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34
