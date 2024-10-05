[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / Ident

# Class: Ident

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).Ident

## Table of contents

### Constructors

- [constructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#constructor)

### Properties

- [children](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#children)
- [state](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#state)
- [DEFAULT\_STYLE](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#default_style)
- [DEFAULT\_TAB\_SIZE](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#default_tab_size)

### Accessors

- [chain](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#chain)
- [head](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#head)
- [list](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#list)

### Methods

- [back](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#back)
- [li](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#li)
- [toString](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#tostring)
- [ul](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md#ul)

## Constructors

### constructor

• **new Ident**(`text?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text?` | `string` |
| `options?` | [`IdentOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#identoptions) |

#### Defined in

[packages/utils/src/hey.ts:167](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L167)

• **new Ident**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IdentOptions`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#identoptions) |

#### Defined in

[packages/utils/src/hey.ts:168](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L168)

## Properties

### children

• **children**: `Map`<`number`, [`IdentState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IdentState.md)\>

#### Defined in

[packages/utils/src/hey.ts:161](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L161)

___

### state

• **state**: [`IdentState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IdentState.md)

#### Defined in

[packages/utils/src/hey.ts:160](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L160)

___

### DEFAULT\_STYLE

▪ `Static` **DEFAULT\_STYLE**: ``"ol"`` \| ``"arrow"`` \| ``"dot"`` \| ``"ul"`` \| ``"li"`` = `'arrow'`

#### Defined in

[packages/utils/src/hey.ts:257](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L257)

___

### DEFAULT\_TAB\_SIZE

▪ `Static` **DEFAULT\_TAB\_SIZE**: `number` = `2`

#### Defined in

[packages/utils/src/hey.ts:258](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L258)

## Accessors

### chain

• `get` **chain**(): <U\>(`callbackfn`: (`value`: [`number`, [`IdentState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IdentState.md)], `index`: `number`, `array`: [`number`, [`IdentState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IdentState.md)][]) => `U`, `thisArg?`: `any`) => `U`[]

#### Returns

`fn`

▸ <`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`number`, [`IdentState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IdentState.md)], `index`: `number`, `array`: [`number`, [`IdentState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IdentState.md)][]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

##### Returns

`U`[]

#### Defined in

[packages/utils/src/hey.ts:180](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L180)

___

### head

• `get` **head**(): [`Ident`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md)

#### Returns

[`Ident`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md)

#### Defined in

[packages/utils/src/hey.ts:163](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L163)

___

### list

• `get` **list**(): [`number`, [`IdentState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IdentState.md)][]

#### Returns

[`number`, [`IdentState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.IdentState.md)][]

#### Defined in

[packages/utils/src/hey.ts:177](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L177)

## Methods

### back

▸ **back**(`times?`): [`Ident`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `times` | `number` | `1` |

#### Returns

[`Ident`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md)

#### Defined in

[packages/utils/src/hey.ts:232](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L232)

___

### li

▸ **li**(`text`, `style?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `style` | ``"ol"`` \| ``"arrow"`` \| ``"dot"`` \| ``"ul"`` \| ``"li"`` | `'li'` |

#### Returns

`this`

#### Defined in

[packages/utils/src/hey.ts:199](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L199)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/utils/src/hey.ts:173](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L173)

___

### ul

▸ **ul**(`text`, `style?`): [`Ident`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `style` | ``"ol"`` \| ``"arrow"`` \| ``"dot"`` \| ``"ul"`` \| ``"li"`` | `'ul'` |

#### Returns

[`Ident`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.Ident.md)

#### Defined in

[packages/utils/src/hey.ts:204](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/hey.ts#L204)
