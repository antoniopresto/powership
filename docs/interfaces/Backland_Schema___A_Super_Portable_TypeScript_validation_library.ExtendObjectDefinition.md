[Backland](../README.md) / [Modules](../modules.md) / [Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md) / ExtendObjectDefinition

# Interface: ExtendObjectDefinition<Input, Origin\>

[Backland Schema - A Super Portable TypeScript validation library](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md).ExtendObjectDefinition

## Type parameters

| Name |
| :------ |
| `Input` |
| `Origin` |

## Table of contents

### Properties

- [definition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#definition)

### Methods

- [def](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#def)
- [exclude](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#exclude)
- [extendObjectDefinition](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#extendobjectdefinition)
- [graphType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#graphtype)
- [objectType](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#objecttype)
- [only](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#only)
- [optional](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#optional)
- [required](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md#required)

## Properties

### definition

• **definition**: [`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:30](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L30)

## Methods

### def

▸ **def**(): [`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>

#### Returns

[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:32](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L32)

___

### exclude

▸ **exclude**<`K`\>(`keys`): [`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Omit`<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Omit`<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:34](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L34)

___

### extendObjectDefinition

▸ **extendObjectDefinition**<`V`\>(`value`): [`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Merge`<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, [`DescribeObjectDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeobjectdefinition)<`V`\>, ``"flat"``, `BuiltIn`, `undefined`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`ObjectDefinitionInput`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectDefinitionInput.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` \| (`current`: [`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>) => `V` |

#### Returns

[`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Merge`<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, [`DescribeObjectDefinition`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#describeobjectdefinition)<`V`\>, ``"flat"``, `BuiltIn`, `undefined`\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:38](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L38)

___

### graphType

▸ **graphType**(`name`): [`GraphType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<{ `object`: [`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GraphType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.GraphType.md)<{ `object`: [`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>  }\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:45](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L45)

___

### objectType

▸ **objectType**(`name?`): [`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `_HandleInput`<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`ObjectType`](../classes/Backland_Schema___A_Super_Portable_TypeScript_validation_library.ObjectType.md)<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `_HandleInput`<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>\>\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:47](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L47)

___

### only

▸ **only**<`K`\>(`keys`): [`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K` \| `K`[] |

#### Returns

[`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: `Pick`<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `K`\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:49](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L49)

___

### optional

▸ **optional**(): [`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, { `optional`: ``true``  }\>  }, `Origin`\>

#### Returns

[`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, { `optional`: ``true``  }\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:53](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L53)

▸ **optional**<`Op`\>(`keys`): [`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `Op`, { `optional`: ``true``  }\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Op` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Op` \| `Op`[] |

#### Returns

[`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `Op`, { `optional`: ``true``  }\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:58](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L58)

___

### required

▸ **required**(): [`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, { `optional`: ``false``  }\>  }, `Origin`\>

#### Returns

[`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, keyof [`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, { `optional`: ``false``  }\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:65](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L65)

▸ **required**<`Op`\>(`keys`): [`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `Op`, { `optional`: ``false``  }\>  }, `Origin`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Op` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Op` \| `Op`[] |

#### Returns

[`ExtendObjectDefinition`](Backland_Schema___A_Super_Portable_TypeScript_validation_library.ExtendObjectDefinition.md)<{ `object`: [`OverrideField`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#overridefield)<[`InnerDef`](../modules/Backland_Schema___A_Super_Portable_TypeScript_validation_library.md#innerdef)<`Input`\>, `Op`, { `optional`: ``false``  }\>  }, `Origin`\>

#### Defined in

[packages/schema/src/extendObjectDefinition.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/schema/src/extendObjectDefinition.ts#L70)
