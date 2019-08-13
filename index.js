const { execSync } = require('child_process');
const fs = require('fs')


execSync('git clone https://github.com/svelte-toolbox/website')
execSync('cd website && npm i && npm run build')



fs.copyFileSync('website/__sapper__/build')
