[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / \_EntityLoaderUtils

# Interface: \_EntityLoaderUtils<Options, Context\>

[Powership](../modules/Powership.md)._EntityLoaderUtils

## Type parameters

| Name | Type |
| :------ | :------ |
| `Options` | extends `Record`<`string`, `any`\> |
| `Context` | extends [`AnyEntityTypesContext`](../modules/Powership.md#anyentitytypescontext) |

## Table of contents

### Properties

- [\_\_filterDef](Powership._EntityLoaderUtils.md#__filterdef)
- [filterDef](Powership._EntityLoaderUtils.md#filterdef)
- [indexInfo](Powership._EntityLoaderUtils.md#indexinfo)
- [queryArgs](Powership._EntityLoaderUtils.md#queryargs)

## Properties

### \_\_filterDef

• **\_\_filterDef**: [`_GetLoaderFilterDef`](../modules/Powership.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:26

___

### filterDef

• **filterDef**: [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<[`_GetLoaderFilterDef`](../modules/Powership.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>, [`_GetLoaderFilterDef`](../modules/Powership.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:10

___

### indexInfo

• **indexInfo**: `Context`[``"indexes"``]

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:9

___

### queryArgs

• **queryArgs**: [`_GetLoaderFilterDef`](../modules/Powership.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\> extends `FilterDef` ? { `after`: ``"ID?"`` ; `condition`: { `object`: `EntityFilterConditionsDefinition`<`Context`[``"outputDefinition"``]\> ; `optional`: ``true``  } ; `filter`: { `def`: `FilterDef` ; `type`: ``"object"``  } ; `first`: { `optional`: ``true`` ; `type`: ``"int"``  }  } : `never`

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:11
