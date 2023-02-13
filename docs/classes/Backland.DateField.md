[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / DateField

# Class: DateField

[Backland](../modules/Backland.md).DateField

## Hierarchy

- [`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, [`DateFieldDef`](../modules/Backland.md#datefielddef) \| `undefined`\>

  ↳ **`DateField`**

## Table of contents

### Constructors

- [constructor](Backland.DateField.md#constructor)

### Properties

- [\_\_\_inferable](Backland.DateField.md#___inferable)
- [\_\_isFieldType](Backland.DateField.md#__isfieldtype)
- [applyParser](Backland.DateField.md#applyparser)
- [clone](Backland.DateField.md#clone)
- [composer](Backland.DateField.md#composer)
- [def](Backland.DateField.md#def)
- [defaultValue](Backland.DateField.md#defaultvalue)
- [describe](Backland.DateField.md#describe)
- [describeField](Backland.DateField.md#describefield)
- [description](Backland.DateField.md#description)
- [hidden](Backland.DateField.md#hidden)
- [id](Backland.DateField.md#id)
- [list](Backland.DateField.md#list)
- [name](Backland.DateField.md#name)
- [optional](Backland.DateField.md#optional)
- [options](Backland.DateField.md#options)
- [parse](Backland.DateField.md#parse)
- [type](Backland.DateField.md#type)
- [typeName](Backland.DateField.md#typename)
- [create](Backland.DateField.md#create)

### Accessors

- [asFinalFieldDef](Backland.DateField.md#asfinalfielddef)
- [definition](Backland.DateField.md#definition)

### Methods

- [is](Backland.DateField.md#is)
- [setDefaultValue](Backland.DateField.md#setdefaultvalue)
- [toList](Backland.DateField.md#tolist)
- [toOptional](Backland.DateField.md#tooptional)
- [toRequired](Backland.DateField.md#torequired)
- [validate](Backland.DateField.md#validate)
- [serialize](Backland.DateField.md#serialize)

## Constructors

### constructor

• **new DateField**(`def?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`DateFieldDef`](../modules/Backland.md#datefielddef) |

#### Overrides

FieldType&lt;Date, &#x27;date&#x27;, DateFieldDef \| undefined\&gt;.constructor

#### Defined in

packages/schema/lib/fields/DateField.d.ts:9

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: `Date`

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

• **clone**: () => [`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[clone](Backland.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland.md#fieldcomposer)<`Record`<`string`, `any`\>, `Date`\>

#### Inherited from

[FieldType](Backland.FieldType.md).[composer](Backland.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef)

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

• **describe**: (`description`: `string`) => [`DateField`](Backland.DateField.md)

#### Type declaration

▸ (`description`): [`DateField`](Backland.DateField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`DateField`](Backland.DateField.md)

#### Inherited from

[FieldType](Backland.FieldType.md).[describe](Backland.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `Date`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `Date` |

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

• **parse**: [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<`Date`\>

#### Overrides

[FieldType](Backland.FieldType.md).[parse](Backland.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/DateField.d.ts:8

___

### type

• **type**: ``"date"``

#### Inherited from

[FieldType](Backland.FieldType.md).[type](Backland.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"date"``

#### Inherited from

[FieldType](Backland.FieldType.md).[typeName](Backland.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: (`def?`: [`DateFieldDef`](../modules/Backland.md#datefielddef)) => [`DateField`](Backland.DateField.md)

#### Type declaration

▸ (`def?`): [`DateField`](Backland.DateField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`DateFieldDef`](../modules/Backland.md#datefielddef) |

##### Returns

[`DateField`](Backland.DateField.md)

#### Overrides

[FieldType](Backland.FieldType.md).[create](Backland.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/DateField.d.ts:10

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

▸ **is**(`input`): input is Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Date

#### Inherited from

[FieldType](Backland.FieldType.md).[is](Backland.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[setDefaultValue](Backland.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toList](Backland.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toOptional](Backland.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Backland.md#datefielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toRequired](Backland.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

___

### validate

▸ **validate**(`input`): input is Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Date

#### Inherited from

[FieldType](Backland.FieldType.md).[validate](Backland.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34

___

### serialize

▸ `Static` **serialize**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`Date`

#### Defined in

packages/schema/lib/fields/DateField.d.ts:11
