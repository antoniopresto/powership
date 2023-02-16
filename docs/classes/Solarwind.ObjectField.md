[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / ObjectField

# Class: ObjectField<DefinitionInput\>

[Solarwind](../modules/Solarwind.md).ObjectField

## Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`\>

  ↳ **`ObjectField`**

## Table of contents

### Constructors

- [constructor](Solarwind.ObjectField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.ObjectField.md#___inferable)
- [\_\_isFieldType](Solarwind.ObjectField.md#__isfieldtype)
- [applyParser](Solarwind.ObjectField.md#applyparser)
- [clone](Solarwind.ObjectField.md#clone)
- [composer](Solarwind.ObjectField.md#composer)
- [def](Solarwind.ObjectField.md#def)
- [defaultValue](Solarwind.ObjectField.md#defaultvalue)
- [describe](Solarwind.ObjectField.md#describe)
- [describeField](Solarwind.ObjectField.md#describefield)
- [description](Solarwind.ObjectField.md#description)
- [hidden](Solarwind.ObjectField.md#hidden)
- [id](Solarwind.ObjectField.md#id)
- [list](Solarwind.ObjectField.md#list)
- [name](Solarwind.ObjectField.md#name)
- [optional](Solarwind.ObjectField.md#optional)
- [options](Solarwind.ObjectField.md#options)
- [parse](Solarwind.ObjectField.md#parse)
- [type](Solarwind.ObjectField.md#type)
- [typeName](Solarwind.ObjectField.md#typename)
- [utils](Solarwind.ObjectField.md#utils)
- [create](Solarwind.ObjectField.md#create)

### Accessors

- [asFinalFieldDef](Solarwind.ObjectField.md#asfinalfielddef)
- [definition](Solarwind.ObjectField.md#definition)

### Methods

- [is](Solarwind.ObjectField.md#is)
- [setDefaultValue](Solarwind.ObjectField.md#setdefaultvalue)
- [toList](Solarwind.ObjectField.md#tolist)
- [toOptional](Solarwind.ObjectField.md#tooptional)
- [toRequired](Solarwind.ObjectField.md#torequired)
- [validate](Solarwind.ObjectField.md#validate)
- [is](Solarwind.ObjectField.md#is-1)

## Constructors

### constructor

• **new ObjectField**<`DefinitionInput`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `DefinitionInput` |

#### Overrides

FieldType&lt;unknown, &#x27;object&#x27;, DefinitionInput\&gt;.constructor

#### Defined in

packages/schema/lib/fields/ObjectField.d.ts:14

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

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

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

• `Readonly` **def**: `DefinitionInput`

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

• **describe**: (`description`: `string`) => [`ObjectField`](Solarwind.ObjectField.md)<`DefinitionInput`\>

#### Type declaration

▸ (`description`): [`ObjectField`](Solarwind.ObjectField.md)<`DefinitionInput`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`ObjectField`](Solarwind.ObjectField.md)<`DefinitionInput`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `DefinitionInput` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `unknown`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `DefinitionInput` |
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

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`unknown`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/ObjectField.d.ts:9

___

### type

• **type**: ``"object"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"object"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[typeName](Solarwind.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Defined in

packages/schema/lib/fields/ObjectField.d.ts:10

___

### create

▪ `Static` **create**: <DefinitionInput_1\>(`def`: `DefinitionInput_1`) => [`ObjectField`](Solarwind.ObjectField.md)<`DefinitionInput_1`\>

#### Type declaration

▸ <`DefinitionInput_1`\>(`def`): [`ObjectField`](Solarwind.ObjectField.md)<`DefinitionInput_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput_1` | extends [`ObjectDefinitionInput`](../interfaces/Solarwind.ObjectDefinitionInput.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `DefinitionInput_1` |

##### Returns

[`ObjectField`](Solarwind.ObjectField.md)<`DefinitionInput_1`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/ObjectField.d.ts:15

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

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

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

packages/schema/lib/fields/ObjectField.d.ts:13
