/* 4.)
    Challenge
        1. Install version 2.4.1 of chalk
        2. Load chalk into app.js
        3. Use it to print the string "Success!"
            to the console in green
        4. Test your work
*/
const notes = require('./notes.js');
const chalk = require('chalk')
console.log(notes.getNotes())
console.log(chalk.bgGreen('Success!'))

/* 1.)
    Challenge:
        1. Create a new file called notes.js
        2. Create getNotes function that returns "your notes..."
        3. Export getNotes function
        4. From app.js, load in and call the function printing
        message to console

const notes = require('./notes.js');
console.log(notes.getNotes())
*/


/* 2.)
    Tutorial :


// add ./ to locate relative file
const utils = require('./utils.js')

console.log(utils.add(1,1))

*/

/* 3.)
    Validator demo:

const validator = require('validator');
console.log('isURL ::: ', validator.isURL('joli.com'))
console.log('isEmail ::: ', validator.isEmail('jolisa.com'))

*/