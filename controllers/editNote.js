const Note = require('../models/NoteModel');
const dotenv = require('dotenv');

dotenv.config();

const editNote = async (req, res) => {
  try {
    const { id, title, content } = req.body;
    console.log(req.body);

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    note.title = title;
    note.content = content;

    await note.save();

    return res.status(200).json({ message: 'Note updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = editNote;
