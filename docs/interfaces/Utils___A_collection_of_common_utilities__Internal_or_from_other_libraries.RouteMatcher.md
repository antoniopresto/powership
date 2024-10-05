[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / RouteMatcher

# Interface: RouteMatcher<Path\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).RouteMatcher

## Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

## Table of contents

### Properties

- [stringify](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteMatcher.md#stringify)

### Methods

- [match](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RouteMatcher.md#match)

## Properties

### stringify

• **stringify**: (`params`: [`GetRouteParams`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getrouteparams)<`Path`\>) => `string`

#### Type declaration

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetRouteParams`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getrouteparams)<`Path`\> |

##### Returns

`string`

#### Defined in

[packages/utils/src/routeUtils.ts:226](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L226)

## Methods

### match

▸ **match**(`route`): ``null`` \| [`GetRouteParams`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getrouteparams)<`Path`\> & { `_?`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `route` | `string` |

#### Returns

``null`` \| [`GetRouteParams`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#getrouteparams)<`Path`\> & { `_?`: `string`  }

#### Defined in

[packages/utils/src/routeUtils.ts:227](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/routeUtils.ts#L227)
