[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / RuntimeError

# Class: RuntimeError

[Powership](../modules/Powership.md).RuntimeError

## Hierarchy

- `Error`

  ↳ **`RuntimeError`**

## Table of contents

### Constructors

- [constructor](Powership.RuntimeError.md#constructor)

### Properties

- [details](Powership.RuntimeError.md#details)
- [detailsString](Powership.RuntimeError.md#detailsstring)
- [name](Powership.RuntimeError.md#name)

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

packages/utils/lib/RuntimeError.d.ts:17

• **new RuntimeError**(`message`, `details`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `details` | `any` |
| `options?` | [`RunTimeErrorOptions`](../modules/Powership.md#runtimeerroroptions) |

#### Overrides

Error.constructor

#### Defined in

packages/utils/lib/RuntimeError.d.ts:18

## Properties

### details

• **details**: `any`

#### Defined in

packages/utils/lib/RuntimeError.d.ts:8

___

### detailsString

• **detailsString**: `string`

#### Defined in

packages/utils/lib/RuntimeError.d.ts:9

___

### name

• **name**: `string`

#### Overrides

Error.name

#### Defined in

packages/utils/lib/RuntimeError.d.ts:7
