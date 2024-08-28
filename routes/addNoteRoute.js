const express = require('express');
const router = express.Router();
const addNewNote = require('../controllers/addNewNote');

router.post('/add', addNewNote);

module.exports = router;