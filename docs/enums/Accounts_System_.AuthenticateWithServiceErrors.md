[Backland](../README.md) / [Modules](../modules.md) / [Accounts System.](../modules/Accounts_System_.md) / AuthenticateWithServiceErrors

# Enumeration: AuthenticateWithServiceErrors

[Accounts System.](../modules/Accounts_System_.md).AuthenticateWithServiceErrors

## Table of contents

### Enumeration Members

- [AuthenticationFailed](Accounts_System_.AuthenticateWithServiceErrors.md#authenticationfailed)
- [ServiceNotFound](Accounts_System_.AuthenticateWithServiceErrors.md#servicenotfound)
- [UserDeactivated](Accounts_System_.AuthenticateWithServiceErrors.md#userdeactivated)

## Enumeration Members

### AuthenticationFailed

• **AuthenticationFailed** = ``"AuthenticationFailed"``

Service failed to authenticate the user

#### Defined in

[packages/accounts/src/utils/AccountError.ts:42](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L42)

___

### ServiceNotFound

• **ServiceNotFound** = ``"ServiceNotFound"``

Service is not registered on the server

#### Defined in

[packages/accounts/src/utils/AccountError.ts:34](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L34)

___

### UserDeactivated

• **UserDeactivated** = ``"UserDeactivated"``

User is deactivated, so not allowed to login

#### Defined in

[packages/accounts/src/utils/AccountError.ts:38](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L38)
