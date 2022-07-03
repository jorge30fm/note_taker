const fs = require('fs');
const {createNewNote, findById, deleteNote} =require('../lib/notes');
const notesArray = [
  {
    title: "Test1",
    text: "Test1",
    id: "1"
  },
  {
    title: "Test2",
    text: "Test2",
    id: "2"
  },
  {
    title: "Test3",
    text: "Test3",
    id: "3"
  },
]


test('Creates a notes object', () => {
        const testArray = notesArray
        const note = createNewNote(
                {
                title: 'test note Title',
                text: 'test note text',
                id: 'test ID'
                },
                testArray
        );
        expect(note.title).toBe('test note Title');
        expect(note.text).toBe('test note text');
        expect(note.id).toBe('test ID');
});

test('finds note by id', () => {
        const testArray = notesArray
        const result = findById('3', testArray);
        expect(result.title).toBe('Test3');
});

test('deletes note object', () => {
        const testArray = notesArray;
        const testArrayLength = testArray.length;
        const endingArrayLength = deleteNote('1', testArray);

        expect(endingArrayLength).toEqual(testArrayLength - 1);
})