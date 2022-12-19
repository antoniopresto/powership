import { runeach } from 'runeach';
import * as process from 'process';

const { map } = runeach();

map(({ run }) => {
  process.env.c?.split(',').forEach((c) => {
    try {
      run(c);
    } catch (e: any) {
      console.error(e.message);
    }
  });
});
