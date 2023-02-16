[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / EnumField

# Class: EnumField<U, T\>

[Solarwind](../modules/Solarwind.md).EnumField

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` |
| `T` | extends `Readonly`<[`U`, ...U[]]\> |

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`\>

  ↳ **`EnumField`**

## Table of contents

### Constructors

- [constructor](Solarwind.EnumField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.EnumField.md#___inferable)
- [\_\_isFieldType](Solarwind.EnumField.md#__isfieldtype)
- [applyParser](Solarwind.EnumField.md#applyparser)
- [clone](Solarwind.EnumField.md#clone)
- [composer](Solarwind.EnumField.md#composer)
- [def](Solarwind.EnumField.md#def)
- [defaultValue](Solarwind.EnumField.md#defaultvalue)
- [describe](Solarwind.EnumField.md#describe)
- [describeField](Solarwind.EnumField.md#describefield)
- [description](Solarwind.EnumField.md#description)
- [hidden](Solarwind.EnumField.md#hidden)
- [id](Solarwind.EnumField.md#id)
- [list](Solarwind.EnumField.md#list)
- [name](Solarwind.EnumField.md#name)
- [optional](Solarwind.EnumField.md#optional)
- [options](Solarwind.EnumField.md#options)
- [parse](Solarwind.EnumField.md#parse)
- [type](Solarwind.EnumField.md#type)
- [typeName](Solarwind.EnumField.md#typename)
- [create](Solarwind.EnumField.md#create)

### Accessors

- [asFinalFieldDef](Solarwind.EnumField.md#asfinalfielddef)
- [definition](Solarwind.EnumField.md#definition)
- [value](Solarwind.EnumField.md#value)

### Methods

- [is](Solarwind.EnumField.md#is)
- [setDefaultValue](Solarwind.EnumField.md#setdefaultvalue)
- [toList](Solarwind.EnumField.md#tolist)
- [toOptional](Solarwind.EnumField.md#tooptional)
- [toRequired](Solarwind.EnumField.md#torequired)
- [validate](Solarwind.EnumField.md#validate)

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

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[clone](Solarwind.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, `T`[`number`]\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[composer](Solarwind.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `T`

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

• **describe**: (`description`: `string`) => [`EnumField`](Solarwind.EnumField.md)<`U`, `T`\>

#### Type declaration

▸ (`description`): [`EnumField`](Solarwind.EnumField.md)<`U`, `T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`EnumField`](Solarwind.EnumField.md)<`U`, `T`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

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

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`T`[`number`]\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/EnumField.d.ts:3

___

### type

• **type**: ``"enum"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"enum"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[typeName](Solarwind.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: <U_1, T_1\>(`def`: `T_1`) => [`FieldType`](Solarwind.FieldType.md)<`T_1`[`number`], ``"enum"``, `T_1`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ <`U_1`, `T_1`\>(`def`): [`FieldType`](Solarwind.FieldType.md)<`T_1`[`number`], ``"enum"``, `T_1`, ``0``, ``0``, `undefined`, {}\>

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

[`FieldType`](Solarwind.FieldType.md)<`T_1`[`number`], ``"enum"``, `T_1`, ``0``, ``0``, `undefined`, {}\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/EnumField.d.ts:6

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

[FieldType](Solarwind.FieldType.md).[is](Solarwind.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`T`[`number`], ``"enum"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toRequired](Solarwind.FieldType.md#torequired)

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

[FieldType](Solarwind.FieldType.md).[validate](Solarwind.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34
