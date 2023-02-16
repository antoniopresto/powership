[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / TSFyWriterConfig

# Interface: TSFyWriterConfig

[Solarwind](../modules/Solarwind.md).TSFyWriterConfig

## Hierarchy

- [`TSFYConfig`](../modules/Solarwind.md#tsfyconfig)

  ↳ **`TSFyWriterConfig`**

## Table of contents

### Properties

- [context](Solarwind.TSFyWriterConfig.md#context)
- [customParser](Solarwind.TSFyWriterConfig.md#customparser)
- [dest](Solarwind.TSFyWriterConfig.md#dest)
- [groupInTypeThreshold](Solarwind.TSFyWriterConfig.md#groupintypethreshold)
- [iterationLimit](Solarwind.TSFyWriterConfig.md#iterationlimit)
- [many](Solarwind.TSFyWriterConfig.md#many)
- [moduleName](Solarwind.TSFyWriterConfig.md#modulename)
- [prettify](Solarwind.TSFyWriterConfig.md#prettify)
- [store](Solarwind.TSFyWriterConfig.md#store)
- [wrappers](Solarwind.TSFyWriterConfig.md#wrappers)
- [writeThrottleMS](Solarwind.TSFyWriterConfig.md#writethrottlems)

## Properties

### context

• `Optional` **context**: [`TSFYContext`](../modules/Solarwind.md#tsfycontext)

#### Inherited from

TSFYConfig.context

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:6

___

### customParser

• `Optional` **customParser**: [`TSFYCustomHandler`](Solarwind.TSFYCustomHandler.md)

#### Inherited from

TSFYConfig.customParser

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:10

___

### dest

• `Optional` **dest**: `string`

#### Defined in

packages/schema/lib/tsfy/tsfyWriter.d.ts:6

___

### groupInTypeThreshold

• `Optional` **groupInTypeThreshold**: `number`

#### Inherited from

TSFYConfig.groupInTypeThreshold

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:9

___

### iterationLimit

• `Optional` **iterationLimit**: `number`

#### Inherited from

TSFYConfig.iterationLimit

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:7

___

### many

• `Optional` **many**: `boolean`

#### Inherited from

TSFYConfig.many

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:8

___

### moduleName

• `Optional` **moduleName**: `string`

#### Defined in

packages/schema/lib/tsfy/tsfyWriter.d.ts:9

___

### prettify

• `Optional` **prettify**: `boolean`

#### Defined in

packages/schema/lib/tsfy/tsfyWriter.d.ts:8

___

### store

• `Optional` **store**: `Store`<`Record`<`string`, `any`\>, `string`, `any`\>

#### Defined in

packages/schema/lib/tsfy/tsfyWriter.d.ts:10

___

### wrappers

• `Optional` **wrappers**: [`string`, `string`][]

#### Defined in

packages/schema/lib/tsfy/tsfyWriter.d.ts:5

___

### writeThrottleMS

• `Optional` **writeThrottleMS**: `number`

#### Defined in

packages/schema/lib/tsfy/tsfyWriter.d.ts:7
