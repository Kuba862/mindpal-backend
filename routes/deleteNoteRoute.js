const express = require('express');
const router = express.Router();
const deleteNote = require('../controllers/deleteNote');

router.delete('/delete-note', deleteNote);

module.exports = router;