[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / EntityTypesContext

# Interface: EntityTypesContext<InputDef, Indexes\>

[Backland](../modules/Backland.md).EntityTypesContext

## Type parameters

| Name |
| :------ |
| `InputDef` |
| `Indexes` |

## Table of contents

### Properties

- [document](Backland.EntityTypesContext.md#document)
- [documentBase](Backland.EntityTypesContext.md#documentbase)
- [documentCreationInput](Backland.EntityTypesContext.md#documentcreationinput)
- [indexes](Backland.EntityTypesContext.md#indexes)
- [options](Backland.EntityTypesContext.md#options)
- [originDefinition](Backland.EntityTypesContext.md#origindefinition)
- [outputDefinition](Backland.EntityTypesContext.md#outputdefinition)

## Properties

### document

• **document**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Backland.md#entitydocument)<`D`\> : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:37

___

### documentBase

• **documentBase**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:27

___

### documentCreationInput

• **documentCreationInput**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Backland.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Backland.md#entitydocumentinput)<`D`\> : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:33

___

### indexes

• **indexes**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:15

___

### options

• **options**: [`EntityOptions`](../modules/Backland.md#entityoptions)<`IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `InputDef` : {} : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Backland.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:23

___

### originDefinition

• **originDefinition**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `InputDef` : {} : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:11

___

### outputDefinition

• **outputDefinition**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md)] ? `InputDef` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:19
