const child_process = require('child_process');
const path = require('path');

const functions = `
echopm(){
    local dir=\${1:-$(pwd)}
    
    if [[ -f "$dir/package-lock.json" ]]; then
       echo "npm"
     elif [[ -f "$dir/bun.lockb" ]]; then
       echo "bun"
     elif [[ -f "$dir/yarn.lock" ]]; then
       echo "yarn"
     elif [[ -f "$dir/pnpm-lock.yaml" ]]; then
       echo "pnpm"
   fi
}

root() {
  local pmResult=""
  local pmPath=$(pwd)
  local pmNextPath=$pmPath

  for i in {0..7}; do
    pmResult=$(echopm "$pmNextPath")
    if [[ $pmResult != "" ]]; then
        echo $pmNextPath
        return 0
    fi
     pmNextPath=$(dirname "$pmNextPath")
  done

  return 1
}
`;

const [root] = child_process
  .execSync(functions + ' root')
  .toString()
  .trim()
  .split('##');

const args = process.argv.slice(2).join(' ');

if (args.length) {
  child_process.execSync(args, {
    stdio: 'inherit',
    cwd: root,
  });
} else {
  console.log(root);
}
