[Backland](../README.md) / [Modules](../modules.md) / [Entity](../modules/Entity.md) / EntityTypesContext

# Interface: EntityTypesContext<InputDef, Indexes\>

[Entity](../modules/Entity.md).EntityTypesContext

## Type parameters

| Name |
| :------ |
| `InputDef` |
| `Indexes` |

## Table of contents

### Properties

- [document](Entity.EntityTypesContext.md#document)
- [documentBase](Entity.EntityTypesContext.md#documentbase)
- [documentCreationInput](Entity.EntityTypesContext.md#documentcreationinput)
- [indexes](Entity.EntityTypesContext.md#indexes)
- [options](Entity.EntityTypesContext.md#options)
- [originDefinition](Entity.EntityTypesContext.md#origindefinition)
- [outputDefinition](Entity.EntityTypesContext.md#outputdefinition)

## Properties

### document

• **document**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [`ObjectDefinitionInput`] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Entity.md#entitydocument)<`D`\> : {}

#### Defined in

[packages/entity/src/EntityInterfaces/Context.ts:60](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Context.ts#L60)

___

### documentBase

• **documentBase**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [`ObjectDefinitionInput`] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {}

#### Defined in

[packages/entity/src/EntityInterfaces/Context.ts:46](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Context.ts#L46)

___

### documentCreationInput

• **documentCreationInput**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [`ObjectDefinitionInput`] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? `InferObjectDefinition`<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Entity.md#entitydocumentinput)<`D`\> : {}

#### Defined in

[packages/entity/src/EntityInterfaces/Context.ts:53](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Context.ts#L53)

___

### indexes

• **indexes**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []

#### Defined in

[packages/entity/src/EntityInterfaces/Context.ts:23](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Context.ts#L23)

___

### options

• **options**: [`EntityOptions`](../modules/Entity.md#entityoptions)<`IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [`ObjectDefinitionInput`] ? `InputDef` : {} : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly `DocumentIndexItem`<`string`\>[] \| `DocumentIndexItem`<`string`\>[] ? `Indexes` : [] : []\>

#### Defined in

[packages/entity/src/EntityInterfaces/Context.ts:41](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Context.ts#L41)

___

### originDefinition

• **originDefinition**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [`ObjectDefinitionInput`] ? `InputDef` : {} : {}

#### Defined in

[packages/entity/src/EntityInterfaces/Context.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Context.ts#L14)

___

### outputDefinition

• **outputDefinition**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [`ObjectDefinitionInput`] ? `InputDef` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}

#### Defined in

[packages/entity/src/EntityInterfaces/Context.ts:34](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/entity/src/EntityInterfaces/Context.ts#L34)
