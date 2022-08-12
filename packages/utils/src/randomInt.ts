export function randomInt(lower = 0, upper = 100) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

export function randomFloat(lower = 0, upper = 100) {
  return (
    lower +
    +`${randomInt(0)}.${randomInt(0, 9)}${randomInt(0, 9)}` *
      (upper - lower + 1)
  );
}

export const randomNumber = randomFloat;
