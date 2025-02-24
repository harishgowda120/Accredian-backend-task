const express = require('express');
const { submitReferral } = require('../controllers/referralController');

const router = express.Router();

router.post('/refer', submitReferral);

module.exports = router;