[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / ReactLike

# Interface: ReactLike

[Powership](../modules/Powership.md).ReactLike

## Table of contents

### Properties

- [createContext](Powership.ReactLike.md#createcontext)
- [useContext](Powership.ReactLike.md#usecontext)
- [useEffect](Powership.ReactLike.md#useeffect)
- [useMemo](Powership.ReactLike.md#usememo)
- [useState](Powership.ReactLike.md#usestate)

### Methods

- [createElement](Powership.ReactLike.md#createelement)

## Properties

### createContext

• **createContext**: <T\>(`initialValue`: `T`) => [`_ReactContext`](Powership._ReactContext.md)<`T`\>

#### Type declaration

▸ <`T`\>(`initialValue`): [`_ReactContext`](Powership._ReactContext.md)<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

##### Returns

[`_ReactContext`](Powership._ReactContext.md)<`T`\>

#### Defined in

packages/utils/out/ReactLike.d.ts:38

___

### useContext

• **useContext**: [`AnyFunction`](../modules/Powership.TU.md#anyfunction)

#### Defined in

packages/utils/out/ReactLike.d.ts:39

___

### useEffect

• **useEffect**: [`AnyFunction`](../modules/Powership.TU.md#anyfunction)

#### Defined in

packages/utils/out/ReactLike.d.ts:36

___

### useMemo

• **useMemo**: [`AnyFunction`](../modules/Powership.TU.md#anyfunction)

#### Defined in

packages/utils/out/ReactLike.d.ts:37

___

### useState

• **useState**: [`AnyFunction`](../modules/Powership.TU.md#anyfunction)

#### Defined in

packages/utils/out/ReactLike.d.ts:35

## Methods

### createElement

▸ **createElement**<`T`\>(`type`, `props?`, `...children`): [`_ReactElement`](Powership._ReactElement.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`AnyRecord`](../modules/Powership.TU.md#anyrecord) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `props?` | `T` |
| `...children` | [`ReactNodeLike`](../modules/Powership.md#reactnodelike)[] |

#### Returns

[`_ReactElement`](Powership._ReactElement.md)

#### Defined in

packages/utils/out/ReactLike.d.ts:40
