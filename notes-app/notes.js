const fs = require('fs')
const chalk = require('chalk')

const thisFile = {
    getNotes: function() {
        return 'Your notes ... '
    }
}

const addNote = function(title, body) {
    const notes = loadNotes();

    // prevents duplicate title
    const duplicateNotes = notes.filter(function(note) {
        // if return true, we have duplicate
        // if return false, otherwise
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen.inverse('New note is added'));
    } else {
        console.log(chalk.bgRed.inverse('Note title taken!'));
    }
}

const removeNote = function(title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title;
    })
    
    if(notesToKeep.length !== notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen.inverse(title + ' has been removed'));
    } else {
        console.log(chalk.bgRed.inverse('No title found'));
    }
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    addNote,
    removeNote
};