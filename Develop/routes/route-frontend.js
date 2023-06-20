const frontRouter = require('express').Router();
const path = require('path');

// GET route for homepage
// This will allow the user to view the homepage
frontRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET route for notes page
// This will allow the user to view the notes, which is shown through index.js in Develop\public\js
frontRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Export router
// To send to server.js
module.exports = frontRouter;
