const fs = require('fs')


/* storing in JSON file
const book = {
  title: 'Ego is the enemy',
  author: 'Ryan holiday'
}

var bookJSON = JSON.stringify(book)
// it's a string so you're unable to access the props
fs.writeFileSync('1-json.json', bookJSON)
*/


/* gets Object via JSON object 

// returns not a string, it's actually a buffer 
var dataBuffer = fs.readFileSync('1-json.json');

// you'll get buffer data
console.log(dataBuffer)

// convert it on to string
var dataJSON = dataBuffer.toString();
console.log(dataJSON)

// convert the JSON string to Obj
var data = JSON.parse(dataJSON);
console.log(data)
*/

/* Challenge
    1. Load and parse the JSON data
    2. Change the name and age property using your info
    3. Stringify the changed object and overwrite the original data
    4. Test your work by viewing data in the JSON file
*/

var dataBuffer = fs.readFileSync('1-json-challenge.json');
var data = JSON.parse(dataBuffer.toString());

data.name = "Joliver";
data.planet = "Mars";

var dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json-challenge.json', dataJSON)