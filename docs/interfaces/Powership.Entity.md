[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / Entity

# Interface: Entity<Input, Indexes\>

[Powership](../modules/Powership.md).Entity

## Type parameters

| Name |
| :------ |
| `Input` |
| `Indexes` |

## Hierarchy

- [`EntityFromContext`](Powership.EntityFromContext.md)<[`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\>

  ↳ **`Entity`**

## Table of contents

### Properties

- [\_\_context](Powership.Entity.md#__context)
- [\_\_isEntity](Powership.Entity.md#__isentity)
- [addHooks](Powership.Entity.md#addhooks)
- [addIndexRelation](Powership.Entity.md#addindexrelation)
- [addRelation](Powership.Entity.md#addrelation)
- [aliasPaths](Powership.Entity.md#aliaspaths)
- [conditionsDefinition](Powership.Entity.md#conditionsdefinition)
- [createOne](Powership.Entity.md#createone)
- [databaseType](Powership.Entity.md#databasetype)
- [deleteMany](Powership.Entity.md#deletemany)
- [deleteOne](Powership.Entity.md#deleteone)
- [edgeType](Powership.Entity.md#edgetype)
- [extend](Powership.Entity.md#extend)
- [extendInput](Powership.Entity.md#extendinput)
- [extendUpdate](Powership.Entity.md#extendupdate)
- [findById](Powership.Entity.md#findbyid)
- [findMany](Powership.Entity.md#findmany)
- [findOne](Powership.Entity.md#findone)
- [hasAliases](Powership.Entity.md#hasaliases)
- [hooks](Powership.Entity.md#hooks)
- [indexGraphTypes](Powership.Entity.md#indexgraphtypes)
- [indexRelations](Powership.Entity.md#indexrelations)
- [indexes](Powership.Entity.md#indexes)
- [inputType](Powership.Entity.md#inputtype)
- [name](Powership.Entity.md#name)
- [originType](Powership.Entity.md#origintype)
- [paginate](Powership.Entity.md#paginate)
- [paginationType](Powership.Entity.md#paginationtype)
- [parse](Powership.Entity.md#parse)
- [setOption](Powership.Entity.md#setoption)
- [transporter](Powership.Entity.md#transporter)
- [type](Powership.Entity.md#type)
- [updateMany](Powership.Entity.md#updatemany)
- [updateOne](Powership.Entity.md#updateone)
- [usedOptions](Powership.Entity.md#usedoptions)

### Methods

- [getDocumentId](Powership.Entity.md#getdocumentid)
- [getIndexFields](Powership.Entity.md#getindexfields)
- [parseDocumentIndexes](Powership.Entity.md#parsedocumentindexes)

## Properties

### \_\_context

• **\_\_context**: [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[__context](Powership.EntityFromContext.md#__context)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:66

___

### \_\_isEntity

• **\_\_isEntity**: ``true``

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[__isEntity](Powership.EntityFromContext.md#__isentity)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:65

___

### addHooks

• **addHooks**: (`options`: (`hooks`: [`EntityHooks`](../modules/Powership.md#entityhooks)<{}, [`AnyEntity`](../modules/Powership.md#anyentity)\>) => `any`) => [`Entity`](Powership.Entity.md)<`Input`, `Indexes`\>

#### Type declaration

▸ (`options`): [`Entity`](Powership.Entity.md)<`Input`, `Indexes`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | (`hooks`: [`EntityHooks`](../modules/Powership.md#entityhooks)<{}, [`AnyEntity`](../modules/Powership.md#anyentity)\>) => `any` |

##### Returns

[`Entity`](Powership.Entity.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[addHooks](Powership.EntityFromContext.md#addhooks)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:62

___

### addIndexRelation

• **addIndexRelation**: <E, Name\>(`name`: `Name`, `entity`: `E`) => [`EntityFromContext`](Powership.EntityFromContext.md)<[`EntityTypesContext`](Powership.EntityTypesContext.md)<`Omit`<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>\>

#### Type declaration

▸ <`E`, `Name`\>(`name`, `entity`): [`EntityFromContext`](Powership.EntityFromContext.md)<[`EntityTypesContext`](Powership.EntityTypesContext.md)<`Omit`<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>\>

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

[`EntityFromContext`](Powership.EntityFromContext.md)<[`EntityTypesContext`](Powership.EntityTypesContext.md)<`Omit`<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}, `Name`\> & { [L in string]: Object }, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[addIndexRelation](Powership.EntityFromContext.md#addindexrelation)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:36

___

### addRelation

• **addRelation**: [`EntityAddRelation`](Powership.EntityAddRelation.md)<[`Entity`](Powership.Entity.md)<`Input`, `Indexes`\>, [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[addRelation](Powership.EntityFromContext.md#addrelation)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:49

___

### aliasPaths

• **aliasPaths**: `string`[]

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[aliasPaths](Powership.EntityFromContext.md#aliaspaths)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:43

___

### conditionsDefinition

• **conditionsDefinition**: `EntityFilterConditionsDefinition`<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[conditionsDefinition](Powership.EntityFromContext.md#conditionsdefinition)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:44

___

### createOne

• **createOne**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Powership.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `item`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Powership.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Powership.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `item`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Powership.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {} ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Powership.md#entitydocumentinput)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `item`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Powership.md#entitydocumentinput)<`D`\> : {} ; `replace`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`CreateOne`](Powership.CreateOne.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Powership.md#entitydocumentinput)<`D`\> : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[createOne](Powership.EntityFromContext.md#createone)

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:29

___

### databaseType

• **databaseType**: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[databaseType](Powership.EntityFromContext.md#databasetype)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:45

___

### deleteMany

• **deleteMany**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `deletedCount`: `number` ; `error?`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`DeleteMany`](Powership.DeleteMany.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[deleteMany](Powership.EntityFromContext.md#deletemany)

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:33

___

### deleteOne

• **deleteOne**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\>  } : `never` : `never` : `never`, [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`DeleteOne`](Powership.DeleteOne.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[deleteOne](Powership.EntityFromContext.md#deleteone)

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:34

___

### edgeType

• **edgeType**: [`EdgeType`](../modules/Powership.md#edgetype)<[`GraphType`](../classes/Powership.GraphType.md)<{ `object`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[edgeType](Powership.EntityFromContext.md#edgetype)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:46

___

### extend

• **extend**: [`ExtendEntity`](Powership.ExtendEntity.md)<[`Entity`](Powership.Entity.md)<`Input`, `Indexes`\>\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[extend](Powership.EntityFromContext.md#extend)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:63

___

### extendInput

• **extendInput**: [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}  }, { `object`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[extendInput](Powership.EntityFromContext.md#extendinput)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:26

___

### extendUpdate

• **extendUpdate**: [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`DescribeObjectDefinition`](../modules/Powership.md#describeobjectdefinition)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}\>, keyof [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}, { `optional`: ``true``  }\>  }, { `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`DescribeObjectDefinition`](../modules/Powership.md#describeobjectdefinition)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}\>, keyof [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}, { `optional`: ``true``  }\>  }\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[extendUpdate](Powership.EntityFromContext.md#extendupdate)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:31

___

### findById

• **findById**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `id`: `string` ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`FindById`](Powership.FindById.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[findById](Powership.EntityFromContext.md#findbyid)

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:35

___

### findMany

• **findMany**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `items`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}[]  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never`, [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`FindMany`](Powership.FindMany.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[findMany](Powership.EntityFromContext.md#findmany)

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:31

___

### findOne

• **findOne**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`) => `Promise`<{ `item`: ``null`` \| [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `projection`: `undefined` \| `string`[]  } : `never` : `never` : `never`, [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`FindOne`](Powership.FindOne.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[findOne](Powership.EntityFromContext.md#findone)

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:30

___

### hasAliases

• `Readonly` **hasAliases**: `boolean`

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[hasAliases](Powership.EntityFromContext.md#hasaliases)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:50

___

### hooks

• **hooks**: [`EntityHooks`](../modules/Powership.md#entityhooks)<{}, [`AnyEntity`](../modules/Powership.md#anyentity)\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[hooks](Powership.EntityFromContext.md#hooks)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:64

___

### indexGraphTypes

• **indexGraphTypes**: `Object`

#### Index signature

▪ [K: `string`]: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)  }\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[indexGraphTypes](Powership.EntityFromContext.md#indexgraphtypes)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:51

___

### indexRelations

• **indexRelations**: [`EntityIndexRelations`](Powership.EntityIndexRelations.md)

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[indexRelations](Powership.EntityFromContext.md#indexrelations)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:56

___

### indexes

• **indexes**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[indexes](Powership.EntityFromContext.md#indexes)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:22

___

### inputType

• **inputType**: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: `Omit`<`EntityDocumentBaseDef`<``true``\>, keyof [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}\> & [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[inputType](Powership.EntityFromContext.md#inputtype)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:18

___

### name

• **name**: `string`

#### Overrides

[EntityFromContext](Powership.EntityFromContext.md).[name](Powership.EntityFromContext.md#name)

#### Defined in

packages/entity/out/EntityInterfaces/Entity.d.ts:5

___

### originType

• **originType**: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}  }\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[originType](Powership.EntityFromContext.md#origintype)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:15

___

### paginate

• **paginate**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never`) => `Promise`<{ `edges`: { `cursor`: `string` ; `node`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}  }[] ; `pageInfo`: { `endCursor`: `undefined` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor`: `undefined` \| `string`  }  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `after`: `undefined` \| `string` \| [`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `R` ? { [K in string \| number \| symbol]: R[K] } : {} ; `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `consistent`: `undefined` \| `boolean` ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `first`: `undefined` \| `number` ; `projection`: `undefined` \| `string`[] ; `sort`: `undefined` \| [`QuerySort`](../modules/Powership.md#querysort)  } : `never` : `never` : `never`, [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`Paginate`](Powership.Paginate.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[paginate](Powership.EntityFromContext.md#paginate)

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:32

___

### paginationType

• **paginationType**: [`PaginationType`](../modules/Powership.md#paginationtype)<[`GraphType`](../classes/Powership.GraphType.md)<{ `object`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[paginationType](Powership.EntityFromContext.md#paginationtype)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:57

___

### parse

• **parse**: (...`args`: [input: any, options?: FieldParserConfig]) => [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}

#### Type declaration

▸ (`...args`): [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [input: any, options?: FieldParserConfig] |

##### Returns

[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[parse](Powership.EntityFromContext.md#parse)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:58

___

### setOption

• **setOption**: <Key, V\>(`optionName`: `Key`, `value`: `V`) => [`Entity`](Powership.Entity.md)<`Input`, `Indexes`\>

#### Type declaration

▸ <`Key`, `V`\>(`optionName`, `value`): [`Entity`](Powership.Entity.md)<`Input`, `Indexes`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof [`EntityOptions`](../modules/Powership.md#entityoptions)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\> |
| `V` | `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `optionName` | `Key` |
| `value` | `V` |

##### Returns

[`Entity`](Powership.Entity.md)<`Input`, `Indexes`\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[setOption](Powership.EntityFromContext.md#setoption)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:60

___

### transporter

• **transporter**: `undefined` \| [`Transporter`](Powership.Transporter.md)<`any`\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[transporter](Powership.EntityFromContext.md#transporter)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:61

___

### type

• **type**: [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}  }\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[type](Powership.EntityFromContext.md#type)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:23

___

### updateMany

• **updateMany**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `error?`: ``null`` \| `string` ; `modifiedCount`: ``null`` \| `number` ; `upsertedId`: ``null`` \| `string`  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`UpdateMany`](Powership.UpdateMany.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[updateMany](Powership.EntityFromContext.md#updatemany)

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:36

___

### updateOne

• **updateOne**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never` extends `Record`<`string`, `any`\> ? (`options`: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`) => `Promise`<{ `created`: `boolean` ; `error?`: ``null`` \| `string` ; `item`: ``null`` \| [`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {} ; `updated`: `boolean`  }\> & [`_EntityLoaderUtils`](Powership._EntityLoaderUtils.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : [][`number`] extends `I` ? `I` extends `unknown` ? `I` extends { `PK`: readonly `PK`[] ; `SK?`: readonly `SK`[]  } ? { `condition`: `undefined` \| [`FilterRecord`](../modules/Powership.md#filterrecord)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `context`: `undefined` \| [`LoaderContext`](Powership.LoaderContext.md) ; `filter`: [`Compute`](../modules/Powership.TU.md#compute)<[`UnionToIntersection`](../modules/Powership.TU.md#uniontointersection)<[`IndexFilterRecord`](../modules/Powership.md#indexfilterrecord)<`IndexField`<`PK`, `never`\>, `IndexField`<`SK`, `undefined`\>\> extends `F` ? `F` extends `unknown` ? { [K in string \| number \| symbol]?: F[K] } & { `id?`: [`PKSKValueType`](../modules/Powership.md#pkskvaluetype)  } : {} : {}\>, ``1``\> ; `update`: [`UpdateExpression`](../modules/Powership.md#updateexpression)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}\> ; `upsert`: `undefined` \| `boolean`  } : `never` : `never` : `never`, [`EntityTypesContext`](Powership.EntityTypesContext.md)<`Input`, `Indexes`\>\> : [`UpdateOne`](Powership.UpdateOne.md)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[updateOne](Powership.EntityFromContext.md#updateone)

#### Defined in

packages/entity/out/EntityInterfaces/EntityLoaderMethods.d.ts:37

___

### usedOptions

• **usedOptions**: [`EntityOptions`](../modules/Powership.md#entityoptions)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`Input`\> extends ``1`` ? [`Input`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `Input` : {} : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[usedOptions](Powership.EntityFromContext.md#usedoptions)

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

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[getDocumentId](Powership.EntityFromContext.md#getdocumentid)

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

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[getIndexFields](Powership.EntityFromContext.md#getindexfields)

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

#### Inherited from

[EntityFromContext](Powership.EntityFromContext.md).[parseDocumentIndexes](Powership.EntityFromContext.md#parsedocumentindexes)

#### Defined in

packages/entity/out/EntityInterfaces/EntityFromContext.d.ts:59
