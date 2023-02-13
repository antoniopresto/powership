[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / AliasField

# Class: AliasField<InputDef\>

[Backland](../modules/Backland.md).AliasField

## Type parameters

| Name | Type |
| :------ | :------ |
| `InputDef` | extends [`AliasFieldDef`](../modules/Backland.md#aliasfielddef) = `any` |

## Hierarchy

- [`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: infer T  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef)\>

  ↳ **`AliasField`**

## Table of contents

### Constructors

- [constructor](Backland.AliasField.md#constructor)

### Properties

- [\_\_\_inferable](Backland.AliasField.md#___inferable)
- [\_\_isFieldType](Backland.AliasField.md#__isfieldtype)
- [applyParser](Backland.AliasField.md#applyparser)
- [clone](Backland.AliasField.md#clone)
- [composer](Backland.AliasField.md#composer)
- [def](Backland.AliasField.md#def)
- [defaultValue](Backland.AliasField.md#defaultvalue)
- [describe](Backland.AliasField.md#describe)
- [describeField](Backland.AliasField.md#describefield)
- [description](Backland.AliasField.md#description)
- [hidden](Backland.AliasField.md#hidden)
- [id](Backland.AliasField.md#id)
- [list](Backland.AliasField.md#list)
- [name](Backland.AliasField.md#name)
- [optional](Backland.AliasField.md#optional)
- [options](Backland.AliasField.md#options)
- [parse](Backland.AliasField.md#parse)
- [type](Backland.AliasField.md#type)
- [typeName](Backland.AliasField.md#typename)
- [utils](Backland.AliasField.md#utils)
- [create](Backland.AliasField.md#create)

### Accessors

- [asFinalFieldDef](Backland.AliasField.md#asfinalfielddef)
- [definition](Backland.AliasField.md#definition)

### Methods

- [is](Backland.AliasField.md#is)
- [setDefaultValue](Backland.AliasField.md#setdefaultvalue)
- [toList](Backland.AliasField.md#tolist)
- [toOptional](Backland.AliasField.md#tooptional)
- [toRequired](Backland.AliasField.md#torequired)
- [validate](Backland.AliasField.md#validate)
- [assert](Backland.AliasField.md#assert)
- [is](Backland.AliasField.md#is-1)

## Constructors

### constructor

• **new AliasField**<`InputDef`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDef` | extends [`AliasFieldDef`](../modules/Backland.md#aliasfielddef) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`AliasFieldDef`](../modules/Backland.md#aliasfielddef) |

#### Overrides

FieldType&lt;InputDef extends {
    type: infer T;
} ? Infer&lt;T\&gt; : any, &#x27;alias&#x27;, AliasFieldDef\&gt;.constructor

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:28

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: `InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any` extends `R` ? `R` : `never`

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

• **clone**: () => [`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[clone](Backland.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: [`FieldComposer`](../modules/Backland.md#fieldcomposer)<`Record`<`string`, `any`\>, `any`\>

#### Overrides

[FieldType](Backland.FieldType.md).[composer](Backland.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:25

___

### def

• `Readonly` **def**: [`AliasFieldDef`](../modules/Backland.md#aliasfielddef)

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

• **describe**: (`description`: `string`) => [`AliasField`](Backland.AliasField.md)<`InputDef`\>

#### Type declaration

▸ (`description`): [`AliasField`](Backland.AliasField.md)<`InputDef`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`AliasField`](Backland.AliasField.md)<`InputDef`\>

#### Inherited from

[FieldType](Backland.FieldType.md).[describe](Backland.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: [`AliasFieldDef`](../modules/Backland.md#aliasfielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | [`AliasFieldDef`](../modules/Backland.md#aliasfielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any` |

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

• **parse**: [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<`any`\>

#### Overrides

[FieldType](Backland.FieldType.md).[parse](Backland.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:21

___

### type

• **type**: ``"alias"``

#### Inherited from

[FieldType](Backland.FieldType.md).[type](Backland.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"alias"``

#### Inherited from

[FieldType](Backland.FieldType.md).[typeName](Backland.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fieldType` | [`TAnyFieldType`](../modules/Backland.md#tanyfieldtype) |

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:22

___

### create

▪ `Static` **create**: (`def`: [`AliasFieldDef`](../modules/Backland.md#aliasfielddef)) => [`AliasField`](Backland.AliasField.md)<`any`\>

#### Type declaration

▸ (`def`): [`AliasField`](Backland.AliasField.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`AliasFieldDef`](../modules/Backland.md#aliasfielddef) |

##### Returns

[`AliasField`](Backland.AliasField.md)<`any`\>

#### Overrides

[FieldType](Backland.FieldType.md).[create](Backland.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:29

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

[FieldType](Backland.FieldType.md).[is](Backland.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[setDefaultValue](Backland.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toList](Backland.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toOptional](Backland.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Backland.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Backland.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toRequired](Backland.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

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

[FieldType](Backland.FieldType.md).[validate](Backland.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34

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
