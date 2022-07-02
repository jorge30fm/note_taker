const router = require('express').Router();

const {createNewNote, findById, updateNote} = require('../../lib/notes');
const {notesArray} = require('../../db/db.json');

//GET ALL notes
router.get('/notes', (req, res) => {
        let results = notesArray;
        res.json(results);
});

//GET ONE note
router.get('/notes/:id', (req, res) => {
        let results = findById(req.params.id, notesArray);
        if (results) {
                res.json(results);
        } else {
                res.send(404);
        }
});

//POST a note
router.post('/notes', (req, res) => {
        req.body.id = notesArray.length.toString();
        const note = createNewNote(req.body, notesArray);
        notesArray.push(req.body);
        res.json(note)
});

router.put('/notes/:id', (req, res) =>{
})
//UPDATE a note


//DELETE a note


module.exports = router;
