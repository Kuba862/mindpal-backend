const Note = require('../models/NoteModel');
const dotenv = require('dotenv');

dotenv.config();

const addNewNote = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newNote = new Note({
            title,
            content
        });

        await newNote.save();
        res.json(newNote);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = addNewNote;