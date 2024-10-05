[Powership](../README.md) / [Modules](../modules.md) / [Accounts System.](../modules/Accounts_System_.md) / AccountError

# Class: AccountError

[Accounts System.](../modules/Accounts_System_.md).AccountError

## Hierarchy

- `Error`

  ↳ **`AccountError`**

## Table of contents

### Constructors

- [constructor](Accounts_System_.AccountError.md#constructor)

### Properties

- [\_\_isAccountError](Accounts_System_.AccountError.md#__isaccounterror)
- [\_\_kind](Accounts_System_.AccountError.md#__kind)
- [code](Accounts_System_.AccountError.md#code)

### Methods

- [is](Accounts_System_.AccountError.md#is)

## Constructors

### constructor

• **new AccountError**(`code`, `details?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `code` | ``"Unauthorized"`` \| ``"InvalidRequest"`` \| ``"InvalidLocationInfoUserAgent"`` \| ``"InvalidLocationInfoIP"`` \| ``"InvalidEncodedSession"`` \| ``"UserNotFound"`` \| ``"InvalidSession"`` \| ``"InvalidToken"`` \| ``"TokenVerificationFailed"`` \| ``"SessionNotFound"`` \| ``"InvalidTokens"`` \| ``"ImpersonatedUserNotFound"`` \| ``"ServiceNotFound"`` \| ``"UserDeactivated"`` \| ``"AuthenticationFailed"`` | `undefined` |
| `details` | `any` | `'ACCOUNT_ERROR'` |

#### Overrides

Error.constructor

#### Defined in

[packages/accounts/src/utils/AccountError.ts:9](https://github.com/antoniopresto/powership/blob/2672a73/packages/accounts/src/utils/AccountError.ts#L9)

## Properties

### \_\_isAccountError

• **\_\_isAccountError**: `boolean` = `true`

#### Defined in

[packages/accounts/src/utils/AccountError.ts:4](https://github.com/antoniopresto/powership/blob/2672a73/packages/accounts/src/utils/AccountError.ts#L4)

___

### \_\_kind

• **\_\_kind**: `string` = `'AccountError'`

#### Defined in

[packages/accounts/src/utils/AccountError.ts:5](https://github.com/antoniopresto/powership/blob/2672a73/packages/accounts/src/utils/AccountError.ts#L5)

___

### code

• **code**: ``"Unauthorized"`` \| ``"InvalidRequest"`` \| ``"InvalidLocationInfoUserAgent"`` \| ``"InvalidLocationInfoIP"`` \| ``"InvalidEncodedSession"`` \| ``"UserNotFound"`` \| ``"InvalidSession"`` \| ``"InvalidToken"`` \| ``"TokenVerificationFailed"`` \| ``"SessionNotFound"`` \| ``"InvalidTokens"`` \| ``"ImpersonatedUserNotFound"`` \| ``"ServiceNotFound"`` \| ``"UserDeactivated"`` \| ``"AuthenticationFailed"``

#### Defined in

[packages/accounts/src/utils/AccountError.ts:7](https://github.com/antoniopresto/powership/blob/2672a73/packages/accounts/src/utils/AccountError.ts#L7)

## Methods

### is

▸ `Static` **is**(`input`): input is AccountError

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |

#### Returns

input is AccountError

#### Defined in

[packages/accounts/src/utils/AccountError.ts:16](https://github.com/antoniopresto/powership/blob/2672a73/packages/accounts/src/utils/AccountError.ts#L16)
