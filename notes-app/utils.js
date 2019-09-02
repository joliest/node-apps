console.log('utils.js')

const name = 'Mike'

// sharing function
const add = function (a, b) {
    return a + b;
}

/*
   enabling properties and methods to be
   accessible to other files.
*/
module.exports = {
    name,
    add
}