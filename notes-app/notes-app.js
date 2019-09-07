const yargs = require('yargs');
const notes = require('./notes.js');

// setting up a command. Can be viewed via --help
yargs.command({
    command: 'add',
    describe: 'Adds a note',
    // argv
    builder: {
        title: {
            describe: 'Note title',
            // make this required argument
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.parse()


// yargs has its own argv
// console.log(yargs.argv)