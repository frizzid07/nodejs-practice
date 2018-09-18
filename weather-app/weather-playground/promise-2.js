const req = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        
        req({
            url: `https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=a9bc217433214ba49854bdfcc83279d3`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to OpenCage API Servers!');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address!');
            } else if (body.status.code == 200) {
                if (body.results.length > 0) {
                    var place = body.results[0];
                    resolve({
                        address: place.formatted,
                        timezone: place.annotations.timezone.name,
                        latitude: place.geometry.lat,
                        longitude: place.geometry.lng
                    });
                }
            }
        });
    });
} 

geocodeAddress('400602').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMsg) => {
    console.log(errorMsg);
});