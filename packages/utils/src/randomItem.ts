import { randomInt } from './randomInt';
import { stringCase } from './stringCase';

export function randomItem<T extends ReadonlyArray<unknown>>(
  ...list: Readonly<T>
): T extends [unknown]
  ? T[0] extends infer R
    ? R extends Array<any> | ReadonlyArray<any>
      ? R[number]
      : T[number]
    : T[number]
  : T[number] {
  //
  const _list = list.length === 1 && Array.isArray(list[0]) ? list[0] : list;
  return _list[randomInt(0, _list.length - 1)];
}

export function randomName() {
  const value = randomItem(randomNames);
  return stringCase.random(value);
}

export const randomNames = [
  'Acre',
  'Alagoas',
  'Amazonas',
  'Amapá',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Minas Gerais',
  'Mato Grosso do Sul',
  'Mato Grosso',
  'Pará',
  'Paraíba',
  'Pernambuco',
  'Piauí',
  'Paraná',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rondônia',
  'Roraima',
  'Rio Grande do Sul',
  'Santa Catarina',
  'Sergipe',
  'São Paulo',
  'Tocantins',
  'Rafaela',
  'Antonio',
  'Maggie',
  'Cacau',
];

Array(200).forEach(() => {
  const length = randomInt(1, 7);

  const txt = [...Array(length)]
    .map(() => {
      return randomItem(randomNames);
    })
    .join(' ');

  randomNames.push(stringCase.random(txt));
});
