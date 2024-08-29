const express = require('express');
const router = express.Router();
const editNote = require('../controllers/editNote');

router.post('/edit-note', editNote);

module.exports = router;