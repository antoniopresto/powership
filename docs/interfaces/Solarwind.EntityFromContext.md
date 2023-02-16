[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / EntityFromContext

# Interface: EntityFromContext<Context\>

[Solarwind](../modules/Solarwind.md).EntityFromContext

## Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](../modules/Solarwind.md#anyentitytypescontext) |

## Hierarchy

- [`EntityLoaderMethods`](../modules/Solarwind.md#entityloadermethods)<`Context`\>

  ↳ **`EntityFromContext`**

  ↳↳ [`Entity`](Solarwind.Entity.md)

## Table of contents

### Properties

- [\_\_context](Solarwind.EntityFromContext.md#__context)
- [\_\_isEntity](Solarwind.EntityFromContext.md#__isentity)
- [addHooks](Solarwind.EntityFromContext.md#addhooks)
- [addIndexRelation](Solarwind.EntityFromContext.md#addindexrelation)
- [addRelation](Solarwind.EntityFromContext.md#addrelation)
- [aliasPaths](Solarwind.EntityFromContext.md#aliaspaths)
- [conditionsDefinition](Solarwind.EntityFromContext.md#conditionsdefinition)
- [createOne](Solarwind.EntityFromContext.md#createone)
- [databaseType](Solarwind.EntityFromContext.md#databasetype)
- [deleteMany](Solarwind.EntityFromContext.md#deletemany)
- [deleteOne](Solarwind.EntityFromContext.md#deleteone)
- [edgeType](Solarwind.EntityFromContext.md#edgetype)
- [extend](Solarwind.EntityFromContext.md#extend)
- [extendInput](Solarwind.EntityFromContext.md#extendinput)
- [extendUpdate](Solarwind.EntityFromContext.md#extendupdate)
- [findById](Solarwind.EntityFromContext.md#findbyid)
- [findMany](Solarwind.EntityFromContext.md#findmany)
- [findOne](Solarwind.EntityFromContext.md#findone)
- [hasAliases](Solarwind.EntityFromContext.md#hasaliases)
- [hooks](Solarwind.EntityFromContext.md#hooks)
- [indexGraphTypes](Solarwind.EntityFromContext.md#indexgraphtypes)
- [indexRelations](Solarwind.EntityFromContext.md#indexrelations)
- [indexes](Solarwind.EntityFromContext.md#indexes)
- [inputType](Solarwind.EntityFromContext.md#inputtype)
- [name](Solarwind.EntityFromContext.md#name)
- [originType](Solarwind.EntityFromContext.md#origintype)
- [paginate](Solarwind.EntityFromContext.md#paginate)
- [paginationType](Solarwind.EntityFromContext.md#paginationtype)
- [parse](Solarwind.EntityFromContext.md#parse)
- [setOption](Solarwind.EntityFromContext.md#setoption)
- [transporter](Solarwind.EntityFromContext.md#transporter)
- [type](Solarwind.EntityFromContext.md#type)
- [updateMany](Solarwind.EntityFromContext.md#updatemany)
- [updateOne](Solarwind.EntityFromContext.md#updateone)
- [usedOptions](Solarwind.EntityFromContext.md#usedoptions)

### Methods

- [getDocumentId](Solarwind.EntityFromContext.md#getdocumentid)
- [getIndexFields](Solarwind.EntityFromContext.md#getindexfields)
- [parseDocumentIndexes](Solarwind.EntityFromContext.md#parsedocumentindexes)

## Properties

### \_\_context

• **\_\_context**: `Context`

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:66

___

### \_\_isEntity

• **\_\_isEntity**: ``true``

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:65

___

### addHooks

• **addHooks**: (`options`: (`hooks`: [`EntityHooks`](../modules/Solarwind.md#entityhooks)<{}, [`AnyEntity`](../modules/Solarwind.md#anyentity)\>) => `any`) => [`EntityFromContext`](Solarwind.EntityFromContext.md)<`Context`\>

#### Type declaration

▸ (`options`): [`EntityFromContext`](Solarwind.EntityFromContext.md)<`Context`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | (`hooks`: [`EntityHooks`](../modules/Solarwind.md#entityhooks)<{}, [`AnyEntity`](../modules/Solarwind.md#anyentity)\>) => `any` |

##### Returns

[`EntityFromContext`](Solarwind.EntityFromContext.md)<`Context`\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:62

___

### addIndexRelation

• **addIndexRelation**: <E, Name\>(`name`: `Name`, `entity`: `E`) => [`EntityFromContext`](Solarwind.EntityFromContext.md)<[`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

#### Type declaration

▸ <`E`, `Name`\>(`name`, `entity`): [`EntityFromContext`](Solarwind.EntityFromContext.md)<[`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `unknown` |
| `Name` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Name` |
| `entity` | `E` |

##### Returns

[`EntityFromContext`](Solarwind.EntityFromContext.md)<[`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:36

___

### addRelation

• **addRelation**: [`EntityAddRelation`](Solarwind.EntityAddRelation.md)<[`EntityFromContext`](Solarwind.EntityFromContext.md)<`Context`\>, `Context`\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:49

___

### aliasPaths

• **aliasPaths**: `string`[]

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:43

___

### conditionsDefinition

• **conditionsDefinition**: `EntityFilterConditionsDefinition`<`Context`[``"originDefinition"``]\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:44

___

### createOne

• **createOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Context`[``"document"``] ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : [`CreateOne`](Solarwind.CreateOne.md)<`Context`[``"documentCreationInput"``], `Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.createOne

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:29

___

### databaseType

• **databaseType**: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:45

___

### deleteMany

• **deleteMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, `Context`\> : [`DeleteMany`](Solarwind.DeleteMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.deleteMany

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:33

___

### deleteOne

• **deleteOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, `Context`\> : [`DeleteOne`](Solarwind.DeleteOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.deleteOne

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:34

___

### edgeType

• **edgeType**: [`EdgeType`](../modules/Solarwind.md#edgetype)<[`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:46

___

### extend

• **extend**: [`ExtendEntity`](Solarwind.ExtendEntity.md)<[`EntityFromContext`](Solarwind.EntityFromContext.md)<`Context`\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:63

___

### extendInput

• **extendInput**: [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: `Context`[``"originDefinition"``]  }, { `object`: `Context`[``"originDefinition"``]  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:26

___

### extendUpdate

• **extendUpdate**: [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`DescribeObjectDefinition`](../modules/Solarwind.md#describeobjectdefinition)<`Context`[``"originDefinition"``]\>, keyof `Context`[``"originDefinition"``], { `optional`: ``true``  }\>  }, { `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`DescribeObjectDefinition`](../modules/Solarwind.md#describeobjectdefinition)<`Context`[``"originDefinition"``]\>, keyof `Context`[``"originDefinition"``], { `optional`: ``true``  }\>  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:31

___

### findById

• **findById**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, `Context`\> : [`FindById`](Solarwind.FindById.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findById

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:35

___

### findMany

• **findMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `items`: `Context`[``"document"``][]  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never`, `Context`\> : [`FindMany`](Solarwind.FindMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findMany

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:31

___

### findOne

• **findOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, `Context`\> : [`FindOne`](Solarwind.FindOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findOne

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:30

___

### hasAliases

• `Readonly` **hasAliases**: `boolean`

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:50

___

### hooks

• **hooks**: [`EntityHooks`](../modules/Solarwind.md#entityhooks)<{}, [`AnyEntity`](../modules/Solarwind.md#anyentity)\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:64

___

### indexGraphTypes

• **indexGraphTypes**: `Object`

#### Index signature

▪ [K: `string`]: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: [`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:51

___

### indexRelations

• **indexRelations**: [`EntityIndexRelations`](Solarwind.EntityIndexRelations.md)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:56

___

### indexes

• **indexes**: `Context`[``"indexes"``]

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:22

___

### inputType

• **inputType**: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, keyof `Context`[``"originDefinition"``]\> & `Context`[``"originDefinition"``]  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:18

___

### name

• **name**: `string`

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:14

___

### originType

• **originType**: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `Context`[``"originDefinition"``]  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:15

___

### paginate

• **paginate**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `edges`: { `cursor`: `string` ; `node`: `Context`[``"document"``]  }[] ; `pageInfo`: { `endCursor`: `undefined` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor`: `undefined` \| `string`  }  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never`, `Context`\> : [`Paginate`](Solarwind.Paginate.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.paginate

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:32

___

### paginationType

• **paginationType**: [`PaginationType`](../modules/Solarwind.md#paginationtype)<[`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:57

___

### parse

• **parse**: (...`args`: [input: any, options?: FieldParserConfig]) => `Context`[``"document"``]

#### Type declaration

▸ (`...args`): `Context`[``"document"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [input: any, options?: FieldParserConfig] |

##### Returns

`Context`[``"document"``]

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:58

___

### setOption

• **setOption**: <Key, V\>(`optionName`: `Key`, `value`: `V`) => [`EntityFromContext`](Solarwind.EntityFromContext.md)<`Context`\>

#### Type declaration

▸ <`Key`, `V`\>(`optionName`, `value`): [`EntityFromContext`](Solarwind.EntityFromContext.md)<`Context`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` \| `number` \| `symbol` |
| `V` | `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `optionName` | `Key` |
| `value` | `V` |

##### Returns

[`EntityFromContext`](Solarwind.EntityFromContext.md)<`Context`\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:60

___

### transporter

• **transporter**: `undefined` \| [`Transporter`](Solarwind.Transporter.md)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:61

___

### type

• **type**: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:23

___

### updateMany

• **updateMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `error?`: ``null`` \| `string` ; `modifiedCount`: ``null`` \| `number` ; `upsertedId`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : [`UpdateMany`](Solarwind.UpdateMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.updateMany

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:36

___

### updateOne

• **updateOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Context`[``"document"``] ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : [`UpdateOne`](Solarwind.UpdateOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.updateOne

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:37

___

### usedOptions

• **usedOptions**: `Context`[``"options"``]

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:21

## Methods

### getDocumentId

▸ **getDocumentId**(`doc`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

`string`

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:47

___

### getIndexFields

▸ **getIndexFields**(`doc`): [`CommonIndexFields`](../modules/Solarwind.md#commonindexfields)

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

[`CommonIndexFields`](../modules/Solarwind.md#commonindexfields)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:48

___

### parseDocumentIndexes

▸ **parseDocumentIndexes**(`doc`): [`ParsedDocumentIndexes`](../modules/Solarwind.md#parseddocumentindexes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

[`ParsedDocumentIndexes`](../modules/Solarwind.md#parseddocumentindexes)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:59
