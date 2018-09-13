const req = require('request');

req({
    url: 'https://us1.locationiq.com/v1/search.php?key=c6b10e6f340c9e&q=Ganeshwadi,%20Thane%20West,%20Thane,%20Maharashtra,%20India&format=json#0',
    json: true
}, (error, response, body) => {
    console.log(body);
})