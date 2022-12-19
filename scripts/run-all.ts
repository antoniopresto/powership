import { rumm } from './rumm';
import * as process from 'process';

const { map } = rumm();

map(({ run }) => {
  process.env.c?.split(',').forEach((c) => {
    run(c);
  });
});
