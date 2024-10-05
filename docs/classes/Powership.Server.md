[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / Server

# Class: Server

[Powership](../modules/Powership.md).Server

## Table of contents

### Constructors

- [constructor](Powership.Server.md#constructor)

### Properties

- [closeServer](Powership.Server.md#closeserver)
- [defaultHandlers](Powership.Server.md#defaulthandlers)
- [definitionInput](Powership.Server.md#definitioninput)
- [handleRequest](Powership.Server.md#handlerequest)
- [handlers](Powership.Server.md#handlers)
- [hasStarted](Powership.Server.md#hasstarted)
- [hooks](Powership.Server.md#hooks)
- [usedDefinition](Powership.Server.md#useddefinition)
- [withServer](Powership.Server.md#withserver)
- [create](Powership.Server.md#create)

### Methods

- [start](Powership.Server.md#start)

## Constructors

### constructor

• **new Server**(`definition`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `ServerDefinition` |

#### Defined in

packages/server/out/Server.d.ts:15

## Properties

### closeServer

• **closeServer**: () => `Promise`<``"NOT_STARTED"`` \| ``"CLOSED"``\>

#### Type declaration

▸ (): `Promise`<``"NOT_STARTED"`` \| ``"CLOSED"``\>

##### Returns

`Promise`<``"NOT_STARTED"`` \| ``"CLOSED"``\>

#### Defined in

packages/server/out/Server.d.ts:47

___

### defaultHandlers

• **defaultHandlers**: `Handler`<`undefined`\>[]

#### Defined in

packages/server/out/Server.d.ts:14

___

### definitionInput

• `Readonly` **definitionInput**: `ServerDefinition` \| (`app`: [`Server`](Powership.Server.md)) => `ServerDefinition`

#### Defined in

packages/server/out/Server.d.ts:50

___

### handleRequest

• **handleRequest**: (`request`: [`ServerRequest`](Powership.ServerRequest.md)) => `Hope`<[`ServerResponse`](Powership.ServerResponse.md)\>

#### Type declaration

▸ (`request`): `Hope`<[`ServerResponse`](Powership.ServerResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ServerRequest`](Powership.ServerRequest.md) |

##### Returns

`Hope`<[`ServerResponse`](Powership.ServerResponse.md)\>

#### Defined in

packages/server/out/Server.d.ts:52

___

### handlers

• `Readonly` **handlers**: `Handler`<`undefined` \| {}\>[]

#### Defined in

packages/server/out/Server.d.ts:51

___

### hasStarted

• **hasStarted**: `boolean`

#### Defined in

packages/server/out/Server.d.ts:49

___

### hooks

• **hooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onError` | `AsyncPlugin`<[`ServerResponse`](Powership.ServerResponse.md), { `close`: `CloseResponseFunction` ; `error`: `Error` ; `request`: [`ServerRequest`](Powership.ServerRequest.md)  }\> |
| `onParseBody` | `AsyncPlugin`<[`RequestBody`](../modules/Powership.md#requestbody), { `app`: [`Server`](Powership.Server.md) ; `close`: `CloseResponseFunction` ; `req`: [`ServerRequest`](Powership.ServerRequest.md) ; `res`: [`ServerResponse`](Powership.ServerResponse.md)  }\> |
| `onRequest` | `AsyncPlugin`<[`ServerRequest`](Powership.ServerRequest.md), { `app`: [`Server`](Powership.Server.md) ; `close`: `CloseResponseFunction` ; `response`: [`ServerResponse`](Powership.ServerResponse.md)  }\> |
| `onResponse` | `AsyncPlugin`<[`ServerResponse`](Powership.ServerResponse.md), { `app`: [`Server`](Powership.Server.md) ; `close`: `CloseResponseFunction` ; `request`: [`ServerRequest`](Powership.ServerRequest.md)  }\> |
| `started` | `AsyncPlugin`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>, { `app`: [`Server`](Powership.Server.md)  }\> |
| `willStartServer` | `AsyncPlugin`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>, { `app`: [`Server`](Powership.Server.md)  }\> |

#### Defined in

packages/server/out/Server.d.ts:17

___

### usedDefinition

• `Optional` **usedDefinition**: `ServerDefinition`

#### Defined in

packages/server/out/Server.d.ts:48

___

### withServer

• **withServer**: ``false`` \| { `server`: `Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>  }

#### Defined in

packages/server/out/Server.d.ts:53

___

### create

▪ `Static` **create**: (`definition`: `ServerDefinition`) => [`Server`](Powership.Server.md)

#### Type declaration

▸ (`definition`): [`Server`](Powership.Server.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `ServerDefinition` |

##### Returns

[`Server`](Powership.Server.md)

#### Defined in

packages/server/out/Server.d.ts:16

## Methods

### start

▸ **start**(`port`): `Promise`<`ServerStartResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

`Promise`<`ServerStartResult`\>

#### Defined in

packages/server/out/Server.d.ts:54

▸ **start**(`port?`): `Promise`<[`Server`](Powership.Server.md) & { `withServer`: ``false``  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `undefined` |

#### Returns

`Promise`<[`Server`](Powership.Server.md) & { `withServer`: ``false``  }\>

#### Defined in

packages/server/out/Server.d.ts:55
