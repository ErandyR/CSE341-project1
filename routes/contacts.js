const express = require('express');
const router = express.Router();

const contacts = require('../controllers/contacts');

router.get('/', contacts.getAllContacts);
router.get('/:id', contacts.getContactById);

module.exports = router;