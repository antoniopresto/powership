[Powership](../README.md) / [Modules](../modules.md) / [Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md) / CollectionErrors

# Class: CollectionErrors

[Transporter - Base to connect any Database to Powership.](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md).CollectionErrors

## Hierarchy

- `Error`

  ↳ **`CollectionErrors`**

## Table of contents

### Constructors

- [constructor](Transporter___Base_to_connect_any_Database_to_Powership_.CollectionErrors.md#constructor)

### Properties

- [\_\_isEntityError](Transporter___Base_to_connect_any_Database_to_Powership_.CollectionErrors.md#__isentityerror)
- [kinds](Transporter___Base_to_connect_any_Database_to_Powership_.CollectionErrors.md#kinds)

### Methods

- [is](Transporter___Base_to_connect_any_Database_to_Powership_.CollectionErrors.md#is)

## Constructors

### constructor

• **new CollectionErrors**(`publicDetails`, `privateDetails?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicDetails` | [`EntityErrorDetails`](../modules/Transporter___Base_to_connect_any_Database_to_Powership_.md#entityerrordetails) |
| `privateDetails?` | `any` |

#### Overrides

Error.constructor

#### Defined in

packages/transporter/src/CollectionErrors.ts:17

## Properties

### \_\_isEntityError

• **\_\_isEntityError**: `boolean` = `true`

#### Defined in

packages/transporter/src/CollectionErrors.ts:14

___

### kinds

▪ `Static` **kinds**: { `EMPTY_FILTER`: ``"EMPTY_FILTER"`` ; `INVALID_FIELDS`: ``"INVALID_FIELDS"`` ; `INVALID_FILTER`: ``"INVALID_FILTER"`` ; `INVALID_INDEX_KEY`: ``"INVALID_INDEX_KEY"``  } & { `list`: (``"INVALID_FIELDS"`` \| ``"INVALID_INDEX_KEY"`` \| ``"EMPTY_FILTER"`` \| ``"INVALID_FILTER"``)[]  } & { `enum`: ``"INVALID_FIELDS"`` \| ``"INVALID_INDEX_KEY"`` \| ``"EMPTY_FILTER"`` \| ``"INVALID_FILTER"``  } = `EntityErrorKind`

#### Defined in

packages/transporter/src/CollectionErrors.ts:15

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

packages/transporter/src/CollectionErrors.ts:32
