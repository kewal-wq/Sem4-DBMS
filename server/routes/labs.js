const express = require('express');
const router = express.Router();
const labs = require('../controllers/labs');

router.get('/getLabs', labs.getLabs);




module.exports = router;