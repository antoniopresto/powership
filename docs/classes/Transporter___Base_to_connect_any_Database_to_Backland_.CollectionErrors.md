[Backland](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Backland.](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md) / CollectionErrors

# Class: CollectionErrors

[Transporter - Base to connect any Database to Backland.](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md).CollectionErrors

## Hierarchy

- `Error`

  ↳ **`CollectionErrors`**

## Table of contents

### Constructors

- [constructor](Transporter___Base_to_connect_any_Database_to_Backland_.CollectionErrors.md#constructor)

### Properties

- [\_\_isEntityError](Transporter___Base_to_connect_any_Database_to_Backland_.CollectionErrors.md#__isentityerror)
- [kinds](Transporter___Base_to_connect_any_Database_to_Backland_.CollectionErrors.md#kinds)

### Methods

- [is](Transporter___Base_to_connect_any_Database_to_Backland_.CollectionErrors.md#is)

## Constructors

### constructor

• **new CollectionErrors**(`publicDetails`, `privateDetails?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicDetails` | [`EntityErrorDetails`](../modules/Transporter___Base_to_connect_any_Database_to_Backland_.md#entityerrordetails) |
| `privateDetails?` | `any` |

#### Overrides

Error.constructor

#### Defined in

[packages/transporter/src/CollectionErrors.ts:17](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionErrors.ts#L17)

## Properties

### \_\_isEntityError

• **\_\_isEntityError**: `boolean` = `true`

#### Defined in

[packages/transporter/src/CollectionErrors.ts:14](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionErrors.ts#L14)

___

### kinds

▪ `Static` **kinds**: { `EMPTY_FILTER`: ``"EMPTY_FILTER"`` ; `INVALID_FIELDS`: ``"INVALID_FIELDS"`` ; `INVALID_FILTER`: ``"INVALID_FILTER"`` ; `INVALID_INDEX_KEY`: ``"INVALID_INDEX_KEY"``  } & {} & {} = `EntityErrorKind`

#### Defined in

[packages/transporter/src/CollectionErrors.ts:15](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionErrors.ts#L15)

## Methods

### is

▸ `Static` **is**(`input`): input is CollectionErrors

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

input is CollectionErrors

#### Defined in

[packages/transporter/src/CollectionErrors.ts:32](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/transporter/src/CollectionErrors.ts#L32)
