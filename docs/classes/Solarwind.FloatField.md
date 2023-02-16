[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / FloatField

# Class: FloatField

[Solarwind](../modules/Solarwind.md).FloatField

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef) \| `undefined`\>

  ↳ **`FloatField`**

## Table of contents

### Constructors

- [constructor](Solarwind.FloatField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.FloatField.md#___inferable)
- [\_\_isFieldType](Solarwind.FloatField.md#__isfieldtype)
- [applyParser](Solarwind.FloatField.md#applyparser)
- [clone](Solarwind.FloatField.md#clone)
- [composer](Solarwind.FloatField.md#composer)
- [def](Solarwind.FloatField.md#def)
- [defaultValue](Solarwind.FloatField.md#defaultvalue)
- [describe](Solarwind.FloatField.md#describe)
- [describeField](Solarwind.FloatField.md#describefield)
- [description](Solarwind.FloatField.md#description)
- [hidden](Solarwind.FloatField.md#hidden)
- [id](Solarwind.FloatField.md#id)
- [list](Solarwind.FloatField.md#list)
- [name](Solarwind.FloatField.md#name)
- [optional](Solarwind.FloatField.md#optional)
- [options](Solarwind.FloatField.md#options)
- [parse](Solarwind.FloatField.md#parse)
- [toString](Solarwind.FloatField.md#tostring)
- [type](Solarwind.FloatField.md#type)
- [typeName](Solarwind.FloatField.md#typename)
- [create](Solarwind.FloatField.md#create)

### Accessors

- [asFinalFieldDef](Solarwind.FloatField.md#asfinalfielddef)
- [definition](Solarwind.FloatField.md#definition)

### Methods

- [is](Solarwind.FloatField.md#is)
- [setDefaultValue](Solarwind.FloatField.md#setdefaultvalue)
- [toList](Solarwind.FloatField.md#tolist)
- [toOptional](Solarwind.FloatField.md#tooptional)
- [toRequired](Solarwind.FloatField.md#torequired)
- [validate](Solarwind.FloatField.md#validate)

## Constructors

### constructor

• **new FloatField**(`def?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef) |

#### Overrides

FieldType&lt;number, &#x27;float&#x27;, FloatFieldDef \| undefined\&gt;.constructor

#### Defined in

packages/schema/lib/fields/FloatField.d.ts:8

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: `number`

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

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[clone](Solarwind.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, `number`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[composer](Solarwind.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef)

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

• **describe**: (`description`: `string`) => [`FloatField`](Solarwind.FloatField.md)

#### Type declaration

▸ (`description`): [`FloatField`](Solarwind.FloatField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`FloatField`](Solarwind.FloatField.md)

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `number`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `number` |

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

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`number`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

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

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"float"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[typeName](Solarwind.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: (`def?`: [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef)) => [`FloatField`](Solarwind.FloatField.md)

#### Type declaration

▸ (`def?`): [`FloatField`](Solarwind.FloatField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef) |

##### Returns

[`FloatField`](Solarwind.FloatField.md)

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/FloatField.d.ts:9

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

▸ **is**(`input`): input is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is number

#### Inherited from

[FieldType](Solarwind.FieldType.md).[is](Solarwind.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`number`, ``"float"``, `undefined` \| [`FloatFieldDef`](../modules/Solarwind.md#floatfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toRequired](Solarwind.FieldType.md#torequired)

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

[FieldType](Solarwind.FieldType.md).[validate](Solarwind.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34
