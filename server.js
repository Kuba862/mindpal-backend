const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const addNoteRoute = require('./routes/addNoteRoute');
const allNotesRoute = require('./routes/allNotesRoute');
const editNoteRoute = require('./routes/editNoteRoute');
const deleteNoteRoute = require('./routes/deleteNoteRoute');

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json({ extended: false }));

app.use('/api/notes', addNoteRoute);
app.use('/api/notes', allNotesRoute);
app.use('/api/notes', editNoteRoute);
app.use('/api/notes', deleteNoteRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));