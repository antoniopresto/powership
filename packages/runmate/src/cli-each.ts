import { Command } from 'commander';

import { eachScript } from './commands/executeInPackages';

const program = new Command();
eachScript(program);

program.version('> Runmate ' + require('../package.json').version);

program.parse();
