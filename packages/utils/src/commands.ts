import { ChildProcess } from 'child_process';
import { spawn } from 'child_process';
import process from 'process';

import { blue, red, tabs, underline } from './ansci';

export async function commands(
  ...steps: ({ script: string; description?: string } | string)[]
) {
  const start = Date.now();
  let idx = 0;
  for (let item of steps) {
    idx += 1;

    let { script, description } =
      typeof item === 'string' ? { script: item, description: item } : item;

    let descriptionPrefix = `➜ ${idx}/${steps.length}: `;

    try {
      await command({
        script,
        description: `${descriptionPrefix}${description}`,
      });
    } catch (e) {
      console.log(underline(`➜ Finished in ${Date.now() - start}ms.`));
    }
  }
}

export function command(options: {
  script: string;
  description?: string;
  cwd?: string;
}) {
  const start = Date.now();
  let { script, description, cwd = process.cwd() } = options;

  let childRef: ChildProcess | null = null;

  let prefix = description ? blue('  ⎜ ') : undefined;

  if (description) {
    process.stdout.write('\n' + blue(description.trim()) + '\n');
  }

  try {
    process.env.PATH = `${cwd}/node_modules/.bin:${process.env.PATH}`;

    const child = (childRef = spawn(`${script}`, {
      stdio: 'pipe',
      shell: true,
      cwd,
      env: process.env,
    }));

    let printed = false;
    child.stderr?.on('data', (data) => {
      printed = true;
      process.stderr.write(tabs(data, red(prefix || '')));
    });

    child.stdout?.on('data', (data) => {
      printed = true;
      process.stdout.write(tabs(data, prefix));
    });

    return new Promise<void>((resolve, reject) => {
      child.on('error', (error) => {
        reject(error);
      });

      child.on('close', async (code) => {
        let closingText = printed
          ? (code !== 0 ? red : blue)(
              `  ⎣ ${code !== 0 ? 'Failed' : 'Finished'} in ${
                Date.now() - start
              }ms \n\n`
            )
          : '';

        process.stdout.write(closingText, () => {
          if (code === 0) {
            return resolve();
          }
          reject();
        });
      });
    });
  } catch (e: any) {
    childRef?.kill(1);
    process.stderr.write(
      red(e.message + `\n  ⎣ Failed in ${Date.now() - start}ms \n\n`),
      () => {
        process.exit(1);
      }
    );
  }
}

export function delayExit<T>() {
  const exit = (() => {
    let FINISHED = false;
    function wait() {
      if (!FINISHED) setTimeout(wait);
    }
    wait();
    return (result: T): T => {
      FINISHED = true;
      return result;
    };
  })();

  return { exit };
}
