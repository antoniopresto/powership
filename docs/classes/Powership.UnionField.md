[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / UnionField

# Class: UnionField<U, T\>

[Powership](../modules/Powership.md).UnionField

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`FieldDefinitionConfig`](../modules/Powership.md#fielddefinitionconfig) |
| `T` | extends `Readonly`<[`U`, ...U[]]\> |

## Hierarchy

- [`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`\>

  ↳ **`UnionField`**

## Table of contents

### Constructors

- [constructor](Powership.UnionField.md#constructor)

### Properties

- [$](Powership.UnionField.md#$)
- [\_\_\_inferable](Powership.UnionField.md#___inferable)
- [\_\_isFieldType](Powership.UnionField.md#__isfieldtype)
- [applyParser](Powership.UnionField.md#applyparser)
- [clone](Powership.UnionField.md#clone)
- [composer](Powership.UnionField.md#composer)
- [def](Powership.UnionField.md#def)
- [defaultValue](Powership.UnionField.md#defaultvalue)
- [describe](Powership.UnionField.md#describe)
- [describeField](Powership.UnionField.md#describefield)
- [description](Powership.UnionField.md#description)
- [hidden](Powership.UnionField.md#hidden)
- [id](Powership.UnionField.md#id)
- [list](Powership.UnionField.md#list)
- [name](Powership.UnionField.md#name)
- [optional](Powership.UnionField.md#optional)
- [options](Powership.UnionField.md#options)
- [parse](Powership.UnionField.md#parse)
- [type](Powership.UnionField.md#type)
- [typeName](Powership.UnionField.md#typename)
- [utils](Powership.UnionField.md#utils)
- [create](Powership.UnionField.md#create)

### Accessors

- [asFinalFieldDef](Powership.UnionField.md#asfinalfielddef)
- [definition](Powership.UnionField.md#definition)

### Methods

- [is](Powership.UnionField.md#is)
- [setDefaultValue](Powership.UnionField.md#setdefaultvalue)
- [toList](Powership.UnionField.md#tolist)
- [toOptional](Powership.UnionField.md#tooptional)
- [toRequired](Powership.UnionField.md#torequired)
- [validate](Powership.UnionField.md#validate)
- [is](Powership.UnionField.md#is-1)

## Constructors

### constructor

• **new UnionField**<`U`, `T`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`ObjectFieldInput`](../modules/Powership.md#objectfieldinput) |
| `T` | extends readonly [`U`, `U`, `T`] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Overrides

FieldType&lt;Infer&lt;T[number]\&gt;, &#x27;union&#x27;, T\&gt;.constructor

#### Defined in

packages/schema/lib/fields/UnionField.d.ts:10

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership.FieldType.md).[$](Powership.FieldType.md#$)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:42

___

### \_\_\_inferable

• **\_\_\_inferable**: [`Infer`](../modules/Powership.md#infer)<`T`[`number`]\> extends `R` ? `R` : `never`

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

• **clone**: () => [`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[clone](Powership.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:66

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership.md#fieldcomposer)<`Record`<`string`, `any`\>, [`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>\>

#### Inherited from

[FieldType](Powership.FieldType.md).[composer](Powership.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:24

___

### def

• `Readonly` **def**: `T`

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

• **describe**: (`description`: `string`) => [`UnionField`](Powership.UnionField.md)<`U`, `T`\>

#### Type declaration

▸ (`description`): [`UnionField`](Powership.UnionField.md)<`U`, `T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`UnionField`](Powership.UnionField.md)<`U`, `T`\>

#### Inherited from

[FieldType](Powership.FieldType.md).[describe](Powership.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:43

___

### describeField

• **describeField**: () => { `$?`: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) ; `def`: `T` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: [`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$?` | [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) |
| `def` | `T` |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | [`Infer`](../modules/Powership.md#infer)<`T`[`number`]\> |

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

• **parse**: [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>\>

#### Overrides

[FieldType](Powership.FieldType.md).[parse](Powership.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/UnionField.d.ts:5

___

### type

• **type**: ``"union"``

#### Inherited from

[FieldType](Powership.FieldType.md).[type](Powership.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:21

___

### typeName

• `Readonly` **typeName**: ``"union"``

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
| `fieldTypes` | [`TAnyFieldType`](../modules/Powership.md#tanyfieldtype)[] |

#### Defined in

packages/schema/lib/fields/UnionField.d.ts:6

___

### create

▪ `Static` **create**: <U_1, T_1\>(`def`: `T_1`) => [`UnionField`](Powership.UnionField.md)<`U_1`, `T_1`\>

#### Type declaration

▸ <`U_1`, `T_1`\>(`def`): [`UnionField`](Powership.UnionField.md)<`U_1`, `T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U_1` | extends [`ObjectFieldInput`](../modules/Powership.md#objectfieldinput) |
| `T_1` | extends readonly [`U_1`, `U_1`, `T_1`] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T_1` |

##### Returns

[`UnionField`](Powership.UnionField.md)<`U_1`, `T_1`\>

#### Overrides

[FieldType](Powership.FieldType.md).[create](Powership.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/UnionField.d.ts:11

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

▸ **is**(`input`): input is Infer<T[number]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Infer<T[number]\>

#### Inherited from

[FieldType](Powership.FieldType.md).[is](Powership.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:36

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[setDefaultValue](Powership.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:57

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toList](Powership.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:56

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toOptional](Powership.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<[`Infer`](../modules/Powership.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toRequired](Powership.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

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

[FieldType](Powership.FieldType.md).[validate](Powership.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

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

packages/schema/lib/fields/UnionField.d.ts:9
