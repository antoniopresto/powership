[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / RecordField

# Class: RecordField<Def\>

[Powership](../modules/Powership.md).RecordField

## Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`RecordFieldDef`](../modules/Powership.md#recordfielddef) |

## Hierarchy

- [`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `Def` \| `undefined`\>

  ↳ **`RecordField`**

## Table of contents

### Constructors

- [constructor](Powership.RecordField.md#constructor)

### Properties

- [$](Powership.RecordField.md#$)
- [\_\_\_inferable](Powership.RecordField.md#___inferable)
- [\_\_isFieldType](Powership.RecordField.md#__isfieldtype)
- [\_\_isRecordField](Powership.RecordField.md#__isrecordfield)
- [applyParser](Powership.RecordField.md#applyparser)
- [clone](Powership.RecordField.md#clone)
- [composer](Powership.RecordField.md#composer)
- [def](Powership.RecordField.md#def)
- [defaultValue](Powership.RecordField.md#defaultvalue)
- [describe](Powership.RecordField.md#describe)
- [describeField](Powership.RecordField.md#describefield)
- [description](Powership.RecordField.md#description)
- [hidden](Powership.RecordField.md#hidden)
- [id](Powership.RecordField.md#id)
- [list](Powership.RecordField.md#list)
- [name](Powership.RecordField.md#name)
- [optional](Powership.RecordField.md#optional)
- [options](Powership.RecordField.md#options)
- [parse](Powership.RecordField.md#parse)
- [type](Powership.RecordField.md#type)
- [typeName](Powership.RecordField.md#typename)
- [create](Powership.RecordField.md#create)

### Accessors

- [asFinalFieldDef](Powership.RecordField.md#asfinalfielddef)
- [definition](Powership.RecordField.md#definition)

### Methods

- [is](Powership.RecordField.md#is)
- [setDefaultValue](Powership.RecordField.md#setdefaultvalue)
- [toList](Powership.RecordField.md#tolist)
- [toOptional](Powership.RecordField.md#tooptional)
- [toRequired](Powership.RecordField.md#torequired)
- [validate](Powership.RecordField.md#validate)
- [is](Powership.RecordField.md#is-1)

## Constructors

### constructor

• **new RecordField**<`Def`\>(`def?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Def` | extends [`RecordFieldDef`](../modules/Powership.md#recordfielddef) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | `Def` |

#### Overrides

FieldType&lt;InferRecordFieldType&lt;Def\&gt;, &#x27;record&#x27;, Def \| undefined\&gt;.constructor

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:25

## Properties

### $

• `Optional` **$**: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md)

#### Inherited from

[FieldType](Powership.FieldType.md).[$](Powership.FieldType.md#$)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:42

___

### \_\_\_inferable

• **\_\_\_inferable**: [`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\> extends `R` ? `R` : `never`

#### Inherited from

[FieldType](Powership.FieldType.md).[___inferable](Powership.FieldType.md#___inferable)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:23

___

### \_\_isFieldType

• `Readonly` **\_\_isFieldType**: ``true``

#### Inherited from

[FieldType](Powership.FieldType.md).[__isFieldType](Powership.FieldType.md#__isfieldtype)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:64

___

### \_\_isRecordField

• **\_\_isRecordField**: `boolean`

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:22

___

### applyParser

• **applyParser**: <Type_1\>(`parser`: { `parse`: (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject)) => `Type_1` ; `preParse?`: (`input`: `any`) => `Type_1`  }) => [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`Type_1`\>

#### Type declaration

▸ <`Type_1`\>(`parser`): [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`Type_1`\>

##### Type parameters

| Name |
| :------ |
| `Type_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | `Object` |
| `parser.parse` | (`input`: `any`, `_options`: [`FieldParserOptionsObject`](../modules/Powership.md#fieldparseroptionsobject)) => `Type_1` |
| `parser.preParse?` | (`input`: `any`) => `Type_1` |

##### Returns

[`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<`Type_1`\>

#### Inherited from

[FieldType](Powership.FieldType.md).[applyParser](Powership.FieldType.md#applyparser)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:58

___

### clone

• **clone**: () => [`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Type declaration

▸ (): [`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

##### Returns

[`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[clone](Powership.FieldType.md#clone)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:66

___

### composer

• **composer**: `undefined` \| [`FieldComposer`](../modules/Powership.md#fieldcomposer)<`Record`<`string`, `any`\>, [`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>\>

#### Inherited from

[FieldType](Powership.FieldType.md).[composer](Powership.FieldType.md#composer)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:24

___

### def

• `Readonly` **def**: `undefined` \| `Def`

#### Inherited from

[FieldType](Powership.FieldType.md).[def](Powership.FieldType.md#def)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:22

___

### defaultValue

• **defaultValue**: `undefined`

#### Inherited from

[FieldType](Powership.FieldType.md).[defaultValue](Powership.FieldType.md#defaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:39

___

### describe

• **describe**: (`description`: `string`) => [`RecordField`](Powership.RecordField.md)<`Def`\>

#### Type declaration

▸ (`description`): [`RecordField`](Powership.RecordField.md)<`Def`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

##### Returns

[`RecordField`](Powership.RecordField.md)<`Def`\>

#### Inherited from

[FieldType](Powership.FieldType.md).[describe](Powership.FieldType.md#describe)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:43

___

### describeField

• **describeField**: () => { `$?`: [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) ; `def`: `undefined` \| `Def` ; `defaultValue`: `undefined` ; `description`: `undefined` \| `string` ; `hidden`: `boolean` ; `list`: ``false`` ; `optional`: ``false`` ; `type`: [`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `$?` | [`CustomFieldConfig`](../interfaces/Powership.CustomFieldConfig.md) |
| `def` | `undefined` \| `Def` |
| `defaultValue` | `undefined` |
| `description` | `undefined` \| `string` |
| `hidden` | `boolean` |
| `list` | ``false`` |
| `optional` | ``false`` |
| `type` | [`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\> |

#### Inherited from

[FieldType](Powership.FieldType.md).[describeField](Powership.FieldType.md#describefield)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:44

___

### description

• `Optional` **description**: `string`

#### Inherited from

[FieldType](Powership.FieldType.md).[description](Powership.FieldType.md#description)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:40

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

[FieldType](Powership.FieldType.md).[hidden](Powership.FieldType.md#hidden)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:41

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FieldType](Powership.FieldType.md).[id](Powership.FieldType.md#id)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:26

___

### list

• **list**: ``false``

#### Inherited from

[FieldType](Powership.FieldType.md).[list](Powership.FieldType.md#list)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:38

___

### name

• `Optional` **name**: `string`

#### Inherited from

[FieldType](Powership.FieldType.md).[name](Powership.FieldType.md#name)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:27

___

### optional

• **optional**: ``false``

#### Inherited from

[FieldType](Powership.FieldType.md).[optional](Powership.FieldType.md#optional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:37

___

### options

• **options**: `Object`

#### Inherited from

[FieldType](Powership.FieldType.md).[options](Powership.FieldType.md#options)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:28

___

### parse

• **parse**: [`FieldTypeParser`](../modules/Powership.md#fieldtypeparser)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>\>

#### Overrides

[FieldType](Powership.FieldType.md).[parse](Powership.FieldType.md#parse)

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:24

___

### type

• **type**: ``"record"``

#### Inherited from

[FieldType](Powership.FieldType.md).[type](Powership.FieldType.md#type)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:21

___

### typeName

• `Readonly` **typeName**: ``"record"``

#### Inherited from

[FieldType](Powership.FieldType.md).[typeName](Powership.FieldType.md#typename)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:20

___

### create

▪ `Static` **create**: <Def_1\>(`def?`: `Def_1`) => [`RecordField`](Powership.RecordField.md)<`Def_1`\>

#### Type declaration

▸ <`Def_1`\>(`def?`): [`RecordField`](Powership.RecordField.md)<`Def_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Def_1` | extends [`RecordFieldDef`](../modules/Powership.md#recordfielddef) = { `keyType`: ``"string"`` ; `type`: ``"any"``  } |

##### Parameters

| Name | Type |
| :------ | :------ |
| `def?` | `Def_1` |

##### Returns

[`RecordField`](Powership.RecordField.md)<`Def_1`\>

#### Overrides

[FieldType](Powership.FieldType.md).[create](Powership.FieldType.md#create)

#### Defined in

packages/schema/lib/fields/RecordField.d.ts:26

## Accessors

### asFinalFieldDef

• `get` **asFinalFieldDef**(): [`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.asFinalFieldDef

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:62

___

### definition

• `get` **definition**(): [`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Returns

[`AllFinalFieldDefinitions`](../modules/Powership.md#allfinalfielddefinitions)[`TypeName`]

#### Inherited from

FieldType.definition

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:25

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

[FieldType](Powership.FieldType.md).[is](Powership.FieldType.md#is)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:36

___

### setDefaultValue

▸ **setDefaultValue**<`T`\>(`value`): [`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `T`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `T`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[setDefaultValue](Powership.FieldType.md#setdefaultvalue)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:57

___

### toList

▸ **toList**(`options?`): [`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``1``, ``0``, `undefined`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ListDefinitionTruthy`](../modules/Powership.md#listdefinitiontruthy) |

#### Returns

[`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``1``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toList](Powership.FieldType.md#tolist)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:56

___

### toOptional

▸ **toOptional**(): [`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``1``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``1``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toOptional](Powership.FieldType.md#tooptional)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:54

___

### toRequired

▸ **toRequired**(): [`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Returns

[`FieldType`](Powership.FieldType.md)<[`InferRecordFieldType`](../modules/Powership.md#inferrecordfieldtype)<`Def`\>, ``"record"``, `undefined` \| `Def`, ``0``, ``0``, `undefined`, {}\>

#### Inherited from

[FieldType](Powership.FieldType.md).[toRequired](Powership.FieldType.md#torequired)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:55

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

[FieldType](Powership.FieldType.md).[validate](Powership.FieldType.md#validate)

#### Defined in

packages/schema/lib/fields/FieldType.d.ts:35

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
