[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / AliasField

# Class: AliasField<InputDef\>

[Solarwind](../modules/Solarwind.md).AliasField

## Type parameters

| Name | Type |
| :------ | :------ |
| `InputDef` | extends [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef) = `any` |

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: infer T  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef)\>

  ↳ **`AliasField`**

## Table of contents

### Constructors

- [constructor](Solarwind.AliasField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.AliasField.md#___inferable)
- [\_\_isFieldType](Solarwind.AliasField.md#__isfieldtype)
- [applyParser](Solarwind.AliasField.md#applyparser)
- [clone](Solarwind.AliasField.md#clone)
- [composer](Solarwind.AliasField.md#composer)
- [def](Solarwind.AliasField.md#def)
- [defaultValue](Solarwind.AliasField.md#defaultvalue)
- [describe](Solarwind.AliasField.md#describe)
- [describeField](Solarwind.AliasField.md#describefield)
- [description](Solarwind.AliasField.md#description)
- [hidden](Solarwind.AliasField.md#hidden)
- [id](Solarwind.AliasField.md#id)
- [list](Solarwind.AliasField.md#list)
- [name](Solarwind.AliasField.md#name)
- [optional](Solarwind.AliasField.md#optional)
- [options](Solarwind.AliasField.md#options)
- [parse](Solarwind.AliasField.md#parse)
- [type](Solarwind.AliasField.md#type)
- [typeName](Solarwind.AliasField.md#typename)
- [utils](Solarwind.AliasField.md#utils)
- [create](Solarwind.AliasField.md#create)

### Accessors

- [asFinalFieldDef](Solarwind.AliasField.md#asfinalfielddef)
- [definition](Solarwind.AliasField.md#definition)

### Methods

- [is](Solarwind.AliasField.md#is)
- [setDefaultValue](Solarwind.AliasField.md#setdefaultvalue)
- [toList](Solarwind.AliasField.md#tolist)
- [toOptional](Solarwind.AliasField.md#tooptional)
- [toRequired](Solarwind.AliasField.md#torequired)
- [validate](Solarwind.AliasField.md#validate)
- [assert](Solarwind.AliasField.md#assert)
- [is](Solarwind.AliasField.md#is-1)

## Constructors

### constructor

• **new AliasField**<`InputDef`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDef` | extends [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef) |

#### Overrides

FieldType&lt;InputDef extends {
    type: infer T;
} ? Infer&lt;T\&gt; : any, &#x27;alias&#x27;, AliasFieldDef\&gt;.constructor

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:28

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: `InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any` extends `R` ? `R` : `never`

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

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[clone](Solarwind.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, `any`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[composer](Solarwind.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:25

___

### def

• `Readonly` **def**: [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef)

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

• **describe**: (`description`: `string`) => [`AliasField`](Solarwind.AliasField.md)<`InputDef`\>

#### Type declaration

▸ (`description`): [`AliasField`](Solarwind.AliasField.md)<`InputDef`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`AliasField`](Solarwind.AliasField.md)<`InputDef`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef) ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: `InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef) |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | `InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any` |

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

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<`any`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:21

___

### type

• **type**: ``"alias"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"alias"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[typeName](Solarwind.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fieldType` | [`TAnyFieldType`](../modules/Solarwind.md#tanyfieldtype) |

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:22

___

### create

▪ `Static` **create**: (`def`: [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef)) => [`AliasField`](Solarwind.AliasField.md)<`any`\>

#### Type declaration

▸ (`def`): [`AliasField`](Solarwind.AliasField.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef) |

##### Returns

[`AliasField`](Solarwind.AliasField.md)<`any`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/AliasField.d.ts:29

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

▸ **is**(`input`): input is InputDef extends Object ? Infer<T\> : any

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is InputDef extends Object ? Infer<T\> : any

#### Inherited from

[FieldType](Solarwind.FieldType.md).[is](Solarwind.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<`InputDef` extends { `type`: `T`  } ? [`Infer`](../modules/Solarwind.md#infer)<`T`\> : `any`, ``"alias"``, [`AliasFieldDef`](../modules/Solarwind.md#aliasfielddef), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toRequired](Solarwind.FieldType.md#torequired)

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

[FieldType](Solarwind.FieldType.md).[validate](Solarwind.FieldType.md#validate)

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
