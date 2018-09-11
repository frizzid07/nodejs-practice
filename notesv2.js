//Start
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notesArray = JSON.parse(notesString);
    } catch (error) {
        return [];        
    }
};

var saveNotes = (notesArray) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notesArray));   
};

var addNote = (title, body) => {
    var notesArray = fetchNotes();
    var notesAtts = {
        title, body
    };

    var notesDuplicate = notesArray.filter((notesAtts) => notesAtts.title === title);

    if (notesDuplicate.length ===0) {
        notesArray.push(notesAtts);
        saveNotes(notesArray);
    }
};

var getAll = () => {
    console.log('Getting all notes...');
};

var getNote = (title) => {
    console.log('Getting note ' +title+ '...');
}

var removeNote = (title) => {
    console.log('Removing note ' +title+ '...');
}

module.exports = {
    addNote, getAll, getNote, removeNote
}