[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / EnumField

# Class: EnumField<U, T\>

[Powership](../modules/Powership.md).EnumField

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` |
| `T` | extends `Readonly`<[`U`, ...U[]]\> |

## Hierarchy

- [`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`\>

  ↳ **`EnumField`**

## Table of contents

### Constructors

- [constructor](Powership.EnumField.md#constructor)

### Properties

- [$](Powership.EnumField.md#$)
- [\_\_\_inferable](Powership.EnumField.md#___inferable)
- [\_\_isFieldType](Powership.EnumField.md#__isfieldtype)
- [applyParser](Powership.EnumField.md#applyparser)
- [clone](Powership.EnumField.md#clone)
- [composer](Powership.EnumField.md#composer)
- [def](Powership.EnumField.md#def)
- [defaultValue](Powership.EnumField.md#defaultvalue)
- [describe](Powership.EnumField.md#describe)
- [describeField](Powership.EnumField.md#describefield)
- [description](Powership.EnumField.md#description)
- [hidden](Powership.EnumField.md#hidden)
- [id](Powership.EnumField.md#id)
- [list](Powership.EnumField.md#list)
- [name](Powership.EnumField.md#name)
- [optional](Powership.EnumField.md#optional)
- [options](Powership.EnumField.md#options)
- [parse](Powership.EnumField.md#parse)
- [type](Powership.EnumField.md#type)
- [typeName](Powership.EnumField.md#typename)
- [create](Powership.EnumField.md#create)

### Accessors

- [asFinalFieldDef](Powership.EnumField.md#asfinalfielddef)
- [definition](Powership.EnumField.md#definition)
- [value](Powership.EnumField.md#value)

### Methods

- [is](Powership.EnumField.md#is)
- [setDefaultValue](Powership.EnumField.md#setdefaultvalue)
- [toList](Powership.EnumField.md#tolist)
- [toOptional](Powership.EnumField.md#tooptional)
- [toRequired](Powership.EnumField.md#torequired)
- [validate](Powership.EnumField.md#validate)

## Constructors

### constructor

• **new EnumField**<`U`, `T`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` |
| `T` | extends readonly [`U`, `U`, `T`] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Overrides

FieldType&lt;T[number], &#x27;enum&#x27;, T\&gt;.constructor

#### Defined in

packages/schema/lib/fields/EnumField.d.ts:5

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership.FieldType.md).[$](Powership.FieldType.md#$)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:42

___

### \_\_\_inferable

• **\_\_\_inferable**: `T`[`number`] extends `R` ? `R` : `never`

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

• **clone**: () => [`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[clone](Powership.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:66

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership.md#fieldcomposer)<`Record`<`string`, `any`\>, `T`[`number`]\>

#### Inherited from

[FieldType](Powership.FieldType.md).[composer](Powership.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:24

___

### def

• `Readonly` **def**: `T`

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

• **describe**: (`description`: `string`) => [`EnumField`](Powership.EnumField.md)<`U`, `T`\>

#### Type declaration

▸ (`description`): [`EnumField`](Powership.EnumField.md)<`U`, `T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`EnumField`](Powership.EnumField.md)<`U`, `T`\>

#### Inherited from

[FieldType](Powership.FieldType.md).[describe](Powership.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:43

___

### describeField

• **describeField**: () => { `$?`: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) ; `def`: `T` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `T`[`number`]  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$?` | [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) |
| `def` | `T` |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `T`[`number`] |

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

• **parse**: [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`T`[`number`]\>

#### Overrides

[FieldType](Powership.FieldType.md).[parse](Powership.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/EnumField.d.ts:3

___

### type

• **type**: ``"enum"``

#### Inherited from

[FieldType](Powership.FieldType.md).[type](Powership.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:21

___

### typeName

• `Readonly` **typeName**: ``"enum"``

#### Inherited from

[FieldType](Powership.FieldType.md).[typeName](Powership.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### create

▪ `Static` **create**: <U_1, T_1\>(`def`: `T_1`) => [`FieldType`](Powership.FieldType.md)<`T_1`[`number`], ``"enum"``, `T_1`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ <`U_1`, `T_1`\>(`def`): [`FieldType`](Powership.FieldType.md)<`T_1`[`number`], ``"enum"``, `T_1`, ``0``, ``0``, `undefined`, {}\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U_1` | extends `string` |
| `T_1` | extends readonly [`U_1`, `U_1`, `T_1`] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T_1` |

##### Returns

[`FieldType`](Powership.FieldType.md)<`T_1`[`number`], ``"enum"``, `T_1`, ``0``, ``0``, `undefined`, {}\>

#### Overrides

[FieldType](Powership.FieldType.md).[create](Powership.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/EnumField.d.ts:6

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

___

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Defined in

packages/schema/lib/fields/EnumField.d.ts:4

## Methods

### is

▸ **is**(`input`): input is T[number]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is T[number]

#### Inherited from

[FieldType](Powership.FieldType.md).[is](Powership.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:36

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[setDefaultValue](Powership.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:57

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toList](Powership.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:56

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toOptional](Powership.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toRequired](Powership.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

___

### validate

▸ **validate**(`input`): input is T[number]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is T[number]

#### Inherited from

[FieldType](Powership.FieldType.md).[validate](Powership.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35
