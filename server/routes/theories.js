const express = require('express');
const router = express.Router();
const theories = require('../controllers/theories');

router.get("/getTheories", theories.getTheories);
router.post("/insertTheory", theories.insertTheory);
router.put("/editTheory/:CourseName", theories.updateTheory);
router.delete("/deleteTheory/:CourseName", theories.deleteTheory);

module.exports = router;