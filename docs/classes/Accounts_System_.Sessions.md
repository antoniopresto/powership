[Powership](../README.md) / [Modules](../modules.md) / [Accounts System.](../modules/Accounts_System_.md) / Sessions

# Class: Sessions

[Accounts System.](../modules/Accounts_System_.md).Sessions

## Table of contents

### Constructors

- [constructor](Accounts_System_.Sessions.md#constructor)

### Properties

- [getTokenSecret](Accounts_System_.Sessions.md#gettokensecret)
- [hooks](Accounts_System_.Sessions.md#hooks)

### Methods

- [getConnectionInfo](Accounts_System_.Sessions.md#getconnectioninfo)
- [handleRequest](Accounts_System_.Sessions.md#handlerequest)
- [invalidateSessions](Accounts_System_.Sessions.md#invalidatesessions)
- [logout](Accounts_System_.Sessions.md#logout)
- [refreshTokens](Accounts_System_.Sessions.md#refreshtokens)
- [trySetSession](Accounts_System_.Sessions.md#trysetsession)
- [upsertRefreshTokenAndSessionDocument](Accounts_System_.Sessions.md#upsertrefreshtokenandsessiondocument)

## Constructors

### constructor

• **new Sessions**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SessionsOptions`](../interfaces/Accounts_System_.SessionsOptions.md) |

#### Defined in

packages/accounts/src/Sessions.ts:38

## Properties

### getTokenSecret

• **getTokenSecret**: (`request`: [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest)) => `string` \| `Promise`<`string`\>

#### Type declaration

▸ (`request`): `string` \| `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest) |

##### Returns

`string` \| `Promise`<`string`\>

#### Defined in

packages/accounts/src/Sessions.ts:36

___

### hooks

• **hooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onRefreshTokens` | `AsyncPlugin`<[`SessionRequest`](../modules/Accounts_System_.md#sessionrequest) & { `result`: [`LoginResult`](../modules/Accounts_System_.md#loginresult)  }, [`SessionHooksContext`](../modules/Accounts_System_.md#sessionhookscontext)\> |
| `onRequest` | `AsyncPlugin`<[`SessionRequest`](../modules/Accounts_System_.md#sessionrequest), [`SessionHooksContext`](../modules/Accounts_System_.md#sessionhookscontext)\> |
| `onUpsertSessionError` | `AsyncPlugin`<`Error`, [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest)\> |

#### Defined in

packages/accounts/src/Sessions.ts:34

## Methods

### getConnectionInfo

▸ **getConnectionInfo**(`request`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ip` | `string` |
| `userAgent` | `string` |

#### Defined in

packages/accounts/src/Sessions.ts:55

___

### handleRequest

▸ **handleRequest**<`T`\>(`request`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `T` |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/accounts/src/Sessions.ts:51

___

### invalidateSessions

▸ **invalidateSessions**(`input`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |

#### Returns

`Promise`<`number`\>

#### Defined in

packages/accounts/src/Sessions.ts:318

___

### logout

▸ **logout**(`input`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.authToken` | `string` |
| `input.request` | [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/accounts/src/Sessions.ts:297

___

### refreshTokens

▸ **refreshTokens**(`input`): `Promise`<[`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`RefreshTokensInput`](../interfaces/Accounts_System_.RefreshTokensInput.md) |

#### Returns

`Promise`<[`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

#### Defined in

packages/accounts/src/Sessions.ts:94

___

### trySetSession

▸ **trySetSession**(`sessionRequest`): `Promise`<`undefined` \| [`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

Checks for tokens in the provided session object and renew
tokens if session is valid

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionRequest` | [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest) |

#### Returns

`Promise`<`undefined` \| [`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

#### Defined in

packages/accounts/src/Sessions.ts:69

___

### upsertRefreshTokenAndSessionDocument

▸ **upsertRefreshTokenAndSessionDocument**(`input`): `Promise`<[`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

**`Description`**

Creates a authToken

**`Description`**

Create a new session if existingSession is null
  - tokens are strings created by Sessions.createTokenString
      containing ParsedAuthToken data

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |

#### Returns

`Promise`<[`LoginResult`](../modules/Accounts_System_.md#loginresult)\>

#### Defined in

packages/accounts/src/Sessions.ts:155
