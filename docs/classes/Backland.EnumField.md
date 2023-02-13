[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / EnumField

# Class: EnumField<U, T\>

[Backland](../modules/Backland.md).EnumField

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` |
| `T` | extends `Readonly`<[`U`, ...U[]]\> |

## Hierarchy

- [`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`\>

  ↳ **`EnumField`**

## Table of contents

### Constructors

- [constructor](Backland.EnumField.md#constructor)

### Properties

- [\_\_\_inferable](Backland.EnumField.md#___inferable)
- [\_\_isFieldType](Backland.EnumField.md#__isfieldtype)
- [applyParser](Backland.EnumField.md#applyparser)
- [clone](Backland.EnumField.md#clone)
- [composer](Backland.EnumField.md#composer)
- [def](Backland.EnumField.md#def)
- [defaultValue](Backland.EnumField.md#defaultvalue)
- [describe](Backland.EnumField.md#describe)
- [describeField](Backland.EnumField.md#describefield)
- [description](Backland.EnumField.md#description)
- [hidden](Backland.EnumField.md#hidden)
- [id](Backland.EnumField.md#id)
- [list](Backland.EnumField.md#list)
- [name](Backland.EnumField.md#name)
- [optional](Backland.EnumField.md#optional)
- [options](Backland.EnumField.md#options)
- [parse](Backland.EnumField.md#parse)
- [type](Backland.EnumField.md#type)
- [typeName](Backland.EnumField.md#typename)
- [create](Backland.EnumField.md#create)

### Accessors

- [asFinalFieldDef](Backland.EnumField.md#asfinalfielddef)
- [definition](Backland.EnumField.md#definition)
- [value](Backland.EnumField.md#value)

### Methods

- [is](Backland.EnumField.md#is)
- [setDefaultValue](Backland.EnumField.md#setdefaultvalue)
- [toList](Backland.EnumField.md#tolist)
- [toOptional](Backland.EnumField.md#tooptional)
- [toRequired](Backland.EnumField.md#torequired)
- [validate](Backland.EnumField.md#validate)

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

### \_\_\_inferable

• **\_\_\_inferable**: `T`[`number`] extends `R` ? `R` : `never`

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

• **clone**: () => [`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[clone](Backland.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland.md#fieldcomposer)<`Record`<`string`, `any`\>, `T`[`number`]\>

#### Inherited from

[FieldType](Backland.FieldType.md).[composer](Backland.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `T`

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

• **describe**: (`description`: `string`) => [`EnumField`](Backland.EnumField.md)<`U`, `T`\>

#### Type declaration

▸ (`description`): [`EnumField`](Backland.EnumField.md)<`U`, `T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`EnumField`](Backland.EnumField.md)<`U`, `T`\>

#### Inherited from

[FieldType](Backland.FieldType.md).[describe](Backland.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `T` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `T`[`number`]  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `T` |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `T`[`number`] |

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

• **parse**: [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<`T`[`number`]\>

#### Overrides

[FieldType](Backland.FieldType.md).[parse](Backland.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/EnumField.d.ts:3

___

### type

• **type**: ``"enum"``

#### Inherited from

[FieldType](Backland.FieldType.md).[type](Backland.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"enum"``

#### Inherited from

[FieldType](Backland.FieldType.md).[typeName](Backland.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: <U_1, T_1\>(`def`: `T_1`) => [`FieldType`](Backland.FieldType.md)<`T_1`[`number`], ``"enum"``, `T_1`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ <`U_1`, `T_1`\>(`def`): [`FieldType`](Backland.FieldType.md)<`T_1`[`number`], ``"enum"``, `T_1`, ``0``, ``0``, `undefined`, {}\>

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

[`FieldType`](Backland.FieldType.md)<`T_1`[`number`], ``"enum"``, `T_1`, ``0``, ``0``, `undefined`, {}\>

#### Overrides

[FieldType](Backland.FieldType.md).[create](Backland.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/EnumField.d.ts:6

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

[FieldType](Backland.FieldType.md).[is](Backland.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[setDefaultValue](Backland.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toList](Backland.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toOptional](Backland.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toRequired](Backland.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

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

[FieldType](Backland.FieldType.md).[validate](Backland.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34
