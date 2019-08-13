const { execSync } = require('child_process');
const fs = require('fs')


execSync('git clone https://github.com/svelte-toolbox/website')
console.log("Cloned")
fs.copyFileSync('website/.gitignore', '.easycheese')
fs.unlinkSync('website')