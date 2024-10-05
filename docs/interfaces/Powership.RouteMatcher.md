[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / RouteMatcher

# Interface: RouteMatcher<Path\>

[Powership](../modules/Powership.md).RouteMatcher

## Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

## Table of contents

### Properties

- [stringify](Powership.RouteMatcher.md#stringify)

### Methods

- [match](Powership.RouteMatcher.md#match)

## Properties

### stringify

• **stringify**: (`params`: [`GetRouteParams`](../modules/Powership.md#getrouteparams)<`Path`\>) => `string`

#### Type declaration

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetRouteParams`](../modules/Powership.md#getrouteparams)<`Path`\> |

##### Returns

`string`

#### Defined in

packages/utils/out/routeUtils.d.ts:85

## Methods

### match

▸ **match**(`route`): ``null`` \| [`GetRouteParams`](../modules/Powership.md#getrouteparams)<`Path`\> & { `_?`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `route` | `string` |

#### Returns

``null`` \| [`GetRouteParams`](../modules/Powership.md#getrouteparams)<`Path`\> & { `_?`: `string`  }

#### Defined in

packages/utils/out/routeUtils.d.ts:86
