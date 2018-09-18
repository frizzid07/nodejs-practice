var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('Arguments must be numbers!');
            }
        }, 1500)
    });
};

asyncAdd(4, '9').then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 21);
}).then((res) => {
    console.log('Should be 34: ', res);
}).catch((errorMsg) => {
    console.log(errorMsg);
});

// var somePromise = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello. This is Working!');
//         // resolve();
//         // reject('Unable to fulfill promise!');
//     }, 2000);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMsg) => {
//     console.log('Error: ', errorMsg);
// });