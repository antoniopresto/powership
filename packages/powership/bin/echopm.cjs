const child_process = require('child_process');

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
`;

child_process.execSync(`${functions} echopm;`, { stdio: 'inherit' });
