const yargs = require('yargs');
const axios = require('axios');
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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=a9bc217433214ba49854bdfcc83279d3`;

axios.get(geocodeURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find the Address!');
  }
  var lat = response.data.results[0].geometry.lat;
  var lng = response.data.results[0].geometry.lng;
  var weatherURL = `https://api.darksky.net/forecast/d0ca04b5a7d32821d97071a8b718f49c/${lat},${lng}`;

  console.log(response.data.results[0].formatted);
  return axios.get(weatherURL);
}).then((response) => {
  var temp = response.data.currently.temperature;
  var apparentTemp = response.data.currently.apparentTemperature;

  console.log(`The temperature currently is ${((Number(temp)-32)*(5/9)).toFixed(2)} °C / ${temp} °F and it actually feels like ${((Number(apparentTemp)-32)*(5/9)).toFixed(2)} °C / ${apparentTemp} °F`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers!');
  }
  else {
    console.log(e.message);
  }
});