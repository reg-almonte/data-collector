module.exports = (app) => {
    const note = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/note', note.create);

    // Retrieve all Notes
    app.get('/note', note.findAll);

    // Retrieve a single Note with noteId
    app.get('/note/:noteId', note.findOne);

    // Update a Note with noteId
    app.put('/note/:noteId', note.update);

    // Delete a Note with noteId
    app.delete('/note/:noteId', note.delete);
}