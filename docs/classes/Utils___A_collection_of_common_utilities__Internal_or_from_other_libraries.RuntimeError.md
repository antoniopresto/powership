[Backland](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / RuntimeError

# Class: RuntimeError

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).RuntimeError

## Hierarchy

- `Error`

  ↳ **`RuntimeError`**

## Table of contents

### Constructors

- [constructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RuntimeError.md#constructor)

### Properties

- [details](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RuntimeError.md#details)
- [detailsString](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RuntimeError.md#detailsstring)
- [name](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.RuntimeError.md#name)

## Constructors

### constructor

• **new RuntimeError**(`message`, `details`, `skipStackLines?`, `depth?`)

**`Deprecated`**

use options via object RunTimeErrorOptions instead

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `details` | `any` |
| `skipStackLines?` | `number` |
| `depth?` | `number` |

#### Overrides

Error.constructor

#### Defined in

[packages/utils/src/RuntimeError.ts:22](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/RuntimeError.ts#L22)

• **new RuntimeError**(`message`, `details`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `details` | `any` |
| `options?` | [`RunTimeErrorOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#runtimeerroroptions) |

#### Overrides

Error.constructor

#### Defined in

[packages/utils/src/RuntimeError.ts:29](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/RuntimeError.ts#L29)

## Properties

### details

• **details**: `any`

#### Defined in

[packages/utils/src/RuntimeError.ts:12](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/RuntimeError.ts#L12)

___

### detailsString

• **detailsString**: `string` = `''`

#### Defined in

[packages/utils/src/RuntimeError.ts:13](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/RuntimeError.ts#L13)

___

### name

• **name**: `string` = `'RuntimeError'`

#### Overrides

Error.name

#### Defined in

[packages/utils/src/RuntimeError.ts:10](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/utils/src/RuntimeError.ts#L10)
