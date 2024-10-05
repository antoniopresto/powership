[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / ExtendObjectDefinition

# Interface: ExtendObjectDefinition<Input, Origin\>

[Powership](../modules/Powership.md).ExtendObjectDefinition

## Type parameters

| Name |
| :------ |
| `Input` |
| `Origin` |

## Table of contents

### Properties

- [definition](Powership.ExtendObjectDefinition.md#definition)

### Methods

- [def](Powership.ExtendObjectDefinition.md#def)
- [exclude](Powership.ExtendObjectDefinition.md#exclude)
- [extendObjectDefinition](Powership.ExtendObjectDefinition.md#extendobjectdefinition)
- [graphType](Powership.ExtendObjectDefinition.md#graphtype)
- [objectType](Powership.ExtendObjectDefinition.md#objecttype)
- [only](Powership.ExtendObjectDefinition.md#only)
- [optional](Powership.ExtendObjectDefinition.md#optional)
- [pick](Powership.ExtendObjectDefinition.md#pick)
- [required](Powership.ExtendObjectDefinition.md#required)

## Properties

### definition

• **definition**: [`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:7

## Methods

### def

▸ **def**(): [`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>

#### Returns

[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:8

___

### exclude

▸ **exclude**<`K`\>(`keys`): [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: `Omit`<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: `Omit`<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:9

___

### extendObjectDefinition

▸ **extendObjectDefinition**<`V`\>(`value`): [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`Merge`](../modules/Powership.TU.T.md#merge)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, [`DescribeObjectDefinition`](../modules/Powership.md#describeobjectdefinition)<`V`\>, ``"flat"``, `BuiltIn`, `undefined`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`ObjectDefinitionInput`](../modules/Powership.md#objectdefinitioninput) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>) => `V` |

#### Returns

[`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`Merge`](../modules/Powership.TU.T.md#merge)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, [`DescribeObjectDefinition`](../modules/Powership.md#describeobjectdefinition)<`V`\>, ``"flat"``, `BuiltIn`, `undefined`\>  }, `Origin`\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:12

___

### graphType

▸ **graphType**(`name`): [`GraphType`](../classes/Powership.GraphType.md)<{ `object`: [`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GraphType`](../classes/Powership.GraphType.md)<{ `object`: [`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>  }\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:15

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Powership.ObjectType.md)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `_HandleInput`<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Powership.ObjectType.md)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `_HandleInput`<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>\>\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:18

___

### only

▸ **only**<`K`\>(`keys`): [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:19

___

### optional

▸ **optional**(): [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, { `optional`: ``true``  }\>  }, `Origin`\>

#### Returns

[`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, { `optional`: ``true``  }\>  }, `Origin`\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:29

▸ **optional**<`Op`\>(`keys`): [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `Op`, { `optional`: ``true``  }\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Op` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Op` \| `Op`[] |

#### Returns

[`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `Op`, { `optional`: ``true``  }\>  }, `Origin`\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:32

___

### pick

▸ **pick**<`K`\>(`keys`): [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

Alias to `only`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:26

___

### required

▸ **required**(): [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, { `optional`: ``false``  }\>  }, `Origin`\>

#### Returns

[`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, { `optional`: ``false``  }\>  }, `Origin`\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:35

▸ **required**<`Op`\>(`keys`): [`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `Op`, { `optional`: ``false``  }\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Op` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Op` \| `Op`[] |

#### Returns

[`ExtendObjectDefinition`](Powership.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Powership.md#overridefield)<[`InnerDef`](../modules/Powership.md#innerdef)<`Input`\>, `Op`, { `optional`: ``false``  }\>  }, `Origin`\>

#### Defined in

packages/schema/out/extendObjectDefinition.d.ts:38
