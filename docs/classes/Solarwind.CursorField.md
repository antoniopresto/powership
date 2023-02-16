[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / CursorField

# Class: CursorField

[Solarwind](../modules/Solarwind.md).CursorField

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`\>

  ↳ **`CursorField`**

## Table of contents

### Constructors

- [constructor](Solarwind.CursorField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.CursorField.md#___inferable)
- [\_\_isFieldType](Solarwind.CursorField.md#__isfieldtype)
- [applyParser](Solarwind.CursorField.md#applyparser)
- [clone](Solarwind.CursorField.md#clone)
- [composer](Solarwind.CursorField.md#composer)
- [def](Solarwind.CursorField.md#def)
- [defaultValue](Solarwind.CursorField.md#defaultvalue)
- [describe](Solarwind.CursorField.md#describe)
- [describeField](Solarwind.CursorField.md#describefield)
- [description](Solarwind.CursorField.md#description)
- [hidden](Solarwind.CursorField.md#hidden)
- [id](Solarwind.CursorField.md#id)
- [list](Solarwind.CursorField.md#list)
- [name](Solarwind.CursorField.md#name)
- [optional](Solarwind.CursorField.md#optional)
- [options](Solarwind.CursorField.md#options)
- [parse](Solarwind.CursorField.md#parse)
- [type](Solarwind.CursorField.md#type)
- [typeName](Solarwind.CursorField.md#typename)
- [utils](Solarwind.CursorField.md#utils)
- [create](Solarwind.CursorField.md#create)

### Accessors

- [asFinalFieldDef](Solarwind.CursorField.md#asfinalfielddef)
- [definition](Solarwind.CursorField.md#definition)

### Methods

- [is](Solarwind.CursorField.md#is)
- [setDefaultValue](Solarwind.CursorField.md#setdefaultvalue)
- [toList](Solarwind.CursorField.md#tolist)
- [toOptional](Solarwind.CursorField.md#tooptional)
- [toRequired](Solarwind.CursorField.md#torequired)
- [validate](Solarwind.CursorField.md#validate)
- [object](Solarwind.CursorField.md#object)

## Constructors

### constructor

• **new CursorField**()

#### Overrides

FieldType&lt;CursorType, &#x27;cursor&#x27;, undefined\&gt;.constructor

#### Defined in

packages/schema/lib/fields/CursorField.d.ts:123

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: [`CursorType`](../modules/Solarwind.md#cursortype)

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

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[clone](Solarwind.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, [`CursorType`](../modules/Solarwind.md#cursortype)\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[composer](Solarwind.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `undefined`

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

• **describe**: (`description`: `string`) => [`CursorField`](Solarwind.CursorField.md)

#### Type declaration

▸ (`description`): [`CursorField`](Solarwind.CursorField.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`CursorField`](Solarwind.CursorField.md)

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `undefined` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: [`CursorType`](../modules/Solarwind.md#cursortype)  }

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
| `type` | [`CursorType`](../modules/Solarwind.md#cursortype) |

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

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<[`CursorType`](../modules/Solarwind.md#cursortype)\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/CursorField.d.ts:44

___

### type

• **type**: ``"cursor"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"cursor"``

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
| `object` | [`ObjectType`](Solarwind.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }, { `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }\> |

#### Defined in

packages/schema/lib/fields/CursorField.d.ts:45

___

### create

▪ `Static` **create**: () => [`CursorField`](Solarwind.CursorField.md)

#### Type declaration

▸ (): [`CursorField`](Solarwind.CursorField.md)

##### Returns

[`CursorField`](Solarwind.CursorField.md)

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/CursorField.d.ts:124

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

▸ **is**(`input`): input is CursorType

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is CursorType

#### Inherited from

[FieldType](Solarwind.FieldType.md).[is](Solarwind.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`CursorType`](../modules/Solarwind.md#cursortype), ``"cursor"``, `undefined`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toRequired](Solarwind.FieldType.md#torequired)

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

[FieldType](Solarwind.FieldType.md).[validate](Solarwind.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34

___

### object

▸ `Static` **object**(): [`ObjectType`](Solarwind.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }, { `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }\>

#### Returns

[`ObjectType`](Solarwind.ObjectType.md)<{ `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }, { `PK`: { `description`: ``"Primary Key"`` ; `string`: {}  } ; `SK`: { `description`: ``"Secondary or Sort Key"`` ; `optional`: ``true`` ; `string`: {}  } ; `after`: { `optional`: ``true`` ; `string`: {}  } ; `fields`: { `list`: ``true`` ; `optional`: ``true`` ; `string`: {}  } ; `limit`: { `int`: {} ; `optional`: ``true``  } ; `prefix`: { `description`: ``"The prefix to search as \"startsWith\" in SK"`` ; `optional`: ``true`` ; `string`: {}  } ; `sep`: { `description`: ``"Composite key separator"`` ; `optional`: ``true`` ; `string`: {}  } ; `version`: { `description`: ``"The Cursor format version"`` ; `string`: {}  }  }\>

#### Defined in

packages/schema/lib/fields/CursorField.d.ts:48
