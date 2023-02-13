[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / ObjectField

# Class: ObjectField<DefinitionInput\>

[Backland](../modules/Backland.md).ObjectField

## Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) |

## Hierarchy

- [`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`\>

  ↳ **`ObjectField`**

## Table of contents

### Constructors

- [constructor](Backland.ObjectField.md#constructor)

### Properties

- [\_\_\_inferable](Backland.ObjectField.md#___inferable)
- [\_\_isFieldType](Backland.ObjectField.md#__isfieldtype)
- [applyParser](Backland.ObjectField.md#applyparser)
- [clone](Backland.ObjectField.md#clone)
- [composer](Backland.ObjectField.md#composer)
- [def](Backland.ObjectField.md#def)
- [defaultValue](Backland.ObjectField.md#defaultvalue)
- [describe](Backland.ObjectField.md#describe)
- [describeField](Backland.ObjectField.md#describefield)
- [description](Backland.ObjectField.md#description)
- [hidden](Backland.ObjectField.md#hidden)
- [id](Backland.ObjectField.md#id)
- [list](Backland.ObjectField.md#list)
- [name](Backland.ObjectField.md#name)
- [optional](Backland.ObjectField.md#optional)
- [options](Backland.ObjectField.md#options)
- [parse](Backland.ObjectField.md#parse)
- [type](Backland.ObjectField.md#type)
- [typeName](Backland.ObjectField.md#typename)
- [utils](Backland.ObjectField.md#utils)
- [create](Backland.ObjectField.md#create)

### Accessors

- [asFinalFieldDef](Backland.ObjectField.md#asfinalfielddef)
- [definition](Backland.ObjectField.md#definition)

### Methods

- [is](Backland.ObjectField.md#is)
- [setDefaultValue](Backland.ObjectField.md#setdefaultvalue)
- [toList](Backland.ObjectField.md#tolist)
- [toOptional](Backland.ObjectField.md#tooptional)
- [toRequired](Backland.ObjectField.md#torequired)
- [validate](Backland.ObjectField.md#validate)
- [is](Backland.ObjectField.md#is-1)

## Constructors

### constructor

• **new ObjectField**<`DefinitionInput`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) |

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

• **clone**: () => [`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[clone](Backland.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland.md#fieldcomposer)<`Record`<`string`, `any`\>, `unknown`\>

#### Inherited from

[FieldType](Backland.FieldType.md).[composer](Backland.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `DefinitionInput`

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

• **describe**: (`description`: `string`) => [`ObjectField`](Backland.ObjectField.md)<`DefinitionInput`\>

#### Type declaration

▸ (`description`): [`ObjectField`](Backland.ObjectField.md)<`DefinitionInput`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`ObjectField`](Backland.ObjectField.md)<`DefinitionInput`\>

#### Inherited from

[FieldType](Backland.FieldType.md).[describe](Backland.FieldType.md#describe)

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

• **parse**: [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<`unknown`\>

#### Overrides

[FieldType](Backland.FieldType.md).[parse](Backland.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/ObjectField.d.ts:9

___

### type

• **type**: ``"object"``

#### Inherited from

[FieldType](Backland.FieldType.md).[type](Backland.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"object"``

#### Inherited from

[FieldType](Backland.FieldType.md).[typeName](Backland.FieldType.md#typename)

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

▪ `Static` **create**: <DefinitionInput_1\>(`def`: `DefinitionInput_1`) => [`ObjectField`](Backland.ObjectField.md)<`DefinitionInput_1`\>

#### Type declaration

▸ <`DefinitionInput_1`\>(`def`): [`ObjectField`](Backland.ObjectField.md)<`DefinitionInput_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionInput_1` | extends [`ObjectDefinitionInput`](../interfaces/Backland.ObjectDefinitionInput.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `DefinitionInput_1` |

##### Returns

[`ObjectField`](Backland.ObjectField.md)<`DefinitionInput_1`\>

#### Overrides

[FieldType](Backland.FieldType.md).[create](Backland.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/ObjectField.d.ts:15

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

▸ **is**(`input`): input is unknown

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is unknown

#### Inherited from

[FieldType](Backland.FieldType.md).[is](Backland.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[setDefaultValue](Backland.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toList](Backland.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toOptional](Backland.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`unknown`, ``"object"``, `DefinitionInput`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toRequired](Backland.FieldType.md#torequired)

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

[FieldType](Backland.FieldType.md).[validate](Backland.FieldType.md#validate)

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
