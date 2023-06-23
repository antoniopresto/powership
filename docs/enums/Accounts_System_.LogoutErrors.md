[Powership](../README.md) / [Modules](../modules.md) / [Accounts System.](../modules/Accounts_System_.md) / LogoutErrors

# Enumeration: LogoutErrors

[Accounts System.](../modules/Accounts_System_.md).LogoutErrors

## Table of contents

### Enumeration Members

- [InvalidSession](Accounts_System_.LogoutErrors.md#invalidsession)
- [InvalidToken](Accounts_System_.LogoutErrors.md#invalidtoken)
- [SessionNotFound](Accounts_System_.LogoutErrors.md#sessionnotfound)
- [TokenVerificationFailed](Accounts_System_.LogoutErrors.md#tokenverificationfailed)

## Enumeration Members

### InvalidSession

• **InvalidSession** = ``"InvalidSession"``

Session is not valid

#### Defined in

packages/accounts/src/utils/AccountError.ts:116

___

### InvalidToken

• **InvalidToken** = ``"InvalidToken"``

Will throw if access token is missing.

#### Defined in

packages/accounts/src/utils/AccountError.ts:121

___

### SessionNotFound

• **SessionNotFound** = ``"SessionNotFound"``

Will throw if session is not found.

#### Defined in

packages/accounts/src/utils/AccountError.ts:129

___

### TokenVerificationFailed

• **TokenVerificationFailed** = ``"TokenVerificationFailed"``

Will throw if verification of the access token failed.

#### Defined in

packages/accounts/src/utils/AccountError.ts:125
