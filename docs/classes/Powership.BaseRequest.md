[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / BaseRequest

# Class: BaseRequest

[Powership](../modules/Powership.md).BaseRequest

## Hierarchy

- **`BaseRequest`**

  ↳ [`BaseRequestHandler`](Powership.BaseRequestHandler.md)

## Table of contents

### Constructors

- [constructor](Powership.BaseRequest.md#constructor)

### Properties

- [headers](Powership.BaseRequest.md#headers)
- [host](Powership.BaseRequest.md#host)
- [input](Powership.BaseRequest.md#input)
- [method](Powership.BaseRequest.md#method)
- [parseInit](Powership.BaseRequest.md#parseinit)
- [pathname](Powership.BaseRequest.md#pathname)
- [port](Powership.BaseRequest.md#port)
- [query](Powership.BaseRequest.md#query)
- [replace](Powership.BaseRequest.md#replace)
- [urlObject](Powership.BaseRequest.md#urlobject)
- [parseHeaders](Powership.BaseRequest.md#parseheaders)

## Constructors

### constructor

• **new BaseRequest**(`init`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit) |

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:23

## Properties

### headers

• **headers**: `Headers`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:20

___

### host

• **host**: `string`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:17

___

### input

• **input**: [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:22

___

### method

• **method**: `string`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:21

___

### parseInit

• **parseInit**: (`init`: [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit)) => { `headers`: `Headers` ; `host`: `string` ; `method`: `string` ; `pathname`: `string` ; `port`: `string` ; `query`: `any` ; `urlObject`: `URL`  }

#### Type declaration

▸ (`init`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit) |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `headers` | `Headers` |
| `host` | `string` |
| `method` | `string` |
| `pathname` | `string` |
| `port` | `string` |
| `query` | `any` |
| `urlObject` | `URL` |

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:25

___

### pathname

• **pathname**: `string`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:16

___

### port

• **port**: `string`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:18

___

### query

• **query**: `ParsedQs`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:19

___

### replace

• **replace**: (`init`: [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit)) => [`BaseRequest`](Powership.BaseRequest.md)

#### Type declaration

▸ (`init`): [`BaseRequest`](Powership.BaseRequest.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit) |

##### Returns

[`BaseRequest`](Powership.BaseRequest.md)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:24

___

### urlObject

• **urlObject**: `URL`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:15

___

### parseHeaders

▪ `Static` **parseHeaders**: (`input`: `undefined` \| [`HeaderRecordInit`](../modules/Powership.md#headerrecordinit) \| `Headers`) => `Headers`

#### Type declaration

▸ (`input`): `Headers`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `undefined` \| [`HeaderRecordInit`](../modules/Powership.md#headerrecordinit) \| `Headers` |

##### Returns

`Headers`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:34
