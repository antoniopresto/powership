[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / ObjectField

# Class: ObjectField<DefinitionInput\>

[Powership](../modules/Powership.md).ObjectField

## Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput) |

## Hierarchy

- [`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`\>

  ↳ **`ObjectField`**

## Table of contents

### Constructors

- [constructor](Powership.ObjectField.md#constructor)

### Properties

- [$](Powership.ObjectField.md#$)
- [\_\_\_inferable](Powership.ObjectField.md#___inferable)
- [\_\_isFieldType](Powership.ObjectField.md#__isfieldtype)
- [applyParser](Powership.ObjectField.md#applyparser)
- [clone](Powership.ObjectField.md#clone)
- [composer](Powership.ObjectField.md#composer)
- [def](Powership.ObjectField.md#def)
- [defaultValue](Powership.ObjectField.md#defaultvalue)
- [describe](Powership.ObjectField.md#describe)
- [describeField](Powership.ObjectField.md#describefield)
- [description](Powership.ObjectField.md#description)
- [hidden](Powership.ObjectField.md#hidden)
- [id](Powership.ObjectField.md#id)
- [list](Powership.ObjectField.md#list)
- [name](Powership.ObjectField.md#name)
- [optional](Powership.ObjectField.md#optional)
- [options](Powership.ObjectField.md#options)
- [parse](Powership.ObjectField.md#parse)
- [type](Powership.ObjectField.md#type)
- [typeName](Powership.ObjectField.md#typename)
- [utils](Powership.ObjectField.md#utils)
- [create](Powership.ObjectField.md#create)

### Accessors

- [asFinalFieldDef](Powership.ObjectField.md#asfinalfielddef)
- [definition](Powership.ObjectField.md#definition)

### Methods

- [is](Powership.ObjectField.md#is)
- [setDefaultValue](Powership.ObjectField.md#setdefaultvalue)
- [toList](Powership.ObjectField.md#tolist)
- [toOptional](Powership.ObjectField.md#tooptional)
- [toRequired](Powership.ObjectField.md#torequired)
- [validate](Powership.ObjectField.md#validate)
- [is](Powership.ObjectField.md#is-1)

## Constructors

### constructor

• **new ObjectField**<`DefinitionInput`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `DefinitionInput` |

#### Overrides

FieldType&lt;unknown, &#x27;object&#x27;, DefinitionInput\&gt;.constructor

#### Defined in

packages/schema/lib/fields/ObjectField.d.ts:14

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership.FieldType.md).[$](Powership.FieldType.md#$)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:42

___

### \_\_\_inferable

• **\_\_\_inferable**: `unknown`

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

• **clone**: () => [`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[clone](Powership.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:66

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership.md#fieldcomposer)<`Record`<`string`, `any`\>, `unknown`\>

#### Inherited from

[FieldType](Powership.FieldType.md).[composer](Powership.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:24

___

### def

• `Readonly` **def**: `DefinitionInput`

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

• **describe**: (`description`: `string`) => [`ObjectField`](Powership.ObjectField.md)<`DefinitionInput`\>

#### Type declaration

▸ (`description`): [`ObjectField`](Powership.ObjectField.md)<`DefinitionInput`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`ObjectField`](Powership.ObjectField.md)<`DefinitionInput`\>

#### Inherited from

[FieldType](Powership.FieldType.md).[describe](Powership.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:43

___

### describeField

• **describeField**: () => { `$?`: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) ; `def`: `DefinitionInput` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `unknown`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$?` | [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) |
| `def` | `DefinitionInput` |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `unknown` |

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

• **parse**: [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`unknown`\>

#### Overrides

[FieldType](Powership.FieldType.md).[parse](Powership.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/ObjectField.d.ts:9

___

### type

• **type**: ``"object"``

#### Inherited from

[FieldType](Powership.FieldType.md).[type](Powership.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:21

___

### typeName

• `Readonly` **typeName**: ``"object"``

#### Inherited from

[FieldType](Powership.FieldType.md).[typeName](Powership.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

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

▪ `Static` **create**: <DefinitionInput_1\>(`def`: `DefinitionInput_1`) => [`ObjectField`](Powership.ObjectField.md)<`DefinitionInput_1`\>

#### Type declaration

▸ <`DefinitionInput_1`\>(`def`): [`ObjectField`](Powership.ObjectField.md)<`DefinitionInput_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput_1` | extends [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `DefinitionInput_1` |

##### Returns

[`ObjectField`](Powership.ObjectField.md)<`DefinitionInput_1`\>

#### Overrides

[FieldType](Powership.FieldType.md).[create](Powership.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/ObjectField.d.ts:15

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

▸ **is**(`input`): input is unknown

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is unknown

#### Inherited from

[FieldType](Powership.FieldType.md).[is](Powership.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:36

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[setDefaultValue](Powership.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:57

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toList](Powership.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:56

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toOptional](Powership.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toRequired](Powership.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

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

[FieldType](Powership.FieldType.md).[validate](Powership.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

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
