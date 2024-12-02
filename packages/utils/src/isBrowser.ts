export const IS_BROWSER = (() => {
  if (typeof document === 'undefined') return false;
  try {
    return document.body.getBoundingClientRect().width > 0;
  } catch (e) {
    return false;
  }
})();

export function isBrowser() {
  return IS_BROWSER;
}
