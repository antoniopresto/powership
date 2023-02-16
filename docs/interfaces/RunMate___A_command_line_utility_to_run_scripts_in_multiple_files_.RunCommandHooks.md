[Solarwind](../README.md) / [Modules](../modules.md) / [RunMate - A command line utility to run scripts in multiple files.](../modules/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md) / RunCommandHooks

# Interface: RunCommandHooks

[RunMate - A command line utility to run scripts in multiple files.](../modules/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md).RunCommandHooks

## Table of contents

### Properties

- [onClose](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandHooks.md#onclose)
- [onError](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandHooks.md#onerror)
- [onStderrData](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandHooks.md#onstderrdata)
- [onStdoutData](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandHooks.md#onstdoutdata)
- [started](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandHooks.md#started)
- [willStart](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandHooks.md#willstart)

## Properties

### onClose

• **onClose**: `Waterfall`<{ `code`: ``null`` \| `number`  }, `ChildProcess`\>

#### Defined in

[packages/runmate/src/runCommand.ts:137](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/runCommand.ts#L137)

___

### onError

• **onError**: `Waterfall`<{ `error`: `Error`  }, ``null`` \| `ChildProcess`\>

#### Defined in

[packages/runmate/src/runCommand.ts:138](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/runCommand.ts#L138)

___

### onStderrData

• **onStderrData**: `Waterfall`<{ `data`: `string`  }, `ChildProcess`\>

#### Defined in

[packages/runmate/src/runCommand.ts:136](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/runCommand.ts#L136)

___

### onStdoutData

• **onStdoutData**: `Waterfall`<{ `data`: `string`  }, `ChildProcess`\>

#### Defined in

[packages/runmate/src/runCommand.ts:135](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/runCommand.ts#L135)

___

### started

• **started**: `Waterfall`<`ChildProcess`, { `command`: `string`  }\>

#### Defined in

[packages/runmate/src/runCommand.ts:134](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/runCommand.ts#L134)

___

### willStart

• **willStart**: `Waterfall`<{ `command`: `string`  }, `undefined`\>

#### Defined in

[packages/runmate/src/runCommand.ts:133](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/runCommand.ts#L133)
