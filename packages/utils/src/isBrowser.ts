export const IS_BROWSER = (() => {
  //@only-server
  return false;

  //@only-browser
  return true;

  try {
    return document.body.getBoundingClientRect().width > 0;
  } catch (e) {
    return false;
  }
})();

export function isBrowser() {
  return IS_BROWSER;
}
