[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / \_EntityLoaderUtils

# Interface: \_EntityLoaderUtils<Options, Context\>

[Backland](../modules/Backland.md)._EntityLoaderUtils

## Type parameters

| Name | Type |
| :------ | :------ |
| `Options` | extends `Record`<`string`, `any`\> |
| `Context` | extends [`AnyEntityTypesContext`](../modules/Backland.md#anyentitytypescontext) |

## Table of contents

### Properties

- [\_\_filterDef](Backland._EntityLoaderUtils.md#__filterdef)
- [filterDef](Backland._EntityLoaderUtils.md#filterdef)
- [indexInfo](Backland._EntityLoaderUtils.md#indexinfo)
- [queryArgs](Backland._EntityLoaderUtils.md#queryargs)

## Properties

### \_\_filterDef

• **\_\_filterDef**: [`_GetLoaderFilterDef`](../modules/Backland.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:26

___

### filterDef

• **filterDef**: [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<[`_GetLoaderFilterDef`](../modules/Backland.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>, [`_GetLoaderFilterDef`](../modules/Backland.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:10

___

### indexInfo

• **indexInfo**: `Context`[``"indexes"``]

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:9

___

### queryArgs

• **queryArgs**: [`_GetLoaderFilterDef`](../modules/Backland.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\> extends `FilterDef` ? { `after`: ``"ID?"`` ; `condition`: { `object`: `EntityFilterConditionsDefinition`<`Context`[``"outputDefinition"``]\> ; `optional`: ``true``  } ; `filter`: { `def`: `FilterDef` ; `type`: ``"object"``  } ; `first`: { `optional`: ``true`` ; `type`: ``"int"``  }  } : `never`

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:11
