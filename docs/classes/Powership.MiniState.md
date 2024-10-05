[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / MiniState

# Class: MiniState<StateValue, Methods\>

[Powership](../modules/Powership.md).MiniState

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

- [constructor](Powership.MiniState.md#constructor)

### Properties

- [addMiddleware](Powership.MiniState.md#addmiddleware)
- [connectDevTools](Powership.MiniState.md#connectdevtools)
- [methods](Powership.MiniState.md#methods)
- [withMethods](Powership.MiniState.md#withmethods)
- [create](Powership.MiniState.md#create)
- [reactContextFactory](Powership.MiniState.md#reactcontextfactory)

### Accessors

- [current](Powership.MiniState.md#current)

### Methods

- [observe](Powership.MiniState.md#observe)
- [update](Powership.MiniState.md#update)

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

packages/utils/out/state/miniState.d.ts:14

## Properties

### addMiddleware

• **addMiddleware**: (...`items`: [`StateChangeMiddleware`](../modules/Powership.md#statechangemiddleware)<`StateValue`, `Methods`\>[]) => [`MiniState`](Powership.MiniState.md)<`StateValue`, `Methods`\>

#### Type declaration

▸ (`...items`): [`MiniState`](Powership.MiniState.md)<`StateValue`, `Methods`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | [`StateChangeMiddleware`](../modules/Powership.md#statechangemiddleware)<`StateValue`, `Methods`\>[] |

##### Returns

[`MiniState`](Powership.MiniState.md)<`StateValue`, `Methods`\>

#### Defined in

packages/utils/out/state/miniState.d.ts:57

___

### connectDevTools

• **connectDevTools**: (`name?`: `string`) => ``null`` \| `ReduxDevTools`

#### Type declaration

▸ (`name?`): ``null`` \| `ReduxDevTools`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

##### Returns

``null`` \| `ReduxDevTools`

#### Defined in

packages/utils/out/state/miniState.d.ts:61

___

### methods

• **methods**: `Methods`

#### Defined in

packages/utils/out/state/miniState.d.ts:13

___

### withMethods

• **withMethods**: <M\>(`methods`: `M`) => { [K in string \| number \| symbol]: Parameters<M[K]\> extends [any, Payload] ? Function : Function } extends `Bounded` ? `Bounded` extends {} ? { `addMiddleware`: (...`items`: [`StateChangeMiddleware`](../modules/Powership.md#statechangemiddleware)<`StateValue`, `Bounded`\>[]) => [`MiniState`](Powership.MiniState.md)<`StateValue`, `Bounded`\> ; `connectDevTools`: (`name?`: `string`) => ``null`` \| `ReduxDevTools` ; `current`: `StateValue` ; `methods`: `Bounded` ; `observe`: <Piece\>(`picker`: (`state`: `StateValue`) => `Piece`, `onChange`: [`StatePieceListener`](../modules/Powership.md#statepiecelistener)<`Piece`\>) => [`Unsubscribe`](../modules/Powership.md#unsubscribe)<Path\>(`path`: `Path`, `onChange`: [`StatePieceListener`](../modules/Powership.md#statepiecelistener)<[`PathType`](../modules/Powership.TU.md#pathtype)<`StateValue`, `Path`\>\>) => [`Unsubscribe`](../modules/Powership.md#unsubscribe) ; `update`: (`updater`: (`draft`: `StateValue`) => `void`, `_context?`: `_UpdateContext`) => `StateValue`<Path_1\>(`path`: `Path_1`, `value`: [`PathType`](../modules/Powership.TU.md#pathtype)<`StateValue`, `Path_1`\>, `_context?`: `_UpdateContext`) => `StateValue` ; `withMethods`: <M_1\>(`methods`: `M_1`) => { [K\_3 in string \| number \| symbol]: Parameters<M\_1[K\_3]\> extends [any, Payload] ? Function : Function } extends `Bounded` ? `Bounded` extends {} ? `any` : `never` : `never`  } & { [K\_4 in string \| number \| symbol]: Bounded[K\_4] } : `never` : `never`

#### Type declaration

▸ <`M`\>(`methods`): { [K in string \| number \| symbol]: Parameters<M[K]\> extends [any, Payload] ? Function : Function } extends `Bounded` ? `Bounded` extends {} ? { `addMiddleware`: (...`items`: [`StateChangeMiddleware`](../modules/Powership.md#statechangemiddleware)<`StateValue`, `Bounded`\>[]) => [`MiniState`](Powership.MiniState.md)<`StateValue`, `Bounded`\> ; `connectDevTools`: (`name?`: `string`) => ``null`` \| `ReduxDevTools` ; `current`: `StateValue` ; `methods`: `Bounded` ; `observe`: <Piece\>(`picker`: (`state`: `StateValue`) => `Piece`, `onChange`: [`StatePieceListener`](../modules/Powership.md#statepiecelistener)<`Piece`\>) => [`Unsubscribe`](../modules/Powership.md#unsubscribe)<Path\>(`path`: `Path`, `onChange`: [`StatePieceListener`](../modules/Powership.md#statepiecelistener)<[`PathType`](../modules/Powership.TU.md#pathtype)<`StateValue`, `Path`\>\>) => [`Unsubscribe`](../modules/Powership.md#unsubscribe) ; `update`: (`updater`: (`draft`: `StateValue`) => `void`, `_context?`: `_UpdateContext`) => `StateValue`<Path_1\>(`path`: `Path_1`, `value`: [`PathType`](../modules/Powership.TU.md#pathtype)<`StateValue`, `Path_1`\>, `_context?`: `_UpdateContext`) => `StateValue` ; `withMethods`: <M_1\>(`methods`: `M_1`) => { [K\_3 in string \| number \| symbol]: Parameters<M\_1[K\_3]\> extends [any, Payload] ? Function : Function } extends `Bounded` ? `Bounded` extends {} ? `any` : `never` : `never`  } & { [K\_4 in string \| number \| symbol]: Bounded[K\_4] } : `never` : `never`

Binding actions to internal state

##### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `_MethodsInitializer`<`StateValue`, `M`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `methods` | `M` |

##### Returns

{ [K in string \| number \| symbol]: Parameters<M[K]\> extends [any, Payload] ? Function : Function } extends `Bounded` ? `Bounded` extends {} ? { `addMiddleware`: (...`items`: [`StateChangeMiddleware`](../modules/Powership.md#statechangemiddleware)<`StateValue`, `Bounded`\>[]) => [`MiniState`](Powership.MiniState.md)<`StateValue`, `Bounded`\> ; `connectDevTools`: (`name?`: `string`) => ``null`` \| `ReduxDevTools` ; `current`: `StateValue` ; `methods`: `Bounded` ; `observe`: <Piece\>(`picker`: (`state`: `StateValue`) => `Piece`, `onChange`: [`StatePieceListener`](../modules/Powership.md#statepiecelistener)<`Piece`\>) => [`Unsubscribe`](../modules/Powership.md#unsubscribe)<Path\>(`path`: `Path`, `onChange`: [`StatePieceListener`](../modules/Powership.md#statepiecelistener)<[`PathType`](../modules/Powership.TU.md#pathtype)<`StateValue`, `Path`\>\>) => [`Unsubscribe`](../modules/Powership.md#unsubscribe) ; `update`: (`updater`: (`draft`: `StateValue`) => `void`, `_context?`: `_UpdateContext`) => `StateValue`<Path_1\>(`path`: `Path_1`, `value`: [`PathType`](../modules/Powership.TU.md#pathtype)<`StateValue`, `Path_1`\>, `_context?`: `_UpdateContext`) => `StateValue` ; `withMethods`: <M_1\>(`methods`: `M_1`) => { [K\_3 in string \| number \| symbol]: Parameters<M\_1[K\_3]\> extends [any, Payload] ? Function : Function } extends `Bounded` ? `Bounded` extends {} ? `any` : `never` : `never`  } & { [K\_4 in string \| number \| symbol]: Bounded[K\_4] } : `never` : `never`

#### Defined in

packages/utils/out/state/miniState.d.ts:41

___

### create

▪ `Static` **create**: <Value\>(`initial`: `Value`) => [`MiniState`](Powership.MiniState.md)<`Value`, {}\>

#### Type declaration

▸ <`Value`\>(`initial`): [`MiniState`](Powership.MiniState.md)<`Value`, {}\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends `object` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | `Value` |

##### Returns

[`MiniState`](Powership.MiniState.md)<`Value`, {}\>

#### Defined in

packages/utils/out/state/miniState.d.ts:58

___

### reactContextFactory

▪ `Static` **reactContextFactory**: (`React`: [`ReactLike`](../interfaces/Powership.ReactLike.md)) => <Instance, Config\>(`createInstance`: (`config`: `Config`) => `Instance`) => { `Context`: [`_ReactContext`](../interfaces/Powership._ReactContext.md)<`Instance`\> ; `Provider`: (`props`: { `children`: [`ReactNodeLike`](../modules/Powership.md#reactnodelike) ; `devTools?`: `string` \| `boolean` ; `value`: `Config`  }) => [`_ReactElement`](../interfaces/Powership._ReactElement.md) ; `useData`: <Picked\>(`selector`: (`state`: `Instance` extends { `current`: `R`  } ? `R` : `never`) => `Picked`) => [`Picked`, `Instance`]() => [``null``, `Instance`]  }

#### Type declaration

▸ (`React`): <Instance, Config\>(`createInstance`: (`config`: `Config`) => `Instance`) => { `Context`: [`_ReactContext`](../interfaces/Powership._ReactContext.md)<`Instance`\> ; `Provider`: (`props`: { `children`: [`ReactNodeLike`](../modules/Powership.md#reactnodelike) ; `devTools?`: `string` \| `boolean` ; `value`: `Config`  }) => [`_ReactElement`](../interfaces/Powership._ReactElement.md) ; `useData`: <Picked\>(`selector`: (`state`: `Instance` extends { `current`: `R`  } ? `R` : `never`) => `Picked`) => [`Picked`, `Instance`]() => [``null``, `Instance`]  }

##### Parameters

| Name | Type |
| :------ | :------ |
| `React` | [`ReactLike`](../interfaces/Powership.ReactLike.md) |

##### Returns

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
| `Context` | [`_ReactContext`](../interfaces/Powership._ReactContext.md)<`Instance`\> |
| `Provider` | (`props`: { `children`: [`ReactNodeLike`](../modules/Powership.md#reactnodelike) ; `devTools?`: `string` \| `boolean` ; `value`: `Config`  }) => [`_ReactElement`](../interfaces/Powership._ReactElement.md) |
| `useData` | <Picked\>(`selector`: (`state`: `Instance` extends { `current`: `R`  } ? `R` : `never`) => `Picked`) => [`Picked`, `Instance`]() => [``null``, `Instance`] |

#### Defined in

packages/utils/out/state/miniState.d.ts:62

## Accessors

### current

• `get` **current**(): `StateValue`

#### Returns

`StateValue`

#### Defined in

packages/utils/out/state/miniState.d.ts:56

## Methods

### observe

▸ **observe**<`Piece`\>(`picker`, `onChange`): [`Unsubscribe`](../modules/Powership.md#unsubscribe)

Observes changes in a specific part of the state.

#### Type parameters

| Name |
| :------ |
| `Piece` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `picker` | (`state`: `StateValue`) => `Piece` | Function to select the part of the state to observe. |
| `onChange` | [`StatePieceListener`](../modules/Powership.md#statepiecelistener)<`Piece`\> | Callback invoked when the observed part changes. |

#### Returns

[`Unsubscribe`](../modules/Powership.md#unsubscribe)

Unsubscribe function to stop observing the state part.

#### Defined in

packages/utils/out/state/miniState.d.ts:21

▸ **observe**<`Path`\>(`path`, `onChange`): [`Unsubscribe`](../modules/Powership.md#unsubscribe)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `Path` |
| `onChange` | [`StatePieceListener`](../modules/Powership.md#statepiecelistener)<[`PathType`](../modules/Powership.TU.md#pathtype)<`StateValue`, `Path`\>\> |

#### Returns

[`Unsubscribe`](../modules/Powership.md#unsubscribe)

#### Defined in

packages/utils/out/state/miniState.d.ts:22

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

packages/utils/out/state/miniState.d.ts:28

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
| `value` | [`PathType`](../modules/Powership.TU.md#pathtype)<`StateValue`, `Path`\> | new value |
| `_context?` | `_UpdateContext` | internal |

#### Returns

`StateValue`

#### Defined in

packages/utils/out/state/miniState.d.ts:35
