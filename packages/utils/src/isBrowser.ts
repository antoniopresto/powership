import { tabs } from './ansci';
import { createErrorClass } from './createErrorClass';

export const IS_BROWSER = (() => {
  try {
    return document.body.getBoundingClientRect().width >= 0;
  } catch (e) {
    return false;
  }
})();

export function isBrowser() {
  return IS_BROWSER;
}

export const InvalidEnvironmentError = createErrorClass(
  'InvalidEnvironmentError',
  { defaultShouldPublishStack: false }
);

export function assertBrowser(stackFrom?: any) {
  if (!IS_BROWSER) {
    let message = 'Invalid environment: expected browser.';

    if (typeof stackFrom === 'string') {
      message = `${stackFrom}\n${tabs(message)}`;
      stackFrom = assertBrowser;
    }

    if (typeof stackFrom?.name === 'string') {
      message = `${stackFrom.name}\n${tabs(message)}`;
      stackFrom = assertBrowser;
    }

    throw new InvalidEnvironmentError(message, {
      stackFrom: stackFrom || assertBrowser,
    });
  }
}
