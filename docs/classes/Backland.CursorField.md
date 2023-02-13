[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / CursorField

# Class: CursorField

[Backland](../modules/Backland.md).CursorField

## Hierarchy

- [`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`\>

  ↳ **`CursorField`**

## Table of contents

### Constructors

- [constructor](Backland.CursorField.md#constructor)

### Properties

- [\_\_\_inferable](Backland.CursorField.md#___inferable)
- [\_\_isFieldType](Backland.CursorField.md#__isfieldtype)
- [applyParser](Backland.CursorField.md#applyparser)
- [clone](Backland.CursorField.md#clone)
- [composer](Backland.CursorField.md#composer)
- [def](Backland.CursorField.md#def)
- [defaultValue](Backland.CursorField.md#defaultvalue)
- [describe](Backland.CursorField.md#describe)
- [describeField](Backland.CursorField.md#describefield)
- [description](Backland.CursorField.md#description)
- [hidden](Backland.CursorField.md#hidden)
- [id](Backland.CursorField.md#id)
- [list](Backland.CursorField.md#list)
- [name](Backland.CursorField.md#name)
- [optional](Backland.CursorField.md#optional)
- [options](Backland.CursorField.md#options)
- [parse](Backland.CursorField.md#parse)
- [type](Backland.CursorField.md#type)
- [typeName](Backland.CursorField.md#typename)
- [utils](Backland.CursorField.md#utils)
- [create](Backland.CursorField.md#create)

### Accessors

- [asFinalFieldDef](Backland.CursorField.md#asfinalfielddef)
- [definition](Backland.CursorField.md#definition)

### Methods

- [is](Backland.CursorField.md#is)
- [setDefaultValue](Backland.CursorField.md#setdefaultvalue)
- [toList](Backland.CursorField.md#tolist)
- [toOptional](Backland.CursorField.md#tooptional)
- [toRequired](Backland.CursorField.md#torequired)
- [validate](Backland.CursorField.md#validate)
- [object](Backland.CursorField.md#object)

## Constructors

### constructor

• **new CursorField**()

#### Overrides

FieldType&lt;CursorType, &#x27;cursor&#x27;, undefined\&gt;.constructor

#### Defined in

packages/schema/lib/fields/CursorField.d.ts:123

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: [`CursorType`](../modules/Backland.md#cursortype)

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

• **clone**: () => [`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[clone](Backland.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland.md#fieldcomposer)<`Record`<`string`, `any`\>, [`CursorType`](../modules/Backland.md#cursortype)\>

#### Inherited from

[FieldType](Backland.FieldType.md).[composer](Backland.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `undefined`

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

• **describe**: (`description`: `string`) => [`CursorField`](Backland.CursorField.md)

#### Type declaration

▸ (`description`): [`CursorField`](Backland.CursorField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`CursorField`](Backland.CursorField.md)

#### Inherited from

[FieldType](Backland.FieldType.md).[describe](Backland.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `undefined` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: [`CursorType`](../modules/Backland.md#cursortype)  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `undefined` |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | [`CursorType`](../modules/Backland.md#cursortype) |

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

• **parse**: [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<[`CursorType`](../modules/Backland.md#cursortype)\>

#### Overrides

[FieldType](Backland.FieldType.md).[parse](Backland.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/CursorField.d.ts:44

___

### type

• **type**: ``"cursor"``

#### Inherited from

[FieldType](Backland.FieldType.md).[type](Backland.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"cursor"``

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
| `object` | [`ObjectType`](Backland.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }, { `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }\> |

#### Defined in

packages/schema/lib/fields/CursorField.d.ts:45

___

### create

▪ `Static` **create**: () => [`CursorField`](Backland.CursorField.md)

#### Type declaration

▸ (): [`CursorField`](Backland.CursorField.md)

##### Returns

[`CursorField`](Backland.CursorField.md)

#### Overrides

[FieldType](Backland.FieldType.md).[create](Backland.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/CursorField.d.ts:124

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

▸ **is**(`input`): input is CursorType

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is CursorType

#### Inherited from

[FieldType](Backland.FieldType.md).[is](Backland.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[setDefaultValue](Backland.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toList](Backland.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toOptional](Backland.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<[`CursorType`](../modules/Backland.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toRequired](Backland.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

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

[FieldType](Backland.FieldType.md).[validate](Backland.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34

___

### object

▸ `Static` **object**(): [`ObjectType`](Backland.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }, { `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }\>

#### Returns

[`ObjectType`](Backland.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }, { `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }\>

#### Defined in

packages/schema/lib/fields/CursorField.d.ts:48
