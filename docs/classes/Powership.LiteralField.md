[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / LiteralField

# Class: LiteralField<T\>

[Powership](../modules/Powership.md).LiteralField

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Readonly`<[`Serializable`](../modules/Powership.TU.md#serializable)\> |

## Hierarchy

- [`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md)\>

  ↳ **`LiteralField`**

## Table of contents

### Constructors

- [constructor](Powership.LiteralField.md#constructor)

### Properties

- [$](Powership.LiteralField.md#$)
- [\_\_\_inferable](Powership.LiteralField.md#___inferable)
- [\_\_isFieldType](Powership.LiteralField.md#__isfieldtype)
- [\_\_isLiteralField](Powership.LiteralField.md#__isliteralfield)
- [applyParser](Powership.LiteralField.md#applyparser)
- [clone](Powership.LiteralField.md#clone)
- [composer](Powership.LiteralField.md#composer)
- [def](Powership.LiteralField.md#def)
- [defaultValue](Powership.LiteralField.md#defaultvalue)
- [describe](Powership.LiteralField.md#describe)
- [describeField](Powership.LiteralField.md#describefield)
- [description](Powership.LiteralField.md#description)
- [hidden](Powership.LiteralField.md#hidden)
- [id](Powership.LiteralField.md#id)
- [list](Powership.LiteralField.md#list)
- [name](Powership.LiteralField.md#name)
- [optional](Powership.LiteralField.md#optional)
- [options](Powership.LiteralField.md#options)
- [parse](Powership.LiteralField.md#parse)
- [type](Powership.LiteralField.md#type)
- [typeName](Powership.LiteralField.md#typename)
- [create](Powership.LiteralField.md#create)
- [utils](Powership.LiteralField.md#utils)

### Accessors

- [asFinalFieldDef](Powership.LiteralField.md#asfinalfielddef)
- [definition](Powership.LiteralField.md#definition)

### Methods

- [is](Powership.LiteralField.md#is)
- [setDefaultValue](Powership.LiteralField.md#setdefaultvalue)
- [toList](Powership.LiteralField.md#tolist)
- [toOptional](Powership.LiteralField.md#tooptional)
- [toRequired](Powership.LiteralField.md#torequired)
- [validate](Powership.LiteralField.md#validate)
- [is](Powership.LiteralField.md#is-1)
- [isFinalTypeDef](Powership.LiteralField.md#isfinaltypedef)
- [isLiteralFieldDef](Powership.LiteralField.md#isliteralfielddef)

## Constructors

### constructor

• **new LiteralField**<`T`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Readonly`<[`Serializable`](../modules/Powership.TU.md#serializable)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Overrides

FieldType&lt;T, &#x27;literal&#x27;, LiteralFieldDef\&gt;.constructor

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:15

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership.FieldType.md).[$](Powership.FieldType.md#$)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:42

___

### \_\_\_inferable

• **\_\_\_inferable**: `T` extends `R` ? `R` : `never`

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

### \_\_isLiteralField

• **\_\_isLiteralField**: `boolean`

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:9

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

• **clone**: () => [`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[clone](Powership.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:66

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership.md#fieldcomposer)<`Record`<`string`, `any`\>, `T`\>

#### Inherited from

[FieldType](Powership.FieldType.md).[composer](Powership.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:24

___

### def

• `Readonly` **def**: [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md)

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

• **describe**: (`description`: `string`) => [`LiteralField`](Powership.LiteralField.md)<`T`\>

#### Type declaration

▸ (`description`): [`LiteralField`](Powership.LiteralField.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`LiteralField`](Powership.LiteralField.md)<`T`\>

#### Inherited from

[FieldType](Powership.FieldType.md).[describe](Powership.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:43

___

### describeField

• **describeField**: () => { `$?`: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) ; `def`: [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `T`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$?` | [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) |
| `def` | [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `T` |

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

• **parse**: [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`T`\>

#### Overrides

[FieldType](Powership.FieldType.md).[parse](Powership.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:8

___

### type

• **type**: ``"literal"``

#### Inherited from

[FieldType](Powership.FieldType.md).[type](Powership.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:21

___

### typeName

• `Readonly` **typeName**: ``"literal"``

#### Inherited from

[FieldType](Powership.FieldType.md).[typeName](Powership.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### create

▪ `Static` **create**: <T_1\>(`def`: `T_1`) => [`LiteralField`](Powership.LiteralField.md)<`T_1`\>

#### Type declaration

▸ <`T_1`\>(`def`): [`LiteralField`](Powership.LiteralField.md)<`T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends `Readonly`<[`Serializable`](../modules/Powership.TU.md#serializable)\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T_1` |

##### Returns

[`LiteralField`](Powership.LiteralField.md)<`T_1`\>

#### Overrides

[FieldType](Powership.FieldType.md).[create](Powership.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:16

___

### utils

▪ `Static` **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deserialize` | (`def`: [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md)) => `any` |
| `serialize` | (`value`: `any`) => `string` |
| `toDef` | (`input`: `any`) => [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md) |

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:10

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

▸ **is**(`input`): input is T

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is T

#### Inherited from

[FieldType](Powership.FieldType.md).[is](Powership.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:36

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[setDefaultValue](Powership.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:57

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toList](Powership.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:56

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toOptional](Powership.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Powership.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toRequired](Powership.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

___

### validate

▸ **validate**(`input`): input is T

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is T

#### Inherited from

[FieldType](Powership.FieldType.md).[validate](Powership.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### is

▸ `Static` **is**(`t`): t is LiteralField<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

t is LiteralField<any\>

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:18

___

### isFinalTypeDef

▸ `Static` **isFinalTypeDef**(`t`): t is LiteralField<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

t is LiteralField<any\>

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:17

___

### isLiteralFieldDef

▸ `Static` **isLiteralFieldDef**(`t`): t is LiteralFieldDef

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

t is LiteralFieldDef

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:19
