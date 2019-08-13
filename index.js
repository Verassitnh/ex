const { execSync } = require('child_process');
const fs = require('fs');
const { spawnSync } = require('child_process');

console.log("Cloning...")
execSync('git clone https://github.com/svelte-toolbox/website project');
console.log("Cloned");
console.log("Building...")
execSync('cd project && npm i && npm run build');
console.log("Built!")
console.log("Starting Server...")
execSync('cd project && rm -Rf src cypress .eslintrc .prettierrc .prettierignore .eslintignore .git package.json package-lock.json');
execSync('cd project && node __sapper__/build');
