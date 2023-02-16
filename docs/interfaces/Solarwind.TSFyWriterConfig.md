[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / TSFyWriterConfig

# Interface: TSFyWriterConfig

[Backland](../modules/Backland.md).TSFyWriterConfig

## Hierarchy

- [`TSFYConfig`](../modules/Backland.md#tsfyconfig)

  ↳ **`TSFyWriterConfig`**

## Table of contents

### Properties

- [context](Backland.TSFyWriterConfig.md#context)
- [customParser](Backland.TSFyWriterConfig.md#customparser)
- [dest](Backland.TSFyWriterConfig.md#dest)
- [groupInTypeThreshold](Backland.TSFyWriterConfig.md#groupintypethreshold)
- [iterationLimit](Backland.TSFyWriterConfig.md#iterationlimit)
- [many](Backland.TSFyWriterConfig.md#many)
- [moduleName](Backland.TSFyWriterConfig.md#modulename)
- [prettify](Backland.TSFyWriterConfig.md#prettify)
- [store](Backland.TSFyWriterConfig.md#store)
- [wrappers](Backland.TSFyWriterConfig.md#wrappers)
- [writeThrottleMS](Backland.TSFyWriterConfig.md#writethrottlems)

## Properties

### context

• `Optional` **context**: [`TSFYContext`](../modules/Backland.md#tsfycontext)

#### Inherited from

TSFYConfig.context

#### Defined in

packages/schema/lib/tsfy/tsfy.d.ts:6

___

### customParser

• `Optional` **customParser**: [`TSFYCustomHandler`](Backland.TSFYCustomHandler.md)

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
