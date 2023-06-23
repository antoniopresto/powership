[Powership](../README.md) / [Modules](../modules.md) / [Entity](../modules/Entity.md) / Entity

# Interface: Entity<Input, Indexes\>

[Entity](../modules/Entity.md).Entity

## Type parameters

| Name |
| :------ |
| `Input` |
| `Indexes` |

## Hierarchy

- [`EntityFromContext`](Entity.EntityFromContext.md)<[`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\>

  ↳ **`Entity`**

## Table of contents

### Properties

- [\_\_context](Entity.Entity.md#__context)
- [\_\_isEntity](Entity.Entity.md#__isentity)
- [addHooks](Entity.Entity.md#addhooks)
- [addIndexRelation](Entity.Entity.md#addindexrelation)
- [addRelation](Entity.Entity.md#addrelation)
- [aliasPaths](Entity.Entity.md#aliaspaths)
- [conditionsDefinition](Entity.Entity.md#conditionsdefinition)
- [createOne](Entity.Entity.md#createone)
- [databaseType](Entity.Entity.md#databasetype)
- [deleteMany](Entity.Entity.md#deletemany)
- [deleteOne](Entity.Entity.md#deleteone)
- [edgeType](Entity.Entity.md#edgetype)
- [extend](Entity.Entity.md#extend)
- [extendInput](Entity.Entity.md#extendinput)
- [extendUpdate](Entity.Entity.md#extendupdate)
- [findById](Entity.Entity.md#findbyid)
- [findMany](Entity.Entity.md#findmany)
- [findOne](Entity.Entity.md#findone)
- [hasAliases](Entity.Entity.md#hasaliases)
- [hooks](Entity.Entity.md#hooks)
- [indexGraphTypes](Entity.Entity.md#indexgraphtypes)
- [indexRelations](Entity.Entity.md#indexrelations)
- [indexes](Entity.Entity.md#indexes)
- [inputType](Entity.Entity.md#inputtype)
- [name](Entity.Entity.md#name)
- [originType](Entity.Entity.md#origintype)
- [paginate](Entity.Entity.md#paginate)
- [paginationType](Entity.Entity.md#paginationtype)
- [parse](Entity.Entity.md#parse)
- [setOption](Entity.Entity.md#setoption)
- [transporter](Entity.Entity.md#transporter)
- [type](Entity.Entity.md#type)
- [updateMany](Entity.Entity.md#updatemany)
- [updateOne](Entity.Entity.md#updateone)
- [usedOptions](Entity.Entity.md#usedoptions)

### Methods

- [getDocumentId](Entity.Entity.md#getdocumentid)
- [getIndexFields](Entity.Entity.md#getindexfields)
- [parseDocumentIndexes](Entity.Entity.md#parsedocumentindexes)

## Properties

### \_\_context

• **\_\_context**: [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[__context](Entity.EntityFromContext.md#__context)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:117

___

### \_\_isEntity

• **\_\_isEntity**: ``true``

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[__isEntity](Entity.EntityFromContext.md#__isentity)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:116

___

### addHooks

• **addHooks**: (`options`: (`hooks`: [`EntityHooks`](../modules/Entity.md#entityhooks)<{}, [`AnyEntity`](../modules/Entity.md#anyentity)\>) => `any`) => [`Entity`](Entity.Entity.md)<`Input`, `Indexes`\>

#### Type declaration

▸ (`options`): [`Entity`](Entity.Entity.md)<`Input`, `Indexes`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | (`hooks`: [`EntityHooks`](../modules/Entity.md#entityhooks)<{}, [`AnyEntity`](../modules/Entity.md#anyentity)\>) => `any` |

##### Returns

[`Entity`](Entity.Entity.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[addHooks](Entity.EntityFromContext.md#addhooks)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:110

___

### addIndexRelation

• **addIndexRelation**: <E, Name\>(`name`: `Name`, `entity`: `E`) => [`EntityFromContext`](Entity.EntityFromContext.md)<[`EntityTypesContext`](Entity.EntityTypesContext.md)<`Omit`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>\>

#### Type declaration

▸ <`E`, `Name`\>(`name`, `entity`): [`EntityFromContext`](Entity.EntityFromContext.md)<[`EntityTypesContext`](Entity.EntityTypesContext.md)<`Omit`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>\>

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

[`EntityFromContext`](Entity.EntityFromContext.md)<[`EntityTypesContext`](Entity.EntityTypesContext.md)<`Omit`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[addIndexRelation](Entity.EntityFromContext.md#addindexrelation)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:58

___

### addRelation

• **addRelation**: [`EntityAddRelation`](Entity.EntityAddRelation.md)<[`Entity`](Entity.Entity.md)<`Input`, `Indexes`\>, [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[addRelation](Entity.EntityFromContext.md#addrelation)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:84

___

### aliasPaths

• **aliasPaths**: `string`[]

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[aliasPaths](Entity.EntityFromContext.md#aliaspaths)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:70

___

### conditionsDefinition

• **conditionsDefinition**: `EntityFilterConditionsDefinition`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[conditionsDefinition](Entity.EntityFromContext.md#conditionsdefinition)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:72

___

### createOne

• **createOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Entity.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `item`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Entity.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Entity.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `item`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Entity.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {} ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Entity.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `item`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Entity.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\> : `CreateOne`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Entity.md#entitydocumentinput)<`D`\> : {}, `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[createOne](Entity.EntityFromContext.md#createone)

#### Defined in

packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:58

___

### databaseType

• **databaseType**: `GraphType`<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[databaseType](Entity.EntityFromContext.md#databasetype)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:76

___

### deleteMany

• **deleteMany**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\> : `DeleteMany`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[deleteMany](Entity.EntityFromContext.md#deletemany)

#### Defined in

packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:70

___

### deleteOne

• **deleteOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\> : `DeleteOne`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[deleteOne](Entity.EntityFromContext.md#deleteone)

#### Defined in

packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:72

___

### edgeType

• **edgeType**: [`EdgeType`](../modules/Entity.md#edgetype)<`GraphType`<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[edgeType](Entity.EntityFromContext.md#edgetype)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:78

___

### extend

• **extend**: [`ExtendEntity`](Entity.ExtendEntity.md)<[`Entity`](Entity.Entity.md)<`Input`, `Indexes`\>\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[extend](Entity.EntityFromContext.md#extend)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:112

___

### extendInput

• **extendInput**: `ExtendObjectDefinition`<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}  }, { `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[extendInput](Entity.EntityFromContext.md#extendinput)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:48

___

### extendUpdate

• **extendUpdate**: `ExtendObjectDefinition`<{ `object`: `OverrideField`<`DescribeObjectDefinition`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}\>, keyof `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}, { `optional`: ``true``  }\>  }, { `object`: `OverrideField`<`DescribeObjectDefinition`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}\>, keyof `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}, { `optional`: ``true``  }\>  }\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[extendUpdate](Entity.EntityFromContext.md#extendupdate)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:53

___

### findById

• **findById**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\> : `FindById`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[findById](Entity.EntityFromContext.md#findbyid)

#### Defined in

packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:74

___

### findMany

• **findMany**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never`) => `Promise`<{ `items`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}[]  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never`, [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\> : `FindMany`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[findMany](Entity.EntityFromContext.md#findmany)

#### Defined in

packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:66

___

### findOne

• **findOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\> : `FindOne`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[findOne](Entity.EntityFromContext.md#findone)

#### Defined in

packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:64

___

### hasAliases

• `Readonly` **hasAliases**: `boolean`

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[hasAliases](Entity.EntityFromContext.md#hasaliases)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:86

___

### hooks

• **hooks**: [`EntityHooks`](../modules/Entity.md#entityhooks)<{}, [`AnyEntity`](../modules/Entity.md#anyentity)\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[hooks](Entity.EntityFromContext.md#hooks)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:114

___

### indexGraphTypes

• **indexGraphTypes**: `Object`

#### Index signature

▪ [K: `string`]: `GraphType`<{ `object`: `ObjectDefinitionInput`  }\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[indexGraphTypes](Entity.EntityFromContext.md#indexgraphtypes)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:88

___

### indexRelations

• **indexRelations**: [`EntityIndexRelations`](Entity.EntityIndexRelations.md)

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[indexRelations](Entity.EntityFromContext.md#indexrelations)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:95

___

### indexes

• **indexes**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[indexes](Entity.EntityFromContext.md#indexes)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:42

___

### inputType

• **inputType**: `GraphType`<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, keyof `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}\> & `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[inputType](Entity.EntityFromContext.md#inputtype)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:32

___

### name

• **name**: `string`

#### Overrides

[EntityFromContext](Entity.EntityFromContext.md).[name](Entity.EntityFromContext.md#name)

#### Defined in

packages/entity/src/EntityInterfaces/Entity.ts:8

___

### originType

• **originType**: `GraphType`<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[originType](Entity.EntityFromContext.md#origintype)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:30

___

### paginate

• **paginate**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never`) => `Promise`<{ `edges`: { `cursor`: `string` ; `node`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}  }[] ; `pageInfo`: { `endCursor`: `undefined` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor`: `undefined` \| `string`  }  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| `IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| `QuerySort`  } : `never` : `never` : `never`, [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\> : `Paginate`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[paginate](Entity.EntityFromContext.md#paginate)

#### Defined in

packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:68

___

### paginationType

• **paginationType**: [`PaginationType`](../modules/Entity.md#paginationtype)<`GraphType`<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[paginationType](Entity.EntityFromContext.md#paginationtype)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:97

___

### parse

• **parse**: (...`args`: [input: any, options?: FieldParserConfig]) => `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}

#### Type declaration

▸ (`...args`): `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [input: any, options?: FieldParserConfig] |

##### Returns

`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[parse](Entity.EntityFromContext.md#parse)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:99

___

### setOption

• **setOption**: <Key, V\>(`optionName`: `Key`, `value`: `V`) => [`Entity`](Entity.Entity.md)<`Input`, `Indexes`\>

#### Type declaration

▸ <`Key`, `V`\>(`optionName`, `value`): [`Entity`](Entity.Entity.md)<`Input`, `Indexes`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof [`EntityOptions`](../modules/Entity.md#entityoptions)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\> |
| `V` | `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `optionName` | `Key` |
| `value` | `V` |

##### Returns

[`Entity`](Entity.Entity.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[setOption](Entity.EntityFromContext.md#setoption)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:103

___

### transporter

• **transporter**: `undefined` \| `Transporter`

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[transporter](Entity.EntityFromContext.md#transporter)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:108

___

### type

• **type**: `GraphType`<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[type](Entity.EntityFromContext.md#type)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:44

___

### updateMany

• **updateMany**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `error?`: ``null`` \| `string` ; `modifiedCount`: ``null`` \| `number` ; `upsertedId`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\> : `UpdateMany`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[updateMany](Entity.EntityFromContext.md#updatemany)

#### Defined in

packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:76

___

### updateOne

• **updateOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {} ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Entity._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| `FilterRecord`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| `LoaderContext` ; `filter`: `Compute`<`UnionToIntersection`<`IndexFilterRecord`<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: `PKSKValueType`  } : {} : {}\>, ``1``\> ; `update`: `UpdateExpression`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Entity.EntityTypesContext.md)<`Input`, `Indexes`\>\> : `UpdateOne`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[updateOne](Entity.EntityFromContext.md#updateone)

#### Defined in

packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:78

___

### usedOptions

• **usedOptions**: [`EntityOptions`](../modules/Entity.md#entityoptions)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [`ObjectDefinitionInput`] ? `Input` : {} : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[usedOptions](Entity.EntityFromContext.md#usedoptions)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:40

## Methods

### getDocumentId

▸ **getDocumentId**(`doc`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

`string`

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[getDocumentId](Entity.EntityFromContext.md#getdocumentid)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:80

___

### getIndexFields

▸ **getIndexFields**(`doc`): `CommonIndexFields`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

`CommonIndexFields`

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[getIndexFields](Entity.EntityFromContext.md#getindexfields)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:82

___

### parseDocumentIndexes

▸ **parseDocumentIndexes**(`doc`): `ParsedDocumentIndexes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Record`<`string`, `any`\> |

#### Returns

`ParsedDocumentIndexes`

#### Inherited from

[EntityFromContext](Entity.EntityFromContext.md).[parseDocumentIndexes](Entity.EntityFromContext.md#parsedocumentindexes)

#### Defined in

packages/entity/src/EntityInterfaces/EntityFromContext.ts:101
