[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / CollectionErrors

# Class: CollectionErrors

[Backland](../modules/Backland.md).CollectionErrors

## Hierarchy

- `Error`

  ↳ **`CollectionErrors`**

## Table of contents

### Constructors

- [constructor](Backland.CollectionErrors.md#constructor)

### Properties

- [\_\_isEntityError](Backland.CollectionErrors.md#__isentityerror)
- [kinds](Backland.CollectionErrors.md#kinds)

### Methods

- [is](Backland.CollectionErrors.md#is)

## Constructors

### constructor

• **new CollectionErrors**(`publicDetails`, `privateDetails?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicDetails` | [`EntityErrorDetails`](../modules/Backland.md#entityerrordetails) |
| `privateDetails?` | `any` |

#### Overrides

Error.constructor

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:24

## Properties

### \_\_isEntityError

• **\_\_isEntityError**: `boolean`

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:13

___

### kinds

▪ `Static` **kinds**: { `EMPTY_FILTER`: ``"EMPTY_FILTER"`` ; `INVALID_FIELDS`: ``"INVALID_FIELDS"`` ; `INVALID_FILTER`: ``"INVALID_FILTER"`` ; `INVALID_INDEX_KEY`: ``"INVALID_INDEX_KEY"``  } & { `list`: (``"INVALID_FIELDS"`` \| ``"INVALID_INDEX_KEY"`` \| ``"EMPTY_FILTER"`` \| ``"INVALID_FILTER"``)[]  } & { `enum`: ``"INVALID_FIELDS"`` \| ``"INVALID_INDEX_KEY"`` \| ``"EMPTY_FILTER"`` \| ``"INVALID_FILTER"``  }

#### Defined in

packages/transporter/lib/CollectionErrors.d.ts:14

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

packages/transporter/lib/CollectionErrors.d.ts:25
