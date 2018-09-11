//Start
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];        
    }
};

var saveNotes = (notesArray) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notesArray));   
};

var noteDetails = (note) => {
    console.log('--');
    console.log('Title: ', `${note.title}`);
    console.log('Body: ', `${note.body}`);
};

var addNote = (title, body) => {
    var notesArray = fetchNotes();
    var notesAtts = {
        title,
        body
    };
    var notesDuplicate = notesArray.filter((notesAtts) => notesAtts.title === title);

    if (notesDuplicate.length ===0) {
        notesArray.push(notesAtts);
        saveNotes(notesArray);
        return notesAtts;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var fetchRead = fetchNotes();
    var filteredNotes = fetchRead.filter((notesAtts) => notesAtts.title === title);
    return filteredNotes[0];
}

var removeNote = (title) => {
    var fetchRemove = fetchNotes();
    var filteredNotes = fetchRemove.filter((notesAtts) => notesAtts.title !== title);
    saveNotes(filteredNotes);

    return fetchRemove.length !== filteredNotes.length;
};

module.exports = {
    addNote, getAll, getNote, removeNote, noteDetails
}