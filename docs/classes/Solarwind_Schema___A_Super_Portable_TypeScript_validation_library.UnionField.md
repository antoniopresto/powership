[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind Schema - A Super Portable TypeScript validation library](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md) / UnionField

# Class: UnionField<U, T\>

[Solarwind Schema - A Super Portable TypeScript validation library](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md).UnionField

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`FieldDefinitionConfig`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fielddefinitionconfig) |
| `T` | extends `Readonly`<[`U`, ...U[]]\> |

## Hierarchy

- [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`\>

  ↳ **`UnionField`**

## Table of contents

### Constructors

- [constructor](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#___inferable)
- [\_\_isFieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#__isfieldtype)
- [composer](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#composer)
- [def](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#def)
- [defaultValue](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#defaultvalue)
- [description](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#description)
- [hidden](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#hidden)
- [id](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#id)
- [list](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#list)
- [name](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#name)
- [optional](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#optional)
- [options](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#options)
- [parse](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#parse)
- [type](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#type)
- [typeName](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#typename)
- [utils](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#utils)

### Accessors

- [asFinalFieldDef](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#asfinalfielddef)
- [definition](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#definition)

### Methods

- [applyParser](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#applyparser)
- [clone](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#clone)
- [describe](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#describe)
- [describeField](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#describefield)
- [is](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#is)
- [setDefaultValue](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#setdefaultvalue)
- [toList](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#tolist)
- [toOptional](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#tooptional)
- [toRequired](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#torequired)
- [validate](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#validate)
- [create](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#create)
- [is](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md#is-1)

## Constructors

### constructor

• **new UnionField**<`U`, `T`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`ObjectFieldInput`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `T` | extends readonly [`U`, `U`, `T`] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Overrides

FieldType&lt;Infer&lt;T[number]\&gt;, &#x27;union&#x27;, T\&gt;.constructor

#### Defined in

[packages/schema/src/fields/UnionField.ts:26](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/UnionField.ts#L26)

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: [`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\> extends `R` ? `R` : `never`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[___inferable](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#___inferable)

#### Defined in

[packages/schema/src/fields/FieldType.ts:58](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L58)

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[__isFieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#__isfieldtype)

#### Defined in

[packages/schema/src/fields/FieldType.ts:284](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L284)

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, [`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[composer](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)

#### Defined in

[packages/schema/src/fields/FieldType.ts:64](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L64)

___

### def

• `Readonly` **def**: `T`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[def](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#def)

#### Defined in

[packages/schema/src/fields/FieldType.ts:56](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L56)

___

### defaultValue

• **defaultValue**: `undefined`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[defaultValue](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#defaultvalue)

#### Defined in

[packages/schema/src/fields/FieldType.ts:136](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L136)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[description](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#description)

#### Defined in

[packages/schema/src/fields/FieldType.ts:137](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L137)

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[hidden](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#hidden)

#### Defined in

[packages/schema/src/fields/FieldType.ts:138](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L138)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[id](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#id)

#### Defined in

[packages/schema/src/fields/FieldType.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L70)

___

### list

• **list**: ``false``

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[list](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#list)

#### Defined in

[packages/schema/src/fields/FieldType.ts:135](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L135)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[name](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#name)

#### Defined in

[packages/schema/src/fields/FieldType.ts:71](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L71)

___

### optional

• **optional**: ``false``

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[optional](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#optional)

#### Defined in

[packages/schema/src/fields/FieldType.ts:134](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L134)

___

### options

• **options**: `Object`

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[options](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#options)

#### Defined in

[packages/schema/src/fields/FieldType.ts:72](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L72)

___

### parse

• **parse**: [`FieldTypeParser`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<[`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>\>

#### Overrides

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[parse](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)

#### Defined in

[packages/schema/src/fields/UnionField.ts:16](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/UnionField.ts#L16)

___

### type

• **type**: ``"union"``

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[type](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)

#### Defined in

[packages/schema/src/fields/FieldType.ts:54](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L54)

___

### typeName

• `Readonly` **typeName**: ``"union"``

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[typeName](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#typename)

#### Defined in

[packages/schema/src/fields/FieldType.ts:53](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L53)

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fieldTypes` | [`TAnyFieldType`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#tanyfieldtype)[] |

#### Defined in

[packages/schema/src/fields/UnionField.ts:18](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/UnionField.ts#L18)

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.asFinalFieldDef

#### Defined in

[packages/schema/src/fields/FieldType.ts:262](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L262)

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.definition

#### Defined in

[packages/schema/src/fields/FieldType.ts:66](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L66)

## Methods

### applyParser

▸ **applyParser**<`Type`\>(`parser`): [`FieldTypeParser`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | `Object` |
| `parser.parse` | (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject)) => `Type` |
| `parser.preParse?` | (`input`: `any`) => `Type` |

#### Returns

[`FieldTypeParser`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[applyParser](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#applyparser)

#### Defined in

[packages/schema/src/fields/FieldType.ts:188](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L188)

___

### clone

▸ **clone**(): [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[clone](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#clone)

#### Defined in

[packages/schema/src/fields/FieldType.ts:290](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L290)

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

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[describe](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describe)

#### Defined in

[packages/schema/src/fields/FieldType.ts:140](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L140)

___

### describeField

▸ **describeField**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `Def` |
| `defaultValue` | `DefaultValue` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | [`List`] extends [``1``] ? ``true`` : ``false`` |
| `optional` | [`Optional`] extends [``1``] ? ``true`` : ``false`` |
| `type` | `Type` |

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[describeField](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describefield)

#### Defined in

[packages/schema/src/fields/FieldType.ts:145](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L145)

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

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[is](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)

#### Defined in

[packages/schema/src/fields/FieldType.ts:130](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L130)

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[setDefaultValue](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)

#### Defined in

[packages/schema/src/fields/FieldType.ts:180](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L180)

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toList](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)

#### Defined in

[packages/schema/src/fields/FieldType.ts:169](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L169)

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toOptional](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)

#### Defined in

[packages/schema/src/fields/FieldType.ts:157](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L157)

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`Infer`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#infer)<`T`[`number`]\>, ``"union"``, `T`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toRequired](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)

#### Defined in

[packages/schema/src/fields/FieldType.ts:163](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L163)

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

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[validate](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)

#### Defined in

[packages/schema/src/fields/FieldType.ts:121](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L121)

___

### create

▸ `Static` **create**<`U`, `T`\>(`def`): [`UnionField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md)<`U`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`ObjectFieldInput`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#objectfieldinput) |
| `T` | extends readonly [`U`, `U`, `T`] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Returns

[`UnionField`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.UnionField.md)<`U`, `T`\>

#### Overrides

[FieldType](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[create](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

#### Defined in

[packages/schema/src/fields/UnionField.ts:87](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/UnionField.ts#L87)

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

[packages/schema/src/fields/UnionField.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/UnionField.ts#L22)
