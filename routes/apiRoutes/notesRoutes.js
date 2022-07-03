const router = require('express').Router();
const uuid = require('uuid');
const {createNewNote, findById, deleteNote} = require('../../lib/notes');
const {notesArray} = require('../../db/db.json');

//GET ALL notes
router.get('/notes', (req, res) => {
        let results = notesArray;
        if (!results) {
                res.send(404);
        }
        res.json(results);
});

//GET ONE note
router.get('/notes/:id', (req, res) => {
        let result = findById(req.params.id, notesArray);
        if (!result) {
                res.send(404);
        }
        res.json(result);
});

//POST a note
router.post('/notes', (req, res) => {
        //generates a unique id
        req.body.id = uuid.v4();
        const note = createNewNote(req.body, notesArray);
        notesArray.push(req.body);
        res.json(note)
});

//DELETE a note
router.delete('/notes/:id', (req, res) =>{
        const result = deleteNote(req.params.id, notesArray)
        if (!result) {
                res.send(404)
        }
        res.send(notesArray);
})


module.exports = router;
