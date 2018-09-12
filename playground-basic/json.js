/*
//converting object to string

var nameObj = {
    name: 'Tanmay'
};

var stringName = JSON.stringify(nameObj);
console.log(typeof(stringName)+ ' -> ' +stringName);

//converting string to object

var stringPerson = '{"name": "Tanmay", "age": 19}';
var infoObj = JSON.parse(stringPerson);
console.log(typeof(infoObj)+ ' -> ', infoObj);
*/

const fs = require('fs');

var origObjNote = {
    title: 'Title',
    body: 'Body Content'
};

var convStringNote = JSON.stringify(origObjNote);

fs.writeFileSync('notes.json', convStringNote);

var origStringNote = fs.readFileSync('notes.json');

var convObjNote = JSON.parse(origStringNote);
console.log(typeof(convObjNote)+ ' -> ', convObjNote.title)