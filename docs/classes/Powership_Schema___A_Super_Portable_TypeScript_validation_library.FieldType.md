[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / FieldType

# Class: FieldType<Type, TypeName, Def, List, Optional, DefaultValue, Options\>

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).FieldType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Type` |
| `TypeName` | extends `FieldTypeName` |
| `Def` | extends `FieldDefinitions`[`TypeName`] |
| `List` | extends ``1`` \| ``0`` = ``0`` |
| `Optional` | extends ``1`` \| ``0`` = ``0`` |
| `DefaultValue` | extends `unknown` \| `undefined` = `undefined` |
| `Options` | extends [`FieldTypeOptions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeoptions) = {} |

## Table of contents

### Properties

- [$](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#$)
- [\_\_\_inferable](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#___inferable)
- [\_\_isFieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#__isfieldtype)
- [composer](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)
- [def](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#def)
- [defaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#defaultvalue)
- [description](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#description)
- [hidden](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#hidden)
- [id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#id)
- [list](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#list)
- [name](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#name)
- [optional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#optional)
- [options](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#options)
- [parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)
- [type](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)
- [typeName](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#typename)

### Accessors

- [asFinalFieldDef](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#asfinalfielddef)
- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#definition)

### Methods

- [applyParser](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#applyparser)
- [clone](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#clone)
- [describe](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describe)
- [describeField](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describefield)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)
- [setDefaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)
- [toList](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)
- [toOptional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)
- [toRequired](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)
- [validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)
- [create](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.CustomFieldConfig.md)

#### Defined in

[packages/schema/src/fields/FieldType.ts:139](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L139)

___

### \_\_\_inferable

• **\_\_\_inferable**: [`List`] extends [``1``] ? `Type`[] : `Type` extends `R` ? [`Optional`] extends [``1``] ? `undefined` \| `R` : `R` : `never`

#### Defined in

[packages/schema/src/fields/FieldType.ts:58](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L58)

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Defined in

[packages/schema/src/fields/FieldType.ts:287](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L287)

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, `Type`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:64](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L64)

___

### def

• `Readonly` **def**: `Def`

#### Defined in

[packages/schema/src/fields/FieldType.ts:56](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L56)

___

### defaultValue

• **defaultValue**: `DefaultValue`

#### Defined in

[packages/schema/src/fields/FieldType.ts:136](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L136)

___

### description

• `Optional` **description**: `string`

#### Defined in

[packages/schema/src/fields/FieldType.ts:137](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L137)

___

### hidden

• `Optional` **hidden**: `boolean`

#### Defined in

[packages/schema/src/fields/FieldType.ts:138](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L138)

___

### id

• `Optional` **id**: `string`

#### Defined in

[packages/schema/src/fields/FieldType.ts:70](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L70)

___

### list

• **list**: [`List`] extends [``1``] ? ``true`` : ``false``

#### Defined in

[packages/schema/src/fields/FieldType.ts:135](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L135)

___

### name

• `Optional` **name**: `string`

#### Defined in

[packages/schema/src/fields/FieldType.ts:71](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L71)

___

### optional

• **optional**: [`Optional`] extends [``1``] ? ``true`` : ``false``

#### Defined in

[packages/schema/src/fields/FieldType.ts:134](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L134)

___

### options

• **options**: `Options`

#### Defined in

[packages/schema/src/fields/FieldType.ts:72](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L72)

___

### parse

• `Abstract` **parse**: [`FieldTypeParser`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:285](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L285)

___

### type

• **type**: `TypeName`

#### Defined in

[packages/schema/src/fields/FieldType.ts:54](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L54)

___

### typeName

• `Readonly` **typeName**: `TypeName`

#### Defined in

[packages/schema/src/fields/FieldType.ts:53](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L53)

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

[packages/schema/src/fields/FieldType.ts:264](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L264)

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Defined in

[packages/schema/src/fields/FieldType.ts:66](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L66)

## Methods

### applyParser

▸ **applyParser**<`Type`\>(`parser`): [`FieldTypeParser`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | `Object` |
| `parser.parse` | (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject)) => `Type` |
| `parser.preParse?` | (`input`: `any`) => `Type` |

#### Returns

[`FieldTypeParser`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:190](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L190)

___

### clone

▸ **clone**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:293](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L293)

___

### describe

▸ **describe**(`description`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`this`

#### Defined in

[packages/schema/src/fields/FieldType.ts:141](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L141)

___

### describeField

▸ **describeField**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$?` | [`CustomFieldConfig`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.CustomFieldConfig.md) |
| `def` | `Def` |
| `defaultValue` | `DefaultValue` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | [`List`] extends [``1``] ? ``true`` : ``false`` |
| `optional` | [`Optional`] extends [``1``] ? ``true`` : ``false`` |
| `type` | `Type` |

#### Defined in

[packages/schema/src/fields/FieldType.ts:146](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L146)

___

### is

▸ **is**(`input`): input is Type

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Type

#### Defined in

[packages/schema/src/fields/FieldType.ts:130](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L130)

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `T`, `Options`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:182](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L182)

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ListDefinitionTruthy` |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, ``1``, `Optional`, `DefaultValue`, `Options`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:171](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L171)

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``1``, `DefaultValue`, `Options`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:159](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L159)

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, ``0``, `DefaultValue`, `Options`\>

#### Defined in

[packages/schema/src/fields/FieldType.ts:165](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L165)

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

[packages/schema/src/fields/FieldType.ts:121](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L121)

___

### create

▸ `Static` **create**(`..._args`): [`TAnyFieldType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `any`[] |

#### Returns

[`TAnyFieldType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)

#### Defined in

[packages/schema/src/fields/FieldType.ts:289](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldType.ts#L289)
