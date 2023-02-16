[Backland](../README.md) / [Modules](../modules.md) / [Backland](../modules/Backland.md) / ExtendObjectDefinition

# Interface: ExtendObjectDefinition<Input, Origin\>

[Backland](../modules/Backland.md).ExtendObjectDefinition

## Type parameters

| Name |
| :------ |
| `Input` |
| `Origin` |

## Table of contents

### Properties

- [definition](Backland.ExtendObjectDefinition.md#definition)

### Methods

- [def](Backland.ExtendObjectDefinition.md#def)
- [exclude](Backland.ExtendObjectDefinition.md#exclude)
- [extendObjectDefinition](Backland.ExtendObjectDefinition.md#extendobjectdefinition)
- [graphType](Backland.ExtendObjectDefinition.md#graphtype)
- [objectType](Backland.ExtendObjectDefinition.md#objecttype)
- [only](Backland.ExtendObjectDefinition.md#only)
- [optional](Backland.ExtendObjectDefinition.md#optional)
- [required](Backland.ExtendObjectDefinition.md#required)

## Properties

### definition

• **definition**: [`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:7

## Methods

### def

▸ **def**(): [`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>

#### Returns

[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:8

___

### exclude

▸ **exclude**<`K`\>(`keys`): [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: `Omit`<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: `Omit`<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:9

___

### extendObjectDefinition

▸ **extendObjectDefinition**<`V`\>(`value`): [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: `Merge`<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, [`DescribeObjectDefinition`](../modules/Backland.md#describeobjectdefinition)<`V`\>, ``"flat"``, `BuiltIn`, `undefined`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`ObjectDefinitionInput`](Backland.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>) => `V` |

#### Returns

[`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: `Merge`<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, [`DescribeObjectDefinition`](../modules/Backland.md#describeobjectdefinition)<`V`\>, ``"flat"``, `BuiltIn`, `undefined`\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:12

___

### graphType

▸ **graphType**(`name`): [`GraphType`](../classes/Backland.GraphType.md)<{ `object`: [`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GraphType`](../classes/Backland.GraphType.md)<{ `object`: [`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>  }\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:15

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Backland.ObjectType.md)<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, `_HandleInput`<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Backland.ObjectType.md)<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, `_HandleInput`<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>\>\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:18

___

### only

▸ **only**<`K`\>(`keys`): [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:19

___

### optional

▸ **optional**(): [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, { `optional`: ``true``  }\>  }, `Origin`\>

#### Returns

[`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, { `optional`: ``true``  }\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:22

▸ **optional**<`Op`\>(`keys`): [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, `Op`, { `optional`: ``true``  }\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Op` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Op` \| `Op`[] |

#### Returns

[`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, `Op`, { `optional`: ``true``  }\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:25

___

### required

▸ **required**(): [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, { `optional`: ``false``  }\>  }, `Origin`\>

#### Returns

[`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, { `optional`: ``false``  }\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:28

▸ **required**<`Op`\>(`keys`): [`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, `Op`, { `optional`: ``false``  }\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Op` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Op` \| `Op`[] |

#### Returns

[`ExtendObjectDefinition`](Backland.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland.md#overridefield)<[`InnerDef`](../modules/Backland.md#innerdef)<`Input`\>, `Op`, { `optional`: ``false``  }\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:31
