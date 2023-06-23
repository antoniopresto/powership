[Powership](../README.md) / [Modules](../modules.md) / [Accounts System.](../modules/Accounts_System_.md) / LoginWithServiceErrors

# Enumeration: LoginWithServiceErrors

[Accounts System.](../modules/Accounts_System_.md).LoginWithServiceErrors

## Table of contents

### Enumeration Members

- [AuthenticationFailed](Accounts_System_.LoginWithServiceErrors.md#authenticationfailed)
- [ServiceNotFound](Accounts_System_.LoginWithServiceErrors.md#servicenotfound)
- [UserDeactivated](Accounts_System_.LoginWithServiceErrors.md#userdeactivated)

## Enumeration Members

### AuthenticationFailed

• **AuthenticationFailed** = ``"AuthenticationFailed"``

Service failed to authenticate the user

#### Defined in

packages/accounts/src/utils/AccountError.ts:57

___

### ServiceNotFound

• **ServiceNotFound** = ``"ServiceNotFound"``

Service is not registered on the server

#### Defined in

packages/accounts/src/utils/AccountError.ts:49

___

### UserDeactivated

• **UserDeactivated** = ``"UserDeactivated"``

User is deactivated, so not allowed to login

#### Defined in

packages/accounts/src/utils/AccountError.ts:53
