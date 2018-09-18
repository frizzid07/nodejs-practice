const req = require('request');

var geocodeAddress = (address, callback) => {
        var encodedAddress = encodeURIComponent(address);
        
        req({
            url: `https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=a9bc217433214ba49854bdfcc83279d3`,
            json: true
        }, (error, response, body) => {
            if (error) {
                callback('Unable to connect to OpenCage API Servers!');
            } else if (body.status === 'ZERO_RESULTS') {
                callback('Unable to find that address!');
            } else if (body.status.code == 200) {
                if (body.results.length > 0) {
                    var place = body.results[0];
                    callback(undefined,{
                        address: place.formatted,
                        timezone: place.annotations.timezone.name,
                        latitude: place.geometry.lat,
                        longitude: place.geometry.lng
                    });
                }
            }
        });
}

module.exports = {
    geocodeAddress
}