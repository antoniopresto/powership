[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / Entity

# Interface: Entity<Input, Indexes\>

[Solarwind](../modules/Solarwind.md).Entity

## Type parameters

| Name |
| :------ |
| `Input` |
| `Indexes` |

## Hierarchy

- [`EntityFromContext`](Solarwind.EntityFromContext.md)<[`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\>

  ↳ **`Entity`**

## Table of contents

### Properties

- [\_\_context](Solarwind.Entity.md#__context)
- [\_\_isEntity](Solarwind.Entity.md#__isentity)
- [addHooks](Solarwind.Entity.md#addhooks)
- [addIndexRelation](Solarwind.Entity.md#addindexrelation)
- [addRelation](Solarwind.Entity.md#addrelation)
- [aliasPaths](Solarwind.Entity.md#aliaspaths)
- [conditionsDefinition](Solarwind.Entity.md#conditionsdefinition)
- [createOne](Solarwind.Entity.md#createone)
- [databaseType](Solarwind.Entity.md#databasetype)
- [deleteMany](Solarwind.Entity.md#deletemany)
- [deleteOne](Solarwind.Entity.md#deleteone)
- [edgeType](Solarwind.Entity.md#edgetype)
- [extend](Solarwind.Entity.md#extend)
- [extendInput](Solarwind.Entity.md#extendinput)
- [extendUpdate](Solarwind.Entity.md#extendupdate)
- [findById](Solarwind.Entity.md#findbyid)
- [findMany](Solarwind.Entity.md#findmany)
- [findOne](Solarwind.Entity.md#findone)
- [hasAliases](Solarwind.Entity.md#hasaliases)
- [hooks](Solarwind.Entity.md#hooks)
- [indexGraphTypes](Solarwind.Entity.md#indexgraphtypes)
- [indexRelations](Solarwind.Entity.md#indexrelations)
- [indexes](Solarwind.Entity.md#indexes)
- [inputType](Solarwind.Entity.md#inputtype)
- [name](Solarwind.Entity.md#name)
- [originType](Solarwind.Entity.md#origintype)
- [paginate](Solarwind.Entity.md#paginate)
- [paginationType](Solarwind.Entity.md#paginationtype)
- [parse](Solarwind.Entity.md#parse)
- [setOption](Solarwind.Entity.md#setoption)
- [transporter](Solarwind.Entity.md#transporter)
- [type](Solarwind.Entity.md#type)
- [updateMany](Solarwind.Entity.md#updatemany)
- [updateOne](Solarwind.Entity.md#updateone)
- [usedOptions](Solarwind.Entity.md#usedoptions)

### Methods

- [getDocumentId](Solarwind.Entity.md#getdocumentid)
- [getIndexFields](Solarwind.Entity.md#getindexfields)
- [parseDocumentIndexes](Solarwind.Entity.md#parsedocumentindexes)

## Properties

### \_\_context

• **\_\_context**: [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[__context](Solarwind.EntityFromContext.md#__context)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:66

___

### \_\_isEntity

• **\_\_isEntity**: ``true``

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[__isEntity](Solarwind.EntityFromContext.md#__isentity)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:65

___

### addHooks

• **addHooks**: (`options`: (`hooks`: [`EntityHooks`](../modules/Solarwind.md#entityhooks)<{}, [`AnyEntity`](../modules/Solarwind.md#anyentity)\>) => `any`) => [`Entity`](Solarwind.Entity.md)<`Input`, `Indexes`\>

#### Type declaration

▸ (`options`): [`Entity`](Solarwind.Entity.md)<`Input`, `Indexes`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | (`hooks`: [`EntityHooks`](../modules/Solarwind.md#entityhooks)<{}, [`AnyEntity`](../modules/Solarwind.md#anyentity)\>) => `any` |

##### Returns

[`Entity`](Solarwind.Entity.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[addHooks](Solarwind.EntityFromContext.md#addhooks)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:62

___

### addIndexRelation

• **addIndexRelation**: <E, Name\>(`name`: `Name`, `entity`: `E`) => [`EntityFromContext`](Solarwind.EntityFromContext.md)<[`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Omit`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>\>

#### Type declaration

▸ <`E`, `Name`\>(`name`, `entity`): [`EntityFromContext`](Solarwind.EntityFromContext.md)<[`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Omit`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>\>

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

[`EntityFromContext`](Solarwind.EntityFromContext.md)<[`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Omit`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[addIndexRelation](Solarwind.EntityFromContext.md#addindexrelation)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:36

___

### addRelation

• **addRelation**: [`EntityAddRelation`](Solarwind.EntityAddRelation.md)<[`Entity`](Solarwind.Entity.md)<`Input`, `Indexes`\>, [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[addRelation](Solarwind.EntityFromContext.md#addrelation)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:49

___

### aliasPaths

• **aliasPaths**: `string`[]

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[aliasPaths](Solarwind.EntityFromContext.md#aliaspaths)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:43

___

### conditionsDefinition

• **conditionsDefinition**: `EntityFilterConditionsDefinition`<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[conditionsDefinition](Solarwind.EntityFromContext.md#conditionsdefinition)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:44

___

### createOne

• **createOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Solarwind.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `item`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Solarwind.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Solarwind.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `item`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Solarwind.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {} ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Solarwind.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `item`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Solarwind.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`CreateOne`](Solarwind.CreateOne.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Solarwind.md#entitydocumentinput)<`D`\> : {}, `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[createOne](Solarwind.EntityFromContext.md#createone)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:29

___

### databaseType

• **databaseType**: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[databaseType](Solarwind.EntityFromContext.md#databasetype)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:45

___

### deleteMany

• **deleteMany**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`DeleteMany`](Solarwind.DeleteMany.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[deleteMany](Solarwind.EntityFromContext.md#deletemany)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:33

___

### deleteOne

• **deleteOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`DeleteOne`](Solarwind.DeleteOne.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[deleteOne](Solarwind.EntityFromContext.md#deleteone)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:34

___

### edgeType

• **edgeType**: [`EdgeType`](../modules/Solarwind.md#edgetype)<[`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[edgeType](Solarwind.EntityFromContext.md#edgetype)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:46

___

### extend

• **extend**: [`ExtendEntity`](Solarwind.ExtendEntity.md)<[`Entity`](Solarwind.Entity.md)<`Input`, `Indexes`\>\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[extend](Solarwind.EntityFromContext.md#extend)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:63

___

### extendInput

• **extendInput**: [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}  }, { `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[extendInput](Solarwind.EntityFromContext.md#extendinput)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:26

___

### extendUpdate

• **extendUpdate**: [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`DescribeObjectDefinition`](../modules/Solarwind.md#describeobjectdefinition)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}\>, keyof `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}, { `optional`: ``true``  }\>  }, { `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`DescribeObjectDefinition`](../modules/Solarwind.md#describeobjectdefinition)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}\>, keyof `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}, { `optional`: ``true``  }\>  }\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[extendUpdate](Solarwind.EntityFromContext.md#extendupdate)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:31

___

### findById

• **findById**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`FindById`](Solarwind.FindById.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[findById](Solarwind.EntityFromContext.md#findbyid)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:35

___

### findMany

• **findMany**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `items`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}[]  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never`, [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`FindMany`](Solarwind.FindMany.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[findMany](Solarwind.EntityFromContext.md#findmany)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:31

___

### findOne

• **findOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`FindOne`](Solarwind.FindOne.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[findOne](Solarwind.EntityFromContext.md#findone)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:30

___

### hasAliases

• `Readonly` **hasAliases**: `boolean`

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[hasAliases](Solarwind.EntityFromContext.md#hasaliases)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:50

___

### hooks

• **hooks**: [`EntityHooks`](../modules/Solarwind.md#entityhooks)<{}, [`AnyEntity`](../modules/Solarwind.md#anyentity)\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[hooks](Solarwind.EntityFromContext.md#hooks)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:64

___

### indexGraphTypes

• **indexGraphTypes**: `Object`

#### Index signature

▪ [K: `string`]: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: [`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)  }\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[indexGraphTypes](Solarwind.EntityFromContext.md#indexgraphtypes)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:51

___

### indexRelations

• **indexRelations**: [`EntityIndexRelations`](Solarwind.EntityIndexRelations.md)

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[indexRelations](Solarwind.EntityFromContext.md#indexrelations)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:56

___

### indexes

• **indexes**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[indexes](Solarwind.EntityFromContext.md#indexes)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:22

___

### inputType

• **inputType**: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, keyof `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}\> & `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[inputType](Solarwind.EntityFromContext.md#inputtype)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:18

___

### name

• **name**: `string`

#### Overrides

[EntityFromContext](Solarwind.EntityFromContext.md).[name](Solarwind.EntityFromContext.md#name)

#### Defined in

packages/entity/lib/EntityInterfaces/Entity.d.ts:5

___

### originType

• **originType**: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[originType](Solarwind.EntityFromContext.md#origintype)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:15

___

### paginate

• **paginate**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `edges`: { `cursor`: `string` ; `node`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}  }[] ; `pageInfo`: { `endCursor`: `undefined` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor`: `undefined` \| `string`  }  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Solarwind.md#querysort)  } : `never` : `never` : `never`, [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`Paginate`](Solarwind.Paginate.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[paginate](Solarwind.EntityFromContext.md#paginate)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:32

___

### paginationType

• **paginationType**: [`PaginationType`](../modules/Solarwind.md#paginationtype)<[`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[paginationType](Solarwind.EntityFromContext.md#paginationtype)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:57

___

### parse

• **parse**: (...`args`: [input: any, options?: FieldParserConfig]) => `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}

#### Type declaration

▸ (`...args`): `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [input: any, options?: FieldParserConfig] |

##### Returns

`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[parse](Solarwind.EntityFromContext.md#parse)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:58

___

### setOption

• **setOption**: <Key, V\>(`optionName`: `Key`, `value`: `V`) => [`Entity`](Solarwind.Entity.md)<`Input`, `Indexes`\>

#### Type declaration

▸ <`Key`, `V`\>(`optionName`, `value`): [`Entity`](Solarwind.Entity.md)<`Input`, `Indexes`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof [`EntityOptions`](../modules/Solarwind.md#entityoptions)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\> |
| `V` | `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `optionName` | `Key` |
| `value` | `V` |

##### Returns

[`Entity`](Solarwind.Entity.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[setOption](Solarwind.EntityFromContext.md#setoption)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:60

___

### transporter

• **transporter**: `undefined` \| [`Transporter`](Solarwind.Transporter.md)

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[transporter](Solarwind.EntityFromContext.md#transporter)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:61

___

### type

• **type**: [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[type](Solarwind.EntityFromContext.md#type)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:23

___

### updateMany

• **updateMany**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `error?`: ``null`` \| `string` ; `modifiedCount`: ``null`` \| `number` ; `upsertedId`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`UpdateMany`](Solarwind.UpdateMany.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[updateMany](Solarwind.EntityFromContext.md#updatemany)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:36

___

### updateOne

• **updateOne**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| `IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {} ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Solarwind._EntityLoaderUtils.md)<`IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Solarwind.md#filterrecord)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](../modules/Solarwind.md#loadercontext) ; `filter`: `Compute`<`UnionToIntersection`<[`IndexFilterRecord`](../modules/Solarwind.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Solarwind.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Solarwind.md#updateexpression)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Solarwind.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`UpdateOne`](Solarwind.UpdateOne.md)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[updateOne](Solarwind.EntityFromContext.md#updateone)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityLoaderMethods.d.ts:37

___

### usedOptions

• **usedOptions**: [`EntityOptions`](../modules/Solarwind.md#entityoptions)<`IsKnown`<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `Input` : {} : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[usedOptions](Solarwind.EntityFromContext.md#usedoptions)

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

[EntityFromContext](Solarwind.EntityFromContext.md).[getDocumentId](Solarwind.EntityFromContext.md#getdocumentid)

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

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[getIndexFields](Solarwind.EntityFromContext.md#getindexfields)

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

#### Inherited from

[EntityFromContext](Solarwind.EntityFromContext.md).[parseDocumentIndexes](Solarwind.EntityFromContext.md#parsedocumentindexes)

#### Defined in

packages/entity/lib/EntityInterfaces/EntityFromContext.d.ts:59
