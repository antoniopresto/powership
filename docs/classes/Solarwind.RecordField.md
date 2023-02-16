[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / RecordField

# Class: RecordField<Def\>

[Solarwind](../modules/Solarwind.md).RecordField

## Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`RecordFieldDef`](../modules/Solarwind.md#recordfielddef) |

## Hierarchy

- [`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `Def` \| `undefined`\>

  ↳ **`RecordField`**

## Table of contents

### Constructors

- [constructor](Solarwind.RecordField.md#constructor)

### Properties

- [\_\_\_inferable](Solarwind.RecordField.md#___inferable)
- [\_\_isFieldType](Solarwind.RecordField.md#__isfieldtype)
- [\_\_isRecordField](Solarwind.RecordField.md#__isrecordfield)
- [applyParser](Solarwind.RecordField.md#applyparser)
- [clone](Solarwind.RecordField.md#clone)
- [composer](Solarwind.RecordField.md#composer)
- [def](Solarwind.RecordField.md#def)
- [defaultValue](Solarwind.RecordField.md#defaultvalue)
- [describe](Solarwind.RecordField.md#describe)
- [describeField](Solarwind.RecordField.md#describefield)
- [description](Solarwind.RecordField.md#description)
- [hidden](Solarwind.RecordField.md#hidden)
- [id](Solarwind.RecordField.md#id)
- [list](Solarwind.RecordField.md#list)
- [name](Solarwind.RecordField.md#name)
- [optional](Solarwind.RecordField.md#optional)
- [options](Solarwind.RecordField.md#options)
- [parse](Solarwind.RecordField.md#parse)
- [type](Solarwind.RecordField.md#type)
- [typeName](Solarwind.RecordField.md#typename)
- [create](Solarwind.RecordField.md#create)

### Accessors

- [asFinalFieldDef](Solarwind.RecordField.md#asfinalfielddef)
- [definition](Solarwind.RecordField.md#definition)

### Methods

- [is](Solarwind.RecordField.md#is)
- [setDefaultValue](Solarwind.RecordField.md#setdefaultvalue)
- [toList](Solarwind.RecordField.md#tolist)
- [toOptional](Solarwind.RecordField.md#tooptional)
- [toRequired](Solarwind.RecordField.md#torequired)
- [validate](Solarwind.RecordField.md#validate)
- [is](Solarwind.RecordField.md#is-1)

## Constructors

### constructor

• **new RecordField**<`Def`\>(`def?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`RecordFieldDef`](../modules/Solarwind.md#recordfielddef) |

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

• **\_\_\_inferable**: [`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\> extends `R` ? `R` : `never`

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

### \_\_isRecordField

• **\_\_isRecordField**: `boolean`

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:22

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

• **clone**: () => [`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[clone](Solarwind.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:63

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Solarwind.md#fieldcomposer)<`Record`<`string`, `any`\>, [`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[composer](Solarwind.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### def

• `Readonly` **def**: `undefined` \| `Def`

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

• **describe**: (`description`: `string`) => [`RecordField`](Solarwind.RecordField.md)<`Def`\>

#### Type declaration

▸ (`description`): [`RecordField`](Solarwind.RecordField.md)<`Def`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`RecordField`](Solarwind.RecordField.md)<`Def`\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[describe](Solarwind.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### describeField

• **describeField**: () => { `def`: `undefined` \| `Def` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: [`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>  }

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
| `type` | [`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\> |

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

• **parse**: [`FieldTypeParser`](../modules/Solarwind.md#fieldtypeparser)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[parse](Solarwind.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:24

___

### type

• **type**: ``"record"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[type](Solarwind.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### typeName

• `Readonly` **typeName**: ``"record"``

#### Inherited from

[FieldType](Solarwind.FieldType.md).[typeName](Solarwind.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:19

___

### create

▪ `Static` **create**: <Def_1\>(`def?`: `Def_1`) => [`RecordField`](Solarwind.RecordField.md)<`Def_1`\>

#### Type declaration

▸ <`Def_1`\>(`def?`): [`RecordField`](Solarwind.RecordField.md)<`Def_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Def_1` | extends [`RecordFieldDef`](../modules/Solarwind.md#recordfielddef) = { `keyType`: ``"string"`` ; `type`: ``"any"``  } |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | `Def_1` |

##### Returns

[`RecordField`](Solarwind.RecordField.md)<`Def_1`\>

#### Overrides

[FieldType](Solarwind.FieldType.md).[create](Solarwind.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:26

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

▸ **is**(`input`): input is InferRecordFieldType<Def\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is InferRecordFieldType<Def\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[is](Solarwind.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[setDefaultValue](Solarwind.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toList

▸ **toList**(`options?`): [`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Solarwind.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toList](Solarwind.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:53

___

### toOptional

▸ **toOptional**(): [`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toOptional](Solarwind.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:51

___

### toRequired

▸ **toRequired**(): [`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Solarwind.FieldType.md)<[`InferRecordFieldType`](../modules/Solarwind.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Solarwind.FieldType.md).[toRequired](Solarwind.FieldType.md#torequired)

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

[FieldType](Solarwind.FieldType.md).[validate](Solarwind.FieldType.md#validate)

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
