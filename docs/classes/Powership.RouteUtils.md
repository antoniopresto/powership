[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / RouteUtils

# Class: RouteUtils

[Powership](../modules/Powership.md).RouteUtils

Utilities for handling URL and route-related operations.

## Table of contents

### Constructors

- [constructor](Powership.RouteUtils.md#constructor)

### Properties

- [DEFAULT\_DOMAIN](Powership.RouteUtils.md#default_domain)
- [sortRoutes](Powership.RouteUtils.md#sortroutes)

### Methods

- [createRouteMatcher](Powership.RouteUtils.md#createroutematcher)
- [isSamePathname](Powership.RouteUtils.md#issamepathname)
- [joinPaths](Powership.RouteUtils.md#joinpaths)
- [normalizePath](Powership.RouteUtils.md#normalizepath)
- [parseQueryString](Powership.RouteUtils.md#parsequerystring)
- [parseURL](Powership.RouteUtils.md#parseurl)
- [resortQueryString](Powership.RouteUtils.md#resortquerystring)
- [stringifyQueryString](Powership.RouteUtils.md#stringifyquerystring)

## Constructors

### constructor

• **new RouteUtils**()

## Properties

### DEFAULT\_DOMAIN

▪ `Static` **DEFAULT\_DOMAIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Defined in

packages/utils/out/routeUtils.d.ts:57

___

### sortRoutes

▪ `Static` **sortRoutes**: <Routes\>(`paths`: `Routes`, `cache?`: `Record`<`string`, `any`\>) => `Routes`

#### Type declaration

▸ <`Routes`\>(`paths`, `cache?`): `Routes`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Routes` | extends (`string` \| { `path`: `string`  })[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `paths` | `Routes` |
| `cache?` | `Record`<`string`, `any`\> |

##### Returns

`Routes`

#### Defined in

packages/utils/out/routeUtils.d.ts:63

## Methods

### createRouteMatcher

▸ `Static` **createRouteMatcher**<`Path`\>(`path`): [`RouteMatcher`](../interfaces/Powership.RouteMatcher.md)<`Path`\>

Creates a route matcher for a specified path.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `Path` | The path pattern to create a matcher for. |

#### Returns

[`RouteMatcher`](../interfaces/Powership.RouteMatcher.md)<`Path`\>

The route matcher.

#### Defined in

packages/utils/out/routeUtils.d.ts:56

___

### isSamePathname

▸ `Static` **isSamePathname**(`firstURL`, `secondURL`): `boolean`

Compares if two URLs have the same pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `firstURL` | `string` | The first URL to compare. |
| `secondURL` | `string` | The second URL to compare. |

#### Returns

`boolean`

`true` if the pathnames are the same, `false` otherwise.

#### Defined in

packages/utils/out/routeUtils.d.ts:50

___

### joinPaths

▸ `Static` **joinPaths**(`...segments`): `string`

Joins multiple path segments, normalizing slashes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...segments` | (`undefined` \| ``null`` \| `string`)[] | The path segments to join. |

#### Returns

`string`

The joined path.

#### Defined in

packages/utils/out/routeUtils.d.ts:18

___

### normalizePath

▸ `Static` **normalizePath**(`path`): `string`

Removes starting and trailing slashes from a path string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to be normalized. |

#### Returns

`string`

The path with starting and trailing slashes removed.

#### Defined in

packages/utils/out/routeUtils.d.ts:12

___

### parseQueryString

▸ `Static` **parseQueryString**(`queryString`): `ParsedQs`

Parses a query string into an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryString` | `string` | The query string to parse. |

#### Returns

`ParsedQs`

The parsed query string object.

#### Defined in

packages/utils/out/routeUtils.d.ts:24

___

### parseURL

▸ `Static` **parseURL**(`urlOrPathname`, `defaultDomain?`): [`ParsedURL`](../modules/Powership.md#parsedurl)

Parses a URL or pathname into its components.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urlOrPathname` | `string` | The URL or pathname to parse. |
| `defaultDomain?` | `string` | The default domain to use if none is provided. |

#### Returns

[`ParsedURL`](../modules/Powership.md#parsedurl)

The parsed URL components.

#### Defined in

packages/utils/out/routeUtils.d.ts:43

___

### resortQueryString

▸ `Static` **resortQueryString**(`queryString?`): `string`

Resorts a query string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryString?` | `string` | The query string to resort. |

#### Returns

`string`

The resorted query string.

#### Defined in

packages/utils/out/routeUtils.d.ts:36

___

### stringifyQueryString

▸ `Static` **stringifyQueryString**(`queryObject`): `string`

Stringifies an object into a query string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryObject` | `Record`<`string`, `any`\> | The object to be stringified. |

#### Returns

`string`

The query string.

#### Defined in

packages/utils/out/routeUtils.d.ts:30
