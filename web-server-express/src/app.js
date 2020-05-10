const express = require('express'); // returns a function

const app = express();

app.get('', (req, res) => {
    res.send('Hello world!');
});

// start server up, single time
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});