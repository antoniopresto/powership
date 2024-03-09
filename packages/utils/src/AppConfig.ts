import { createStore, Store } from './Store';

export interface AppConfigInterface {
  [K: string]: unknown;
}

export interface IAppConfig<
  Definition extends AppConfigInterface = AppConfigInterface,
> extends Store<Definition> {
  //
}

export const AppConfig = createStore<AppConfigInterface>() as IAppConfig;
