const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notesv2.js');

var yargv = yargs.argv;
var cmd = process.argv[2];

//Background Processes

/*console.log('Command: ' +cmd);
console.log('Process -> ', process.argv);
console.log('Yargs -> ', yargv);*/

if (cmd === 'add') {
    var note = notes.addNote(yargv.title, yargv.body);
    if (note) {
        console.log('Note ' +`"${note.title}"`+ ' added successfully!');
        notes.noteDetails(note);
    } else {
        console.log('Note ' +`"${yargv.title}"`+ ' already taken!');
    }
}

else if (cmd === 'list') {
    var allNotes = notes.getAll();
    var count = 1;
    console.log(`Validating ${allNotes.length} note(s)...`);
    allNotes.forEach((note) => notes.noteDetails(note));
}

else if (cmd === 'read') {
    var note = notes.getNote(yargv.title);
    if (note) {
        console.log('Note ' +`"${note.title}"`+ ' read successfully!');
        notes.noteDetails(note);
    } else {
        console.log('Note ' +`"${yargv.title}"`+ ' not found!');
    }
}

else if (cmd === 'remove') {
    var note = notes.removeNote(yargv.title);
    var msg = note ? 'Note ' +`"${yargv.title}"`+ ' successfully removed!' : 'Note ' +`"${yargv.title}"`+ ' not found!';
    console.log(msg);
}

else {
    console.log('Command ' +`"${cmd}"`+ ' not recognized!');
}