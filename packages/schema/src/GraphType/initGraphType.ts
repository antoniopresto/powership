import { lazyCreateGraphTypeInitPayload } from './lazyCreateGraphTypeInitPayload';

// FIXME should fix deep instantiation types and remove `any's`
export function initGraphType(self: any, args: any) {
  const { initializer, idFromArgs } = lazyCreateGraphTypeInitPayload(
    args,
    (payload) => {
      self.beforeInitialize.forEach((next) => {
        payload = next(payload);
      });

      self.touched = true;

      return payload;
    },
  );

  Object.defineProperty(self, '__lazyGetter', {
    get() {
      return initializer(self);
    },
  });

  Object.defineProperty(self, 'definition', {
    enumerable: true,
    get() {
      return initializer(self).definition;
    },
  });

  if (idFromArgs) {
    self.identify(idFromArgs);
  }
}
