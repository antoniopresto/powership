[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / PluginEngine

# Class: PluginEngine<Events\>

[Powership](../modules/Powership.md).PluginEngine

Class representing a minimalistic Publish-Subscribe system with middleware support.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Events` | extends `Object` | An object type where keys are event names and values are the types of data associated with the events. |

## Table of contents

### Constructors

- [constructor](Powership.PluginEngine.md#constructor)

### Properties

- [on](Powership.PluginEngine.md#on)

### Methods

- [exec](Powership.PluginEngine.md#exec)

## Constructors

### constructor

• **new PluginEngine**<`Events`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends `Object` |

## Properties

### on

• **on**: <EventName\>(`eventName`: `EventName`, `plugin`: [`Plugin`](../modules/Powership.md#plugin)<`Events`[`EventName`]\>) => [`UnsubscribeListener`](../modules/Powership.md#unsubscribelistener)

#### Type declaration

▸ <`EventName`\>(`eventName`, `plugin`): [`UnsubscribeListener`](../modules/Powership.md#unsubscribelistener)

Method to register a new event listener.

##### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EventName` | extends `string` | The name of the event. |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | The name of the event to listen for. |
| `plugin` | [`Plugin`](../modules/Powership.md#plugin)<`Events`[`EventName`]\> | The event handler. will not be awaited to finish before going to the next middleware execution |

##### Returns

[`UnsubscribeListener`](../modules/Powership.md#unsubscribelistener)

- A function to unregister the listener.

#### Defined in

packages/plugin-engine/out/index.d.ts:85

## Methods

### exec

▸ **exec**<`EventName`\>(`eventName`, `data`): `Promise`<`Events`[`EventName`]\>

Method to exec an event and wait for possible data modifications from subscribers.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` | The name of the event. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | The name of the event to exec. |
| `data` | `Events`[`EventName`] | The data associated with the event. |

#### Returns

`Promise`<`Events`[`EventName`]\>

- The potentially modified event data.

#### Defined in

packages/plugin-engine/out/index.d.ts:74
