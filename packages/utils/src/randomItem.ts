import { randomNumber } from './randomNumber';

export function randomItem<List extends any[]>(list: List): List[number] {
  return list[randomNumber(0, list.length - 1)];
}
