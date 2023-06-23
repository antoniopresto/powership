[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / EntityTypesContext

# Interface: EntityTypesContext<InputDef, Indexes\>

[Powership](../modules/Powership.md).EntityTypesContext

## Type parameters

| Name |
| :------ |
| `InputDef` |
| `Indexes` |

## Table of contents

### Properties

- [document](Powership.EntityTypesContext.md#document)
- [documentBase](Powership.EntityTypesContext.md#documentbase)
- [documentCreationInput](Powership.EntityTypesContext.md#documentcreationinput)
- [indexes](Powership.EntityTypesContext.md#indexes)
- [options](Powership.EntityTypesContext.md#options)
- [originDefinition](Powership.EntityTypesContext.md#origindefinition)
- [outputDefinition](Powership.EntityTypesContext.md#outputdefinition)

## Properties

### document

• **document**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Powership.md#entitydocument)<`D`\> : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:37

___

### documentBase

• **documentBase**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:27

___

### documentCreationInput

• **documentCreationInput**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Powership.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Powership.md#entitydocumentinput)<`D`\> : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:33

___

### indexes

• **indexes**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:15

___

### options

• **options**: [`EntityOptions`](../modules/Powership.md#entityoptions)<[`IsKnown`](../modules/Powership.TU.md#isknown)<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `InputDef` : {} : {}, [`IsKnown`](../modules/Powership.TU.md#isknown)<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Powership.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:23

___

### originDefinition

• **originDefinition**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `InputDef` : {} : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:11

___

### outputDefinition

• **outputDefinition**: [`IsKnown`](../modules/Powership.TU.md#isknown)<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput)] ? `InputDef` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:19
