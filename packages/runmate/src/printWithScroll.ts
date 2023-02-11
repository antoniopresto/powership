/**
 * Used to print scrolling (and show there is more content above)
 * @param array
 * @param timeout
 */
export async function printWithScroll(array: string[], timeout = 5) {
  await new Promise((resolve) => {
    let i = 0;
    const printNextItem = () => {
      process.stdout.write(array[i] + '\n');
      i++;
      if (i < array.length) {
        setTimeout(printNextItem, timeout);
      } else {
        resolve(0);
      }
    };
    printNextItem();
  });

  await delayPromise(); // not close before ending write
}

export function delayPromise(time = 50) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, time);
  });
}
