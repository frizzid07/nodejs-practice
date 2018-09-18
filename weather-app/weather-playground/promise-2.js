var geocodeAddress = (address) => {

};

geocodeAddress('400602').then(() => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMsg) => {
    console.log(errorMsg);
});