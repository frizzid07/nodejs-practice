const req = require('request');

var getWeather = (latitude, longitude, callback) => {
    req ({
        url: `https://api.darksky.net/forecast/d0ca04b5a7d32821d97071a8b718f49c/${latitude},${longitude}`,
        json: true
      }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
          })
        //   currentTemp = Number(body.currently.temperature);
        //   console.log(((currentTemp-32)*(5/9)).toFixed(2), '°C / ', currentTemp, '°F');
        }
        else {
          callback('Unable to fetch Weather details!'); 
        }
      });
}

module.exports.getWeather = getWeather;