import { runeach } from 'runmate';
import * as process from 'process';

const { map } = runmate();

map(({ run }) => {
  process.env.c?.split(',').forEach((c) => {
    try {
      run(c);
    } catch (e: any) {
      console.error(e.message);
    }
  });
});
