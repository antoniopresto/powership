[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / ServerResponse

# Class: ServerResponse

[Powership](../modules/Powership.md).ServerResponse

## Hierarchy

- [`BaseRequestHandler`](Powership.BaseRequestHandler.md)

  ↳ **`ServerResponse`**

## Table of contents

### Constructors

- [constructor](Powership.ServerResponse.md#constructor)

### Properties

- [body](Powership.ServerResponse.md#body)
- [headers](Powership.ServerResponse.md#headers)
- [host](Powership.ServerResponse.md#host)
- [input](Powership.ServerResponse.md#input)
- [method](Powership.ServerResponse.md#method)
- [parseInit](Powership.ServerResponse.md#parseinit)
- [pathname](Powership.ServerResponse.md#pathname)
- [port](Powership.ServerResponse.md#port)
- [query](Powership.ServerResponse.md#query)
- [replace](Powership.ServerResponse.md#replace)
- [setHeader](Powership.ServerResponse.md#setheader)
- [statusCode](Powership.ServerResponse.md#statuscode)
- [testRoute](Powership.ServerResponse.md#testroute)
- [toHttpRequest](Powership.ServerResponse.md#tohttprequest)
- [toHttpResponse](Powership.ServerResponse.md#tohttpresponse)
- [type](Powership.ServerResponse.md#type)
- [urlObject](Powership.ServerResponse.md#urlobject)
- [create](Powership.ServerResponse.md#create)
- [parseHeaders](Powership.ServerResponse.md#parseheaders)

### Methods

- [graphQLData](Powership.ServerResponse.md#graphqldata)
- [graphQLResponse](Powership.ServerResponse.md#graphqlresponse)
- [createRouteMatcher](Powership.ServerResponse.md#createroutematcher)
- [headersNamed](Powership.ServerResponse.md#headersnamed)
- [httpHeaders](Powership.ServerResponse.md#httpheaders)
- [httpResponseBody](Powership.ServerResponse.md#httpresponsebody)
- [httpStatusCode](Powership.ServerResponse.md#httpstatuscode)
- [jsonBody](Powership.ServerResponse.md#jsonbody)
- [toHttp](Powership.ServerResponse.md#tohttp)

## Constructors

### constructor

• **new ServerResponse**(`input?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | [`ServerResponseInit`](../modules/Powership.md#serverresponseinit) |

#### Overrides

[BaseRequestHandler](Powership.BaseRequestHandler.md).[constructor](Powership.BaseRequestHandler.md#constructor)

#### Defined in

packages/server/out/ServerResponse.d.ts:9

## Properties

### body

• **body**: [`RequestBody`](../modules/Powership.md#requestbody)

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[body](Powership.BaseRequestHandler.md#body)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:44

___

### headers

• **headers**: `Headers`

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[headers](Powership.BaseRequestHandler.md#headers)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:45

___

### host

• **host**: `string`

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[host](Powership.BaseRequestHandler.md#host)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:19

___

### input

• **input**: [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit)

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[input](Powership.BaseRequestHandler.md#input)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:24

___

### method

• **method**: `string`

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[method](Powership.BaseRequestHandler.md#method)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:23

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

[BaseRequestHandler](Powership.BaseRequestHandler.md).[parseInit](Powership.BaseRequestHandler.md#parseinit)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:27

___

### pathname

• **pathname**: `string`

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[pathname](Powership.BaseRequestHandler.md#pathname)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:18

___

### port

• **port**: `string`

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[port](Powership.BaseRequestHandler.md#port)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:20

___

### query

• **query**: `ParsedQs`

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[query](Powership.BaseRequestHandler.md#query)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:21

___

### replace

• **replace**: (`init`: [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit)) => [`ServerResponse`](Powership.ServerResponse.md)

#### Type declaration

▸ (`init`): [`ServerResponse`](Powership.ServerResponse.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`BaseRequestHandlerInit`](../modules/Powership.md#baserequesthandlerinit) |

##### Returns

[`ServerResponse`](Powership.ServerResponse.md)

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[replace](Powership.BaseRequestHandler.md#replace)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:26

___

### setHeader

• **setHeader**: (`name`: `string`, `value`: `string`) => `void`

#### Type declaration

▸ (`name`, `value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

##### Returns

`void`

#### Defined in

packages/server/out/ServerResponse.d.ts:10

___

### statusCode

• **statusCode**: [`ServerResponseStatus`](../modules/Powership.md#serverresponsestatus)

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[statusCode](Powership.BaseRequestHandler.md#statuscode)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:46

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

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[testRoute](Powership.BaseRequestHandler.md#testroute)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:64

___

### toHttpRequest

• **toHttpRequest**: () => [`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

#### Type declaration

▸ (): [`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

##### Returns

[`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[toHttpRequest](Powership.BaseRequestHandler.md#tohttprequest)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:57

___

### toHttpResponse

• **toHttpResponse**: () => [`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

#### Type declaration

▸ (): [`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

##### Returns

[`HTTPHandlerParsed`](../modules/Powership.md#httphandlerparsed)

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[toHttpResponse](Powership.BaseRequestHandler.md#tohttpresponse)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:56

___

### type

• `Readonly` **type**: ``"RESPONSE"``

#### Defined in

packages/server/out/ServerResponse.d.ts:8

___

### urlObject

• **urlObject**: `URL`

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[urlObject](Powership.BaseRequestHandler.md#urlobject)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:17

___

### create

▪ `Static` **create**: (`input?`: [`ServerResponseInit`](../modules/Powership.md#serverresponseinit)) => [`ServerResponse`](Powership.ServerResponse.md)

#### Type declaration

▸ (`input?`): [`ServerResponse`](Powership.ServerResponse.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | [`ServerResponseInit`](../modules/Powership.md#serverresponseinit) |

##### Returns

[`ServerResponse`](Powership.ServerResponse.md)

#### Defined in

packages/server/out/ServerResponse.d.ts:11

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

[BaseRequestHandler](Powership.BaseRequestHandler.md).[parseHeaders](Powership.BaseRequestHandler.md#parseheaders)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:36

## Methods

### graphQLData

▸ **graphQLData**(): [`GraphQLResponseRecord`](../modules/Powership.md#graphqlresponserecord)

#### Returns

[`GraphQLResponseRecord`](../modules/Powership.md#graphqlresponserecord)

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[graphQLData](Powership.BaseRequestHandler.md#graphqldata)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:48

___

### graphQLResponse

▸ **graphQLResponse**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | [`GraphQLResponseRecord`](../modules/Powership.md#graphqlresponserecord) |
| `errors?` | { `message`: `string` ; `path`: `string`  }[] |

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[graphQLResponse](Powership.BaseRequestHandler.md#graphqlresponse)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:49

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

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[createRouteMatcher](Powership.BaseRequestHandler.md#createroutematcher)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:65

___

### headersNamed

▸ `Static` **headersNamed**(`headers`): [`HeaderNamed`](../modules/Powership.md#headernamed)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `undefined` \| [`HeaderRecordInit`](../modules/Powership.md#headerrecordinit) \| `Headers` |

#### Returns

[`HeaderNamed`](../modules/Powership.md#headernamed)[]

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[headersNamed](Powership.BaseRequestHandler.md#headersnamed)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:69

___

### httpHeaders

▸ `Static` **httpHeaders**(`headers`): [`HeaderRecord`](../modules/Powership.md#headerrecord)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `undefined` \| [`HeaderRecordInit`](../modules/Powership.md#headerrecordinit) \| `Headers` |

#### Returns

[`HeaderRecord`](../modules/Powership.md#headerrecord)

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[httpHeaders](Powership.BaseRequestHandler.md#httpheaders)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:70

___

### httpResponseBody

▸ `Static` **httpResponseBody**(`body`): `string` \| `Readable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`RequestBody`](../modules/Powership.md#requestbody) |

#### Returns

`string` \| `Readable`

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[httpResponseBody](Powership.BaseRequestHandler.md#httpresponsebody)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:67

___

### httpStatusCode

▸ `Static` **httpStatusCode**(`statusCode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | [`ServerResponseStatus`](../modules/Powership.md#serverresponsestatus) |

#### Returns

`number`

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[httpStatusCode](Powership.BaseRequestHandler.md#httpstatuscode)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:66

___

### jsonBody

▸ `Static` **jsonBody**(`body`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`RequestBody`](../modules/Powership.md#requestbody) |

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[jsonBody](Powership.BaseRequestHandler.md#jsonbody)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:68

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

#### Inherited from

[BaseRequestHandler](Powership.BaseRequestHandler.md).[toHttp](Powership.BaseRequestHandler.md#tohttp)

#### Defined in

packages/server/out/BaseRequestHandler.d.ts:71
