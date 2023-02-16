import {
  LoaderContext,
  TransporterLoaderName,
  TransporterLoadersRecord,
} from '@swind/transporter';

export type EntityLoaderConfig<
  Method extends TransporterLoaderName,
  Context extends LoaderContext = Record<string, any>
> = TransporterLoadersRecord[Method] extends (config: infer Config) => any
  ? Config & { context: Context } extends infer R
    ? {
        [K in keyof R as K extends 'context' ? never : K]: R[K];
      } & { context: Context }
    : never
  : any;
