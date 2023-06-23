export function randomInt(lower = 0, upper = 100) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}
