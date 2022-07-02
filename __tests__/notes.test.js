const fs = require('fs');
const {createNewNote, findById, deleteNote} =require('../lib/notes');
const { notesArray} = require('../db/db.json');

test('Creates a notes object', () => {
        const note = createNewNote(
                {
                title: 'test note Title',
                text: 'test note text',
                id: 'test ID'
                },
                notesArray
        );
        expect(note.title).toBe('test note Title');
        expect(note.text).toBe('test note text');
        expect(note.id).toBe('test ID');
});

test('finds note by id', () => {
        const startingNotes = [
                {
                  "title": "Test Title",
                  "text": "Test text",
                  "id": "0"
                },
                {
                  "title": "Note1",
                  "text": "note 1 text",
                  "id": "1"
                },
                {
                  "title": "note2",
                  "text": "note 2text",
                  "id": "2"
                },
                {
                  "title": "test note Title",
                  "text": "test note text",
                  "id": "3"
                },
                {
                  "title": "Test Title12222222222",
                  "text": "Test text2",
                  "id": "4"
                }
              ]
        const result = findById('3', startingNotes);
        expect(result.title).toBe('test note Title');
});

test('deletes note object', () => {
        const startingNotes = notesArray;
        const startingNotesLenght = startingNotes.length;
        const endingArrayLength = deleteNote(1, startingNotes)

        expect(endingArrayLength).toEqual(startingNotesLenght - 1);
})