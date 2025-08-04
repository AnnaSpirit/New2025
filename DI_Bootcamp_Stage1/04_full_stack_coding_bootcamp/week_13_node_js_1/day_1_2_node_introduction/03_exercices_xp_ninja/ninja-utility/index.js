// index.js
// ✅ CLI dispatcher using commander to trigger greet, fetch, or read
// ✅ Route les commandes CLI avec commander vers greet, fetch ou read

const { Command } = require('commander');
const greet = require('./commands/greet');
const fetchData = require('./commands/fetch');
const readFile = require('./commands/read');

const program = new Command();

program
    .name('ninja-utility')
    .description('🧰 A ninja-style CLI utility with cool features')
    .version('1.0.0');

program
    .command('greet')
    .description('Display a colorful greeting')
    .action(() => {
        greet();
    });

program
    .command('fetch')
    .description('Fetch data from a public API')
    .action(() => {
        fetchData();
    });

program
    .command('read [filename]')
    .description('Read and display a file (default: sample.txt)')
    .action((filename) => {
        readFile(filename);
    });

program.parse(process.argv);
