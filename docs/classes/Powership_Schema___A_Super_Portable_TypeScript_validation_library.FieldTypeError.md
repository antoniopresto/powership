[Powership](../README.md) / [Modules](../modules.md) / [Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md) / FieldTypeError

# Class: FieldTypeError

[Powership Schema - A Super Portable TypeScript validation library](../modules/Powership_Schema___A_Super_Portable_TypeScript_validation_library.md).FieldTypeError

## Hierarchy

- `Error`

  ↳ **`FieldTypeError`**

## Table of contents

### Constructors

- [constructor](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldTypeError.md#constructor)

### Properties

- [\_\_isFieldTypeError](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldTypeError.md#__isfieldtypeerror)
- [code](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldTypeError.md#code)
- [is](Powership_Schema___A_Super_Portable_TypeScript_validation_library.FieldTypeError.md#is)

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

[packages/schema/src/fields/FieldTypeErrors.ts:22](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldTypeErrors.ts#L22)

## Properties

### \_\_isFieldTypeError

• **\_\_isFieldTypeError**: `boolean` = `true`

#### Defined in

[packages/schema/src/fields/FieldTypeErrors.ts:18](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldTypeErrors.ts#L18)

___

### code

• **code**: ``"minSize"`` \| ``"maxSize"`` \| ``"regexMismatch"`` \| ``"sizeMismatch"`` \| ``"unexpected"`` \| ``"unexpectedType"`` \| ``"custom"`` \| ``"invalidPhone"`` \| ``"requiredField"``

#### Defined in

[packages/schema/src/fields/FieldTypeErrors.ts:19](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldTypeErrors.ts#L19)

___

### is

▪ `Static` **is**: (`el`: `any`) => el is FieldTypeError = `isFieldError`

#### Type declaration

▸ (`el`): el is FieldTypeError

##### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `any` |

##### Returns

el is FieldTypeError

#### Defined in

[packages/schema/src/fields/FieldTypeErrors.ts:20](https://github.com/antoniopresto/powership/blob/2672a73/packages/schema/src/fields/FieldTypeErrors.ts#L20)
