[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / RouteUtils

# Class: RouteUtils

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).RouteUtils

Utilities for handling URL and route-related operations.

## Table of contents

### Constructors

- [constructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#constructor)

### Properties

- [DEFAULT\_DOMAIN](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#default_domain)
- [sortRoutes](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#sortroutes)

### Methods

- [createRouteMatcher](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#createroutematcher)
- [isSamePathname](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#issamepathname)
- [joinPaths](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#joinpaths)
- [normalizePath](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#normalizepath)
- [parseQueryString](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#parsequerystring)
- [parseURL](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#parseurl)
- [resortQueryString](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#resortquerystring)
- [stringifyQueryString](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteUtils.md#stringifyquerystring)

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

[packages/utils/src/routeUtils.ts:146](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L146)

___

### sortRoutes

▪ `Static` **sortRoutes**: <Routes\>(`paths`: `Routes`, `cache`: `Record`<`string`, `any`\>) => `Routes`

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
| `cache` | `Record`<`string`, `any`\> |

##### Returns

`Routes`

#### Defined in

[packages/utils/src/routeUtils.ts:169](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L169)

## Methods

### createRouteMatcher

▸ `Static` **createRouteMatcher**<`Path`\>(`path`): [`RouteMatcher`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteMatcher.md)<`Path`\>

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

[`RouteMatcher`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteMatcher.md)<`Path`\>

The route matcher.

#### Defined in

[packages/utils/src/routeUtils.ts:135](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L135)

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

[packages/utils/src/routeUtils.ts:123](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L123)

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

[packages/utils/src/routeUtils.ts:24](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L24)

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

[packages/utils/src/routeUtils.ts:15](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L15)

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

[packages/utils/src/routeUtils.ts:36](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L36)

___

### parseURL

▸ `Static` **parseURL**(`urlOrPathname`, `defaultDomain?`): [`ParsedURL`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#parsedurl)

Parses a URL or pathname into its components.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `urlOrPathname` | `string` | `undefined` | The URL or pathname to parse. |
| `defaultDomain` | `string` | `''` | The default domain to use if none is provided. |

#### Returns

[`ParsedURL`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#parsedurl)

The parsed URL components.

#### Defined in

[packages/utils/src/routeUtils.ts:68](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L68)

___

### resortQueryString

▸ `Static` **resortQueryString**(`queryString?`): `string`

Resorts a query string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `queryString` | `string` | `''` | The query string to resort. |

#### Returns

`string`

The resorted query string.

#### Defined in

[packages/utils/src/routeUtils.ts:56](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L56)

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

[packages/utils/src/routeUtils.ts:45](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L45)
