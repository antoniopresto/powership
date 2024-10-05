[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / EntityFromContext

# Interface: EntityFromContext<Context\>

[Powership](../modules/Powership.md).EntityFromContext

## Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](../modules/Powership.md#anyentitytypescontext) |

## Hierarchy

- [`EntityLoaderMethods`](../modules/Powership.md#entityloadermethods)<`Context`\>

  ↳ **`EntityFromContext`**

  ↳↳ [`Entity`](Powership.Entity.md)

## Table of contents

### Properties

- [\_\_context](Powership.EntityFromContext.md#__context)
- [\_\_isEntity](Powership.EntityFromContext.md#__isentity)
- [addHooks](Powership.EntityFromContext.md#addhooks)
- [addIndexRelation](Powership.EntityFromContext.md#addindexrelation)
- [addRelation](Powership.EntityFromContext.md#addrelation)
- [aliasPaths](Powership.EntityFromContext.md#aliaspaths)
- [conditionsDefinition](Powership.EntityFromContext.md#conditionsdefinition)
- [createOne](Powership.EntityFromContext.md#createone)
- [databaseType](Powership.EntityFromContext.md#databasetype)
- [deleteMany](Powership.EntityFromContext.md#deletemany)
- [deleteOne](Powership.EntityFromContext.md#deleteone)
- [edgeType](Powership.EntityFromContext.md#edgetype)
- [extend](Powership.EntityFromContext.md#extend)
- [extendInput](Powership.EntityFromContext.md#extendinput)
- [extendUpdate](Powership.EntityFromContext.md#extendupdate)
- [findById](Powership.EntityFromContext.md#findbyid)
- [findMany](Powership.EntityFromContext.md#findmany)
- [findOne](Powership.EntityFromContext.md#findone)
- [hasAliases](Powership.EntityFromContext.md#hasaliases)
- [hooks](Powership.EntityFromContext.md#hooks)
- [indexGraphTypes](Powership.EntityFromContext.md#indexgraphtypes)
- [indexRelations](Powership.EntityFromContext.md#indexrelations)
- [indexes](Powership.EntityFromContext.md#indexes)
- [inputType](Powership.EntityFromContext.md#inputtype)
- [name](Powership.EntityFromContext.md#name)
- [originType](Powership.EntityFromContext.md#origintype)
- [paginate](Powership.EntityFromContext.md#paginate)
- [paginationType](Powership.EntityFromContext.md#paginationtype)
- [parse](Powership.EntityFromContext.md#parse)
- [setOption](Powership.EntityFromContext.md#setoption)
- [transporter](Powership.EntityFromContext.md#transporter)
- [type](Powership.EntityFromContext.md#type)
- [updateMany](Powership.EntityFromContext.md#updatemany)
- [updateOne](Powership.EntityFromContext.md#updateone)
- [usedOptions](Powership.EntityFromContext.md#usedoptions)

### Methods

- [getDocumentId](Powership.EntityFromContext.md#getdocumentid)
- [getIndexFields](Powership.EntityFromContext.md#getindexfields)
- [parseDocumentIndexes](Powership.EntityFromContext.md#parsedocumentindexes)

## Properties

### \_\_context

• **\_\_context**: `Context`

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:66

___

### \_\_isEntity

• **\_\_isEntity**: ``true``

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:65

___

### addHooks

• **addHooks**: (`options`: (`hooks`: [`EntityHooks`](../modules/Powership.md#entityhooks)<{}, [`AnyEntity`](../modules/Powership.md#anyentity)\>) => `any`) => [`EntityFromContext`](Powership.EntityFromContext.md)<`Context`\>

#### Type declaration

▸ (`options`): [`EntityFromContext`](Powership.EntityFromContext.md)<`Context`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | (`hooks`: [`EntityHooks`](../modules/Powership.md#entityhooks)<{}, [`AnyEntity`](../modules/Powership.md#anyentity)\>) => `any` |

##### Returns

[`EntityFromContext`](Powership.EntityFromContext.md)<`Context`\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:62

___

### addIndexRelation

• **addIndexRelation**: <E, Name\>(`name`: `Name`, `entity`: `E`) => [`EntityFromContext`](Powership.EntityFromContext.md)<[`EntityTypesContext`](Powership.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

#### Type declaration

▸ <`E`, `Name`\>(`name`, `entity`): [`EntityFromContext`](Powership.EntityFromContext.md)<[`EntityTypesContext`](Powership.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

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

[`EntityFromContext`](Powership.EntityFromContext.md)<[`EntityTypesContext`](Powership.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:36

___

### addRelation

• **addRelation**: [`EntityAddRelation`](Powership.EntityAddRelation.md)<[`EntityFromContext`](Powership.EntityFromContext.md)<`Context`\>, `Context`\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:49

___

### aliasPaths

• **aliasPaths**: `string`[]

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:43

___

### conditionsDefinition

• **conditionsDefinition**: `EntityFilterConditionsDefinition`<`Context`[``"originDefinition"``]\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:44

___

### createOne

• **createOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Context`[``"document"``] ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : [`CreateOne`](Powership.CreateOne.md)<`Context`[``"documentCreationInput"``], `Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.createOne

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:29

___

### databaseType

• **databaseType**: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:45

___

### deleteMany

• **deleteMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, `Context`\> : [`DeleteMany`](Powership.DeleteMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.deleteMany

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:33

___

### deleteOne

• **deleteOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, `Context`\> : [`DeleteOne`](Powership.DeleteOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.deleteOne

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:34

___

### edgeType

• **edgeType**: [`EdgeType`](../modules/Powership.md#edgetype)<[`GraphType`](../classes/Powership.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:46

___

### extend

• **extend**: [`ExtendEntity`](Powership.ExtendEntity.md)<[`EntityFromContext`](Powership.EntityFromContext.md)<`Context`\>\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:63

___

### extendInput

• **extendInput**: [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: `Context`[``"originDefinition"``]  }, { `object`: `Context`[``"originDefinition"``]  }\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:26

___

### extendUpdate

• **extendUpdate**: [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`DescribeObjectDefinition`](../modules/Powership.md#describeobjectdefinition)<`Context`[``"originDefinition"``]\>, keyof `Context`[``"originDefinition"``], { `optional`: ``true``  }\>  }, { `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`DescribeObjectDefinition`](../modules/Powership.md#describeobjectdefinition)<`Context`[``"originDefinition"``]\>, keyof `Context`[``"originDefinition"``], { `optional`: ``true``  }\>  }\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:31

___

### findById

• **findById**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, `Context`\> : [`FindById`](Powership.FindById.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findById

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:35

___

### findMany

• **findMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `items`: `Context`[``"document"``][]  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never`, `Context`\> : [`FindMany`](Powership.FindMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findMany

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:31

___

### findOne

• **findOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, `Context`\> : [`FindOne`](Powership.FindOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findOne

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:30

___

### hasAliases

• `Readonly` **hasAliases**: `boolean`

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:50

___

### hooks

• **hooks**: [`EntityHooks`](../modules/Powership.md#entityhooks)<{}, [`AnyEntity`](../modules/Powership.md#anyentity)\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:64

___

### indexGraphTypes

• **indexGraphTypes**: `Object`

#### Index signature

▪ [K: `string`]: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)  }\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:51

___

### indexRelations

• **indexRelations**: [`EntityIndexRelations`](Powership.EntityIndexRelations.md)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:56

___

### indexes

• **indexes**: `Context`[``"indexes"``]

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:22

___

### inputType

• **inputType**: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, keyof `Context`[``"originDefinition"``]\> & `Context`[``"originDefinition"``]  }\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:18

___

### name

• **name**: `string`

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:14

___

### originType

• **originType**: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: `Context`[``"originDefinition"``]  }\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:15

___

### paginate

• **paginate**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `edges`: { `cursor`: `string` ; `node`: `Context`[``"document"``]  }[] ; `pageInfo`: { `endCursor`: `undefined` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor`: `undefined` \| `string`  }  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never`, `Context`\> : [`Paginate`](Powership.Paginate.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.paginate

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:32

___

### paginationType

• **paginationType**: [`PaginationType`](../modules/Powership.md#paginationtype)<[`GraphType`](../classes/Powership.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:57

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

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:58

___

### setOption

• **setOption**: <Key, V\>(`optionName`: `Key`, `value`: `V`) => [`EntityFromContext`](Powership.EntityFromContext.md)<`Context`\>

#### Type declaration

▸ <`Key`, `V`\>(`optionName`, `value`): [`EntityFromContext`](Powership.EntityFromContext.md)<`Context`\>

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

[`EntityFromContext`](Powership.EntityFromContext.md)<`Context`\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:60

___

### transporter

• **transporter**: `undefined` \| [`Transporter`](Powership.Transporter.md)<`any`\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:61

___

### type

• **type**: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:23

___

### updateMany

• **updateMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `error?`: ``null`` \| `string` ; `modifiedCount`: ``null`` \| `number` ; `upsertedId`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : [`UpdateMany`](Powership.UpdateMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.updateMany

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:36

___

### updateOne

• **updateOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Context`[``"document"``] ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : [`UpdateOne`](Powership.UpdateOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.updateOne

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:37

___

### usedOptions

• **usedOptions**: `Context`[``"options"``]

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:21

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

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:47

___

### getIndexFields

▸ **getIndexFields**(`doc`): [`CommonIndexFields`](../modules/Powership.md#commonindexfields)

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

[`CommonIndexFields`](../modules/Powership.md#commonindexfields)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:48

___

### parseDocumentIndexes

▸ **parseDocumentIndexes**(`doc`): [`ParsedDocumentIndexes`](../modules/Powership.md#parseddocumentindexes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

[`ParsedDocumentIndexes`](../modules/Powership.md#parseddocumentindexes)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:59
