[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / ReactLike

# Interface: ReactLike

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).ReactLike

## Table of contents

### Properties

- [createContext](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ReactLike.md#createcontext)
- [useContext](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ReactLike.md#usecontext)
- [useEffect](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ReactLike.md#useeffect)
- [useMemo](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ReactLike.md#usememo)
- [useState](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ReactLike.md#usestate)

### Methods

- [createElement](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ReactLike.md#createelement)

## Properties

### createContext

• **createContext**: <T\>(`initialValue`: `T`) => [`_ReactContext`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactContext.md)<`T`\>

#### Type declaration

▸ <`T`\>(`initialValue`): [`_ReactContext`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactContext.md)<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

##### Returns

[`_ReactContext`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactContext.md)<`T`\>

#### Defined in

[packages/utils/src/ReactLike.ts:50](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/ReactLike.ts#L50)

___

### useContext

• **useContext**: [`AnyFunction`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction)

#### Defined in

[packages/utils/src/ReactLike.ts:51](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/ReactLike.ts#L51)

___

### useEffect

• **useEffect**: [`AnyFunction`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction)

#### Defined in

[packages/utils/src/ReactLike.ts:48](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/ReactLike.ts#L48)

___

### useMemo

• **useMemo**: [`AnyFunction`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction)

#### Defined in

[packages/utils/src/ReactLike.ts:49](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/ReactLike.ts#L49)

___

### useState

• **useState**: [`AnyFunction`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyfunction)

#### Defined in

[packages/utils/src/ReactLike.ts:47](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/ReactLike.ts#L47)

## Methods

### createElement

▸ **createElement**<`T`\>(`type`, `props?`, `...children`): [`_ReactElement`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactElement.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`AnyRecord`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#anyrecord) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `props?` | `T` |
| `...children` | [`ReactNodeLike`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#reactnodelike)[] |

#### Returns

[`_ReactElement`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactElement.md)

#### Defined in

[packages/utils/src/ReactLike.ts:52](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/ReactLike.ts#L52)
