[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / FieldTypeError

# Class: FieldTypeError

[Solarwind](../modules/Solarwind.md).FieldTypeError

## Hierarchy

- `Error`

  ↳ **`FieldTypeError`**

## Table of contents

### Constructors

- [constructor](Solarwind.FieldTypeError.md#constructor)

### Properties

- [\_\_isFieldTypeError](Solarwind.FieldTypeError.md#__isfieldtypeerror)
- [code](Solarwind.FieldTypeError.md#code)
- [is](Solarwind.FieldTypeError.md#is)

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
