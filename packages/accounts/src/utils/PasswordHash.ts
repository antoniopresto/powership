import { createSchema, createType, Infer } from '@backland/schema';
import Scrypt from 'scrypt-kdf';

async function hash(params: PasswordHashParams): Promise<string> {
  const { password } = hash.input.parse(params);

  const keyBuf = await Scrypt.kdf(password.normalize(), {
    logN: 15,
    p: 1,
    r: 8,
  });

  return keyBuf.toString('base64');
}

export const PasswordType = createType('PasswordType', () => ({
  def: { max: 200,
min: 7 },
  type: 'string',
}));

hash.input = createSchema({
  password: PasswordType,
});

async function verify(
  params: PasswordVerifyInput
): Promise<{ valid: boolean }> {
  const { password, hash } = verify.input.parse(params);
  const keyBuf = Buffer.from(hash, 'base64');
  const valid = await Scrypt.verify(keyBuf, password);
  return { valid };
}

verify.input = createSchema({
  password: { string: {} },
  hash: { string: {} },
});

export const PasswordHash = {
  hash,
  type: PasswordType,
  validate(value: string): string {
    return PasswordType.parse(value);
  },
  verify,
};

export type PasswordHashParams = Infer<typeof hash.input>;
export type PasswordVerifyInput = Infer<typeof verify.input>;
