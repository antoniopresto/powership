[Backland](../README.md) / [Modules](../modules.md) / [Accounts System.](../modules/Accounts_System_.md) / RefreshTokensErrors

# Enumeration: RefreshTokensErrors

[Accounts System.](../modules/Accounts_System_.md).RefreshTokensErrors

## Table of contents

### Enumeration Members

- [InvalidSession](Accounts_System_.RefreshTokensErrors.md#invalidsession)
- [InvalidTokens](Accounts_System_.RefreshTokensErrors.md#invalidtokens)
- [SessionNotFound](Accounts_System_.RefreshTokensErrors.md#sessionnotfound)
- [TokenVerificationFailed](Accounts_System_.RefreshTokensErrors.md#tokenverificationfailed)
- [UserNotFound](Accounts_System_.RefreshTokensErrors.md#usernotfound)

## Enumeration Members

### InvalidSession

• **InvalidSession** = ``"InvalidSession"``

Session is not valid

#### Defined in

[packages/accounts/src/utils/AccountError.ts:109](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L109)

___

### InvalidTokens

• **InvalidTokens** = ``"InvalidTokens"``

Will throw if access or refresh token are missing.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:93](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L93)

___

### SessionNotFound

• **SessionNotFound** = ``"SessionNotFound"``

Will throw if session is not found.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:101](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L101)

___

### TokenVerificationFailed

• **TokenVerificationFailed** = ``"TokenVerificationFailed"``

Will throw if verification of the access token or refresh token failed.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:97](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L97)

___

### UserNotFound

• **UserNotFound** = ``"UserNotFound"``

Will throw if user is not found.

#### Defined in

[packages/accounts/src/utils/AccountError.ts:105](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L105)
