const express = require('express');
const router = express.Router();
const confessionController = require('../controllers/confessionController');

/**
 * Routes Layer: Receives HTTP requests and delegates them immediately to the controller.
 * Contains no business logic.
 */

router.post('/', confessionController.createConfession);
router.get('/', confessionController.getConfessions);

module.exports = router;
