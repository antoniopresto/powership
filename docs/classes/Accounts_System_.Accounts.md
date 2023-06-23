[Powership](../README.md) / [Modules](../modules.md) / [Accounts System.](../modules/Accounts_System_.md) / Accounts

# Class: Accounts

[Accounts System.](../modules/Accounts_System_.md).Accounts

## Table of contents

### Constructors

- [constructor](Accounts_System_.Accounts.md#constructor)

### Properties

- [AccessTypeEntity](Accounts_System_.Accounts.md#accesstypeentity)
- [AccountEntity](Accounts_System_.Accounts.md#accountentity)
- [SessionEntity](Accounts_System_.Accounts.md#sessionentity)
- [TokenEntity](Accounts_System_.Accounts.md#tokenentity)
- [sessions](Accounts_System_.Accounts.md#sessions)

### Accessors

- [addHooks](Accounts_System_.Accounts.md#addhooks)
- [handleRequest](Accounts_System_.Accounts.md#handlerequest)
- [logout](Accounts_System_.Accounts.md#logout)
- [refreshTokens](Accounts_System_.Accounts.md#refreshtokens)

### Methods

- [addEmailVerificationToken](Accounts_System_.Accounts.md#addemailverificationtoken)
- [addResetPasswordToken](Accounts_System_.Accounts.md#addresetpasswordtoken)
- [createAccount](Accounts_System_.Accounts.md#createaccount)
- [findUser](Accounts_System_.Accounts.md#finduser)
- [removeAllResetPasswordTokens](Accounts_System_.Accounts.md#removeallresetpasswordtokens)
- [setPassword](Accounts_System_.Accounts.md#setpassword)
- [userByPasswordLogin](Accounts_System_.Accounts.md#userbypasswordlogin)
- [verifyEmail](Accounts_System_.Accounts.md#verifyemail)

## Constructors

### constructor

• **new Accounts**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AccountsOptions`](../interfaces/Accounts_System_.AccountsOptions.md) |

#### Defined in

packages/accounts/src/Accounts.ts:54

## Properties

### AccessTypeEntity

• **AccessTypeEntity**: `Entity`<{ `accountId`: ``"ID"`` = 'ID'; `data`: `GraphType`<{ `union`: readonly [{ `object`: { `kind`: { `literal`: ``"email"`` = accessTypesEnum.email } ; `value`: ``"email"`` = 'email' }  }, { `object`: { `kind`: { `literal`: ``"phone"`` = accessTypesEnum.phone } ; `value`: ``"phone"`` = accessTypesEnum.phone }  }, { `object`: { `authToken`: ``"string"`` = 'string'; `kind`: { `literal`: ``"oauth"`` = accessTypesEnum.oauth } ; `provider`: { `description`: ``"Provider name"`` = 'Provider name'; `string`: {} = {} } ; `value`: { `alias`: ``"provider"`` = 'provider' }  }  }, { `object`: { `kind`: { `literal`: ``"custom"`` = accessTypesEnum.custom } ; `meta`: ``"record"`` = 'record'; `value`: ``"string"`` = 'string' }  }]  }\> = AccessTypeUnion; `meta`: ``"record?"`` = 'record?'; `verified`: ``"boolean?"`` = 'boolean?' }, readonly [{ `PK`: readonly [``".accountId"``] ; `SK`: readonly [``".data.kind"``, ``".ulid"``] ; `name`: ``"_id"`` = '\_id'; `relatedTo`: ``"Account"`` = 'Account' }, { `PK`: readonly [``".data.kind"``, ``".data.value"``] ; `name`: ``"_id2"`` = '\_id2' }]\> = `__AccessTypeEntity`

#### Defined in

packages/accounts/src/Accounts.ts:51

___

### AccountEntity

• **AccountEntity**: `EntityFromContext`<`EntityTypesContext`<`Omit`<`Omit`<`Omit`<`Object`, ``"sessions"``\> & { `sessions`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"token"`` \| ``"accountId"`` \| ``"valid"`` \| ``"connectionInfo"``\> & { `accountId`: ``"string"`` = 'string'; `connectionInfo`: `GraphType`<{ `object`: { `$string`: ``"unknown"`` = 'unknown'; `ip`: ``"string?"`` = 'string?'; `userAgent`: ``"string?"`` = 'string?' }  }\> = SessionConnectionInfo; `token`: ``"string"`` = 'string'; `valid`: ``"boolean"`` = 'boolean' }  }\>  }  }  }, ``"accessTypes"``\> & { `accessTypes`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"data"`` \| ``"meta"`` \| ``"accountId"`` \| ``"verified"``\> & { `accountId`: ``"ID"`` = 'ID'; `data`: `GraphType`<{ `union`: readonly [{ `object`: { `kind`: { `literal`: ``"email"`` = accessTypesEnum.email } ; `value`: ``"email"`` = 'email' }  }, { `object`: { `kind`: { `literal`: ``"phone"`` = accessTypesEnum.phone } ; `value`: ``"phone"`` = accessTypesEnum.phone }  }, { `object`: { `authToken`: ``"string"`` = 'string'; `kind`: { `literal`: ``"oauth"`` = accessTypesEnum.oauth } ; `provider`: { `description`: ``"Provider name"`` = 'Provider name'; `string`: {} = {} } ; `value`: { `alias`: ``"provider"`` = 'provider' }  }  }, { `object`: { `kind`: { `literal`: ``"custom"`` = accessTypesEnum.custom } ; `meta`: ``"record"`` = 'record'; `value`: ``"string"`` = 'string' }  }]  }\> = AccessTypeUnion; `meta`: ``"record?"`` = 'record?'; `verified`: ``"boolean?"`` = 'boolean?' }  }\>  }  }  }, ``"tokens"``\> & { `tokens`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"meta"`` \| ``"accountId"`` \| ``"value"`` \| ``"kind"`` \| ``"reason"`` \| ``"createdFor"`` \| ``"used"`` \| ``"usageLocations"`` \| ``"location"``\> & { `accountId`: ``"ID"`` = 'ID'; `createdFor`: { `description`: `string` ; `string`: { `min`: ``2`` = 2 }  } ; `kind`: { `description`: ``"Examples: 2fa, password_recovery"`` = 'Examples: 2fa, password\_recovery'; `enum`: (``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"``)[] = tokenKindEnum.list } ; `location`: { `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `meta`: ``"record?"`` = 'record?'; `reason`: ``"string?"`` = 'string?'; `usageLocations`: { `list`: ``true`` = true; `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `used`: { `boolean`: {} = {}; `defaultValue`: ``false`` = false; `optional`: ``true`` = true } ; `value`: { `string`: { `max`: ``1000`` = 1000; `min`: ``4`` = 4 }  }  }  }\>  }  }  }, ({ `PK`: ``".accountId"``[] ; `name`: `string` = '\_id' } \| { `PK`: ``".username"``[] ; `name`: `string` = '\_id2' })[]\>\> = `__AccountEntity`

#### Defined in

packages/accounts/src/Accounts.ts:49

___

### SessionEntity

• **SessionEntity**: `Entity`<{ `accountId`: ``"string"`` = 'string'; `connectionInfo`: `GraphType`<{ `object`: { `$string`: ``"unknown"`` = 'unknown'; `ip`: ``"string?"`` = 'string?'; `userAgent`: ``"string?"`` = 'string?' }  }\> = SessionConnectionInfo; `token`: ``"string"`` = 'string'; `valid`: ``"boolean"`` = 'boolean' }, { `PK`: ``".accountId"``[] ; `SK`: ``".ulid"``[] ; `name`: `string` = '\_id'; `relatedTo`: `string` = 'Account' }[]\> = `__SessionEntity`

#### Defined in

packages/accounts/src/Accounts.ts:52

___

### TokenEntity

• **TokenEntity**: `Entity`<{ `accountId`: ``"ID"`` = 'ID'; `createdFor`: { `description`: `string` ; `string`: { `min`: ``2`` = 2 }  } ; `kind`: { `description`: ``"Examples: 2fa, password_recovery"`` = 'Examples: 2fa, password\_recovery'; `enum`: (``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"``)[] = tokenKindEnum.list } ; `location`: { `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `meta`: ``"record?"`` = 'record?'; `reason`: ``"string?"`` = 'string?'; `usageLocations`: { `list`: ``true`` = true; `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `used`: { `boolean`: {} = {}; `defaultValue`: ``false`` = false; `optional`: ``true`` = true } ; `value`: { `string`: { `max`: ``1000`` = 1000; `min`: ``4`` = 4 }  }  }, ({ `PK`: ``".accountId"``[] ; `SK`: (``".ulid"`` \| ``".kind"`` \| ``".createdFor"``)[] ; `name`: `string` = '\_id'; `relatedTo`: `string` = 'Account' } \| { `PK`: ``".value"``[] ; `SK`: (``".accountId"`` \| ``".kind"``)[] ; `name`: `string` = '\_id2'; `relatedTo`: `undefined` = 'Account' })[]\> = `__TokenEntity`

#### Defined in

packages/accounts/src/Accounts.ts:50

___

### sessions

• **sessions**: [`Sessions`](Accounts_System_.Sessions.md)

#### Defined in

packages/accounts/src/Accounts.ts:47

## Accessors

### addHooks

• `get` **addHooks**(): (`options`: (`hooks`: `EntityHooks`<{}, `AnyEntity`\>) => `any`) => `EntityFromContext`<`EntityTypesContext`<`Omit`<`Omit`<`Omit`<`Object`, ``"sessions"``\> & { `sessions`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"token"`` \| ``"accountId"`` \| ``"valid"`` \| ``"connectionInfo"``\> & { `accountId`: ``"string"`` = 'string'; `connectionInfo`: `GraphType`<{ `object`: { `$string`: ``"unknown"`` = 'unknown'; `ip`: ``"string?"`` = 'string?'; `userAgent`: ``"string?"`` = 'string?' }  }\> = SessionConnectionInfo; `token`: ``"string"`` = 'string'; `valid`: ``"boolean"`` = 'boolean' }  }\>  }  }  }, ``"accessTypes"``\> & { `accessTypes`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"data"`` \| ``"meta"`` \| ``"accountId"`` \| ``"verified"``\> & { `accountId`: ``"ID"`` = 'ID'; `data`: `GraphType`<{ `union`: readonly [{ `object`: { `kind`: { `literal`: ``"email"`` = accessTypesEnum.email } ; `value`: ``"email"`` = 'email' }  }, { `object`: { `kind`: { `literal`: ``"phone"`` = accessTypesEnum.phone } ; `value`: ``"phone"`` = accessTypesEnum.phone }  }, { `object`: { `authToken`: ``"string"`` = 'string'; `kind`: { `literal`: ``"oauth"`` = accessTypesEnum.oauth } ; `provider`: { `description`: ``"Provider name"`` = 'Provider name'; `string`: {} = {} } ; `value`: { `alias`: ``"provider"`` = 'provider' }  }  }, { `object`: { `kind`: { `literal`: ``"custom"`` = accessTypesEnum.custom } ; `meta`: ``"record"`` = 'record'; `value`: ``"string"`` = 'string' }  }]  }\> = AccessTypeUnion; `meta`: ``"record?"`` = 'record?'; `verified`: ``"boolean?"`` = 'boolean?' }  }\>  }  }  }, ``"tokens"``\> & { `tokens`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"meta"`` \| ``"accountId"`` \| ``"value"`` \| ``"kind"`` \| ``"reason"`` \| ``"createdFor"`` \| ``"used"`` \| ``"usageLocations"`` \| ``"location"``\> & { `accountId`: ``"ID"`` = 'ID'; `createdFor`: { `description`: `string` ; `string`: { `min`: ``2`` = 2 }  } ; `kind`: { `description`: ``"Examples: 2fa, password_recovery"`` = 'Examples: 2fa, password\_recovery'; `enum`: (``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"``)[] = tokenKindEnum.list } ; `location`: { `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `meta`: ``"record?"`` = 'record?'; `reason`: ``"string?"`` = 'string?'; `usageLocations`: { `list`: ``true`` = true; `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `used`: { `boolean`: {} = {}; `defaultValue`: ``false`` = false; `optional`: ``true`` = true } ; `value`: { `string`: { `max`: ``1000`` = 1000; `min`: ``4`` = 4 }  }  }  }\>  }  }  }, ({ `PK`: ``".accountId"``[] ; `name`: `string` = '\_id' } \| { `PK`: ``".username"``[] ; `name`: `string` = '\_id2' })[]\>\>

#### Returns

`fn`

▸ (`options`): `EntityFromContext`<`EntityTypesContext`<`Omit`<`Omit`<`Omit`<`Object`, ``"sessions"``\> & { `sessions`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"token"`` \| ``"accountId"`` \| ``"valid"`` \| ``"connectionInfo"``\> & { `accountId`: ``"string"`` = 'string'; `connectionInfo`: `GraphType`<{ `object`: { `$string`: ``"unknown"`` = 'unknown'; `ip`: ``"string?"`` = 'string?'; `userAgent`: ``"string?"`` = 'string?' }  }\> = SessionConnectionInfo; `token`: ``"string"`` = 'string'; `valid`: ``"boolean"`` = 'boolean' }  }\>  }  }  }, ``"accessTypes"``\> & { `accessTypes`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"data"`` \| ``"meta"`` \| ``"accountId"`` \| ``"verified"``\> & { `accountId`: ``"ID"`` = 'ID'; `data`: `GraphType`<{ `union`: readonly [{ `object`: { `kind`: { `literal`: ``"email"`` = accessTypesEnum.email } ; `value`: ``"email"`` = 'email' }  }, { `object`: { `kind`: { `literal`: ``"phone"`` = accessTypesEnum.phone } ; `value`: ``"phone"`` = accessTypesEnum.phone }  }, { `object`: { `authToken`: ``"string"`` = 'string'; `kind`: { `literal`: ``"oauth"`` = accessTypesEnum.oauth } ; `provider`: { `description`: ``"Provider name"`` = 'Provider name'; `string`: {} = {} } ; `value`: { `alias`: ``"provider"`` = 'provider' }  }  }, { `object`: { `kind`: { `literal`: ``"custom"`` = accessTypesEnum.custom } ; `meta`: ``"record"`` = 'record'; `value`: ``"string"`` = 'string' }  }]  }\> = AccessTypeUnion; `meta`: ``"record?"`` = 'record?'; `verified`: ``"boolean?"`` = 'boolean?' }  }\>  }  }  }, ``"tokens"``\> & { `tokens`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"meta"`` \| ``"accountId"`` \| ``"value"`` \| ``"kind"`` \| ``"reason"`` \| ``"createdFor"`` \| ``"used"`` \| ``"usageLocations"`` \| ``"location"``\> & { `accountId`: ``"ID"`` = 'ID'; `createdFor`: { `description`: `string` ; `string`: { `min`: ``2`` = 2 }  } ; `kind`: { `description`: ``"Examples: 2fa, password_recovery"`` = 'Examples: 2fa, password\_recovery'; `enum`: (``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"``)[] = tokenKindEnum.list } ; `location`: { `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `meta`: ``"record?"`` = 'record?'; `reason`: ``"string?"`` = 'string?'; `usageLocations`: { `list`: ``true`` = true; `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `used`: { `boolean`: {} = {}; `defaultValue`: ``false`` = false; `optional`: ``true`` = true } ; `value`: { `string`: { `max`: ``1000`` = 1000; `min`: ``4`` = 4 }  }  }  }\>  }  }  }, ({ `PK`: ``".accountId"``[] ; `name`: `string` = '\_id' } \| { `PK`: ``".username"``[] ; `name`: `string` = '\_id2' })[]\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | (`hooks`: `EntityHooks`<{}, `AnyEntity`\>) => `any` |

##### Returns

`EntityFromContext`<`EntityTypesContext`<`Omit`<`Omit`<`Omit`<`Object`, ``"sessions"``\> & { `sessions`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"token"`` \| ``"accountId"`` \| ``"valid"`` \| ``"connectionInfo"``\> & { `accountId`: ``"string"`` = 'string'; `connectionInfo`: `GraphType`<{ `object`: { `$string`: ``"unknown"`` = 'unknown'; `ip`: ``"string?"`` = 'string?'; `userAgent`: ``"string?"`` = 'string?' }  }\> = SessionConnectionInfo; `token`: ``"string"`` = 'string'; `valid`: ``"boolean"`` = 'boolean' }  }\>  }  }  }, ``"accessTypes"``\> & { `accessTypes`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"data"`` \| ``"meta"`` \| ``"accountId"`` \| ``"verified"``\> & { `accountId`: ``"ID"`` = 'ID'; `data`: `GraphType`<{ `union`: readonly [{ `object`: { `kind`: { `literal`: ``"email"`` = accessTypesEnum.email } ; `value`: ``"email"`` = 'email' }  }, { `object`: { `kind`: { `literal`: ``"phone"`` = accessTypesEnum.phone } ; `value`: ``"phone"`` = accessTypesEnum.phone }  }, { `object`: { `authToken`: ``"string"`` = 'string'; `kind`: { `literal`: ``"oauth"`` = accessTypesEnum.oauth } ; `provider`: { `description`: ``"Provider name"`` = 'Provider name'; `string`: {} = {} } ; `value`: { `alias`: ``"provider"`` = 'provider' }  }  }, { `object`: { `kind`: { `literal`: ``"custom"`` = accessTypesEnum.custom } ; `meta`: ``"record"`` = 'record'; `value`: ``"string"`` = 'string' }  }]  }\> = AccessTypeUnion; `meta`: ``"record?"`` = 'record?'; `verified`: ``"boolean?"`` = 'boolean?' }  }\>  }  }  }, ``"tokens"``\> & { `tokens`: { `array`: { `of`: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, ``"meta"`` \| ``"accountId"`` \| ``"value"`` \| ``"kind"`` \| ``"reason"`` \| ``"createdFor"`` \| ``"used"`` \| ``"usageLocations"`` \| ``"location"``\> & { `accountId`: ``"ID"`` = 'ID'; `createdFor`: { `description`: `string` ; `string`: { `min`: ``2`` = 2 }  } ; `kind`: { `description`: ``"Examples: 2fa, password_recovery"`` = 'Examples: 2fa, password\_recovery'; `enum`: (``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"``)[] = tokenKindEnum.list } ; `location`: { `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `meta`: ``"record?"`` = 'record?'; `reason`: ``"string?"`` = 'string?'; `usageLocations`: { `list`: ``true`` = true; `object`: { `device`: ``"string?"`` = 'string?'; `ip`: ``"string?"`` = 'string?'; `meta`: ``"record?"`` = 'record?' } ; `optional`: ``true`` = true } ; `used`: { `boolean`: {} = {}; `defaultValue`: ``false`` = false; `optional`: ``true`` = true } ; `value`: { `string`: { `max`: ``1000`` = 1000; `min`: ``4`` = 4 }  }  }  }\>  }  }  }, ({ `PK`: ``".accountId"``[] ; `name`: `string` = '\_id' } \| { `PK`: ``".username"``[] ; `name`: `string` = '\_id2' })[]\>\>

#### Defined in

packages/accounts/src/Accounts.ts:43

___

### handleRequest

• `get` **handleRequest**(): <T\>(`request`: `T`) => `Promise`<`T`\>

#### Returns

`fn`

▸ <`T`\>(`request`): `Promise`<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `T` |

##### Returns

`Promise`<`T`\>

#### Defined in

packages/accounts/src/Accounts.ts:366

___

### logout

• `get` **logout**(): (`input`: { `authToken`: `string` ; `request`: [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest)  }) => `Promise`<`boolean`\>

#### Returns

`fn`

▸ (`input`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.authToken` | `string` |
| `input.request` | [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

packages/accounts/src/Accounts.ts:374

___

### refreshTokens

• `get` **refreshTokens**(): (`input`: [`RefreshTokensInput`](../interfaces/Accounts_System_.RefreshTokensInput.md)) => `Promise`<[`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

#### Returns

`fn`

▸ (`input`): `Promise`<[`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`RefreshTokensInput`](../interfaces/Accounts_System_.RefreshTokensInput.md) |

##### Returns

`Promise`<[`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

#### Defined in

packages/accounts/src/Accounts.ts:370

## Methods

### addEmailVerificationToken

▸ **addEmailVerificationToken**(`input`): `Promise`<{ `_c`: `string` ; `_v`: `string` ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `createdFor`: `string` ; `id`: `string` ; `kind`: ``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"`` ; `location`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  } ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `reason`: `undefined` \| `string` ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `usageLocations`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  }[] ; `used`: `undefined` \| `boolean` ; `value`: `string`  }\>

Add an email verification token to a user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `Object` | - |
| `input.accountId` | `string` | Id used to update the user. |
| `input.email` | `string` | Which address of the user's to link the token to. |
| `input.token?` | `string` | Random token used to verify the user email. |

#### Returns

`Promise`<{ `_c`: `string` ; `_v`: `string` ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `createdFor`: `string` ; `id`: `string` ; `kind`: ``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"`` ; `location`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  } ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `reason`: `undefined` \| `string` ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `usageLocations`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  }[] ; `used`: `undefined` \| `boolean` ; `value`: `string`  }\>

#### Defined in

packages/accounts/src/Accounts.ts:216

___

### addResetPasswordToken

▸ **addResetPasswordToken**(`options`): `Promise`<{ `_c`: `string` ; `_v`: `string` ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `createdFor`: `string` ; `id`: `string` ; `kind`: ``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"`` ; `location`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  } ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `reason`: `undefined` \| `string` ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `usageLocations`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  }[] ; `used`: `undefined` \| `boolean` ; `value`: `string`  }\>

Add a reset password token to a user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.accountId` | `string` | Id used to update the user. |
| `options.reason?` | `string` | Reason to use for the token. |
| `options.token?` | `string` | a random token |

#### Returns

`Promise`<{ `_c`: `string` ; `_v`: `string` ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `createdFor`: `string` ; `id`: `string` ; `kind`: ``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"`` ; `location`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  } ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `reason`: `undefined` \| `string` ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `usageLocations`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  }[] ; `used`: `undefined` \| `boolean` ; `value`: `string`  }\>

#### Defined in

packages/accounts/src/Accounts.ts:250

___

### createAccount

▸ **createAccount**(`input`): `Promise`<{ `_c`: `string` ; `_v`: `string` ; `accessTypes`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `data`: { value: string; kind: "email"; } \| { value: string; kind: "phone"; } \| { value: string; kind: "oauth"; authToken: string; provider: string; } \| { meta: { [K: string]: any; }; value: string; kind: "custom"; } ; `id`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `verified`: `undefined` \| `boolean`  }[] ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `deactivated`: `boolean` ; `id`: `string` ; `permissions`: `string`[] ; `sessions`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `connectionInfo`: { [x: string]: unknown; ip?: string \| undefined; userAgent?: string \| undefined; } ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `id`: `undefined` \| `string` ; `token`: `string` ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `valid`: `boolean`  }[] ; `tokens`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `createdFor`: `string` ; `id`: `undefined` \| `string` ; `kind`: ``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"`` ; `location`: `undefined` \| { ip?: string \| undefined; meta?: { [K: string]: any; } \| undefined; device?: string \| undefined; } ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `reason`: `undefined` \| `string` ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `usageLocations`: `undefined` \| { ip?: string \| undefined; meta?: { [K: string]: any; } \| undefined; device?: string \| undefined; }[] ; `used`: `undefined` \| `boolean` ; `value`: `string`  }[] ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `username`: `string`  }\>

Create a new account by providing an email and/or a username and password.
Emails are saved lowercased.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`CreateUserPasswordInput`](../modules/Accounts_System_.md#createuserpasswordinput) |

#### Returns

`Promise`<{ `_c`: `string` ; `_v`: `string` ; `accessTypes`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `data`: { value: string; kind: "email"; } \| { value: string; kind: "phone"; } \| { value: string; kind: "oauth"; authToken: string; provider: string; } \| { meta: { [K: string]: any; }; value: string; kind: "custom"; } ; `id`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `verified`: `undefined` \| `boolean`  }[] ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `deactivated`: `boolean` ; `id`: `string` ; `permissions`: `string`[] ; `sessions`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `connectionInfo`: { [x: string]: unknown; ip?: string \| undefined; userAgent?: string \| undefined; } ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `id`: `undefined` \| `string` ; `token`: `string` ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `valid`: `boolean`  }[] ; `tokens`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `createdFor`: `string` ; `id`: `undefined` \| `string` ; `kind`: ``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"`` ; `location`: `undefined` \| { ip?: string \| undefined; meta?: { [K: string]: any; } \| undefined; device?: string \| undefined; } ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `reason`: `undefined` \| `string` ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `usageLocations`: `undefined` \| { ip?: string \| undefined; meta?: { [K: string]: any; } \| undefined; device?: string \| undefined; }[] ; `used`: `undefined` \| `boolean` ; `value`: `string`  }[] ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `username`: `string`  }\>

#### Defined in

packages/accounts/src/Accounts.ts:67

___

### findUser

▸ **findUser**(`«destructured»`): `Promise`<``null`` \| { `_c`: `string` ; `_v`: `string` ; `accessTypes`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `data`: { value: string; kind: "email"; } \| { value: string; kind: "phone"; } \| { value: string; kind: "oauth"; authToken: string; provider: string; } \| { meta: { [K: string]: any; }; value: string; kind: "custom"; } ; `id`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `verified`: `undefined` \| `boolean`  }[] ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `deactivated`: `boolean` ; `id`: `string` ; `permissions`: `string`[] ; `sessions`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `connectionInfo`: { [x: string]: unknown; ip?: string \| undefined; userAgent?: string \| undefined; } ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `id`: `undefined` \| `string` ; `token`: `string` ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `valid`: `boolean`  }[] ; `tokens`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `createdFor`: `string` ; `id`: `undefined` \| `string` ; `kind`: ``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"`` ; `location`: `undefined` \| { ip?: string \| undefined; meta?: { [K: string]: any; } \| undefined; device?: string \| undefined; } ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `reason`: `undefined` \| `string` ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `usageLocations`: `undefined` \| { ip?: string \| undefined; meta?: { [K: string]: any; } \| undefined; device?: string \| undefined; }[] ; `used`: `undefined` \| `boolean` ; `value`: `string`  }[] ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `username`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `context?` | `any` |
| › `username` | `string` |

#### Returns

`Promise`<``null`` \| { `_c`: `string` ; `_v`: `string` ; `accessTypes`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `data`: { value: string; kind: "email"; } \| { value: string; kind: "phone"; } \| { value: string; kind: "oauth"; authToken: string; provider: string; } \| { meta: { [K: string]: any; }; value: string; kind: "custom"; } ; `id`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `verified`: `undefined` \| `boolean`  }[] ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `deactivated`: `boolean` ; `id`: `string` ; `permissions`: `string`[] ; `sessions`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `connectionInfo`: { [x: string]: unknown; ip?: string \| undefined; userAgent?: string \| undefined; } ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `id`: `undefined` \| `string` ; `token`: `string` ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `valid`: `boolean`  }[] ; `tokens`: { `_c`: `undefined` \| `string` ; `_v`: `undefined` \| `string` ; `accountId`: `string` ; `createdAt`: `undefined` \| `Date` ; `createdBy`: `undefined` \| `string` ; `createdFor`: `string` ; `id`: `undefined` \| `string` ; `kind`: ``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"`` ; `location`: `undefined` \| { ip?: string \| undefined; meta?: { [K: string]: any; } \| undefined; device?: string \| undefined; } ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `reason`: `undefined` \| `string` ; `ulid`: `undefined` \| `string` ; `updatedAt`: `undefined` \| `Date` ; `updatedBy`: `undefined` \| `string` ; `usageLocations`: `undefined` \| { ip?: string \| undefined; meta?: { [K: string]: any; } \| undefined; device?: string \| undefined; }[] ; `used`: `undefined` \| `boolean` ; `value`: `string`  }[] ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `username`: `string`  }\>

#### Defined in

packages/accounts/src/Accounts.ts:301

___

### removeAllResetPasswordTokens

▸ **removeAllResetPasswordTokens**(`input`): `Promise`<`DeleteManyResult`\>

Remove all the reset password tokens for a user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `Object` | - |
| `input.accountId` | `string` | Id used to update the user. |
| `input.context?` | `Record`<`string`, `any`\> |  |

#### Returns

`Promise`<`DeleteManyResult`\>

#### Defined in

packages/accounts/src/Accounts.ts:286

___

### setPassword

▸ **setPassword**(`input`): `Promise`<{ `_c`: `string` ; `_v`: `string` ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `createdFor`: `string` ; `id`: `string` ; `kind`: ``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"`` ; `location`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  } ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `reason`: `undefined` \| `string` ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `usageLocations`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  }[] ; `used`: `undefined` \| `boolean` ; `value`: `string`  }\>

Change the password for a user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `Object` | - |
| `input.accountId` | `string` | Id used to update the user. |
| `input.newPassword` | `string` | A new password for the user. |

#### Returns

`Promise`<{ `_c`: `string` ; `_v`: `string` ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `createdFor`: `string` ; `id`: `string` ; `kind`: ``"password"`` \| ``"custom"`` \| ``"email_verification"`` \| ``"phone_verification"`` \| ``"password_recovery"`` \| ``"magick_link"`` \| ``"twoFactorAuth"`` ; `location`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  } ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `reason`: `undefined` \| `string` ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `usageLocations`: `undefined` \| { `device`: `undefined` \| `string` ; `ip`: `undefined` \| `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  }  }[] ; `used`: `undefined` \| `boolean` ; `value`: `string`  }\>

#### Defined in

packages/accounts/src/Accounts.ts:176

___

### userByPasswordLogin

▸ **userByPasswordLogin**(`input`): `Promise`<[`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.password` | `string` |
| `input.request` | [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest) |
| `input.username` | `string` |

#### Returns

`Promise`<[`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

#### Defined in

packages/accounts/src/Accounts.ts:316

___

### verifyEmail

▸ **verifyEmail**(`input`): `Promise`<{ `_c`: `string` ; `_v`: `string` ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `data`: { `kind`: ``"email"`` ; `value`: `string`  } \| { `kind`: ``"phone"`` ; `value`: `string`  } \| { `authToken`: `string` ; `kind`: ``"oauth"`` ; `provider`: `string` ; `value`: `string`  } \| { `kind`: ``"custom"`` ; `meta`: { `[K: string]`: `any`;  } ; `value`: `string`  } ; `id`: `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `verified`: `undefined` \| `boolean`  }\>

Marks the user's email address as verified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `Object` |  |
| `input.accountId` | `string` | Id used to update the user. |
| `input.email` | `string` | The email address to mark as verified. |

#### Returns

`Promise`<{ `_c`: `string` ; `_v`: `string` ; `accountId`: `string` ; `createdAt`: `Date` ; `createdBy`: `undefined` \| `string` ; `data`: { `kind`: ``"email"`` ; `value`: `string`  } \| { `kind`: ``"phone"`` ; `value`: `string`  } \| { `authToken`: `string` ; `kind`: ``"oauth"`` ; `provider`: `string` ; `value`: `string`  } \| { `kind`: ``"custom"`` ; `meta`: { `[K: string]`: `any`;  } ; `value`: `string`  } ; `id`: `string` ; `meta`: `undefined` \| { `[K: string]`: `any`;  } ; `ulid`: `string` ; `updatedAt`: `Date` ; `updatedBy`: `undefined` \| `string` ; `verified`: `undefined` \| `boolean`  }\>

#### Defined in

packages/accounts/src/Accounts.ts:144
