[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / CursorField

# Class: CursorField

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).CursorField

## Hierarchy

- [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`\>

  ↳ **`CursorField`**

## Table of contents

### Constructors

- [constructor](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#constructor)

### Properties

- [$](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#$)
- [\_\_\_inferable](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#___inferable)
- [\_\_isFieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#__isfieldtype)
- [composer](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#composer)
- [def](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#def)
- [defaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#defaultvalue)
- [description](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#description)
- [hidden](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#hidden)
- [id](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#id)
- [list](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#list)
- [name](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#name)
- [optional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#optional)
- [options](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#options)
- [parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#parse)
- [type](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#type)
- [typeName](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#typename)
- [utils](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#utils)

### Accessors

- [asFinalFieldDef](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#asfinalfielddef)
- [definition](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#definition)

### Methods

- [applyParser](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#applyparser)
- [clone](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#clone)
- [describe](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#describe)
- [describeField](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#describefield)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#is)
- [setDefaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#setdefaultvalue)
- [toList](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#tolist)
- [toOptional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#tooptional)
- [toRequired](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#torequired)
- [validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#validate)
- [create](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#create)
- [object](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md#object)

## Constructors

### constructor

• **new CursorField**()

#### Overrides

FieldType&lt;CursorType, &#x27;cursor&#x27;, undefined\&gt;.constructor

#### Defined in

packages/schema/src/fields/CursorField.ts:73

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership_Schema___A_Super_Portable_TypeScript_validation_library.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[$](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#$)

#### Defined in

packages/schema/src/fields/FieldType.ts:140

___

### \_\_\_inferable

• **\_\_\_inferable**: [`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype)

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

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldcomposer)<`Record`<`string`, `any`\>, [`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype)\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[composer](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#composer)

#### Defined in

packages/schema/src/fields/FieldType.ts:65

___

### def

• `Readonly` **def**: `undefined`

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

• **parse**: [`FieldTypeParser`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#fieldtypeparser)<[`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype)\>

#### Overrides

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[parse](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#parse)

#### Defined in

packages/schema/src/fields/CursorField.ts:63

___

### type

• **type**: ``"cursor"``

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[type](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#type)

#### Defined in

packages/schema/src/fields/FieldType.ts:55

___

### typeName

• `Readonly` **typeName**: ``"cursor"``

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
| `object` | [`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }, { `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }\> |

#### Defined in

packages/schema/src/fields/CursorField.ts:65

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

▸ **is**(`input`): input is CursorType

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is CursorType

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#is)

#### Defined in

packages/schema/src/fields/FieldType.ts:131

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[setDefaultValue](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/src/fields/FieldType.ts:183

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toList](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tolist)

#### Defined in

packages/schema/src/fields/FieldType.ts:172

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toOptional](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#tooptional)

#### Defined in

packages/schema/src/fields/FieldType.ts:160

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md)<[`CursorType`](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[toRequired](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#torequired)

#### Defined in

packages/schema/src/fields/FieldType.ts:166

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

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[validate](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#validate)

#### Defined in

packages/schema/src/fields/FieldType.ts:122

___

### create

▸ `Static` **create**(): [`CursorField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md)

#### Returns

[`CursorField`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.CursorField.md)

#### Overrides

[FieldType](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md).[create](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldType.md#create)

#### Defined in

packages/schema/src/fields/CursorField.ts:93

___

### object

▸ `Static` **object**(): [`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }, { `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }\>

#### Returns

[`ObjectType`](Powership_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }, { `PK`: { `description`: ``"Primary Key"`` = 'Primary Key'; `string`: {} = {} } ; `SK`: { `description`: ``"Secondary or Sort Key"`` = 'Secondary or Sort Key'; `optional`: ``true`` = true; `string`: {} = {} } ; `after`: { `optional`: ``true`` = true; `string`: {} = {} } ; `fields`: { `list`: ``true`` = true; `optional`: ``true`` = true; `string`: {} = {} } ; `limit`: { `int`: {} = {}; `optional`: ``true`` = true } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` = 'The prefix to search as "startsWith" in SK'; `optional`: ``true`` = true; `string`: {} = {} } ; `sep`: { `description`: ``"Composite key separator"`` = 'Composite key separator'; `optional`: ``true`` = true; `string`: {} = {} } ; `version`: { `description`: ``"The Cursor format version"`` = 'The Cursor format version'; `string`: {} = {} }  }\>

#### Defined in

packages/schema/src/fields/CursorField.ts:69
