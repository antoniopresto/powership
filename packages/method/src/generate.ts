import { Method } from './Method';

export class MethodGeneration {
  method: Method<any>;

  constructor(method: { __isPSMethod: true }) {
    this.method = method as any;
  }

  types = async () => {
    const [args, result] = await Promise.all([
      this.method.argsType.typescriptPrint(),
      this.method.resultType.typescriptPrint(),
    ]);

    return [args, result].join('\n');
  };
}
