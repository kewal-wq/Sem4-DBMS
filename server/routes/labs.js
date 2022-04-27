const express = require('express');
const router = express.Router();
const labs = require('../controllers/labs');

router.get('/getLabs', labs.getLabs);
router.get("/getLab/:CourseName", labs.getOneLab);
router.put('/updateLab/:CourseName', labs.updateLab);
router.post("/createLab", labs.insertLab);
router.delete("/deleteLab/:CourseName", labs.deleteLab);



module.exports = router;