const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode('Apalit', (error, data) => {
    console.log('Location: ', data.location);
    console.log('Error', error);

    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Data: ', data);
        console.log('Error', error);
    });
});
