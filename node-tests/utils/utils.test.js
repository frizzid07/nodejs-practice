const utils = require('./utils');

it('should add two numbers', () =>  {
    var res = utils.add(21, 9);
    if (res != 30) {
        throw new Error(`Expected 30, but got ${res}!`);
    }
});

it('should square the number', () => {
    var res = utils.square(7);
    if (res != 49) {
        throw new Error(`Expected 49, but got ${res}`);
    }
});