[Backland](../README.md) / [Modules](../modules.md) / Entity

# Module: Entity

## Table of contents

### Interfaces

- [Entity](../interfaces/Entity.Entity.md)
- [EntityAddRelation](../interfaces/Entity.EntityAddRelation.md)
- [EntityFromContext](../interfaces/Entity.EntityFromContext.md)
- [EntityIndexRelations](../interfaces/Entity.EntityIndexRelations.md)
- [EntityPlugin](../interfaces/Entity.EntityPlugin.md)
- [EntityTypesContext](../interfaces/Entity.EntityTypesContext.md)
- [ExtendEntity](../interfaces/Entity.ExtendEntity.md)
- [\_EntityLoaderUtils](../interfaces/Entity._EntityLoaderUtils.md)

### Type Aliases

- [AnyEntity](Entity.md#anyentity)
- [AnyEntityTypesContext](Entity.md#anyentitytypescontext)
- [EdgeType](Entity.md#edgetype)
- [EntityDocument](Entity.md#entitydocument)
- [EntityDocumentBase](Entity.md#entitydocumentbase)
- [EntityDocumentInput](Entity.md#entitydocumentinput)
- [EntityFieldResolver](Entity.md#entityfieldresolver)
- [EntityHooks](Entity.md#entityhooks)
- [EntityHooksCreateDefinitionKind](Entity.md#entityhookscreatedefinitionkind)
- [EntityLoaderConfig](Entity.md#entityloaderconfig)
- [EntityLoaderMethods](Entity.md#entityloadermethods)
- [EntityOptions](Entity.md#entityoptions)
- [EntityParserHookContext](Entity.md#entityparserhookcontext)
- [PageInfo](Entity.md#pageinfo)
- [PaginationType](Entity.md#paginationtype)
- [\_AllOptional](Entity.md#_alloptional)
- [\_AnyEntity](Entity.md#_anyentity)
- [\_EntityLoaderMethods](Entity.md#_entityloadermethods)
- [\_EntityLoaders](Entity.md#_entityloaders)
- [\_ExcludeExtend](Entity.md#_excludeextend)
- [\_ExtendMethodKeys](Entity.md#_extendmethodkeys)
- [\_GetLoaderFilterDef](Entity.md#_getloaderfilterdef)

### Variables

- [EntityHooksCreateDefinitionKind](Entity.md#entityhookscreatedefinitionkind-1)
- [EntityStore](Entity.md#entitystore)
- [PageInfoType](Entity.md#pageinfotype)

### Functions

- [createEntity](Entity.md#createentity)
- [createEntityPlugin](Entity.md#createentityplugin)
- [isEntity](Entity.md#isentity)
- [registerEntity](Entity.md#registerentity)

## Type Aliases

### AnyEntity

Ƭ **AnyEntity**: { [K in keyof \_AnyEntity]: any }

#### Defined in

[packages/entity/src/EntityInterfaces/Entity.ts:15](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Entity.ts#L15)

___

### AnyEntityTypesContext

Ƭ **AnyEntityTypesContext**: { [K in keyof EntityTypesContext<any, any\>]: any } & {}

#### Defined in

[packages/entity/src/EntityInterfaces/Context.ts:63](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Context.ts#L63)

___

### EdgeType

Ƭ **EdgeType**<`T`\>: `GraphType`<{ `object`: { `cursor`: ``"string"`` ; `node`: `T` extends `GraphTypeLike` ? `T` : ``"null"``  }  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/entity/src/paginationUtils.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/paginationUtils.ts#L14)

___

### EntityDocument

Ƭ **EntityDocument**<`Shape`\>: `IsKnown`<`Shape`\> extends ``1`` ? `Merge`<[`EntityDocumentBase`](Entity.md#entitydocumentbase), `Shape`\> : [`EntityDocumentBase`](Entity.md#entitydocumentbase) & { `[K: string]`: `unknown`;  }

#### Type parameters

| Name |
| :------ |
| `Shape` |

#### Defined in

[packages/entity/src/EntityInterfaces/Document.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Document.ts#L14)

___

### EntityDocumentBase

Ƭ **EntityDocumentBase**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_c` | `string` |
| `_v` | `string` |
| `createdAt` | `Date` |
| `createdBy` | `string` \| `undefined` |
| `id` | `string` |
| `ulid` | `string` |
| `updatedAt` | `Date` |
| `updatedBy` | `string` \| `undefined` |

#### Defined in

[packages/entity/src/EntityInterfaces/Document.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Document.ts#L3)

___

### EntityDocumentInput

Ƭ **EntityDocumentInput**<`Shape`\>: `IsKnown`<`Shape`\> extends ``1`` ? `Merge`<`Partial`<[`EntityDocumentBase`](Entity.md#entitydocumentbase)\>, `Shape`\> : `Partial`<[`EntityDocumentBase`](Entity.md#entitydocumentbase)\> & { `[K: string]`: `unknown`;  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Shape` | {} |

#### Defined in

[packages/entity/src/EntityInterfaces/Document.ts:18](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Document.ts#L18)

___

### EntityFieldResolver

Ƭ **EntityFieldResolver**<`Context`, `TypeDef`, `ArgsDef`, `Root`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | `Context` |
| `TypeDef` | extends `ObjectFieldInput` |
| `ArgsDef` | extends `ObjectDefinitionInput` \| `undefined` |
| `Root` | `Root` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args?` | `ArgsDef` |
| `name` | `string` |
| `resolve` | `ResolverResolve`<`Context`, `Root`, `TypeDef`, `ArgsDef`\> |
| `type` | `TypeDef` |

#### Defined in

[packages/entity/src/EntityOptions.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityOptions.ts#L22)

___

### EntityHooks

Ƭ **EntityHooks**<`Doc`, `E`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Doc` | extends `DocumentBase` = [`EntityDocument`](Entity.md#entitydocument)<{ `[K: string]`: `unknown`;  }\> |
| `E` | extends [`AnyEntity`](Entity.md#anyentity) = [`AnyEntity`](Entity.md#anyentity) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beforeQuery` | `Waterfall`<`EntityOperationInfoContext`, {}\> |
| `createDefinition` | `Parallel`<`Record`<`string`, `FinalFieldDefinition`\>, { `entityOptions`: [`EntityOptions`](Entity.md#entityoptions) ; `fields`: `string`[] ; `kind`: [`EntityHooksCreateDefinitionKind`](Entity.md#entityhookscreatedefinitionkind-1) ; `resolvers`: [`EntityFieldResolver`](Entity.md#entityfieldresolver)<`any`, `any`, `any`, `any`\>[]  }\> |
| `filterResult` | `Waterfall`<{ `items`: [`EntityDocument`](Entity.md#entitydocument)<`Doc`\>[] ; `kind`: ``"items"``  } \| { `kind`: ``"pagination"`` ; `pagination`: `PaginationResult`<[`EntityDocument`](Entity.md#entitydocument)<`Doc`\>\>  }, { `operation`: `EntityOperationInfoContext` ; `resolvers`: [`EntityFieldResolver`](Entity.md#entityfieldresolver)<`any`, `any`, `any`, `any`\>[]  }\> |
| `initCreation` | `Parallel`<[`EntityOptions`](Entity.md#entityoptions), `E`\> |
| `postParse` | `Waterfall`<`EntityOperationInfoContext`, [`EntityParserHookContext`](Entity.md#entityparserhookcontext)<`E`\>\> |
| `preParse` | `Waterfall`<`EntityOperationInfoContext`, [`EntityParserHookContext`](Entity.md#entityparserhookcontext)<`E`\>\> |
| `willResolve` | `Waterfall`<[`_EntityLoaders`](Entity.md#_entityloaders)<`E`\>, `EntityOperationInfoContext`\> |

#### Defined in

[packages/entity/src/EntityPlugin.ts:53](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityPlugin.ts#L53)

___

### EntityHooksCreateDefinitionKind

Ƭ **EntityHooksCreateDefinitionKind**: typeof [`EntityHooksCreateDefinitionKind`](Entity.md#entityhookscreatedefinitionkind-1)[`number`]

#### Defined in

[packages/entity/src/EntityPlugin.ts:34](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityPlugin.ts#L34)

[packages/entity/src/EntityPlugin.ts:41](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityPlugin.ts#L41)

___

### EntityLoaderConfig

Ƭ **EntityLoaderConfig**<`Method`, `Context`\>: `TransporterLoadersRecord`[`Method`] extends (`config`: infer Config) => `any` ? `Config` & { `context`: `Context`  } extends infer R ? { [K in keyof R as K extends "context" ? never : K]: R[K] } & { `context`: `Context`  } : `never` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Method` | extends `TransporterLoaderName` |
| `Context` | extends `LoaderContext` = `Record`<`string`, `any`\> |

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderConfig.ts:7](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/EntityLoaderConfig.ts#L7)

___

### EntityLoaderMethods

Ƭ **EntityLoaderMethods**<`Context`\>: [`_EntityLoaderMethods`](Entity.md#_entityloadermethods)<`Context`\> extends infer Methods ? { [K in keyof Methods]: Methods[K] extends Function ? Options extends Record<string, any\> ? Function & \_EntityLoaderUtils<Options, Context\> : Methods[K] : Methods[K] } & {} : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](Entity.md#anyentitytypescontext) |

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:18](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L18)

___

### EntityOptions

Ƭ **EntityOptions**<`InputDocumentDefinition`, `Indexes`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDocumentDefinition` | extends `ObjectDefinitionInput` = `ObjectDefinitionInput` |
| `Indexes` | extends `DocumentIndexesConfig` = `DocumentIndexesConfig` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowExtraFields?` | `boolean` |
| `indexes` | `Indexes` |
| `logs?` | `LoggerOptions` |
| `name` | `string` |
| `transporter?` | `Transporter` |
| `type` | `GraphType`<{ `object`: `InputDocumentDefinition`  }\> |

#### Defined in

[packages/entity/src/EntityOptions.ts:10](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityOptions.ts#L10)

___

### EntityParserHookContext

Ƭ **EntityParserHookContext**<`E`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`AnyEntity`](Entity.md#anyentity) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkForVersion?` | `boolean` |
| `entity` | `E` |

#### Defined in

[packages/entity/src/EntityPlugin.ts:44](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityPlugin.ts#L44)

___

### PageInfo

Ƭ **PageInfo**: `Infer`<typeof [`PageInfoType`](Entity.md#pageinfotype)\>

#### Defined in

[packages/entity/src/paginationUtils.ts:12](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/paginationUtils.ts#L12)

___

### PaginationType

Ƭ **PaginationType**<`T`\>: `GraphType`<{ `object`: { `edges`: { `list`: ``true`` ; `type`: [`EdgeType`](Entity.md#edgetype)<`T`\>  } ; `pageInfo`: typeof [`PageInfoType`](Entity.md#pageinfotype)  }  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/entity/src/paginationUtils.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/paginationUtils.ts#L21)

___

### \_AllOptional

Ƭ **\_AllOptional**<`Input`\>: `MakeFieldOptional`<`DescribeObjectDefinition`<`Input`\>, keyof `Input`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | extends `ObjectDefinitionInput` |

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:130](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L130)

___

### \_AnyEntity

Ƭ **\_AnyEntity**: [`EntityFromContext`](../interfaces/Entity.EntityFromContext.md)<[`EntityTypesContext`](../interfaces/Entity.EntityTypesContext.md)<{}, `DocumentIndexItem`[]\>\>

#### Defined in

[packages/entity/src/EntityInterfaces/Entity.ts:11](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Entity.ts#L11)

___

### \_EntityLoaderMethods

Ƭ **\_EntityLoaderMethods**<`Context`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | extends [`AnyEntityTypesContext`](Entity.md#anyentitytypescontext) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createOne` | `CreateOne`<`Context`[``"documentCreationInput"``], `Context`[``"document"``], `Context`[``"indexes"``]\> |
| `deleteMany` | `DeleteMany`<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `deleteOne` | `DeleteOne`<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findById` | `FindById`<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findMany` | `FindMany`<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `findOne` | `FindOne`<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `paginate` | `Paginate`<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `updateMany` | `UpdateMany`<`Context`[``"document"``], `Context`[``"indexes"``]\> |
| `updateOne` | `UpdateOne`<`Context`[``"document"``], `Context`[``"indexes"``]\> |

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:57](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L57)

___

### \_EntityLoaders

Ƭ **\_EntityLoaders**<`E`\>: { [M in TransporterLoaderName]: E[M] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Record`<`string`, `any`\> |

#### Defined in

[packages/entity/src/EntityPlugin.ts:49](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityPlugin.ts#L49)

___

### \_ExcludeExtend

Ƭ **\_ExcludeExtend**<`E`\>: { [K in keyof E as K extends \_ExtendMethodKeys ? never : K]: E[K] } & {}

#### Type parameters

| Name |
| :------ |
| `E` |

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:126](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L126)

___

### \_ExtendMethodKeys

Ƭ **\_ExtendMethodKeys**: ``"addHooks"`` \| ``"addRelation"`` \| ``"extend"``

#### Defined in

[packages/entity/src/EntityInterfaces/EntityFromContext.ts:124](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/EntityFromContext.ts#L124)

___

### \_GetLoaderFilterDef

Ƭ **\_GetLoaderFilterDef**<`LoaderConfig`, `DocDef`\>: `LoaderConfig` extends { `filter`: infer Filter  } ? { [K in keyof Filter as K extends keyof DocDef ? K : never]: K extends keyof DocDef ? Omit<DescribeField<DocDef[K]\>, "optional"\> & Object : never } extends infer Def ? { [K in keyof Def]: Def[K] } : {} : {}

#### Type parameters

| Name |
| :------ |
| `LoaderConfig` |
| `DocDef` |

#### Defined in

[packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts:81](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/EntityLoaderMethods.ts#L81)

## Variables

### EntityHooksCreateDefinitionKind

• `Const` **EntityHooksCreateDefinitionKind**: [``"inputDefinition"``, ``"outputDefinition"``, ``"databaseDefinition"``, ``"updateDefinition"``]

#### Defined in

[packages/entity/src/EntityPlugin.ts:34](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityPlugin.ts#L34)

[packages/entity/src/EntityPlugin.ts:41](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityPlugin.ts#L41)

___

### EntityStore

• `Const` **EntityStore**: `Store`<{ `[K: string]`: [`AnyEntity`](Entity.md#anyentity);  }, `string`, [`AnyEntity`](Entity.md#anyentity)\>

#### Defined in

[packages/entity/src/EntityStore.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityStore.ts#L5)

___

### PageInfoType

• `Const` **PageInfoType**: `GraphType`<{ `object`: { `endCursor`: ``"string?"`` = 'string?'; `hasNextPage`: ``"boolean"`` = 'boolean'; `hasPreviousPage`: ``"boolean"`` = 'boolean'; `startCursor`: ``"string?"`` = 'string?' }  }\>

#### Defined in

[packages/entity/src/paginationUtils.ts:3](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/paginationUtils.ts#L3)

## Functions

### createEntity

▸ **createEntity**<`InputDefinition`, `Indexes`, `Options`\>(`configOptions`): [`Entity`](../interfaces/Entity.Entity.md)<`InputDefinition`, `Indexes`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputDefinition` | extends `ObjectDefinitionInput` |
| `Indexes` | extends `DocumentIndexesConfig`<`string`, `Indexes`\> |
| `Options` | extends [`EntityOptions`](Entity.md#entityoptions)<`InputDefinition`, `Indexes`\> = [`EntityOptions`](Entity.md#entityoptions)<`InputDefinition`, `Indexes`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configOptions` | [`EntityOptions`](Entity.md#entityoptions)<`InputDefinition`, `Indexes`\> \| () => [`EntityOptions`](Entity.md#entityoptions)<`InputDefinition`, `Indexes`\> |

#### Returns

[`Entity`](../interfaces/Entity.Entity.md)<`InputDefinition`, `Indexes`\>

#### Defined in

[packages/entity/src/Entity.ts:88](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/Entity.ts#L88)

___

### createEntityPlugin

▸ **createEntityPlugin**(`name`, `handler`): [`EntityPlugin`](../interfaces/Entity.EntityPlugin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `handler` | [`EntityPlugin`](../interfaces/Entity.EntityPlugin.md) |

#### Returns

[`EntityPlugin`](../interfaces/Entity.EntityPlugin.md)

#### Defined in

[packages/entity/src/EntityPlugin.ts:15](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityPlugin.ts#L15)

___

### isEntity

▸ **isEntity**(`value`): value is AnyEntity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is AnyEntity

#### Defined in

[packages/entity/src/Entity.ts:985](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/Entity.ts#L985)

___

### registerEntity

▸ **registerEntity**(`entity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`AnyEntity`](Entity.md#anyentity) |

#### Returns

`void`

#### Defined in

[packages/entity/src/EntityStore.ts:7](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityStore.ts#L7)
