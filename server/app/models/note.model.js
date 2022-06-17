const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    link: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);