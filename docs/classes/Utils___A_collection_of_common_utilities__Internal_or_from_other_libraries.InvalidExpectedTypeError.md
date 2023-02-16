[Solarwind](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / InvalidExpectedTypeError

# Class: InvalidExpectedTypeError

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).InvalidExpectedTypeError

## Hierarchy

- `Error`

  ↳ **`InvalidExpectedTypeError`**

## Table of contents

### Constructors

- [constructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InvalidExpectedTypeError.md#constructor)

### Properties

- [expected](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InvalidExpectedTypeError.md#expected)
- [fieldName](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InvalidExpectedTypeError.md#fieldname)
- [found](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.InvalidExpectedTypeError.md#found)

## Constructors

### constructor

• **new InvalidExpectedTypeError**(`fieldName`, `found`, `expected`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `found` | `string` |
| `expected` | `string` |

#### Overrides

Error.constructor

#### Defined in

[packages/utils/src/expectedType.ts:8](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/expectedType.ts#L8)

## Properties

### expected

• **expected**: `string`

#### Defined in

[packages/utils/src/expectedType.ts:6](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/expectedType.ts#L6)

___

### fieldName

• **fieldName**: `string`

#### Defined in

[packages/utils/src/expectedType.ts:4](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/expectedType.ts#L4)

___

### found

• **found**: `string`

#### Defined in

[packages/utils/src/expectedType.ts:5](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/expectedType.ts#L5)
