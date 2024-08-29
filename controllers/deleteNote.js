const Note = require('../models/NoteModel');
const dotenv = require('dotenv');

dotenv.config();

const deleteNote = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id)
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = deleteNote;
