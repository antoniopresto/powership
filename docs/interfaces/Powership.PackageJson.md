[Powership](../README.md) / [Modules](../modules.md) / [Powership](../modules/Powership.md) / PackageJson

# Interface: PackageJson

[Powership](../modules/Powership.md).PackageJson

## Indexable

▪ [K: `string`]: `unknown`

## Table of contents

### Properties

- [bin](Powership.PackageJson.md#bin)
- [builders](Powership.PackageJson.md#builders)
- [dependencies](Powership.PackageJson.md#dependencies)
- [devDependencies](Powership.PackageJson.md#devdependencies)
- [executors](Powership.PackageJson.md#executors)
- [exports](Powership.PackageJson.md#exports)
- [generators](Powership.PackageJson.md#generators)
- [main](Powership.PackageJson.md#main)
- [module](Powership.PackageJson.md#module)
- [name](Powership.PackageJson.md#name)
- [peerDependencies](Powership.PackageJson.md#peerdependencies)
- [schematics](Powership.PackageJson.md#schematics)
- [scripts](Powership.PackageJson.md#scripts)
- [type](Powership.PackageJson.md#type)
- [types](Powership.PackageJson.md#types)
- [version](Powership.PackageJson.md#version)
- [workspaces](Powership.PackageJson.md#workspaces)

## Properties

### bin

• `Optional` **bin**: `Record`<`string`, `string`\>

#### Defined in

packages/utils/lib/PackageJson.d.ts:17

___

### builders

• `Optional` **builders**: `string`

#### Defined in

packages/utils/lib/PackageJson.d.ts:23

___

### dependencies

• `Optional` **dependencies**: `Record`<`string`, `string`\>

#### Defined in

packages/utils/lib/PackageJson.d.ts:14

___

### devDependencies

• `Optional` **devDependencies**: `Record`<`string`, `string`\>

#### Defined in

packages/utils/lib/PackageJson.d.ts:15

___

### executors

• `Optional` **executors**: `string`

#### Defined in

packages/utils/lib/PackageJson.d.ts:24

___

### exports

• `Optional` **exports**: `Record`<`string`, { `import?`: `string` ; `require?`: `string` ; `types?`: `string`  }\>

#### Defined in

packages/utils/lib/PackageJson.d.ts:9

___

### generators

• `Optional` **generators**: `string`

#### Defined in

packages/utils/lib/PackageJson.d.ts:21

___

### main

• `Optional` **main**: `string`

#### Defined in

packages/utils/lib/PackageJson.d.ts:6

___

### module

• `Optional` **module**: `string`

#### Defined in

packages/utils/lib/PackageJson.d.ts:8

___

### name

• **name**: `string`

#### Defined in

packages/utils/lib/PackageJson.d.ts:2

___

### peerDependencies

• `Optional` **peerDependencies**: `Record`<`string`, `string`\>

#### Defined in

packages/utils/lib/PackageJson.d.ts:16

___

### schematics

• `Optional` **schematics**: `string`

#### Defined in

packages/utils/lib/PackageJson.d.ts:22

___

### scripts

• `Optional` **scripts**: `Record`<`string`, `string`\>

#### Defined in

packages/utils/lib/PackageJson.d.ts:4

___

### type

• `Optional` **type**: ``"module"`` \| ``"commonjs"``

#### Defined in

packages/utils/lib/PackageJson.d.ts:5

___

### types

• `Optional` **types**: `string`

#### Defined in

packages/utils/lib/PackageJson.d.ts:7

___

### version

• **version**: `string`

#### Defined in

packages/utils/lib/PackageJson.d.ts:3

___

### workspaces

• `Optional` **workspaces**: `string`[] \| { `packages`: `string`[]  }

#### Defined in

packages/utils/lib/PackageJson.d.ts:18
