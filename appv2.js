const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notesv2.js');

var yargv = yargs.argv;
var cmd = process.argv[2];
console.log('Command: ' +cmd);
console.log('Process -> ', process.argv);
console.log('Yargs -> ', yargv);

if (cmd === 'add') {
    notes.addNote(yargv.title, yargv.body);
}
else if (cmd === 'list') {
    notes.getAll();
}
else if (cmd === 'read') {
    notes.getNote(yargv.title);
}
else if (cmd === 'remove') {
    notes.removeNote(yargv.title);
}
else {
    console.log('Command not recognized!');
}