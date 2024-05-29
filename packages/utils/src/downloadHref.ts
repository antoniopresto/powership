import { assertBrowser } from './isBrowser';

export function downloadHref(
  content: any,
  filename: string,
  isFromUrl?: boolean
) {
  assertBrowser(downloadHref);
  const encodedUri = isFromUrl ? null : encodeURI(content);
  const link = document.createElement('a');
  link.setAttribute('href', isFromUrl ? content : encodedUri);
  link.setAttribute('download', filename);
  document.body.appendChild(link); // Required for FF
  link.click(); // This will download the data file named.
}
