[Solarwind](../README.md) / [Modules](../modules.md) / [Accounts System.](../modules/Accounts_System_.md) / FindSessionByauthTokenErrors

# Enumeration: FindSessionByauthTokenErrors

[Accounts System.](../modules/Accounts_System_.md).FindSessionByauthTokenErrors

## Table of contents

### Enumeration Members

- [InvalidToken](Accounts_System_.FindSessionByauthTokenErrors.md#invalidtoken)
- [SessionNotFound](Accounts_System_.FindSessionByauthTokenErrors.md#sessionnotfound)
- [TokenVerificationFailed](Accounts_System_.FindSessionByauthTokenErrors.md#tokenverificationfailed)

## Enumeration Members

### InvalidToken

• **InvalidToken** = ``"InvalidToken"``

Will throw if access token is missing.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:136](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L136)

___

### SessionNotFound

• **SessionNotFound** = ``"SessionNotFound"``

Will throw if session is not found.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:144](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L144)

___

### TokenVerificationFailed

• **TokenVerificationFailed** = ``"TokenVerificationFailed"``

Will throw if verification of the access token failed.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:140](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L140)
