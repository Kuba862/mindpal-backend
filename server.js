const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const addNoteRoute = require('./routes/addNoteRoute');

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json({ extended: false }));

app.use('/api/add-note', addNoteRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));