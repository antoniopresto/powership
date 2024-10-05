[Powership](../README.md) / [Modules](../modules.md) / [Entity](../modules/Entity.md) / EntityFromContext

# Interface: EntityFromContext<Context\>

[Entity](../modules/Entity.md).EntityFromContext

## Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](../modules/Entity.md#anyentitytypescontext) |

## Hierarchy

- [`EntityLoaderMethods`](../modules/Entity.md#entityloadermethods)<`Context`\>

  ↳ **`EntityFromContext`**

  ↳↳ [`Entity`](Entity.Entity.md)

## Table of contents

### Properties

- [\_\_context](Entity.EntityFromContext.md#__context)
- [\_\_isEntity](Entity.EntityFromContext.md#__isentity)
- [addHooks](Entity.EntityFromContext.md#addhooks)
- [addIndexRelation](Entity.EntityFromContext.md#addindexrelation)
- [addRelation](Entity.EntityFromContext.md#addrelation)
- [aliasPaths](Entity.EntityFromContext.md#aliaspaths)
- [conditionsDefinition](Entity.EntityFromContext.md#conditionsdefinition)
- [createOne](Entity.EntityFromContext.md#createone)
- [databaseType](Entity.EntityFromContext.md#databasetype)
- [deleteMany](Entity.EntityFromContext.md#deletemany)
- [deleteOne](Entity.EntityFromContext.md#deleteone)
- [edgeType](Entity.EntityFromContext.md#edgetype)
- [extend](Entity.EntityFromContext.md#extend)
- [extendInput](Entity.EntityFromContext.md#extendinput)
- [extendUpdate](Entity.EntityFromContext.md#extendupdate)
- [findById](Entity.EntityFromContext.md#findbyid)
- [findMany](Entity.EntityFromContext.md#findmany)
- [findOne](Entity.EntityFromContext.md#findone)
- [hasAliases](Entity.EntityFromContext.md#hasaliases)
- [hooks](Entity.EntityFromContext.md#hooks)
- [indexGraphTypes](Entity.EntityFromContext.md#indexgraphtypes)
- [indexRelations](Entity.EntityFromContext.md#indexrelations)
- [indexes](Entity.EntityFromContext.md#indexes)
- [inputType](Entity.EntityFromContext.md#inputtype)
- [name](Entity.EntityFromContext.md#name)
- [originType](Entity.EntityFromContext.md#origintype)
- [paginate](Entity.EntityFromContext.md#paginate)
- [paginationType](Entity.EntityFromContext.md#paginationtype)
- [parse](Entity.EntityFromContext.md#parse)
- [setOption](Entity.EntityFromContext.md#setoption)
- [transporter](Entity.EntityFromContext.md#transporter)
- [type](Entity.EntityFromContext.md#type)
- [updateMany](Entity.EntityFromContext.md#updatemany)
- [updateOne](Entity.EntityFromContext.md#updateone)
- [usedOptions](Entity.EntityFromContext.md#usedoptions)

### Methods

- [getDocumentId](Entity.EntityFromContext.md#getdocumentid)
- [getIndexFields](Entity.EntityFromContext.md#getindexfields)
- [parseDocumentIndexes](Entity.EntityFromContext.md#parsedocumentindexes)

## Properties

### \_\_context

• **\_\_context**: `Context`

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:117](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L117)

___

### \_\_isEntity

• **\_\_isEntity**: ``true``

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:116](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L116)

___

### addHooks

• **addHooks**: (`options`: (`hooks`: [`EntityHooks`](../modules/Entity.md#entityhooks)<{}, [`AnyEntity`](../modules/Entity.md#anyentity)\>) => `any`) => [`EntityFromContext`](Entity.EntityFromContext.md)<`Context`\>

#### Type declaration

▸ (`options`): [`EntityFromContext`](Entity.EntityFromContext.md)<`Context`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | (`hooks`: [`EntityHooks`](../modules/Entity.md#entityhooks)<{}, [`AnyEntity`](../modules/Entity.md#anyentity)\>) => `any` |

##### Returns

[`EntityFromContext`](Entity.EntityFromContext.md)<`Context`\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:110](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L110)

___

### addIndexRelation

• **addIndexRelation**: <E, Name\>(`name`: `Name`, `entity`: `E`) => [`EntityFromContext`](Entity.EntityFromContext.md)<[`EntityTypesContext`](Entity.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

#### Type declaration

▸ <`E`, `Name`\>(`name`, `entity`): [`EntityFromContext`](Entity.EntityFromContext.md)<[`EntityTypesContext`](Entity.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

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

[`EntityFromContext`](Entity.EntityFromContext.md)<[`EntityTypesContext`](Entity.EntityTypesContext.md)<`Omit`<`Context`[``"originDefinition"``], `Name`\> & { [L in string]: Object }, `Context`[``"indexes"``]\>\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:58](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L58)

___

### addRelation

• **addRelation**: [`EntityAddRelation`](Entity.EntityAddRelation.md)<[`EntityFromContext`](Entity.EntityFromContext.md)<`Context`\>, `Context`\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:84](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L84)

___

### aliasPaths

• **aliasPaths**: `string`[]

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:70](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L70)

___

### conditionsDefinition

• **conditionsDefinition**: `EntityFilterConditionsDefinition`<`Context`[``"originDefinition"``]\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:72](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L72)

___

### createOne

• **createOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| `LoaderContext` ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| `LoaderContext` ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Context`[``"document"``] ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"documentCreationInput"``]\> ; `context`: `undefined` \| `LoaderContext` ; `item`: `Context`[``"documentCreationInput"``] ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : `CreateOne`<`Context`[``"documentCreationInput"``], `Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.createOne

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:58](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L58)

___

### databaseType

• **databaseType**: `GraphType`<{ `object`: `Context`[``"outputDefinition"``]  }\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:76](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L76)

___

### deleteMany

• **deleteMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, `Context`\> : `DeleteMany`<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.deleteMany

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:70](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L70)

___

### deleteOne

• **deleteOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, `Context`\> : `DeleteOne`<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.deleteOne

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:72](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L72)

___

### edgeType

• **edgeType**: [`EdgeType`](../modules/Entity.md#edgetype)<`GraphType`<{ `object`: `Context`[``"outputDefinition"``]  }\>\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:78](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L78)

___

### extend

• **extend**: [`ExtendEntity`](Entity.ExtendEntity.md)<[`EntityFromContext`](Entity.EntityFromContext.md)<`Context`\>\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:112](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L112)

___

### extendInput

• **extendInput**: `ExtendObjectDefinition`<{ `object`: `Context`[``"originDefinition"``]  }, { `object`: `Context`[``"originDefinition"``]  }\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:48](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L48)

___

### extendUpdate

• **extendUpdate**: `ExtendObjectDefinition`<{ `object`: `OverrideField`<`DescribeObjectDefinition`<`Context`[``"originDefinition"``]\>, keyof `Context`[``"originDefinition"``], { `optional`: ``true``  }\>  }, { `object`: `OverrideField`<`DescribeObjectDefinition`<`Context`[``"originDefinition"``]\>, keyof `Context`[``"originDefinition"``], { `optional`: ``true``  }\>  }\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:53](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L53)

___

### findById

• **findById**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, `Context`\> : `FindById`<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findById

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:74](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L74)

___

### findMany

• **findMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never`) => `Promise`<{ `items`: `Context`[``"document"``][]  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never`, `Context`\> : `FindMany`<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findMany

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:66](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L66)

___

### findOne

• **findOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `Context`[``"document"``]  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, `Context`\> : `FindOne`<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.findOne

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:64](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L64)

___

### hasAliases

• `Readonly` **hasAliases**: `boolean`

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:86](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L86)

___

### hooks

• **hooks**: [`EntityHooks`](../modules/Entity.md#entityhooks)<{}, [`AnyEntity`](../modules/Entity.md#anyentity)\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:114](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L114)

___

### indexGraphTypes

• **indexGraphTypes**: `Object`

#### Index signature

▪ [K: `string`]: `GraphType`<{ `object`: `ObjectDefinitionInput`  }\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:88](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L88)

___

### indexRelations

• **indexRelations**: [`EntityIndexRelations`](Entity.EntityIndexRelations.md)

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:95](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L95)

___

### indexes

• **indexes**: `Context`[``"indexes"``]

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:42](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L42)

___

### inputType

• **inputType**: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, keyof `Context`[``"originDefinition"``]\> & `Context`[``"originDefinition"``]  }\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:32](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L32)

___

### name

• **name**: `string`

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:28](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L28)

___

### originType

• **originType**: `GraphType`<{ `object`: `Context`[``"originDefinition"``]  }\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:30](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L30)

___

### paginate

• **paginate**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never`) => `Promise`<{ `edges`: { `cursor`: `string` ; `node`: `Context`[``"document"``]  }[] ; `pageInfo`: { `endCursor`: `undefined` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor`: `undefined` \| `string`  }  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never`, `Context`\> : `Paginate`<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.paginate

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:68](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L68)

___

### paginationType

• **paginationType**: [`PaginationType`](../modules/Entity.md#paginationtype)<`GraphType`<{ `object`: `Context`[``"outputDefinition"``]  }\>\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:97](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L97)

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

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:99](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L99)

___

### setOption

• **setOption**: <Key, V\>(`optionName`: `Key`, `value`: `V`) => [`EntityFromContext`](Entity.EntityFromContext.md)<`Context`\>

#### Type declaration

▸ <`Key`, `V`\>(`optionName`, `value`): [`EntityFromContext`](Entity.EntityFromContext.md)<`Context`\>

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

[`EntityFromContext`](Entity.EntityFromContext.md)<`Context`\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:103](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L103)

___

### transporter

• **transporter**: `undefined` \| `Transporter`<`any`\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:108](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L108)

___

### type

• **type**: `GraphType`<{ `object`: `Context`[``"outputDefinition"``]  }\>

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:44](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L44)

___

### updateMany

• **updateMany**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `error?`: ``null`` \| `string` ; `modifiedCount`: ``null`` \| `number` ; `upsertedId`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : `UpdateMany`<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.updateMany

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:76](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L76)

___

### updateOne

• **updateOne**: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `Context`[``"document"``] ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`Context`[``"indexes"``][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`Context`[``"document"``]\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`Context`[``"document"``]\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, `Context`\> : `UpdateOne`<`Context`[``"document"``], `Context`[``"indexes"``]\>

#### Inherited from

EntityLoaderMethods.updateOne

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:78](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L78)

___

### usedOptions

• **usedOptions**: `Context`[``"options"``]

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:40](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L40)

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

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:80](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L80)

___

### getIndexFields

▸ **getIndexFields**(`doc`): `CommonIndexFields`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

`CommonIndexFields`

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:82](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L82)

___

### parseDocumentIndexes

▸ **parseDocumentIndexes**(`doc`): `ParsedDocumentIndexes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

`ParsedDocumentIndexes`

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:101](https://github.com/antoniopresto/powership/blob/2672a73/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L101)
