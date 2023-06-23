[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / UnionField

# Class: UnionField<U, T\>

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).UnionField

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`FieldDefinitionConfig`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fielddefinitionconfig) |
| `T` | extends `Readonly`<[`U`, ...U[]]\> |

## Hierarchy

- [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`\>

  ↳ **`UnionField`**

## Table of contents

### Constructors

- [constructor](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#constructor)

### Properties

- [$](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#$)
- [\_\_\_inferable](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#___inferable)
- [\_\_isFieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#__isfieldtype)
- [composer](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#composer)
- [def](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#def)
- [defaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#defaultvalue)
- [description](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#description)
- [hidden](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#hidden)
- [id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#id)
- [list](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#list)
- [name](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#name)
- [optional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#optional)
- [options](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#options)
- [parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#parse)
- [type](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#type)
- [typeName](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#typename)
- [utils](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#utils)

### Accessors

- [asFinalFieldDef](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#asfinalfielddef)
- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#definition)

### Methods

- [applyParser](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#applyparser)
- [clone](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#clone)
- [describe](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#describe)
- [describeField](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#describefield)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#is)
- [setDefaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#setdefaultvalue)
- [toList](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#tolist)
- [toOptional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#tooptional)
- [toRequired](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#torequired)
- [validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#validate)
- [create](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#create)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#is-1)

## Constructors

### constructor

• **new UnionField**<`U`, `T`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`ObjectFieldInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `T` | extends readonly [`U`, `U`, `T`] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Overrides

FieldType&lt;Infer&lt;T[number]\&gt;, &#x27;union&#x27;, T\&gt;.constructor

#### Defined in

packages/schema/src/fields/UnionField.ts:26

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[$](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#$)

#### Defined in

packages/schema/src/fields/FieldType.ts:140

___

### \_\_\_inferable

• **\_\_\_inferable**: [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\> extends `R` ? `R` : `never`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[___inferable](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#___inferable)

#### Defined in

packages/schema/src/fields/FieldType.ts:59

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[__isFieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#__isfieldtype)

#### Defined in

packages/schema/src/fields/FieldType.ts:288

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[composer](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)

#### Defined in

packages/schema/src/fields/FieldType.ts:65

___

### def

• `Readonly` **def**: `T`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[def](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#def)

#### Defined in

packages/schema/src/fields/FieldType.ts:57

___

### defaultValue

• **defaultValue**: `undefined`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[defaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#defaultvalue)

#### Defined in

packages/schema/src/fields/FieldType.ts:137

___

### description

• `Optional` **description**: `string`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[description](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#description)

#### Defined in

packages/schema/src/fields/FieldType.ts:138

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[hidden](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#hidden)

#### Defined in

packages/schema/src/fields/FieldType.ts:139

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#id)

#### Defined in

packages/schema/src/fields/FieldType.ts:71

___

### list

• **list**: ``false``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[list](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#list)

#### Defined in

packages/schema/src/fields/FieldType.ts:136

___

### name

• `Optional` **name**: `string`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[name](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#name)

#### Defined in

packages/schema/src/fields/FieldType.ts:72

___

### optional

• **optional**: ``false``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[optional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#optional)

#### Defined in

packages/schema/src/fields/FieldType.ts:135

___

### options

• **options**: `Object`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[options](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#options)

#### Defined in

packages/schema/src/fields/FieldType.ts:73

___

### parse

• **parse**: [`FieldTypeParser`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>\>

#### Overrides

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)

#### Defined in

packages/schema/src/fields/UnionField.ts:16

___

### type

• **type**: ``"union"``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[type](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)

#### Defined in

packages/schema/src/fields/FieldType.ts:55

___

### typeName

• `Readonly` **typeName**: ``"union"``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[typeName](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#typename)

#### Defined in

packages/schema/src/fields/FieldType.ts:54

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fieldTypes` | [`TAnyFieldType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)[] |

#### Defined in

packages/schema/src/fields/UnionField.ts:18

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.asFinalFieldDef

#### Defined in

packages/schema/src/fields/FieldType.ts:265

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.definition

#### Defined in

packages/schema/src/fields/FieldType.ts:67

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

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[applyParser](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#applyparser)

#### Defined in

packages/schema/src/fields/FieldType.ts:191

___

### clone

▸ **clone**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[clone](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#clone)

#### Defined in

packages/schema/src/fields/FieldType.ts:294

___

### describe

▸ **describe**(`description`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`this`

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[describe](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describe)

#### Defined in

packages/schema/src/fields/FieldType.ts:142

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

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[describeField](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describefield)

#### Defined in

packages/schema/src/fields/FieldType.ts:147

___

### is

▸ **is**(`input`): input is Infer<T[number]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Infer<T[number]\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)

#### Defined in

packages/schema/src/fields/FieldType.ts:131

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[setDefaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/src/fields/FieldType.ts:183

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toList](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)

#### Defined in

packages/schema/src/fields/FieldType.ts:172

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toOptional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)

#### Defined in

packages/schema/src/fields/FieldType.ts:160

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toRequired](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)

#### Defined in

packages/schema/src/fields/FieldType.ts:166

___

### validate

▸ **validate**(`input`): input is Infer<T[number]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Infer<T[number]\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)

#### Defined in

packages/schema/src/fields/FieldType.ts:122

___

### create

▸ `Static` **create**<`U`, `T`\>(`def`): [`UnionField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md)<`U`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`ObjectFieldInput`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `T` | extends readonly [`U`, `U`, `T`] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Returns

[`UnionField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md)<`U`, `T`\>

#### Overrides

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[create](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

#### Defined in

packages/schema/src/fields/UnionField.ts:89

___

### is

▸ `Static` **is**(`item`): item is UnionField<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

item is UnionField<any, any\>

#### Defined in

packages/schema/src/fields/UnionField.ts:22
