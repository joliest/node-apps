/* v1
const square = function (x) {
    return x * x;
}
*/

/* v2: ES6
const square = (x) => {
    return x * x;
}
*/

/* v3:
const square = (x) => x * x;

*/

/* v1, v2, v3 console.log
console.log(square(3))
*/


/* v1
const event = {
    name: 'Birthday Party',
    printGuestList: function() {
        console.log('Guest list for ' + this.name);
    }
}
*/

/*
// arrow function don't bind 'this' keyword. 
const event = {
    name: 'Birthday Party',
    printGuestList: () => {
        // gets 'Guest list for undefined'
        console.log('Guest list for ' + this.name);
    }
}
*/

// proper way in ES6
const event = {
    name: 'Birthday Party',
    guestList: ['Martha', 'Arlene', 'Jen'],
    printGuestList() {
        // gets 'Guest list for undefined'
        console.log('Guest list for ' + this.name);

        // arrow function allows you to get access to 'this'
        // no longer need: var _self = this;
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList();