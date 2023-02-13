[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / RecordField

# Class: RecordField<Def\>

[Backland](../modules/Backland.md).RecordField

## Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`RecordFieldDef`](../modules/Backland.md#recordfielddef) |

## Hierarchy

- [`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `Def` \| `undefined`\>

  ↳ **`RecordField`**

## Table of contents

### Constructors

- [constructor](Backland.RecordField.md#constructor)

### Properties

- [\_\_\_inferable](Backland.RecordField.md#___inferable)
- [\_\_isFieldType](Backland.RecordField.md#__isfieldtype)
- [\_\_isRecordField](Backland.RecordField.md#__isrecordfield)
- [applyParser](Backland.RecordField.md#applyparser)
- [clone](Backland.RecordField.md#clone)
- [composer](Backland.RecordField.md#composer)
- [def](Backland.RecordField.md#def)
- [defaultValue](Backland.RecordField.md#defaultvalue)
- [describe](Backland.RecordField.md#describe)
- [describeField](Backland.RecordField.md#describefield)
- [description](Backland.RecordField.md#description)
- [hidden](Backland.RecordField.md#hidden)
- [id](Backland.RecordField.md#id)
- [list](Backland.RecordField.md#list)
- [name](Backland.RecordField.md#name)
- [optional](Backland.RecordField.md#optional)
- [options](Backland.RecordField.md#options)
- [parse](Backland.RecordField.md#parse)
- [type](Backland.RecordField.md#type)
- [typeName](Backland.RecordField.md#typename)
- [create](Backland.RecordField.md#create)

### Accessors

- [asFinalFieldDef](Backland.RecordField.md#asfinalfielddef)
- [definition](Backland.RecordField.md#definition)

### Methods

- [is](Backland.RecordField.md#is)
- [setDefaultValue](Backland.RecordField.md#setdefaultvalue)
- [toList](Backland.RecordField.md#tolist)
- [toOptional](Backland.RecordField.md#tooptional)
- [toRequired](Backland.RecordField.md#torequired)
- [validate](Backland.RecordField.md#validate)
- [is](Backland.RecordField.md#is-1)

## Constructors

### constructor

• **new RecordField**<`Def`\>(`def?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`RecordFieldDef`](../modules/Backland.md#recordfielddef) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | `Def` |

#### Overrides

FieldType&lt;InferRecordFieldType&lt;Def\&gt;, &#x27;record&#x27;, Def \| undefined\&gt;.constructor

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:25

## Properties

### \_\_\_inferable

• **\_\_\_inferable**: [`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\> extends `R` ? `R` : `never`

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

### \_\_isRecordField

• **\_\_isRecordField**: `boolean`

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:22

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

• **clone**: () => [`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[clone](Backland.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Backland.md#fieldcomposer)<`Record`<`string`, `any`\>, [`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>\>

#### Inherited from

[FieldType](Backland.FieldType.md).[composer](Backland.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `undefined` \| `Def`

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

• **describe**: (`description`: `string`) => [`RecordField`](Backland.RecordField.md)<`Def`\>

#### Type declaration

▸ (`description`): [`RecordField`](Backland.RecordField.md)<`Def`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`RecordField`](Backland.RecordField.md)<`Def`\>

#### Inherited from

[FieldType](Backland.FieldType.md).[describe](Backland.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `undefined` \| `Def` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: [`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `def` | `undefined` \| `Def` |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | [`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\> |

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

• **parse**: [`FieldTypeParser`](../modules/Backland.md#fieldtypeparser)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>\>

#### Overrides

[FieldType](Backland.FieldType.md).[parse](Backland.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:24

___

### type

• **type**: ``"record"``

#### Inherited from

[FieldType](Backland.FieldType.md).[type](Backland.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"record"``

#### Inherited from

[FieldType](Backland.FieldType.md).[typeName](Backland.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: <Def_1\>(`def?`: `Def_1`) => [`RecordField`](Backland.RecordField.md)<`Def_1`\>

#### Type declaration

▸ <`Def_1`\>(`def?`): [`RecordField`](Backland.RecordField.md)<`Def_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Def_1` | extends [`RecordFieldDef`](../modules/Backland.md#recordfielddef) = { `keyType`: ``"string"`` ; `type`: ``"any"``  } |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | `Def_1` |

##### Returns

[`RecordField`](Backland.RecordField.md)<`Def_1`\>

#### Overrides

[FieldType](Backland.FieldType.md).[create](Backland.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:26

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

▸ **is**(`input`): input is InferRecordFieldType<Def\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is InferRecordFieldType<Def\>

#### Inherited from

[FieldType](Backland.FieldType.md).[is](Backland.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[setDefaultValue](Backland.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Backland.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toList](Backland.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toOptional](Backland.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Backland.FieldType.md)<[`InferRecordFieldType`](../modules/Backland.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Backland.FieldType.md).[toRequired](Backland.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:52

___

### validate

▸ **validate**(`input`): input is InferRecordFieldType<Def\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is InferRecordFieldType<Def\>

#### Inherited from

[FieldType](Backland.FieldType.md).[validate](Backland.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:34

___

### is

▸ `Static` **is**(`input`): input is RecordField<RecordFieldDef\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is RecordField<RecordFieldDef\>

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:23
