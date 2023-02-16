[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / \_EntityLoaderUtils

# Interface: \_EntityLoaderUtils<Options, Context\>

[Solarwind](../modules/Solarwind.md)._EntityLoaderUtils

## Type parameters

| Name | Type |
| :------ | :------ |
| `Options` | extends `Record`<`string`, `any`\> |
| `Context` | extends [`AnyEntityTypesContext`](../modules/Solarwind.md#anyentitytypescontext) |

## Table of contents

### Properties

- [\_\_filterDef](Solarwind._EntityLoaderUtils.md#__filterdef)
- [filterDef](Solarwind._EntityLoaderUtils.md#filterdef)
- [indexInfo](Solarwind._EntityLoaderUtils.md#indexinfo)
- [queryArgs](Solarwind._EntityLoaderUtils.md#queryargs)

## Properties

### \_\_filterDef

• **\_\_filterDef**: [`_GetLoaderFilterDef`](../modules/Solarwind.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:26

___

### filterDef

• **filterDef**: [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<[`_GetLoaderFilterDef`](../modules/Solarwind.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>, [`_GetLoaderFilterDef`](../modules/Solarwind.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:10

___

### indexInfo

• **indexInfo**: `Context`[``"indexes"``]

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:9

___

### queryArgs

• **queryArgs**: [`_GetLoaderFilterDef`](../modules/Solarwind.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\> extends `FilterDef` ? { `after`: ``"ID?"`` ; `condition`: { `object`: `EntityFilterConditionsDefinition`<`Context`[``"outputDefinition"``]\> ; `optional`: ``true``  } ; `filter`: { `def`: `FilterDef` ; `type`: ``"object"``  } ; `first`: { `optional`: ``true`` ; `type`: ``"int"``  }  } : `never`

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:11
