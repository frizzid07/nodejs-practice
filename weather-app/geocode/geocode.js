const opencage = require('opencage-api-client');

var geocodeAddress = (address, callback) => {
    opencage.geocode({q: address}).then(data => {
        //   console.log(JSON.stringify(data));
        if (data.status.code == 200) {
            if (data.results.length > 0) {
            var place = data.results[0];
            callback(undefined, {
                address: place.formatted,
                timezone: place.annotations.timezone.name,
                latitude: place.geometry.lat,
                longitude: place.geometry.lng
            });
            }
        }
        else if (error || data.status === 'ZERO_RESULTS') {
            callback('Unable to fetch Geocode details!');
        }
    });
}

module.exports = {
    geocodeAddress
}