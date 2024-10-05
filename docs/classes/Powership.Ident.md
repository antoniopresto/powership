[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / Ident

# Class: Ident

[Powership](../modules/Powership.md).Ident

## Table of contents

### Constructors

- [constructor](Powership.Ident.md#constructor)

### Properties

- [back](Powership.Ident.md#back)
- [children](Powership.Ident.md#children)
- [li](Powership.Ident.md#li)
- [state](Powership.Ident.md#state)
- [toString](Powership.Ident.md#tostring)
- [ul](Powership.Ident.md#ul)
- [DEFAULT\_STYLE](Powership.Ident.md#default_style)
- [DEFAULT\_TAB\_SIZE](Powership.Ident.md#default_tab_size)

### Accessors

- [chain](Powership.Ident.md#chain)
- [head](Powership.Ident.md#head)
- [list](Powership.Ident.md#list)

## Constructors

### constructor

• **new Ident**(`text?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text?` | `string` |
| `options?` | [`IdentOptions`](../modules/Powership.md#identoptions) |

#### Defined in

packages/utils/out/hey.d.ts:53

• **new Ident**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IdentOptions`](../modules/Powership.md#identoptions) |

#### Defined in

packages/utils/out/hey.d.ts:54

## Properties

### back

• **back**: (`times?`: `number`) => [`Ident`](Powership.Ident.md)

#### Type declaration

▸ (`times?`): [`Ident`](Powership.Ident.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `times?` | `number` |

##### Returns

[`Ident`](Powership.Ident.md)

#### Defined in

packages/utils/out/hey.d.ts:66

___

### children

• **children**: `Map`<`number`, [`IdentState`](Powership.IdentState.md)\>

#### Defined in

packages/utils/out/hey.d.ts:51

___

### li

• **li**: (`text`: `string`, `style?`: ``"ol"`` \| ``"arrow"`` \| ``"dot"`` \| ``"ul"`` \| ``"li"``) => [`Ident`](Powership.Ident.md)

#### Type declaration

▸ (`text`, `style?`): [`Ident`](Powership.Ident.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `style?` | ``"ol"`` \| ``"arrow"`` \| ``"dot"`` \| ``"ul"`` \| ``"li"`` |

##### Returns

[`Ident`](Powership.Ident.md)

#### Defined in

packages/utils/out/hey.d.ts:63

___

### state

• **state**: [`IdentState`](Powership.IdentState.md)

#### Defined in

packages/utils/out/hey.d.ts:50

___

### toString

• **toString**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

packages/utils/out/hey.d.ts:55

___

### ul

• **ul**: (`text`: `string`, `style?`: ``"ol"`` \| ``"arrow"`` \| ``"dot"`` \| ``"ul"`` \| ``"li"``) => [`Ident`](Powership.Ident.md)

#### Type declaration

▸ (`text`, `style?`): [`Ident`](Powership.Ident.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `style?` | ``"ol"`` \| ``"arrow"`` \| ``"dot"`` \| ``"ul"`` \| ``"li"`` |

##### Returns

[`Ident`](Powership.Ident.md)

#### Defined in

packages/utils/out/hey.d.ts:64

___

### DEFAULT\_STYLE

▪ `Static` **DEFAULT\_STYLE**: ``"ol"`` \| ``"arrow"`` \| ``"dot"`` \| ``"ul"`` \| ``"li"``

#### Defined in

packages/utils/out/hey.d.ts:68

___

### DEFAULT\_TAB\_SIZE

▪ `Static` **DEFAULT\_TAB\_SIZE**: `number`

#### Defined in

packages/utils/out/hey.d.ts:69

## Accessors

### chain

• `get` **chain**(): <U\>(`callbackfn`: (`value`: [`number`, [`IdentState`](Powership.IdentState.md)], `index`: `number`, `array`: [`number`, [`IdentState`](Powership.IdentState.md)][]) => `U`, `thisArg?`: `any`) => `U`[]

#### Returns

`fn`

▸ <`U`\>(`callbackfn`, `thisArg?`): `U`[]

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: [`number`, [`IdentState`](Powership.IdentState.md)], `index`: `number`, `array`: [`number`, [`IdentState`](Powership.IdentState.md)][]) => `U` |
| `thisArg?` | `any` |

##### Returns

`U`[]

#### Defined in

packages/utils/out/hey.d.ts:57

___

### head

• `get` **head**(): [`Ident`](Powership.Ident.md)

#### Returns

[`Ident`](Powership.Ident.md)

#### Defined in

packages/utils/out/hey.d.ts:52

___

### list

• `get` **list**(): [`number`, [`IdentState`](Powership.IdentState.md)][]

#### Returns

[`number`, [`IdentState`](Powership.IdentState.md)][]

#### Defined in

packages/utils/out/hey.d.ts:56
