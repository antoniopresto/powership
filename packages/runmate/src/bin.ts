#!/usr/bin/env node

import { runeach } from './index';

const { map } = runeach();

map(({ run }) => {
  const command = process.argv[2];
  if (!command) {
    return console.log(`no command specified`);
  }
  run(command);
});
