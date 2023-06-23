[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / AliasField

# Class: AliasField<InputDef\>

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).AliasField

## Type parameters

| Name | Type |
| :------ | :------ |
| `InputDef` | extends [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef) = `any` |

## Hierarchy

- [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`InputDef` extends { `type`: infer T  } ? [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef)\>

  ↳ **`AliasField`**

## Table of contents

### Constructors

- [constructor](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#constructor)

### Properties

- [$](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#$)
- [\_\_\_inferable](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#___inferable)
- [\_\_isFieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#__isfieldtype)
- [composer](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#composer)
- [def](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#def)
- [defaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#defaultvalue)
- [description](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#description)
- [hidden](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#hidden)
- [id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#id)
- [list](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#list)
- [name](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#name)
- [optional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#optional)
- [options](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#options)
- [parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#parse)
- [type](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#type)
- [typeName](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#typename)
- [utils](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#utils)

### Accessors

- [asFinalFieldDef](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#asfinalfielddef)
- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#definition)

### Methods

- [applyParser](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#applyparser)
- [clone](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#clone)
- [describe](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#describe)
- [describeField](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#describefield)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#is)
- [setDefaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#setdefaultvalue)
- [toList](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#tolist)
- [toOptional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#tooptional)
- [toRequired](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#torequired)
- [validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#validate)
- [assert](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#assert)
- [create](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#create)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md#is-1)

## Constructors

### constructor

• **new AliasField**<`InputDef`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDef` | extends [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef) |

#### Overrides

FieldType&lt;
  InputDef extends { type: infer T } ? Infer&lt;T\&gt; : any,
  &#x27;alias&#x27;,
  AliasFieldDef
\&gt;.constructor

#### Defined in

packages/schema/src/fields/AliasField.ts:58

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[$](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#$)

#### Defined in

packages/schema/src/fields/FieldType.ts:140

___

### \_\_\_inferable

• **\_\_\_inferable**: `InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`\> : `any` extends `R` ? `R` : `never`

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

• **composer**: [`FieldComposer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, `any`\>

#### Overrides

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[composer](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)

#### Defined in

packages/schema/src/fields/AliasField.ts:48

___

### def

• `Readonly` **def**: [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef)

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

• **parse**: [`FieldTypeParser`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`any`\>

#### Overrides

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)

#### Defined in

packages/schema/src/fields/AliasField.ts:42

___

### type

• **type**: ``"alias"``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[type](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)

#### Defined in

packages/schema/src/fields/FieldType.ts:55

___

### typeName

• `Readonly` **typeName**: ``"alias"``

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
| `fieldType` | [`TAnyFieldType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype) |

#### Defined in

packages/schema/src/fields/AliasField.ts:44

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

▸ **is**(`input`): input is InputDef extends Object ? Infer<T\> : any

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is InputDef extends Object ? Infer<T\> : any

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)

#### Defined in

packages/schema/src/fields/FieldType.ts:131

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[setDefaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/src/fields/FieldType.ts:183

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toList](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)

#### Defined in

packages/schema/src/fields/FieldType.ts:172

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toOptional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)

#### Defined in

packages/schema/src/fields/FieldType.ts:160

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toRequired](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)

#### Defined in

packages/schema/src/fields/FieldType.ts:166

___

### validate

▸ **validate**(`input`): input is InputDef extends Object ? Infer<T\> : any

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is InputDef extends Object ? Infer<T\> : any

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)

#### Defined in

packages/schema/src/fields/FieldType.ts:122

___

### assert

▸ `Static` **assert**(`input`): asserts input is AliasField<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

asserts input is AliasField<any\>

#### Defined in

packages/schema/src/fields/AliasField.ts:54

___

### create

▸ `Static` **create**(`def`): [`AliasField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`AliasFieldDef`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#aliasfielddef) |

#### Returns

[`AliasField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.AliasField.md)<`any`\>

#### Overrides

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[create](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

#### Defined in

packages/schema/src/fields/AliasField.ts:96

___

### is

▸ `Static` **is**(`input`): input is AliasField<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is AliasField<any\>

#### Defined in

packages/schema/src/fields/AliasField.ts:50
