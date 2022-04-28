const express = require('express');
const router = express.Router();
const complex = require('../controllers/complex');

router.get('/complex/taLab', complex.getComplex1);
router.get("/complex/theoryProf", complex.getComplex2);
router.get("/complex/profTheory", complex.getComplex3);
router.get("/complex/orderLab", complex.getComplex4);
router.get("/complex/orderProf", complex.getComplex5);





module.exports = router;