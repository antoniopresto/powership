[Powership](../README.md) / [Modules](../modules.md) / RunMate - A command line utility to run scripts in multiple files.

# Module: RunMate - A command line utility to run scripts in multiple files.

## Table of contents

### Interfaces

- [PackageJson](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageJson.md)
- [PackageRunOptions](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunOptions.md)
- [PackageRunner](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunner.md)
- [PackageRunnerOptions](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunnerOptions.md)
- [PackageRunnerResult](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunnerResult.md)
- [PackageRunnerRun](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunnerRun.md)
- [RunCommandHooks](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandHooks.md)
- [RunCommandOptions](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandOptions.md)
- [RunCommandResult](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandResult.md)
- [RunInFilesOptions](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunInFilesOptions.md)

### Type Aliases

- [PackageRunnerUtils](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md#packagerunnerutils)

### Variables

- [runmateLogger](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md#runmatelogger)

### Functions

- [clearPackageRunnerCache](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md#clearpackagerunnercache)
- [getPackageRunnerUtils](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md#getpackagerunnerutils)
- [packageRunner](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md#packagerunner)
- [reduceObject](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md#reduceobject)
- [runCommand](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md#runcommand)
- [runInFiles](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md#runinfiles)

## Type Aliases

### PackageRunnerUtils

Ƭ **PackageRunnerUtils**: `ReturnType`<typeof [`getPackageRunnerUtils`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md#getpackagerunnerutils)\>

#### Defined in

packages/runmate/src/packageRunner.ts:57

## Variables

### runmateLogger

• `Const` **runmateLogger**: `LogStorm`

#### Defined in

packages/runmate/src/runmateLogger.ts:5

## Functions

### clearPackageRunnerCache

▸ **clearPackageRunnerCache**(): `void`

#### Returns

`void`

#### Defined in

packages/runmate/src/packageRunner.ts:15

___

### getPackageRunnerUtils

▸ **getPackageRunnerUtils**(`jsonPath`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonPath` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `author?` | `string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string`  } |
| `basename` | `string` |
| `cwd` | `string` |
| `data` | `string`[] |
| `dependencies?` | { `[dependencyName: string]`: `string`;  } |
| `description?` | `string` |
| `devDependencies?` | { `[dependencyName: string]`: `string`;  } |
| `json` | [`PackageJson`](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageJson.md) |
| `keywords?` | `string`[] |
| `license?` | `string` |
| `name` | `string` |
| `names` | `Set`<`string`\> |
| `optionalDependencies?` | { `[dependencyName: string]`: `string`;  } |
| `peerDependencies?` | { `[dependencyName: string]`: `string`;  } |
| `repository?` | `string` \| { `type`: `string` ; `url`: `string`  } |
| `scripts?` | { `[scriptName: string]`: `string`;  } |
| `version` | `string` |
| `run` | (`command`: `string`) => `Promise`<[`RunCommandResult`](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandResult.md)\> |
| `saveJSON` | () => `void` |

#### Defined in

packages/runmate/src/packageRunner.ts:19

___

### packageRunner

▸ **packageRunner**(`pattern`, `options?`): `Promise`<[`PackageRunner`](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunner.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `options` | [`PackageRunnerOptions`](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunnerOptions.md) |

#### Returns

`Promise`<[`PackageRunner`](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunner.md)\>

#### Defined in

packages/runmate/src/packageRunner.ts:89

___

### reduceObject

▸ **reduceObject**<`Result`, `O`\>(`items`, `reducer`): `Result`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Result` | `Result` |
| `O` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `O`[] |
| `reducer` | (`object`: `O`) => `Partial`<`Result`\> |

#### Returns

`Result`

#### Defined in

packages/runmate/src/packageRunner.ts:214

___

### runCommand

▸ **runCommand**(`options`, `execOptions?`): `Promise`<[`RunCommandResult`](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| [`RunCommandOptions`](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandOptions.md) |
| `execOptions?` | `ExecOptions` |

#### Returns

`Promise`<[`RunCommandResult`](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandResult.md)\>

#### Defined in

packages/runmate/src/runCommand.ts:20

___

### runInFiles

▸ **runInFiles**(`options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RunInFilesOptions`](../interfaces/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunInFilesOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/runmate/src/runInFiles.ts:16
