export function isBrowser() {
  return (
    typeof window !== 'undefined' &&
    typeof XMLHttpRequest === 'function' &&
    !(
      (window as any).require &&
      window.module &&
      window.process &&
      // @ts-ignore
      window.process.type === 'renderer'
    )
  );
}
