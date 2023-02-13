[Backland](../README.md) / [Modules](../modules.md) / [Accounts System.](../modules/Accounts_System_.md) / Sessions

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

[packages/accounts/src/Sessions.ts:39](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L39)

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

[packages/accounts/src/Sessions.ts:37](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L37)

___

### hooks

• **hooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onRefreshTokens` | `Waterfall`<[`SessionRequest`](../modules/Accounts_System_.md#sessionrequest) & { `result`: [`LoginResult`](../modules/Accounts_System_.md#loginresult)  }, [`SessionHooksContext`](../modules/Accounts_System_.md#sessionhookscontext)\> |
| `onRequest` | `Waterfall`<[`SessionRequest`](../modules/Accounts_System_.md#sessionrequest), [`SessionHooksContext`](../modules/Accounts_System_.md#sessionhookscontext)\> |
| `onUpsertSessionError` | `Waterfall`<`Error`, [`SessionRequest`](../modules/Accounts_System_.md#sessionrequest)\> |

#### Defined in

[packages/accounts/src/Sessions.ts:35](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L35)

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

[packages/accounts/src/Sessions.ts:56](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L56)

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

[packages/accounts/src/Sessions.ts:52](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L52)

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

[packages/accounts/src/Sessions.ts:319](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L319)

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

[packages/accounts/src/Sessions.ts:298](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L298)

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

[packages/accounts/src/Sessions.ts:95](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L95)

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

[packages/accounts/src/Sessions.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L70)

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

[packages/accounts/src/Sessions.ts:156](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/accounts/src/Sessions.ts#L156)
