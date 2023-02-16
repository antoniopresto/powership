[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / UnionField

# Class: UnionField<U, T\>

[Solarwind](../modules/Solarwind.md).UnionField

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`FieldDefinitionConfig`](../modules/Solarwind.md#fielddefinitionconfig) |
| `T` | extends `Readonly`<[`U`, ...U[]]\> |

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`\>

  ↳ **`UnionField`**

## Table of contents

### Constructors

- [constructor](Solarwind.UnionField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.UnionField.md#___inferable)
- [\_\_isFieldType](Solarwind.UnionField.md#__isfieldtype)
- [applyParser](Solarwind.UnionField.md#applyparser)
- [clone](Solarwind.UnionField.md#clone)
- [composer](Solarwind.UnionField.md#composer)
- [def](Solarwind.UnionField.md#def)
- [defaultValue](Solarwind.UnionField.md#defaultvalue)
- [describe](Solarwind.UnionField.md#describe)
- [describeField](Solarwind.UnionField.md#describefield)
- [description](Solarwind.UnionField.md#description)
- [hidden](Solarwind.UnionField.md#hidden)
- [id](Solarwind.UnionField.md#id)
- [list](Solarwind.UnionField.md#list)
- [name](Solarwind.UnionField.md#name)
- [optional](Solarwind.UnionField.md#optional)
- [options](Solarwind.UnionField.md#options)
- [parse](Solarwind.UnionField.md#parse)
- [type](Solarwind.UnionField.md#type)
- [typeName](Solarwind.UnionField.md#typename)
- [utils](Solarwind.UnionField.md#utils)
- [create](Solarwind.UnionField.md#create)

### Accessors

- [asFinalFieldDef](Solarwind.UnionField.md#asfinalfielddef)
- [definition](Solarwind.UnionField.md#definition)

### Methods

- [is](Solarwind.UnionField.md#is)
- [setDefaultValue](Solarwind.UnionField.md#setdefaultvalue)
- [toList](Solarwind.UnionField.md#tolist)
- [toOptional](Solarwind.UnionField.md#tooptional)
- [toRequired](Solarwind.UnionField.md#torequired)
- [validate](Solarwind.UnionField.md#validate)
- [is](Solarwind.UnionField.md#is-1)

## Constructors

### constructor

• **new UnionField**<`U`, `T`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`ObjectFieldInput`](../modules/Solarwind.md#objectfieldinput) |
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

### \_\_\_inferable

• **\_\_\_inferable**: [`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\> extends `R` ? `R` : `never`

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

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[clone](Solarwind.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, [`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[composer](Solarwind.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `T`

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

• **describe**: (`description`: `string`) => [`UnionField`](Solarwind.UnionField.md)<`U`, `T`\>

#### Type declaration

▸ (`description`): [`UnionField`](Solarwind.UnionField.md)<`U`, `T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`UnionField`](Solarwind.UnionField.md)<`U`, `T`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `T` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: [`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `T` |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | [`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\> |

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

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/UnionField.d.ts:5

___

### type

• **type**: ``"union"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"union"``

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
| `fieldTypes` | [`TAnyFieldType`](../modules/Solarwind.md#tanyfieldtype)[] |

#### Defined in

packages/schema/lib/fields/UnionField.d.ts:6

___

### create

▪ `Static` **create**: <U_1, T_1\>(`def`: `T_1`) => [`UnionField`](Solarwind.UnionField.md)<`U_1`, `T_1`\>

#### Type declaration

▸ <`U_1`, `T_1`\>(`def`): [`UnionField`](Solarwind.UnionField.md)<`U_1`, `T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U_1` | extends [`ObjectFieldInput`](../modules/Solarwind.md#objectfieldinput) |
| `T_1` | extends readonly [`U_1`, `U_1`, `T_1`] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T_1` |

##### Returns

[`UnionField`](Solarwind.UnionField.md)<`U_1`, `T_1`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/UnionField.d.ts:11

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

▸ **is**(`input`): input is Infer<T[number]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Infer<T[number]\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[is](Solarwind.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`Infer`](../modules/Solarwind.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toRequired](Solarwind.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

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

[FieldType](Solarwind.FieldType.md).[validate](Solarwind.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34

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
