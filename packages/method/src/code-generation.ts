import { Message } from './Message';

export class MethodGeneration {
  method: Message<any>;

  constructor(method: { __isPSMessage: true }) {
    this.method = method as any;
  }

  types = async () => {
    const [args, result] = await Promise.all([
      this.method.argsType.typescriptPrint(),
      this.method.resultType.typescriptPrint(),
    ]);

    return [args, result.split('\n').slice(1, -1)].join('\n');
  };
}
