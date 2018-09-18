const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to Fetch Weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMsg, geocodeResults) => {
  if (errorMsg) {
    console.log(errorMsg);
  } else {
    console.log(geocodeResults.address);
    weather.getWeather(geocodeResults.latitude, geocodeResults.longitude, (errorMsg, weatherResults) => {
      if (errorMsg) {
        console.log(errorMsg);
      } else {
        console.log(`The temperature currently is ${weatherResults.temperature} °F and it actually feels like ${weatherResults.apparentTemperature} °F`);
      }
    });
  }
});