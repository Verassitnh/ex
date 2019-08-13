const { execSync } = require('child_process');
const fs = require('fs')
const { spawnSync } = require('child_process')


execSync('git clone https://github.com/svelte-toolbox/website EX_FOLDER_000_111_222_333')
console.log("Cloned")
spawnSync('mv', ['EX_FOLDER_000_111_222_333/__sapper__/build*', '/'])
execSync('rm -Rf EX_FOLDER_000_111_222_333')