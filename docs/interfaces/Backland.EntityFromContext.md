[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / EntityFromContext

# Interface: EntityFromContext<Context\>

[Backland](../modules/Backland.md).EntityFromContext

## Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](../modules/Backland.md#anyentitytypescontext) |

## Hierarchy

- [`EntityLoaderMethods`](../modules/Backland.md#entityloadermethods)<`Context`\>

  ↳ **`EntityFromContext`**

  ↳↳ [`Entity`](Backland.Entity.md)

## Table of contents

### Properties

- [\_\_context](Backland.EntityFromContext.md#__context)
- [\_\_isEntity](Backland.EntityFromContext.md#__isentity)
- [addHooks](Backland.EntityFromContext.md#addhooks)
- [addIndexRelation](Backland.EntityFromContext.md#addindexrelation)
- [addRelation](Backland.EntityFromContext.md#addrelation)
- [aliasPaths](Backland.EntityFromContext.md#aliaspaths)
- [conditionsDefinition](Backland.EntityFromContext.md#conditionsdefinition)
- [createOne](Backland.EntityFromContext.md#createone)
- [databaseType](Backland.EntityFromContext.md#databasetype)
- [deleteMany](Backland.EntityFromContext.md#deletemany)
- [deleteOne](Backland.EntityFromContext.md#deleteone)
- [edgeType](Backland.EntityFromContext.md#edgetype)
- [extend](Backland.EntityFromContext.md#extend)
- [extendInput](Backland.EntityFromContext.md#extendinput)
- [extendUpdate](Backland.EntityFromContext.md#extendupdate)
- [findById](Backland.EntityFromContext.md#findbyid)
- [findMany](Backland.EntityFromContext.md#findmany)
- [findOne](Backland.EntityFromContext.md#findone)
- [hasAliases](Backland.EntityFromContext.md#hasaliases)
- [hooks](Backland.EntityFromContext.md#hooks)
- [indexGraphTypes](Backland.EntityFromContext.md#indexgraphtypes)
- [indexRelations](Backland.EntityFromContext.md#indexrelations)
- [indexes](Backland.EntityFromContext.md#indexes)
- [inputType](Backland.EntityFromContext.md#inputtype)
- [name](Backland.EntityFromContext.md#name)
- [originType](Backland.EntityFromContext.md#origintype)
- [paginate](Backland.EntityFromContext.md#paginate)
- [paginationType](Backland.EntityFromContext.md#paginationtype)
- [parse](Backland.EntityFromContext.md#parse)
- [setOption](Backland.EntityFromContext.md#setoption)
- [transporter](Backland.EntityFromContext.md#transporter)
- [type](Backland.EntityFromContext.md#type)
- [updateMany](Backland.EntityFromContext.md#updatemany)
- [updateOne](Backland.EntityFromContext.md#updateone)
- [usedOptions](Backland.EntityFromContext.md#usedoptions)

### Methods

- [getDocumentId](Backland.EntityFromContext.md#getdocumentid)
- [getIndexFields](Backland.EntityFromContext.md#getindexfields)
- [parseDocumentIndexes](Backland.EntityFromContext.md#parsedocumentindexes)

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

• **addHooks**: (`options`: (`hooks`: [`EntityHooks`](../modules/Backland.md#entityhooks)<{}, [`AnyEntity`](../modules/Backland.md#anyentity)\>) => `any`) => [`EntityFromContext`](Backland.EntityFromContext.md)<`Context`\>

#### Type declaration

▸ (`options`): [`EntityFromContext`](Backland.EntityFromContext.md)<`Context`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | (`hooks`: [`EntityHooks`](../modules/Backland.md#entityhooks)<{}, [`AnyEntity`](../modules/Backland.md#anyentity)\>) => `any` |

##### Returns

[`EntityFromContext`](Backland.EntityFromContext.md)<`Context`\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:62

___

### addIndexRelation

• **addIndexRelation**: <E, Name\>(`name`: `Name`, `entity`: `E`) => [`EntityFromContext`](Backland.EntityFromContext.md)<[`EntityTypesContext`](Backland.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

#### Type declaration

▸ <`E`, `Name`\>(`name`, `entity`): [`EntityFromContext`](Backland.EntityFromContext.md)<[`EntityTypesContext`](Backland.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

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

[`EntityFromContext`](Backland.EntityFromContext.md)<[`EntityTypesContext`](Backland.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:36

___

### addRelation

• **addRelation**: [`EntityAddRelation`](Backland.EntityAddRelation.md)<[`EntityFromContext`](Backland.EntityFromContext.md)<`Context`\>, `Context`\>

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

• **createOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Context`[``"document"``] ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : [`CreateOne`](Backland.CreateOne.md)<`Context`[``"documentCreationInput"``], `Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.createOne

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:29

___

### databaseType

• **databaseType**: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:45

___

### deleteMany

• **deleteMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, `Context`\> : [`DeleteMany`](Backland.DeleteMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.deleteMany

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:33

___

### deleteOne

• **deleteOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, `Context`\> : [`DeleteOne`](Backland.DeleteOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.deleteOne

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:34

___

### edgeType

• **edgeType**: [`EdgeType`](../modules/Backland.md#edgetype)<[`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:46

___

### extend

• **extend**: [`ExtendEntity`](Backland.ExtendEntity.md)<[`EntityFromContext`](Backland.EntityFromContext.md)<`Context`\>\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:63

___

### extendInput

• **extendInput**: [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: `Context`[``"originDefinition"``]  }, { `object`: `Context`[``"originDefinition"``]  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:26

___

### extendUpdate

• **extendUpdate**: [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`DescribeObjectDefinition`](../modules/Backland.md#describeobjectdefinition)<`Context`[``"originDefinition"``]\>, keyof `Context`[``"originDefinition"``], { `optional`: ``true``  }\>  }, { `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`DescribeObjectDefinition`](../modules/Backland.md#describeobjectdefinition)<`Context`[``"originDefinition"``]\>, keyof `Context`[``"originDefinition"``], { `optional`: ``true``  }\>  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:31

___

### findById

• **findById**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, `Context`\> : [`FindById`](Backland.FindById.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findById

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:35

___

### findMany

• **findMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `items`: `Context`[``"document"``][]  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never`, `Context`\> : [`FindMany`](Backland.FindMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findMany

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:31

___

### findOne

• **findOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, `Context`\> : [`FindOne`](Backland.FindOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

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

• **hooks**: [`EntityHooks`](../modules/Backland.md#entityhooks)<{}, [`AnyEntity`](../modules/Backland.md#anyentity)\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:64

___

### indexGraphTypes

• **indexGraphTypes**: `Object`

#### Index signature

▪ [K: `string`]: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: [`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:51

___

### indexRelations

• **indexRelations**: [`EntityIndexRelations`](Backland.EntityIndexRelations.md)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:56

___

### indexes

• **indexes**: `Context`[``"indexes"``]

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:22

___

### inputType

• **inputType**: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, keyof `Context`[``"originDefinition"``]\> & `Context`[``"originDefinition"``]  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:18

___

### name

• **name**: `string`

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:14

___

### originType

• **originType**: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `Context`[``"originDefinition"``]  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:15

___

### paginate

• **paginate**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `edges`: { `cursor`: `string` ; `node`: `Context`[``"document"``]  }[] ; `pageInfo`: { `endCursor`: `undefined` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor`: `undefined` \| `string`  }  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never`, `Context`\> : [`Paginate`](Backland.Paginate.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.paginate

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:32

___

### paginationType

• **paginationType**: [`PaginationType`](../modules/Backland.md#paginationtype)<[`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>\>

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

• **setOption**: <Key, V\>(`optionName`: `Key`, `value`: `V`) => [`EntityFromContext`](Backland.EntityFromContext.md)<`Context`\>

#### Type declaration

▸ <`Key`, `V`\>(`optionName`, `value`): [`EntityFromContext`](Backland.EntityFromContext.md)<`Context`\>

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

[`EntityFromContext`](Backland.EntityFromContext.md)<`Context`\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:60

___

### transporter

• **transporter**: `undefined` \| [`Transporter`](Backland.Transporter.md)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:61

___

### type

• **type**: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `Context`[``"outputDefinition"``]  }\>

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:23

___

### updateMany

• **updateMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `error?`: ``null`` \| `string` ; `modifiedCount`: ``null`` \| `number` ; `upsertedId`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : [`UpdateMany`](Backland.UpdateMany.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.updateMany

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:36

___

### updateOne

• **updateOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Context`[``"document"``] ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`Context`[``"document"``]\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : [`UpdateOne`](Backland.UpdateOne.md)<`Context`[``"document"``], `Context`[``"indexes"``]\>

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

▸ **getIndexFields**(`doc`): [`CommonIndexFields`](../modules/Backland.md#commonindexfields)

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

[`CommonIndexFields`](../modules/Backland.md#commonindexfields)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:48

___

### parseDocumentIndexes

▸ **parseDocumentIndexes**(`doc`): [`ParsedDocumentIndexes`](../modules/Backland.md#parseddocumentindexes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

[`ParsedDocumentIndexes`](../modules/Backland.md#parseddocumentindexes)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:59
