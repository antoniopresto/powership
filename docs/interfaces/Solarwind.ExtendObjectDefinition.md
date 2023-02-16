[Solarwind](../README.md) / [Modules](../modules.md) / [Solarwind](../modules/Solarwind.md) / ExtendObjectDefinition

# Interface: ExtendObjectDefinition<Input, Origin\>

[Solarwind](../modules/Solarwind.md).ExtendObjectDefinition

## Type parameters

| Name |
| :------ |
| `Input` |
| `Origin` |

## Table of contents

### Properties

- [definition](Solarwind.ExtendObjectDefinition.md#definition)

### Methods

- [def](Solarwind.ExtendObjectDefinition.md#def)
- [exclude](Solarwind.ExtendObjectDefinition.md#exclude)
- [extendObjectDefinition](Solarwind.ExtendObjectDefinition.md#extendobjectdefinition)
- [graphType](Solarwind.ExtendObjectDefinition.md#graphtype)
- [objectType](Solarwind.ExtendObjectDefinition.md#objecttype)
- [only](Solarwind.ExtendObjectDefinition.md#only)
- [optional](Solarwind.ExtendObjectDefinition.md#optional)
- [required](Solarwind.ExtendObjectDefinition.md#required)

## Properties

### definition

• **definition**: [`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:7

## Methods

### def

▸ **def**(): [`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>

#### Returns

[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:8

___

### exclude

▸ **exclude**<`K`\>(`keys`): [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: `Omit`<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: `Omit`<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:9

___

### extendObjectDefinition

▸ **extendObjectDefinition**<`V`\>(`value`): [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: `Merge`<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, [`DescribeObjectDefinition`](../modules/Solarwind.md#describeobjectdefinition)<`V`\>, ``"flat"``, `BuiltIn`, `undefined`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`ObjectDefinitionInput`](Solarwind.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>) => `V` |

#### Returns

[`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: `Merge`<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, [`DescribeObjectDefinition`](../modules/Solarwind.md#describeobjectdefinition)<`V`\>, ``"flat"``, `BuiltIn`, `undefined`\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:12

___

### graphType

▸ **graphType**(`name`): [`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: [`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GraphType`](../classes/Solarwind.GraphType.md)<{ `object`: [`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>  }\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:15

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Solarwind.ObjectType.md)<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, `_HandleInput`<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Solarwind.ObjectType.md)<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, `_HandleInput`<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>\>\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:18

___

### only

▸ **only**<`K`\>(`keys`): [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:19

___

### optional

▸ **optional**(): [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, { `optional`: ``true``  }\>  }, `Origin`\>

#### Returns

[`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, { `optional`: ``true``  }\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:22

▸ **optional**<`Op`\>(`keys`): [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, `Op`, { `optional`: ``true``  }\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Op` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Op` \| `Op`[] |

#### Returns

[`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, `Op`, { `optional`: ``true``  }\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:25

___

### required

▸ **required**(): [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, { `optional`: ``false``  }\>  }, `Origin`\>

#### Returns

[`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, { `optional`: ``false``  }\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:28

▸ **required**<`Op`\>(`keys`): [`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, `Op`, { `optional`: ``false``  }\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Op` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Op` \| `Op`[] |

#### Returns

[`ExtendObjectDefinition`](Solarwind.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Solarwind.md#overridefield)<[`InnerDef`](../modules/Solarwind.md#innerdef)<`Input`\>, `Op`, { `optional`: ``false``  }\>  }, `Origin`\>

#### Defined in

packages/schema/lib/extendObjectDefinition.d.ts:31
