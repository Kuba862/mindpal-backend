const Note = require('../models/NoteModel');
const dotenv = require('dotenv');

dotenv.config();

const allNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = allNotes;