const child_process = require('child_process');
const path = require('path');

const params = process.argv.slice(2).join(' ');

const functions = `
echoPm(){
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

pm() {
  local pmResult=""
  local pmPath=$(pwd)
  local pmNextPath=$pmPath
  
  for i in {0..7}; do
    pmResult=$(echoPm "$pmNextPath")

    if [[ $pmResult != "" ]]; then
        echo "$pmResult##$pmNextPath"
        return 0;
    fi
    
     pmNextPath=$(dirname "$pmNextPath")
  done

  return 1
}
`;

const [pm, root] = child_process
  .execSync(functions + ' pm')
  .toString()
  .trim()
  .split('##');

const command = [pm, params].join(' ');

process.stdout.write(`➜ ${path.relative(process.cwd(), root)}/ ${command}\n`);

child_process.execSync(command, { stdio: 'inherit' });
