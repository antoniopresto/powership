[Powership](../README.md) / [Modules](../modules.md) / [Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md) / PackageJson

# Interface: PackageJson

[Utils - A collection of common utilities. Internal or from other libraries](../modules/Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.md).PackageJson

## Indexable

▪ [K: `string`]: `unknown`

## Table of contents

### Properties

- [bin](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#bin)
- [builders](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#builders)
- [dependencies](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#dependencies)
- [devDependencies](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#devdependencies)
- [executors](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#executors)
- [exports](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#exports)
- [generators](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#generators)
- [main](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#main)
- [module](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#module)
- [name](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#name)
- [peerDependencies](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#peerdependencies)
- [schematics](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#schematics)
- [scripts](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#scripts)
- [type](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#type)
- [types](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#types)
- [version](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#version)
- [workspaces](Utils___A_collection_of_common_utilities__Internal_or_from_other_libraries.PackageJson.md#workspaces)

## Properties

### bin

• `Optional` **bin**: `Record`<`string`, `string`\>

#### Defined in

packages/utils/src/PackageJson.ts:20

___

### builders

• `Optional` **builders**: `string`

#### Defined in

packages/utils/src/PackageJson.ts:28

___

### dependencies

• `Optional` **dependencies**: `Record`<`string`, `string`\>

#### Defined in

packages/utils/src/PackageJson.ts:17

___

### devDependencies

• `Optional` **devDependencies**: `Record`<`string`, `string`\>

#### Defined in

packages/utils/src/PackageJson.ts:18

___

### executors

• `Optional` **executors**: `string`

#### Defined in

packages/utils/src/PackageJson.ts:29

___

### exports

• `Optional` **exports**: `Record`<`string`, { `import?`: `string` ; `require?`: `string` ; `types?`: `string`  }\>

#### Defined in

packages/utils/src/PackageJson.ts:9

___

### generators

• `Optional` **generators**: `string`

#### Defined in

packages/utils/src/PackageJson.ts:26

___

### main

• `Optional` **main**: `string`

#### Defined in

packages/utils/src/PackageJson.ts:6

___

### module

• `Optional` **module**: `string`

#### Defined in

packages/utils/src/PackageJson.ts:8

___

### name

• **name**: `string`

#### Defined in

packages/utils/src/PackageJson.ts:2

___

### peerDependencies

• `Optional` **peerDependencies**: `Record`<`string`, `string`\>

#### Defined in

packages/utils/src/PackageJson.ts:19

___

### schematics

• `Optional` **schematics**: `string`

#### Defined in

packages/utils/src/PackageJson.ts:27

___

### scripts

• `Optional` **scripts**: `Record`<`string`, `string`\>

#### Defined in

packages/utils/src/PackageJson.ts:4

___

### type

• `Optional` **type**: ``"module"`` \| ``"commonjs"``

#### Defined in

packages/utils/src/PackageJson.ts:5

___

### types

• `Optional` **types**: `string`

#### Defined in

packages/utils/src/PackageJson.ts:7

___

### version

• **version**: `string`

#### Defined in

packages/utils/src/PackageJson.ts:3

___

### workspaces

• `Optional` **workspaces**: `string`[] \| { `packages`: `string`[]  }

#### Defined in

packages/utils/src/PackageJson.ts:21
