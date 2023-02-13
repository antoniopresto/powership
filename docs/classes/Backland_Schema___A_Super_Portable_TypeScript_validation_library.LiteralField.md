[Backland](../README.md) / [Modules](../modules.md) / [Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md) / LiteralField

# Class: LiteralField<T\>

[Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md).LiteralField

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Readonly`<`Serializable`\> |

## Hierarchy

- [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md)\>

  ↳ **`LiteralField`**

## Table of contents

### Constructors

- [constructor](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#constructor)

### Properties

- [\_\_\_inferable](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#___inferable)
- [\_\_isFieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#__isfieldtype)
- [\_\_isLiteralField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#__isliteralfield)
- [composer](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#composer)
- [def](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#def)
- [defaultValue](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#defaultvalue)
- [description](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#description)
- [hidden](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#hidden)
- [id](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#id)
- [list](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#list)
- [name](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#name)
- [optional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#optional)
- [options](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#options)
- [parse](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#parse)
- [type](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#type)
- [typeName](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#typename)
- [utils](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#utils)

### Accessors

- [asFinalFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#asfinalfielddef)
- [definition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#definition)

### Methods

- [applyParser](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#applyparser)
- [clone](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#clone)
- [describe](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#describe)
- [describeField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#describefield)
- [is](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#is)
- [setDefaultValue](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#setdefaultvalue)
- [toList](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#tolist)
- [toOptional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#tooptional)
- [toRequired](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#torequired)
- [validate](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#validate)
- [create](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#create)
- [is](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#is-1)
- [isFinalTypeDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#isfinaltypedef)
- [isLiteralFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md#isliteralfielddef)

## Constructors

### constructor

• **new LiteralField**<`T`\>(`def`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Readonly`<`Serializable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Overrides

FieldType&lt;
  T,
  &#x27;literal&#x27;,
  LiteralFieldDef
\&gt;.constructor

#### Defined in

[packages/schema/src/fields/LiteralField.ts:66](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/LiteralField.ts#L66)

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: `T` extends `R` ? `R` : `never`

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[___inferable](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#___inferable)

#### Defined in

[packages/schema/src/fields/FieldType.ts:58](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L58)

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[__isFieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#__isfieldtype)

#### Defined in

[packages/schema/src/fields/FieldType.ts:284](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L284)

___

### \_\_isLiteralField

• **\_\_isLiteralField**: `boolean` = `true`

#### Defined in

[packages/schema/src/fields/LiteralField.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/LiteralField.ts#L21)

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, `T`\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[composer](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)

#### Defined in

[packages/schema/src/fields/FieldType.ts:64](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L64)

___

### def

• `Readonly` **def**: [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md)

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[def](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#def)

#### Defined in

[packages/schema/src/fields/FieldType.ts:56](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L56)

___

### defaultValue

• **defaultValue**: `undefined`

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[defaultValue](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#defaultvalue)

#### Defined in

[packages/schema/src/fields/FieldType.ts:136](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L136)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[description](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#description)

#### Defined in

[packages/schema/src/fields/FieldType.ts:137](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L137)

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[hidden](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#hidden)

#### Defined in

[packages/schema/src/fields/FieldType.ts:138](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L138)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[id](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#id)

#### Defined in

[packages/schema/src/fields/FieldType.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L70)

___

### list

• **list**: ``false``

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[list](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#list)

#### Defined in

[packages/schema/src/fields/FieldType.ts:135](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L135)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[name](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#name)

#### Defined in

[packages/schema/src/fields/FieldType.ts:71](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L71)

___

### optional

• **optional**: ``false``

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[optional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#optional)

#### Defined in

[packages/schema/src/fields/FieldType.ts:134](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L134)

___

### options

• **options**: `Object`

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[options](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#options)

#### Defined in

[packages/schema/src/fields/FieldType.ts:72](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L72)

___

### parse

• **parse**: [`FieldTypeParser`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`T`\>

#### Overrides

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[parse](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)

#### Defined in

[packages/schema/src/fields/LiteralField.ts:20](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/LiteralField.ts#L20)

___

### type

• **type**: ``"literal"``

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[type](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)

#### Defined in

[packages/schema/src/fields/FieldType.ts:54](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L54)

___

### typeName

• `Readonly` **typeName**: ``"literal"``

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[typeName](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#typename)

#### Defined in

[packages/schema/src/fields/FieldType.ts:53](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L53)

___

### utils

▪ `Static` **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deserialize` | (`def`: [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md)) => `any` |
| `serialize` | (`value`: `any`) => `string` |
| `toDef` | (`input`: `any`) => [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md) |

#### Defined in

[packages/schema/src/fields/LiteralField.ts:23](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/LiteralField.ts#L23)

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.asFinalFieldDef

#### Defined in

[packages/schema/src/fields/FieldType.ts:262](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L262)

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.definition

#### Defined in

[packages/schema/src/fields/FieldType.ts:66](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L66)

## Methods

### applyParser

▸ **applyParser**<`Type`\>(`parser`): [`FieldTypeParser`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | `Object` |
| `parser.parse` | (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldparseroptionsobject)) => `Type` |
| `parser.preParse?` | (`input`: `any`) => `Type` |

#### Returns

[`FieldTypeParser`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<`Type`\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[applyParser](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#applyparser)

#### Defined in

[packages/schema/src/fields/FieldType.ts:188](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L188)

___

### clone

▸ **clone**(): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`Type`, `TypeName`, `Def`, `List`, `Optional`, `DefaultValue`, `Options`\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[clone](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#clone)

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

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[describe](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describe)

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

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[describeField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#describefield)

#### Defined in

[packages/schema/src/fields/FieldType.ts:145](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L145)

___

### is

▸ **is**(`input`): input is T

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is T

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[is](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)

#### Defined in

[packages/schema/src/fields/FieldType.ts:130](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L130)

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md), ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md), ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[setDefaultValue](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)

#### Defined in

[packages/schema/src/fields/FieldType.ts:180](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L180)

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md), ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md), ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toList](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)

#### Defined in

[packages/schema/src/fields/FieldType.ts:169](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L169)

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md), ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md), ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toOptional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)

#### Defined in

[packages/schema/src/fields/FieldType.ts:157](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L157)

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<`T`, ``"literal"``, [`LiteralFieldDef`](../interfaces/Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralFieldDef.md), ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toRequired](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)

#### Defined in

[packages/schema/src/fields/FieldType.ts:163](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L163)

___

### validate

▸ **validate**(`input`): input is T

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is T

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[validate](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)

#### Defined in

[packages/schema/src/fields/FieldType.ts:121](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L121)

___

### create

▸ `Static` **create**<`T`\>(`def`): [`LiteralField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Readonly`<`Serializable`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Returns

[`LiteralField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.LiteralField.md)<`T`\>

#### Overrides

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[create](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

#### Defined in

[packages/schema/src/fields/LiteralField.ts:84](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/LiteralField.ts#L84)

___

### is

▸ `Static` **is**(`t`): t is LiteralField<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

t is LiteralField<any\>

#### Defined in

[packages/schema/src/fields/LiteralField.ts:94](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/LiteralField.ts#L94)

___

### isFinalTypeDef

▸ `Static` **isFinalTypeDef**(`t`): t is LiteralField<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

t is LiteralField<any\>

#### Defined in

[packages/schema/src/fields/LiteralField.ts:90](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/LiteralField.ts#L90)

___

### isLiteralFieldDef

▸ `Static` **isLiteralFieldDef**(`t`): t is LiteralFieldDef

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

t is LiteralFieldDef

#### Defined in

[packages/schema/src/fields/LiteralField.ts:98](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/LiteralField.ts#L98)
