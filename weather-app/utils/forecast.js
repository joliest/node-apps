const request = require('postman-request');

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=94ad33342725eb420193656d60372aef&query=${lat},${long}&units=m`;
    request({url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect');
        } else {   
            callback(null, {
                current: response.body.current.weather_descriptions
            })
        }
    });
}

module.exports = forecast;