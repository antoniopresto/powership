[Powership](../README.md) / [Modules](../modules.md) / [Entity](../modules/Entity.md) / \_EntityLoaderUtils

# Interface: \_EntityLoaderUtils<Options, Context\>

[Entity](../modules/Entity.md)._EntityLoaderUtils

## Type parameters

| Name | Type |
| :------ | :------ |
| `Options` | extends `Record`<`string`, `any`\> |
| `Context` | extends [`AnyEntityTypesContext`](../modules/Entity.md#anyentitytypescontext) |

## Table of contents

### Properties

- [\_\_filterDef](Entity._EntityLoaderUtils.md#__filterdef)
- [filterDef](Entity._EntityLoaderUtils.md#filterdef)
- [indexInfo](Entity._EntityLoaderUtils.md#indexinfo)
- [queryArgs](Entity._EntityLoaderUtils.md#queryargs)

## Properties

### \_\_filterDef

• **\_\_filterDef**: [`_GetLoaderFilterDef`](../modules/Entity.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:54](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L54)

___

### filterDef

• **filterDef**: `ExtendObjectDefinition`<[`_GetLoaderFilterDef`](../modules/Entity.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>, [`_GetLoaderFilterDef`](../modules/Entity.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\>\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:37](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L37)

___

### indexInfo

• **indexInfo**: `Context`[``"indexes"``]

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:35](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L35)

___

### queryArgs

• **queryArgs**: [`_GetLoaderFilterDef`](../modules/Entity.md#_getloaderfilterdef)<`Options`, `Context`[``"outputDefinition"``]\> extends `FilterDef` ? { `after`: ``"ID?"`` ; `condition`: { `object`: `EntityFilterConditionsDefinition`<`Context`[``"outputDefinition"``]\> ; `optional`: ``true``  } ; `filter`: { `def`: `FilterDef` ; `type`: ``"object"``  } ; `first`: { `optional`: ``true`` ; `type`: ``"int"``  }  } : `never`

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:39](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L39)
