[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / AliasField

# Class: AliasField<InputDef\>

[Powership](../modules/Powership.md).AliasField

## Type parameters

| Name | Type |
| :------ | :------ |
| `InputDef` | extends [`AliasFieldDef`](../modules/Powership.md#aliasfielddef) = `any` |

## Hierarchy

- [`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: infer T  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef)\>

  ↳ **`AliasField`**

## Table of contents

### Constructors

- [constructor](Powership.AliasField.md#constructor)

### Properties

- [$](Powership.AliasField.md#$)
- [\_\_\_inferable](Powership.AliasField.md#___inferable)
- [\_\_isFieldType](Powership.AliasField.md#__isfieldtype)
- [applyParser](Powership.AliasField.md#applyparser)
- [clone](Powership.AliasField.md#clone)
- [composer](Powership.AliasField.md#composer)
- [def](Powership.AliasField.md#def)
- [defaultValue](Powership.AliasField.md#defaultvalue)
- [describe](Powership.AliasField.md#describe)
- [describeField](Powership.AliasField.md#describefield)
- [description](Powership.AliasField.md#description)
- [hidden](Powership.AliasField.md#hidden)
- [id](Powership.AliasField.md#id)
- [list](Powership.AliasField.md#list)
- [name](Powership.AliasField.md#name)
- [optional](Powership.AliasField.md#optional)
- [options](Powership.AliasField.md#options)
- [parse](Powership.AliasField.md#parse)
- [type](Powership.AliasField.md#type)
- [typeName](Powership.AliasField.md#typename)
- [utils](Powership.AliasField.md#utils)
- [create](Powership.AliasField.md#create)

### Accessors

- [asFinalFieldDef](Powership.AliasField.md#asfinalfielddef)
- [definition](Powership.AliasField.md#definition)

### Methods

- [is](Powership.AliasField.md#is)
- [setDefaultValue](Powership.AliasField.md#setdefaultvalue)
- [toList](Powership.AliasField.md#tolist)
- [toOptional](Powership.AliasField.md#tooptional)
- [toRequired](Powership.AliasField.md#torequired)
- [validate](Powership.AliasField.md#validate)
- [assert](Powership.AliasField.md#assert)
- [is](Powership.AliasField.md#is-1)

## Constructors

### constructor

• **new AliasField**<`InputDef`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDef` | extends [`AliasFieldDef`](../modules/Powership.md#aliasfielddef) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`AliasFieldDef`](../modules/Powership.md#aliasfielddef) |

#### Overrides

FieldType&lt;InputDef extends {
    type: infer T;
} ? Infer&lt;T\&gt; : any, &#x27;alias&#x27;, AliasFieldDef\&gt;.constructor

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:28

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership.FieldType.md).[$](Powership.FieldType.md#$)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:42

___

### \_\_\_inferable

• **\_\_\_inferable**: `InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any` extends `R` ? `R` : `never`

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

• **clone**: () => [`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[clone](Powership.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:66

___

### composer

• **composer**: [`FieldComposer`](../modules/Powership.md#fieldcomposer)<`Record`<`string`, `any`\>, `any`\>

#### Overrides

[FieldType](Powership.FieldType.md).[composer](Powership.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:25

___

### def

• `Readonly` **def**: [`AliasFieldDef`](../modules/Powership.md#aliasfielddef)

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

• **describe**: (`description`: `string`) => [`AliasField`](Powership.AliasField.md)<`InputDef`\>

#### Type declaration

▸ (`description`): [`AliasField`](Powership.AliasField.md)<`InputDef`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`AliasField`](Powership.AliasField.md)<`InputDef`\>

#### Inherited from

[FieldType](Powership.FieldType.md).[describe](Powership.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:43

___

### describeField

• **describeField**: () => { `$?`: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) ; `def`: [`AliasFieldDef`](../modules/Powership.md#aliasfielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$?` | [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) |
| `def` | [`AliasFieldDef`](../modules/Powership.md#aliasfielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any` |

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

• **parse**: [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`any`\>

#### Overrides

[FieldType](Powership.FieldType.md).[parse](Powership.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:21

___

### type

• **type**: ``"alias"``

#### Inherited from

[FieldType](Powership.FieldType.md).[type](Powership.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:21

___

### typeName

• `Readonly` **typeName**: ``"alias"``

#### Inherited from

[FieldType](Powership.FieldType.md).[typeName](Powership.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fieldType` | [`TAnyFieldType`](../modules/Powership.md#tanyfieldtype) |

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:22

___

### create

▪ `Static` **create**: (`def`: [`AliasFieldDef`](../modules/Powership.md#aliasfielddef)) => [`AliasField`](Powership.AliasField.md)<`any`\>

#### Type declaration

▸ (`def`): [`AliasField`](Powership.AliasField.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`AliasFieldDef`](../modules/Powership.md#aliasfielddef) |

##### Returns

[`AliasField`](Powership.AliasField.md)<`any`\>

#### Overrides

[FieldType](Powership.FieldType.md).[create](Powership.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:29

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

▸ **is**(`input`): input is InputDef extends Object ? Infer<T\> : any

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is InputDef extends Object ? Infer<T\> : any

#### Inherited from

[FieldType](Powership.FieldType.md).[is](Powership.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:36

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[setDefaultValue](Powership.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:57

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toList](Powership.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:56

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toOptional](Powership.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Powership.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Powership.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toRequired](Powership.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

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

[FieldType](Powership.FieldType.md).[validate](Powership.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

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

packages/schema/lib/fields/AliasField.d.ts:27

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

packages/schema/lib/fields/AliasField.d.ts:26
