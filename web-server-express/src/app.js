const path = require('path');
const express = require('express'); // returns a function


const app = express();
const PUBLIC_FOLDER = path.join(__dirname, '../public'); // returns path/src


// runs html file
app.use(express.static(PUBLIC_FOLDER));

app.set('view engine', 'hbs')
app.get('/', (req, res) => {
    res.render('index')
})

// start server up, single time
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});