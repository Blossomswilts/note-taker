const backRouter = require('express').Router();
// this is needed to read and write to files
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// GET request for notes from db.json

backRouter.get('/notes', async (req, res) => {
    try {
        const notes = await fs.readFileSync('./db/db.json', 'utf8');
        res.json(JSON.parse(notes));
    } catch (err) {
        console.log(err);
    }
});

// POST request to add notes to db.json

backRouter.post('/notes', async (req, res) => {
    try {
        const notes = await fs.readFileSync('./db/db.json', 'utf8');
        const notesArray = JSON.parse(notes);
        const newNote = req.body;
        newNote.id = uuidv4();
        notesArray.push(newNote);
        await fs.writeFileSync('./db/db.json', JSON.stringify(notesArray));
        res.json(notesArray);
    } catch (err) {
        console.log(err);
    }
});

// DELETE request to delete notes from db.json

backRouter.delete('/notes/:id', async (req, res) => {
    try {
        const notes = await fs.readFileSync('./db/db.json', 'utf8');
        const notesArray = JSON.parse(notes);
        const deleteNote = notesArray.filter(note => note.id !== req.params.id);
        await fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));
        res.json(deleteNote);
    } catch (err) {
        console.log(err);
    }
});

// export the router to server.js
module.exports = backRouter;
