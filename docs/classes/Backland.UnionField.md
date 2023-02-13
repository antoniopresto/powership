[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / UnionField

# Class: UnionField<U, T\>

[Backland](../modules/Backland.md).UnionField

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`FieldDefinitionConfig`](../modules/Backland.md#fielddefinitionconfig) |
| `T` | extends `Readonly`<[`U`, ...U[]]\> |

## Hierarchy

- [`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`\>

  ↳ **`UnionField`**

## Table of contents

### Constructors

- [constructor](Backland.UnionField.md#constructor)

### Properties

- [\_\_\_inferable](Backland.UnionField.md#___inferable)
- [\_\_isFieldType](Backland.UnionField.md#__isfieldtype)
- [applyParser](Backland.UnionField.md#applyparser)
- [clone](Backland.UnionField.md#clone)
- [composer](Backland.UnionField.md#composer)
- [def](Backland.UnionField.md#def)
- [defaultValue](Backland.UnionField.md#defaultvalue)
- [describe](Backland.UnionField.md#describe)
- [describeField](Backland.UnionField.md#describefield)
- [description](Backland.UnionField.md#description)
- [hidden](Backland.UnionField.md#hidden)
- [id](Backland.UnionField.md#id)
- [list](Backland.UnionField.md#list)
- [name](Backland.UnionField.md#name)
- [optional](Backland.UnionField.md#optional)
- [options](Backland.UnionField.md#options)
- [parse](Backland.UnionField.md#parse)
- [type](Backland.UnionField.md#type)
- [typeName](Backland.UnionField.md#typename)
- [utils](Backland.UnionField.md#utils)
- [create](Backland.UnionField.md#create)

### Accessors

- [asFinalFieldDef](Backland.UnionField.md#asfinalfielddef)
- [definition](Backland.UnionField.md#definition)

### Methods

- [is](Backland.UnionField.md#is)
- [setDefaultValue](Backland.UnionField.md#setdefaultvalue)
- [toList](Backland.UnionField.md#tolist)
- [toOptional](Backland.UnionField.md#tooptional)
- [toRequired](Backland.UnionField.md#torequired)
- [validate](Backland.UnionField.md#validate)
- [is](Backland.UnionField.md#is-1)

## Constructors

### constructor

• **new UnionField**<`U`, `T`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`ObjectFieldInput`](../modules/Backland.md#objectfieldinput) |
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

• **\_\_\_inferable**: [`Infer`](../modules/Backland.md#infer)<`T`[`number`]\> extends `R` ? `R` : `never`

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

• **clone**: () => [`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[clone](Backland.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland.md#fieldcomposer)<`Record`<`string`, `any`\>, [`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>\>

#### Inherited from

[FieldType](Backland.FieldType.md).[composer](Backland.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `T`

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

• **describe**: (`description`: `string`) => [`UnionField`](Backland.UnionField.md)<`U`, `T`\>

#### Type declaration

▸ (`description`): [`UnionField`](Backland.UnionField.md)<`U`, `T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`UnionField`](Backland.UnionField.md)<`U`, `T`\>

#### Inherited from

[FieldType](Backland.FieldType.md).[describe](Backland.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `T` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: [`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>  }

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
| `type` | [`Infer`](../modules/Backland.md#infer)<`T`[`number`]\> |

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

• **parse**: [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>\>

#### Overrides

[FieldType](Backland.FieldType.md).[parse](Backland.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/UnionField.d.ts:5

___

### type

• **type**: ``"union"``

#### Inherited from

[FieldType](Backland.FieldType.md).[type](Backland.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"union"``

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
| `fieldTypes` | [`TAnyFieldType`](../modules/Backland.md#tanyfieldtype)[] |

#### Defined in

packages/schema/lib/fields/UnionField.d.ts:6

___

### create

▪ `Static` **create**: <U_1, T_1\>(`def`: `T_1`) => [`UnionField`](Backland.UnionField.md)<`U_1`, `T_1`\>

#### Type declaration

▸ <`U_1`, `T_1`\>(`def`): [`UnionField`](Backland.UnionField.md)<`U_1`, `T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U_1` | extends [`ObjectFieldInput`](../modules/Backland.md#objectfieldinput) |
| `T_1` | extends readonly [`U_1`, `U_1`, `T_1`] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T_1` |

##### Returns

[`UnionField`](Backland.UnionField.md)<`U_1`, `T_1`\>

#### Overrides

[FieldType](Backland.FieldType.md).[create](Backland.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/UnionField.d.ts:11

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

▸ **is**(`input`): input is Infer<T[number]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is Infer<T[number]\>

#### Inherited from

[FieldType](Backland.FieldType.md).[is](Backland.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[setDefaultValue](Backland.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toList](Backland.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toOptional](Backland.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<[`Infer`](../modules/Backland.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toRequired](Backland.FieldType.md#torequired)

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

[FieldType](Backland.FieldType.md).[validate](Backland.FieldType.md#validate)

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
