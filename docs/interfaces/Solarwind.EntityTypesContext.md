[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / EntityTypesContext

# Interface: EntityTypesContext<InputDef, Indexes\>

[Solarwind](../modules/Solarwind.md).EntityTypesContext

## Type parameters

| Name |
| :------ |
| `InputDef` |
| `Indexes` |

## Table of contents

### Properties

- [document](Solarwind.EntityTypesContext.md#document)
- [documentBase](Solarwind.EntityTypesContext.md#documentbase)
- [documentCreationInput](Solarwind.EntityTypesContext.md#documentcreationinput)
- [indexes](Solarwind.EntityTypesContext.md#indexes)
- [options](Solarwind.EntityTypesContext.md#options)
- [originDefinition](Solarwind.EntityTypesContext.md#origindefinition)
- [outputDefinition](Solarwind.EntityTypesContext.md#outputdefinition)

## Properties

### document

• **document**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocument`](../modules/Solarwind.md#entitydocument)<`D`\> : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:37

___

### documentBase

• **documentBase**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:27

___

### documentCreationInput

• **documentCreationInput**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `InputDef` : {} : {} extends `D` ? [`D`] extends [`object`] ? [`InferObjectDefinition`](../modules/Solarwind.md#inferobjectdefinition)<`D`\> : `never` : {} extends `D` ? [`EntityDocumentInput`](../modules/Solarwind.md#entitydocumentinput)<`D`\> : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:33

___

### indexes

• **indexes**: `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:15

___

### options

• **options**: [`EntityOptions`](../modules/Solarwind.md#entityoptions)<`IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `InputDef` : {} : {}, `IsKnown`<`Indexes`\> extends ``1`` ? `Indexes` extends readonly [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] \| [`DocumentIndexItem`](../modules/Solarwind.md#documentindexitem)<`string`\>[] ? `Indexes` : [] : []\>

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:23

___

### originDefinition

• **originDefinition**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `InputDef` : {} : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:11

___

### outputDefinition

• **outputDefinition**: `IsKnown`<`InputDef`\> extends ``1`` ? [`InputDef`] extends [[`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md)] ? `InputDef` : {} : {} extends `D` ? `D` extends `object` ? `MergeFlat`<`Omit`<`EntityDocumentBaseDef`<``false``\>, keyof `D`\>, `D`, `BuiltIn`, `undefined`\> : `never` : {}

#### Defined in

packages/entity/lib/EntityInterfaces/Context.d.ts:19
