[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / LiteralField

# Class: LiteralField<T\>

[Solarwind](../modules/Solarwind.md).LiteralField

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Readonly`<`Serializable`\> |

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md)\>

  ↳ **`LiteralField`**

## Table of contents

### Constructors

- [constructor](Solarwind.LiteralField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.LiteralField.md#___inferable)
- [\_\_isFieldType](Solarwind.LiteralField.md#__isfieldtype)
- [\_\_isLiteralField](Solarwind.LiteralField.md#__isliteralfield)
- [applyParser](Solarwind.LiteralField.md#applyparser)
- [clone](Solarwind.LiteralField.md#clone)
- [composer](Solarwind.LiteralField.md#composer)
- [def](Solarwind.LiteralField.md#def)
- [defaultValue](Solarwind.LiteralField.md#defaultvalue)
- [describe](Solarwind.LiteralField.md#describe)
- [describeField](Solarwind.LiteralField.md#describefield)
- [description](Solarwind.LiteralField.md#description)
- [hidden](Solarwind.LiteralField.md#hidden)
- [id](Solarwind.LiteralField.md#id)
- [list](Solarwind.LiteralField.md#list)
- [name](Solarwind.LiteralField.md#name)
- [optional](Solarwind.LiteralField.md#optional)
- [options](Solarwind.LiteralField.md#options)
- [parse](Solarwind.LiteralField.md#parse)
- [type](Solarwind.LiteralField.md#type)
- [typeName](Solarwind.LiteralField.md#typename)
- [create](Solarwind.LiteralField.md#create)
- [utils](Solarwind.LiteralField.md#utils)

### Accessors

- [asFinalFieldDef](Solarwind.LiteralField.md#asfinalfielddef)
- [definition](Solarwind.LiteralField.md#definition)

### Methods

- [is](Solarwind.LiteralField.md#is)
- [setDefaultValue](Solarwind.LiteralField.md#setdefaultvalue)
- [toList](Solarwind.LiteralField.md#tolist)
- [toOptional](Solarwind.LiteralField.md#tooptional)
- [toRequired](Solarwind.LiteralField.md#torequired)
- [validate](Solarwind.LiteralField.md#validate)
- [is](Solarwind.LiteralField.md#is-1)
- [isFinalTypeDef](Solarwind.LiteralField.md#isfinaltypedef)
- [isLiteralFieldDef](Solarwind.LiteralField.md#isliteralfielddef)

## Constructors

### constructor

• **new LiteralField**<`T`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Readonly`<`Serializable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Overrides

FieldType&lt;T, &#x27;literal&#x27;, LiteralFieldDef\&gt;.constructor

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:15

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: `T` extends `R` ? `R` : `never`

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

### \_\_isLiteralField

• **\_\_isLiteralField**: `boolean`

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:9

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

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[clone](Solarwind.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, `T`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[composer](Solarwind.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md)

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

• **describe**: (`description`: `string`) => [`LiteralField`](Solarwind.LiteralField.md)<`T`\>

#### Type declaration

▸ (`description`): [`LiteralField`](Solarwind.LiteralField.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`LiteralField`](Solarwind.LiteralField.md)<`T`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `T`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `T` |

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

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`T`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:8

___

### type

• **type**: ``"literal"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"literal"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[typeName](Solarwind.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: <T_1\>(`def`: `T_1`) => [`LiteralField`](Solarwind.LiteralField.md)<`T_1`\>

#### Type declaration

▸ <`T_1`\>(`def`): [`LiteralField`](Solarwind.LiteralField.md)<`T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends `Readonly`<`Serializable`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T_1` |

##### Returns

[`LiteralField`](Solarwind.LiteralField.md)<`T_1`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:16

___

### utils

▪ `Static` **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deserialize` | (`def`: [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md)) => `any` |
| `serialize` | (`value`: `any`) => `string` |
| `toDef` | (`input`: `any`) => [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md) |

#### Defined in

packages/schema/lib/fields/LiteralField.d.ts:10

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

▸ **is**(`input`): input is T

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is T

#### Inherited from

[FieldType](Solarwind.FieldType.md).[is](Solarwind.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Solarwind.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toRequired](Solarwind.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

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

[FieldType](Solarwind.FieldType.md).[validate](Solarwind.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34

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
