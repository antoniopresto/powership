[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind Schema - A Super Portable TypeScript validation library](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md) / TSFyWriterConfig

# Interface: TSFyWriterConfig

[Solarwind Schema - A Super Portable TypeScript validation library](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md).TSFyWriterConfig

## Hierarchy

- [`TSFYConfig`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfyconfig)

  ↳ **`TSFyWriterConfig`**

## Table of contents

### Properties

- [context](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#context)
- [customParser](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#customparser)
- [dest](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#dest)
- [groupInTypeThreshold](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#groupintypethreshold)
- [iterationLimit](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#iterationlimit)
- [many](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#many)
- [moduleName](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#modulename)
- [prettify](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#prettify)
- [store](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#store)
- [wrappers](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#wrappers)
- [writeThrottleMS](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFyWriterConfig.md#writethrottlems)

## Properties

### context

• `Optional` **context**: [`TSFYContext`](../modules/Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.md#tsfycontext)

#### Inherited from

TSFYConfig.context

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:20](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L20)

___

### customParser

• `Optional` **customParser**: [`TSFYCustomHandler`](Solarwind_Schema___A_Super_Portable_TypeScript_validation_library.TSFYCustomHandler.md)

#### Inherited from

TSFYConfig.customParser

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:24](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L24)

___

### dest

• `Optional` **dest**: `string`

#### Defined in

[packages/schema/src/tsfy/tsfyWriter.ts:18](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfyWriter.ts#L18)

___

### groupInTypeThreshold

• `Optional` **groupInTypeThreshold**: `number`

#### Inherited from

TSFYConfig.groupInTypeThreshold

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:23](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L23)

___

### iterationLimit

• `Optional` **iterationLimit**: `number`

#### Inherited from

TSFYConfig.iterationLimit

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L21)

___

### many

• `Optional` **many**: `boolean`

#### Inherited from

TSFYConfig.many

#### Defined in

[packages/schema/src/tsfy/tsfy.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfy.ts#L22)

___

### moduleName

• `Optional` **moduleName**: `string`

#### Defined in

[packages/schema/src/tsfy/tsfyWriter.ts:21](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfyWriter.ts#L21)

___

### prettify

• `Optional` **prettify**: `boolean`

#### Defined in

[packages/schema/src/tsfy/tsfyWriter.ts:20](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfyWriter.ts#L20)

___

### store

• `Optional` **store**: `Store`<`Record`<`string`, `any`\>, `string`, `any`\>

#### Defined in

[packages/schema/src/tsfy/tsfyWriter.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfyWriter.ts#L22)

___

### wrappers

• `Optional` **wrappers**: [`string`, `string`][]

#### Defined in

[packages/schema/src/tsfy/tsfyWriter.ts:17](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfyWriter.ts#L17)

___

### writeThrottleMS

• `Optional` **writeThrottleMS**: `number`

#### Defined in

[packages/schema/src/tsfy/tsfyWriter.ts:19](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/tsfy/tsfyWriter.ts#L19)
