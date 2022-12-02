import { rumm } from './rumm';
import { ulid } from '@backland/utils';

rumm().map(({ saveJSON, json, run }) => {
  json.version = `0.0.0-alpha.${ulid()}`;
  saveJSON();
  run('prettier ./package.json --write');
});
