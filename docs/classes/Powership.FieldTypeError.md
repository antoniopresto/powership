[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / FieldTypeError

# Class: FieldTypeError

[Powership](../modules/Powership.md).FieldTypeError

## Hierarchy

- `Error`

  ↳ **`FieldTypeError`**

## Table of contents

### Constructors

- [constructor](Powership.FieldTypeError.md#constructor)

### Properties

- [\_\_isFieldTypeError](Powership.FieldTypeError.md#__isfieldtypeerror)
- [code](Powership.FieldTypeError.md#code)
- [is](Powership.FieldTypeError.md#is)

## Constructors

### constructor

• **new FieldTypeError**(`code`, `details?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | ``"custom"`` \| ``"minSize"`` \| ``"maxSize"`` \| ``"regexMismatch"`` \| ``"sizeMismatch"`` \| ``"unexpected"`` \| ``"unexpectedType"`` \| ``"invalidPhone"`` \| ``"requiredField"`` |
| `details?` | `any` |

#### Overrides

Error.constructor

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:7

## Properties

### \_\_isFieldTypeError

• **\_\_isFieldTypeError**: `boolean`

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:4

___

### code

• **code**: ``"custom"`` \| ``"minSize"`` \| ``"maxSize"`` \| ``"regexMismatch"`` \| ``"sizeMismatch"`` \| ``"unexpected"`` \| ``"unexpectedType"`` \| ``"invalidPhone"`` \| ``"requiredField"``

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:5

___

### is

▪ `Static` **is**: (`el`: `any`) => el is FieldTypeError

#### Type declaration

▸ (`el`): el is FieldTypeError

##### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `any` |

##### Returns

el is FieldTypeError

#### Defined in

packages/schema/lib/fields/FieldTypeErrors.d.ts:6
