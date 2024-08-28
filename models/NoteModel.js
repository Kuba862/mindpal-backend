const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: () => {
            const now = new Date();
            const day = now.getDate();
            const month = now.getMonth() + 1; // JavaScript months are 0-11
            return `${day}-${month}`;
        }
    }
});

module.exports = mongoose.model('Note', NoteSchema);