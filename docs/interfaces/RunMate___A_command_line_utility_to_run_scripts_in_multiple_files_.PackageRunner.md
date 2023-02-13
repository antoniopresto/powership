[Backland](../README.md) / [Modules](../modules.md) / [RunMate - A command line utility to run scripts in multiple files.](../modules/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md) / PackageRunner

# Interface: PackageRunner

[RunMate - A command line utility to run scripts in multiple files.](../modules/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md).PackageRunner

## Table of contents

### Properties

- [packages](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunner.md#packages)
- [run](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunner.md#run)
- [utils](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunner.md#utils)

## Properties

### packages

• **packages**: `Record`<`string`, { `author?`: `string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string`  } ; `basename`: `string` ; `cwd`: `string` ; `dependencies?`: { `[dependencyName: string]`: `string`;  } ; `description?`: `string` ; `devDependencies?`: { `[dependencyName: string]`: `string`;  } ; `json`: [`PackageJson`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageJson.md) ; `keywords?`: `string`[] ; `license?`: `string` ; `name`: `string` ; `names`: `Set`<`string`\> ; `optionalDependencies?`: { `[dependencyName: string]`: `string`;  } ; `peerDependencies?`: { `[dependencyName: string]`: `string`;  } ; `repository?`: `string` \| { `type`: `string` ; `url`: `string`  } ; `scripts?`: { `[scriptName: string]`: `string`;  } ; `version`: `string` ; `run`: (`command`: `string`) => `Promise`<``0``\> ; `saveJSON`: () => `void`  }\>

#### Defined in

[packages/runmate/src/packageRunner.ts:71](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/packageRunner.ts#L71)

___

### run

• **run**: [`PackageRunnerRun`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunnerRun.md)

#### Defined in

[packages/runmate/src/packageRunner.ts:69](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/packageRunner.ts#L69)

___

### utils

• **utils**: { `author?`: `string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string`  } ; `basename`: `string` ; `cwd`: `string` ; `dependencies?`: { `[dependencyName: string]`: `string`;  } ; `description?`: `string` ; `devDependencies?`: { `[dependencyName: string]`: `string`;  } ; `json`: [`PackageJson`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageJson.md) ; `keywords?`: `string`[] ; `license?`: `string` ; `name`: `string` ; `names`: `Set`<`string`\> ; `optionalDependencies?`: { `[dependencyName: string]`: `string`;  } ; `peerDependencies?`: { `[dependencyName: string]`: `string`;  } ; `repository?`: `string` \| { `type`: `string` ; `url`: `string`  } ; `scripts?`: { `[scriptName: string]`: `string`;  } ; `version`: `string` ; `run`: (`command`: `string`) => `Promise`<``0``\> ; `saveJSON`: () => `void`  }[]

#### Defined in

[packages/runmate/src/packageRunner.ts:70](https://github.com/antoniopresto/darch/blob/c5cd1c8/packages/runmate/src/packageRunner.ts#L70)
