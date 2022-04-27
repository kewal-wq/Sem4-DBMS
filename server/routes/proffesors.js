const express = require('express');
const router = express.Router();
const proffesors = require('../controllers/professors');

router.get("/getProfessors", proffesors.getProfessors);
router.get("/getProfessor/:profId", proffesors.getProfessor)
router.post("/insertProfessor", proffesors.insertProfessor);
router.put("/editProfessor/:profId", proffesors.updateProfessor);
router.delete("/deleteProfessor/:profId", proffesors.deleteProfessor);

module.exports = router;
