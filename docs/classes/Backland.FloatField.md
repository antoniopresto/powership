[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / FloatField

# Class: FloatField

[Backland](../modules/Backland.md).FloatField

## Hierarchy

- [`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, [`FloatFieldDef`](../modules/Backland.md#floatfielddef) \| `undefined`\>

  ↳ **`FloatField`**

## Table of contents

### Constructors

- [constructor](Backland.FloatField.md#constructor)

### Properties

- [\_\_\_inferable](Backland.FloatField.md#___inferable)
- [\_\_isFieldType](Backland.FloatField.md#__isfieldtype)
- [applyParser](Backland.FloatField.md#applyparser)
- [clone](Backland.FloatField.md#clone)
- [composer](Backland.FloatField.md#composer)
- [def](Backland.FloatField.md#def)
- [defaultValue](Backland.FloatField.md#defaultvalue)
- [describe](Backland.FloatField.md#describe)
- [describeField](Backland.FloatField.md#describefield)
- [description](Backland.FloatField.md#description)
- [hidden](Backland.FloatField.md#hidden)
- [id](Backland.FloatField.md#id)
- [list](Backland.FloatField.md#list)
- [name](Backland.FloatField.md#name)
- [optional](Backland.FloatField.md#optional)
- [options](Backland.FloatField.md#options)
- [parse](Backland.FloatField.md#parse)
- [toString](Backland.FloatField.md#tostring)
- [type](Backland.FloatField.md#type)
- [typeName](Backland.FloatField.md#typename)
- [create](Backland.FloatField.md#create)

### Accessors

- [asFinalFieldDef](Backland.FloatField.md#asfinalfielddef)
- [definition](Backland.FloatField.md#definition)

### Methods

- [is](Backland.FloatField.md#is)
- [setDefaultValue](Backland.FloatField.md#setdefaultvalue)
- [toList](Backland.FloatField.md#tolist)
- [toOptional](Backland.FloatField.md#tooptional)
- [toRequired](Backland.FloatField.md#torequired)
- [validate](Backland.FloatField.md#validate)

## Constructors

### constructor

• **new FloatField**(`def?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`FloatFieldDef`](../modules/Backland.md#floatfielddef) |

#### Overrides

FieldType&lt;number, &#x27;float&#x27;, FloatFieldDef \| undefined\&gt;.constructor

#### Defined in

packages/schema/lib/fields/FloatField.d.ts:8

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: `number`

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

• **clone**: () => [`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[clone](Backland.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland.md#fieldcomposer)<`Record`<`string`, `any`\>, `number`\>

#### Inherited from

[FieldType](Backland.FieldType.md).[composer](Backland.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef)

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

• **describe**: (`description`: `string`) => [`FloatField`](Backland.FloatField.md)

#### Type declaration

▸ (`description`): [`FloatField`](Backland.FloatField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`FloatField`](Backland.FloatField.md)

#### Inherited from

[FieldType](Backland.FieldType.md).[describe](Backland.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `number`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `number` |

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

• **parse**: [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<`number`\>

#### Overrides

[FieldType](Backland.FieldType.md).[parse](Backland.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/FloatField.d.ts:7

___

### toString

• **toString**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

packages/schema/lib/fields/FloatField.d.ts:10

___

### type

• **type**: ``"float"``

#### Inherited from

[FieldType](Backland.FieldType.md).[type](Backland.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"float"``

#### Inherited from

[FieldType](Backland.FieldType.md).[typeName](Backland.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: (`def?`: [`FloatFieldDef`](../modules/Backland.md#floatfielddef)) => [`FloatField`](Backland.FloatField.md)

#### Type declaration

▸ (`def?`): [`FloatField`](Backland.FloatField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`FloatFieldDef`](../modules/Backland.md#floatfielddef) |

##### Returns

[`FloatField`](Backland.FloatField.md)

#### Overrides

[FieldType](Backland.FieldType.md).[create](Backland.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/FloatField.d.ts:9

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

▸ **is**(`input`): input is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is number

#### Inherited from

[FieldType](Backland.FieldType.md).[is](Backland.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[setDefaultValue](Backland.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toList](Backland.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toOptional](Backland.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Backland.md#floatfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toRequired](Backland.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

___

### validate

▸ **validate**(`input`): input is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is number

#### Inherited from

[FieldType](Backland.FieldType.md).[validate](Backland.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34
