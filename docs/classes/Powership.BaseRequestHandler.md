[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / BaseRequestHandler

# Class: BaseRequestHandler

[Powership](../modules/Powership.md).BaseRequestHandler

## Hierarchy

- [`BaseRequest`](Powership.BaseRequest.md)

  ↳ **`BaseRequestHandler`**

  ↳↳ [`ServerResponse`](Powership.ServerResponse.md)

  ↳↳ [`ServerRequest`](Powership.ServerRequest.md)

## Table of contents

### Constructors

- [constructor](Powership.BaseRequestHandler.md#constructor)

### Properties

- [body](Powership.BaseRequestHandler.md#body)
- [headers](Powership.BaseRequestHandler.md#headers)
- [host](Powership.BaseRequestHandler.md#host)
- [input](Powership.BaseRequestHandler.md#input)
- [method](Powership.BaseRequestHandler.md#method)
- [parseInit](Powership.BaseRequestHandler.md#parseinit)
- [pathname](Powership.BaseRequestHandler.md#pathname)
- [port](Powership.BaseRequestHandler.md#port)
- [query](Powership.BaseRequestHandler.md#query)
- [replace](Powership.BaseRequestHandler.md#replace)
- [statusCode](Powership.BaseRequestHandler.md#statuscode)
- [testRoute](Powership.BaseRequestHandler.md#testroute)
- [toHttpRequest](Powership.BaseRequestHandler.md#tohttprequest)
- [toHttpResponse](Powership.BaseRequestHandler.md#tohttpresponse)
- [urlObject](Powership.BaseRequestHandler.md#urlobject)
- [parseHeaders](Powership.BaseRequestHandler.md#parseheaders)

### Methods

- [graphQLData](Powership.BaseRequestHandler.md#graphqldata)
- [graphQLResponse](Powership.BaseRequestHandler.md#graphqlresponse)
- [createRouteMatcher](Powership.BaseRequestHandler.md#createroutematcher)
- [headersNamed](Powership.BaseRequestHandler.md#headersnamed)
- [httpHeaders](Powership.BaseRequestHandler.md#httpheaders)
- [httpResponseBody](Powership.BaseRequestHandler.md#httpresponsebody)
- [httpStatusCode](Powership.BaseRequestHandler.md#httpstatuscode)
- [jsonBody](Powership.BaseRequestHandler.md#jsonbody)
- [toHttp](Powership.BaseRequestHandler.md#tohttp)

## Constructors

### constructor

• **new BaseRequestHandler**(`input?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit) |

#### Overrides

[BaseRequest](Powership.BaseRequest.md).[constructor](Powership.BaseRequest.md#constructor)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:45

## Properties

### body

• **body**: `string` \| `Record`<`string`, `any`\> \| typeof [`UnhandledSymbol`](../modules/Powership.md#unhandledsymbol-1)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:42

___

### headers

• **headers**: `Headers`

#### Overrides

[BaseRequest](Powership.BaseRequest.md).[headers](Powership.BaseRequest.md#headers)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:43

___

### host

• **host**: `string`

#### Inherited from

[BaseRequest](Powership.BaseRequest.md).[host](Powership.BaseRequest.md#host)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:17

___

### input

• **input**: [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit)

#### Inherited from

[BaseRequest](Powership.BaseRequest.md).[input](Powership.BaseRequest.md#input)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:22

___

### method

• **method**: `string`

#### Inherited from

[BaseRequest](Powership.BaseRequest.md).[method](Powership.BaseRequest.md#method)

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

#### Inherited from

[BaseRequest](Powership.BaseRequest.md).[parseInit](Powership.BaseRequest.md#parseinit)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:25

___

### pathname

• **pathname**: `string`

#### Inherited from

[BaseRequest](Powership.BaseRequest.md).[pathname](Powership.BaseRequest.md#pathname)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:16

___

### port

• **port**: `string`

#### Inherited from

[BaseRequest](Powership.BaseRequest.md).[port](Powership.BaseRequest.md#port)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:18

___

### query

• **query**: `ParsedQs`

#### Inherited from

[BaseRequest](Powership.BaseRequest.md).[query](Powership.BaseRequest.md#query)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:19

___

### replace

• **replace**: (`init`: [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit)) => [`BaseRequestHandler`](Powership.BaseRequestHandler.md)

#### Type declaration

▸ (`init`): [`BaseRequestHandler`](Powership.BaseRequestHandler.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit) |

##### Returns

[`BaseRequestHandler`](Powership.BaseRequestHandler.md)

#### Inherited from

[BaseRequest](Powership.BaseRequest.md).[replace](Powership.BaseRequest.md#replace)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:24

___

### statusCode

• **statusCode**: [`ServerResponseStatus`](../modules/Powership.md#serverresponsestatus)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:44

___

### testRoute

• **testRoute**: <Path\>(`routePattern`: `Path`) => ``null`` \| `GetRouteParams`<`Path`\>

#### Type declaration

▸ <`Path`\>(`routePattern`): ``null`` \| `GetRouteParams`<`Path`\>

Return the matched routePattern parameters or null
if the route has no parameters, an empty object is returned
https://github.com/snd/url-pattern

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `routePattern` | `Path` |

##### Returns

``null`` \| `GetRouteParams`<`Path`\>

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:62

___

### toHttpRequest

• **toHttpRequest**: () => [`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

#### Type declaration

▸ (): [`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

##### Returns

[`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:55

___

### toHttpResponse

• **toHttpResponse**: () => [`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

#### Type declaration

▸ (): [`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

##### Returns

[`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:54

___

### urlObject

• **urlObject**: `URL`

#### Inherited from

[BaseRequest](Powership.BaseRequest.md).[urlObject](Powership.BaseRequest.md#urlobject)

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

#### Inherited from

[BaseRequest](Powership.BaseRequest.md).[parseHeaders](Powership.BaseRequest.md#parseheaders)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:34

## Methods

### graphQLData

▸ **graphQLData**(): [`GraphQLResponseRecord`](../modules/Powership.md#graphqlresponserecord)

#### Returns

[`GraphQLResponseRecord`](../modules/Powership.md#graphqlresponserecord)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:46

___

### graphQLResponse

▸ **graphQLResponse**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | [`GraphQLResponseRecord`](../modules/Powership.md#graphqlresponserecord) |
| `errors?` | { `message`: `string` ; `path`: `string`  }[] |

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:47

___

### createRouteMatcher

▸ `Static` **createRouteMatcher**<`Path`\>(`routePattern`): `RouteMatcher`<`Path`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `routePattern` | `Path` |

#### Returns

`RouteMatcher`<`Path`\>

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:63

___

### headersNamed

▸ `Static` **headersNamed**(`headers`): [`HeaderNamed`](../modules/Powership.md#headernamed)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `undefined` \| [`HeaderRecordInit`](../modules/Powership.md#headerrecordinit) \| `Headers` |

#### Returns

[`HeaderNamed`](../modules/Powership.md#headernamed)[]

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:67

___

### httpHeaders

▸ `Static` **httpHeaders**(`headers`): [`HeaderRecord`](../modules/Powership.md#headerrecord)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `undefined` \| [`HeaderRecordInit`](../modules/Powership.md#headerrecordinit) \| `Headers` |

#### Returns

[`HeaderRecord`](../modules/Powership.md#headerrecord)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:68

___

### httpResponseBody

▸ `Static` **httpResponseBody**(`body`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `string` \| `Record`<`string`, `any`\> \| typeof [`UnhandledSymbol`](../modules/Powership.md#unhandledsymbol-1) |

#### Returns

`string`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:65

___

### httpStatusCode

▸ `Static` **httpStatusCode**(`statusCode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | [`ServerResponseStatus`](../modules/Powership.md#serverresponsestatus) |

#### Returns

`number`

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:64

___

### jsonBody

▸ `Static` **jsonBody**(`body`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `string` \| `Record`<`string`, `any`\> \| typeof [`UnhandledSymbol`](../modules/Powership.md#unhandledsymbol-1) |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:66

___

### toHttp

▸ `Static` **toHttp**(`input`, `type`): [`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`BaseRequestHandler`](Powership.BaseRequestHandler.md) \| [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit) |
| `type` | ``"REQUEST"`` \| ``"RESPONSE"`` |

#### Returns

[`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

#### Defined in

packages/server/lib/BaseRequestHandler.d.ts:69
