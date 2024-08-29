const express = require('express');
const router = express.Router();
const allNotes = require('../controllers/allNotes');

router.get('/all-notes', allNotes);

module.exports = router;