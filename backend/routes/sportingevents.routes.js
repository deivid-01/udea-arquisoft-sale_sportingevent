const express = require('express');
const router = express.Router();


const event = require('../controllers/event.controller');
router.get('/', event.getEvents);
router.post('/', event.createEvent);


module.exports = router;
