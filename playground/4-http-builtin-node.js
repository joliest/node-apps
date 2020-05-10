const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=94ad33342725eb420193656d60372aef&query=45,-75&units=m';

const request = http.request(url, (response) => {
    let data = '';

    // call back fires when received data
    response.on('data', (chunk) => {
        // converts from byte to string
        data = data + chunk.toString()
    });

    response.on('end', () => {
        // convert JSON to JS object
        const body = JSON.parse(data);
        console.log(body)
    });
});

// fires when error occurs
request.on('error', (error) => {
    console.log('Error::: ', error);
});

request.end();