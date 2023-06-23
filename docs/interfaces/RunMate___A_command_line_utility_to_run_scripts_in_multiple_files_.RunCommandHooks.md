[Powership](../README.md) / [Modules](../modules.md) / [RunMate - A command line utility to run scripts in multiple files.](../modules/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md) / RunCommandHooks

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

• **onClose**: `AsyncPlugin`<{ `code`: ``null`` \| `number`  }, `ChildProcess`\>

#### Defined in

packages/runmate/src/runCommand.ts:147

___

### onError

• **onError**: `AsyncPlugin`<{ `error`: `Error`  }, ``null`` \| `ChildProcess`\>

#### Defined in

packages/runmate/src/runCommand.ts:148

___

### onStderrData

• **onStderrData**: `AsyncPlugin`<{ `data`: `string`  }, `ChildProcess`\>

#### Defined in

packages/runmate/src/runCommand.ts:146

___

### onStdoutData

• **onStdoutData**: `AsyncPlugin`<{ `data`: `string`  }, `ChildProcess`\>

#### Defined in

packages/runmate/src/runCommand.ts:145

___

### started

• **started**: `AsyncPlugin`<`ChildProcess`, { `command`: `string`  }\>

#### Defined in

packages/runmate/src/runCommand.ts:144

___

### willStart

• **willStart**: `AsyncPlugin`<{ `command`: `string`  }, `undefined`\>

#### Defined in

packages/runmate/src/runCommand.ts:143
