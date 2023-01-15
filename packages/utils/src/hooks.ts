export {
  hooks,
  CreateParallelHook,
  CreateWaterfallHook,
  EarlyHookResult,
  isEarlyHookResult,
  Hooks,
  Parallel,
  parallel,
  ParallelExec,
  parallelHook,
  waterfallHook,
  ParallelMiddleware,
  pluginHooks,
  PluginOptions,
  TWaterfallRegister,
  WaterfallExec,
  Waterfall,
  waterfall,
  PluginRegisterInfo,
  TParallelRegister,
  WaterfallMiddleware,
} from 'plugin-hooks';

// export interface PluginHooks<T = any, C = any> {
//   parallel: Parallel<T, C>;
//   waterfall: Waterfall<T, C>;
// }
//
// export function createPlugin<T = any, C = any>(
//   name: string,
//   options?: PluginOptions<T, C>
// ): PluginHooks<T, C> {
//   const parallel: PluginHooks<T, C>['parallel'] = hooks.parallel(options);
//   const waterfall: PluginHooks<T, C>['waterfall'] = hooks.waterfall(options);
//
//   function listenParallel(warcher:): any {
//     return parallel.register()
//   }
//
//   function listenWaterfall(...args: any[]): any {
//     return
//   }
//
//   return {
//     parallel,
//     waterfall,
//   };
// }
