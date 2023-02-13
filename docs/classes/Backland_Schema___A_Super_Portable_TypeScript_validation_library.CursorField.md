[Backland](../README.md) / [Modules](../modules.md) / [Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md) / CursorField

# Class: CursorField

[Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md).CursorField

## Hierarchy

- [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`\>

  ↳ **`CursorField`**

## Table of contents

### Constructors

- [constructor](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#constructor)

### Properties

- [\_\_\_inferable](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#___inferable)
- [\_\_isFieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#__isfieldtype)
- [composer](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#composer)
- [def](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#def)
- [defaultValue](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#defaultvalue)
- [description](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#description)
- [hidden](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#hidden)
- [id](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#id)
- [list](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#list)
- [name](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#name)
- [optional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#optional)
- [options](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#options)
- [parse](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#parse)
- [type](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#type)
- [typeName](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#typename)
- [utils](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#utils)

### Accessors

- [asFinalFieldDef](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#asfinalfielddef)
- [definition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#definition)

### Methods

- [applyParser](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#applyparser)
- [clone](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#clone)
- [describe](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#describe)
- [describeField](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#describefield)
- [is](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#is)
- [setDefaultValue](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#setdefaultvalue)
- [toList](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#tolist)
- [toOptional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#tooptional)
- [toRequired](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#torequired)
- [validate](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#validate)
- [create](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#create)
- [object](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#object)

## Constructors

### constructor

• **new CursorField**()

#### Overrides

FieldType&lt;CursorType, &#x27;cursor&#x27;, undefined\&gt;.constructor

#### Defined in

[packages/schema/src/fields/CursorField.ts:73](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/CursorField.ts#L73)

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: [`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype)

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

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, [`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype)\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[composer](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)

#### Defined in

[packages/schema/src/fields/FieldType.ts:64](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L64)

___

### def

• `Readonly` **def**: `undefined`

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

• **parse**: [`FieldTypeParser`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<[`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype)\>

#### Overrides

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[parse](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)

#### Defined in

[packages/schema/src/fields/CursorField.ts:63](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/CursorField.ts#L63)

___

### type

• **type**: ``"cursor"``

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[type](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)

#### Defined in

[packages/schema/src/fields/FieldType.ts:54](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L54)

___

### typeName

• `Readonly` **typeName**: ``"cursor"``

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[typeName](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#typename)

#### Defined in

[packages/schema/src/fields/FieldType.ts:53](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L53)

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `object` | [`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }, { `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }\> |

#### Defined in

[packages/schema/src/fields/CursorField.ts:65](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/CursorField.ts#L65)

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

▸ **is**(`input`): input is CursorType

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is CursorType

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[is](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)

#### Defined in

[packages/schema/src/fields/FieldType.ts:130](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L130)

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[setDefaultValue](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)

#### Defined in

[packages/schema/src/fields/FieldType.ts:180](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L180)

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toList](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)

#### Defined in

[packages/schema/src/fields/FieldType.ts:169](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L169)

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toOptional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)

#### Defined in

[packages/schema/src/fields/FieldType.ts:157](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L157)

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toRequired](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)

#### Defined in

[packages/schema/src/fields/FieldType.ts:163](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L163)

___

### validate

▸ **validate**(`input`): input is CursorType

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is CursorType

#### Inherited from

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[validate](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)

#### Defined in

[packages/schema/src/fields/FieldType.ts:121](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/FieldType.ts#L121)

___

### create

▸ `Static` **create**(): [`CursorField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md)

#### Returns

[`CursorField`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md)

#### Overrides

[FieldType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[create](Backland_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

#### Defined in

[packages/schema/src/fields/CursorField.ts:93](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/CursorField.ts#L93)

___

### object

▸ `Static` **object**(): [`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }, { `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }\>

#### Returns

[`ObjectType`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }, { `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }\>

#### Defined in

[packages/schema/src/fields/CursorField.ts:69](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/fields/CursorField.ts#L69)
