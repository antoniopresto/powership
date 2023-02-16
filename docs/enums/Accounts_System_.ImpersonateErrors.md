[Solarwind](../README.md) / [Modules](../modules.md) / [Accounts System.](../modules/Accounts_System_.md) / ImpersonateErrors

# Enumeration: ImpersonateErrors

[Accounts System.](../modules/Accounts_System_.md).ImpersonateErrors

## Table of contents

### Enumeration Members

- [ImpersonatedUserNotFound](Accounts_System_.ImpersonateErrors.md#impersonatedusernotfound)
- [InvalidSession](Accounts_System_.ImpersonateErrors.md#invalidsession)
- [InvalidToken](Accounts_System_.ImpersonateErrors.md#invalidtoken)
- [SessionNotFound](Accounts_System_.ImpersonateErrors.md#sessionnotfound)
- [TokenVerificationFailed](Accounts_System_.ImpersonateErrors.md#tokenverificationfailed)
- [UserNotFound](Accounts_System_.ImpersonateErrors.md#usernotfound)

## Enumeration Members

### ImpersonatedUserNotFound

• **ImpersonatedUserNotFound** = ``"ImpersonatedUserNotFound"``

Impersonated user not found
If option `ambiguousErrorMessages` is true, this will never throw.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:73](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L73)

___

### InvalidSession

• **InvalidSession** = ``"InvalidSession"``

Session is not valid

#### Defined in

[packages/accounts/src/utils/AccountError.ts:68](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L68)

___

### InvalidToken

• **InvalidToken** = ``"InvalidToken"``

Will throw if access token is missing.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:78](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L78)

___

### SessionNotFound

• **SessionNotFound** = ``"SessionNotFound"``

Will throw if session is not found.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:86](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L86)

___

### TokenVerificationFailed

• **TokenVerificationFailed** = ``"TokenVerificationFailed"``

Will throw if verification of the access token failed.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:82](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L82)

___

### UserNotFound

• **UserNotFound** = ``"UserNotFound"``

Will throw if user is not found.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:64](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L64)
