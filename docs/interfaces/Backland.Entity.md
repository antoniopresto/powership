[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / Entity

# Interface: Entity<Input, Indexes\>

[Backland](../modules/Backland.md).Entity

## Type parameters

| Name |
| :------ |
| `Input` |
| `Indexes` |

## Hierarchy

- [`EntityFromContext`](Backland.EntityFromContext.md)<[`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\>

  ↳ **`Entity`**

## Table of contents

### Properties

- [\_\_context](Backland.Entity.md#__context)
- [\_\_isEntity](Backland.Entity.md#__isentity)
- [addHooks](Backland.Entity.md#addhooks)
- [addIndexRelation](Backland.Entity.md#addindexrelation)
- [addRelation](Backland.Entity.md#addrelation)
- [aliasPaths](Backland.Entity.md#aliaspaths)
- [conditionsDefinition](Backland.Entity.md#conditionsdefinition)
- [createOne](Backland.Entity.md#createone)
- [databaseType](Backland.Entity.md#databasetype)
- [deleteMany](Backland.Entity.md#deletemany)
- [deleteOne](Backland.Entity.md#deleteone)
- [edgeType](Backland.Entity.md#edgetype)
- [extend](Backland.Entity.md#extend)
- [extendInput](Backland.Entity.md#extendinput)
- [extendUpdate](Backland.Entity.md#extendupdate)
- [findById](Backland.Entity.md#findbyid)
- [findMany](Backland.Entity.md#findmany)
- [findOne](Backland.Entity.md#findone)
- [hasAliases](Backland.Entity.md#hasaliases)
- [hooks](Backland.Entity.md#hooks)
- [indexGraphTypes](Backland.Entity.md#indexgraphtypes)
- [indexRelations](Backland.Entity.md#indexrelations)
- [indexes](Backland.Entity.md#indexes)
- [inputType](Backland.Entity.md#inputtype)
- [name](Backland.Entity.md#name)
- [originType](Backland.Entity.md#origintype)
- [paginate](Backland.Entity.md#paginate)
- [paginationType](Backland.Entity.md#paginationtype)
- [parse](Backland.Entity.md#parse)
- [setOption](Backland.Entity.md#setoption)
- [transporter](Backland.Entity.md#transporter)
- [type](Backland.Entity.md#type)
- [updateMany](Backland.Entity.md#updatemany)
- [updateOne](Backland.Entity.md#updateone)
- [usedOptions](Backland.Entity.md#usedoptions)

### Methods

- [getDocumentId](Backland.Entity.md#getdocumentid)
- [getIndexFields](Backland.Entity.md#getindexfields)
- [parseDocumentIndexes](Backland.Entity.md#parsedocumentindexes)

## Properties

### \_\_context

• **\_\_context**: [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[__context](Backland.EntityFromContext.md#__context)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:66

___

### \_\_isEntity

• **\_\_isEntity**: ``true``

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[__isEntity](Backland.EntityFromContext.md#__isentity)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:65

___

### addHooks

• **addHooks**: (`options`: (`hooks`: [`EntityHooks`](../modules/Backland.md#entityhooks)<{}, [`AnyEntity`](../modules/Backland.md#anyentity)\>) => `any`) => [`Entity`](Backland.Entity.md)<`Input`, `Indexes`\>

#### Type declaration

▸ (`options`): [`Entity`](Backland.Entity.md)<`Input`, `Indexes`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | (`hooks`: [`EntityHooks`](../modules/Backland.md#entityhooks)<{}, [`AnyEntity`](../modules/Backland.md#anyentity)\>) => `any` |

##### Returns

[`Entity`](Backland.Entity.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[addHooks](Backland.EntityFromContext.md#addhooks)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:62

___

### addIndexRelation

• **addIndexRelation**: <E, Name\>(`name`: `Name`, `entity`: `E`) => [`EntityFromContext`](Backland.EntityFromContext.md)<[`EntityTypesContext`](Backland.EntityTypesContext.md)<`Omit`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>\>

#### Type declaration

▸ <`E`, `Name`\>(`name`, `entity`): [`EntityFromContext`](Backland.EntityFromContext.md)<[`EntityTypesContext`](Backland.EntityTypesContext.md)<`Omit`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>\>

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

[`EntityFromContext`](Backland.EntityFromContext.md)<[`EntityTypesContext`](Backland.EntityTypesContext.md)<`Omit`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[addIndexRelation](Backland.EntityFromContext.md#addindexrelation)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:36

___

### addRelation

• **addRelation**: [`EntityAddRelation`](Backland.EntityAddRelation.md)<[`Entity`](Backland.Entity.md)<`Input`, `Indexes`\>, [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[addRelation](Backland.EntityFromContext.md#addrelation)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:49

___

### aliasPaths

• **aliasPaths**: `string`[]

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[aliasPaths](Backland.EntityFromContext.md#aliaspaths)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:43

___

### conditionsDefinition

• **conditionsDefinition**: `EntityFilterConditionsDefinition`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[conditionsDefinition](Backland.EntityFromContext.md#conditionsdefinition)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:44

___

### createOne

• **createOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Backland.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `item`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Backland.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Backland.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `item`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Backland.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {} ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Backland.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `item`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Backland.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`CreateOne`](Backland.CreateOne.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Backland.md#entitydocumentinput)<`D`\> : {}, `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[createOne](Backland.EntityFromContext.md#createone)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:29

___

### databaseType

• **databaseType**: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[databaseType](Backland.EntityFromContext.md#databasetype)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:45

___

### deleteMany

• **deleteMany**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`DeleteMany`](Backland.DeleteMany.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[deleteMany](Backland.EntityFromContext.md#deletemany)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:33

___

### deleteOne

• **deleteOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`DeleteOne`](Backland.DeleteOne.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[deleteOne](Backland.EntityFromContext.md#deleteone)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:34

___

### edgeType

• **edgeType**: [`EdgeType`](../modules/Backland.md#edgetype)<[`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[edgeType](Backland.EntityFromContext.md#edgetype)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:46

___

### extend

• **extend**: [`ExtendEntity`](Backland.ExtendEntity.md)<[`Entity`](Backland.Entity.md)<`Input`, `Indexes`\>\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[extend](Backland.EntityFromContext.md#extend)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:63

___

### extendInput

• **extendInput**: [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}  }, { `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[extendInput](Backland.EntityFromContext.md#extendinput)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:26

___

### extendUpdate

• **extendUpdate**: [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`DescribeObjectDefinition`](../modules/Backland.md#describeobjectdefinition)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}\>, keyof `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}, { `optional`: ``true``  }\>  }, { `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`DescribeObjectDefinition`](../modules/Backland.md#describeobjectdefinition)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}\>, keyof `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}, { `optional`: ``true``  }\>  }\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[extendUpdate](Backland.EntityFromContext.md#extendupdate)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:31

___

### findById

• **findById**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`FindById`](Backland.FindById.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[findById](Backland.EntityFromContext.md#findbyid)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:35

___

### findMany

• **findMany**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `items`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}[]  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never`, [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`FindMany`](Backland.FindMany.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[findMany](Backland.EntityFromContext.md#findmany)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:31

___

### findOne

• **findOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`FindOne`](Backland.FindOne.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[findOne](Backland.EntityFromContext.md#findone)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:30

___

### hasAliases

• `Readonly` **hasAliases**: `boolean`

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[hasAliases](Backland.EntityFromContext.md#hasaliases)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:50

___

### hooks

• **hooks**: [`EntityHooks`](../modules/Backland.md#entityhooks)<{}, [`AnyEntity`](../modules/Backland.md#anyentity)\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[hooks](Backland.EntityFromContext.md#hooks)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:64

___

### indexGraphTypes

• **indexGraphTypes**: `Object`

#### Index signature

▪ [K: `string`]: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: [`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)  }\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[indexGraphTypes](Backland.EntityFromContext.md#indexgraphtypes)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:51

___

### indexRelations

• **indexRelations**: [`EntityIndexRelations`](Backland.EntityIndexRelations.md)

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[indexRelations](Backland.EntityFromContext.md#indexrelations)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:56

___

### indexes

• **indexes**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[indexes](Backland.EntityFromContext.md#indexes)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:22

___

### inputType

• **inputType**: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, keyof `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}\> & `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[inputType](Backland.EntityFromContext.md#inputtype)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:18

___

### name

• **name**: `string`

#### Overrides

[EntityFromContext](Backland.EntityFromContext.md).[name](Backland.EntityFromContext.md#name)

#### Defined in

packages/entity/lib/EntityInterfaces/Entity.d.ts:5

___

### originType

• **originType**: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[originType](Backland.EntityFromContext.md#origintype)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:15

___

### paginate

• **paginate**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `edges`: { `cursor`: `string` ; `node`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}  }[] ; `pageInfo`: { `endCursor`: `undefined` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor`: `undefined` \| `string`  }  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Backland.md#querysort)  } : `never` : `never` : `never`, [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`Paginate`](Backland.Paginate.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[paginate](Backland.EntityFromContext.md#paginate)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:32

___

### paginationType

• **paginationType**: [`PaginationType`](../modules/Backland.md#paginationtype)<[`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[paginationType](Backland.EntityFromContext.md#paginationtype)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:57

___

### parse

• **parse**: (...`args`: [input: any, options?: FieldParserConfig]) => `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}

#### Type declaration

▸ (`...args`): `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [input: any, options?: FieldParserConfig] |

##### Returns

`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[parse](Backland.EntityFromContext.md#parse)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:58

___

### setOption

• **setOption**: <Key, V\>(`optionName`: `Key`, `value`: `V`) => [`Entity`](Backland.Entity.md)<`Input`, `Indexes`\>

#### Type declaration

▸ <`Key`, `V`\>(`optionName`, `value`): [`Entity`](Backland.Entity.md)<`Input`, `Indexes`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof [`EntityOptions`](../modules/Backland.md#entityoptions)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\> |
| `V` | `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `optionName` | `Key` |
| `value` | `V` |

##### Returns

[`Entity`](Backland.Entity.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[setOption](Backland.EntityFromContext.md#setoption)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:60

___

### transporter

• **transporter**: `undefined` \| [`Transporter`](Backland.Transporter.md)

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[transporter](Backland.EntityFromContext.md#transporter)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:61

___

### type

• **type**: [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[type](Backland.EntityFromContext.md#type)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:23

___

### updateMany

• **updateMany**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `error?`: ``null`` \| `string` ; `modifiedCount`: ``null`` \| `number` ; `upsertedId`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`UpdateMany`](Backland.UpdateMany.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[updateMany](Backland.EntityFromContext.md#updatemany)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:36

___

### updateOne

• **updateOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {} ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Backland._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Backland.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Backland.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Backland.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Backland.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Backland.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Backland.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`UpdateOne`](Backland.UpdateOne.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[updateOne](Backland.EntityFromContext.md#updateone)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:37

___

### usedOptions

• **usedOptions**: [`EntityOptions`](../modules/Backland.md#entityoptions)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `Input` : {} : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[usedOptions](Backland.EntityFromContext.md#usedoptions)

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

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[getDocumentId](Backland.EntityFromContext.md#getdocumentid)

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

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[getIndexFields](Backland.EntityFromContext.md#getindexfields)

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

#### Inherited from

[EntityFromContext](Backland.EntityFromContext.md).[parseDocumentIndexes](Backland.EntityFromContext.md#parsedocumentindexes)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:59
