// Orderly execution through Call Stack, Node APIs & Callback Queue
// Start the App
console.log('App started!');

setTimeout(() => {
    console.log('Inside of Callback1 (2 sec)');
}, 2000);

setTimeout(() => {
    console.log('Inside of Callback2 (0 sec)');
}, 0);

//Terminate the App
console.log('App executed!');