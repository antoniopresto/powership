[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / FieldTypeError

# Class: FieldTypeError

[Backland](../modules/Backland.md).FieldTypeError

## Hierarchy

- `Error`

  ↳ **`FieldTypeError`**

## Table of contents

### Constructors

- [constructor](Backland.FieldTypeError.md#constructor)

### Properties

- [\_\_isFieldTypeError](Backland.FieldTypeError.md#__isfieldtypeerror)
- [code](Backland.FieldTypeError.md#code)
- [is](Backland.FieldTypeError.md#is)

## Constructors

### constructor

• **new FieldTypeError**(`code`, `details?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | ``"minSize"`` \| ``"maxSize"`` \| ``"regexMismatch"`` \| ``"sizeMismatch"`` \| ``"unexpected"`` \| ``"unexpectedType"`` \| ``"custom"`` \| ``"invalidPhone"`` \| ``"requiredField"`` |
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

• **code**: ``"minSize"`` \| ``"maxSize"`` \| ``"regexMismatch"`` \| ``"sizeMismatch"`` \| ``"unexpected"`` \| ``"unexpectedType"`` \| ``"custom"`` \| ``"invalidPhone"`` \| ``"requiredField"``

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
