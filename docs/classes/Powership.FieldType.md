[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / FieldType

# Class: FieldType<Type, TypeName, Def, List, Optional, DefaultValue, Options\>

[Powership](../modules/Powership.md).FieldType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `TypeName` | extends `FieldTypeName` |
| `Def` | extends `FieldDefinitions`[`TypeName`] |
| `List` | extends ``1`` \| ``0`` = ``0`` |
| `Optional` | extends ``1`` \| ``0`` = ``0`` |
| `DefaultValue` | extends `unknown` \| `undefined` = `undefined` |
| `Options` | extends [`FieldTypeOptions`](../modules/Powership.md#fieldtypeoptions) = {} |

## Table of contents

### Properties

- [$](Powership.FieldType.md#$)
- [\_\_\_inferable](Powership.FieldType.md#___inferable)
- [\_\_isFieldType](Powership.FieldType.md#__isfieldtype)
- [applyParser](Powership.FieldType.md#applyparser)
- [clone](Powership.FieldType.md#clone)
- [composer](Powership.FieldType.md#composer)
- [def](Powership.FieldType.md#def)
- [defaultValue](Powership.FieldType.md#defaultvalue)
- [describe](Powership.FieldType.md#describe)
- [describeField](Powership.FieldType.md#describefield)
- [description](Powership.FieldType.md#description)
- [hidden](Powership.FieldType.md#hidden)
- [id](Powership.FieldType.md#id)
- [list](Powership.FieldType.md#list)
- [name](Powership.FieldType.md#name)
- [optional](Powership.FieldType.md#optional)
- [options](Powership.FieldType.md#options)
- [parse](Powership.FieldType.md#parse)
- [type](Powership.FieldType.md#type)
- [typeName](Powership.FieldType.md#typename)

### Accessors

- [asFinalFieldDef](Powership.FieldType.md#asfinalfielddef)
- [definition](Powership.FieldType.md#definition)

### Methods

- [is](Powership.FieldType.md#is)
- [setDefaultValue](Powership.FieldType.md#setdefaultvalue)
- [toList](Powership.FieldType.md#tolist)
- [toOptional](Powership.FieldType.md#tooptional)
- [toRequired](Powership.FieldType.md#torequired)
- [validate](Powership.FieldType.md#validate)
- [create](Powership.FieldType.md#create)

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md)

#### Defined in

packages/schema/out/fields/FieldType.d.ts:41

___

### \_\_\_inferable

• **\_\_\_inferable**: [`List`] extends [``1``] ? `Type`[] : `Type` extends `R` ? [`Optional`] extends [``1``] ? `undefined` \| `R` : `R` : `never`

#### Defined in

packages/schema/out/fields/FieldType.d.ts:22

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Defined in

packages/schema/out/fields/FieldType.d.ts:63

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

#### Defined in

packages/schema/out/fields/FieldType.d.ts:57

___

### clone

• **clone**: () => [`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Type declaration

▸ (): [`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

##### Returns

[`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/out/fields/FieldType.d.ts:65

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership.md#fieldcomposer)<`Record`<`string`, `any`\>, `Type`\>

#### Defined in

packages/schema/out/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `Def`

#### Defined in

packages/schema/out/fields/FieldType.d.ts:21

___

### defaultValue

• **defaultValue**: `DefaultValue`

#### Defined in

packages/schema/out/fields/FieldType.d.ts:38

___

### describe

• **describe**: (`description`: `string`) => [`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Type declaration

▸ (`description`): [`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/out/fields/FieldType.d.ts:42

___

### describeField

• **describeField**: () => { `$?`: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) ; `def`: `Def` ; `defaultValue`: `DefaultValue` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: [`List`] extends [``1``] ? ``true`` : ``false`` ; `optional`: [`Optional`] extends [``1``] ? ``true`` : ``false`` ; `type`: `Type`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$?` | [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) |
| `def` | `Def` |
| `defaultValue` | `DefaultValue` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | [`List`] extends [``1``] ? ``true`` : ``false`` |
| `optional` | [`Optional`] extends [``1``] ? ``true`` : ``false`` |
| `type` | `Type` |

#### Defined in

packages/schema/out/fields/FieldType.d.ts:43

___

### description

• `Optional` **description**: `string`

#### Defined in

packages/schema/out/fields/FieldType.d.ts:39

___

### hidden

• `Optional` **hidden**: `boolean`

#### Defined in

packages/schema/out/fields/FieldType.d.ts:40

___

### id

• `Optional` **id**: `string`

#### Defined in

packages/schema/out/fields/FieldType.d.ts:25

___

### list

• **list**: [`List`] extends [``1``] ? ``true`` : ``false``

#### Defined in

packages/schema/out/fields/FieldType.d.ts:37

___

### name

• `Optional` **name**: `string`

#### Defined in

packages/schema/out/fields/FieldType.d.ts:26

___

### optional

• **optional**: [`Optional`] extends [``1``] ? ``true`` : ``false``

#### Defined in

packages/schema/out/fields/FieldType.d.ts:36

___

### options

• **options**: `Options`

#### Defined in

packages/schema/out/fields/FieldType.d.ts:27

___

### parse

• `Abstract` **parse**: [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`Type`\>

#### Defined in

packages/schema/out/fields/FieldType.d.ts:62

___

### type

• **type**: `TypeName`

#### Defined in

packages/schema/out/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: `TypeName`

#### Defined in

packages/schema/out/fields/FieldType.d.ts:19

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

packages/schema/out/fields/FieldType.d.ts:61

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

packages/schema/out/fields/FieldType.d.ts:24

## Methods

### is

▸ **is**(`input`): input is Type

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Type

#### Defined in

packages/schema/out/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Defined in

packages/schema/out/fields/FieldType.d.ts:56

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ListDefinitionTruthy` |

#### Returns

[`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/out/fields/FieldType.d.ts:55

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/out/fields/FieldType.d.ts:53

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Powership.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Defined in

packages/schema/out/fields/FieldType.d.ts:54

___

### validate

▸ **validate**(`input`): input is Type

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Type

#### Defined in

packages/schema/out/fields/FieldType.d.ts:34

___

### create

▸ `Static` **create**(`..._args`): [`TAnyFieldType`](../modules/Powership.md#tanyfieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `any`[] |

#### Returns

[`TAnyFieldType`](../modules/Powership.md#tanyfieldtype)

#### Defined in

packages/schema/out/fields/FieldType.d.ts:64
