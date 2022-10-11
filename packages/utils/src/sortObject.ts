export function sortObject<O = any>(object): O {
  return Object.keys(object)
    .sort()
    .reduce((obj, key) => {
      return Object.assign(Object.assign({}, obj), {
        [key]: object[key],
      });
    }, {}) as O;
}
