const express = require('express');
const router = express.Router();
const TAs = require('../controllers/teaching_assistants');

router.get("/getTAs", TAs.getTAs);
router.get("/getTAs/:TAId", TAs.getTA);
router.post("/insertTA", TAs.insertTA);
router.put("/editTA/:TAId", TAs.updateTA);
router.delete("/deleteTA/:TAId", TAs.deleteTA);

module.exports = router;