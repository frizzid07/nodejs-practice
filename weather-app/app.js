const request = require('request');
const yargs = require('yargs');

const opencage = require('opencage-api-client');

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

var inputAddress = argv.address;

opencage.geocode({q: inputAddress}).then(data => {
//   console.log(JSON.stringify(data));
  if (data.status.code == 200) {
    if (data.results.length > 0) {
      var place = data.results[0];
      console.log('Address: ', place.formatted);
      console.log('Timezone: ', place.annotations.timezone.name);
      console.log('Latitude: ', place.geometry.lat);
      console.log('Longitude: ', place.geometry.lng);
    }
  }
  else {
      console.log('Invalid Address! Please enter a valid address.');
  }
}).catch(error => {
  console.log('error', error.message);
});