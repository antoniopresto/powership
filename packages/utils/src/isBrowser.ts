export const IS_BROWSER = (() => {
  try {
    return document.body.getBoundingClientRect().width > 0;
  } catch (e) {
    return false;
  }
})();

export function isBrowser() {
  return IS_BROWSER;
}
