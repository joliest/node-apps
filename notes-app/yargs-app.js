

/*6 
    Using YARGS - to be able to parse a key/value pair argument from command line

*/
const yargs = require('yargs');

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
        // executes this code when add is called
        console.log('Title . . . ' + argv.title);
        console.log('Body . . . ' + argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function() {
        // executes this code when remove is called
        console.log("Removing a note . .. ");
    }
})

yargs.parse()


// yargs has its own argv
// console.log(yargs.argv)