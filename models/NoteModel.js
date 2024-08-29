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
            return now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
        }
    }
});

module.exports = mongoose.model('Note', NoteSchema);