[Backland](../README.md) / [Modules](../modules.md) / Accounts System.

# Module: Accounts System.

## Table of contents

### Enumerations

- [AuthenticateWithServiceErrors](../enums/Accounts_System_.AuthenticateWithServiceErrors.md)
- [FindSessionByauthTokenErrors](../enums/Accounts_System_.FindSessionByauthTokenErrors.md)
- [ImpersonateErrors](../enums/Accounts_System_.ImpersonateErrors.md)
- [LoginWithServiceErrors](../enums/Accounts_System_.LoginWithServiceErrors.md)
- [LogoutErrors](../enums/Accounts_System_.LogoutErrors.md)
- [RefreshTokensErrors](../enums/Accounts_System_.RefreshTokensErrors.md)
- [RequestErrors](../enums/Accounts_System_.RequestErrors.md)
- [ResumeSessionErrors](../enums/Accounts_System_.ResumeSessionErrors.md)

### Classes

- [AccountError](../classes/Accounts_System_.AccountError.md)
- [Accounts](../classes/Accounts_System_.Accounts.md)
- [Sessions](../classes/Accounts_System_.Sessions.md)

### Interfaces

- [AccountsOptions](../interfaces/Accounts_System_.AccountsOptions.md)
- [RefreshTokensInput](../interfaces/Accounts_System_.RefreshTokensInput.md)
- [SessionsOptions](../interfaces/Accounts_System_.SessionsOptions.md)

### Type Aliases

- [AccessType](Accounts_System_.md#accesstype)
- [AccessTypeDocument](Accounts_System_.md#accesstypedocument)
- [AccessTypeKind](Accounts_System_.md#accesstypekind)
- [AccessTypeUnion](Accounts_System_.md#accesstypeunion)
- [AccountDocument](Accounts_System_.md#accountdocument)
- [AccountEntity](Accounts_System_.md#accountentity)
- [AccountErrorCode](Accounts_System_.md#accounterrorcode)
- [AccountInput](Accounts_System_.md#accountinput)
- [AccountSessionHooks](Accounts_System_.md#accountsessionhooks)
- [AccountTokenStringData](Accounts_System_.md#accounttokenstringdata)
- [AccountTokenStringInput](Accounts_System_.md#accounttokenstringinput)
- [ConnectionInformation](Accounts_System_.md#connectioninformation)
- [CreateUserPasswordInput](Accounts_System_.md#createuserpasswordinput)
- [EmailTemplate](Accounts_System_.md#emailtemplate)
- [LoginResult](Accounts_System_.md#loginresult)
- [ParsedAuthToken](Accounts_System_.md#parsedauthtoken)
- [PasswordHashParams](Accounts_System_.md#passwordhashparams)
- [PasswordVerifyInput](Accounts_System_.md#passwordverifyinput)
- [Session](Accounts_System_.md#session)
- [SessionConnectionInfo](Accounts_System_.md#sessionconnectioninfo)
- [SessionDocument](Accounts_System_.md#sessiondocument)
- [SessionHooksContext](Accounts_System_.md#sessionhookscontext)
- [SessionInput](Accounts_System_.md#sessioninput)
- [SessionJWTPayload](Accounts_System_.md#sessionjwtpayload)
- [SessionRequest](Accounts_System_.md#sessionrequest)
- [Token](Accounts_System_.md#token)
- [TokenDocument](Accounts_System_.md#tokendocument)
- [TokenEntity](Accounts_System_.md#tokenentity)

### Variables

- [AccessType](Accounts_System_.md#accesstype-1)
- [AccessTypeEntity](Accounts_System_.md#accesstypeentity)
- [AccessTypeUnion](Accounts_System_.md#accesstypeunion-1)
- [AccountEntity](Accounts_System_.md#accountentity-1)
- [AccountErrorsKindEnum](Accounts_System_.md#accounterrorskindenum)
- [AccountHooks](Accounts_System_.md#accounthooks)
- [AccountTokenStringData](Accounts_System_.md#accounttokenstringdata-1)
- [AccountType](Accounts_System_.md#accounttype)
- [ConnectionInformationSchema](Accounts_System_.md#connectioninformationschema)
- [DEFAULT\_TOKEN\_DURATION](Accounts_System_.md#default_token_duration)
- [EmailTemplateType](Accounts_System_.md#emailtemplatetype)
- [PasswordHash](Accounts_System_.md#passwordhash)
- [PasswordType](Accounts_System_.md#passwordtype)
- [SessionConnectionInfo](Accounts_System_.md#sessionconnectioninfo-1)
- [SessionEntity](Accounts_System_.md#sessionentity)
- [SessionJWTPayloadType](Accounts_System_.md#sessionjwtpayloadtype)
- [SessionType](Accounts_System_.md#sessiontype)
- [TokenEntity](Accounts_System_.md#tokenentity-1)
- [TokenType](Accounts_System_.md#tokentype)
- [USERNAME\_REGEX](Accounts_System_.md#username_regex)
- [USER\_NAME\_ERRORS](Accounts_System_.md#user_name_errors)
- [accessTypesEnum](Accounts_System_.md#accesstypesenum)
- [accessTypesList](Accounts_System_.md#accesstypeslist)
- [badWords](Accounts_System_.md#badwords)
- [reservedUsernames](Accounts_System_.md#reservedusernames)
- [tokenKindEnum](Accounts_System_.md#tokenkindenum)
- [usernameType](Accounts_System_.md#usernametype)

### Functions

- [createAccountSessionHooks](Accounts_System_.md#createaccountsessionhooks)
- [createRandomAuthTokenString](Accounts_System_.md#createrandomauthtokenstring)
- [createRandomToken](Accounts_System_.md#createrandomtoken)
- [parseAuthTokenString](Accounts_System_.md#parseauthtokenstring)
- [signAccountJWT](Accounts_System_.md#signaccountjwt)
- [validateUsername](Accounts_System_.md#validateusername)
- [verifySessionJWT](Accounts_System_.md#verifysessionjwt)

## Type Aliases

### AccessType

Ƭ **AccessType**: `Infer`<typeof [`AccessType`](Accounts_System_.md#accesstype-1)\>

#### Defined in

[packages/accounts/src/types/AccessType.ts:45](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L45)

[packages/accounts/src/types/AccessType.ts:55](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L55)

___

### AccessTypeDocument

Ƭ **AccessTypeDocument**: `EntityDocument`<[`AccessType`](Accounts_System_.md#accesstype-1)\>

#### Defined in

[packages/accounts/src/entity/AccessTypeEntity.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/AccessTypeEntity.ts#L22)

___

### AccessTypeKind

Ƭ **AccessTypeKind**: typeof [`accessTypesList`](Accounts_System_.md#accesstypeslist)[`number`]

#### Defined in

[packages/accounts/src/types/AccessType.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L6)

___

### AccessTypeUnion

Ƭ **AccessTypeUnion**: `Infer`<typeof [`AccessTypeUnion`](Accounts_System_.md#accesstypeunion-1)\>

#### Defined in

[packages/accounts/src/types/AccessType.ts:8](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L8)

[packages/accounts/src/types/AccessType.ts:43](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L43)

___

### AccountDocument

Ƭ **AccountDocument**: `ReturnType`<typeof [`AccountEntity`](Accounts_System_.md#accountentity-1)[``"parse"``]\>

#### Defined in

[packages/accounts/src/entity/AccountEntity.ts:36](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/AccountEntity.ts#L36)

___

### AccountEntity

Ƭ **AccountEntity**: typeof [`AccountEntity`](Accounts_System_.md#accountentity-1)

#### Defined in

[packages/accounts/src/entity/AccountEntity.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/AccountEntity.ts#L14)

[packages/accounts/src/entity/AccountEntity.ts:35](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/AccountEntity.ts#L35)

___

### AccountErrorCode

Ƭ **AccountErrorCode**: keyof typeof [`AccountErrorsKindEnum`](Accounts_System_.md#accounterrorskindenum)

#### Defined in

[packages/accounts/src/utils/AccountError.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L21)

___

### AccountInput

Ƭ **AccountInput**: `Omit`<[`AccountDocument`](Accounts_System_.md#accountdocument), keyof `EntityDocumentBase`\>

#### Defined in

[packages/accounts/src/entity/AccountEntity.ts:37](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/AccountEntity.ts#L37)

___

### AccountSessionHooks

Ƭ **AccountSessionHooks**: `ReturnType`<typeof [`createAccountSessionHooks`](Accounts_System_.md#createaccountsessionhooks)\>

#### Defined in

[packages/accounts/src/Sessions.ts:436](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L436)

___

### AccountTokenStringData

Ƭ **AccountTokenStringData**: `Infer`<typeof [`AccountTokenStringData`](Accounts_System_.md#accounttokenstringdata-1)\>

#### Defined in

[packages/accounts/src/utils/crypto.ts:114](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L114)

[packages/accounts/src/utils/crypto.ts:126](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L126)

___

### AccountTokenStringInput

Ƭ **AccountTokenStringInput**: `Omit`<[`AccountTokenStringData`](Accounts_System_.md#accounttokenstringdata-1), ``"r"`` \| ``"i"`` \| ``"u"``\> & { `connectionInfo`: [`ConnectionInformation`](Accounts_System_.md#connectioninformation)  }

#### Defined in

[packages/accounts/src/utils/crypto.ts:128](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L128)

___

### ConnectionInformation

Ƭ **ConnectionInformation**: `Infer`<typeof [`ConnectionInformationSchema`](Accounts_System_.md#connectioninformationschema)\>

#### Defined in

[packages/accounts/src/types/ConnectionInformation.ts:12](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/ConnectionInformation.ts#L12)

___

### CreateUserPasswordInput

Ƭ **CreateUserPasswordInput**: `Object`

#### Index signature

▪ [K: `string`]: `unknown`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `extraContacts?` | [`AccessTypeUnion`](Accounts_System_.md#accesstypeunion-1)[] |
| `password` | `string` |
| `request?` | `Record`<`string`, `any`\> |
| `username` | `string` |

#### Defined in

[packages/accounts/src/Accounts.ts:33](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Accounts.ts#L33)

___

### EmailTemplate

Ƭ **EmailTemplate**: `Infer`<typeof [`EmailTemplateType`](Accounts_System_.md#emailtemplatetype)\>

#### Defined in

[packages/accounts/src/types/EmailTemplate.ts:16](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/EmailTemplate.ts#L16)

___

### LoginResult

Ƭ **LoginResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | [`AccountDocument`](Accounts_System_.md#accountdocument) |
| `authToken` | `string` |
| `sessionDocument` | [`SessionDocument`](Accounts_System_.md#sessiondocument) |

#### Defined in

[packages/accounts/src/types/LoginResult.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/LoginResult.ts#L5)

___

### ParsedAuthToken

Ƭ **ParsedAuthToken**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountCursor` | `ParsedIndexCursor` |
| `dataIPHash` | `number` |
| `dataUAHash` | `number` |
| `originalString` | `string` |
| `randomPart` | `string` |
| `sessionCursor` | `ParsedIndexCursor` |

#### Defined in

[packages/accounts/src/utils/crypto.ts:105](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L105)

___

### PasswordHashParams

Ƭ **PasswordHashParams**: `Infer`<typeof `hash.input`\>

#### Defined in

[packages/accounts/src/utils/PasswordHash.ts:48](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/PasswordHash.ts#L48)

___

### PasswordVerifyInput

Ƭ **PasswordVerifyInput**: `Infer`<typeof `verify.input`\>

#### Defined in

[packages/accounts/src/utils/PasswordHash.ts:49](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/PasswordHash.ts#L49)

___

### Session

Ƭ **Session**: `Infer`<typeof [`SessionType`](Accounts_System_.md#sessiontype)\>

#### Defined in

[packages/accounts/src/types/SessionType.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/SessionType.ts#L21)

___

### SessionConnectionInfo

Ƭ **SessionConnectionInfo**: `Infer`<typeof [`SessionConnectionInfo`](Accounts_System_.md#sessionconnectioninfo-1)\>

#### Defined in

[packages/accounts/src/types/SessionType.ts:4](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/SessionType.ts#L4)

[packages/accounts/src/types/SessionType.ts:23](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/SessionType.ts#L23)

___

### SessionDocument

Ƭ **SessionDocument**: `EntityDocument`<[`Session`](Accounts_System_.md#session)\>

#### Defined in

[packages/accounts/src/types/SessionType.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/SessionType.ts#L22)

___

### SessionHooksContext

Ƭ **SessionHooksContext**: `Object`

#### Defined in

[packages/accounts/src/Sessions.ts:389](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L389)

___

### SessionInput

Ƭ **SessionInput**: `Infer`<typeof `SessionEntity.inputType`\>

#### Defined in

[packages/accounts/src/entity/SessionEntity.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/SessionEntity.ts#L21)

___

### SessionJWTPayload

Ƭ **SessionJWTPayload**: `Infer`<typeof [`SessionJWTPayloadType`](Accounts_System_.md#sessionjwtpayloadtype)\>

#### Defined in

[packages/accounts/src/utils/crypto.ts:148](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L148)

___

### SessionRequest

Ƭ **SessionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authToken?` | `string` |
| `onCallDestroySession` | ``null`` \| (`request`: [`SessionRequest`](Accounts_System_.md#sessionrequest)) => `unknown` |
| `requestIp` | `string` |
| `sessionDestroyed?` | `boolean` |
| `user?` | [`AccountDocument`](Accounts_System_.md#accountdocument) |
| `userAgent` | `string` |

#### Defined in

[packages/accounts/src/Sessions.ts:380](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L380)

___

### Token

Ƭ **Token**: `Infer`<typeof [`TokenType`](Accounts_System_.md#tokentype)\>

#### Defined in

[packages/accounts/src/types/TokenType.ts:51](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/TokenType.ts#L51)

___

### TokenDocument

Ƭ **TokenDocument**: `EntityDocument`<[`Token`](Accounts_System_.md#token)\>

#### Defined in

[packages/accounts/src/entity/TokenEntity.ts:27](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/TokenEntity.ts#L27)

___

### TokenEntity

Ƭ **TokenEntity**: typeof [`TokenEntity`](Accounts_System_.md#tokenentity-1)

#### Defined in

[packages/accounts/src/entity/TokenEntity.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/TokenEntity.ts#L5)

[packages/accounts/src/entity/TokenEntity.ts:25](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/TokenEntity.ts#L25)

## Variables

### AccessType

• `Const` **AccessType**: `GraphType`<{ `object`: { `accountId`: ``"ID"`` = 'ID'; `data`: `GraphType`<{ `union`: readonly [{ `object`: { `kind`: { `literal`: ``"email"`` = accessTypesEnum.email } ; `value`: ``"email"`` = 'email' }  }, { `object`: { `kind`: { `literal`: ``"phone"`` = accessTypesEnum.phone } ; `value`: ``"phone"`` = accessTypesEnum.phone }  }, { `object`: { `authToken`: ``"string"`` = 'string'; `kind`: { `literal`: ``"oauth"`` = accessTypesEnum.oauth } ; `provider`: { `description`: ``"Provider name"`` = 'Provider name'; `string`: {} = {} } ; `value`: { `alias`: ``"provider"`` = 'provider' }  }  }, { `object`: { `kind`: { `literal`: ``"custom"`` = accessTypesEnum.custom } ; `meta`: ``"record"`` = 'record'; `value`: ``"string"`` = 'string' }  }]  }\> = AccessTypeUnion; `meta`: ``"record?"`` = 'record?'; `verified`: ``"boolean?"`` = 'boolean?' }  }\>

#### Defined in

[packages/accounts/src/types/AccessType.ts:45](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L45)

[packages/accounts/src/types/AccessType.ts:55](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L55)

___

### AccessTypeEntity

• `Const` **AccessTypeEntity**: `Entity`<{ `accountId`: ``"ID"`` = 'ID'; `data`: `GraphType`<{ `union`: readonly [{ `object`: { `kind`: { `literal`: ``"email"`` = accessTypesEnum.email } ; `value`: ``"email"`` = 'email' }  }, { `object`: { `kind`: { `literal`: ``"phone"`` = accessTypesEnum.phone } ; `value`: ``"phone"`` = accessTypesEnum.phone }  }, { `object`: { `authToken`: ``"string"`` = 'string'; `kind`: { `literal`: ``"oauth"`` = accessTypesEnum.oauth } ; `provider`: { `description`: ``"Provider name"`` = 'Provider name'; `string`: {} = {} } ; `value`: { `alias`: ``"provider"`` = 'provider' }  }  }, { `object`: { `kind`: { `literal`: ``"custom"`` = accessTypesEnum.custom } ; `meta`: ``"record"`` = 'record'; `value`: ``"string"`` = 'string' }  }]  }\> = AccessTypeUnion; `meta`: ``"record?"`` = 'record?'; `verified`: ``"boolean?"`` = 'boolean?' }, readonly [{ `PK`: readonly [``".accountId"``] ; `SK`: readonly [``".data.kind"``, ``".ulid"``] ; `name`: ``"_id"`` = '\_id'; `relatedTo`: ``"Account"`` = 'Account' }, { `PK`: readonly [``".data.kind"``, ``".data.value"``] ; `name`: ``"_id2"`` = '\_id2' }]\>

#### Defined in

[packages/accounts/src/entity/AccessTypeEntity.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/AccessTypeEntity.ts#L5)

___

### AccessTypeUnion

• `Const` **AccessTypeUnion**: `GraphType`<{ `union`: readonly [{ `object`: { `kind`: { `literal`: ``"email"`` = accessTypesEnum.email } ; `value`: ``"email"`` = 'email' }  }, { `object`: { `kind`: { `literal`: ``"phone"`` = accessTypesEnum.phone } ; `value`: ``"phone"`` = accessTypesEnum.phone }  }, { `object`: { `authToken`: ``"string"`` = 'string'; `kind`: { `literal`: ``"oauth"`` = accessTypesEnum.oauth } ; `provider`: { `description`: ``"Provider name"`` = 'Provider name'; `string`: {} = {} } ; `value`: { `alias`: ``"provider"`` = 'provider' }  }  }, { `object`: { `kind`: { `literal`: ``"custom"`` = accessTypesEnum.custom } ; `meta`: ``"record"`` = 'record'; `value`: ``"string"`` = 'string' }  }]  }\>

#### Defined in

[packages/accounts/src/types/AccessType.ts:8](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L8)

[packages/accounts/src/types/AccessType.ts:43](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L43)

___

### AccountEntity

• `Const` **AccountEntity**: `EntityFromContext`<`EntityTypesContext`<`Omit`<`Omit`<`Omit`<`Object`, ``"sessions"``\> & { `sessions`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"token"`` \| ``"accountId"`` \| ``"valid"`` \| ``"connectionInfo"``\> & { `accountId`: ``"string"`` = 'string'; `connectionInfo`: `GraphType`<{ `object`: { `$string`: ``"unknown"`` = 'unknown'; `ip`: ``"string?"`` = 'string?'; `userAgent`: ``"string?"`` = 'string?' }  }\> = SessionConnectionInfo; `token`: ``"string"`` = 'string'; `valid`: ``"boolean"`` = 'boolean' }  }\>  }  }  }, ``"accessTypes"``\> & { `accessTypes`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"data"`` \| ``"meta"`` \| ``"accountId"`` \| ``"verified"``\> & { `accountId`: ``"ID"`` = 'ID'; `data`: `GraphType`<{ `union`: readonly [{ `object`: { `kind`: { `literal`: ``"email"`` = accessTypesEnum.email } ; `value`: ``"email"`` = 'email' }  }, { `object`: { `kind`: { `literal`: ``"phone"`` = accessTypesEnum.phone } ; `value`: ``"phone"`` = accessTypesEnum.phone }  }, { `object`: { `authToken`: ``"string"`` = 'string'; `kind`: { `literal`: ``"oauth"`` = accessTypesEnum.oauth } ; `provider`: { `description`: ``"Provider name"`` = 'Provider name'; `string`: {} = {} } ; `value`: { `alias`: ``"provider"`` = 'provider' }  }  }, { `object`: { `kind`: { `literal`: ``"custom"`` = accessTypesEnum.custom } ; `meta`: ``"record"`` = 'record'; `value`: ``"string"`` = 'string' }  }]  }\> = AccessTypeUnion; `meta`: ``"record?"`` = 'record?'; `verified`: ``"boolean?"`` = 'boolean?' }  }\>  }  }  }, ``"tokens"``\> & { `tokens`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"meta"`` \| ``"accountId"`` \| ``"value"`` \| ``"kind"`` \| ``"reason"`` \| ``"createdFor"`` \| ``"used"`` \| ``"usageLocations"`` \| ``"location"``\> & { `accountId`: ``"ID"`` = 'ID'; `createdFor`: { `description`: `string` ; `string`: { `min`: ``2`` = 2 }  } ; `kind`: { `description`: ``"Examples: 2fa, password_recovery"`` = 'Examples: 2fa, password\_recovery'; `enum`: (``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"``)[] = tokenKindEnum.list } ; `location`: { `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `meta`: ``"record?"`` = 'record?'; `reason`: ``"string?"`` = 'string?'; `usageLocations`: { `list`: ``true`` = true; `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `used`: { `boolean`: {} = {}; `defaultValue`: ``false`` = false; `optional`: ``true`` = true } ; `value`: { `string`: { `max`: ``1000`` = 1000; `min`: ``4`` = 4 }  }  }  }\>  }  }  }, ({ `PK`: ``".accountId"``[] ; `name`: `string` = '\_id' } \| { `PK`: ``".username"``[] ; `name`: `string` = '\_id2' })[]\>\>

#### Defined in

[packages/accounts/src/entity/AccountEntity.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/AccountEntity.ts#L14)

[packages/accounts/src/entity/AccountEntity.ts:35](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/AccountEntity.ts#L35)

___

### AccountErrorsKindEnum

• `Const` **AccountErrorsKindEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthenticationFailed` | [`AuthenticationFailed`](../enums/Accounts_System_.LoginWithServiceErrors.md#authenticationfailed) |
| `ImpersonatedUserNotFound` | [`ImpersonatedUserNotFound`](../enums/Accounts_System_.ImpersonateErrors.md#impersonatedusernotfound) |
| `InvalidEncodedSession` | [`InvalidEncodedSession`](../enums/Accounts_System_.RequestErrors.md#invalidencodedsession) |
| `InvalidLocationInfoIP` | [`InvalidLocationInfoIP`](../enums/Accounts_System_.RequestErrors.md#invalidlocationinfoip) |
| `InvalidLocationInfoUserAgent` | [`InvalidLocationInfoUserAgent`](../enums/Accounts_System_.RequestErrors.md#invalidlocationinfouseragent) |
| `InvalidRequest` | [`InvalidRequest`](../enums/Accounts_System_.RequestErrors.md#invalidrequest) |
| `InvalidSession` | [`InvalidSession`](../enums/Accounts_System_.ResumeSessionErrors.md#invalidsession) |
| `InvalidToken` | [`InvalidToken`](../enums/Accounts_System_.ResumeSessionErrors.md#invalidtoken) |
| `InvalidTokens` | [`InvalidTokens`](../enums/Accounts_System_.RefreshTokensErrors.md#invalidtokens) |
| `ServiceNotFound` | [`ServiceNotFound`](../enums/Accounts_System_.LoginWithServiceErrors.md#servicenotfound) |
| `SessionNotFound` | [`SessionNotFound`](../enums/Accounts_System_.ResumeSessionErrors.md#sessionnotfound) |
| `TokenVerificationFailed` | [`TokenVerificationFailed`](../enums/Accounts_System_.ResumeSessionErrors.md#tokenverificationfailed) |
| `Unauthorized` | [`Unauthorized`](../enums/Accounts_System_.RequestErrors.md#unauthorized) |
| `UserDeactivated` | [`UserDeactivated`](../enums/Accounts_System_.LoginWithServiceErrors.md#userdeactivated) |
| `UserNotFound` | [`UserNotFound`](../enums/Accounts_System_.ResumeSessionErrors.md#usernotfound) |

#### Defined in

[packages/accounts/src/utils/AccountError.ts:171](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountError.ts#L171)

___

### AccountHooks

• `Const` **AccountHooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthenticateError` | `string` |
| `AuthenticateSuccess` | `string` |
| `ChangePasswordSuccess` | `string` |
| `CreateUserError` | `string` |
| `CreateUserSuccess` | `string` |
| `ImpersonationError` | `string` |
| `ImpersonationSuccess` | `string` |
| `LoginError` | `string` |
| `LoginSuccess` | `string` |
| `LogoutError` | `string` |
| `LogoutSuccess` | `string` |
| `RefreshTokensError` | `string` |
| `RefreshTokensSuccess` | `string` |
| `ResetPasswordSuccess` | `string` |
| `ResumeSessionError` | `string` |
| `ResumeSessionSuccess` | `string` |
| `ValidateLogin` | `string` |

#### Defined in

[packages/accounts/src/utils/AccountHooks.ts:1](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/AccountHooks.ts#L1)

___

### AccountTokenStringData

• `Const` **AccountTokenStringData**: `GraphType`<{ `object`: { `a`: ``"string"`` = 'string'; `i`: ``"int"`` = 'int'; `k`: { `enum`: readonly [``"A"``]  } ; `r`: ``"string"`` = 'string'; `s`: ``"string"`` = 'string'; `u`: ``"int"`` = 'int' }  }\>

#### Defined in

[packages/accounts/src/utils/crypto.ts:114](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L114)

[packages/accounts/src/utils/crypto.ts:126](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L126)

___

### AccountType

• `Const` **AccountType**: `ObjectType`<`Object`, `Object`\>

#### Defined in

[packages/accounts/src/types/AccountType.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccountType.ts#L5)

___

### ConnectionInformationSchema

• `Const` **ConnectionInformationSchema**: `ObjectType`<{ `$string`: ``"string"`` = 'string'; `ip`: ``"string"`` = 'string'; `userAgent`: ``"string"`` = 'string' }, { `$string`: ``"string"`` = 'string'; `ip`: ``"string"`` = 'string'; `userAgent`: ``"string"`` = 'string' }\>

#### Defined in

[packages/accounts/src/types/ConnectionInformation.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/ConnectionInformation.ts#L3)

___

### DEFAULT\_TOKEN\_DURATION

• `Const` **DEFAULT\_TOKEN\_DURATION**: ``"7d"``

#### Defined in

[packages/accounts/src/Sessions.ts:25](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L25)

___

### EmailTemplateType

• `Const` **EmailTemplateType**: `GraphType`<{ `object`: { `body`: { `object`: { `content`: ``"string"`` = 'string'; `kind`: { `enum`: readonly [``"html"``, ``"text"``]  }  }  } ; `from`: ``"string"`` = 'string'; `subject`: ``"string"`` = 'string' }  }\>

#### Defined in

[packages/accounts/src/types/EmailTemplate.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/EmailTemplate.ts#L3)

___

### PasswordHash

• `Const` **PasswordHash**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hash` | typeof `hash` |
| `type` | `GraphType`<{ `def`: { `max`: `number` = 200; `min`: `number` = 7 } ; `type`: ``"string"`` = 'string' }\> |
| `verify` | typeof `verify` |
| `validate` | (`value`: `string`) => `string` |

#### Defined in

[packages/accounts/src/utils/PasswordHash.ts:39](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/PasswordHash.ts#L39)

___

### PasswordType

• `Const` **PasswordType**: `GraphType`<{ `def`: { `max`: `number` = 200; `min`: `number` = 7 } ; `type`: ``"string"`` = 'string' }\>

#### Defined in

[packages/accounts/src/utils/PasswordHash.ts:16](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/PasswordHash.ts#L16)

___

### SessionConnectionInfo

• `Const` **SessionConnectionInfo**: `GraphType`<{ `object`: { `$string`: ``"unknown"`` = 'unknown'; `ip`: ``"string?"`` = 'string?'; `userAgent`: ``"string?"`` = 'string?' }  }\>

#### Defined in

[packages/accounts/src/types/SessionType.ts:4](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/SessionType.ts#L4)

[packages/accounts/src/types/SessionType.ts:23](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/SessionType.ts#L23)

___

### SessionEntity

• `Const` **SessionEntity**: `Entity`<{ `accountId`: ``"string"`` = 'string'; `connectionInfo`: `GraphType`<{ `object`: { `$string`: ``"unknown"`` = 'unknown'; `ip`: ``"string?"`` = 'string?'; `userAgent`: ``"string?"`` = 'string?' }  }\> = SessionConnectionInfo; `token`: ``"string"`` = 'string'; `valid`: ``"boolean"`` = 'boolean' }, { `PK`: ``".accountId"``[] ; `SK`: ``".ulid"``[] ; `name`: `string` = '\_id'; `relatedTo`: `string` = 'Account' }[]\>

#### Defined in

[packages/accounts/src/entity/SessionEntity.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/SessionEntity.ts#L6)

___

### SessionJWTPayloadType

• `Const` **SessionJWTPayloadType**: `GraphType`<{ `object`: { `aud`: { `optional`: ``true`` = true; `union`: readonly [``"string"``, ``"[string]"``]  } ; `data`: ``"string"`` = 'string'; `exp`: ``"float?"`` = 'float?'; `iat`: ``"float?"`` = 'float?'; `iss`: ``"string?"`` = 'string?'; `jti`: ``"string?"`` = 'string?'; `nbf`: ``"float?"`` = 'float?'; `sub`: ``"string?"`` = 'string?' }  }\>

#### Defined in

[packages/accounts/src/utils/crypto.ts:135](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L135)

___

### SessionType

• `Const` **SessionType**: `GraphType`<{ `object`: { `accountId`: ``"string"`` = 'string'; `connectionInfo`: `GraphType`<{ `object`: { `$string`: ``"unknown"`` = 'unknown'; `ip`: ``"string?"`` = 'string?'; `userAgent`: ``"string?"`` = 'string?' }  }\> = SessionConnectionInfo; `token`: ``"string"`` = 'string'; `valid`: ``"boolean"`` = 'boolean' }  }\>

#### Defined in

[packages/accounts/src/types/SessionType.ts:12](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/SessionType.ts#L12)

___

### TokenEntity

• `Const` **TokenEntity**: `Entity`<{ `accountId`: ``"ID"`` = 'ID'; `createdFor`: { `description`: `string` ; `string`: { `min`: ``2`` = 2 }  } ; `kind`: { `description`: ``"Examples: 2fa, password_recovery"`` = 'Examples: 2fa, password\_recovery'; `enum`: (``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"``)[] = tokenKindEnum.list } ; `location`: { `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `meta`: ``"record?"`` = 'record?'; `reason`: ``"string?"`` = 'string?'; `usageLocations`: { `list`: ``true`` = true; `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `used`: { `boolean`: {} = {}; `defaultValue`: ``false`` = false; `optional`: ``true`` = true } ; `value`: { `string`: { `max`: ``1000`` = 1000; `min`: ``4`` = 4 }  }  }, ({ `PK`: ``".accountId"``[] ; `SK`: (``".ulid"`` \| ``".kind"`` \| ``".createdFor"``)[] ; `name`: `string` = '\_id'; `relatedTo`: `string` = 'Account' } \| { `PK`: ``".value"``[] ; `SK`: (``".accountId"`` \| ``".kind"``)[] ; `name`: `string` = '\_id2'; `relatedTo`: `undefined` = 'Account' })[]\>

#### Defined in

[packages/accounts/src/entity/TokenEntity.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/TokenEntity.ts#L5)

[packages/accounts/src/entity/TokenEntity.ts:25](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/entity/TokenEntity.ts#L25)

___

### TokenType

• `Const` **TokenType**: `GraphType`<{ `object`: { `accountId`: ``"ID"`` = 'ID'; `createdFor`: { `description`: `string` ; `string`: { `min`: ``2`` = 2 }  } ; `kind`: { `description`: ``"Examples: 2fa, password_recovery"`` = 'Examples: 2fa, password\_recovery'; `enum`: (``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"``)[] = tokenKindEnum.list } ; `location`: { `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `meta`: ``"record?"`` = 'record?'; `reason`: ``"string?"`` = 'string?'; `usageLocations`: { `list`: ``true`` = true; `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `used`: { `boolean`: {} = {}; `defaultValue`: ``false`` = false; `optional`: ``true`` = true } ; `value`: { `string`: { `max`: ``1000`` = 1000; `min`: ``4`` = 4 }  }  }  }\>

#### Defined in

[packages/accounts/src/types/TokenType.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/TokenType.ts#L14)

___

### USERNAME\_REGEX

• `Const` **USERNAME\_REGEX**: `RegExp`

#### Defined in

[packages/accounts/src/utils/validateUserName.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/validateUserName.ts#L6)

___

### USER\_NAME\_ERRORS

• `Const` **USER\_NAME\_ERRORS**: { `INVALID_CHARS`: ``"INVALID_CHARS"`` ; `LESS_THAN_2`: ``"LESS_THAN_2"`` ; `MORE_THAN_16`: ``"MORE_THAN_16"`` ; `NOT_STRING`: ``"NOT_STRING"``  } & {} & {}

#### Defined in

[packages/accounts/src/utils/validateUserName.ts:15](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/validateUserName.ts#L15)

___

### accessTypesEnum

• `Const` **accessTypesEnum**: { `custom`: ``"custom"`` ; `email`: ``"email"`` ; `oauth`: ``"oauth"`` ; `phone`: ``"phone"``  } & {} & {}

#### Defined in

[packages/accounts/src/types/AccessType.ts:4](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L4)

___

### accessTypesList

• `Const` **accessTypesList**: (``"email"`` \| ``"oauth"`` \| ``"phone"`` \| ``"custom"`` \| (``"email"`` \| ``"oauth"`` \| ``"phone"`` \| ``"custom"``)[])[]

#### Defined in

[packages/accounts/src/types/AccessType.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/AccessType.ts#L5)

___

### badWords

• `Const` **badWords**: `string`[]

#### Defined in

[packages/accounts/src/utils/badWords.ts:1](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/badWords.ts#L1)

___

### reservedUsernames

• `Const` **reservedUsernames**: `string`[]

#### Defined in

[packages/accounts/src/utils/reservedUsernames.ts:1](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/reservedUsernames.ts#L1)

___

### tokenKindEnum

• `Const` **tokenKindEnum**: { `custom`: ``"custom"`` ; `email_verification`: ``"email_verification"`` ; `magick_link`: ``"magick_link"`` ; `password`: ``"password"`` ; `password_recovery`: ``"password_recovery"`` ; `phone_verification`: ``"phone_verification"`` ; `twoFactorAuth`: ``"twoFactorAuth"``  } & {} & {}

#### Defined in

[packages/accounts/src/types/TokenType.ts:4](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/types/TokenType.ts#L4)

___

### usernameType

• `Const` **usernameType**: `GraphType`<{ `string`: { `max`: `number` = 16; `min`: `number` = 3 }  }\>

#### Defined in

[packages/accounts/src/utils/validateUserName.ts:8](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/validateUserName.ts#L8)

## Functions

### createAccountSessionHooks

▸ **createAccountSessionHooks**(`_options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`SessionsOptions`](../interfaces/Accounts_System_.SessionsOptions.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `onRefreshTokens` | `Waterfall`<[`SessionRequest`](Accounts_System_.md#sessionrequest) & { `result`: [`LoginResult`](Accounts_System_.md#loginresult)  }, [`SessionHooksContext`](Accounts_System_.md#sessionhookscontext)\> |
| `onRequest` | `Waterfall`<[`SessionRequest`](Accounts_System_.md#sessionrequest), [`SessionHooksContext`](Accounts_System_.md#sessionhookscontext)\> |
| `onUpsertSessionError` | `Waterfall`<`Error`, [`SessionRequest`](Accounts_System_.md#sessionrequest)\> |

#### Defined in

[packages/accounts/src/Sessions.ts:391](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L391)

___

### createRandomAuthTokenString

▸ **createRandomAuthTokenString**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`AccountTokenStringInput`](Accounts_System_.md#accounttokenstringinput) |

#### Returns

`string`

#### Defined in

[packages/accounts/src/utils/crypto.ts:46](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L46)

___

### createRandomToken

▸ **createRandomToken**(`length?`): `string`

Generate a random token string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `43` |

#### Returns

`string`

#### Defined in

[packages/accounts/src/utils/crypto.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L22)

___

### parseAuthTokenString

▸ **parseAuthTokenString**(`token`, `expectedKind`): [`ParsedAuthToken`](Accounts_System_.md#parsedauthtoken)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `expectedKind` | ``"A"`` |

#### Returns

[`ParsedAuthToken`](Accounts_System_.md#parsedauthtoken)

#### Defined in

[packages/accounts/src/utils/crypto.ts:61](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L61)

___

### signAccountJWT

▸ **signAccountJWT**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.config` | `SignOptions` & { `expiresIn`: `NonNullable`<`StringValue`\>  } |
| `input.data` | `string` |
| `input.secret` | `Secret` |

#### Returns

`string`

#### Defined in

[packages/accounts/src/utils/crypto.ts:26](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L26)

___

### validateUsername

▸ **validateUsername**(`username`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`string`

#### Defined in

[packages/accounts/src/utils/validateUserName.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/validateUserName.ts#L22)

___

### verifySessionJWT

▸ **verifySessionJWT**(`input`): [`SessionJWTPayload`](Accounts_System_.md#sessionjwtpayload)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.authToken` | `string` |
| `input.config?` | `VerifyOptions` |
| `input.secret` | `Secret` |

#### Returns

[`SessionJWTPayload`](Accounts_System_.md#sessionjwtpayload)

#### Defined in

[packages/accounts/src/utils/crypto.ts:36](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/utils/crypto.ts#L36)
