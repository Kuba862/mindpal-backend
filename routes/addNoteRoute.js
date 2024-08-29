const express = require('express');
const router = express.Router();
const addNewNote = require('../controllers/addNewNote');

router.post('/add-note', addNewNote);

module.exports = router;