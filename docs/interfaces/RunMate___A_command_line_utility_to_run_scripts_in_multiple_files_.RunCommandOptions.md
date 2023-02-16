[Solarwind](../README.md) / [Modules](../modules.md) / [RunMate - A command line utility to run scripts in multiple files.](../modules/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md) / RunCommandOptions

# Interface: RunCommandOptions

[RunMate - A command line utility to run scripts in multiple files.](../modules/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md).RunCommandOptions

## Table of contents

### Properties

- [command](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandOptions.md#command)
- [plugin](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandOptions.md#plugin)

## Properties

### command

• **command**: `string`

#### Defined in

[packages/runmate/src/runCommand.ts:11](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/runCommand.ts#L11)

___

### plugin

• `Optional` **plugin**: (`hooks`: [`RunCommandHooks`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandHooks.md)) => `any`

#### Type declaration

▸ (`hooks`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `hooks` | [`RunCommandHooks`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandHooks.md) |

##### Returns

`any`

#### Defined in

[packages/runmate/src/runCommand.ts:12](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/runCommand.ts#L12)
