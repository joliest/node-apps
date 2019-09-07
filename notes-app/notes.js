const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
    return 'Your notes ... '
}


const addNote = (title, body) => {
    const notes = loadNotes();

    // prevents duplicate title
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title)
    
    if (!duplicateNote) {

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

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)
    
    if(notesToKeep.length !== notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen.inverse(title + ' has been removed'));
    } else {
        console.log(chalk.bgRed.inverse('No title found'));
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.bgBlue('Your notes: '))
    notes.forEach( (note) => {
        console.log(chalk.bold.green(note.title))
        console.log(chalk.bold.red("--> " + note.body))
    })
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note) => note.title === title) 
    if (foundNote) {
        console.log(chalk.bold.green('Title: ' + foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.red('No note found'))
    }
}
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};