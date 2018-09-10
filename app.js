//Including a module
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

/*var user = os.userInfo();
console.log(user);

fs.appendFileSync('intro.txt',`Hello ${user.username}! You are ${notes.age} years old!`);

var res = notes.addNote();
console.log(res);*/

var num1 = 6;
var num2 = -11; 
console.log('The sum of ' +num1+ ' & ' +num2+ ' is ' +notes.addFn(num1, num2));

console.log(_.isString('Tanmay'));
console.log('Unique Array: ' +_.uniq([1, 2, 2, 4, 3, 'Master', 1, 4, 'Node']));