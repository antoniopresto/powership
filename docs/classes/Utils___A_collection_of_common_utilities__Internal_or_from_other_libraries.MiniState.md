[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / MiniState

# Class: MiniState<StateValue, Methods\>

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).MiniState

Creates a mini state management system using Immer.
Allows direct mutation of state objects with no side effects, tracking changes with patches.
Useful for scenarios requiring state history tracking, like undo operations.

## Type parameters

| Name | Type |
| :------ | :------ |
| `StateValue` | extends `object` |
| `Methods` | extends `_AnyMethodsRecord` = {} |

## Table of contents

### Constructors

- [constructor](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md#constructor)

### Properties

- [methods](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md#methods)

### Accessors

- [current](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md#current)

### Methods

- [addMiddleware](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md#addmiddleware)
- [connectDevTools](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md#connectdevtools)
- [observe](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md#observe)
- [update](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md#update)
- [withMethods](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md#withmethods)
- [create](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md#create)
- [reactContextFactory](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md#reactcontextfactory)

## Constructors

### constructor

• **new MiniState**<`StateValue`, `Methods`\>(`initial`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `StateValue` | extends `object` |
| `Methods` | extends `_AnyMethodsRecord` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | `StateValue` |

#### Defined in

[packages/utils/src/state/miniState.ts:27](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L27)

## Properties

### methods

• **methods**: `Methods`

#### Defined in

[packages/utils/src/state/miniState.ts:25](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L25)

## Accessors

### current

• `get` **current**(): `StateValue`

#### Returns

`StateValue`

#### Defined in

[packages/utils/src/state/miniState.ts:221](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L221)

## Methods

### addMiddleware

▸ **addMiddleware**(`...items`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | [`StateChangeMiddleware`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#statechangemiddleware)<`StateValue`, `Methods`\>[] |

#### Returns

`this`

#### Defined in

[packages/utils/src/state/miniState.ts:225](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L225)

___

### connectDevTools

▸ **connectDevTools**(`name?`): ``null`` \| `ReduxDevTools`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `'State'` |

#### Returns

``null`` \| `ReduxDevTools`

#### Defined in

[packages/utils/src/state/miniState.ts:245](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L245)

___

### observe

▸ **observe**<`Piece`\>(`picker`, `onChange`): [`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)

Observes changes in a specific part of the state.

#### Type parameters

| Name |
| :------ |
| `Piece` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `picker` | (`state`: `StateValue`) => `Piece` | Function to select the part of the state to observe. |
| `onChange` | [`StatePieceListener`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#statepiecelistener)<`Piece`\> | Callback invoked when the observed part changes. |

#### Returns

[`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)

Unsubscribe function to stop observing the state part.

#### Defined in

[packages/utils/src/state/miniState.ts:37](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L37)

▸ **observe**<`Path`\>(`path`, `onChange`): [`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `Path` |
| `onChange` | [`StatePieceListener`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#statepiecelistener)<[`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`StateValue`, `Path`\>\> |

#### Returns

[`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)

#### Defined in

[packages/utils/src/state/miniState.ts:41](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L41)

___

### update

▸ **update**(`updater`, `_context?`): `StateValue`

Updates the state using a callback

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updater` | (`draft`: `StateValue`) => `void` | Function receiving a mutable draft of the state for updates. |
| `_context?` | `_UpdateContext` |  |

#### Returns

`StateValue`

#### Defined in

[packages/utils/src/state/miniState.ts:62](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L62)

▸ **update**<`Path`\>(`path`, `value`, `_context?`): `StateValue`

Updates the state value in the provided path

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `Path` | dot notation to the object property to change - example: 'user.address.street' |
| `value` | [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`StateValue`, `Path`\> | new value |
| `_context?` | `_UpdateContext` | internal |

#### Returns

`StateValue`

#### Defined in

[packages/utils/src/state/miniState.ts:72](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L72)

___

### withMethods

▸ **withMethods**<`M`\>(`methods`): { [K in string \| number \| symbol]: Parameters<M[K]\> extends [any, Payload] ? Function : Function } extends `Bounded` ? `Bounded` extends {} ? { `current`: `StateValue` ; `methods`: `Bounded` ; `addMiddleware`: (...`items`: [`StateChangeMiddleware`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#statechangemiddleware)<`StateValue`, `Methods`\>[]) => `this` ; `connectDevTools`: (`name`: `string`) => ``null`` \| `ReduxDevTools` ; `observe`: <Piece\>(`picker`: (`state`: `StateValue`) => `Piece`, `onChange`: [`StatePieceListener`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#statepiecelistener)<`Piece`\>) => [`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)<Path\>(`path`: `Path`, `onChange`: [`StatePieceListener`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#statepiecelistener)<[`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`StateValue`, `Path`\>\>) => [`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe) ; `update`: (`updater`: (`draft`: `StateValue`) => `void`, `_context?`: `_UpdateContext`) => `StateValue`<Path\>(`path`: `Path`, `value`: [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`StateValue`, `Path`\>, `_context?`: `_UpdateContext`) => `StateValue` ; `withMethods`: <M\>(`methods`: `M`) => { [K in string \| number \| symbol]: Parameters<M[K]\> extends [any, Payload] ? Function : Function } extends `Bounded` ? `Bounded` extends {} ? { methods: Bounded; observe: { <Piece\>(picker: (state: StateValue) =\> Piece, onChange: StatePieceListener<Piece\>): Unsubscribe; <Path extends Paths<...\>\>(path: Path, onChange: StatePieceListener<...\>): Unsubscribe; }; ... 4 more ...; connectDevTools: (name?: string) =\> ReduxDevTools \| null; } & { [K in string \| number \| symbol]: Bounded[K] } : `never` : `never`  } & { [K in string \| number \| symbol]: Bounded[K] } : `never` : `never`

Binding actions to internal state

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `_MethodsInitializer`<`StateValue`, `M`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `methods` | `M` |

#### Returns

{ [K in string \| number \| symbol]: Parameters<M[K]\> extends [any, Payload] ? Function : Function } extends `Bounded` ? `Bounded` extends {} ? { `current`: `StateValue` ; `methods`: `Bounded` ; `addMiddleware`: (...`items`: [`StateChangeMiddleware`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#statechangemiddleware)<`StateValue`, `Methods`\>[]) => `this` ; `connectDevTools`: (`name`: `string`) => ``null`` \| `ReduxDevTools` ; `observe`: <Piece\>(`picker`: (`state`: `StateValue`) => `Piece`, `onChange`: [`StatePieceListener`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#statepiecelistener)<`Piece`\>) => [`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe)<Path\>(`path`: `Path`, `onChange`: [`StatePieceListener`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#statepiecelistener)<[`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`StateValue`, `Path`\>\>) => [`Unsubscribe`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#unsubscribe) ; `update`: (`updater`: (`draft`: `StateValue`) => `void`, `_context?`: `_UpdateContext`) => `StateValue`<Path\>(`path`: `Path`, `value`: [`PathType`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.TU.md#pathtype)<`StateValue`, `Path`\>, `_context?`: `_UpdateContext`) => `StateValue` ; `withMethods`: <M\>(`methods`: `M`) => { [K in string \| number \| symbol]: Parameters<M[K]\> extends [any, Payload] ? Function : Function } extends `Bounded` ? `Bounded` extends {} ? { methods: Bounded; observe: { <Piece\>(picker: (state: StateValue) =\> Piece, onChange: StatePieceListener<Piece\>): Unsubscribe; <Path extends Paths<...\>\>(path: Path, onChange: StatePieceListener<...\>): Unsubscribe; }; ... 4 more ...; connectDevTools: (name?: string) =\> ReduxDevTools \| null; } & { [K in string \| number \| symbol]: Bounded[K] } : `never` : `never`  } & { [K in string \| number \| symbol]: Bounded[K] } : `never` : `never`

#### Defined in

[packages/utils/src/state/miniState.ts:170](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L170)

___

### create

▸ `Static` **create**<`Value`\>(`initial`): [`MiniState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md)<`Value`, {}\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | `Value` |

#### Returns

[`MiniState`](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.MiniState.md)<`Value`, {}\>

#### Defined in

[packages/utils/src/state/miniState.ts:232](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L232)

___

### reactContextFactory

▸ `Static` **reactContextFactory**(`React`): <Instance, Config\>(`createInstance`: (`config`: `Config`) => `Instance`) => { `Context`: [`_ReactContext`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactContext.md)<`Instance`\> ; `Provider`: (`props`: { `children`: [`ReactNodeLike`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#reactnodelike) ; `devTools?`: `string` \| `boolean` ; `value`: `Config`  }) => [`_ReactElement`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactElement.md) ; `useData`: <Picked\>(`selector`: (`state`: `Value`) => `Picked`) => [`Picked`, `Instance`]() => [``null``, `Instance`]  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `React` | [`ReactLike`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.ReactLike.md) |

#### Returns

`fn`

▸ <`Instance`, `Config`\>(`createInstance`): `Object`

##### Type parameters

| Name |
| :------ |
| `Instance` |
| `Config` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `createInstance` | (`config`: `Config`) => `Instance` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `Context` | [`_ReactContext`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactContext.md)<`Instance`\> |
| `Provider` | (`props`: { `children`: [`ReactNodeLike`](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md#reactnodelike) ; `devTools?`: `string` \| `boolean` ; `value`: `Config`  }) => [`_ReactElement`](../interfaces/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries._ReactElement.md) |
| `useData` | <Picked\>(`selector`: (`state`: `Value`) => `Picked`) => [`Picked`, `Instance`]() => [``null``, `Instance`] |

#### Defined in

[packages/utils/src/state/miniState.ts:272](https://github.com/antoniopresto/powership/blob/2672a73/packages/utils/src/state/miniState.ts#L272)
