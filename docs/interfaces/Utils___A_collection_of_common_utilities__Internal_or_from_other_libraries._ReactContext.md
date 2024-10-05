[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / \_ReactContext

# Interface: \_ReactContext<T\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md)._ReactContext

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [Consumer](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactContext.md#consumer)
- [Provider](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactContext.md#provider)
- [displayName](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactContext.md#displayname)

## Properties

### Consumer

• **Consumer**: [`_ExoticComponent`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ExoticComponent.md)<{ `children`: (`value`: `T`) => [`ReactNodeLike`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#reactnodelike)  }\>

#### Defined in

[packages/utils/src/ReactLike.ts:34](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/ReactLike.ts#L34)

___

### Provider

• **Provider**: [`_ExoticComponent`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ExoticComponent.md)<[`_PropsWithChildren`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#_propswithchildren)<{ `value`: `T`  }\>\>

#### Defined in

[packages/utils/src/ReactLike.ts:33](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/ReactLike.ts#L33)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[packages/utils/src/ReactLike.ts:35](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/ReactLike.ts#L35)
