[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / DateField

# Class: DateField

[Solarwind](../modules/Solarwind.md).DateField

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, [`DateFieldDef`](../modules/Solarwind.md#datefielddef) \| `undefined`\>

  ↳ **`DateField`**

## Table of contents

### Constructors

- [constructor](Solarwind.DateField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.DateField.md#___inferable)
- [\_\_isFieldType](Solarwind.DateField.md#__isfieldtype)
- [applyParser](Solarwind.DateField.md#applyparser)
- [clone](Solarwind.DateField.md#clone)
- [composer](Solarwind.DateField.md#composer)
- [def](Solarwind.DateField.md#def)
- [defaultValue](Solarwind.DateField.md#defaultvalue)
- [describe](Solarwind.DateField.md#describe)
- [describeField](Solarwind.DateField.md#describefield)
- [description](Solarwind.DateField.md#description)
- [hidden](Solarwind.DateField.md#hidden)
- [id](Solarwind.DateField.md#id)
- [list](Solarwind.DateField.md#list)
- [name](Solarwind.DateField.md#name)
- [optional](Solarwind.DateField.md#optional)
- [options](Solarwind.DateField.md#options)
- [parse](Solarwind.DateField.md#parse)
- [type](Solarwind.DateField.md#type)
- [typeName](Solarwind.DateField.md#typename)
- [create](Solarwind.DateField.md#create)

### Accessors

- [asFinalFieldDef](Solarwind.DateField.md#asfinalfielddef)
- [definition](Solarwind.DateField.md#definition)

### Methods

- [is](Solarwind.DateField.md#is)
- [setDefaultValue](Solarwind.DateField.md#setdefaultvalue)
- [toList](Solarwind.DateField.md#tolist)
- [toOptional](Solarwind.DateField.md#tooptional)
- [toRequired](Solarwind.DateField.md#torequired)
- [validate](Solarwind.DateField.md#validate)
- [serialize](Solarwind.DateField.md#serialize)

## Constructors

### constructor

• **new DateField**(`def?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`DateFieldDef`](../modules/Solarwind.md#datefielddef) |

#### Overrides

FieldType&lt;Date, &#x27;date&#x27;, DateFieldDef \| undefined\&gt;.constructor

#### Defined in

packages/schema/lib/fields/DateField.d.ts:9

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: `Date`

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

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[clone](Solarwind.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, `Date`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[composer](Solarwind.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef)

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

• **describe**: (`description`: `string`) => [`DateField`](Solarwind.DateField.md)

#### Type declaration

▸ (`description`): [`DateField`](Solarwind.DateField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`DateField`](Solarwind.DateField.md)

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `Date`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `Date` |

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

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`Date`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/DateField.d.ts:8

___

### type

• **type**: ``"date"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"date"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[typeName](Solarwind.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: (`def?`: [`DateFieldDef`](../modules/Solarwind.md#datefielddef)) => [`DateField`](Solarwind.DateField.md)

#### Type declaration

▸ (`def?`): [`DateField`](Solarwind.DateField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | [`DateFieldDef`](../modules/Solarwind.md#datefielddef) |

##### Returns

[`DateField`](Solarwind.DateField.md)

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/DateField.d.ts:10

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

▸ **is**(`input`): input is Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Date

#### Inherited from

[FieldType](Solarwind.FieldType.md).[is](Solarwind.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`Date`, ``"date"``, `undefined` \| [`DateFieldDef`](../modules/Solarwind.md#datefielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toRequired](Solarwind.FieldType.md#torequired)

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

[FieldType](Solarwind.FieldType.md).[validate](Solarwind.FieldType.md#validate)

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
