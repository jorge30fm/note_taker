const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
        const note = body;
        notesArray.push(note);
        fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({notesArray: notesArray}, null, 2)
        );
        return note;
};

function findById(id, notesArray) {
        const result = notesArray.filter(note => note.id === id)[0];
        return result;
};
function deleteNote(id, notesArray) {
        const startingNotes = notesArray;
        const finalNotes = startingNotes.splice(id, 1, )
        fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({notesArray: finalNotes}, null, 2)
        );
        return finalNotes.length
};

module.exports = {
        createNewNote,
        findById,
        deleteNote,
}