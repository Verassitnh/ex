const { execSync } = require('child_process');
const minimist = require('minimist')
const fs = require('fs');

module.exports = () => {
	const args = minimist(process.argv.slice(2))
	const port = args._[1];
	const url = args._[0]

	if (!url) {
		console.log("You must specify a repository url!");
		return;
	} else if (!port) {
		console.log("You must specify a port!");
		return;
	}

	console.log("Cloning...")
	execSync(`rm -Rf project && git clone ${url} project`);
	console.log("Cloned");
	console.log("Building...")
	execSync('cd project && export env NODE_ENV=develoment && npm i && npm run build');
	console.log("Built!")
	console.log("Starting Server...")
	const files = fs.readdirSync('./project').map(val => {
		if (
			val != '__sapper__' &&
			val != 'static' &&
			val != 'package.json' &&
			val != 'package-lock.json'
		) return val;
	}).join(' ')
	execSync(`
		cd project &&
		rm -Rf ${files} &&
		export env NODE_ENV=production &&
		npm i &&
		rm -Rf package.json package-lock.json &&
		export env PORT=${port} && node "./__sapper__/build"
	`);
}
