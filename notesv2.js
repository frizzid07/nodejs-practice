//Start
const fs = require('fs');

var addNote = (title, body) => {
    var notesArray = [];
    var notesAtts = {
        title, body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notesArray = JSON.parse(notesString);
    } catch (error) {
        
    }

    var notesDuplicate = notesArray.filter((notesAtts) => notesAtts.title === title);

    if (notesDuplicate.length ===0) {
        notesArray.push(notesAtts);
        fs.writeFileSync('notes-data.json', JSON.stringify(notesArray));   
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