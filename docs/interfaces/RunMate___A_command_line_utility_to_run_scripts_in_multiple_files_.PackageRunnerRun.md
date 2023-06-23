[Powership](../README.md) / [Modules](../modules.md) / [RunMate - A command line utility to run scripts in multiple files.](../modules/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md) / PackageRunnerRun

# Interface: PackageRunnerRun

[RunMate - A command line utility to run scripts in multiple files.](../modules/RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.md).PackageRunnerRun

## Callable

### PackageRunnerRun

▸ **PackageRunnerRun**(`callback`, `runOptions?`): `Promise`<[`PackageRunnerResult`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunnerResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `string` \| (`utils`: { `author?`: `string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string`  } ; `basename`: `string` ; `cwd`: `string` ; `data`: `string`[] ; `dependencies?`: { `[dependencyName: string]`: `string`;  } ; `description?`: `string` ; `devDependencies?`: { `[dependencyName: string]`: `string`;  } ; `json`: [`PackageJson`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageJson.md) ; `keywords?`: `string`[] ; `license?`: `string` ; `name`: `string` ; `names`: `Set`<`string`\> ; `optionalDependencies?`: { `[dependencyName: string]`: `string`;  } ; `peerDependencies?`: { `[dependencyName: string]`: `string`;  } ; `repository?`: `string` \| { `type`: `string` ; `url`: `string`  } ; `scripts?`: { `[scriptName: string]`: `string`;  } ; `version`: `string` ; `run`: (`command`: `string`) => `Promise`<[`RunCommandResult`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.RunCommandResult.md)\> ; `saveJSON`: () => `void`  }) => `any` |
| `runOptions?` | [`PackageRunOptions`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunOptions.md) |

#### Returns

`Promise`<[`PackageRunnerResult`](RunMate___A_command_line_utility_to_run_scripts_in_multiple_files_.PackageRunnerResult.md)\>

#### Defined in

packages/runmate/src/packageRunner.ts:83
